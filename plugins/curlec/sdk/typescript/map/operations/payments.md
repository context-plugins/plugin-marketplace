<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `src/resources/payments.ts` · 4 operations · Request and error types: namespace `Payments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### capturePayment

- **Signature**: `capturePayment(request: Payments.CapturePaymentRequest, options?: RequestOptions): ApiPromise<PaymentRazorpayPaymentsApi, Payments.CapturePaymentError>`
- **Wire**: `POST /payments/{id}/capture`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentRazorpayPaymentsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Payments.CapturePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.CapturePaymentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentsCaptureRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsCaptureRequest` | `paymentsCaptureRequestSchema` | `src/models/payments-capture-request.ts` |
| `PaymentRazorpayPaymentsApi` | `paymentRazorpayPaymentsApiSchema` | `src/models/payment-razorpay-payments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllPayments

- **Signature**: `fetchAllPayments(request?: Payments.FetchAllPaymentsRequest, options?: RequestOptions): ApiPromise<PaymentsResponse, Payments.FetchAllPaymentsError>`
- **Wire**: `GET /payments`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Payments.FetchAllPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.FetchAllPaymentsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `from` | `query` | `number` | no | — |
| `to` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsResponse` | `paymentsResponseSchema` | `src/models/payments-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPayment

- **Signature**: `fetchPayment(request: Payments.FetchPaymentRequest, options?: RequestOptions): ApiPromise<PaymentRazorpayPaymentsApi, Payments.FetchPaymentError>`
- **Wire**: `GET /payments/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentRazorpayPaymentsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Payments.FetchPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.FetchPaymentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRazorpayPaymentsApi` | `paymentRazorpayPaymentsApiSchema` | `src/models/payment-razorpay-payments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePayment

- **Signature**: `updatePayment(request: Payments.UpdatePaymentRequest, options?: RequestOptions): ApiPromise<PaymentRazorpayPaymentsApi, Payments.UpdatePaymentError>`
- **Wire**: `PATCH /payments/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentRazorpayPaymentsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Payments.UpdatePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.UpdatePaymentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsRequest` | `paymentsRequestSchema` | `src/models/payments-request.ts` |
| `PaymentRazorpayPaymentsApi` | `paymentRazorpayPaymentsApiSchema` | `src/models/payment-razorpay-payments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

