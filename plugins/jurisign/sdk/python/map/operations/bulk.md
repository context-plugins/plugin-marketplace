<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bulk — operations

Accessor: `client.bulk` · Source: `juri_sign/apis/bulk.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk.cancel_bulk_campaign

- **Route**: `POST /bulk-campaigns/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def cancel_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BulkCampaignsCancelResponse`
- **Returns (raw)**: `ApiResult[BulkCampaignsCancelResponse, CancelBulkCampaignErrorBody]`
- **Error**: `CancelBulkCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsCancelResponse` | `juri_sign/models/bulk_campaigns_cancel_response.py` |
| `CancelBulkCampaignErrorBody` | `juri_sign/errors/cancel_bulk_campaign_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.create_bulk_campaign

- **Route**: `POST /bulk-campaigns`
- **Auth**: `bearer_auth`
- **Signature**: `def create_bulk_campaign(body: BulkCampaignsRequest | BulkCampaignsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BulkCampaignsResponse1`
- **Returns (raw)**: `ApiResult[BulkCampaignsResponse1, CreateBulkCampaignErrorBody]`
- **Error**: `CreateBulkCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsRequest` | `juri_sign/models/bulk_campaigns_request.py` |
| `BulkCampaignsRequestDict` | `juri_sign/models/bulk_campaigns_request.py` |
| `BulkCampaignsResponse1` | `juri_sign/models/bulk_campaigns_response1.py` |
| `CreateBulkCampaignErrorBody` | `juri_sign/errors/create_bulk_campaign_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.bulk.create_bulk_template

- **Route**: `POST /bulk-templates`
- **Auth**: `bearer_auth`
- **Signature**: `def create_bulk_template(body: BulkTemplatesRequest | BulkTemplatesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BulkTemplatesResponse1`
- **Returns (raw)**: `ApiResult[BulkTemplatesResponse1, CreateBulkTemplateErrorBody]`
- **Error**: `CreateBulkTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkTemplatesRequest` | `juri_sign/models/bulk_templates_request.py` |
| `BulkTemplatesRequestDict` | `juri_sign/models/bulk_templates_request.py` |
| `BulkTemplatesResponse1` | `juri_sign/models/bulk_templates_response1.py` |
| `CreateBulkTemplateErrorBody` | `juri_sign/errors/create_bulk_template_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.bulk.delete_bulk_campaign

- **Route**: `DELETE /bulk-campaigns/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteBulkCampaignErrorBody]`
- **Error**: `DeleteBulkCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `DeleteBulkCampaignErrorBody` | `juri_sign/errors/delete_bulk_campaign_error.py` |

### client.bulk.delete_bulk_template

- **Route**: `DELETE /bulk-templates/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_bulk_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteBulkTemplateErrorBody]`
- **Error**: `DeleteBulkTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `DeleteBulkTemplateErrorBody` | `juri_sign/errors/delete_bulk_template_error.py` |

### client.bulk.export_bulk_campaign_results

- **Route**: `GET /bulk-campaigns/{id}/export`
- **Auth**: `bearer_auth`
- **Signature**: `def export_bulk_campaign_results(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BulkCampaignsExportResponse`
- **Returns (raw)**: `ApiResult[BulkCampaignsExportResponse, ExportBulkCampaignResultsErrorBody]`
- **Error**: `ExportBulkCampaignResultsErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsExportResponse` | `juri_sign/models/bulk_campaigns_export_response.py` |
| `ExportBulkCampaignResultsErrorBody` | `juri_sign/errors/export_bulk_campaign_results_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.get_bulk_campaign

- **Route**: `GET /bulk-campaigns/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BulkCampaignsResponse2`
- **Returns (raw)**: `ApiResult[BulkCampaignsResponse2, GetBulkCampaignErrorBody]`
- **Error**: `GetBulkCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsResponse2` | `juri_sign/models/bulk_campaigns_response2.py` |
| `GetBulkCampaignErrorBody` | `juri_sign/errors/get_bulk_campaign_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.get_bulk_template

- **Route**: `GET /bulk-templates/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_bulk_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BulkTemplatesResponse1`
- **Returns (raw)**: `ApiResult[BulkTemplatesResponse1, GetBulkTemplateErrorBody]`
- **Error**: `GetBulkTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkTemplatesResponse1` | `juri_sign/models/bulk_templates_response1.py` |
| `GetBulkTemplateErrorBody` | `juri_sign/errors/get_bulk_template_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.launch_bulk_campaign

- **Route**: `POST /bulk-campaigns/{id}/launch`
- **Auth**: `bearer_auth`
- **Signature**: `def launch_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BulkCampaignsLaunchResponse`
- **Returns (raw)**: `ApiResult[BulkCampaignsLaunchResponse, LaunchBulkCampaignErrorBody]`
- **Error**: `LaunchBulkCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsLaunchResponse` | `juri_sign/models/bulk_campaigns_launch_response.py` |
| `LaunchBulkCampaignErrorBody` | `juri_sign/errors/launch_bulk_campaign_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.list_bulk_campaigns

- **Route**: `GET /bulk-campaigns`
- **Auth**: `bearer_auth`
- **Signature**: `def list_bulk_campaigns(*, status: str | None = None, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `per_page` — query
- **Returns (parsed)**: `BulkCampaignsResponse`
- **Returns (raw)**: `ApiResult[BulkCampaignsResponse, ListBulkCampaignsErrorBody]`
- **Error**: `ListBulkCampaignsErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsResponse` | `juri_sign/models/bulk_campaigns_response.py` |
| `ListBulkCampaignsErrorBody` | `juri_sign/errors/list_bulk_campaigns_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.list_bulk_templates

- **Route**: `GET /bulk-templates`
- **Auth**: `bearer_auth`
- **Signature**: `def list_bulk_templates(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `BulkTemplatesResponse`
- **Returns (raw)**: `ApiResult[BulkTemplatesResponse, ListBulkTemplatesErrorBody]`
- **Error**: `ListBulkTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkTemplatesResponse` | `juri_sign/models/bulk_templates_response.py` |
| `ListBulkTemplatesErrorBody` | `juri_sign/errors/list_bulk_templates_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.retry_bulk_campaign

- **Route**: `POST /bulk-campaigns/{id}/retry`
- **Auth**: `bearer_auth`
- **Signature**: `def retry_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BulkCampaignsRetryResponse`
- **Returns (raw)**: `ApiResult[BulkCampaignsRetryResponse, RetryBulkCampaignErrorBody]`
- **Error**: `RetryBulkCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkCampaignsRetryResponse` | `juri_sign/models/bulk_campaigns_retry_response.py` |
| `RetryBulkCampaignErrorBody` | `juri_sign/errors/retry_bulk_campaign_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.bulk.update_bulk_template

- **Route**: `PUT /bulk-templates/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_bulk_template(id_: UUID, *, body: BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `BulkTemplatesResponse1`
- **Returns (raw)**: `ApiResult[BulkTemplatesResponse1, UpdateBulkTemplateErrorBody]`
- **Error**: `UpdateBulkTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkTemplatesRequest1` | `juri_sign/models/bulk_templates_request1.py` |
| `BulkTemplatesRequest1Dict` | `juri_sign/models/bulk_templates_request1.py` |
| `BulkTemplatesResponse1` | `juri_sign/models/bulk_templates_response1.py` |
| `UpdateBulkTemplateErrorBody` | `juri_sign/errors/update_bulk_template_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

