<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringInvoices — operations

Accessor: `client.recurringInvoices` · Source: `src/resources/recurring-invoices.ts` · 7 operations · Request and error types: namespace `RecurringInvoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveRecurringInvoice

- **Signature**: `archiveRecurringInvoice(request: RecurringInvoices.ArchiveRecurringInvoiceRequest, options?: RequestOptions): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.ArchiveRecurringInvoiceError>`
- **Wire**: `POST /v3/recurring-invoices/{recurringInvoiceId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.ArchiveRecurringInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.ArchiveRecurringInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringInvoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringInvoiceResponseDto` | `recurringInvoiceResponseDtoSchema` | `src/models/recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createRecurringInvoice

- **Signature**: `createRecurringInvoice(request: RecurringInvoices.CreateRecurringInvoiceRequest, options?: RequestOptions): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.CreateRecurringInvoiceError>`
- **Wire**: `POST /v3/recurring-invoices`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.CreateRecurringInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.CreateRecurringInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateRecurringInvoiceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRecurringInvoiceRequestDto` | `createRecurringInvoiceRequestDtoSchema` | `src/models/create-recurring-invoice-request-dto.ts` |
| `RecurringInvoiceResponseDto` | `recurringInvoiceResponseDtoSchema` | `src/models/recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getRecurringInvoice

- **Signature**: `getRecurringInvoice(request: RecurringInvoices.GetRecurringInvoiceRequest, options?: RequestOptions): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.GetRecurringInvoiceError>`
- **Wire**: `GET /v3/recurring-invoices/{recurringInvoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.GetRecurringInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.GetRecurringInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringInvoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringInvoiceResponseDto` | `recurringInvoiceResponseDtoSchema` | `src/models/recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listRecurringInvoices

- **Signature**: `listRecurringInvoices(request?: RecurringInvoices.ListRecurringInvoicesRequest, options?: RequestOptions): ApiPromise<ListResponseDtoRecurringInvoiceResponseDto, RecurringInvoices.ListRecurringInvoicesError>`
- **Wire**: `GET /v3/recurring-invoices`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoRecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.ListRecurringInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.ListRecurringInvoicesRequest` (6):

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
| `ListResponseDtoRecurringInvoiceResponseDto` | `listResponseDtoRecurringInvoiceResponseDtoSchema` | `src/models/list-response-dto-recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### replaceRecurringInvoice

- **Signature**: `replaceRecurringInvoice(request: RecurringInvoices.ReplaceRecurringInvoiceRequest, options?: RequestOptions): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.ReplaceRecurringInvoiceError>`
- **Wire**: `PUT /v3/recurring-invoices/{recurringInvoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.ReplaceRecurringInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.ReplaceRecurringInvoiceRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringInvoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `RecurringInvoiceReplaceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringInvoiceReplaceRequestDto` | `recurringInvoiceReplaceRequestDtoSchema` | `src/models/recurring-invoice-replace-request-dto.ts` |
| `RecurringInvoiceResponseDto` | `recurringInvoiceResponseDtoSchema` | `src/models/recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreRecurringInvoice

- **Signature**: `restoreRecurringInvoice(request: RecurringInvoices.RestoreRecurringInvoiceRequest, options?: RequestOptions): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.RestoreRecurringInvoiceError>`
- **Wire**: `POST /v3/recurring-invoices/{recurringInvoiceId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.RestoreRecurringInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.RestoreRecurringInvoiceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringInvoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringInvoiceResponseDto` | `recurringInvoiceResponseDtoSchema` | `src/models/recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateRecurringInvoice

- **Signature**: `updateRecurringInvoice(request: RecurringInvoices.UpdateRecurringInvoiceRequest, options?: RequestOptions): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.UpdateRecurringInvoiceError>`
- **Wire**: `PATCH /v3/recurring-invoices/{recurringInvoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `RecurringInvoices.UpdateRecurringInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringInvoices.UpdateRecurringInvoiceRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringInvoiceId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateRecurringInvoiceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateRecurringInvoiceRequestDto` | `updateRecurringInvoiceRequestDtoSchema` | `src/models/update-recurring-invoice-request-dto.ts` |
| `RecurringInvoiceResponseDto` | `recurringInvoiceResponseDtoSchema` | `src/models/recurring-invoice-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

