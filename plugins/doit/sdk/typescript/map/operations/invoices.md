<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 2 operations · Request and error types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInvoice

- **Signature**: `getInvoice(request: Invoices.GetInvoiceRequest, options?: RequestOptions): ApiPromise<BillingV1InvoicesResponse1, Invoices.GetInvoiceError>`
- **Wire**: `GET /billing/v1/invoices/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingV1InvoicesResponse1`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Invoices.GetInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingV1InvoicesResponse1` | `billingV1InvoicesResponse1Schema` | `src/models/billing-v1-invoices-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listInvoices

- **Signature**: `listInvoices(request?: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise<BillingV1InvoicesResponse, Invoices.ListInvoicesError>`
- **Wire**: `GET /billing/v1/invoices`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingV1InvoicesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Invoices.ListInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ListInvoicesRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `minCreationTime` | `query` | `number` | no | — |
| `maxCreationTime` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingV1InvoicesResponse` | `billingV1InvoicesResponseSchema` | `src/models/billing-v1-invoices-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

