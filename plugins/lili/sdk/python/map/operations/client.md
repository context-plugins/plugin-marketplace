<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `lili/client.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.add_webhook

- **Route**: `PUT /lili/api/v1/webhooks`
- **Auth**: `access_key`
- **Signature**: `def add_webhook(body: WebhookRequestModel | WebhookRequestModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebhookCreateResponse`
- **Returns (raw)**: `ApiResult[WebhookCreateResponse, AddWebhookErrorBody]`
- **Error**: `AddWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `JsonErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookRequestModel` | `lili/models/webhook_request_model.py` |
| `WebhookRequestModelDict` | `lili/models/webhook_request_model.py` |
| `WebhookCreateResponse` | `lili/models/webhook_create_response.py` |
| `AddWebhookErrorBody` | `lili/errors/add_webhook_error.py` |
| `JsonErrorResponse` | `lili/models/json_error_response.py` |

### client.create_payment_notification

- **Route**: `GET /lili/api/v1/{customerId}/bankLetter`
- **Auth**: `access_key`
- **Signature**: `def create_payment_notification(customer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.delete_webhook

- **Route**: `DELETE /lili/api/v1/webhooks/{webhookId}`
- **Auth**: `access_key`
- **Signature**: `def delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `JsonErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookErrorBody` | `lili/errors/delete_webhook_error.py` |
| `JsonErrorResponse` | `lili/models/json_error_response.py` |

### client.get_all

- **Route**: `GET /lili/api/v1/webhooks`
- **Auth**: `access_key`
- **Signature**: `def get_all(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `WebhookListResponse`
- **Returns (raw)**: `ApiResult[WebhookListResponse, GetAllErrorBody]`
- **Error**: `GetAllErrorBody` — **Case A (typed)**
- **Error arms**: `JsonErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookListResponse` | `lili/models/webhook_list_response.py` |
| `GetAllErrorBody` | `lili/errors/get_all_error.py` |
| `JsonErrorResponse` | `lili/models/json_error_response.py` |

### client.get_webhook

- **Route**: `GET /lili/api/v1/webhooks/{webhookId}`
- **Auth**: `access_key`
- **Signature**: `def get_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, GetWebhookErrorBody]`
- **Error**: `GetWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `JsonErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookResponse` | `lili/models/webhook_response.py` |
| `GetWebhookErrorBody` | `lili/errors/get_webhook_error.py` |
| `JsonErrorResponse` | `lili/models/json_error_response.py` |

### client.payment_list

- **Route**: `GET /lili/api/v1/partner/payments`
- **Auth**: `access_key`
- **Signature**: `def payment_list(*, customer_id: str | None = None, receiver_account_number: str | None = None, start_date: RFC3339DateTime | None = None, end_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `customer_id` — query `customerId` · `receiver_account_number` — query `receiverAccountNumber` · `start_date` — query `startDate` · `end_date` — query `endDate`
- **Returns (parsed)**: `PaymentListResponse`
- **Returns (raw)**: `ApiResult[PaymentListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentListResponse` | `lili/models/payment_list_response.py` |

### client.put_lili_api_v1_payments

- **Route**: `PUT /lili/api/v1/payments`
- **Auth**: `access_key`
- **Signature**: `def put_lili_api_v1_payments(*, body: PaymentRequest | PaymentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PaymentResponse`
- **Returns (raw)**: `ApiResult[PaymentResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentRequest` | `lili/models/payment_request.py` |
| `PaymentRequestDict` | `lili/models/payment_request.py` |
| `PaymentResponse` | `lili/models/payment_response.py` |

### client.register_account

- **Route**: `PUT /lili/api/v1/lead`
- **Auth**: `access_key`
- **Signature**: `def register_account(*, body: LeadRequest | LeadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LeadResponse`
- **Returns (raw)**: `ApiResult[LeadResponse, RegisterAccountErrorBody]`
- **Error**: `RegisterAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LeadRequest` | `lili/models/lead_request.py` |
| `LeadRequestDict` | `lili/models/lead_request.py` |
| `LeadResponse` | `lili/models/lead_response.py` |
| `RegisterAccountErrorBody` | `lili/errors/register_account_error.py` |

### client.update_lead

- **Route**: `POST /lili/api/v1/lead/{customerId}`
- **Auth**: `access_key`
- **Signature**: `def update_lead(customer_id: str, *, body: LeadRequest | LeadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateLeadErrorBody]`
- **Error**: `UpdateLeadErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LeadRequest` | `lili/models/lead_request.py` |
| `LeadRequestDict` | `lili/models/lead_request.py` |
| `UpdateLeadErrorBody` | `lili/errors/update_lead_error.py` |

### client.update_webhook

- **Route**: `POST /lili/api/v1/webhooks/{webhookId}`
- **Auth**: `access_key`
- **Signature**: `def update_webhook(webhook_id: str, body: WebhookRequestModel | WebhookRequestModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`, `body`
- **Params**: `webhook_id` — path `webhookId` · `body` — JSON body
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `JsonErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookRequestModel` | `lili/models/webhook_request_model.py` |
| `WebhookRequestModelDict` | `lili/models/webhook_request_model.py` |
| `WebhookResponse` | `lili/models/webhook_response.py` |
| `UpdateWebhookErrorBody` | `lili/errors/update_webhook_error.py` |
| `JsonErrorResponse` | `lili/models/json_error_response.py` |

### client.upload_additional_doc

- **Route**: `PUT /lili/api/v1/lead/{customerId}/upload`
- **Auth**: `access_key`
- **Signature**: `def upload_additional_doc(customer_id: str, *, body: LeadUpload | LeadUploadDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UploadAdditionalDocErrorBody]`
- **Error**: `UploadAdditionalDocErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LeadUpload` | `lili/models/lead_upload.py` |
| `LeadUploadDict` | `lili/models/lead_upload.py` |
| `UploadAdditionalDocErrorBody` | `lili/errors/upload_additional_doc_error.py` |

