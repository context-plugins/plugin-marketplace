<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.bills` · Source: `src/resources/bills.ts` · 9 operations · Request and error types: namespace `Bills`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveBill

- **Signature**: `archiveBill(request: Bills.ArchiveBillRequest, options?: RequestOptions): ApiPromise<BillWithoutApproversResponseDto, Bills.ArchiveBillError>`
- **Wire**: `POST /v3/bills/{billId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillWithoutApproversResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.ArchiveBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.ArchiveBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillWithoutApproversResponseDto` | `billWithoutApproversResponseDtoSchema` | `src/models/bill-without-approvers-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createBill

- **Signature**: `createBill(request: Bills.CreateBillRequest, options?: RequestOptions): ApiPromise<BillResponseDto, Bills.CreateBillError>`
- **Wire**: `POST /v3/bills`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.CreateBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.CreateBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillCreateRequestDto` | `billCreateRequestDtoSchema` | `src/models/bill-create-request-dto.ts` |
| `BillResponseDto` | `billResponseDtoSchema` | `src/models/bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createBulkBills

- **Signature**: `createBulkBills(request: Bills.CreateBulkBillsRequest, options?: RequestOptions): ApiPromise<BillWithoutApproversResponseDto[], Bills.CreateBulkBillsError>`
- **Wire**: `POST /v3/bills/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillWithoutApproversResponseDto[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.CreateBulkBillsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.CreateBulkBillsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillCreateRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillCreateRequestDto` | `billCreateRequestDtoSchema` | `src/models/bill-create-request-dto.ts` |
| `BillWithoutApproversResponseDto` | `billWithoutApproversResponseDtoSchema` | `src/models/bill-without-approvers-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getBill

- **Signature**: `getBill(request: Bills.GetBillRequest, options?: RequestOptions): ApiPromise<BillReadResponseDto, Bills.GetBillError>`
- **Wire**: `GET /v3/bills/{billId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillReadResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.GetBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.GetBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillReadResponseDto` | `billReadResponseDtoSchema` | `src/models/bill-read-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBills

- **Signature**: `listBills(request?: Bills.ListBillsRequest, options?: RequestOptions): ApiPromise<ListBillResponseDto, Bills.ListBillsError>`
- **Wire**: `GET /v3/bills`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBillResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.ListBillsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.ListBillsRequest` (6):

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
| `ListBillResponseDto` | `listBillResponseDtoSchema` | `src/models/list-bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### recordPayment

- **Signature**: `recordPayment(request: Bills.RecordPaymentRequest, options?: RequestOptions): ApiPromise<RecordPaymentResponseDto, Bills.RecordPaymentError>`
- **Wire**: `POST /v3/bills/record-payment`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordPaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.RecordPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.RecordPaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `RecordPaymentRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordPaymentRequestDto` | `recordPaymentRequestDtoSchema` | `src/models/record-payment-request-dto.ts` |
| `RecordPaymentResponseDto` | `recordPaymentResponseDtoSchema` | `src/models/record-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### replaceBill

- **Signature**: `replaceBill(request: Bills.ReplaceBillRequest, options?: RequestOptions): ApiPromise<BillResponseDto, Bills.ReplaceBillError>`
- **Wire**: `PUT /v3/bills/{billId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.ReplaceBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.ReplaceBillRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillReplaceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillReplaceRequestDto` | `billReplaceRequestDtoSchema` | `src/models/bill-replace-request-dto.ts` |
| `BillResponseDto` | `billResponseDtoSchema` | `src/models/bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreBill

- **Signature**: `restoreBill(request: Bills.RestoreBillRequest, options?: RequestOptions): ApiPromise<BillWithoutApproversResponseDto, Bills.RestoreBillError>`
- **Wire**: `POST /v3/bills/{billId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillWithoutApproversResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.RestoreBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.RestoreBillRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillWithoutApproversResponseDto` | `billWithoutApproversResponseDtoSchema` | `src/models/bill-without-approvers-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateBill

- **Signature**: `updateBill(request: Bills.UpdateBillRequest, options?: RequestOptions): ApiPromise<BillResponseDto, Bills.UpdateBillError>`
- **Wire**: `PATCH /v3/bills/{billId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Bills.UpdateBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.UpdateBillRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillUpdateRequestDto` | `billUpdateRequestDtoSchema` | `src/models/bill-update-request-dto.ts` |
| `BillResponseDto` | `billResponseDtoSchema` | `src/models/bill-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

