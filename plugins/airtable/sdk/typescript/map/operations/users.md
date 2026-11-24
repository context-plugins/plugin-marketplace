<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 6 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createScimUser

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createScimUser(request: Users.CreateScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, Users.CreateScimUserError>`
- **Wire**: `POST /Users`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimUser`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Users.CreateScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [403] `ScimError` · `"scimError4"` [409] `ScimError` · `"scimError5"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CreateScimUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScimUserCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUserCreateRequest` | `scimUserCreateRequestSchema` | `src/models/scim-user-create-request.ts` |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### deleteScimUser

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteScimUser(request: Users.DeleteScimUserRequest, options?: RequestOptions): ApiPromise<undefined, Users.DeleteScimUserError>`
- **Wire**: `DELETE /Users/{userId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Users.DeleteScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [403] `ScimError` · `"scimError3"` [404] `ScimError` · `"scimError4"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.DeleteScimUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### getScimUser

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScimUser(request: Users.GetScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, Users.GetScimUserError>`
- **Wire**: `GET /Users/{userId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimUser`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Users.GetScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [403] `ScimError` · `"scimError3"` [404] `ScimError` · `"scimError4"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetScimUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### listScimUsers

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listScimUsers(request?: Users.ListScimUsersRequest, options?: RequestOptions): ApiPromise<ScimUserListResponse, Users.ListScimUsersError>`
- **Wire**: `GET /Users`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimUserListResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Users.ListScimUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [403] `ScimError` · `"scimError3"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ListScimUsersRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `string` | no | — |
| `startIndex` | `query` | `number` | no | `1` |
| `count` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUserListResponse` | `scimUserListResponseSchema` | `src/models/scim-user-list-response.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### replaceScimUser

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `replaceScimUser(request: Users.ReplaceScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, Users.ReplaceScimUserError>`
- **Wire**: `PUT /Users/{userId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimUser`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Users.ReplaceScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [403] `ScimError` · `"scimError4"` [404] `ScimError` · `"scimError5"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ReplaceScimUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `ScimUserCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUserCreateRequest` | `scimUserCreateRequestSchema` | `src/models/scim-user-create-request.ts` |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### updateScimUser

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateScimUser(request: Users.UpdateScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, Users.UpdateScimUserError>`
- **Wire**: `PATCH /Users/{userId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimUser`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Users.UpdateScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [403] `ScimError` · `"scimError4"` [404] `ScimError` · `"scimError5"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UpdateScimUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `ScimPatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimPatchRequest` | `scimPatchRequestSchema` | `src/models/scim-patch-request.ts` |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

