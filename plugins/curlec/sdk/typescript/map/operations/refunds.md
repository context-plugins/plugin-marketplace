<!-- Generated file — do not edit; regenerated with the SDK. -->

# Refunds — operations

Accessor: `client.refunds` · Source: `src/resources/refunds.ts` · 6 operations · Request and error types: namespace `Refunds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRefund

- **Signature**: `createRefund(request: Refunds.CreateRefundRequest, options?: RequestOptions): ApiPromise<RefundRazorpayRefundsApi, Refunds.CreateRefundError>`
- **Wire**: `POST /payments/{id}/refund`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Refunds.CreateRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Refunds.CreateRefundRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentsRefundRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsRefundRequest` | `paymentsRefundRequestSchema` | `src/models/payments-refund-request.ts` |
| `RefundRazorpayRefundsApi` | `refundRazorpayRefundsApiSchema` | `src/models/refund-razorpay-refunds-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllRefunds

- **Signature**: `fetchAllRefunds(request?: Refunds.FetchAllRefundsRequest, options?: RequestOptions): ApiPromise<RefundsResponse, Refunds.FetchAllRefundsError>`
- **Wire**: `GET /refunds`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RefundsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Refunds.FetchAllRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Refunds.FetchAllRefundsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `from` | `query` | `number` | no | — |
| `to` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundsResponse` | `refundsResponseSchema` | `src/models/refunds-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPaymentRefund

- **Signature**: `fetchPaymentRefund(request: Refunds.FetchPaymentRefundRequest, options?: RequestOptions): ApiPromise<RefundRazorpayRefundsApi, Refunds.FetchPaymentRefundError>`
- **Wire**: `GET /payments/{payment_id}/refunds/{refund_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Refunds.FetchPaymentRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Refunds.FetchPaymentRefundRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | `payment_id` | `string` | yes |
| `refundId` | `path` | `refund_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRazorpayRefundsApi` | `refundRazorpayRefundsApiSchema` | `src/models/refund-razorpay-refunds-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPaymentRefunds

- **Signature**: `fetchPaymentRefunds(request: Refunds.FetchPaymentRefundsRequest, options?: RequestOptions): ApiPromise<PaymentsRefundsResponse, Refunds.FetchPaymentRefundsError>`
- **Wire**: `GET /payments/{payment_id}/refunds`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsRefundsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Refunds.FetchPaymentRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Refunds.FetchPaymentRefundsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `paymentId` | `path` | `payment_id` | `string` | yes | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsRefundsResponse` | `paymentsRefundsResponseSchema` | `src/models/payments-refunds-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchRefund

- **Signature**: `fetchRefund(request: Refunds.FetchRefundRequest, options?: RequestOptions): ApiPromise<RefundRazorpayRefundsApi, Refunds.FetchRefundError>`
- **Wire**: `GET /refunds/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Refunds.FetchRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Refunds.FetchRefundRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRazorpayRefundsApi` | `refundRazorpayRefundsApiSchema` | `src/models/refund-razorpay-refunds-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateRefund

- **Signature**: `updateRefund(request: Refunds.UpdateRefundRequest, options?: RequestOptions): ApiPromise<RefundRazorpayRefundsApi, Refunds.UpdateRefundError>`
- **Wire**: `PATCH /refunds/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Refunds.UpdateRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Refunds.UpdateRefundRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `RefundsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundsRequest` | `refundsRequestSchema` | `src/models/refunds-request.ts` |
| `RefundRazorpayRefundsApi` | `refundRazorpayRefundsApiSchema` | `src/models/refund-razorpay-refunds-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

