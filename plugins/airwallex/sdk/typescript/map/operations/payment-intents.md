<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentIntents — operations

Accessor: `client.paymentIntents` · Source: `src/resources/payment-intents.ts` · 5 operations · Request types: namespace `PaymentIntents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airwallex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPaymentIntent

- **Signature**: `cancelPaymentIntent(request: PaymentIntents.CancelPaymentIntentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/payment_intents/{id}/cancel`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PaymentIntents.CancelPaymentIntentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### capturePaymentIntent

- **Signature**: `capturePaymentIntent(request: PaymentIntents.CapturePaymentIntentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/payment_intents/{id}/capture`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PaymentIntents.CapturePaymentIntentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### confirmPaymentIntent

- **Signature**: `confirmPaymentIntent(request: PaymentIntents.ConfirmPaymentIntentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/payment_intents/{id}/confirm`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PaymentIntents.ConfirmPaymentIntentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### createPaymentIntent

- **Signature**: `createPaymentIntent(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/payment_intents/create`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getPaymentIntent

- **Signature**: `getPaymentIntent(request: PaymentIntents.GetPaymentIntentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/payment_intents/{id}`
- **Auth**: any of `bearerAuth`, (all of `clientIdHeader`, `apiKeyHeader`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirwallexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PaymentIntents.GetPaymentIntentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

