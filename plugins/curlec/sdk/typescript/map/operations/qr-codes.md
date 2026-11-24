<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.qrCodes` · Source: `src/resources/qr-codes.ts` · 6 operations · Request and error types: namespace `QrCodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### closeQrCode

- **Signature**: `closeQrCode(request: QrCodes.CloseQrCodeRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.CloseQrCodeError>`
- **Wire**: `POST /payments/qr_codes/{id}/close`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCode`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `QrCodes.CloseQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.CloseQrCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createQrCode

- **Signature**: `createQrCode(request: QrCodes.CreateQrCodeRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.CreateQrCodeError>`
- **Wire**: `POST /payments/qr_codes`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCode`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `QrCodes.CreateQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.CreateQrCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentsQrCodesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsQrCodesRequest` | `paymentsQrCodesRequestSchema` | `src/models/payments-qr-codes-request.ts` |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllQrCodes

- **Signature**: `fetchAllQrCodes(request?: QrCodes.FetchAllQrCodesRequest, options?: RequestOptions): ApiPromise<PaymentsQrCodesResponse, QrCodes.FetchAllQrCodesError>`
- **Wire**: `GET /payments/qr_codes`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsQrCodesResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `QrCodes.FetchAllQrCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.FetchAllQrCodesRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |
| `customerId` | `query` | `customer_id` | `string` | no | — |
| `paymentId` | `query` | `payment_id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsQrCodesResponse` | `paymentsQrCodesResponseSchema` | `src/models/payments-qr-codes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchQrCode

- **Signature**: `fetchQrCode(request: QrCodes.FetchQrCodeRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.FetchQrCodeError>`
- **Wire**: `GET /payments/qr_codes/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QrCode`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `QrCodes.FetchQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.FetchQrCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchQrCodePayments

- **Signature**: `fetchQrCodePayments(request: QrCodes.FetchQrCodePaymentsRequest, options?: RequestOptions): ApiPromise<PaymentsQrCodesPaymentsResponse, QrCodes.FetchQrCodePaymentsError>`
- **Wire**: `GET /payments/qr_codes/{id}/payments`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsQrCodesPaymentsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `QrCodes.FetchQrCodePaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.FetchQrCodePaymentsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `from` | `query` | `number` | no | — |
| `to` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsQrCodesPaymentsResponse` | `paymentsQrCodesPaymentsResponseSchema` | `src/models/payments-qr-codes-payments-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateQrCode

- **Signature**: `updateQrCode(request: QrCodes.UpdateQrCodeRequest, options?: RequestOptions): ApiPromise<QrCode, QrCodes.UpdateQrCodeError>`
- **Wire**: `PATCH /payments/qr_codes/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QrCode`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `QrCodes.UpdateQrCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QrCodes.UpdateQrCodeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentsQrCodesRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsQrCodesRequest1` | `paymentsQrCodesRequest1Schema` | `src/models/payments-qr-codes-request1.ts` |
| `QrCode` | `qrCodeSchema` | `src/models/qr-code.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

