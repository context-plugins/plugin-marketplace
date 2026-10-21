<!-- Generated file — do not edit; regenerated with the SDK. -->

# UnmatchedCreditTransfersApi — operations

Accessor: `client.unmatchedCreditTransfersApi` · Source: `src/resources/unmatched-credit-transfers-api.ts` · 4 operations · Request and error types: namespace `UnmatchedCreditTransfersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUnmatchedCreditTransfer

- **Signature**: `getUnmatchedCreditTransfer(request: UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferRequest, options?: RequestOptions): ApiPromise<undefined, UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError>`
- **Wire**: `GET /v2/unmatched-credit-transfers/{unmatchedCreditTransferId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `unmatchedCreditTransferId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listUnmatchedCreditTransfers

- **Signature**: `listUnmatchedCreditTransfers(request: UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersRequest, options?: RequestOptions): ApiPromise<undefined, UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError>`
- **Wire**: `GET /v2/unmatched-credit-transfers`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### matchUnmatchedCreditTransfer

- **Signature**: `matchUnmatchedCreditTransfer(request: UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferRequest, options?: RequestOptions): ApiPromise<undefined, UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError>`
- **Wire**: `POST /v2/unmatched-credit-transfers/{unmatchedCreditTransferId}/match`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `unmatchedCreditTransferId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `UnmatchedCreditTransferMatchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnmatchedCreditTransferMatchRequest` | `unmatchedCreditTransferMatchRequestSchema` | `src/models/unmatched-credit-transfer-match-request.ts` |

### returnUnmatchedCreditTransfer

- **Signature**: `returnUnmatchedCreditTransfer(request: UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferRequest, options?: RequestOptions): ApiPromise<undefined, UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError>`
- **Wire**: `POST /v2/unmatched-credit-transfers/{unmatchedCreditTransferId}/return`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `unmatchedCreditTransferId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

