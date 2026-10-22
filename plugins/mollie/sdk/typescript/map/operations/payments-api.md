<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsApi — operations

Accessor: `client.paymentsApi` · Source: `src/resources/payments-api.ts` · 6 operations · Request and error types: namespace `PaymentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPayment

- **Signature**: `cancelPayment(request: PaymentsApi.CancelPaymentRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsApi.CancelPaymentError>`
- **Wire**: `DELETE /v2/payments/{paymentId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentsApi.CancelPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.CancelPaymentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2PaymentsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2PaymentsRequest1` | `v2PaymentsRequest1Schema` | `src/models/v2-payments-request1.ts` |

### createPayment

- **Signature**: `createPayment(request: PaymentsApi.CreatePaymentRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsApi.CreatePaymentError>`
- **Wire**: `POST /v2/payments`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentsApi.CreatePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.CreatePaymentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `include` | `query` | — | `string` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `PaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest` | `paymentRequestSchema` | `src/models/payment-request.ts` |

### getPayment

- **Signature**: `getPayment(request: PaymentsApi.GetPaymentRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsApi.GetPaymentError>`
- **Wire**: `GET /v2/payments/{paymentId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentsApi.GetPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.GetPaymentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `include` | `query` | — | `string` | no |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listPayments

- **Signature**: `listPayments(request: PaymentsApi.ListPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsApi.ListPaymentsError>`
- **Wire**: `GET /v2/payments`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentsApi.ListPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.ListPaymentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### releaseAuthorization

- **Signature**: `releaseAuthorization(request: PaymentsApi.ReleaseAuthorizationRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsApi.ReleaseAuthorizationError>`
- **Wire**: `POST /v2/payments/{paymentId}/release-authorization`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentsApi.ReleaseAuthorizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.ReleaseAuthorizationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2PaymentsReleaseAuthorizationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2PaymentsReleaseAuthorizationRequest` | `v2PaymentsReleaseAuthorizationRequestSchema` | `src/models/v2-payments-release-authorization-request.ts` |

### updatePayment

- **Signature**: `updatePayment(request: PaymentsApi.UpdatePaymentRequest, options?: RequestOptions): ApiPromise<undefined, PaymentsApi.UpdatePaymentError>`
- **Wire**: `PATCH /v2/payments/{paymentId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentsApi.UpdatePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.UpdatePaymentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2PaymentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2PaymentsRequest` | `v2PaymentsRequestSchema` | `src/models/v2-payments-request.ts` |

