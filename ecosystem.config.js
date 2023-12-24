module.exports = {
  apps: [
    {
      script: path.join(__dirname, 'src', 'index.js'),
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
      node_args: '--trace-warnings --unhandled-rejections=strict',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      watch: false,
      exec_mode: 'cluster',
      instances: -1,
    },
  ],
};
