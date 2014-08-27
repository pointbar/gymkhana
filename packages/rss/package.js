Package.describe({
  summary: "RSS feed generator"
});
Npm.depends({rss: '0.3.2'});

Package.on_use(function (api) {
  api.add_files('rss.js', 'server');
  if(api.export)
    api.export('RSS');
});
