<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimUsers — operations

Accessor: `client.scimUsers` · Source: `src/resources/scim-users.ts` · 5 operations · Request and error types: namespace `ScimUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createScimUser

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createScimUser(request: ScimUsers.CreateScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, ScimUsers.CreateScimUserError>`
- **Wire**: `POST /scim/v2.0/organizations/{organization_uid}/Users`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimUser`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimUsers.CreateScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [409] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimUsers.CreateScimUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `ScimUser` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### getScimUser

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScimUser(request: ScimUsers.GetScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, ScimUsers.GetScimUserError>`
- **Wire**: `GET /scim/v2.0/organizations/{organization_uid}/Users/{user_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimUser`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimUsers.GetScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimUsers.GetScimUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### listScimUsers

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listScimUsers(request: ScimUsers.ListScimUsersRequest, options?: RequestOptions): ApiPromise<ScimListResponse, ScimUsers.ListScimUsersError>`
- **Wire**: `GET /scim/v2.0/organizations/{organization_uid}/Users`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimListResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimUsers.ListScimUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimUsers.ListScimUsersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `filter` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimListResponse` | `scimListResponseSchema` | `src/models/scim-list-response.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### replaceScimUser

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `replaceScimUser(request: ScimUsers.ReplaceScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, ScimUsers.ReplaceScimUserError>`
- **Wire**: `PUT /scim/v2.0/organizations/{organization_uid}/Users/{user_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimUser`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimUsers.ReplaceScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimUsers.ReplaceScimUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `ScimUser` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### updateScimUser

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateScimUser(request: ScimUsers.UpdateScimUserRequest, options?: RequestOptions): ApiPromise<ScimUser, ScimUsers.UpdateScimUserError>`
- **Wire**: `PATCH /scim/v2.0/organizations/{organization_uid}/Users/{user_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimUser`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimUsers.UpdateScimUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimUsers.UpdateScimUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `ScimPatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimPatchRequest` | `scimPatchRequestSchema` | `src/models/scim-patch-request.ts` |
| `ScimUser` | `scimUserSchema` | `src/models/scim-user.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

