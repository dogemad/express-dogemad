# express-dogemad

## Install guide

### Git Repository clone

```
git clone https://github.com/dogemad/express-dogemad.git
```

### Node package install

```
npm install
```

## Run

### Local environment

```
npm start

or

<!-- daemonize with pm2(pm2 start ecosystem.config.js --env) -->
npm run daemonize local
```

### Remote environment

- Production

```
npm run daemonize production
```

- Stage

```
npm run daemonize stage
```

- OTE

```
npm run daemonize local ote
```
