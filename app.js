//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const homeStartingContent = "Step into a realm where words dance and ideas flourish – welcome to Daily Journal! Here, we invite you to explore a tapestry of topics, from the latest advancements in science and the arts, to the nuances of well-being and the environment. Our platform is more than a blog; it's a celebration of diverse perspectives and a hub for curious minds. Join us in this journey of continuous learning, where each article is a gateway to new horizons. Embark on a daily adventure with Daily Journal and unlock the potential of each day.Fuel your curiosity, ignite your imagination, and broaden your understanding as you immerse yourself in our carefully curated articles penned by passionate writers and experts. Whether you're here to unwind with captivating stories or to stay informed about the world's latest trends, Daily Journal is your companion on this quest for knowledge. Join our vibrant community by engaging in thought-provoking discussions and sharing your own insights. Make browsing Daily Journal a cherished part of your routine, and embark on a journey where learning knows no bounds. Your daily dose of inspiration awaits – let's explore the extraordinary together!";
const aboutContent = "At Daily Journal, our mission is to create a platform that transcends the ordinary, offering a gateway to the extraordinary world of knowledge and inspiration. Established with a passion for words and a dedication to fostering a community of curious minds, Daily Journal has evolved into a digital haven where diverse ideas converge.Our team of writers, thinkers, and enthusiasts come from all corners of the globe, united by a shared love for learning and a belief in the power of storytelling. With an unwavering commitment to quality and authenticity, we strive to bring you engaging content that sparks conversations, ignites imaginations, and empowers you to navigate the complexities of the modern world.Beyond being a repository of articles, Daily Journal is a reflection of the collective journey of discovery. Our dedication to providing a rich tapestry of topics – from the arts and sciences to lifestyle and current events – underscores our commitment to celebrating the multifaceted nature of human experiences.We invite you to delve into our pages, to explore, question, and evolve alongside us. Together, let's embark on a voyage that transcends borders, erases boundaries, and unites us through the universal language of knowledge. Daily Journal isn't just a blog; it's a celebration of the human spirit's unending quest for understanding. Join us in this adventure, and let's shape a brighter, more informed tomorrow, one word at a time.";
const contactContent = "We're delighted to connect with you. Whether you're looking to share feedback, explore partnership opportunities, seek technical assistance, or contribute your insights, Daily Journal is just an email away at [bhaskarkulshrestha031@gmail.com]. Join our dynamic community  to engage in discussions and stay updated on the latest articles. Never miss a beat by subscribing to our newsletter, and be part of our journey in spreading inspiration and knowledge. Your connection fuels our passion – let's create and learn together!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-bk:Bhaskar@cluster0.tj74paz.mongodb.net/blogDB", { useNewUrlParser: true });

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);


app.get("/", async function (req, res) {
  const posts = await Post.find();
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
  });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", async function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  await post.save();
  // After saving the new post, redirect to the home page to show the latest posts.
  res.redirect("/"); // Redirect to the home page.

});

var tempid = undefined;
app.get("/update/:postId", function (req, res) {
  const requestedPostId = req.params.postId;
  tempid = requestedPostId;
  if (!mongoose.Types.ObjectId.isValid(requestedPostId)) {
    // Invalid post ID, handle accordingly
    return res.status(404).render("error");
  }

  Post.findOne({ _id: requestedPostId })
    .then(foundPost => {
      if (!foundPost) {
        return res.status(404).render("error");
      } else {
        res.render("update", { title: foundPost.title, content: foundPost.content });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).render("error"); // Render an error page for server errors
    });
});

app.post("/update", async function (req, res) {
  const postId = tempid; // Retrieve the post ID from the form
  console.log(req.body.postId);
  // Check if the post ID is valid
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).render("error");
  }

  try {
    const existingPost = await Post.findById(postId);

    existingPost.title = req.body.postTitle;
    existingPost.content = req.body.postBody;

    await existingPost.save();

    // Redirect back to the home page
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).render("error");
  }
});




app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  if (!mongoose.Types.ObjectId.isValid(requestedPostId)) {
    // Invalid post ID, handle accordingly
    return res.status(404).render("error");
  }

  Post.findOne({ _id: requestedPostId })
    .then(foundPost => {
      if (!foundPost) {
        return res.status(404).render("error");
      } else {
        res.render("post", { title: foundPost.title, content: foundPost.content });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).render("error"); // Render an error page for server errors
    });
});



app.post("/delete", function (req, res) {

  const checkedItemId = req.body.checkbox;
  // const listName = req.body.listName;



  Post.findByIdAndRemove(checkedItemId)
    .then(() => {
      console.log("succesfully deleted checked Item.");
    })
    .catch(err => {
      console.error(err);
    });
  res.redirect("/");



});



app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
