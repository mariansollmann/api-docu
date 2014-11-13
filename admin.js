/**
 * @api {get} admin Get List
 * @apiVersion 1.0.0
 * @apiName GetAdminList
 * @apiGroup Admin
 *
 * @apiDescription This will return a list of all admin users.
 *
 * @apiSuccess {Object[]}  adminList                Array of all admin users
 * @apiSuccess {String}    adminList.id             The id
 * @apiSuccess {String}    adminList.mail           The E-Mail Address of the admin user
 * @apiSuccess {Object[]}  adminList.roleList       A array of all roles
 * @apiSuccess {Int}       adminList.roleList.id    Role id (see full list at Appendix)
 * @apiSuccess {String}    adminList.roleList.name  Role name
 * @apiSuccess {Int}       adminList.createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     "adminList": [
 *       {
 *         "id": "KAJFDA7GFTRE87FDS78F7",
 *         "mail": "son.goku@dragonball.com",
 *         "roleList": [
 *           {
 *             "id": "2",
 *             "name": "admin"
 *           },
 *           ...
 *         "createStamp": "1415637736",
 *       },
 *       ...
 *     ]
 *   }
 */


/**
 * @api {post} admin Create
 * @apiVersion 1.0.0
 * @apiName PostAdmin
 * @apiGroup Admin
 *
 * @apiDescription Create a admin user.
 *
 * @apiParam {String}    mail           The E-Mail Address of the admin user
 * @apiParam {Object[]}  roleList       A array of all roles
 * @apiParam {Int}       roleList.id    Role id (see full list at Appendix)
 * @apiParam {String}    roleList.name  Role name
 *
 * @apiSuccess {String}    id             The id
 * @apiSuccess {String}    mail           The E-Mail Address of the admin user
 * @apiSuccess {Object[]}  roleList       A array of all roles
 * @apiSuccess {Int}       roleList.id    Role id (see full list at Appendix)
 * @apiSuccess {String}    roleList.name  Role name
 * @apiSuccess {Int}       createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "mail": "son.goku@dragonball.com",
 *       "roleList": [
 *         {
 *           "id": "2",
 *           "name": "admin"
 *         },
 *         ...
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {get} admin/:adminId Get
 * @apiVersion 1.0.0
 * @apiName GetAdmin
 * @apiGroup Admin
 *
 * @apiDescription This will return a specific token.
 *
 * @apiParam {String}  adminId  The admin user id
 *
 * @apiSuccess {String}    id             The id
 * @apiSuccess {String}    mail           The E-Mail Address of the admin user
 * @apiSuccess {Object[]}  roleList       A array of all roles
 * @apiSuccess {Int}       roleList.id    Role id (see full list at Appendix)
 * @apiSuccess {String}    roleList.name  Role name
 * @apiSuccess {Int}       createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "mail": "son.goku@dragonball.com",
 *       "roleList": [
 *         {
 *           "id": "2",
 *           "name": "admin"
 *         },
 *         ...
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {put} admin/:adminId Update
 * @apiVersion 1.0.0
 * @apiName PutAdmin
 * @apiGroup Admin
 *
 * @apiDescription Update a specific admin user.
 *
 * @apiParam {String}    adminId        The admin user id
 * @apiParam {String}    mail           The E-Mail Address of the admin user
 * @apiParam {Object[]}  roleList       A array of all roles
 * @apiParam {Int}       roleList.id    Role id (see full list at Appendix)
 * @apiParam {String}    roleList.name  Role name
 *
 * @apiSuccess {String}    id             The id
 * @apiSuccess {String}    mail           The E-Mail Address of the admin user
 * @apiSuccess {Object[]}  roleList       A array of all roles
 * @apiSuccess {Int}       roleList.id    Role id (see full list at Appendix)
 * @apiSuccess {String}    roleList.name  Role name
 * @apiSuccess {Int}       createStamp    Unix time stamp of create time
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "id": "KAJFDA7GFTRE87FDS78F7",
 *       "mail": "son.goku@dragonball.com",
 *       "roleList": [
 *         {
 *           "id": "2",
 *           "name": "admin"
 *         },
 *         ...
 *       "createStamp": "1415637736",
 *     }
 */


/**
 * @api {delete} admin/:adminId Delete
 * @apiVersion 1.0.0
 * @apiName DeleteAdmin
 * @apiGroup Admin
 *
 * @apiDescription Delete a specific admin user.
 *
 * @apiParam {String}  adminId  The admin user id
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
