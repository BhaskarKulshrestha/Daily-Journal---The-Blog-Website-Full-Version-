# DAILY-JOURNAL---The-Blog-Website-Full-Version-

## Introduction
The "DAILY-JOURNAL - Your Blog Area" is a web application designed for users who want to maintain a personal blog. This repository provides the complete source code of the application along with the necessary documentation to run it on a local machine.

**------------------------------ > [CHECK OUT THE WORKING APPLICATION](https://dailyjournalblogs.onrender.com) < -------------------------------------**

## Features
The "DAILY-JOURNAL - Your Blog Area" application provides the following features to its users:
- Create Blog Posts: Users can create, new blog posts on their personal blog.
- View Blog Posts: Users can view their own blog posts as well as those of other users.
- Update Blog Post: Users can update all the neccessary blogs using the update link.
- Delete Blog Post: Users can delete the neccessary blogs using the delete link.
- Search: Users can search for blog posts based on keywords.
- Responsive Design: The application has a responsive design that works on different screen sizes.
- User-Friendly Interface: The interface of the application is designed to be easy to use and navigate.

# ScreenShots of the Website:

------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/first%20look.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/about%20us.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/contact.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/compose.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/new%20post%20added.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/read%20more%20buton.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/update%20section.png)
------------------------------------------------------------------------------------------------------------------------------
![](https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-/blob/main/images/error%20page.png)
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------


## Setup
To run the "DAILY-JOURNAL - Your Blog Area" application on a local machine, follow these steps:
- Clone the repository to your local machine using the command: git clone https://github.com/BhaskarKulshrestha/Daily-Journal---The-Blog-Website-Full-Version-.git
- Install the necessary dependencies by running the command: npm install
- Start the application by running the command: node app.js
- Open a web browser and go to http://localhost:3000 to access the application.

## Technologies Used:
The "Daily-Journal---The-Blog-Website-Full-Version-" application uses the following technologies:
- Node.js: A JavaScript runtime environment that runs on the server side.
- Express.js: A web application framework for Node.js.
- EJS: A templating engine for Node.js.
- Bootstrap: A front-end framework for building responsive websites.
- MongoDB: MongoDB is a NoSQL database used for storing and managing unstructured or semi-structured data in a flexible, scalable, and document-oriented manner.
- Mongoose : Mongoose is an Object Data Modeling (ODM) library for MongoDB, simplifying interaction with MongoDB by providing a structured schema-based approach in Node.js applications.

## Extra thing used => Lodash
- Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.
- here we used _.lowerCase([string='']) :
```
Arguments
[string=''] (string): The string to convert.
Returns
(string): Returns the lower cased string.
```
Example:
```
_.lowerCase('--Foo-Bar--');
// => 'foo bar'
 
_.lowerCase('fooBar');
// => 'foo bar'
 
_.lowerCase('__FOO_BAR__');
// => 'foo bar'
```

## Project Structure
- **app.js**: Main server file containing the Express application setup.
- **views/**: Contains EJS templates for different pages.
- **public/**: Stores static assets like CSS files and images.
- **partials/**: Contains reusable EJS partial templates for the header and footer.
- **models/**: Defines the Mongoose schema for articles.
- **package.json**: Lists project dependencies and scripts

# Daily Journal Website - Code Functionality

## 1. Server Setup (`app.js`):
- Import necessary modules like Express, EJS, Mongoose, and other dependencies.
- Set up the Express application.
- Configure middleware like `body-parser` to parse incoming request bodies.
- Configure the view engine to use EJS templates.
- Connect to the MongoDB database using Mongoose by providing the connection URL.
- Define the Article schema using Mongoose, specifying the fields like `title` and `content`.
- Set up routes for different functionalities:
  - **Home Page:** Display a list of articles fetched from the database.
  - **Read Article:** Display the full content of a selected article.
  - **Compose Page:** Render a form to create a new article.
  - **Edit Article:** Render a form to edit an existing article.
  - **About Page:** Display information about the website's mission.
  - **Contact Page:** Provide a way for users to contact the creators.
- Define route handlers to perform CRUD operations:
  - **Create Article:** Save a new article to the database.
  - **Edit Article:** Update an article's title and content in the database.
  - **Delete Article:** Remove an article from the database.
- Set up the server to listen on a specific port (e.g., 3000) for incoming requests.

## 2. Views (`views/`):
- Create EJS templates for various pages, including `home.ejs`, `article.ejs`, `compose.ejs`, `edit.ejs`, `about.ejs`, and `contact.ejs`.
- Utilize EJS syntax to render dynamic content, such as article titles, content, and form inputs.
- Include EJS partials for the header and footer sections to maintain consistent styling across pages.

## 3. Static Assets (`public/`):
- Store static files like CSS stylesheets, images, and client-side JavaScript scripts.
- Link these files in the EJS templates to apply styling and interactivity to the website.

## 4. Mongoose Models (`models/`):
- Define the Mongoose schema for the `Article` model.
- The schema specifies the structure of an article, including fields like `title` and `content`.

## 5. Functionality Flow:
- When a user accesses the home page, the server fetches a list of articles from the database and renders them using the `home.ejs` template.
- Clicking on an article title leads to the display of the full article content using the `article.ejs` template.
- The "Compose" link takes the user to the form on the `compose.ejs` page, where they can create a new article.
- Editing an article allows users to modify its title and content using the `edit.ejs` template.
- Deleting an article removes it from the database and redirects the user back to the home page.
- The "About" and "Contact" pages provide information about the website and a way to contact the creators.

## Mongoose Functions Explanation

1. **Setting Up Mongoose Connection (`mongoose.connect()`)**:
   - This function establishes a connection to the MongoDB database using the provided connection URL.
   - It enables the application to interact with the database using Mongoose models.

2. **Creating a Mongoose Model (`const Article = mongoose.model('Article', articleSchema)`)**:
   - Defines a model named "Article" with the specified schema (`articleSchema`).
   - Allows the application to create, read, update, and delete articles in the database.

3. **Creating a New Article (`const article = new Article({ title, content })`)**:
   - Creates a new instance of the Article model with provided title and content.
   - Represents a new article that can be saved to the database.

4. **Saving an Article (`article.save()`)**:
   - Saves the newly created article instance to the MongoDB database.
   - Once saved, the article becomes persistent and can be retrieved later.

5. **Querying for Articles (`Article.find()`, `Article.findOne()`, `Article.findById()`)**:
   - `Article.find()`: Retrieves an array of all articles from the database.
   - `Article.findOne()`: Retrieves a single article that matches the specified criteria.
   - `Article.findById()`: Retrieves an article based on its unique ID.

6. **Updating an Article (`Article.updateOne()`, `Article.findByIdAndUpdate()`)**:
   - `Article.updateOne()`: Updates one or more articles that match the specified criteria with new data.
   - `Article.findByIdAndUpdate()`: Finds an article by ID and updates its content.

7. **Deleting an Article (`Article.deleteOne()`, `Article.findByIdAndRemove()`)**:
   - `Article.deleteOne()`: Deletes a single article that matches the specified criteria.
   - `Article.findByIdAndRemove()`: Finds an article by ID and removes it from the database.

8. **Using Promises and Callbacks**:
   - Mongoose functions support both promises and callbacks for handling asynchronous operations.
   - Promises allow you to use `.then()` and `.catch()` for handling success and errors.
   - Callbacks can be used to define custom behavior after the operation completes.

9. **Mongoose Middleware (`articleSchema.pre()`)**:
   - Middleware functions are executed before or after specific actions, such as saving or removing a document.
   - In the project, middleware could be used for tasks like validating data before saving.

***Technologies Used:***

**1. Node.js:**

**- Advantages:** 
Node.js is a runtime environment that allows running JavaScript on the server-side. It provides non-blocking, event-driven architecture, making it efficient for handling a large number of connections. Its extensive package ecosystem (npm) simplifies development.
  
**- Disadvantages:** 
Single-threaded nature can lead to performance issues for CPU-intensive tasks. Asynchronous programming can be complex.

**- Future Scope:** 
Node.js continues to grow in popularity and is widely used for building scalable and real-time applications.
  
**2. Express.js:**

**- Advantages:** 
Express.js is a minimalistic web application framework for Node.js. It simplifies route handling, middleware usage, and request/response management. It's highly customizable and has a large community.

**- Disadvantages:**
Being minimalistic means some advanced features might need additional libraries.

**- Future Scope:** 
Express.js remains a go-to choice for building web applications and APIs with Node.js.
 
**3. EJS (Embedded JavaScript):**

**- Advantages:** 

- EJS is a templating engine for rendering dynamic HTML content. It allows embedding JavaScript within HTML, making it easy to generate dynamic pages.
- Disadvantages: Mixing code and HTML can sometimes make templates less readable or maintainable.
- Future Scope: EJS is still used for server-side rendering in Node.js applications, but newer front-end technologies like React and Vue.js are gaining more popularity.
 
**4. MongoDB:**

**- Advantages:** 
MongoDB is a NoSQL database known for its flexibility, scalability, and ease of use. It can handle unstructured data, and its document-based structure suits applications with evolving schemas.

**- Disadvantages:** 
Not suitable for complex transactions, might require denormalization, and lacks certain features of relational databases.

**- Future Scope:** 
MongoDB remains a popular choice for various types of applications, especially those requiring scalability and real-time data.
  
**5. HTML/CSS:**

**- Advantages:** 
HTML defines the structure of web content, and CSS is used for styling. They are fundamental for web development.

**- Disadvantages:**
CSS can become complex for larger applications, and browser compatibility can be an issue.

**- Future Scope:**
 HTML and CSS continue to evolve, with new features and standards being introduced regularly.

 ## Future Scope of the Project

1. **User Authentication and Authorization:** Implement user authentication and authorization mechanisms to allow users to register, log in, and manage their own articles. This could involve integrating technologies like Passport.js or JSON Web Tokens (JWT).

2. **Categories and Tags:** Enhance the article schema to include categories and tags. This will enable better organization and categorization of articles, making it easier for users to discover content of their interest.

3. **Rich Text Editor:** Integrate a rich text editor into the article creation process. This would allow authors to format their articles with headings, bullet points, images, and other styling options.

4. **Social Sharing and Comments:** Implement social sharing functionality to allow users to easily share articles on various social media platforms. Additionally, consider adding a commenting system where readers can engage in discussions about the articles.

5. **Search Functionality:** Integrate a search feature that enables users to search for articles based on keywords, categories, tags, or any other relevant criteria.

6. **User Profiles:** Create user profiles where authors can showcase their published articles and personal information. Readers can also follow their favorite authors.

7. **Article Analytics:** Provide authors with insights into how their articles are performing. This could include metrics like views, likes, shares, and time spent on each article.

8. **Responsive Design:** Ensure the web application is fully responsive and works seamlessly on various devices and screen sizes.

9. **Performance Optimization:** Implement caching mechanisms, optimize database queries, and utilize content delivery networks (CDNs) to enhance the performance and loading speed of the application.

10. **Multi-Language Support:** Add the ability to translate articles into multiple languages, increasing the accessibility and reach of the content.

11. **Version Control for Articles:** Implement a version control system for articles, allowing authors to track changes, revert to previous versions, and collaborate on articles.

12. **Offline Access and Progressive Web App (PWA):** Convert the application into a Progressive Web App to provide offline access to previously loaded articles and improve the overall user experience.

13. **Monetization Options:** If desired, explore options for monetizing the platform, such as integrating advertisements, offering premium content, or providing subscription-based access to certain articles.

14. **Integration with Other Platforms:** Enable seamless sharing and synchronization of articles with other blogging platforms or content management systems.

15. **Continuous Updates and Bug Fixes:** Regularly update the application with new features, security patches, and bug fixes to provide the best possible experience to users.






