<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recurringbills — operations

Accessor: `client.recurringbills` · Source: `src/resources/recurringbills.ts` · 7 operations · Request and error types: namespace `Recurringbills`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveRecurringBill

- **Signature**: `archiveRecurringBill(request: Recurringbills.ArchiveRecurringBillRequest, options?: RequestOptions): ApiPromise<RecurringBillResponseDto, Recurringbills.ArchiveRecurringBillError>`
- **Wire**: `POST /v3/recurringbills/{recurringBillId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringBillResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.ArchiveRecurringBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.ArchiveRecurringBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringBillId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringBillResponseDto` | `recurringBillResponseDtoSchema` | `src/models/recurring-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createRecurringBill

- **Signature**: `createRecurringBill(request: Recurringbills.CreateRecurringBillRequest, options?: RequestOptions): ApiPromise<RecurringBillResponseDto, Recurringbills.CreateRecurringBillError>`
- **Wire**: `POST /v3/recurringbills`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringBillResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.CreateRecurringBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.CreateRecurringBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `RecurringBillCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringBillCreateRequestDto` | `recurringBillCreateRequestDtoSchema` | `src/models/recurring-bill-create-request-dto.ts` |
| `RecurringBillResponseDto` | `recurringBillResponseDtoSchema` | `src/models/recurring-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getRecurringBill

- **Signature**: `getRecurringBill(request: Recurringbills.GetRecurringBillRequest, options?: RequestOptions): ApiPromise<RecurringBillReadResponseDto, Recurringbills.GetRecurringBillError>`
- **Wire**: `GET /v3/recurringbills/{recurringBillId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringBillReadResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.GetRecurringBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.GetRecurringBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringBillId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringBillReadResponseDto` | `recurringBillReadResponseDtoSchema` | `src/models/recurring-bill-read-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listRecurringBills

- **Signature**: `listRecurringBills(request?: Recurringbills.ListRecurringBillsRequest, options?: RequestOptions): ApiPromise<ListRecurringBillResponseDto, Recurringbills.ListRecurringBillsError>`
- **Wire**: `GET /v3/recurringbills`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRecurringBillResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.ListRecurringBillsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.ListRecurringBillsRequest` (6):

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
| `ListRecurringBillResponseDto` | `listRecurringBillResponseDtoSchema` | `src/models/list-recurring-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### replaceRecurringBill

- **Signature**: `replaceRecurringBill(request: Recurringbills.ReplaceRecurringBillRequest, options?: RequestOptions): ApiPromise<RecurringBillResponseDto, Recurringbills.ReplaceRecurringBillError>`
- **Wire**: `PUT /v3/recurringbills/{recurringBillId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringBillResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.ReplaceRecurringBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.ReplaceRecurringBillRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringBillId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `RecurringBillReplaceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringBillReplaceRequestDto` | `recurringBillReplaceRequestDtoSchema` | `src/models/recurring-bill-replace-request-dto.ts` |
| `RecurringBillResponseDto` | `recurringBillResponseDtoSchema` | `src/models/recurring-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreRecurringBill

- **Signature**: `restoreRecurringBill(request: Recurringbills.RestoreRecurringBillRequest, options?: RequestOptions): ApiPromise<RecurringBillResponseDto, Recurringbills.RestoreRecurringBillError>`
- **Wire**: `POST /v3/recurringbills/{recurringBillId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringBillResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.RestoreRecurringBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.RestoreRecurringBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringBillId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringBillResponseDto` | `recurringBillResponseDtoSchema` | `src/models/recurring-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateRecurringBill

- **Signature**: `updateRecurringBill(request: Recurringbills.UpdateRecurringBillRequest, options?: RequestOptions): ApiPromise<RecurringBillResponseDto, Recurringbills.UpdateRecurringBillError>`
- **Wire**: `PATCH /v3/recurringbills/{recurringBillId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringBillResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Recurringbills.UpdateRecurringBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recurringbills.UpdateRecurringBillRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recurringBillId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `RecurringBillUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringBillUpdateRequestDto` | `recurringBillUpdateRequestDtoSchema` | `src/models/recurring-bill-update-request-dto.ts` |
| `RecurringBillResponseDto` | `recurringBillResponseDtoSchema` | `src/models/recurring-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

