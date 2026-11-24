<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.customerGroups` · Source: `src/resources/customer-groups.ts` · 8 operations · Request and error types: namespace `CustomerGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerGroup

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerGroup(request: CustomerGroups.CreateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise<CustomerGroupDetail, CustomerGroups.CreateCustomerGroupError>`
- **Wire**: `POST /customer-groups/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerGroupDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.CreateCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [409] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.CreateCustomerGroupRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateCustomerGroupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerGroupRequest` | `createCustomerGroupRequestSchema` | `src/models/create-customer-group-request.ts` |
| `CustomerGroupDetail` | `customerGroupDetailSchema` | `src/models/customer-group-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createCustomerGroupMembers

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerGroupMembers(request: CustomerGroups.CreateCustomerGroupMembersRequest, options?: RequestOptions): ApiPromise<AddMembersResponse, CustomerGroups.CreateCustomerGroupMembersError>`
- **Wire**: `POST /customer-groups/{id}/members`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddMembersResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.CreateCustomerGroupMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.CreateCustomerGroupMembersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `MemberRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberRequest` | `memberRequestSchema` | `src/models/member-request.ts` |
| `AddMembersResponse` | `addMembersResponseSchema` | `src/models/add-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCustomerGroup

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCustomerGroup(request: CustomerGroups.DeleteCustomerGroupRequest, options?: RequestOptions): ApiPromise<CustomerGroupDeleteResponse, CustomerGroups.DeleteCustomerGroupError>`
- **Wire**: `DELETE /customer-groups/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerGroupDeleteResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.DeleteCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.DeleteCustomerGroupRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroupDeleteResponse` | `customerGroupDeleteResponseSchema` | `src/models/customer-group-delete-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCustomerGroupMembers

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCustomerGroupMembers(request: CustomerGroups.DeleteCustomerGroupMembersRequest, options?: RequestOptions): ApiPromise<RemoveMembersResponse, CustomerGroups.DeleteCustomerGroupMembersError>`
- **Wire**: `DELETE /customer-groups/{id}/members`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemoveMembersResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.DeleteCustomerGroupMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.DeleteCustomerGroupMembersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `MemberRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberRequest` | `memberRequestSchema` | `src/models/member-request.ts` |
| `RemoveMembersResponse` | `removeMembersResponseSchema` | `src/models/remove-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomerGroup

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCustomerGroup(request: CustomerGroups.GetCustomerGroupRequest, options?: RequestOptions): ApiPromise<CustomerGroupDetail, CustomerGroups.GetCustomerGroupError>`
- **Wire**: `GET /customer-groups/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerGroupDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.GetCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.GetCustomerGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroupDetail` | `customerGroupDetailSchema` | `src/models/customer-group-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomerGroups

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomerGroups(request: CustomerGroups.ListCustomerGroupsRequest, options?: RequestOptions): ApiPromise<CustomerGroupListResponse, CustomerGroups.ListCustomerGroupsError>`
- **Wire**: `GET /customer-groups/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerGroupListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.ListCustomerGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.ListCustomerGroupsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerGroupListResponse` | `customerGroupListResponseSchema` | `src/models/customer-group-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomerGroup

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCustomerGroup(request: CustomerGroups.UpdateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise<CustomerGroupDetail, CustomerGroups.UpdateCustomerGroupError>`
- **Wire**: `PATCH /customer-groups/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerGroupDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.UpdateCustomerGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [409] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.UpdateCustomerGroupRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateCustomerGroupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerGroupRequest` | `updateCustomerGroupRequestSchema` | `src/models/update-customer-group-request.ts` |
| `CustomerGroupDetail` | `customerGroupDetailSchema` | `src/models/customer-group-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomerGroupMembers

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCustomerGroupMembers(request: CustomerGroups.UpdateCustomerGroupMembersRequest, options?: RequestOptions): ApiPromise<SetMembersResponse, CustomerGroups.UpdateCustomerGroupMembersError>`
- **Wire**: `PUT /customer-groups/{id}/members`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SetMembersResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomerGroups.UpdateCustomerGroupMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerGroups.UpdateCustomerGroupMembersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `MemberRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberRequest` | `memberRequestSchema` | `src/models/member-request.ts` |
| `SetMembersResponse` | `setMembersResponseSchema` | `src/models/set-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

