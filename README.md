# Cypress Job Application

This is a photo upload application for a tailored t-shirt application. In this example, we will consider that a t-shirt can be customized on 2 variations:
* Color - the color of the t-shirt.
* Fabric - the type of cloth used.
* A variable number of Images can be uploaded for each combination of Color+Fabric.

## Help + Testing

The steps below will take you all the way through this repo. It is assumed you have node and git installed.

**If you get stuck, here is more help:**

* [Cypress Docs](https://on.cypress.io)

### 1. Clone this repo

```bash
## clone this repo to a local directory
git clone https://github.com/77Diamonds/CypressJobApplication.git

## cd into the cloned repo
cd CypressJobApplication

## install the node_modules
npm install

## run cypress
npm run cytest
```

### 2. Cypress Interface

![cypress interface](images/cypress.png)

you can easily run all tests just by clicking `Run integration spec` or by clicking on a specific spec file

### 3. Creating new tests

create new tests inside integration folder make sure it ends with `.spec.js`