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
    // application_id: '4a64fbaf-2f25-4d20-beeb-9147a28b8f2c', // CF
    application_id: 'ad83187d-8816-4d48-8747-23d49e3d4a1c',
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
