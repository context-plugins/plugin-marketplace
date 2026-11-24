<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdCreatives — operations

Accessor: `client.ad_creatives` · Source: `facebook_business_manager/apis/ad_creatives.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ad_creatives.create_ad_creative

- **Route**: `POST /act_{ad_account_id}/adcreatives`
- **Auth**: `bearer_auth`
- **Signature**: `def create_ad_creative(ad_account_id: str, body: AdCreativeCreate | AdCreativeCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`, `body`
- **Params**: `ad_account_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreateAdCreativeErrorBody]`
- **Error**: `CreateAdCreativeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdCreativeCreate` | `facebook_business_manager/models/ad_creative_create.py` |
| `AdCreativeCreateDict` | `facebook_business_manager/models/ad_creative_create.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreateAdCreativeErrorBody` | `facebook_business_manager/errors/create_ad_creative_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.ad_creatives.list_ad_creatives

- **Route**: `GET /act_{ad_account_id}/adcreatives`
- **Auth**: `bearer_auth`
- **Signature**: `def list_ad_creatives(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query · `limit` — query · `after` — query
- **Returns (parsed)**: `AdCreativeList`
- **Returns (raw)**: `ApiResult[AdCreativeList, ListAdCreativesErrorBody]`
- **Error**: `ListAdCreativesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdCreativeList` | `facebook_business_manager/models/ad_creative_list.py` |
| `ListAdCreativesErrorBody` | `facebook_business_manager/errors/list_ad_creatives_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

