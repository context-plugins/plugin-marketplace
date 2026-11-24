<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sharing — operations

Accessor: `client.sharing` · Source: `doi_t/apis/sharing.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sharing.get_resource_permission

- **Route**: `GET /sharing/v1/{resourceType}/{resourceId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_resource_permission(resource_type: ResourceTypeOrStr, resource_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_type`, `resource_id`
- **Params**: `resource_type` — path `resourceType` · `resource_id` — path `resourceId`
- **Returns (parsed)**: `ResourcePermissionsResponse`
- **Returns (raw)**: `ApiResult[ResourcePermissionsResponse, GetResourcePermissionErrorBody]`
- **Error**: `GetResourcePermissionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceTypeOrStr` | `doi_t/models/enums/resource_type.py` |
| `ResourcePermissionsResponse` | `doi_t/models/resource_permissions_response.py` |
| `GetResourcePermissionErrorBody` | `doi_t/errors/get_resource_permission_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.sharing.update_resource_permission

- **Route**: `PUT /sharing/v1/{resourceType}/{resourceId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_resource_permission(resource_type: ResourceTypeOrStr, resource_id: str, *, body: SharingV1Request | SharingV1RequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_type`, `resource_id`
- **Params**: `resource_type` — path `resourceType` · `resource_id` — path `resourceId` · `body` — JSON body
- **Returns (parsed)**: `ResourcePermissionsResponse`
- **Returns (raw)**: `ApiResult[ResourcePermissionsResponse, UpdateResourcePermissionErrorBody]`
- **Error**: `UpdateResourcePermissionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceTypeOrStr` | `doi_t/models/enums/resource_type.py` |
| `SharingV1Request` | `doi_t/models/sharing_v1_request.py` |
| `SharingV1RequestDict` | `doi_t/models/sharing_v1_request.py` |
| `ResourcePermissionsResponse` | `doi_t/models/resource_permissions_response.py` |
| `UpdateResourcePermissionErrorBody` | `doi_t/errors/update_resource_permission_error.py` |
| `Error` | `doi_t/models/error.py` |

