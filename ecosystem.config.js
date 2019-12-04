module.exports = {
  apps: [
    {
      name: 'express-dogemad',
      script: 'bin/www',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      env: {
        NODE_ENV: 'dev'
      },
      env_production : {
				NODE_ENV: 'production'
      },
      env_stage : {
				NODE_ENV: 'stage'
      },
      env_ote : {
				NODE_ENV: 'ote'
      },
      env_local : {
				NODE_ENV: 'local'
			}
    }
  ]
}