/**
 * @api {get} token Get List
 * @apiVersion 1.0.0
 * @apiName GetTokenList
 * @apiGroup Token
 *
 * @apiDescription This will return a list of all tokens.
 *
 * @apiSuccess {Object[]}  tokenList              Array of all tokens
 * @apiSuccess {String}    tokenList.token        The token
 * @apiSuccess {String}    tokenList.name         The name of the token
 * @apiSuccess {Int}       tokenList.createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     "tokenList": [
 *       {
 *         "token": "KAJFDA7GFTRE87FDS78F7",
 *         "name": "Super Saiyan",
 *         "createStamp": "1415637736",
 *       },
 *       ...
 *     ]
 *   }
 */


/**
 * @api {post} token Create
 * @apiVersion 1.0.0
 * @apiName PostToken
 * @apiGroup Token
 *
 * @apiDescription Create a token.
 *
 * @apiParam {String}  name  The name of the feed
 *
 * @apiSuccess {String}    token        The token
 * @apiSuccess {String}    name         The name of the token
 * @apiSuccess {Int}       createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "token": "KAJFDA7GFTRE87FDS78F7",
 *       "name": "Super Saiyan",
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {get} token/:token Get
 * @apiVersion 1.0.0
 * @apiName GetToken
 * @apiGroup Token
 *
 * @apiDescription This will return a specific token.
 *
 * @apiParam {String}  token  The token
 *
 * @apiSuccess {String}    token        The token
 * @apiSuccess {String}    name         The name of the token
 * @apiSuccess {Int}       createStamp  Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "token": "KAJFDA7GFTRE87FDS78F7",
 *       "name": "Super Saiyan",
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {delete} token/:token Delete
 * @apiVersion 1.0.0
 * @apiName DeleteToken
 * @apiGroup Token
 *
 * @apiDescription Delete a specific token.
 *
 * @apiParam {String}  token  The token
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
