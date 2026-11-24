<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.customerGroups` · Source: `src/resources/customer-groups.ts` · 11 operations · Request and error types: namespace `CustomerGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### assignCustomerGroupUser

- **Signature**: `assignCustomerGroupUser(request: CustomerGroups.AssignCustomerGroupUserRequest, options?: RequestOptions): ApiPromise<undefined, CustomerGroups.AssignCustomerGroupUserError>`
- **Wire**: `PUT /rbac/v1/customer-groups/{customerGroupId}/users/{userId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.AssignCustomerGroupUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.AssignCustomerGroupUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `userId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### assignCustomerGroupUserGroup

- **Signature**: `assignCustomerGroupUserGroup(request: CustomerGroups.AssignCustomerGroupUserGroupRequest, options?: RequestOptions): ApiPromise<undefined, CustomerGroups.AssignCustomerGroupUserGroupError>`
- **Wire**: `PUT /rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.AssignCustomerGroupUserGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.AssignCustomerGroupUserGroupRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `userGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### createCustomerGroup

- **Signature**: `createCustomerGroup(request: CustomerGroups.CreateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise<CustomerGroup, CustomerGroups.CreateCustomerGroupError>`
- **Wire**: `POST /rbac/v1/customer-groups`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerGroup`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.CreateCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.CreateCustomerGroupRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `CreateCustomerGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerGroupRequest` | `createCustomerGroupRequestSchema` | `src/models/create-customer-group-request.ts` |
| `CustomerGroup` | `customerGroupSchema` | `src/models/customer-group.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### deleteCustomerGroup

- **Signature**: `deleteCustomerGroup(request: CustomerGroups.DeleteCustomerGroupRequest, options?: RequestOptions): ApiPromise<undefined, CustomerGroups.DeleteCustomerGroupError>`
- **Wire**: `DELETE /rbac/v1/customer-groups/{customerGroupId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.DeleteCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.DeleteCustomerGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getCustomerGroup

- **Signature**: `getCustomerGroup(request: CustomerGroups.GetCustomerGroupRequest, options?: RequestOptions): ApiPromise<CustomerGroup, CustomerGroups.GetCustomerGroupError>`
- **Wire**: `GET /rbac/v1/customer-groups/{customerGroupId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerGroup`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.GetCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.GetCustomerGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroup` | `customerGroupSchema` | `src/models/customer-group.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listCustomerGroupUserGroups

- **Signature**: `listCustomerGroupUserGroups(request: CustomerGroups.ListCustomerGroupUserGroupsRequest, options?: RequestOptions): ApiPromise<CustomerGroupUserGroupsResponse, CustomerGroups.ListCustomerGroupUserGroupsError>`
- **Wire**: `GET /rbac/v1/customer-groups/{customerGroupId}/user-groups`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerGroupUserGroupsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.ListCustomerGroupUserGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.ListCustomerGroupUserGroupsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroupUserGroupsResponse` | `customerGroupUserGroupsResponseSchema` | `src/models/customer-group-user-groups-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listCustomerGroupUsers

- **Signature**: `listCustomerGroupUsers(request: CustomerGroups.ListCustomerGroupUsersRequest, options?: RequestOptions): ApiPromise<CustomerGroupUsersResponse, CustomerGroups.ListCustomerGroupUsersError>`
- **Wire**: `GET /rbac/v1/customer-groups/{customerGroupId}/users`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerGroupUsersResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.ListCustomerGroupUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.ListCustomerGroupUsersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroupUsersResponse` | `customerGroupUsersResponseSchema` | `src/models/customer-group-users-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listCustomerGroups

- **Signature**: `listCustomerGroups(request?: CustomerGroups.ListCustomerGroupsRequest, options?: RequestOptions): ApiPromise<CustomerGroupsResponse, CustomerGroups.ListCustomerGroupsError>`
- **Wire**: `GET /rbac/v1/customer-groups`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerGroupsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.ListCustomerGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [429] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.ListCustomerGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroupsResponse` | `customerGroupsResponseSchema` | `src/models/customer-groups-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### unassignCustomerGroupUser

- **Signature**: `unassignCustomerGroupUser(request: CustomerGroups.UnassignCustomerGroupUserRequest, options?: RequestOptions): ApiPromise<undefined, CustomerGroups.UnassignCustomerGroupUserError>`
- **Wire**: `DELETE /rbac/v1/customer-groups/{customerGroupId}/users/{userId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.UnassignCustomerGroupUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.UnassignCustomerGroupUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `userId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### unassignCustomerGroupUserGroup

- **Signature**: `unassignCustomerGroupUserGroup(request: CustomerGroups.UnassignCustomerGroupUserGroupRequest, options?: RequestOptions): ApiPromise<undefined, CustomerGroups.UnassignCustomerGroupUserGroupError>`
- **Wire**: `DELETE /rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.UnassignCustomerGroupUserGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [429] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"problemDetails7"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.UnassignCustomerGroupUserGroupRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `userGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### updateCustomerGroup

- **Signature**: `updateCustomerGroup(request: CustomerGroups.UpdateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise<CustomerGroup, CustomerGroups.UpdateCustomerGroupError>`
- **Wire**: `PATCH /rbac/v1/customer-groups/{customerGroupId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerGroup`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CustomerGroups.UpdateCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [429] `ProblemDetails` · `"problemDetails7"` [500] `ProblemDetails` · `"problemDetails8"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.UpdateCustomerGroupRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerGroupId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |
| `body` | `body` | — | `UpdateCustomerGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerGroupRequest` | `updateCustomerGroupRequestSchema` | `src/models/update-customer-group-request.ts` |
| `CustomerGroup` | `customerGroupSchema` | `src/models/customer-group.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

