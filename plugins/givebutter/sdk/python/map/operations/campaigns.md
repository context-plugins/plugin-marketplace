<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `givebutter/apis/campaigns.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaigns.campaigns_destroy

- **Route**: `DELETE /v1/campaigns/{campaign}`
- **Auth**: `http`
- **Signature**: `def campaigns_destroy(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CampaignsDestroyErrorBody]`
- **Error**: `CampaignsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `V1Campaigns409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignsDestroyErrorBody` | `givebutter/errors/campaigns_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `V1Campaigns409Error1` | `givebutter/models/v1_campaigns409_error1.py` |

### client.campaigns.campaigns_index

- **Route**: `GET /v1/campaigns`
- **Auth**: `http`
- **Signature**: `def campaigns_index(*, scope: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `scope` — query
- **Returns (parsed)**: `V1CampaignsResponse`
- **Returns (raw)**: `ApiResult[V1CampaignsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1CampaignsResponse` | `givebutter/models/v1_campaigns_response.py` |

### client.campaigns.campaigns_show

- **Route**: `GET /v1/campaigns/{campaign}`
- **Auth**: `http`
- **Signature**: `def campaigns_show(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `CampaignResource`
- **Returns (raw)**: `ApiResult[CampaignResource, CampaignsShowErrorBody]`
- **Error**: `CampaignsShowErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignResource` | `givebutter/models/campaign_resource.py` |
| `CampaignsShowErrorBody` | `givebutter/errors/campaigns_show_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaigns.campaigns_store

- **Route**: `POST /v1/campaigns`
- **Auth**: `http`
- **Signature**: `def campaigns_store(body: StoreCampaignRequest | StoreCampaignRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CampaignResource`
- **Returns (raw)**: `ApiResult[CampaignResource, CampaignsStoreErrorBody]`
- **Error**: `CampaignsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreCampaignRequest` | `givebutter/models/store_campaign_request.py` |
| `StoreCampaignRequestDict` | `givebutter/models/store_campaign_request.py` |
| `CampaignResource` | `givebutter/models/campaign_resource.py` |
| `CampaignsStoreErrorBody` | `givebutter/errors/campaigns_store_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.campaigns.campaigns_update

- **Route**: `PUT /v1/campaigns/{campaign}`
- **Auth**: `http`
- **Signature**: `def campaigns_update(campaign: int, *, body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path · `body` — JSON body
- **Returns (parsed)**: `CampaignResource`
- **Returns (raw)**: `ApiResult[CampaignResource, CampaignsUpdateErrorBody]`
- **Error**: `CampaignsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCampaignRequest` | `givebutter/models/update_campaign_request.py` |
| `UpdateCampaignRequestDict` | `givebutter/models/update_campaign_request.py` |
| `CampaignResource` | `givebutter/models/campaign_resource.py` |
| `CampaignsUpdateErrorBody` | `givebutter/errors/campaigns_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

