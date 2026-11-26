<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesInvoices — operations

Accessor: `client.sales_invoices` · Source: `dynamics_365_business_central/apis/sales_invoices.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sales_invoices.create_sales_invoice

- **Route**: `POST /companies({company_id})/salesInvoices`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_sales_invoice(company_id: UUID, body: SalesInvoiceCreate | SalesInvoiceCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `SalesInvoice`
- **Returns (raw)**: `ApiResult[SalesInvoice, CreateSalesInvoiceErrorBody]`
- **Error**: `CreateSalesInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SalesInvoiceCreate` | `dynamics_365_business_central/models/sales_invoice_create.py` |
| `SalesInvoiceCreateDict` | `dynamics_365_business_central/models/sales_invoice_create.py` |
| `SalesInvoice` | `dynamics_365_business_central/models/sales_invoice.py` |
| `CreateSalesInvoiceErrorBody` | `dynamics_365_business_central/errors/create_sales_invoice_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.sales_invoices.list_sales_invoices

- **Route**: `GET /companies({company_id})/salesInvoices`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_sales_invoices(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `CompaniesApiSalesInvoicesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiSalesInvoicesResponse, ListSalesInvoicesErrorBody]`
- **Error**: `ListSalesInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiSalesInvoicesResponse` | `dynamics_365_business_central/models/companies_api_sales_invoices_response.py` |
| `ListSalesInvoicesErrorBody` | `dynamics_365_business_central/errors/list_sales_invoices_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

