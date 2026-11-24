<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `doi_t/apis/invoices.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.invoices.get_invoice

- **Route**: `GET /billing/v1/invoices/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_invoice(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BillingV1InvoicesResponse1`
- **Returns (raw)**: `ApiResult[BillingV1InvoicesResponse1, GetInvoiceErrorBody]`
- **Error**: `GetInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingV1InvoicesResponse1` | `doi_t/models/billing_v1_invoices_response1.py` |
| `GetInvoiceErrorBody` | `doi_t/errors/get_invoice_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.invoices.list_invoices

- **Route**: `GET /billing/v1/invoices`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_invoices(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, min_creation_time: int | None = None, max_creation_time: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `min_creation_time` — query `minCreationTime` · `max_creation_time` — query `maxCreationTime`
- **Returns (parsed)**: `BillingV1InvoicesResponse`
- **Returns (raw)**: `ApiResult[BillingV1InvoicesResponse, ListInvoicesErrorBody]`
- **Error**: `ListInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingV1InvoicesResponse` | `doi_t/models/billing_v1_invoices_response.py` |
| `ListInvoicesErrorBody` | `doi_t/errors/list_invoices_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

