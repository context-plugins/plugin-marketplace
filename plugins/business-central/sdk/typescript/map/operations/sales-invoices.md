<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesInvoices — operations

Accessor: `client.salesInvoices` · Source: `src/resources/sales-invoices.ts` · 2 operations · Request and error types: namespace `SalesInvoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSalesInvoice

- **Signature**: `createSalesInvoice(request: SalesInvoices.CreateSalesInvoiceRequest, options?: RequestOptions): ApiPromise<SalesInvoice, SalesInvoices.CreateSalesInvoiceError>`
- **Wire**: `POST /companies({company_id})/salesInvoices`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SalesInvoice`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesInvoices.CreateSalesInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoices.CreateSalesInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `SalesInvoiceCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SalesInvoiceCreate` | `salesInvoiceCreateSchema` | `src/models/sales-invoice-create.ts` |
| `SalesInvoice` | `salesInvoiceSchema` | `src/models/sales-invoice.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSalesInvoices

- **Signature**: `listSalesInvoices(request: SalesInvoices.ListSalesInvoicesRequest, options?: RequestOptions): ApiPromise<CompaniesApiSalesInvoicesResponse, SalesInvoices.ListSalesInvoicesError>`
- **Wire**: `GET /companies({company_id})/salesInvoices`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiSalesInvoicesResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesInvoices.ListSalesInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoices.ListSalesInvoicesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiSalesInvoicesResponse` | `companiesApiSalesInvoicesResponseSchema` | `src/models/companies-api-sales-invoices-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

