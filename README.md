# YOU-DO App

[![Netlify Status](https://api.netlify.com/api/v1/badges/0462fee4-8fed-4183-a3aa-8d31f8d44098/deploy-status)](https://app.netlify.com/sites/you-do/deploys)

## Get Started
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name
1. Open the `/public/index.html` file and change the `title` attribute to the name of your application
1. Rename the `.env.local.sample` file to `.env.local` file. The final file name should be `.env.local`
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short
1. From your command line, be in the root directory and run `npx husky install`
1. To start your application, run `npm start`

Below are the steps to get setup, which you should already be very familiar with:
1. Create a firebase app named `YOU-DO-App`
2. Add authentication to the app (will use later)
3. Setup a firebase database
4. Add Sample Data to Your Database
5. Add your firebase creds to the `.env` file
6. Review the [MVP wireframe](https://www.figma.com/file/4YVF79vgSfeSj0H1G9HYDy/YOU-DO-MVP)
7. CODE!

## IN CLASS
- [Slide Deck](https://docs.google.com/presentation/d/1P8hMbGYM_9V8DNiJBH28TysYQPZvSQaYaqUNi1YcO6c/edit?usp=sharing)

### CRUD
- [Set up firebase](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/1/files)
- [Add useEffect](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/2/files)
- [Map Todos](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/3/files)
- [Todo Component](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/4/files)
- [Create a Todo](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/5/files)
- [Pass functions as props](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/7/files)
- [Refactor form to allow update](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/6/files)
- [Update todo name in form](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/8/files)
- [Styling using `styled-components` package](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/11/files)

### ADVANCED
- [Add Routing to Application without Categories](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/16/files)
- [Authentication without Categories](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/17/files)
- [Categories on the DOM](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/13/files)
- [Add Routing to Application with Categories](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/15/files)
- [Authentication with Categories](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/18/files)

## CRUD Acceptance Criteria
NOTE: **DO NOT** make style changes. Follow the wireframe as designed as it uses Bootstrap Components that will make your app development faster. When you complete CRUD, move on to the Advanced goals.

[CRUD Sample App](https://you-do.netlify.app/)

<img width="889" alt="Screen Shot 2021-10-12 at 8 38 38 PM" src="https://user-images.githubusercontent.com/29741570/137052040-ed3d9e25-c53b-46a5-a2f9-47c4d0e44b70.png">


### READ
- As a user, I can read all YOU-DO items in the database

### CREATE
- As a user, I can add an item to my YOU-DO list by typing in the input and pressing submit
- As a user, when I press submit, I should see the newly added YOU-DO on the DOM

### DELETE
- As a user, I can delete a YOU-DO by pressing a red button that reads "DELETE"
- As a user, when I press delete, the YOU-DO should be deleted from firebase and I should no longer see it on the DOM

### UPDATE `COMPLETE` ATTRIBUTE on YOU-DO
- As a user, I can complete a YOU-DO item by pressing a green button that reads "COMPLETE"
- As a user, when I press complete, I should no longer see the item on the DOM and the complete attribute should update in firebase to `true`

### UPDATE NAME
- As a user, I should be able to edit a YOU-DO using the same form used to create a YOU-DO.
- As a user, I can edit a YOU-DO by pressing a blue button that reads "EDIT"
- As a user, when I press edit, the form should contain the YOU-DO value and the submit button text should change to "UPDATE"
- As a user, when I press the update button on the form:
  - any changes made to the YOU-DO should be patched to firebase
  - the DOM should update with the new value
  - the input should be cleared
  - the form state should be reset

### STYLE AND FINISHING TOUCHES
- As a user, I want to see the designs from the wireframe
- As an engineering hiring manager, I want to see a README that reflects the details of the project with the software engineers details and not THESE instructions.

## ADVANCED Acceptance Critieria
- Review the [STRETCH wireframe](https://www.figma.com/file/ggEHuoIjQoUOLTylmQZnTK/YOU-DO-STRETCH)
- [Advanced Sample App](https://advanced-complete--you-do.netlify.app/)

<img width="823" alt="Screen Shot 2021-10-13 at 3 52 13 PM" src="https://user-images.githubusercontent.com/29741570/137210978-37ed657d-a549-4339-8817-fa0b712b2502.png">


### ADD CATEGORIES
- As a user, I should be able to select from a pre-defined list of categories for the YOU-DOs I create.
- As a user, when I complete the form to submit a YOU-DO, the newly created YOU-DO should be visible on the DOM under the specified category and the category should update in firebase to the category I selected.
- As a user, when I edit a YOU-DO and submit it, I should see the updated YOU-DO on the DOM under the chosen category.

### ROUTING
- As a user, I should see an affordance that allows me to switch views (See wireframe)
- As a user, if I select "View Completed" I should only see the completed YOU-DOs and whatever is shown in the wireframe
- As a user, if I select "View Completed" I should only see the URL in the web browser update to `.../completed`

### AUTHENTICATION
- As a user, I should be able to log in to the application
  - No views should be available for me until I login
  - I should only see my YOU-DOs upon logging in to the application

### FINISHING TOUCHES
- As an engineering hiring manager, I want to see a README that reflects the details of the project with the software engineers details and not THESE instructions.
  - ERD
  - Wireframe Link
  - Deployed App Link
  - Code Sample
  - Loom Video

### Deploying on Netlify

- Build Command: `yarn build`
- Publish directory: `build`
- **Add Environmental Variables (NOT REQUIRED for Apps that do not use API Keys, etc)**
    - Any Enviromental variables you are using in your `.env.local` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.
- **Update Firebase URL Settings**
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
# Your own learning
If you are interested in setting up your own project for things outside of class, you can run the command to start a React project `npx create-react-app {APP_NAME}` and setup all the files and structures from scratch.

- [Completed CRUD Project](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/10/files)
- [Completed Advanced Project](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/14/files)
