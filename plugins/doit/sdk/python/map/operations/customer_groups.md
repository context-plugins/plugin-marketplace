<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.customer_groups` · Source: `doi_t/apis/customer_groups.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customer_groups.assign_customer_group_user

- **Route**: `PUT /rbac/v1/customer-groups/{customerGroupId}/users/{userId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def assign_customer_group_user(customer_group_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`, `user_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `user_id` — path `userId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssignCustomerGroupUserErrorBody]`
- **Error**: `AssignCustomerGroupUserErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssignCustomerGroupUserErrorBody` | `doi_t/errors/assign_customer_group_user_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.assign_customer_group_user_group

- **Route**: `PUT /rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def assign_customer_group_user_group(customer_group_id: str, user_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`, `user_group_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `user_group_id` — path `userGroupId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssignCustomerGroupUserGroupErrorBody]`
- **Error**: `AssignCustomerGroupUserGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssignCustomerGroupUserGroupErrorBody` | `doi_t/errors/assign_customer_group_user_group_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.create_customer_group

- **Route**: `POST /rbac/v1/customer-groups`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_customer_group(body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `CustomerGroup`
- **Returns (raw)**: `ApiResult[CustomerGroup, CreateCustomerGroupErrorBody]`
- **Error**: `CreateCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomerGroupRequest` | `doi_t/models/create_customer_group_request.py` |
| `CreateCustomerGroupRequestDict` | `doi_t/models/create_customer_group_request.py` |
| `CustomerGroup` | `doi_t/models/customer_group.py` |
| `CreateCustomerGroupErrorBody` | `doi_t/errors/create_customer_group_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.delete_customer_group

- **Route**: `DELETE /rbac/v1/customer-groups/{customerGroupId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_customer_group(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomerGroupErrorBody]`
- **Error**: `DeleteCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerGroupErrorBody` | `doi_t/errors/delete_customer_group_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.get_customer_group

- **Route**: `GET /rbac/v1/customer-groups/{customerGroupId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_customer_group(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `CustomerGroup`
- **Returns (raw)**: `ApiResult[CustomerGroup, GetCustomerGroupErrorBody]`
- **Error**: `GetCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroup` | `doi_t/models/customer_group.py` |
| `GetCustomerGroupErrorBody` | `doi_t/errors/get_customer_group_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.list_customer_group_user_groups

- **Route**: `GET /rbac/v1/customer-groups/{customerGroupId}/user-groups`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_customer_group_user_groups(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `CustomerGroupUserGroupsResponse`
- **Returns (raw)**: `ApiResult[CustomerGroupUserGroupsResponse, ListCustomerGroupUserGroupsErrorBody]`
- **Error**: `ListCustomerGroupUserGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroupUserGroupsResponse` | `doi_t/models/customer_group_user_groups_response.py` |
| `ListCustomerGroupUserGroupsErrorBody` | `doi_t/errors/list_customer_group_user_groups_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.list_customer_group_users

- **Route**: `GET /rbac/v1/customer-groups/{customerGroupId}/users`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_customer_group_users(customer_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `CustomerGroupUsersResponse`
- **Returns (raw)**: `ApiResult[CustomerGroupUsersResponse, ListCustomerGroupUsersErrorBody]`
- **Error**: `ListCustomerGroupUsersErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroupUsersResponse` | `doi_t/models/customer_group_users_response.py` |
| `ListCustomerGroupUsersErrorBody` | `doi_t/errors/list_customer_group_users_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.list_customer_groups

- **Route**: `GET /rbac/v1/customer-groups`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_customer_groups(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `CustomerGroupsResponse`
- **Returns (raw)**: `ApiResult[CustomerGroupsResponse, ListCustomerGroupsErrorBody]`
- **Error**: `ListCustomerGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroupsResponse` | `doi_t/models/customer_groups_response.py` |
| `ListCustomerGroupsErrorBody` | `doi_t/errors/list_customer_groups_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.unassign_customer_group_user

- **Route**: `DELETE /rbac/v1/customer-groups/{customerGroupId}/users/{userId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def unassign_customer_group_user(customer_group_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`, `user_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `user_id` — path `userId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UnassignCustomerGroupUserErrorBody]`
- **Error**: `UnassignCustomerGroupUserErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UnassignCustomerGroupUserErrorBody` | `doi_t/errors/unassign_customer_group_user_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.unassign_customer_group_user_group

- **Route**: `DELETE /rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def unassign_customer_group_user_group(customer_group_id: str, user_group_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`, `user_group_id`
- **Params**: `customer_group_id` — path `customerGroupId` · `user_group_id` — path `userGroupId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UnassignCustomerGroupUserGroupErrorBody]`
- **Error**: `UnassignCustomerGroupUserGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UnassignCustomerGroupUserGroupErrorBody` | `doi_t/errors/unassign_customer_group_user_group_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.customer_groups.update_customer_group

- **Route**: `PATCH /rbac/v1/customer-groups/{customerGroupId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_customer_group(customer_group_id: str, body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_group_id`, `body`
- **Params**: `customer_group_id` — path `customerGroupId` · `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `CustomerGroup`
- **Returns (raw)**: `ApiResult[CustomerGroup, UpdateCustomerGroupErrorBody]`
- **Error**: `UpdateCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomerGroupRequest` | `doi_t/models/update_customer_group_request.py` |
| `UpdateCustomerGroupRequestDict` | `doi_t/models/update_customer_group_request.py` |
| `CustomerGroup` | `doi_t/models/customer_group.py` |
| `UpdateCustomerGroupErrorBody` | `doi_t/errors/update_customer_group_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

