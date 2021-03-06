// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    // api: 'https://api.ibmcloudcr.com/skill_management',
    api: 'https://icp-skills.appsecurity.info/skill_management',
    apiVersion: 'v1',
    authorization_server: 'https://nexo-auth.mybluemix.net/application',
    application_id: 'f20063b3-985b-470b-84e6-7794a4581b09',
    authorization_endpoint: 'sso'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
