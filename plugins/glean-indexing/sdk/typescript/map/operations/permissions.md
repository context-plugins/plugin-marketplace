<!-- Generated file — do not edit; regenerated with the SDK. -->

# Permissions — operations

Accessor: `client.permissions` · Source: `src/resources/permissions.ts` · 11 operations · Request and error types: namespace `Permissions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### betaUsers

- **Signature**: `betaUsers(request: Permissions.BetaUsersRequest, options?: RequestOptions): ApiPromise<undefined, Permissions.BetaUsersError>`
- **Wire**: `POST /api/index/v1/betausers`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.BetaUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.BetaUsersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GreenlistUsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GreenlistUsersRequest` | `greenlistUsersRequestSchema` | `src/models/greenlist-users-request.ts` |

### bulkIndexGroups

- **Signature**: `bulkIndexGroups(request: Permissions.BulkIndexGroupsRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.BulkIndexGroupsError>`
- **Wire**: `POST /api/index/v1/bulkindexgroups`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.BulkIndexGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.BulkIndexGroupsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkIndexGroupsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkIndexGroupsRequest` | `bulkIndexGroupsRequestSchema` | `src/models/bulk-index-groups-request.ts` |

### bulkIndexMembershipsForAGroup

- **Signature**: `bulkIndexMembershipsForAGroup(request: Permissions.BulkIndexMembershipsForAGroupRequest, options?: RequestOptions): ApiPromise<undefined, Permissions.BulkIndexMembershipsForAGroupError>`
- **Wire**: `POST /api/index/v1/bulkindexmemberships`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.BulkIndexMembershipsForAGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.BulkIndexMembershipsForAGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkIndexMembershipsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkIndexMembershipsRequest` | `bulkIndexMembershipsRequestSchema` | `src/models/bulk-index-memberships-request.ts` |

### bulkIndexUsers

- **Signature**: `bulkIndexUsers(request: Permissions.BulkIndexUsersRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.BulkIndexUsersError>`
- **Wire**: `POST /api/index/v1/bulkindexusers`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.BulkIndexUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.BulkIndexUsersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkIndexUsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkIndexUsersRequest` | `bulkIndexUsersRequestSchema` | `src/models/bulk-index-users-request.ts` |

### deleteGroup

- **Signature**: `deleteGroup(request: Permissions.DeleteGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.DeleteGroupError>`
- **Wire**: `POST /api/index/v1/deletegroup`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.DeleteGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.DeleteGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteGroupRequest` | `deleteGroupRequestSchema` | `src/models/delete-group-request.ts` |

### deleteMembership

- **Signature**: `deleteMembership(request: Permissions.DeleteMembershipRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.DeleteMembershipError>`
- **Wire**: `POST /api/index/v1/deletemembership`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.DeleteMembershipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.DeleteMembershipRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteMembershipRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteMembershipRequest` | `deleteMembershipRequestSchema` | `src/models/delete-membership-request.ts` |

### deleteUser

- **Signature**: `deleteUser(request: Permissions.DeleteUserRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.DeleteUserError>`
- **Wire**: `POST /api/index/v1/deleteuser`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.DeleteUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteUserRequest` | `deleteUserRequestSchema` | `src/models/delete-user-request.ts` |

### indexGroup

- **Signature**: `indexGroup(request: Permissions.IndexGroupRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.IndexGroupError>`
- **Wire**: `POST /api/index/v1/indexgroup`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.IndexGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.IndexGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IndexGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexGroupRequest` | `indexGroupRequestSchema` | `src/models/index-group-request.ts` |

### indexMembership

- **Signature**: `indexMembership(request: Permissions.IndexMembershipRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.IndexMembershipError>`
- **Wire**: `POST /api/index/v1/indexmembership`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.IndexMembershipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.IndexMembershipRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IndexMembershipRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexMembershipRequest` | `indexMembershipRequestSchema` | `src/models/index-membership-request.ts` |

### indexUser

- **Signature**: `indexUser(request: Permissions.IndexUserRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.IndexUserError>`
- **Wire**: `POST /api/index/v1/indexuser`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.IndexUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.IndexUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IndexUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexUserRequest` | `indexUserRequestSchema` | `src/models/index-user-request.ts` |

### schedulesTheProcessingOfGroupMemberships

- **Signature**: `schedulesTheProcessingOfGroupMemberships(request: Permissions.SchedulesTheProcessingOfGroupMembershipsRequest, options?: RequestOptions): ApiPromise<undefined, Permissions.SchedulesTheProcessingOfGroupMembershipsError>`
- **Wire**: `POST /api/index/v1/processallmemberships`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Permissions.SchedulesTheProcessingOfGroupMembershipsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.SchedulesTheProcessingOfGroupMembershipsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessAllMembershipsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessAllMembershipsRequest` | `processAllMembershipsRequestSchema` | `src/models/process-all-memberships-request.ts` |

