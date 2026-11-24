<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 10 operations · Request and error types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTransactionReceipt

- **Signature**: `addTransactionReceipt(request: Transactions.AddTransactionReceiptRequest, options?: RequestOptions): ApiPromise<ReceiptImage[], Transactions.AddTransactionReceiptError>`
- **Wire**: `POST /v3/spend/transactions/{transactionId}/receipts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReceiptImage[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.AddTransactionReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.AddTransactionReceiptRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `TransactionReceiptRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionReceiptRequestDto` | `transactionReceiptRequestDtoSchema` | `src/models/transaction-receipt-request-dto.ts` |
| `ReceiptImage` | `receiptImageSchema` | `src/models/receipt-image.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createReceiptUploadUrl

- **Signature**: `createReceiptUploadUrl(request?: Transactions.CreateReceiptUploadUrlRequest, options?: RequestOptions): ApiPromise<ReimbursementImageUploadUrlResponseDto, Transactions.CreateReceiptUploadUrlError>`
- **Wire**: `POST /v3/spend/transactions/receipt-upload-url`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReimbursementImageUploadUrlResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.CreateReceiptUploadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.CreateReceiptUploadUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReimbursementImageUploadUrlResponseDto` | `reimbursementImageUploadUrlResponseDtoSchema` | `src/models/reimbursement-image-upload-url-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteTransactionReceipt

- **Signature**: `deleteTransactionReceipt(request: Transactions.DeleteTransactionReceiptRequest, options?: RequestOptions): ApiPromise<undefined, Transactions.DeleteTransactionReceiptError>`
- **Wire**: `DELETE /v3/spend/transactions/{transactionId}/receipts/{receiptId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.DeleteTransactionReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.DeleteTransactionReceiptRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `receiptId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getTransaction

- **Signature**: `getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise<TransactionResponseDto, Transactions.GetTransactionError>`
- **Wire**: `GET /v3/spend/transactions/{transactionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.GetTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `showCustomFieldIds` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionResponseDto` | `transactionResponseDtoSchema` | `src/models/transaction-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listTransactionCustomFieldValues

- **Signature**: `listTransactionCustomFieldValues(request: Transactions.ListTransactionCustomFieldValuesRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoCustomFieldValueDto, Transactions.ListTransactionCustomFieldValuesError>`
- **Wire**: `GET /v3/spend/transactions/{transactionId}/custom-fields/{customFieldId}/values`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoCustomFieldValueDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.ListTransactionCustomFieldValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ListTransactionCustomFieldValuesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `customFieldId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoCustomFieldValueDto` | `paginationResponseDtoCustomFieldValueDtoSchema` | `src/models/pagination-response-dto-custom-field-value-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listTransactionCustomFields

- **Signature**: `listTransactionCustomFields(request: Transactions.ListTransactionCustomFieldsRequest, options?: RequestOptions): ApiPromise<ListTransactionCustomFieldResponseDto, Transactions.ListTransactionCustomFieldsError>`
- **Wire**: `GET /v3/spend/transactions/{transactionId}/custom-fields`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTransactionCustomFieldResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.ListTransactionCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ListTransactionCustomFieldsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTransactionCustomFieldResponseDto` | `listTransactionCustomFieldResponseDtoSchema` | `src/models/list-transaction-custom-field-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listTransactions

- **Signature**: `listTransactions(request?: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoTransactionResponseDto, Transactions.ListTransactionsError>`
- **Wire**: `GET /v3/spend/transactions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoTransactionResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.ListTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ListTransactionsRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `showCustomFieldIds` | `query` | `string` | no |
| `includeReceipts` | `query` | `boolean` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoTransactionResponseDto` | `paginationResponseDtoTransactionResponseDtoSchema` | `src/models/pagination-response-dto-transaction-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### threeDsChallenge

- **Signature**: `threeDsChallenge(request: Transactions.ThreeDsChallengeRequest, options?: RequestOptions): ApiPromise<ThreeDsResponseDto, Transactions.ThreeDsChallengeError>`
- **Wire**: `POST /v3/spend/transactions/{acsTransactionId}/3ds-challenge`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ThreeDsResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.ThreeDsChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ThreeDsChallengeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acsTransactionId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `ThreeDsRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreeDsRequestDto` | `threeDsRequestDtoSchema` | `src/models/three-ds-request-dto.ts` |
| `ThreeDsResponseDto` | `threeDsResponseDtoSchema` | `src/models/three-ds-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateTransaction

- **Signature**: `updateTransaction(request: Transactions.UpdateTransactionRequest, options?: RequestOptions): ApiPromise<TransactionResponseDto, Transactions.UpdateTransactionError>`
- **Wire**: `PUT /v3/spend/transactions/{transactionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.UpdateTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.UpdateTransactionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `UpdateTxRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTxRequestDto` | `updateTxRequestDtoSchema` | `src/models/update-tx-request-dto.ts` |
| `TransactionResponseDto` | `transactionResponseDtoSchema` | `src/models/transaction-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateTransactionCustomFields

- **Signature**: `updateTransactionCustomFields(request: Transactions.UpdateTransactionCustomFieldsRequest, options?: RequestOptions): ApiPromise<SpendStatusDto, Transactions.UpdateTransactionCustomFieldsError>`
- **Wire**: `PUT /v3/spend/transactions/{transactionId}/custom-fields`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpendStatusDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Transactions.UpdateTransactionCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.UpdateTransactionCustomFieldsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `BulkUpdateTxCustomFieldRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateTxCustomFieldRequestDto` | `bulkUpdateTxCustomFieldRequestDtoSchema` | `src/models/bulk-update-tx-custom-field-request-dto.ts` |
| `SpendStatusDto` | `spendStatusDtoSchema` | `src/models/spend-status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

