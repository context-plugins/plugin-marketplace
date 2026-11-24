<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `fillo/apis/webhooks_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_form_webhook

- **Route**: `POST /api/v1/manage/forms/{form}/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def create_form_webhook(form: str, body: ApiV1ManageFormsWebhooksRequest | ApiV1ManageFormsWebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `WebhookCreated`
- **Returns (raw)**: `ApiResult[WebhookCreated, CreateFormWebhookErrorBody]`
- **Error**: `CreateFormWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsWebhooksRequest` | `fillo/models/api_v1_manage_forms_webhooks_request.py` |
| `ApiV1ManageFormsWebhooksRequestDict` | `fillo/models/api_v1_manage_forms_webhooks_request.py` |
| `WebhookCreated` | `fillo/models/webhook_created.py` |
| `CreateFormWebhookErrorBody` | `fillo/errors/create_form_webhook_error.py` |
| `Error` | `fillo/models/error.py` |

### client.webhooks_api.delete_form_webhook

- **Route**: `DELETE /api/v1/manage/forms/{form}/webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_form_webhook(form: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `id_`
- **Params**: `form` — path · `id_` — path `id`
- **Returns (parsed)**: `ApiV1ManageFormsWebhooksResponse2`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsWebhooksResponse2, DeleteFormWebhookErrorBody]`
- **Error**: `DeleteFormWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsWebhooksResponse2` | `fillo/models/api_v1_manage_forms_webhooks_response2.py` |
| `DeleteFormWebhookErrorBody` | `fillo/errors/delete_form_webhook_error.py` |
| `Error` | `fillo/models/error.py` |

### client.webhooks_api.list_form_webhooks

- **Route**: `GET /api/v1/manage/forms/{form}/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def list_form_webhooks(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `ApiV1ManageFormsWebhooksResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsWebhooksResponse, ListFormWebhooksErrorBody]`
- **Error**: `ListFormWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsWebhooksResponse` | `fillo/models/api_v1_manage_forms_webhooks_response.py` |
| `ListFormWebhooksErrorBody` | `fillo/errors/list_form_webhooks_error.py` |
| `Error` | `fillo/models/error.py` |

### client.webhooks_api.update_form_webhook

- **Route**: `PATCH /api/v1/manage/forms/{form}/webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_form_webhook(form: str, id_: str, body: ApiV1ManageFormsWebhooksRequest1 | ApiV1ManageFormsWebhooksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `id_`, `body`
- **Params**: `form` — path · `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsWebhooksResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsWebhooksResponse1, UpdateFormWebhookErrorBody]`
- **Error**: `UpdateFormWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsWebhooksRequest1` | `fillo/models/api_v1_manage_forms_webhooks_request1.py` |
| `ApiV1ManageFormsWebhooksRequest1Dict` | `fillo/models/api_v1_manage_forms_webhooks_request1.py` |
| `ApiV1ManageFormsWebhooksResponse1` | `fillo/models/api_v1_manage_forms_webhooks_response1.py` |
| `UpdateFormWebhookErrorBody` | `fillo/errors/update_form_webhook_error.py` |
| `Error` | `fillo/models/error.py` |

