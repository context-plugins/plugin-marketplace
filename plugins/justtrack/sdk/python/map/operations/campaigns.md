<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `justtrack/apis/campaigns.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaigns.post_management_v1_campaign

- **Route**: `POST /management/v1/campaign`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_campaign(*, body: CreateCampaignRequest | CreateCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CampaignOutput`
- **Returns (raw)**: `ApiResult[CampaignOutput, PostManagementV1CampaignErrorBody]`
- **Error**: `PostManagementV1CampaignErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCampaignRequest` | `justtrack/models/create_campaign_request.py` |
| `CreateCampaignRequestDict` | `justtrack/models/create_campaign_request.py` |
| `CampaignOutput` | `justtrack/models/campaign_output.py` |
| `PostManagementV1CampaignErrorBody` | `justtrack/errors/post_management_v1_campaign_error.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

### client.campaigns.post_management_v1_campaigns

- **Route**: `POST /management/v1/campaigns`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_campaigns(*, body: ListCampaignsRequest | ListCampaignsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CampaignOutput`
- **Returns (raw)**: `ApiResult[CampaignOutput, PostManagementV1CampaignsErrorBody]`
- **Error**: `PostManagementV1CampaignsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListCampaignsRequest` | `justtrack/models/list_campaigns_request.py` |
| `ListCampaignsRequestDict` | `justtrack/models/list_campaigns_request.py` |
| `CampaignOutput` | `justtrack/models/campaign_output.py` |
| `PostManagementV1CampaignsErrorBody` | `justtrack/errors/post_management_v1_campaigns_error.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

