// using the connection string of the mongoDB and user models schema create a nextauth using the gooogle provider.

// callback options to
// 1. invoke on successfull sign in using the user profile {name & password}
// 2. connect to DB
// 3. check if the user is exitsing.
// 4. if the user might use auto login through Google-oauth/nextauth . so if not found add the user to the database
// 4. a. - user name validation check creation using the model.create function

// 5. return the user or voolean indicator for user

// 6. induce sessions using the user id which has login credentials true.
