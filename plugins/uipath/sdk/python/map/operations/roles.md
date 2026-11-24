<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `ui_path/apis/roles.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.roles.list_roles

- **Route**: `GET /odata/Roles`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_roles(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `top` — query `$top` · `skip` — query `$skip`
- **Returns (parsed)**: `ODataRoleCollection`
- **Returns (raw)**: `ApiResult[ODataRoleCollection, ListRolesErrorBody]`
- **Error**: `ListRolesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataRoleCollection` | `ui_path/models/o_data_role_collection.py` |
| `ListRolesErrorBody` | `ui_path/errors/list_roles_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

