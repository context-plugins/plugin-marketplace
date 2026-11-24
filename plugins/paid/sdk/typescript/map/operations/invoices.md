<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 4 operations · Request and error types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInvoiceById

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInvoiceById(request: Invoices.GetInvoiceByIdRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.GetInvoiceByIdError>`
- **Wire**: `GET /invoices/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Invoice`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Invoices.GetInvoiceByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetInvoiceByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getInvoiceLines

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInvoiceLines(request: Invoices.GetInvoiceLinesRequest, options?: RequestOptions): ApiPromise<InvoiceLinesResponse, Invoices.GetInvoiceLinesError>`
- **Wire**: `GET /invoices/{id}/lines`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceLinesResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Invoices.GetInvoiceLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetInvoiceLinesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceLinesResponse` | `invoiceLinesResponseSchema` | `src/models/invoice-lines-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listInvoices

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInvoices(request: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise<InvoiceListResponse, Invoices.ListInvoicesError>`
- **Wire**: `GET /invoices/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Invoices.ListInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ListInvoicesRequest` (15):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `customerId` | `query` | — | `string` | no | — |
| `externalCustomerId` | `query` | — | `string` | no | — |
| `orderId` | `query` | — | `string` | no | — |
| `status` | `query` | — | `InvoicesGetParametersStatus` | no | — |
| `paymentStatus` | `query` | — | `InvoicesGetParametersPaymentStatus` | no | — |
| `issueDateFrom` | `query` | — | `string` | no | — |
| `issueDateTo` | `query` | — | `string` | no | — |
| `dueDateFrom` | `query` | — | `string` | no | — |
| `dueDateTo` | `query` | — | `string` | no | — |
| `displayNumber` | `query` | — | `string` | no | — |
| `purchaseOrderReference` | `query` | — | `string` | no | — |
| `currency` | `query` | — | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesGetParametersStatus` | `invoicesGetParametersStatusSchema` | `src/models/invoices-get-parameters-status.ts` |
| `InvoicesGetParametersPaymentStatus` | `invoicesGetParametersPaymentStatusSchema` | `src/models/invoices-get-parameters-payment-status.ts` |
| `InvoiceListResponse` | `invoiceListResponseSchema` | `src/models/invoice-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateInvoiceById

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInvoiceById(request: Invoices.UpdateInvoiceByIdRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.UpdateInvoiceByIdError>`
- **Wire**: `PUT /invoices/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Invoice`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Invoices.UpdateInvoiceByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.UpdateInvoiceByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInvoiceRequest` | `updateInvoiceRequestSchema` | `src/models/update-invoice-request.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

