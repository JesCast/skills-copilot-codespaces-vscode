Create web server that can respond to the following routes:
- GET /comments - returns list of all comments
- POST /comments - creates a new comment
- GET /comments/:id - returns a single comment with the matching id
- PUT /comments/:id - updates a single comment with the matching id
- DELETE /comments/:id - deletes a single comment with the matching id

## Part 2 - Add a database
- Install Sequelize
- Create a database called "comments_db"
- Add a Comment model to your project
- Add a migration file to create the comments table
- Migrate the database
- Update your routes to use the database instead of the hard-coded array of comments

## Part 3 - Add a UI
- Add a file called index.html to the public folder
- Add a form to the index.html file that allows users to add new comments
- Add a button to each comment that allows users to delete that comment
- Add a button to each comment that allows users to edit that comment
- When a user clicks the edit button, the comment should be replaced with a form that allows them to edit the comment
- When a user submits the edit form, the comment should be updated in the database and the form should be replaced with the updated comment
- Add a button to each comment that allows users to like that comment
- When a user clicks the like button, the number of likes for that comment should be incremented in the database and the comment should be replaced with the updated comment

## Part 4 - Add users
- Add a User model to your project
- Add a migration file to create the users table
- Migrate the database
- Update your routes to use the database instead of the hard-coded array of users
- Add a form to the index.html file that allows users to add new users
- Update the comments table to include a user_id column
- Update the comments table to include a likes column
- Update the comments table to include a for