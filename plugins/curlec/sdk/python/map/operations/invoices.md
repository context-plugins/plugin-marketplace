<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `curlec/apis/invoices.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.invoices.cancel_invoice

- **Route**: `POST /invoices/{id}/cancel`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def cancel_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, CancelInvoiceErrorBody]`
- **Error**: `CancelInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Invoice` | `curlec/models/invoice.py` |
| `CancelInvoiceErrorBody` | `curlec/errors/cancel_invoice_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.create_invoice

- **Route**: `POST /invoices`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_invoice(body: InvoicesRequest | InvoicesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, CreateInvoiceErrorBody]`
- **Error**: `CreateInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoicesRequest` | `curlec/models/invoices_request.py` |
| `InvoicesRequestDict` | `curlec/models/invoices_request.py` |
| `Invoice` | `curlec/models/invoice.py` |
| `CreateInvoiceErrorBody` | `curlec/errors/create_invoice_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.delete_invoice

- **Route**: `DELETE /invoices/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def delete_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteInvoiceErrorBody]`
- **Error**: `DeleteInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteInvoiceErrorBody` | `curlec/errors/delete_invoice_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.fetch_invoice

- **Route**: `GET /invoices/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, FetchInvoiceErrorBody]`
- **Error**: `FetchInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Invoice` | `curlec/models/invoice.py` |
| `FetchInvoiceErrorBody` | `curlec/errors/fetch_invoice_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.issue_invoice

- **Route**: `POST /invoices/{id}/issue`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def issue_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, IssueInvoiceErrorBody]`
- **Error**: `IssueInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Invoice` | `curlec/models/invoice.py` |
| `IssueInvoiceErrorBody` | `curlec/errors/issue_invoice_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.list_invoices

- **Route**: `GET /invoices`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_invoices(*, type_: Type3OrStr | None = None, payment_id: str | None = None, customer_id: str | None = None, subscription_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `payment_id` — query · `customer_id` — query · `subscription_id` — query · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `InvoicesResponse`
- **Returns (raw)**: `ApiResult[InvoicesResponse, ListInvoicesErrorBody]`
- **Error**: `ListInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type3OrStr` | `curlec/models/enums/type3.py` |
| `InvoicesResponse` | `curlec/models/invoices_response.py` |
| `ListInvoicesErrorBody` | `curlec/errors/list_invoices_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.send_invoice_notification

- **Route**: `POST /invoices/{id}/notify_by/{medium}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def send_invoice_notification(id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `medium`
- **Params**: `id_` — path `id` · `medium` — path
- **Returns (parsed)**: `InvoicesNotifyByResponse`
- **Returns (raw)**: `ApiResult[InvoicesNotifyByResponse, SendInvoiceNotificationErrorBody]`
- **Error**: `SendInvoiceNotificationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MediumOrStr` | `curlec/models/enums/medium.py` |
| `InvoicesNotifyByResponse` | `curlec/models/invoices_notify_by_response.py` |
| `SendInvoiceNotificationErrorBody` | `curlec/errors/send_invoice_notification_error.py` |
| `Error` | `curlec/models/error.py` |

### client.invoices.update_invoice

- **Route**: `PATCH /invoices/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_invoice(id_: str, body: InvoicesRequest1 | InvoicesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, UpdateInvoiceErrorBody]`
- **Error**: `UpdateInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoicesRequest1` | `curlec/models/invoices_request1.py` |
| `InvoicesRequest1Dict` | `curlec/models/invoices_request1.py` |
| `Invoice` | `curlec/models/invoice.py` |
| `UpdateInvoiceErrorBody` | `curlec/errors/update_invoice_error.py` |
| `Error` | `curlec/models/error.py` |

