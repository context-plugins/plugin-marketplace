<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ads — operations

Accessor: `client.ads` · Source: `facebook_business_manager/apis/ads.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ads.create_ad

- **Route**: `POST /act_{ad_account_id}/ads`
- **Auth**: `bearer_auth`
- **Signature**: `def create_ad(ad_account_id: str, body: AdCreate | AdCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`, `body`
- **Params**: `ad_account_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreateAdErrorBody]`
- **Error**: `CreateAdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdCreate` | `facebook_business_manager/models/ad_create.py` |
| `AdCreateDict` | `facebook_business_manager/models/ad_create.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreateAdErrorBody` | `facebook_business_manager/errors/create_ad_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.ads.get_ad

- **Route**: `GET /{ad_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_ad(ad_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_id`
- **Params**: `ad_id` — path · `fields` — query
- **Returns (parsed)**: `Ad`
- **Returns (raw)**: `ApiResult[Ad, GetAdErrorBody]`
- **Error**: `GetAdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ad` | `facebook_business_manager/models/ad.py` |
| `GetAdErrorBody` | `facebook_business_manager/errors/get_ad_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.ads.list_ads

- **Route**: `GET /act_{ad_account_id}/ads`
- **Auth**: `bearer_auth`
- **Signature**: `def list_ads(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query · `limit` — query · `after` — query
- **Returns (parsed)**: `AdList`
- **Returns (raw)**: `ApiResult[AdList, ListAdsErrorBody]`
- **Error**: `ListAdsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdList` | `facebook_business_manager/models/ad_list.py` |
| `ListAdsErrorBody` | `facebook_business_manager/errors/list_ads_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

