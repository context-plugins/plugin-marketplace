<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentDowntimes — operations

Accessor: `client.paymentDowntimes` · Source: `src/resources/payment-downtimes.ts` · 2 operations · Request and error types: namespace `PaymentDowntimes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchPaymentDowntime

- **Signature**: `fetchPaymentDowntime(request: PaymentDowntimes.FetchPaymentDowntimeRequest, options?: RequestOptions): ApiPromise<PaymentDowntime, PaymentDowntimes.FetchPaymentDowntimeError>`
- **Wire**: `GET /payments/downtimes/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentDowntime`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentDowntimes.FetchPaymentDowntimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentDowntimes.FetchPaymentDowntimeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentDowntime` | `paymentDowntimeSchema` | `src/models/payment-downtime.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPaymentDowntimes

- **Signature**: `fetchPaymentDowntimes(options?: RequestOptions): ApiPromise<PaymentsDowntimesResponse, PaymentDowntimes.FetchPaymentDowntimesError>`
- **Wire**: `GET /payments/downtimes`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsDowntimesResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentDowntimes.FetchPaymentDowntimesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsDowntimesResponse` | `paymentsDowntimesResponseSchema` | `src/models/payments-downtimes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

