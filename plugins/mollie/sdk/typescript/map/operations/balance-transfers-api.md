<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceTransfersApi — operations

Accessor: `client.balanceTransfersApi` · Source: `src/resources/balance-transfers-api.ts` · 3 operations · Request and error types: namespace `BalanceTransfersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConnectBalanceTransfer

- **Signature**: `createConnectBalanceTransfer(request: BalanceTransfersApi.CreateConnectBalanceTransferRequest, options?: RequestOptions): ApiPromise<undefined, BalanceTransfersApi.CreateConnectBalanceTransferError>`
- **Wire**: `POST /v2/connect/balance-transfers`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalanceTransfersApi.CreateConnectBalanceTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceTransfersApi.CreateConnectBalanceTransferRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `EntityBalanceTransfer` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityBalanceTransfer` | `entityBalanceTransferSchema` | `src/models/entity-balance-transfer.ts` |

### getConnectBalanceTransfer

- **Signature**: `getConnectBalanceTransfer(request: BalanceTransfersApi.GetConnectBalanceTransferRequest, options?: RequestOptions): ApiPromise<undefined, BalanceTransfersApi.GetConnectBalanceTransferError>`
- **Wire**: `GET /v2/connect/balance-transfers/{balanceTransferId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalanceTransfersApi.GetConnectBalanceTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceTransfersApi.GetConnectBalanceTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `balanceTransferId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listConnectBalanceTransfers

- **Signature**: `listConnectBalanceTransfers(request: BalanceTransfersApi.ListConnectBalanceTransfersRequest, options?: RequestOptions): ApiPromise<undefined, BalanceTransfersApi.ListConnectBalanceTransfersError>`
- **Wire**: `GET /v2/connect/balance-transfers`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalanceTransfersApi.ListConnectBalanceTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceTransfersApi.ListConnectBalanceTransfersRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

