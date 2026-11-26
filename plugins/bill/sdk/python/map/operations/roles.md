<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `bill/apis/roles.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.roles.get_organization_user_role

- **Route**: `GET /v3/roles/{roleId}`
- **Server**: `default`
- **Signature**: `def get_organization_user_role(role_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `role_id`
- **Params**: `role_id` — path `roleId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RoleResponseDto`
- **Returns (raw)**: `ApiResult[RoleResponseDto, GetOrganizationUserRoleErrorBody]`
- **Error**: `GetOrganizationUserRoleErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleResponseDto` | `bill/models/role_response_dto.py` |
| `GetOrganizationUserRoleErrorBody` | `bill/errors/get_organization_user_role_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.roles.list_organization_user_roles

- **Route**: `GET /v3/roles`
- **Server**: `default`
- **Signature**: `def list_organization_user_roles(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoRoleResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoRoleResponseDto, ListOrganizationUserRolesErrorBody]`
- **Error**: `ListOrganizationUserRolesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoRoleResponseDto` | `bill/models/list_response_dto_role_response_dto.py` |
| `ListOrganizationUserRolesErrorBody` | `bill/errors/list_organization_user_roles_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

