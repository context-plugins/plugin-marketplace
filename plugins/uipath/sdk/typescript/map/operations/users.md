<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 8 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addUser

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `addUser(request: Users.AddUserRequestParams, options?: RequestOptions): ApiPromise<User, Users.AddUserError>`
- **Wire**: `POST /adduser`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.AddUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [400] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.AddUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AddUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddUserRequest` | `addUserRequestSchema` | `src/models/add-user-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### createUser

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUser(request: Users.CreateUserRequestParams, options?: RequestOptions): ApiPromise<User2, Users.CreateUserError>`
- **Wire**: `POST /{organizationName}/identity_/api/User`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User2`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.CreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [400] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CreateUserRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `body` | `body` | `CreateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateUserRequest` | `createUserRequestSchema` | `src/models/create-user-request.ts` |
| `User2` | `user2Schema` | `src/models/user2.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### deleteUser

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise<undefined, Users.DeleteUserError>`
- **Wire**: `DELETE /{organizationName}/identity_/api/User/{userId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponse3"` [404] `ErrorResponse3` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.DeleteUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |
| `ErrorResponse3` | `errorResponse3Schema` | `src/models/error-response3.ts` |

### editUser

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `editUser(request: Users.EditUserRequestParams, options?: RequestOptions): ApiPromise<User, Users.EditUserError>`
- **Wire**: `POST /edituser`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.EditUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [400] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.EditUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EditUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditUserRequest` | `editUserRequestSchema` | `src/models/edit-user-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### getOdataUsers

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOdataUsers(request?: Users.GetOdataUsersRequest, options?: RequestOptions): ApiPromise<ODataUserCollection, Users.GetOdataUsersError>`
- **Wire**: `GET /odata/Users`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataUserCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.GetOdataUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetOdataUsersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataUserCollection` | `oDataUserCollectionSchema` | `src/models/odata-user-collection.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### getUser

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<User2, Users.GetUserError>`
- **Wire**: `GET /{organizationName}/identity_/api/User/{userId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User2`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponse3"` [404] `ErrorResponse3` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationName` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User2` | `user2Schema` | `src/models/user2.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |
| `ErrorResponse3` | `errorResponse3Schema` | `src/models/error-response3.ts` |

### listRoles2

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoles2(options?: RequestOptions): ApiPromise<RolesResponse, Users.ListRoles2Error>`
- **Wire**: `GET /roles`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RolesResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.ListRoles2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RolesResponse` | `rolesResponseSchema` | `src/models/roles-response.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### listUsers

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUsers(request?: Users.ListUsersRequest, options?: RequestOptions): ApiPromise<UserListResponse, Users.ListUsersError>`
- **Wire**: `GET /users`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Users.ListUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ListUsersRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserListResponse` | `userListResponseSchema` | `src/models/user-list-response.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

