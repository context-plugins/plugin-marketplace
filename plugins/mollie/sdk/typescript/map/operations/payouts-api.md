<!-- Generated file — do not edit; regenerated with the SDK. -->

# PayoutsApi — operations

Accessor: `client.payoutsApi` · Source: `src/resources/payouts-api.ts` · 4 operations · Request and error types: namespace `PayoutsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPayout

- **Signature**: `cancelPayout(request: PayoutsApi.CancelPayoutRequest, options?: RequestOptions): ApiPromise<undefined, PayoutsApi.CancelPayoutError>`
- **Wire**: `DELETE /v2/payouts/{payoutId}`
- **Auth**: any of `apiKey`, `advancedAccessToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PayoutsApi.CancelPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error409"` [409] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutsApi.CancelPayoutRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### createPayout

- **Signature**: `createPayout(request: PayoutsApi.CreatePayoutRequest, options?: RequestOptions): ApiPromise<undefined, PayoutsApi.CreatePayoutError>`
- **Wire**: `POST /v2/payouts`
- **Auth**: any of `apiKey`, `advancedAccessToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PayoutsApi.CreatePayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutsApi.CreatePayoutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `PayoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutRequest` | `payoutRequestSchema` | `src/models/payout-request.ts` |

### getPayout

- **Signature**: `getPayout(request: PayoutsApi.GetPayoutRequest, options?: RequestOptions): ApiPromise<undefined, PayoutsApi.GetPayoutError>`
- **Wire**: `GET /v2/payouts/{payoutId}`
- **Auth**: any of `apiKey`, `advancedAccessToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PayoutsApi.GetPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutsApi.GetPayoutRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listPayouts

- **Signature**: `listPayouts(request: PayoutsApi.ListPayoutsRequest, options?: RequestOptions): ApiPromise<undefined, PayoutsApi.ListPayoutsError>`
- **Wire**: `GET /v2/payouts`
- **Auth**: any of `apiKey`, `advancedAccessToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PayoutsApi.ListPayoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutsApi.ListPayoutsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `balanceId` | `query` | — | `string` | no |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

