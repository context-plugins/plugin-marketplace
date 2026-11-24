<!-- Generated file — do not edit; regenerated with the SDK. -->

# XPayoutLinks — operations

Accessor: `client.xPayoutLinks` · Source: `src/resources/xpayout-links.ts` · 4 operations · Request and error types: namespace `XPayoutLinks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPayoutLink

- **Signature**: `cancelPayoutLink(request: XPayoutLinks.CancelPayoutLinkRequest, options?: RequestOptions): ApiPromise<PayoutLink, XPayoutLinks.CancelPayoutLinkError>`
- **Wire**: `POST /payout-links/{payout_link_id}/cancel`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayoutLinks.CancelPayoutLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayoutLinks.CancelPayoutLinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutLinkId` | `path` | `payout_link_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutLink` | `payoutLinkSchema` | `src/models/payout-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createPayoutLink

- **Signature**: `createPayoutLink(request: XPayoutLinks.CreatePayoutLinkRequest, options?: RequestOptions): ApiPromise<PayoutLink, XPayoutLinks.CreatePayoutLinkError>`
- **Wire**: `POST /payout-links`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayoutLinks.CreatePayoutLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayoutLinks.CreatePayoutLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PayoutLinksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutLinksRequest` | `payoutLinksRequestSchema` | `src/models/payout-links-request.ts` |
| `PayoutLink` | `payoutLinkSchema` | `src/models/payout-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPayoutLink

- **Signature**: `fetchPayoutLink(request: XPayoutLinks.FetchPayoutLinkRequest, options?: RequestOptions): ApiPromise<PayoutLink, XPayoutLinks.FetchPayoutLinkError>`
- **Wire**: `GET /payout-links/{payout_link_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutLink`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayoutLinks.FetchPayoutLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayoutLinks.FetchPayoutLinkRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutLinkId` | `path` | `payout_link_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutLink` | `payoutLinkSchema` | `src/models/payout-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPayoutLinks

- **Signature**: `listPayoutLinks(request?: XPayoutLinks.ListPayoutLinksRequest, options?: RequestOptions): ApiPromise<PayoutLinksResponse, XPayoutLinks.ListPayoutLinksError>`
- **Wire**: `GET /payout-links`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutLinksResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XPayoutLinks.ListPayoutLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XPayoutLinks.ListPayoutLinksRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `contactId` | `query` | `contact_id` | `string` | no | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutLinksResponse` | `payoutLinksResponseSchema` | `src/models/payout-links-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

