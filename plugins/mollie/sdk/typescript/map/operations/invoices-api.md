<!-- Generated file — do not edit; regenerated with the SDK. -->

# InvoicesApi — operations

Accessor: `client.invoicesApi` · Source: `src/resources/invoices-api.ts` · 2 operations · Request and error types: namespace `InvoicesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInvoice

- **Signature**: `getInvoice(request: InvoicesApi.GetInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, InvoicesApi.GetInvoiceError>`
- **Wire**: `GET /v2/invoices/{invoiceId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `InvoicesApi.GetInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoicesApi.GetInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listInvoices

- **Signature**: `listInvoices(request: InvoicesApi.ListInvoicesRequest, options?: RequestOptions): ApiPromise<undefined, InvoicesApi.ListInvoicesError>`
- **Wire**: `GET /v2/invoices`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `InvoicesApi.ListInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoicesApi.ListInvoicesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reference` | `query` | — | `string` | no |
| `year` | `query` | — | `string` | no |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

