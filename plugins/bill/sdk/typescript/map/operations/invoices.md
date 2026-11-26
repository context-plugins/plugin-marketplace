<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 10 operations · Request and error types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveInvoice

- **Signature**: `archiveInvoice(request: Invoices.ArchiveInvoiceRequest, options?: RequestOptions): ApiPromise<InvoiceResponseDto, Invoices.ArchiveInvoiceError>`
- **Wire**: `POST /v3/invoices/{invoiceId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.ArchiveInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ArchiveInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceResponseDto` | `invoiceResponseDtoSchema` | `src/models/invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createInvoice

- **Signature**: `createInvoice(request: Invoices.CreateInvoiceRequest, options?: RequestOptions): ApiPromise<InvoiceResponseDto, Invoices.CreateInvoiceError>`
- **Wire**: `POST /v3/invoices`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.CreateInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.CreateInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `InvoiceCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceCreateRequestDto` | `invoiceCreateRequestDtoSchema` | `src/models/invoice-create-request-dto.ts` |
| `InvoiceResponseDto` | `invoiceResponseDtoSchema` | `src/models/invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getInvoice

- **Signature**: `getInvoice(request: Invoices.GetInvoiceRequest, options?: RequestOptions): ApiPromise<InvoiceResponseDto, Invoices.GetInvoiceError>`
- **Wire**: `GET /v3/invoices/{invoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.GetInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceResponseDto` | `invoiceResponseDtoSchema` | `src/models/invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPaymentLink

- **Signature**: `getPaymentLink(request: Invoices.GetPaymentLinkRequest, options?: RequestOptions): ApiPromise<InvoicePaymentLinkResponseDto, Invoices.GetPaymentLinkError>`
- **Wire**: `POST /v3/invoices/{invoiceId}/payment-link`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoicePaymentLinkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.GetPaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetPaymentLinkRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `InvoicePaymentLinkRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicePaymentLinkRequestDto` | `invoicePaymentLinkRequestDtoSchema` | `src/models/invoice-payment-link-request-dto.ts` |
| `InvoicePaymentLinkResponseDto` | `invoicePaymentLinkResponseDtoSchema` | `src/models/invoice-payment-link-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listInvoices

- **Signature**: `listInvoices(request?: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise<ListInvoiceResponseDto, Invoices.ListInvoicesError>`
- **Wire**: `GET /v3/invoices`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.ListInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ListInvoicesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInvoiceResponseDto` | `listInvoiceResponseDtoSchema` | `src/models/list-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### recordInvoice

- **Signature**: `recordInvoice(request: Invoices.RecordInvoiceRequest, options?: RequestOptions): ApiPromise<RecordInvoiceResponseDto, Invoices.RecordInvoiceError>`
- **Wire**: `POST /v3/invoices/record-payment`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.RecordInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.RecordInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `RecordInvoiceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordInvoiceRequestDto` | `recordInvoiceRequestDtoSchema` | `src/models/record-invoice-request-dto.ts` |
| `RecordInvoiceResponseDto` | `recordInvoiceResponseDtoSchema` | `src/models/record-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### replaceInvoice

- **Signature**: `replaceInvoice(request: Invoices.ReplaceInvoiceRequest, options?: RequestOptions): ApiPromise<InvoiceResponseDto, Invoices.ReplaceInvoiceError>`
- **Wire**: `PUT /v3/invoices/{invoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.ReplaceInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ReplaceInvoiceRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `InvoiceReplaceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceReplaceRequestDto` | `invoiceReplaceRequestDtoSchema` | `src/models/invoice-replace-request-dto.ts` |
| `InvoiceResponseDto` | `invoiceResponseDtoSchema` | `src/models/invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreInvoice

- **Signature**: `restoreInvoice(request: Invoices.RestoreInvoiceRequest, options?: RequestOptions): ApiPromise<InvoiceResponseDto, Invoices.RestoreInvoiceError>`
- **Wire**: `POST /v3/invoices/{invoiceId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.RestoreInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.RestoreInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceResponseDto` | `invoiceResponseDtoSchema` | `src/models/invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### sendInvoice

- **Signature**: `sendInvoice(request: Invoices.SendInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, Invoices.SendInvoiceError>`
- **Wire**: `POST /v3/invoices/{invoiceId}/email`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.SendInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.SendInvoiceRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `SendInvoiceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendInvoiceRequestDto` | `sendInvoiceRequestDtoSchema` | `src/models/send-invoice-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateInvoice

- **Signature**: `updateInvoice(request: Invoices.UpdateInvoiceRequest, options?: RequestOptions): ApiPromise<InvoiceResponseDto, Invoices.UpdateInvoiceError>`
- **Wire**: `PATCH /v3/invoices/{invoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Invoices.UpdateInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.UpdateInvoiceRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `InvoiceUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceUpdateRequestDto` | `invoiceUpdateRequestDtoSchema` | `src/models/invoice-update-request-dto.ts` |
| `InvoiceResponseDto` | `invoiceResponseDtoSchema` | `src/models/invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

