<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChargebacksApi — operations

Accessor: `client.chargebacksApi` · Source: `src/resources/chargebacks-api.ts` · 3 operations · Request and error types: namespace `ChargebacksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChargeback

- **Signature**: `getChargeback(request: ChargebacksApi.GetChargebackRequest, options?: RequestOptions): ApiPromise<undefined, ChargebacksApi.GetChargebackError>`
- **Wire**: `GET /v2/payments/{paymentId}/chargebacks/{chargebackId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ChargebacksApi.GetChargebackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebacksApi.GetChargebackRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `chargebackId` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listAllChargebacks

- **Signature**: `listAllChargebacks(request: ChargebacksApi.ListAllChargebacksRequest, options?: RequestOptions): ApiPromise<undefined, ChargebacksApi.ListAllChargebacksError>`
- **Wire**: `GET /v2/chargebacks`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ChargebacksApi.ListAllChargebacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebacksApi.ListAllChargebacksRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sorting` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listChargebacks

- **Signature**: `listChargebacks(request: ChargebacksApi.ListChargebacksRequest, options?: RequestOptions): ApiPromise<undefined, ChargebacksApi.ListChargebacksError>`
- **Wire**: `GET /v2/payments/{paymentId}/chargebacks`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ChargebacksApi.ListChargebacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebacksApi.ListChargebacksRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

