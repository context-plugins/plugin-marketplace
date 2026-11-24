<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `src/resources/payments.ts` · 6 operations · Request and error types: namespace `Payments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPayout

- **Signature**: `cancelPayout(request: Payments.CancelPayoutRequest, options?: RequestOptions): ApiPromise<PayoutDetailsResponse, Payments.CancelPayoutError>`
- **Wire**: `DELETE /v2/user/payments/payout/{transaction_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutDetailsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Payments.CancelPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.CancelPayoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutDetailsResponse` | `payoutDetailsResponseSchema` | `src/models/payout-details-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPayinHistory

- **Signature**: `getPayinHistory(options?: RequestOptions): ApiPromise<PaymentHistoryResponse, Payments.GetPayinHistoryError>`
- **Wire**: `GET /v2/user/payments/payin`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentHistoryResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Payments.GetPayinHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentHistoryResponse` | `paymentHistoryResponseSchema` | `src/models/payment-history-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPayoutHistory

- **Signature**: `getPayoutHistory(options?: RequestOptions): ApiPromise<PaymentHistoryResponse, Payments.GetPayoutHistoryError>`
- **Wire**: `GET /v2/user/payments/payout`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentHistoryResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Payments.GetPayoutHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentHistoryResponse` | `paymentHistoryResponseSchema` | `src/models/payment-history-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPayoutModes

- **Signature**: `getPayoutModes(options?: RequestOptions): ApiPromise<PayoutModesResponse, Payments.GetPayoutModesError>`
- **Wire**: `GET /v2/user/payments/payout/modes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutModesResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Payments.GetPayoutModesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutModesResponse` | `payoutModesResponseSchema` | `src/models/payout-modes-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### initiatePayout

- **Signature**: `initiatePayout(request: Payments.InitiatePayoutRequestParams, options?: RequestOptions): ApiPromise<PayoutDetailsResponse, Payments.InitiatePayoutError>`
- **Wire**: `POST /v2/user/payments/payout`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutDetailsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Payments.InitiatePayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.InitiatePayoutRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InitiatePayoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitiatePayoutRequest` | `initiatePayoutRequestSchema` | `src/models/initiate-payout-request.ts` |
| `PayoutDetailsResponse` | `payoutDetailsResponseSchema` | `src/models/payout-details-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### modifyPayout

- **Signature**: `modifyPayout(request: Payments.ModifyPayoutRequestParams, options?: RequestOptions): ApiPromise<PayoutDetailsResponse, Payments.ModifyPayoutError>`
- **Wire**: `PUT /v2/user/payments/payout/{transaction_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutDetailsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Payments.ModifyPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.ModifyPayoutRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `body` | `body` | — | `ModifyPayoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModifyPayoutRequest` | `modifyPayoutRequestSchema` | `src/models/modify-payout-request.ts` |
| `PayoutDetailsResponse` | `payoutDetailsResponseSchema` | `src/models/payout-details-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

