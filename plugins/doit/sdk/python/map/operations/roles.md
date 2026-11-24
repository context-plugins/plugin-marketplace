<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `doi_t/apis/roles.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.roles.create_role

- **Route**: `POST /iam/v1/roles`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_role(idempotency_key: str, body: CreateRoleRequest | CreateRoleRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idempotency_key`, `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `RoleDoiTRolesApi`
- **Returns (raw)**: `ApiResult[RoleDoiTRolesApi, CreateRoleErrorBody]`
- **Error**: `CreateRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 409, 500] · `ProblemDetails` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateRoleRequest` | `doi_t/models/create_role_request.py` |
| `CreateRoleRequestDict` | `doi_t/models/create_role_request.py` |
| `RoleDoiTRolesApi` | `doi_t/models/role_doi_t_roles_api.py` |
| `CreateRoleErrorBody` | `doi_t/errors/create_role_error.py` |
| `Error` | `doi_t/models/error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.roles.delete_role

- **Route**: `DELETE /iam/v1/roles/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_role(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRoleErrorBody]`
- **Error**: `DeleteRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRoleErrorBody` | `doi_t/errors/delete_role_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.roles.get_role

- **Route**: `GET /iam/v1/roles/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_role(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `RoleDoiTRolesApi`
- **Returns (raw)**: `ApiResult[RoleDoiTRolesApi, GetRoleErrorBody]`
- **Error**: `GetRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleDoiTRolesApi` | `doi_t/models/role_doi_t_roles_api.py` |
| `GetRoleErrorBody` | `doi_t/errors/get_role_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.roles.list_roles

- **Route**: `GET /iam/v1/roles`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_roles(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `IamV1RolesResponse`
- **Returns (raw)**: `ApiResult[IamV1RolesResponse, ListRolesErrorBody]`
- **Error**: `ListRolesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IamV1RolesResponse` | `doi_t/models/iam_v1_roles_response.py` |
| `ListRolesErrorBody` | `doi_t/errors/list_roles_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.roles.update_role

- **Route**: `PATCH /iam/v1/roles/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_role(id_: str, body: UpdateRoleRequest | UpdateRoleRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `RoleDoiTRolesApi`
- **Returns (raw)**: `ApiResult[RoleDoiTRolesApi, UpdateRoleErrorBody]`
- **Error**: `UpdateRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateRoleRequest` | `doi_t/models/update_role_request.py` |
| `UpdateRoleRequestDict` | `doi_t/models/update_role_request.py` |
| `RoleDoiTRolesApi` | `doi_t/models/role_doi_t_roles_api.py` |
| `UpdateRoleErrorBody` | `doi_t/errors/update_role_error.py` |
| `Error` | `doi_t/models/error.py` |

