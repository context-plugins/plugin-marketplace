<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `paid/apis/webhooks_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.list_webhooks

- **Route**: `GET /webhooks/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_webhooks(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `WebhookListResponse`
- **Returns (raw)**: `ApiResult[WebhookListResponse, ListWebhooksErrorBody]`
- **Error**: `ListWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookListResponse` | `paid/models/webhook_list_response.py` |
| `ListWebhooksErrorBody` | `paid/errors/list_webhooks_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.webhooks_api.rotate_webhook_secret

- **Route**: `POST /webhooks/rotate-secret`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def rotate_webhook_secret(authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `RotateWebhookSecretResponse`
- **Returns (raw)**: `ApiResult[RotateWebhookSecretResponse, RotateWebhookSecretErrorBody]`
- **Error**: `RotateWebhookSecretErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RotateWebhookSecretResponse` | `paid/models/rotate_webhook_secret_response.py` |
| `RotateWebhookSecretErrorBody` | `paid/errors/rotate_webhook_secret_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.webhooks_api.test_webhook

- **Route**: `POST /webhooks/{webhookName}/test`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def test_webhook(webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_name`, `authorization`
- **Params**: `webhook_name` — path `webhookName` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `WebhookTestResponse`
- **Returns (raw)**: `ApiResult[WebhookTestResponse, TestWebhookErrorBody]`
- **Error**: `TestWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksWebhookNameTestPostParametersWebhookNameOrStr` | `paid/models/enums/webhooks_webhook_name_test_post_parameters_webhook_name.py` |
| `WebhookTestResponse` | `paid/models/webhook_test_response.py` |
| `TestWebhookErrorBody` | `paid/errors/test_webhook_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.webhooks_api.update_webhook

- **Route**: `PATCH /webhooks/{webhookName}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_webhook(webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr, authorization: str, *, body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_name`, `authorization`
- **Params**: `webhook_name` — path `webhookName` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `WebhookUpdateResponse`
- **Returns (raw)**: `ApiResult[WebhookUpdateResponse, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksWebhookNamePatchParametersWebhookNameOrStr` | `paid/models/enums/webhooks_webhook_name_patch_parameters_webhook_name.py` |
| `UpdateWebhookRequest` | `paid/models/update_webhook_request.py` |
| `UpdateWebhookRequestDict` | `paid/models/update_webhook_request.py` |
| `WebhookUpdateResponse` | `paid/models/webhook_update_response.py` |
| `UpdateWebhookErrorBody` | `paid/errors/update_webhook_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

