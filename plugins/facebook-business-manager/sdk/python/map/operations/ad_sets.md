<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdSets — operations

Accessor: `client.ad_sets` · Source: `facebook_business_manager/apis/ad_sets.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ad_sets.create_ad_set

- **Route**: `POST /act_{ad_account_id}/adsets`
- **Auth**: `bearer_auth`
- **Signature**: `def create_ad_set(ad_account_id: str, body: AdSetCreate | AdSetCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`, `body`
- **Params**: `ad_account_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreateAdSetErrorBody]`
- **Error**: `CreateAdSetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdSetCreate` | `facebook_business_manager/models/ad_set_create.py` |
| `AdSetCreateDict` | `facebook_business_manager/models/ad_set_create.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreateAdSetErrorBody` | `facebook_business_manager/errors/create_ad_set_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.ad_sets.get_ad_set

- **Route**: `GET /{ad_set_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_ad_set(ad_set_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_set_id`
- **Params**: `ad_set_id` — path · `fields` — query
- **Returns (parsed)**: `AdSet`
- **Returns (raw)**: `ApiResult[AdSet, GetAdSetErrorBody]`
- **Error**: `GetAdSetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdSet` | `facebook_business_manager/models/ad_set.py` |
| `GetAdSetErrorBody` | `facebook_business_manager/errors/get_ad_set_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.ad_sets.list_ad_sets

- **Route**: `GET /act_{ad_account_id}/adsets`
- **Auth**: `bearer_auth`
- **Signature**: `def list_ad_sets(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query · `limit` — query · `after` — query
- **Returns (parsed)**: `AdSetList`
- **Returns (raw)**: `ApiResult[AdSetList, ListAdSetsErrorBody]`
- **Error**: `ListAdSetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdSetList` | `facebook_business_manager/models/ad_set_list.py` |
| `ListAdSetsErrorBody` | `facebook_business_manager/errors/list_ad_sets_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.ad_sets.update_ad_set

- **Route**: `POST /{ad_set_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_ad_set(ad_set_id: str, body: AdSetUpdate | AdSetUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_set_id`, `body`
- **Params**: `ad_set_id` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, UpdateAdSetErrorBody]`
- **Error**: `UpdateAdSetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdSetUpdate` | `facebook_business_manager/models/ad_set_update.py` |
| `AdSetUpdateDict` | `facebook_business_manager/models/ad_set_update.py` |
| `SuccessResponse` | `facebook_business_manager/models/success_response.py` |
| `UpdateAdSetErrorBody` | `facebook_business_manager/errors/update_ad_set_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

