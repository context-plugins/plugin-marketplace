<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `ui_path/apis/assets.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.assets.create_asset

- **Route**: `POST /odata/Assets`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_asset(body: Asset | AssetDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `Asset`
- **Returns (raw)**: `ApiResult[Asset, CreateAssetErrorBody]`
- **Error**: `CreateAssetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Asset` | `ui_path/models/asset.py` |
| `AssetDict` | `ui_path/models/asset.py` |
| `CreateAssetErrorBody` | `ui_path/errors/create_asset_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.assets.delete_asset

- **Route**: `DELETE /odata/Assets({key})`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_asset(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAssetErrorBody]`
- **Error**: `DeleteAssetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAssetErrorBody` | `ui_path/errors/delete_asset_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.assets.get_asset

- **Route**: `GET /odata/Assets({key})`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_asset(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `Asset`
- **Returns (raw)**: `ApiResult[Asset, GetAssetErrorBody]`
- **Error**: `GetAssetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Asset` | `ui_path/models/asset.py` |
| `GetAssetErrorBody` | `ui_path/errors/get_asset_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.assets.list_assets

- **Route**: `GET /odata/Assets`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_assets(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `top` — query `$top` · `skip` — query `$skip` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataAssetCollection`
- **Returns (raw)**: `ApiResult[ODataAssetCollection, ListAssetsErrorBody]`
- **Error**: `ListAssetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataAssetCollection` | `ui_path/models/o_data_asset_collection.py` |
| `ListAssetsErrorBody` | `ui_path/errors/list_assets_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.assets.update_asset

- **Route**: `PUT /odata/Assets({key})`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_asset(key: int, body: Asset | AssetDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `Asset`
- **Returns (raw)**: `ApiResult[Asset, UpdateAssetErrorBody]`
- **Error**: `UpdateAssetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Asset` | `ui_path/models/asset.py` |
| `AssetDict` | `ui_path/models/asset.py` |
| `UpdateAssetErrorBody` | `ui_path/errors/update_asset_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

