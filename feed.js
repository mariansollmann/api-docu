/**
 * @api {get} application/:applicationId/feed Get List
 * @apiVersion 1.0.0
 * @apiName GetFeedList
 * @apiGroup Feed
 *
 * @apiDescription This will return a list of all feeds per applications you have created.
 *
 * @apiParam {String}  applicationId  The application id
 *
 * @apiSuccess {Object}    application
 * @apiSuccess {String}    application.id           The application Id
 * @apiSuccess {String}    application.name         The name of the application
 * @apiSuccess {Int}       application.createStamp  Unix time stamp of create time
 * @apiSuccess {Object[]}  feedList                 Array of all feeds
 * @apiSuccess {String}    feedList.id              The feed Id
 * @apiSuccess {String}    feedList.name            The name of the feed
 * @apiSuccess {String}    feedList.channelId       The channel Id of the feed
 * @apiSuccess {Int}       feedList.createStamp     Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "application": {
 *           "id": "KAJFDA786FDS87FDS78F6",
 *           "name": "DragonBall",
 *           "createStamp": "1415637736",
 *       }
 *       "feedList": [
 *         {
 *           "id": "KAJFDA7GFTRE87FDS78F7",
 *           "name": "Son Goku",
 *           "channelId": "ASJDH86ASD678ASDASD768",
 *           "createStamp": "1415637736",
 *         },
 *         ...
 *       ]
 *     }
 */


/**
 * @api {post} application/:applicationId/feed Create
 * @apiVersion 1.0.0
 * @apiName PostFeed
 * @apiGroup Feed
 *
 * @apiDescription Create a feed.
 *
 * @apiParam {String}    applicationId  The application id
 * @apiParam {String}    name           The name of the feed
 * @apiParam {String}    [description]  The description of the feed
 * @apiParam {String[]}  [tagList]      Tags of the feed
 *
 * @apiSuccess {String}    id           The feed Id
 * @apiSuccess {String}    name         The name of the feed
 * @apiSuccess {String}    description  The description of the feed
 * @apiSuccess {String}    channelId    The channel Id
 * @apiSuccess {String}    application  The Id of the application the feed belongs to
 * @apiSuccess {String[]}  tagList      List of set tags
 * @apiSuccess {Int}       createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "name": "Son Goku",
 *       "description": "The Son Goku feed. Here Son Goku will push all his news.",
 *       "channelId": "ASJDH86ASD678ASDASD768",
 *       "application": "KAJFDA786FDS87FDS78F6",
 *       "tagList": [
 *         "Saiyan",
 *         "Dragon Ball",
 *         "Dragon Ball Z"
 *       ],
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {get} application/:applicationId/feed/:feedId Get
 * @apiVersion 1.0.0
 * @apiName GetFeed
 * @apiGroup Feed
 *
 * @apiDescription This will return a specific feed.
 *
 * @apiParam {String}  applicationId  The application id
 * @apiParam {String}  feedId         The feed id
 *
 * @apiSuccess {String}    id           The feed id
 * @apiSuccess {String}    name         The name of the feed
 * @apiSuccess {String}    description  The description of the feed
 * @apiSuccess {String}    channelId    The channel Id
 * @apiSuccess {String}    application  The Id of the application the feed belongs to
 * @apiSuccess {String[]}  tagList      List of set tags
 * @apiSuccess {Int}       createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "name": "Son Goku",
 *       "description": "The Son Goku feed. Here Son Goku will push all his news.",
 *       "channelId": "ASJDH86ASD678ASDASD768",
 *       "application": "KAJFDA786FDS87FDS78F6",
 *       "tagList": [
 *         "Saiyan",
 *         "Dragon Ball",
 *         "Dragon Ball Z"
 *       ],
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {put} application/:applicationId/feed/:feedId Update
 * @apiVersion 1.0.0
 * @apiName PutFeed
 * @apiGroup Feed
 *
 * @apiDescription Update a specific feed.
 *
 * @apiParam {String}    applicationId  The application id
 * @apiParam {String}    feedId         The feed id
 * @apiParam {String}    name           The name of the feed
 * @apiParam {String}    [description]  The description of the feed
 * @apiParam {String[]}  [tagList]      Tags of the feed
 *
 * @apiSuccess {String}    id           The feed Id
 * @apiSuccess {String}    name         The name of the feed
 * @apiSuccess {String}    description  The description of the feed
 * @apiSuccess {String}    channelId    The channel Id
 * @apiSuccess {String}    application  The Id of the application the feed belongs to
 * @apiSuccess {String[]}  tagList      List of set tags
 * @apiSuccess {Int}       createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "name": "Son Goku",
 *       "description": "The Son Goku feed. Here Son Goku will push all his news.",
 *       "channelId": "ASJDH86ASD678ASDASD768",
 *       "application": "KAJFDA786FDS87FDS78F6",
 *       "tagList": [
 *         "Saiyan",
 *         "Dragon Ball",
 *         "Dragon Ball Z"
 *       ],
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {delete} application/:applicationId/feed/:feedId Delete
 * @apiVersion 1.0.0
 * @apiName DeleteFeed
 * @apiGroup Feed
 *
 * @apiDescription Delete a specific feed.
 *
 * @apiParam {String}  applicationId  The application id
 * @apiParam {String}  feedId         The feed id
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
