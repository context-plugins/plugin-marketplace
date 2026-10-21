<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalancesApi — operations

Accessor: `client.balancesApi` · Source: `src/resources/balances-api.ts` · 5 operations · Request and error types: namespace `BalancesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBalance

- **Signature**: `getBalance(request: BalancesApi.GetBalanceRequest, options?: RequestOptions): ApiPromise<undefined, BalancesApi.GetBalanceError>`
- **Wire**: `GET /v2/balances/{balanceId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalancesApi.GetBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesApi.GetBalanceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `balanceId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getBalanceReport

- **Signature**: `getBalanceReport(request: BalancesApi.GetBalanceReportRequest, options?: RequestOptions): ApiPromise<undefined, BalancesApi.GetBalanceReportError>`
- **Wire**: `GET /v2/balances/{balanceId}/report`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalancesApi.GetBalanceReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesApi.GetBalanceReportRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `balanceId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | yes |
| `until` | `query` | — | `string` | yes |
| `grouping` | `query` | — | `BalanceReportGrouping` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceReportGrouping` | `balanceReportGroupingSchema` | `src/models/balance-report-grouping.ts` |

### getPrimaryBalance

- **Signature**: `getPrimaryBalance(request: BalancesApi.GetPrimaryBalanceRequest, options?: RequestOptions): ApiPromise<undefined, BalancesApi.GetPrimaryBalanceError>`
- **Wire**: `GET /v2/balances/primary`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalancesApi.GetPrimaryBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesApi.GetPrimaryBalanceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listBalanceTransactions

- **Signature**: `listBalanceTransactions(request: BalancesApi.ListBalanceTransactionsRequest, options?: RequestOptions): ApiPromise<undefined, BalancesApi.ListBalanceTransactionsError>`
- **Wire**: `GET /v2/balances/{balanceId}/transactions`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalancesApi.ListBalanceTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesApi.ListBalanceTransactionsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `balanceId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listBalances

- **Signature**: `listBalances(request: BalancesApi.ListBalancesRequest, options?: RequestOptions): ApiPromise<undefined, BalancesApi.ListBalancesError>`
- **Wire**: `GET /v2/balances`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `BalancesApi.ListBalancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesApi.ListBalancesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `currency` | `query` | — | `string` | no |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

