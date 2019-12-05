# express-dogemad

## install guide

### Git Repository clone

```
git clone https://github.com/dogemad/express-dogemad.git
```

### Install node.js

- Using nvm.
```

```

- Node standalone.
```

```

## Execute methods

### Local environment

```
npm start 

or 

pm2 start ecosystem.config.js --env local
```

### Server environment

- LIVE
```
pm2 start ecosystem.config.js --env production
```

- STG
```
pm2 start ecosystem.config.js --env stage
```

- OTE
```
pm2 start ecosystem.config.js --env ote
```