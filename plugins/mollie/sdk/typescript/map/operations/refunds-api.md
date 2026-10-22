<!-- Generated file — do not edit; regenerated with the SDK. -->

# RefundsApi — operations

Accessor: `client.refundsApi` · Source: `src/resources/refunds-api.ts` · 5 operations · Request and error types: namespace `RefundsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelRefund

- **Signature**: `cancelRefund(request: RefundsApi.CancelRefundRequest, options?: RequestOptions): ApiPromise<undefined, RefundsApi.CancelRefundError>`
- **Wire**: `DELETE /v2/payments/{paymentId}/refunds/{refundId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `RefundsApi.CancelRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RefundsApi.CancelRefundRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `refundId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### createRefund

- **Signature**: `createRefund(request: RefundsApi.CreateRefundRequest, options?: RequestOptions): ApiPromise<undefined, RefundsApi.CreateRefundError>`
- **Wire**: `POST /v2/payments/{paymentId}/refunds`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `RefundsApi.CreateRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error409"` [409] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RefundsApi.CreateRefundRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `RefundRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRequest` | `refundRequestSchema` | `src/models/refund-request.ts` |

### getRefund

- **Signature**: `getRefund(request: RefundsApi.GetRefundRequest, options?: RequestOptions): ApiPromise<undefined, RefundsApi.GetRefundError>`
- **Wire**: `GET /v2/payments/{paymentId}/refunds/{refundId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `RefundsApi.GetRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RefundsApi.GetRefundRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `refundId` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listAllRefunds

- **Signature**: `listAllRefunds(request: RefundsApi.ListAllRefundsRequest, options?: RequestOptions): ApiPromise<undefined, RefundsApi.ListAllRefundsError>`
- **Wire**: `GET /v2/refunds`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `RefundsApi.ListAllRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RefundsApi.ListAllRefundsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `embed` | `query` | — | `string` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listRefunds

- **Signature**: `listRefunds(request: RefundsApi.ListRefundsRequest, options?: RequestOptions): ApiPromise<undefined, RefundsApi.ListRefundsError>`
- **Wire**: `GET /v2/payments/{paymentId}/refunds`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `RefundsApi.ListRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RefundsApi.ListRefundsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

