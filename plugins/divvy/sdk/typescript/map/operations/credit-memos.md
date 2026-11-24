<!-- Generated file — do not edit; regenerated with the SDK. -->

# CreditMemos — operations

Accessor: `client.creditMemos` · Source: `src/resources/credit-memos.ts` · 12 operations · Request and error types: namespace `CreditMemos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveCreditMemo

- **Signature**: `archiveCreditMemo(request: CreditMemos.ArchiveCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoResponseDto, CreditMemos.ArchiveCreditMemoError>`
- **Wire**: `POST /v3/credit-memos/{creditMemoId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.ArchiveCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.ArchiveCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `creditMemoId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditMemoResponseDto` | `creditMemoResponseDtoSchema` | `src/models/credit-memo-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveCreditMemo

- **Signature**: `bulkArchiveCreditMemo(request: CreditMemos.BulkArchiveCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkArchiveCreditMemoError>`
- **Wire**: `POST /v3/credit-memos/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.BulkArchiveCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.BulkArchiveCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditMemoBulkResponseDto` | `creditMemoBulkResponseDtoSchema` | `src/models/credit-memo-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateCreditMemo

- **Signature**: `bulkCreateCreditMemo(request: CreditMemos.BulkCreateCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkCreateCreditMemoError>`
- **Wire**: `POST /v3/credit-memos/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.BulkCreateCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.BulkCreateCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateCreditMemoRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCreditMemoRequestDto` | `createCreditMemoRequestDtoSchema` | `src/models/create-credit-memo-request-dto.ts` |
| `CreditMemoBulkResponseDto` | `creditMemoBulkResponseDtoSchema` | `src/models/credit-memo-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkReplaceCreditMemo

- **Signature**: `bulkReplaceCreditMemo(request: CreditMemos.BulkReplaceCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkReplaceCreditMemoError>`
- **Wire**: `PUT /v3/credit-memos/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.BulkReplaceCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.BulkReplaceCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ReplaceCreditMemoWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReplaceCreditMemoWithIdRequestDto` | `replaceCreditMemoWithIdRequestDtoSchema` | `src/models/replace-credit-memo-with-id-request-dto.ts` |
| `CreditMemoBulkResponseDto` | `creditMemoBulkResponseDtoSchema` | `src/models/credit-memo-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreCreditMemo

- **Signature**: `bulkRestoreCreditMemo(request: CreditMemos.BulkRestoreCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkRestoreCreditMemoError>`
- **Wire**: `POST /v3/credit-memos/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.BulkRestoreCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.BulkRestoreCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditMemoBulkResponseDto` | `creditMemoBulkResponseDtoSchema` | `src/models/credit-memo-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateCreditMemo

- **Signature**: `bulkUpdateCreditMemo(request: CreditMemos.BulkUpdateCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkUpdateCreditMemoError>`
- **Wire**: `PATCH /v3/credit-memos/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.BulkUpdateCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.BulkUpdateCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateCreditMemoWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCreditMemoWithIdRequestDto` | `updateCreditMemoWithIdRequestDtoSchema` | `src/models/update-credit-memo-with-id-request-dto.ts` |
| `CreditMemoBulkResponseDto` | `creditMemoBulkResponseDtoSchema` | `src/models/credit-memo-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createCreditMemo

- **Signature**: `createCreditMemo(request: CreditMemos.CreateCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoResponseDto, CreditMemos.CreateCreditMemoError>`
- **Wire**: `POST /v3/credit-memos`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.CreateCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.CreateCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateCreditMemoRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCreditMemoRequestDto` | `createCreditMemoRequestDtoSchema` | `src/models/create-credit-memo-request-dto.ts` |
| `CreditMemoResponseDto` | `creditMemoResponseDtoSchema` | `src/models/credit-memo-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCreditMemo

- **Signature**: `getCreditMemo(request: CreditMemos.GetCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoWithUsageResponseDto, CreditMemos.GetCreditMemoError>`
- **Wire**: `GET /v3/credit-memos/{creditMemoId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditMemoWithUsageResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.GetCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.GetCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `creditMemoId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditMemoWithUsageResponseDto` | `creditMemoWithUsageResponseDtoSchema` | `src/models/credit-memo-with-usage-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCreditMemos

- **Signature**: `listCreditMemos(request?: CreditMemos.ListCreditMemosRequest, options?: RequestOptions): ApiPromise<ListResponseDtoCreditMemoWithUsageResponseDto, CreditMemos.ListCreditMemosError>`
- **Wire**: `GET /v3/credit-memos`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoCreditMemoWithUsageResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.ListCreditMemosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.ListCreditMemosRequest` (6):

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
| `ListResponseDtoCreditMemoWithUsageResponseDto` | `listResponseDtoCreditMemoWithUsageResponseDtoSchema` | `src/models/list-response-dto-credit-memo-with-usage-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### replaceCreditMemo

- **Signature**: `replaceCreditMemo(request: CreditMemos.ReplaceCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoResponseDto, CreditMemos.ReplaceCreditMemoError>`
- **Wire**: `PUT /v3/credit-memos/{creditMemoId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.ReplaceCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.ReplaceCreditMemoRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `creditMemoId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ReplaceCreditMemoRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReplaceCreditMemoRequestDto` | `replaceCreditMemoRequestDtoSchema` | `src/models/replace-credit-memo-request-dto.ts` |
| `CreditMemoResponseDto` | `creditMemoResponseDtoSchema` | `src/models/credit-memo-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreCreditMemo

- **Signature**: `restoreCreditMemo(request: CreditMemos.RestoreCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoResponseDto, CreditMemos.RestoreCreditMemoError>`
- **Wire**: `POST /v3/credit-memos/{creditMemoId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.RestoreCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.RestoreCreditMemoRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `creditMemoId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditMemoResponseDto` | `creditMemoResponseDtoSchema` | `src/models/credit-memo-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateCreditMemo

- **Signature**: `updateCreditMemo(request: CreditMemos.UpdateCreditMemoRequest, options?: RequestOptions): ApiPromise<CreditMemoResponseDto, CreditMemos.UpdateCreditMemoError>`
- **Wire**: `PATCH /v3/credit-memos/{creditMemoId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditMemoResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CreditMemos.UpdateCreditMemoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CreditMemos.UpdateCreditMemoRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `creditMemoId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateCreditMemoRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCreditMemoRequestDto` | `updateCreditMemoRequestDtoSchema` | `src/models/update-credit-memo-request-dto.ts` |
| `CreditMemoResponseDto` | `creditMemoResponseDtoSchema` | `src/models/credit-memo-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

