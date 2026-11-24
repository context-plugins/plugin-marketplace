<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `hightouch/apis/campaigns.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaigns.get_send_statuses

- **Route**: `POST /campaigns/{campaignId}/sends/batch-get`
- **Auth**: `bearer_auth`
- **Signature**: `def get_send_statuses(campaign_id: str, body: BatchSendStatusRequest | BatchSendStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`, `body`
- **Params**: `campaign_id` — path `campaignId` · `body` — JSON body
- **Returns (parsed)**: `BatchSendStatusResponse`
- **Returns (raw)**: `ApiResult[BatchSendStatusResponse, GetSendStatusesErrorBody]`
- **Error**: `GetSendStatusesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `BatchSendStatusRequest` | `hightouch/models/batch_send_status_request.py` |
| `BatchSendStatusRequestDict` | `hightouch/models/batch_send_status_request.py` |
| `BatchSendStatusResponse` | `hightouch/models/batch_send_status_response.py` |
| `GetSendStatusesErrorBody` | `hightouch/errors/get_send_statuses_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.campaigns.trigger_campaign

- **Route**: `POST /campaigns/{campaignId}/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_campaign(campaign_id: str, body: StartCampaignRequest | StartCampaignRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`, `body`
- **Params**: `campaign_id` — path `campaignId` · `body` — JSON body
- **Returns (parsed)**: `CampaignsTriggerResponse`
- **Returns (raw)**: `ApiResult[CampaignsTriggerResponse, TriggerCampaignErrorBody]`
- **Error**: `TriggerCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `TriggerErrorResponse` [400, 404, 429] · `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `StartCampaignRequest` | `hightouch/models/start_campaign_request.py` |
| `StartCampaignRequestDict` | `hightouch/models/start_campaign_request.py` |
| `CampaignsTriggerResponse` | `hightouch/models/unions/campaigns_trigger_response.py` |
| `TriggerCampaignErrorBody` | `hightouch/errors/trigger_campaign_error.py` |
| `TriggerErrorResponse` | `hightouch/models/trigger_error_response.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

