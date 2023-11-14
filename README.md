# git-manager

## Installing

`apt install git`

## U need intall Node.JS

For debian: `curl https://a.rawr.party/install/debian/node.js?v=18 | sh`

Thanks for the easy installer [@gerrustalker](https://github.com/gerrustalker)

[Create your PAT key](https://github.com/settings/tokens?type=beta)

## Examples

### Clone

```js
const testing = new gitsync("username_on_github", "NAME_GITHUB_REPO", "/home/path/repos", "Your PAT Key")
// NAME_GITHUB_REPO this parameter MUST NOT lead to a repository, it leads to the directory where all repositories are located.
// To work correctly, a github repository must match the name of NAME_GITHUB_REPO, which in turn matches the name of the folder on your computer.
testing.clone()
```

### Commit changes

```js
const testing = new gitsync("username_on_github", "NAME_GITHUB_REPO", "/home/path/repos", "Your PAT Key")
// NAME_GITHUB_REPO this parameter MUST NOT lead to a repository, it leads to the directory where all repositories are located.
// To work correctly, a github repository must match the name of NAME_GITHUB_REPO, which in turn matches the name of the folder on your computer.
testing.add("--all").then(() => {
    console.log("Adding all files")

    testing.commit('First commit with GitSync').then(() => {
        testing.push()  // or u can use testing.push("local", "branch")
    })
})
```
