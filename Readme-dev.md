# EsriCH React Template
Starter template for Web Mapping Apps.

Key technologies:
- ``React``
- ``Vite``
- ``Typescript``
- ``ArcGIS Maps SDK for JS``

Furthermore:
- ``i18next`` for translations
- ``React Router`` for client-side routes
- ``zustand`` for state management
- ``eslint`` for code quality checking

## The Store
There are two types of data in the app: Component-data and global data. Component data is only used within a component or its children/parent (see About.tsx). Global data is data that has usages across the app, e. g. whether the user is signed in might be relevant for many components. This global data is maintained in a separate part of the application called store.

This template has a store set up with Zustand. It features one store module `AppStore`.

Data in the store can also easily be persisted in the Browser or a Backend.

Initial store values can be taken from the config file, url parameters or be declared inside the store.

## Config File
The `config.json` file is loaded asynchronously and copied to the dist folder on build. It can still be changed after deployment.


# Create a New Project

## Get the files into a new repo
1. Clone the Template into a temporary folder `git clone https://esridech@dev.azure.com/esridech/INT_ECH_Web/_git/EsriCH.Web.Template.React`
2. Go to Azure and create a new git repo.
3. Clone repository into your development folder `git clone <url>`
4. In Windows Explorer go to the folder where the template was cloned
5. Click "View" > "Show Hidden Elements" then delete the .git folder
6. Copy Paste the remainig content of this folder into your new project folder (README can be kept or overwritten)
7. Stage and commit the files: `git add .` and then `git commit -m "Initial commit"`
8. Rename local branch to master: `git branch -m main master`
9. Push to new remote master `git push -u origin master`
10. Remove main branch `git push origin --delete main`
11. In Azure go to the repo and set the master branch as Default Branch
12. `git checkout -b development` To create a local development branch
13. `git push -u origin development` To push the branch upstream

## Next steps
1. `npm i` then `npm start`