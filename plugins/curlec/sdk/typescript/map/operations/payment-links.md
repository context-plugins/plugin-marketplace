<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinks — operations

Accessor: `client.paymentLinks` · Source: `src/resources/payment-links.ts` · 6 operations · Request and error types: namespace `PaymentLinks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPaymentLink

- **Signature**: `cancelPaymentLink(request: PaymentLinks.CancelPaymentLinkRequest, options?: RequestOptions): ApiPromise<PaymentLink, PaymentLinks.CancelPaymentLinkError>`
- **Wire**: `POST /payment_links/{id}/cancel`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentLinks.CancelPaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.CancelPaymentLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLink` | `paymentLinkSchema` | `src/models/payment-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createPaymentLink

- **Signature**: `createPaymentLink(request: PaymentLinks.CreatePaymentLinkRequest, options?: RequestOptions): ApiPromise<PaymentLink, PaymentLinks.CreatePaymentLinkError>`
- **Wire**: `POST /payment_links`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentLinks.CreatePaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.CreatePaymentLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentLinksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLinksRequest` | `paymentLinksRequestSchema` | `src/models/payment-links-request.ts` |
| `PaymentLink` | `paymentLinkSchema` | `src/models/payment-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllPaymentLinks

- **Signature**: `fetchAllPaymentLinks(request?: PaymentLinks.FetchAllPaymentLinksRequest, options?: RequestOptions): ApiPromise<PaymentLinksResponse, PaymentLinks.FetchAllPaymentLinksError>`
- **Wire**: `GET /payment_links`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentLinksResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentLinks.FetchAllPaymentLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.FetchAllPaymentLinksRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `query` | `payment_id` | `string` | no |
| `referenceId` | `query` | `reference_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLinksResponse` | `paymentLinksResponseSchema` | `src/models/payment-links-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPaymentLink

- **Signature**: `fetchPaymentLink(request: PaymentLinks.FetchPaymentLinkRequest, options?: RequestOptions): ApiPromise<PaymentLink, PaymentLinks.FetchPaymentLinkError>`
- **Wire**: `GET /payment_links/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentLinks.FetchPaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.FetchPaymentLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLink` | `paymentLinkSchema` | `src/models/payment-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resendPaymentLinkNotification

- **Signature**: `resendPaymentLinkNotification(request: PaymentLinks.ResendPaymentLinkNotificationRequest, options?: RequestOptions): ApiPromise<PaymentLinksNotifyByResponse, PaymentLinks.ResendPaymentLinkNotificationError>`
- **Wire**: `POST /payment_links/{id}/notify_by/{medium}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentLinksNotifyByResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentLinks.ResendPaymentLinkNotificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.ResendPaymentLinkNotificationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `medium` | `path` | `Medium` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Medium` | `mediumSchema` | `src/models/medium.ts` |
| `PaymentLinksNotifyByResponse` | `paymentLinksNotifyByResponseSchema` | `src/models/payment-links-notify-by-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePaymentLink

- **Signature**: `updatePaymentLink(request: PaymentLinks.UpdatePaymentLinkRequest, options?: RequestOptions): ApiPromise<PaymentLink, PaymentLinks.UpdatePaymentLinkError>`
- **Wire**: `PATCH /payment_links/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PaymentLinks.UpdatePaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.UpdatePaymentLinkRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentLinksRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLinksRequest1` | `paymentLinksRequest1Schema` | `src/models/payment-links-request1.ts` |
| `PaymentLink` | `paymentLinkSchema` | `src/models/payment-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

