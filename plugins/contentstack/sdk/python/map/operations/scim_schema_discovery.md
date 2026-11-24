<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimSchemaDiscovery — operations

Accessor: `client.scim_schema_discovery` · Source: `contentstack/apis/scim_schema_discovery.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scim_schema_discovery.get_scim_resource_types

- **Route**: `GET /scim/v2.0/ResourceTypes`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def get_scim_resource_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ScimListResponse`
- **Returns (raw)**: `ApiResult[ScimListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ScimListResponse` | `contentstack/models/scim_list_response.py` |

### client.scim_schema_discovery.get_scim_schemas

- **Route**: `GET /scim/v2.0/Schemas`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def get_scim_schemas(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ScimListResponse`
- **Returns (raw)**: `ApiResult[ScimListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ScimListResponse` | `contentstack/models/scim_list_response.py` |

