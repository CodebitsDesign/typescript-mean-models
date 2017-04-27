   
# typescript-mean-models

The models of the Typescript MEAN(MongoDB-Express-Angular-Node) Stack Boilerplate.

## Models

Since both the backend and the frontend are using the same data-structure, the data-models are stored and maintained independently.

In order to write new models, add a new `my-model.model.ts` file and export it in `index.d.ts`. Once you're done, you can `npm version patch` (or `yarn version`) and then `npm publish` (or `yarn publish`). Like this, the models are retrievable by `npm` (or, `yarn`) in the `backend-` and `frontend-`projects, in order for them to be truly separated into their own git repos.


Step 1. Updates the package version.
  <https://yarnpkg.com/en/docs/cli/version>
```bash
// question New Version:
$ yarn version
```
> ```js
> info Current version: 0.0.1
> question New version: 0.1.0
> info New version: 0.1.0
> Done in 9.42s.
> ```

Step 2-A. Publishes a package to the `npm` registry.
  <https://yarnpkg.com/en/docs/cli/publish>
```bash
$ yarn publish
```
> Publishes the package defined by the `package.json` in the current directory.


Step 2-B. Publishes a package to the `github` repository.

(1). [Create a new repository](https://help.github.com/articles/creating-a-new-repository/) on GitHub.

 To avoid errors, do not initialize the new repository with `README`, `license`, or `gitignore` files. 
```
Repository name: typescript-mean-models
```

(2). Open Terminal and change the current working directory to your local project. 
Then process git commands:

> Show the working tree status:

```bash
$ git status
```

> If you haven't initialised a Git repository in the project directory, 
> use the below command to initialise the local directory as Git repository:

```bash
$ git init 
```

> Push the local repository to `Github` site:

```bash
$ git add .
$ git commit -m "first commit"
$ git remote add origin https://github.com/CodebitsDesign/typescript-mean-models.git
$ git push -u origin master
```
> > and you can simply use the command `git push` next time.

