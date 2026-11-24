<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reimbursements — operations

Accessor: `client.reimbursements` · Source: `src/resources/reimbursements.ts` · 9 operations · Request and error types: namespace `Reimbursements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addReimbursementReceipt

- **Signature**: `addReimbursementReceipt(request: Reimbursements.AddReimbursementReceiptRequest, options?: RequestOptions): ApiPromise<ReceiptImage[], Reimbursements.AddReimbursementReceiptError>`
- **Wire**: `POST /v3/spend/reimbursements/{reimbursementId}/receipts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReceiptImage[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.AddReimbursementReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.AddReimbursementReceiptRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reimbursementId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `ReimbursementReceiptRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReimbursementReceiptRequestDto` | `reimbursementReceiptRequestDtoSchema` | `src/models/reimbursement-receipt-request-dto.ts` |
| `ReceiptImage` | `receiptImageSchema` | `src/models/receipt-image.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### approveOrDenyReimbursement

- **Signature**: `approveOrDenyReimbursement(request: Reimbursements.ApproveOrDenyReimbursementRequest, options?: RequestOptions): ApiPromise<ReimbursementResponseDto, Reimbursements.ApproveOrDenyReimbursementError>`
- **Wire**: `POST /v3/spend/reimbursements/{reimbursementId}/action`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReimbursementResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.ApproveOrDenyReimbursementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.ApproveOrDenyReimbursementRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reimbursementId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `ReimbursementActionRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReimbursementActionRequestDto` | `reimbursementActionRequestDtoSchema` | `src/models/reimbursement-action-request-dto.ts` |
| `ReimbursementResponseDto` | `reimbursementResponseDtoSchema` | `src/models/reimbursement-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createImageUploadUrl

- **Signature**: `createImageUploadUrl(request?: Reimbursements.CreateImageUploadUrlRequest, options?: RequestOptions): ApiPromise<ReimbursementImageUploadUrlResponseDto, Reimbursements.CreateImageUploadUrlError>`
- **Wire**: `POST /v3/spend/reimbursements/image-upload-url`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReimbursementImageUploadUrlResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.CreateImageUploadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.CreateImageUploadUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReimbursementImageUploadUrlResponseDto` | `reimbursementImageUploadUrlResponseDtoSchema` | `src/models/reimbursement-image-upload-url-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createReimbursement

- **Signature**: `createReimbursement(request: Reimbursements.CreateReimbursementRequest, options?: RequestOptions): ApiPromise<ReimbursementResponseDto, Reimbursements.CreateReimbursementError>`
- **Wire**: `POST /v3/spend/reimbursements`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReimbursementResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.CreateReimbursementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.CreateReimbursementRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `CreateReimbursementRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateReimbursementRequestDto` | `createReimbursementRequestDtoSchema` | `src/models/create-reimbursement-request-dto.ts` |
| `ReimbursementResponseDto` | `reimbursementResponseDtoSchema` | `src/models/reimbursement-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteReimbursement

- **Signature**: `deleteReimbursement(request: Reimbursements.DeleteReimbursementRequest, options?: RequestOptions): ApiPromise<undefined, Reimbursements.DeleteReimbursementError>`
- **Wire**: `DELETE /v3/spend/reimbursements/{reimbursementId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.DeleteReimbursementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.DeleteReimbursementRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reimbursementId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteReimbursementReceipt

- **Signature**: `deleteReimbursementReceipt(request: Reimbursements.DeleteReimbursementReceiptRequest, options?: RequestOptions): ApiPromise<undefined, Reimbursements.DeleteReimbursementReceiptError>`
- **Wire**: `DELETE /v3/spend/reimbursements/{reimbursementId}/receipts/{receiptId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.DeleteReimbursementReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.DeleteReimbursementReceiptRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reimbursementId` | `path` | `string` | yes |
| `receiptId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getReimbursement

- **Signature**: `getReimbursement(request: Reimbursements.GetReimbursementRequest, options?: RequestOptions): ApiPromise<ReimbursementResponseDto, Reimbursements.GetReimbursementError>`
- **Wire**: `GET /v3/spend/reimbursements/{reimbursementId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReimbursementResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.GetReimbursementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.GetReimbursementRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reimbursementId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReimbursementResponseDto` | `reimbursementResponseDtoSchema` | `src/models/reimbursement-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listReimbursements

- **Signature**: `listReimbursements(request?: Reimbursements.ListReimbursementsRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoReimbursementResponseDto, Reimbursements.ListReimbursementsError>`
- **Wire**: `GET /v3/spend/reimbursements`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoReimbursementResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.ListReimbursementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.ListReimbursementsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoReimbursementResponseDto` | `paginationResponseDtoReimbursementResponseDtoSchema` | `src/models/pagination-response-dto-reimbursement-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateReimbursement

- **Signature**: `updateReimbursement(request: Reimbursements.UpdateReimbursementRequest, options?: RequestOptions): ApiPromise<ReimbursementResponseDto, Reimbursements.UpdateReimbursementError>`
- **Wire**: `PATCH /v3/spend/reimbursements/{reimbursementId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReimbursementResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reimbursements.UpdateReimbursementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reimbursements.UpdateReimbursementRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reimbursementId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `UpdateReimbursementRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateReimbursementRequestDto` | `updateReimbursementRequestDtoSchema` | `src/models/update-reimbursement-request-dto.ts` |
| `ReimbursementResponseDto` | `reimbursementResponseDtoSchema` | `src/models/reimbursement-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

