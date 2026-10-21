<!-- Generated file — do not edit; regenerated with the SDK. -->

# DraftTransfersApi — operations

Accessor: `client.draftTransfersApi` · Source: `src/resources/draft-transfers-api.ts` · 4 operations · Request and error types: namespace `DraftTransfersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelDraftTransfer

- **Signature**: `cancelDraftTransfer(request: DraftTransfersApi.CancelDraftTransferRequest, options?: RequestOptions): ApiPromise<undefined, DraftTransfersApi.CancelDraftTransferError>`
- **Wire**: `DELETE /v2/business-accounts/draft-transfers/{draftTransferId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DraftTransfersApi.CancelDraftTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DraftTransfersApi.CancelDraftTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `draftTransferId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `DeleteValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteValuesSalesInvoice` | `deleteValuesSalesInvoiceSchema` | `src/models/delete-values-sales-invoice.ts` |

### createDraftTransfer

- **Signature**: `createDraftTransfer(request: DraftTransfersApi.CreateDraftTransferRequestParams, options?: RequestOptions): ApiPromise<undefined, DraftTransfersApi.CreateDraftTransferError>`
- **Wire**: `POST /v2/business-accounts/draft-transfers`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DraftTransfersApi.CreateDraftTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DraftTransfersApi.CreateDraftTransferRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `CreateDraftTransferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDraftTransferRequest` | `createDraftTransferRequestSchema` | `src/models/create-draft-transfer-request.ts` |

### getDraftTransfer

- **Signature**: `getDraftTransfer(request: DraftTransfersApi.GetDraftTransferRequest, options?: RequestOptions): ApiPromise<undefined, DraftTransfersApi.GetDraftTransferError>`
- **Wire**: `GET /v2/business-accounts/draft-transfers/{draftTransferId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DraftTransfersApi.GetDraftTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DraftTransfersApi.GetDraftTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `draftTransferId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listDraftTransfers

- **Signature**: `listDraftTransfers(request: DraftTransfersApi.ListDraftTransfersRequest, options?: RequestOptions): ApiPromise<undefined, DraftTransfersApi.ListDraftTransfersError>`
- **Wire**: `GET /v2/business-accounts/draft-transfers`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `DraftTransfersApi.ListDraftTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DraftTransfersApi.ListDraftTransfersRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `status` | `query` | — | `DraftTransferStatus` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DraftTransferStatus` | `draftTransferStatusSchema` | `src/models/draft-transfer-status.ts` |

