## gitsync

### Installing
U need intall Node.JS

For debian: `curl https://a.rawr.party/install/debian/node.js?v=18 | sh`

Thanks for the easy installer [@gerrustalker](https://github.com/gerrustalker)

[Create your PAT key](https://github.com/settings/tokens?type=beta)

### Clone

```js
const testing = new gitsync("username/repo", "/home/path/", "Your PAT Key")
testing.clone()
```

### Commit changes

```js
const testing = new gitsync("username/repo", "/home/path/", "Your PAT Key")
testing.add("--all").then(() => {
    console.log("Adding all files")

    testing.commit('First commit with GitSync').then(() => {
        testing.push()  // or u can use testing.push("local", "branch")
    })
})
```
