<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomAudiences — operations

Accessor: `client.custom_audiences` · Source: `facebook_business_manager/apis/custom_audiences.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_audiences.create_custom_audience

- **Route**: `POST /act_{ad_account_id}/customaudiences`
- **Auth**: `bearer_auth`
- **Signature**: `def create_custom_audience(ad_account_id: str, body: CustomAudienceCreate | CustomAudienceCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`, `body`
- **Params**: `ad_account_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreateCustomAudienceErrorBody]`
- **Error**: `CreateCustomAudienceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomAudienceCreate` | `facebook_business_manager/models/custom_audience_create.py` |
| `CustomAudienceCreateDict` | `facebook_business_manager/models/custom_audience_create.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreateCustomAudienceErrorBody` | `facebook_business_manager/errors/create_custom_audience_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.custom_audiences.list_custom_audiences

- **Route**: `GET /act_{ad_account_id}/customaudiences`
- **Auth**: `bearer_auth`
- **Signature**: `def list_custom_audiences(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query · `limit` — query · `after` — query
- **Returns (parsed)**: `CustomAudienceList`
- **Returns (raw)**: `ApiResult[CustomAudienceList, ListCustomAudiencesErrorBody]`
- **Error**: `ListCustomAudiencesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomAudienceList` | `facebook_business_manager/models/custom_audience_list.py` |
| `ListCustomAudiencesErrorBody` | `facebook_business_manager/errors/list_custom_audiences_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

