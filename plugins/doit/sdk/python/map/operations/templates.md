<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `doi_t/apis/templates.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.templates.get_cloudflow_template2

- **Route**: `GET /cloudflow/v1/templates/{templateId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloudflow_template2(template_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`
- **Params**: `template_id` — path `templateId`
- **Returns (parsed)**: `CloudflowTemplate`
- **Returns (raw)**: `ApiResult[CloudflowTemplate, GetCloudflowTemplate2ErrorBody]`
- **Error**: `GetCloudflowTemplate2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowTemplate` | `doi_t/models/cloudflow_template.py` |
| `GetCloudflowTemplate2ErrorBody` | `doi_t/errors/get_cloudflow_template2_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.templates.list_cloudflow_templates2

- **Route**: `GET /cloudflow/v1/templates`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloudflow_templates2(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `CloudflowTemplateListResponse`
- **Returns (raw)**: `ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplates2ErrorBody]`
- **Error**: `ListCloudflowTemplates2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowTemplateListResponse` | `doi_t/models/cloudflow_template_list_response.py` |
| `ListCloudflowTemplates2ErrorBody` | `doi_t/errors/list_cloudflow_templates2_error.py` |
| `Error` | `doi_t/models/error.py` |

