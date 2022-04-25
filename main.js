Final Assessment Requirements

Overview
    The final term 2 assessment is used to guage whether or not a student is capable of semi-independent fullstack development. A student is expected to be able to create a fullstack application consisting of a front-end client and a back-end server hosted on a public domain. The front-end libraries used should include React and React-Router (Redux optional). The back-end libraries should include Express and Mongo (Mongoose optional).

    The students will have the option to create their own project for this assessment. The only requirement is that the project must utilize the entire stack of technologies mentioned above. If the student is creating their own project, they must outline and show the project scope to the instructors and the instructors must authorize the project scope before they start. If a student does not wish to implement their own project, a list of requirements for a fake E-Commerce store will be provided to them for implementation instead.

    For the evaluation the instructors will take on the role of "managers" and "QA." The instructors will be able to discuss and authorize project goals, tasks and scope with the students. They will also act as Quality Assurance for the student's web application. When a student finishes a project task/feature, they are required to deploy the updated code to the public domain/host at which point the instructors will test the code. The instructors will then give feedback on the task/feature including whether or not the feature passed or failed. 

    The evaluation is meant to simulate the experience of a typical semi-independent work environment. Thus, while the instructors are allowed to give feedback in a manager/QA role, they are not allowed to give feedback as a developer. The students must implement all their project requirements on their own using the all resources of the internet at their disposal. However, there may be instances in which a student gets "stuck" on a problem they have never encountered before. Therefore, every student will be allowed to ask 3 "Developer Questions" per week, with no carryover, for total of 6 questions for the entire evaluation. Instructors are encouraged to give the students the overall direction of the answer instead of providing the entire solution itself, but can provide more information if needed.

Required Functionality
    Front-End Client Must
        Have at least 2 separate page views managed by React-Router
        Have a navigation bar implemented using React-Router
        Provide the user the ability to input information
        Implement some level of application logic that takes the user information and uses it to provide a service for the user
        Communicate with the server in order to persist and process the user information

    Back-End Server Must
        Communicate with the client to send/receive user information
        Persist the user information in a database

E-Commerce Store Required Functionality
    Front-End Client
        Navigation Bar
            Display a list of links to the various application pages
            If the user is logged in, display the current logged in user. Otherwise, display a link to the login page.
            Have a logout button that will reset the current user information in the client.

        Products Page
            Display a list of products to the user.
                The list will be fetched from the Express server. The Express server will in turn fetch the list from the fakestore API. 
            Each product in the list should be a react component. The component should have the following functionality
                Display the product image
                Display the product title
                Display the product category
                Display the product description
                Display the product price
                Have a button that will add the product to the user's cart

        User Page
            Display a list of the user's transaction history

        Cart Page
            Display a list of products in the user's cart
            Have a button for a user to empty their cart
            Have a button for a user to "checkout"
                On click, the button should send the list of productId's in the cart and the current logged in user's userId to the server as a new Transaction. The client should wait for the request to resolve into either a transaction success or failure and expose the result to the user as either a successful transaction or a failed transaction.

        Login Page
            Display an input field for the user email
            Have a login button. 
                On click, the button should send the user email to the server and wait for a response. If the server can find the user in the database of if the server can create this user as a new user, the server should respond with the userId. If the server responds with the userId, save the current user email as the currently logged in user. 

    Back-End Server
        Routes
            GET /Product/List
                Will make a request to the fakestore API to get a list of products to be returned to the client.
                Optionally, the list of products can be fetched from fakestore once and then saved to the mongo database instead.
            POST /Transaction
                Will recieve a new transaction request from the client and will attempt to save the new transaction in the mongo database. The transactionId of the transaction database document should be saved on the user's database document in a transactionHistory array. If the save succeeds, the server should send a success: true response to the client. If the save fails, the server should send a success: false response to the client.
            GET /User/History
                Will get the user's transaction history from the mongo database and return that as a list to the client.
            POST /User/Login
                Will recieve a user email from the client. The server should search the database to see if the user exists and if so, send the user's userId as a response. If the user does not exist, create a new user in the database and send the userId as a response.

        Database
            User
                userId
                email
                transactionHistory
                lastUpdatedDate
            Transaction
                transactionId
                productIdList
                createdDate
