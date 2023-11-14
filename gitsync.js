const { exec } = require('child_process');

class gitsync {
    constructor(username, gitrepo, path, pat) {
        this.username = username;
        this.gitrepo  = gitrepo;
        this.path     = path;
        this.pat      = pat
        this.promise  = null;
    }

    async status() {
        return new Promise((cb, rej) => {
            exec(`git status --porcelain 2>&1`, {cwd: this.path + this.gitrepo}, (error, stdout) => {
                cb({error, stdout})
            })
        })
    }

    async clone() {
        return new Promise((cb, rej) => {
            exec(`git clone https://${this.pat}@github.com/${this.username}/${this.gitrepo}.git 2>&1`, {cwd: this.path}, (error, stdout) => {
                cb(error)
            })
        })
    }

    async add(filename_) {
        return new Promise((cb, rej) => {
            exec(`git add ${filename_} 2>&1`, {cwd: this.path + this.gitrepo}, (error, stdout) => {
                cb(stdout)
            })
        })
    }

    async commit(text) {
        return new Promise((cb, rej) => {
            exec(`git commit -m "${text}" 2>&1`, {cwd: this.path + this.gitrepo}, (error, stdout) => {
                cb(error)
            })
        })
    }

    async push(local, remote) {
        return new Promise((cb, rej) => {
            exec(`git push ${!local ? "origin" : local} ${!remote ? "" : remote} 2>&1`, {cwd: this.path + this.gitrepo}, (error, stdout) => {
                cb({error, stdout})
            })
        })
    }

    pull() {
        exec(`git pull 2>&1`, {cwd: this.path + this.gitrepo}, (error, stdout) => {
            cb(error, stdout)
        })
    }

    gitinfo() {
        console.log(this.username, this.path, this.pat); // debuging lel
    }
}

module.exports = gitsync