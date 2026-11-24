<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `facebook_business_manager/apis/campaigns.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaigns.create_campaign

- **Route**: `POST /act_{ad_account_id}/campaigns`
- **Auth**: `bearer_auth`
- **Signature**: `def create_campaign(ad_account_id: str, body: CampaignCreate | CampaignCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`, `body`
- **Params**: `ad_account_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreateCampaignErrorBody]`
- **Error**: `CreateCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignCreate` | `facebook_business_manager/models/campaign_create.py` |
| `CampaignCreateDict` | `facebook_business_manager/models/campaign_create.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreateCampaignErrorBody` | `facebook_business_manager/errors/create_campaign_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.campaigns.delete_campaign

- **Route**: `DELETE /{campaign_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_campaign(campaign_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`
- **Params**: `campaign_id` — path
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, DeleteCampaignErrorBody]`
- **Error**: `DeleteCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessResponse` | `facebook_business_manager/models/success_response.py` |
| `DeleteCampaignErrorBody` | `facebook_business_manager/errors/delete_campaign_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.campaigns.get_campaign

- **Route**: `GET /{campaign_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_campaign(campaign_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`
- **Params**: `campaign_id` — path · `fields` — query
- **Returns (parsed)**: `Campaign`
- **Returns (raw)**: `ApiResult[Campaign, GetCampaignErrorBody]`
- **Error**: `GetCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Campaign` | `facebook_business_manager/models/campaign.py` |
| `GetCampaignErrorBody` | `facebook_business_manager/errors/get_campaign_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.campaigns.list_campaigns

- **Route**: `GET /act_{ad_account_id}/campaigns`
- **Auth**: `bearer_auth`
- **Signature**: `def list_campaigns(ad_account_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, filtering: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query · `limit` — query · `after` — query · `filtering` — query
- **Returns (parsed)**: `CampaignList`
- **Returns (raw)**: `ApiResult[CampaignList, ListCampaignsErrorBody]`
- **Error**: `ListCampaignsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignList` | `facebook_business_manager/models/campaign_list.py` |
| `ListCampaignsErrorBody` | `facebook_business_manager/errors/list_campaigns_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.campaigns.update_campaign

- **Route**: `POST /{campaign_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_campaign(campaign_id: str, body: CampaignUpdate | CampaignUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`, `body`
- **Params**: `campaign_id` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, UpdateCampaignErrorBody]`
- **Error**: `UpdateCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignUpdate` | `facebook_business_manager/models/campaign_update.py` |
| `CampaignUpdateDict` | `facebook_business_manager/models/campaign_update.py` |
| `SuccessResponse` | `facebook_business_manager/models/success_response.py` |
| `UpdateCampaignErrorBody` | `facebook_business_manager/errors/update_campaign_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

