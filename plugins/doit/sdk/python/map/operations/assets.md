<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `doi_t/apis/assets.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.assets.create_asset

- **Route**: `POST /billing/v1/createAsset`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_asset(*, type_: str | None = "amazon-web-services", mode: str | None = "New", account_name: str | None = "Account name", root_email: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `mode` — query · `account_name` — query `accountName` · `root_email` — query `rootEmail`
- **Returns (parsed)**: `AssetResponse`
- **Returns (raw)**: `ApiResult[AssetResponse, CreateAssetErrorBody]`
- **Error**: `CreateAssetErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssetResponse` | `doi_t/models/asset_response.py` |
| `CreateAssetErrorBody` | `doi_t/errors/create_asset_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.assets.get_asset

- **Route**: `GET /billing/v1/assets/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_asset(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `AssetItemDetailed`
- **Returns (raw)**: `ApiResult[AssetItemDetailed, GetAssetErrorBody]`
- **Error**: `GetAssetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssetItemDetailed` | `doi_t/models/asset_item_detailed.py` |
| `GetAssetErrorBody` | `doi_t/errors/get_asset_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.assets.id_of_asset

- **Route**: `PATCH /billing/v1/assets/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def id_of_asset(id_: str, *, body: BillingV1AssetsRequest | BillingV1AssetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `BillingV1AssetsResponse1`
- **Returns (raw)**: `ApiResult[BillingV1AssetsResponse1, IdOfAssetErrorBody]`
- **Error**: `IdOfAssetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingV1AssetsRequest` | `doi_t/models/billing_v1_assets_request.py` |
| `BillingV1AssetsRequestDict` | `doi_t/models/billing_v1_assets_request.py` |
| `BillingV1AssetsResponse1` | `doi_t/models/billing_v1_assets_response1.py` |
| `IdOfAssetErrorBody` | `doi_t/errors/id_of_asset_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.assets.id_of_assets

- **Route**: `GET /billing/v1/assets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def id_of_assets(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter`
- **Returns (parsed)**: `BillingV1AssetsResponse`
- **Returns (raw)**: `ApiResult[BillingV1AssetsResponse, IdOfAssetsErrorBody]`
- **Error**: `IdOfAssetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingV1AssetsResponse` | `doi_t/models/billing_v1_assets_response.py` |
| `IdOfAssetsErrorBody` | `doi_t/errors/id_of_assets_error.py` |
| `Error` | `doi_t/models/error.py` |

