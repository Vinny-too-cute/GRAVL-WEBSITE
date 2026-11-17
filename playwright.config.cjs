const {defineConfig} = require('@playwright/test');
module.exports=defineConfig({testDir:'./qa/tests',timeout:30000,expect:{timeout:8000},workers:2,
  reporter:[['list'],['json',{outputFile:'reports/test-results.json'}]],
  use:{baseURL:'http://127.0.0.1:4173',trace:'retain-on-failure',screenshot:'only-on-failure'},
  webServer:{command:'node qa/server.cjs',url:'http://127.0.0.1:4173',reuseExistingServer:true},
  projects:[{name:'chromium',use:{browserName:'chromium',channel:'chrome'}},{name:'firefox',use:{browserName:'firefox'}},{name:'webkit',use:{browserName:'webkit'}}]
});
