<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `contentstack/apis/assets.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.assets.get_all_assets

- **Route**: `GET /assets`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_all_assets(api_key: str, access_token: str, *, skip: int | None = 0, limit: int | None = 100, include_count: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`, `access_token`
- **Params**: `skip` — query · `limit` — query · `include_count` — query · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `AssetList`
- **Returns (raw)**: `ApiResult[AssetList, GetAllAssetsErrorBody]`
- **Error**: `GetAllAssetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssetList` | `contentstack/models/asset_list.py` |
| `GetAllAssetsErrorBody` | `contentstack/errors/get_all_assets_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.assets.get_single_asset

- **Route**: `GET /assets/{asset_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_single_asset(asset_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `asset_uid`, `api_key`, `access_token`
- **Params**: `asset_uid` — path · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `Asset`
- **Returns (raw)**: `ApiResult[Asset, GetSingleAssetErrorBody]`
- **Error**: `GetSingleAssetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Asset` | `contentstack/models/asset.py` |
| `GetSingleAssetErrorBody` | `contentstack/errors/get_single_asset_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.assets.upload_asset

- **Route**: `POST /assets`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def upload_asset(api_key: str, *, authtoken: str | None = None, asset_upload: FileInput | None = None, asset_title: str | None = None, asset_description: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`
- **Params**: `api_key` — header · `authtoken` — header · `asset_upload` — multipart file `asset[upload]` · `asset_title` — multipart field `asset[title]` · `asset_description` — multipart field `asset[description]`
- **Returns (parsed)**: `Asset2`
- **Returns (raw)**: `ApiResult[Asset2, UploadAssetErrorBody]`
- **Error**: `UploadAssetErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Asset2` | `contentstack/models/asset2.py` |
| `UploadAssetErrorBody` | `contentstack/errors/upload_asset_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

