
![django notion](https://github.com/TH-Activities/saturday-hack-night-template/assets/117498997/2db31367-8f96-4e88-8a8d-a1a75936204d)




# RidePool
The Carpooling Web Application is a Django-based platform designed to facilitate carpooling arrangements among users. With rising concerns about environmental sustainability and transportation efficiency, carpooling presents an attractive solution to reduce traffic congestion, lower carbon emissions, and promote social interaction.

### Key Features:

1) User Authentication: Users can register for accounts and log in securely to access the carpooling platform. User authentication ensures that only registered users can create or join carpooling requests and rides.

2) Carpooling Requests: The application allows users to create new carpooling requests by specifying their current location, destination, date, and time. Users can view a list of their own requests and search for available requests created by other users.

3) Carpooling Rides: Users can view a list of their own rides, including the details of rides they have joined. Additionally, users can search for available rides created by other users and join them to share transportation.

4) Navigation and User Profile: The application features a user-friendly navigation menu with options to access home, my requests, my rides, profile, and logout functionalities. Users can update their profile information and preferences as needed.

5) Admin Interface: The Django admin interface provides administrators with the ability to manage carpooling requests, rides, and user accounts. Administrators can add, edit, or delete records as necessary to maintain the integrity of the platform.

### Purpose:

The Carpooling Web Application aims to promote sustainable transportation practices by connecting users who are interested in sharing rides for their daily commutes, recreational activities, or special events. By providing a centralized platform for coordinating carpooling arrangements, the application seeks to reduce traffic congestion, lower transportation costs, and foster a sense of community among users.

### Target Audience:

The target audience for the Carpooling Web Application includes commuters, students, professionals, and anyone looking for convenient and eco-friendly transportation options. The platform caters to individuals who are interested in carpooling as a means of reducing their carbon footprint, saving money on transportation expenses, and building social connections with fellow travelers.


## Team members
1. [Venkidesh Venu](https://github.com/venkideshVenu)
2. [Nandu Rajesh](https://github.com/iammnandu)
3. [Ayoona Mariya John](https://github.com/Ayoona22)
## Link to product walkthrough
[link to video](Link Here)
## How it Works ?
1. Explaining the working of project


HTML Structure: The HTML file (index.html) defines the structure of the web page. It includes sections for the header, main content, and footer. The main content section contains forms for creating new carpooling requests, listing existing requests, and listing user's rides.

CSS Styling: The CSS file (style.css) contains styles to visually enhance the HTML elements. It defines styles for the header, navigation, forms, buttons, and footer to make the web page visually appealing.

JavaScript Interaction: The JavaScript file (front.js) contains code for client-side interactions. It handle form submissions, AJAX requests for fetching or submitting data asynchronously, or other frontend functionalities. However, the specific functionality of the JavaScript file is not provided in the given code snippet.

Django Setup: The Django project is structured according to Django's conventions. It includes a Django app named todo, which contains the main components of the project. The project's URLs, views, and models are defined within this app.

Models: The todo app contains Django models for representing carpooling requests and rides. These models define the structure of the database tables and contain fields such as location, destination, date, and time.

Views: The views (views.py in the todo app) handle HTTP requests and generate appropriate responses. They render HTML templates, process form submissions, interact with the database using Django ORM, and return data to the client.

URLs: The URL configuration (urls.py in the todo app) maps URL patterns to views. It defines the endpoints that users can access and specifies which view function should handle each endpoint.

Templates: The Django templates (HTML files in the templates/todo directory) are used to generate dynamic HTML content. They include template tags and filters to display data from the views and models.

Admin Interface: Django provides a built-in admin interface for managing database records. If the models are registered with the admin site, administrators can add, edit, and delete carpooling requests and rides through the admin interface.'''


2. Embed video of project demo.



## How to Run
### Install Dependencies: Install the required dependencies using pip. You may want to create a virtual environment before installing dependencies.

              pip install -r requirements.txt

### Run Migrations: Apply database migrations to set up the database schema.

              python manage.py migrate

### Run the Development Server: Start the Django development server.

           python manage.py runserver
