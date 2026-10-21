<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesInvoicesApi — operations

Accessor: `client.salesInvoicesApi` · Source: `src/resources/sales-invoices-api.ts` · 5 operations · Request and error types: namespace `SalesInvoicesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSalesInvoice

- **Signature**: `createSalesInvoice(request: SalesInvoicesApi.CreateSalesInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, SalesInvoicesApi.CreateSalesInvoiceError>`
- **Wire**: `POST /v2/sales-invoices`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SalesInvoicesApi.CreateSalesInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoicesApi.CreateSalesInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `SalesInvoiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SalesInvoiceRequest` | `salesInvoiceRequestSchema` | `src/models/sales-invoice-request.ts` |

### deleteSalesInvoice

- **Signature**: `deleteSalesInvoice(request: SalesInvoicesApi.DeleteSalesInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, SalesInvoicesApi.DeleteSalesInvoiceError>`
- **Wire**: `DELETE /v2/sales-invoices/{salesInvoiceId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SalesInvoicesApi.DeleteSalesInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoicesApi.DeleteSalesInvoiceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `salesInvoiceId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `DeleteValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteValuesSalesInvoice` | `deleteValuesSalesInvoiceSchema` | `src/models/delete-values-sales-invoice.ts` |

### getSalesInvoice

- **Signature**: `getSalesInvoice(request: SalesInvoicesApi.GetSalesInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, SalesInvoicesApi.GetSalesInvoiceError>`
- **Wire**: `GET /v2/sales-invoices/{salesInvoiceId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SalesInvoicesApi.GetSalesInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoicesApi.GetSalesInvoiceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `salesInvoiceId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listSalesInvoices

- **Signature**: `listSalesInvoices(request: SalesInvoicesApi.ListSalesInvoicesRequest, options?: RequestOptions): ApiPromise<undefined, SalesInvoicesApi.ListSalesInvoicesError>`
- **Wire**: `GET /v2/sales-invoices`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SalesInvoicesApi.ListSalesInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoicesApi.ListSalesInvoicesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### updateSalesInvoice

- **Signature**: `updateSalesInvoice(request: SalesInvoicesApi.UpdateSalesInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, SalesInvoicesApi.UpdateSalesInvoiceError>`
- **Wire**: `PATCH /v2/sales-invoices/{salesInvoiceId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SalesInvoicesApi.UpdateSalesInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesInvoicesApi.UpdateSalesInvoiceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `salesInvoiceId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `UpdateValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateValuesSalesInvoice` | `updateValuesSalesInvoiceSchema` | `src/models/update-values-sales-invoice.ts` |

