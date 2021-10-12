# YOU-DO App

[Sample App](https://you-do.netlify.app/)

<img width="974" alt="Screen Shot 2021-10-12 at 12 11 05 PM" src="https://user-images.githubusercontent.com/29741570/137000078-1e948f87-84f4-434c-a806-439e46ef424d.png">

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
### MVP
- [Set up firebase](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/1/files)
- [Add useEffect](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/2/files)
- [Map Todos](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/3/files)
- [Todo Component](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/4/files)
- [Create a Todo](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/5/files)
- [Pass functions as props](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/7/files)
- [Refactor form to allow update](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/6/files)
- [Update todo](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/8/files)
- [Styling using `styled-components` package](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/11/files)

### STRETCH
- Coming soon

## MVP Acceptance Criteria
NOTE: **DO NOT** make style changes. Follow the wireframe as designed as it uses Bootstrap Components that will make your app development faster. If you are able to complete MVP, move on to the stretch goals.

### READ
- As a user, I can read all YOU-DO items in the database

### CREATE
- As a user, I can add an item to my YOU-DO list by typing in the input and pressing submit
- As a user, when I press submit, I should see the newly added YOU-DO on the DOM

### DELETE
- As a user, I can delete a YOU-DO by pressing a red button that reads "DELETE"
- As a user, when I press delete, the YOU-DO should be deleted from firebase and I should no longer see it on the DOM

### UPDATE COMPLETE
- As a user, I can complete a YOU-DO item by pressing a green button that reads "COMPLETE"
- As a user, when I press complete, I should no longer see the item on the DOM and the complete attribute should update in firebase to `true`

### STYLE
- As a user, I want to see the designs from the wireframe

## STRETCH Acceptance Critieria
**DO THESE IN ORDER OR BE FIRED**
- Review the [STRETCH wireframe](https://www.figma.com/file/ggEHuoIjQoUOLTylmQZnTK/YOU-DO-STRETCH)

### UPDATE NAME
- As a user, I should be able to edit a YOU-DO using the same form used to create a YOU-DO.
- As a user, I can edit a YOU-DO by pressing a blue button that reads "EDIT"
- As a user, when I press edit, the form should contain the YOU-DO value and the submit button text should change to "UPDATE"
- As a user, when I press the update button on the form, any changes made to the YOU-DO should be patched to firebase and the DOM should update with the new value.
- As an engineering hiring manager, I want to see a README that reflects the details of the project with the software engineers details and not THESE instructions.

### ADD CATEGORIES
- As a user, I should be able to select from a pre-defined list of categories for the YOU-DOs I create.
- As a user, when I complete the form to submit a YOU-DO, the newly created YOU-DO should be visible on the DOM under the specified category and the category should update in firebase to the category I selected.
- As a user, when I edit a YOU-DO and submit it, I should see the updated YOU-DO on the DOM under the chosen category.

### ROUTING
- As a user, I should see an affordance that allows me to switch views (See wireframe)
- As a user, if I select "View Completed" I should only see the completed YOU-DOs and whatever is shown in the wireframe

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

[Completed Project](https://github.com/nss-evening-cohort-16/YOU-DO-react/pull/10/files)
