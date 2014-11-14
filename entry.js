/**
 * @api {get} application/:applicationId/feed/:feedId/entry Get List
 * @apiVersion 1.0.0
 * @apiName GetEntryList
 * @apiGroup Entry
 *
 * @apiDescription This will return a list of all entries per feed you have created.
 *
 * @apiParam {String}  applicationId  The application id
 * @apiParam {String}  feedId         The application id
 *
 * @apiSuccess {Object}    feed
 * @apiSuccess {String}    feed.id                The application Id
 * @apiSuccess {String}    feed.name              The name of the application
 * @apiSuccess {String}    feed.channelId         The channel Id of the feed
 * @apiSuccess {String}    feed.applicationId     The id of the application the feed belongs to
 * @apiSuccess {Int}       feed.createStamp       Unix time stamp of create time
 * @apiSuccess {Object[]}  entryList              Array of all entries
 * @apiSuccess {String}    entryList.id           The entry Id
 * @apiSuccess {Int}       entryList.createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "feed": {
 *           "id": "KAJFDA7GFTRE87FDS78F7",
 *           "name": "Son Goku",
 *           "channelId": "ASJDH86ASD678ASDASD768",
 *           "applicationId": "KAJFDA786FDS87FDS78F6",
 *           "createStamp": "1415637736",
 *       }
 *       "entryList": [
 *         {
 *           "id": "KAJFDA7GFTRE87FDS78F7",
 *           "createStamp": "1415637736",
 *         },
 *         ...
 *       ]
 *     }
 */


/**
 * @api {post} application/:applicationId/feed/:feedId/entry Create
 * @apiVersion 1.0.0
 * @apiName PostEntry
 * @apiGroup Entry
 *
 * @apiDescription Create a feed.
 *
 * @apiParam {String}    applicationId  The application id
 * @apiParam {String}    feedId         The feed id
 * @apiParam {String}    data           The data of the entry
 * @apiParam {String[]}  [tagList]      Tags of the entry
 *
 * @apiSuccess {String}    id             The feed Id
 * @apiSuccess {String}    applicationId  The application id
 * @apiSuccess {String}    feedId         The feed id
 * @apiSuccess {String}    data           The data of the entry
 * @apiSuccess {String[]}  tagList        List of set tags
 * @apiSuccess {Int}       createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "applicationId": "KAJDFE7GFTRE87FDS78F7",
 *       "feedId": "KAJDFE7GFTRE87FDS78F7",
 *       "data": "Hello, I'm Son Gocu and this is my first post.",
 *       "tagList": [
 *         "First",
 *         "Awesome"
 *       ],
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {get} application/:applicationId/feed/:feedId/entry/:entryId Get
 * @apiVersion 1.0.0
 * @apiName GetEntry
 * @apiGroup Entry
 *
 * @apiDescription This will return a specific entry.
 *
 * @apiParam {String}  applicationId  The application id
 * @apiParam {String}  feedId         The feed id
 * @apiParam {String}  entryId        The entry id
 *
 * @apiSuccess {String}    id             The feed Id
 * @apiSuccess {String}    applicationId  The application id
 * @apiSuccess {String}    feedId         The feed id
 * @apiSuccess {String}    data           The data of the entry
 * @apiSuccess {String[]}  tagList        List of set tags
 * @apiSuccess {Int}       createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "applicationId": "KAJDFE7GFTRE87FDS78F7",
 *       "feedId": "KAJDFE7GFTRE87FDS78F7",
 *       "data": "Hello, I'm Son Gocu and this is my first post.",
 *       "tagList": [
 *         "First",
 *         "Awesome"
 *       ],
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {put} application/:applicationId/feed/:feedId/entry/:entryId Update
 * @apiVersion 1.0.0
 * @apiName PutEntry
 * @apiGroup Entry
 *
 * @apiDescription Update a specific entry.
 *
 * @apiParam {String}    applicationId  The application id
 * @apiParam {String}    feedId         The feed id
 * @apiParam {String}    entryId        The entry id
 * @apiParam {String}    data           The data of the entry
 * @apiParam {String[]}  [tagList]      Tags of the entry
 *
 * @apiSuccess {String}    id             The feed Id
 * @apiSuccess {String}    applicationId  The application id
 * @apiSuccess {String}    feed Id        The feed id
 * @apiSuccess {String}    data           The data of the entry
 * @apiSuccess {String[]}  tagList        List of set tags
 * @apiSuccess {Int}       createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "applicationId": "KAJDFE7GFTRE87FDS78F7",
 *       "feedId": "KAJDFE7GFTRE87FDS78F7",
 *       "data": "Hello, I'm Son Gocu and this is my first post.",
 *       "tagList": [
 *         "First",
 *         "Awesome"
 *       ],
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {delete} application/:applicationId/feed/:feedId/entry/:entryId Delete
 * @apiVersion 1.0.0
 * @apiName DeleteEntry
 * @apiGroup Entry
 *
 * @apiDescription Delete a specific feed.
 *
 * @apiParam {String}  applicationId  The application id
 * @apiParam {String}  feedId         The feed id
 * @apiParam {String}  entryId        The entry id
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
