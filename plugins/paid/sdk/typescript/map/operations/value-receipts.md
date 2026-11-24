<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueReceipts — operations

Accessor: `client.valueReceipts` · Source: `src/resources/value-receipts.ts` · 9 operations · Request and error types: namespace `ValueReceipts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `archiveValueReceipt(request: ValueReceipts.ArchiveValueReceiptRequest, options?: RequestOptions): ApiPromise<SuccessResponse, ValueReceipts.ArchiveValueReceiptError>`
- **Wire**: `POST /value-receipts/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.ArchiveValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.ArchiveValueReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getValueReceiptById

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getValueReceiptById(request: ValueReceipts.GetValueReceiptByIdRequest, options?: RequestOptions): ApiPromise<ValueReceiptDetail, ValueReceipts.GetValueReceiptByIdError>`
- **Wire**: `GET /value-receipts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValueReceiptDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.GetValueReceiptByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.GetValueReceiptByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueReceiptDetail` | `valueReceiptDetailSchema` | `src/models/value-receipt-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listValueReceipts

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listValueReceipts(request: ValueReceipts.ListValueReceiptsRequest, options?: RequestOptions): ApiPromise<ValueReceiptListResponse, ValueReceipts.ListValueReceiptsError>`
- **Wire**: `GET /value-receipts/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValueReceiptListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.ListValueReceiptsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.ListValueReceiptsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |
| `customerId` | `query` | — | `string` | no | — |
| `externalCustomerId` | `query` | — | `string` | no | — |
| `orderId` | `query` | — | `string` | no | — |
| `productId` | `query` | — | `string` | no | — |
| `archived` | `query` | — | `ValueReceiptsGetParametersArchived` | no | `ValueReceiptsGetParametersArchived.False` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueReceiptsGetParametersArchived` | `valueReceiptsGetParametersArchivedSchema` | `src/models/value-receipts-get-parameters-archived.ts` |
| `ValueReceiptListResponse` | `valueReceiptListResponseSchema` | `src/models/value-receipt-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### publishValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `publishValueReceipt(request: ValueReceipts.PublishValueReceiptRequest, options?: RequestOptions): ApiPromise<ValueReceiptDetail, ValueReceipts.PublishValueReceiptError>`
- **Wire**: `POST /value-receipts/{id}/publish`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValueReceiptDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.PublishValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.PublishValueReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublishValueReceiptBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishValueReceiptBody` | `publishValueReceiptBodySchema` | `src/models/publish-value-receipt-body.ts` |
| `ValueReceiptDetail` | `valueReceiptDetailSchema` | `src/models/value-receipt-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### refreshValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `refreshValueReceipt(request: ValueReceipts.RefreshValueReceiptRequest, options?: RequestOptions): ApiPromise<ValueReceiptSyncResponse, ValueReceipts.RefreshValueReceiptError>`
- **Wire**: `POST /value-receipts/{id}/refresh`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValueReceiptSyncResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.RefreshValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [409] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.RefreshValueReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueReceiptSyncResponse` | `valueReceiptSyncResponseSchema` | `src/models/value-receipt-sync-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### sealValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `sealValueReceipt(request: ValueReceipts.SealValueReceiptRequest, options?: RequestOptions): ApiPromise<SuccessResponse, ValueReceipts.SealValueReceiptError>`
- **Wire**: `POST /value-receipts/{id}/seal`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.SealValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [409] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.SealValueReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### syncValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `syncValueReceipt(request: ValueReceipts.SyncValueReceiptRequestParams, options?: RequestOptions): ApiPromise<ValueReceiptSyncResponse, ValueReceipts.SyncValueReceiptError>`
- **Wire**: `POST /value-receipts/sync`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValueReceiptSyncResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.SyncValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.SyncValueReceiptRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `SyncValueReceiptRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncValueReceiptRequest` | `syncValueReceiptRequestSchema` | `src/models/sync-value-receipt-request.ts` |
| `ValueReceiptSyncResponse` | `valueReceiptSyncResponseSchema` | `src/models/value-receipt-sync-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### unarchiveValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `unarchiveValueReceipt(request: ValueReceipts.UnarchiveValueReceiptRequest, options?: RequestOptions): ApiPromise<SuccessResponse, ValueReceipts.UnarchiveValueReceiptError>`
- **Wire**: `POST /value-receipts/{id}/unarchive`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.UnarchiveValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.UnarchiveValueReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### unpublishValueReceipt

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `unpublishValueReceipt(request: ValueReceipts.UnpublishValueReceiptRequest, options?: RequestOptions): ApiPromise<ValueReceiptDetail, ValueReceipts.UnpublishValueReceiptError>`
- **Wire**: `POST /value-receipts/{id}/unpublish`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValueReceiptDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueReceipts.UnpublishValueReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueReceipts.UnpublishValueReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueReceiptDetail` | `valueReceiptDetailSchema` | `src/models/value-receipt-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

