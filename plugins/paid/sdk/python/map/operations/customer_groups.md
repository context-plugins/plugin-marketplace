<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.customer_groups` · Source: `paid/apis/customer_groups.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customer_groups.create_customer_group

- **Route**: `POST /customer-groups/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_customer_group(authorization: str, *, body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerGroupDetail`
- **Returns (raw)**: `ApiResult[CustomerGroupDetail, CreateCustomerGroupErrorBody]`
- **Error**: `CreateCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomerGroupRequest` | `paid/models/create_customer_group_request.py` |
| `CreateCustomerGroupRequestDict` | `paid/models/create_customer_group_request.py` |
| `CustomerGroupDetail` | `paid/models/customer_group_detail.py` |
| `CreateCustomerGroupErrorBody` | `paid/errors/create_customer_group_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.create_customer_group_members

- **Route**: `POST /customer-groups/{id}/members`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `AddMembersResponse`
- **Returns (raw)**: `ApiResult[AddMembersResponse, CreateCustomerGroupMembersErrorBody]`
- **Error**: `CreateCustomerGroupMembersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberRequest` | `paid/models/member_request.py` |
| `MemberRequestDict` | `paid/models/member_request.py` |
| `AddMembersResponse` | `paid/models/add_members_response.py` |
| `CreateCustomerGroupMembersErrorBody` | `paid/errors/create_customer_group_members_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.delete_customer_group

- **Route**: `DELETE /customer-groups/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def delete_customer_group(id_: UUID, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerGroupDeleteResponse`
- **Returns (raw)**: `ApiResult[CustomerGroupDeleteResponse, DeleteCustomerGroupErrorBody]`
- **Error**: `DeleteCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroupDeleteResponse` | `paid/models/customer_group_delete_response.py` |
| `DeleteCustomerGroupErrorBody` | `paid/errors/delete_customer_group_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.delete_customer_group_members

- **Route**: `DELETE /customer-groups/{id}/members`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def delete_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `RemoveMembersResponse`
- **Returns (raw)**: `ApiResult[RemoveMembersResponse, DeleteCustomerGroupMembersErrorBody]`
- **Error**: `DeleteCustomerGroupMembersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberRequest` | `paid/models/member_request.py` |
| `MemberRequestDict` | `paid/models/member_request.py` |
| `RemoveMembersResponse` | `paid/models/remove_members_response.py` |
| `DeleteCustomerGroupMembersErrorBody` | `paid/errors/delete_customer_group_members_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.get_customer_group

- **Route**: `GET /customer-groups/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_customer_group(id_: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerGroupDetail`
- **Returns (raw)**: `ApiResult[CustomerGroupDetail, GetCustomerGroupErrorBody]`
- **Error**: `GetCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroupDetail` | `paid/models/customer_group_detail.py` |
| `GetCustomerGroupErrorBody` | `paid/errors/get_customer_group_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.list_customer_groups

- **Route**: `GET /customer-groups/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_customer_groups(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomerGroupListResponse`
- **Returns (raw)**: `ApiResult[CustomerGroupListResponse, ListCustomerGroupsErrorBody]`
- **Error**: `ListCustomerGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerGroupListResponse` | `paid/models/customer_group_list_response.py` |
| `ListCustomerGroupsErrorBody` | `paid/errors/list_customer_groups_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.update_customer_group

- **Route**: `PATCH /customer-groups/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_customer_group(id_: UUID, authorization: str, *, body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerGroupDetail`
- **Returns (raw)**: `ApiResult[CustomerGroupDetail, UpdateCustomerGroupErrorBody]`
- **Error**: `UpdateCustomerGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomerGroupRequest` | `paid/models/update_customer_group_request.py` |
| `UpdateCustomerGroupRequestDict` | `paid/models/update_customer_group_request.py` |
| `CustomerGroupDetail` | `paid/models/customer_group_detail.py` |
| `UpdateCustomerGroupErrorBody` | `paid/errors/update_customer_group_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.customer_groups.update_customer_group_members

- **Route**: `PUT /customer-groups/{id}/members`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SetMembersResponse`
- **Returns (raw)**: `ApiResult[SetMembersResponse, UpdateCustomerGroupMembersErrorBody]`
- **Error**: `UpdateCustomerGroupMembersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberRequest` | `paid/models/member_request.py` |
| `MemberRequestDict` | `paid/models/member_request.py` |
| `SetMembersResponse` | `paid/models/set_members_response.py` |
| `UpdateCustomerGroupMembersErrorBody` | `paid/errors/update_customer_group_members_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

