<!-- Generated file — do not edit; regenerated with the SDK. -->

# XPayouts — operations

Accessor: `client.xPayouts` · Source: `src/resources/xpayouts.ts` · 6 operations · Request and error types: namespace `XPayouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### approvePayout

- **Signature**: `approvePayout(request: XPayouts.ApprovePayoutRequest, options?: RequestOptions): ApiPromise<Payout, XPayouts.ApprovePayoutError>`
- **Wire**: `POST /payouts/{payout_id}/approve`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Payout`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayouts.ApprovePayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayouts.ApprovePayoutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | `payout_id` | `string` | yes |
| `body` | `body` | — | `PayoutsApproveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsApproveRequest` | `payoutsApproveRequestSchema` | `src/models/payouts-approve-request.ts` |
| `Payout` | `payoutSchema` | `src/models/payout.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelPayout

- **Signature**: `cancelPayout(request: XPayouts.CancelPayoutRequest, options?: RequestOptions): ApiPromise<Payout, XPayouts.CancelPayoutError>`
- **Wire**: `POST /payouts/{payout_id}/cancel`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Payout`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayouts.CancelPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayouts.CancelPayoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | `payout_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Payout` | `payoutSchema` | `src/models/payout.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createPayout

- **Signature**: `createPayout(request: XPayouts.CreatePayoutRequest, options?: RequestOptions): ApiPromise<Payout, XPayouts.CreatePayoutError>`
- **Wire**: `POST /payouts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Payout`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayouts.CreatePayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayouts.CreatePayoutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPayoutIdempotency` | `header` | `X-Payout-Idempotency` | `string` | yes |
| `body` | `body` | — | `PayoutsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsRequest` | `payoutsRequestSchema` | `src/models/payouts-request.ts` |
| `Payout` | `payoutSchema` | `src/models/payout.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPayout

- **Signature**: `fetchPayout(request: XPayouts.FetchPayoutRequest, options?: RequestOptions): ApiPromise<Payout, XPayouts.FetchPayoutError>`
- **Wire**: `GET /payouts/{payout_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Payout`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayouts.FetchPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayouts.FetchPayoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | `payout_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Payout` | `payoutSchema` | `src/models/payout.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPayouts

- **Signature**: `listPayouts(request: XPayouts.ListPayoutsRequest, options?: RequestOptions): ApiPromise<PayoutsResponse, XPayouts.ListPayoutsError>`
- **Wire**: `GET /payouts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayouts.ListPayoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayouts.ListPayoutsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountNumber` | `query` | `account_number` | `string` | yes | — |
| `contactId` | `query` | `contact_id` | `string` | no | — |
| `fundAccountId` | `query` | `fund_account_id` | `string` | no | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `25` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsResponse` | `payoutsResponseSchema` | `src/models/payouts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### rejectPayout

- **Signature**: `rejectPayout(request: XPayouts.RejectPayoutRequest, options?: RequestOptions): ApiPromise<Payout, XPayouts.RejectPayoutError>`
- **Wire**: `POST /payouts/{payout_id}/reject`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Payout`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayouts.RejectPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayouts.RejectPayoutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | `payout_id` | `string` | yes |
| `body` | `body` | — | `PayoutsRejectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsRejectRequest` | `payoutsRejectRequestSchema` | `src/models/payouts-reject-request.ts` |
| `Payout` | `payoutSchema` | `src/models/payout.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

