<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scim — operations

Accessor: `client.scim` · Source: `src/resources/scim.ts` · 23 operations · Request and error types: namespace `Scim`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkOperation

- **Signature**: `bulkOperation(options?: RequestOptions): ApiPromise<ScimV2BulkResponse, Scim.BulkOperationError>`
- **Wire**: `POST /scim/v2/Bulk`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimV2BulkResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.BulkOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimV2BulkResponse` | `scimV2BulkResponseSchema` | `src/models/unions/scim-v2-bulk-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### createGroup

- **Signature**: `createGroup(options?: RequestOptions): ApiPromise<undefined, Scim.CreateGroupError>`
- **Wire**: `POST /scim/v2/Groups`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.CreateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"gristError4"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### createUser

- **Signature**: `createUser(options?: RequestOptions): ApiPromise<undefined, Scim.CreateUserError>`
- **Wire**: `POST /scim/v2/Users`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.CreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"gristError4"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### deleteGroupById

- **Signature**: `deleteGroupById(request: Scim.DeleteGroupByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.DeleteGroupByIdError>`
- **Wire**: `DELETE /scim/v2/Groups/{groupId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.DeleteGroupByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.DeleteGroupByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### deleteUserById

- **Signature**: `deleteUserById(request: Scim.DeleteUserByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.DeleteUserByIdError>`
- **Wire**: `DELETE /scim/v2/Users/{userId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.DeleteUserByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.DeleteUserByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getGroupById

- **Signature**: `getGroupById(request: Scim.GetGroupByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.GetGroupByIdError>`
- **Wire**: `GET /scim/v2/Groups/{groupId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetGroupByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.GetGroupByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getGroups

- **Signature**: `getGroups(request?: Scim.GetGroupsRequest, options?: RequestOptions): ApiPromise<undefined, Scim.GetGroupsError>`
- **Wire**: `GET /scim/v2/Groups`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.GetGroupsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startIndex` | `query` | `number` | no |
| `count` | `query` | `number` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getMe

- **Signature**: `getMe(options?: RequestOptions): ApiPromise<undefined, Scim.GetMeError>`
- **Wire**: `GET /scim/v2/Me`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetMeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getResourceTypes

- **Signature**: `getResourceTypes(options?: RequestOptions): ApiPromise<ScimV2ResourceTypesResponse, Scim.GetResourceTypesError>`
- **Wire**: `GET /scim/v2/ResourceTypes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimV2ResourceTypesResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetResourceTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimV2ResourceTypesResponse` | `scimV2ResourceTypesResponseSchema` | `src/models/unions/scim-v2-resource-types-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getRoleById

- **Signature**: `getRoleById(request: Scim.GetRoleByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.GetRoleByIdError>`
- **Wire**: `GET /scim/v2/Roles/{roleId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetRoleByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.GetRoleByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getRoles

- **Signature**: `getRoles(request?: Scim.GetRolesRequest, options?: RequestOptions): ApiPromise<undefined, Scim.GetRolesError>`
- **Wire**: `GET /scim/v2/Roles`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.GetRolesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startIndex` | `query` | `number` | no |
| `count` | `query` | `number` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getSchemas

- **Signature**: `getSchemas(options?: RequestOptions): ApiPromise<ScimV2SchemasResponse, Scim.GetSchemasError>`
- **Wire**: `GET /scim/v2/Schemas`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimV2SchemasResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetSchemasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimV2SchemasResponse` | `scimV2SchemasResponseSchema` | `src/models/unions/scim-v2-schemas-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getServiceProviderConfig

- **Signature**: `getServiceProviderConfig(options?: RequestOptions): ApiPromise<ScimV2ServiceProviderConfigResponse, Scim.GetServiceProviderConfigError>`
- **Wire**: `GET /scim/v2/ServiceProviderConfig`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimV2ServiceProviderConfigResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetServiceProviderConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimV2ServiceProviderConfigResponse` | `scimV2ServiceProviderConfigResponseSchema` | `src/models/unions/scim-v2-service-provider-config-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getUserById

- **Signature**: `getUserById(request: Scim.GetUserByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.GetUserByIdError>`
- **Wire**: `GET /scim/v2/Users/{userId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetUserByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.GetUserByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### getUsers

- **Signature**: `getUsers(request?: Scim.GetUsersRequest, options?: RequestOptions): ApiPromise<undefined, Scim.GetUsersError>`
- **Wire**: `GET /scim/v2/Users`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.GetUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.GetUsersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startIndex` | `query` | `number` | no |
| `count` | `query` | `number` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### patchGroupById

- **Signature**: `patchGroupById(request: Scim.PatchGroupByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.PatchGroupByIdError>`
- **Wire**: `PATCH /scim/v2/Groups/{groupId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.PatchGroupByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"gristError4"` [404] `GristError` · `"gristError5"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.PatchGroupByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### patchRoleById

- **Signature**: `patchRoleById(request: Scim.PatchRoleByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.PatchRoleByIdError>`
- **Wire**: `PATCH /scim/v2/Roles/{roleId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.PatchRoleByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"gristError4"` [404] `GristError` · `"gristError5"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.PatchRoleByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### patchUserById

- **Signature**: `patchUserById(request: Scim.PatchUserByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.PatchUserByIdError>`
- **Wire**: `PATCH /scim/v2/Users/{userId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.PatchUserByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"gristError4"` [404] `GristError` · `"gristError5"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.PatchUserByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### searchGroups

- **Signature**: `searchGroups(options?: RequestOptions): ApiPromise<undefined, Scim.SearchGroupsError>`
- **Wire**: `POST /scim/v2/Groups/.search`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.SearchGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### searchUsers

- **Signature**: `searchUsers(options?: RequestOptions): ApiPromise<undefined, Scim.SearchUsersError>`
- **Wire**: `POST /scim/v2/Users/.search`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.SearchUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [401] `GristError` · `"gristError3"` [403] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### updateGroupById

- **Signature**: `updateGroupById(request: Scim.UpdateGroupByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.UpdateGroupByIdError>`
- **Wire**: `PUT /scim/v2/Groups/{groupId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.UpdateGroupByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"gristError4"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.UpdateGroupByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### updateRoleById

- **Signature**: `updateRoleById(request: Scim.UpdateRoleByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.UpdateRoleByIdError>`
- **Wire**: `PUT /scim/v2/Roles/{roleId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.UpdateRoleByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"gristError4"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.UpdateRoleByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### updateUserById

- **Signature**: `updateUserById(request: Scim.UpdateUserByIdRequest, options?: RequestOptions): ApiPromise<undefined, Scim.UpdateUserByIdError>`
- **Wire**: `PUT /scim/v2/Users/{userId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Scim.UpdateUserByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [401] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"gristError4"` [409] `GristError` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scim.UpdateUserByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

