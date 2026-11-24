<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseInvoices — operations

Accessor: `client.purchaseInvoices` · Source: `src/resources/purchase-invoices.ts` · 2 operations · Request and error types: namespace `PurchaseInvoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPurchaseInvoice

- **Signature**: `createPurchaseInvoice(request: PurchaseInvoices.CreatePurchaseInvoiceRequest, options?: RequestOptions): ApiPromise<PurchaseInvoice, PurchaseInvoices.CreatePurchaseInvoiceError>`
- **Wire**: `POST /companies({company_id})/purchaseInvoices`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PurchaseInvoice`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseInvoices.CreatePurchaseInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseInvoices.CreatePurchaseInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `PurchaseInvoiceCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PurchaseInvoiceCreate` | `purchaseInvoiceCreateSchema` | `src/models/purchase-invoice-create.ts` |
| `PurchaseInvoice` | `purchaseInvoiceSchema` | `src/models/purchase-invoice.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPurchaseInvoices

- **Signature**: `listPurchaseInvoices(request: PurchaseInvoices.ListPurchaseInvoicesRequest, options?: RequestOptions): ApiPromise<CompaniesApiPurchaseInvoicesResponse, PurchaseInvoices.ListPurchaseInvoicesError>`
- **Wire**: `GET /companies({company_id})/purchaseInvoices`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiPurchaseInvoicesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseInvoices.ListPurchaseInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseInvoices.ListPurchaseInvoicesRequest` (7):

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
| `CompaniesApiPurchaseInvoicesResponse` | `companiesApiPurchaseInvoicesResponseSchema` | `src/models/companies-api-purchase-invoices-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

