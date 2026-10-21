<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementsApi — operations

Accessor: `client.settlementsApi` · Source: `src/resources/settlements-api.ts` · 8 operations · Request and error types: namespace `SettlementsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getNextSettlement

- **Signature**: `getNextSettlement(request: SettlementsApi.GetNextSettlementRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.GetNextSettlementError>`
- **Wire**: `GET /v2/settlements/next`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.GetNextSettlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.GetNextSettlementRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getOpenSettlement

- **Signature**: `getOpenSettlement(request: SettlementsApi.GetOpenSettlementRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.GetOpenSettlementError>`
- **Wire**: `GET /v2/settlements/open`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.GetOpenSettlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.GetOpenSettlementRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getSettlement

- **Signature**: `getSettlement(request: SettlementsApi.GetSettlementRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.GetSettlementError>`
- **Wire**: `GET /v2/settlements/{settlementId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.GetSettlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.GetSettlementRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `settlementId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listSettlementCaptures

- **Signature**: `listSettlementCaptures(request: SettlementsApi.ListSettlementCapturesRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.ListSettlementCapturesError>`
- **Wire**: `GET /v2/settlements/{settlementId}/captures`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.ListSettlementCapturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.ListSettlementCapturesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `settlementId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listSettlementChargebacks

- **Signature**: `listSettlementChargebacks(request: SettlementsApi.ListSettlementChargebacksRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.ListSettlementChargebacksError>`
- **Wire**: `GET /v2/settlements/{settlementId}/chargebacks`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.ListSettlementChargebacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.ListSettlementChargebacksRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `settlementId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listSettlementPayments

- **Signature**: `listSettlementPayments(request: SettlementsApi.ListSettlementPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.ListSettlementPaymentsError>`
- **Wire**: `GET /v2/settlements/{settlementId}/payments`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.ListSettlementPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.ListSettlementPaymentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `settlementId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `profileId` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listSettlementRefunds

- **Signature**: `listSettlementRefunds(request: SettlementsApi.ListSettlementRefundsRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.ListSettlementRefundsError>`
- **Wire**: `GET /v2/settlements/{settlementId}/refunds`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.ListSettlementRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.ListSettlementRefundsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `settlementId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listSettlements

- **Signature**: `listSettlements(request: SettlementsApi.ListSettlementsRequest, options?: RequestOptions): ApiPromise<undefined, SettlementsApi.ListSettlementsError>`
- **Wire**: `GET /v2/settlements`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SettlementsApi.ListSettlementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.ListSettlementsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `balanceId` | `query` | — | `string` | no |
| `year` | `query` | — | `string` | no |
| `month` | `query` | — | `string` | no |
| `currencies` | `query` | — | `Currencies` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Currencies` | `currenciesSchema` | `src/models/currencies.ts` |

