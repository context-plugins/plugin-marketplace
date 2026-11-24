<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseInvoices — operations

Accessor: `client.purchase_invoices` · Source: `microsoft_dynamics_nav/apis/purchase_invoices.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.purchase_invoices.create_purchase_invoice

- **Route**: `POST /companies({company_id})/purchaseInvoices`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_purchase_invoice(company_id: UUID, body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `PurchaseInvoice`
- **Returns (raw)**: `ApiResult[PurchaseInvoice, CreatePurchaseInvoiceErrorBody]`
- **Error**: `CreatePurchaseInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurchaseInvoiceCreate` | `microsoft_dynamics_nav/models/purchase_invoice_create.py` |
| `PurchaseInvoiceCreateDict` | `microsoft_dynamics_nav/models/purchase_invoice_create.py` |
| `PurchaseInvoice` | `microsoft_dynamics_nav/models/purchase_invoice.py` |
| `CreatePurchaseInvoiceErrorBody` | `microsoft_dynamics_nav/errors/create_purchase_invoice_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.purchase_invoices.list_purchase_invoices

- **Route**: `GET /companies({company_id})/purchaseInvoices`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_purchase_invoices(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `CompaniesApiPurchaseInvoicesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiPurchaseInvoicesResponse, ListPurchaseInvoicesErrorBody]`
- **Error**: `ListPurchaseInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiPurchaseInvoicesResponse` | `microsoft_dynamics_nav/models/companies_api_purchase_invoices_response.py` |
| `ListPurchaseInvoicesErrorBody` | `microsoft_dynamics_nav/errors/list_purchase_invoices_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

