<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `paid/apis/invoices.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.invoices.get_invoice_by_id

- **Route**: `GET /invoices/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_invoice_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, GetInvoiceByIdErrorBody]`
- **Error**: `GetInvoiceByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Invoice` | `paid/models/invoice.py` |
| `GetInvoiceByIdErrorBody` | `paid/errors/get_invoice_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.invoices.get_invoice_lines

- **Route**: `GET /invoices/{id}/lines`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_invoice_lines(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `InvoiceLinesResponse`
- **Returns (raw)**: `ApiResult[InvoiceLinesResponse, GetInvoiceLinesErrorBody]`
- **Error**: `GetInvoiceLinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceLinesResponse` | `paid/models/invoice_lines_response.py` |
| `GetInvoiceLinesErrorBody` | `paid/errors/get_invoice_lines_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.invoices.list_invoices

- **Route**: `GET /invoices/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_invoices(authorization: str, *, limit: int | None = 10, offset: int | None = None, customer_id: str | None = None, external_customer_id: str | None = None, order_id: str | None = None, status: InvoicesGetParametersStatusOrStr | None = None, payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None, issue_date_from: str | None = None, issue_date_to: str | None = None, due_date_from: str | None = None, due_date_to: str | None = None, display_number: str | None = None, purchase_order_reference: str | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `customer_id` — query `customerId` · `external_customer_id` — query `externalCustomerId` · `order_id` — query `orderId` · `status` — query · `payment_status` — query `paymentStatus` · `issue_date_from` — query `issueDateFrom` · `issue_date_to` — query `issueDateTo` · `due_date_from` — query `dueDateFrom` · `due_date_to` — query `dueDateTo` · `display_number` — query `displayNumber` · `purchase_order_reference` — query `purchaseOrderReference` · `currency` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `InvoiceListResponse`
- **Returns (raw)**: `ApiResult[InvoiceListResponse, ListInvoicesErrorBody]`
- **Error**: `ListInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoicesGetParametersStatusOrStr` | `paid/models/enums/invoices_get_parameters_status.py` |
| `InvoicesGetParametersPaymentStatusOrStr` | `paid/models/enums/invoices_get_parameters_payment_status.py` |
| `InvoiceListResponse` | `paid/models/invoice_list_response.py` |
| `ListInvoicesErrorBody` | `paid/errors/list_invoices_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.invoices.update_invoice_by_id

- **Route**: `PUT /invoices/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_invoice_by_id(id_: str, authorization: str, *, body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Invoice`
- **Returns (raw)**: `ApiResult[Invoice, UpdateInvoiceByIdErrorBody]`
- **Error**: `UpdateInvoiceByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateInvoiceRequest` | `paid/models/update_invoice_request.py` |
| `UpdateInvoiceRequestDict` | `paid/models/update_invoice_request.py` |
| `Invoice` | `paid/models/invoice.py` |
| `UpdateInvoiceByIdErrorBody` | `paid/errors/update_invoice_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

