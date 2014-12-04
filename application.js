/**
 * @api {get} application Get List
 * @apiVersion 1.0.0
 * @apiName GetApplicationList
 * @apiGroup Application
 *
 * @apiDescription This will return a list of all applications you have created.
 *
 * @apiSuccess {Object[]}  applicationList              Array of all applications
 * @apiSuccess {String}    applicationList.id           The application Id
 * @apiSuccess {String}    applicationList.name         The name of the application
 * @apiSuccess {Int}       applicationList.createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "applicationList": [
 *         {
 *           "id": "systemId",
 *           "name": "YourName",
 *           "createStamp": "1234567890",
 *         },
 *         ...
 *       ]
 *     }
 */


/**
 * @api {post} application Create
 * @apiVersion 1.0.0
 * @apiName PostApplication
 * @apiGroup Application
 *
 * @apiDescription Create a application.
 *
 * @apiParam {String}  name           The name of the application
 * @apiParam {String}  [description]  The description of the application
 *
 * @apiExample {json} Example post body (json):
 *     {
 *       "name": "DragonBall",
 *       "description": "The DragonBall application. This will contain feeds for all DragonBall characters."
 *     }
 *
 * @apiSuccess {String}  id           The application Id
 * @apiSuccess {String}  name         The name of the application
 * @apiSuccess {String}  description  The description of the application
 * @apiSuccess {Int}     createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA786FDS87FDS78F6",
 *       "name": "DragonBall",
 *       "description": "The DragonBall application. This will contain feeds for all DragonBall characters.",
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {get} application/:applicationId Get
 * @apiVersion 1.0.0
 * @apiName GetApplication
 * @apiGroup Application
 *
 * @apiDescription This will return a specific application.
 *
 * @apiParam {String}  applicationId  The application id
 *
 * @apiSuccess {String}  id           The application Id
 * @apiSuccess {String}  name         The name of the application
 * @apiSuccess {String}  description  The description of the application
 * @apiSuccess {Int}     createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA786FDS87FDS78F6",
 *       "name": "DragonBall",
 *       "description": "The DragonBall application. This will contain feeds for all DragonBall characters.",
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {put} application/:applicationId Update
 * @apiVersion 1.0.0
 * @apiName PutApplication
 * @apiGroup Application
 *
 * @apiDescription Update a specific application.
 *
 * @apiParam {String}  applicationId  The application id
 * @apiParam {String}  name           The name of the application
 * @apiParam {String}  [description]  The description of the application
 *
 * @apiExample {json} Example post body (json):
 *     {
 *       "name": "DragonBall",
 *       "description": "The DragonBall application. This will contain feeds for all DragonBall characters."
 *     }
 *
 * @apiSuccess {String}  id           The application Id
 * @apiSuccess {String}  name         The name of the application
 * @apiSuccess {String}  description  The description of the application
 * @apiSuccess {Int}     createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA786FDS87FDS78F6",
 *       "name": "DragonBall",
 *       "description": "The DragonBall application. This will contain feeds for all DragonBall characters.",
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {delete} application/:applicationId Delete
 * @apiVersion 1.0.0
 * @apiName DeleteApplication
 * @apiGroup Application
 *
 * @apiDescription Delete a specific application.
 *
 * @apiParam {String}  applicationId  The application id
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
