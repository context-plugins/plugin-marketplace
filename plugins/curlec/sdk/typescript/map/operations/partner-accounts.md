<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerAccounts — operations

Accessor: `client.partnerAccounts` · Source: `src/resources/partner-accounts.ts` · 3 operations · Request and error types: namespace `PartnerAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePartnerAccount

- **Signature**: `deletePartnerAccount(request: PartnerAccounts.DeletePartnerAccountRequest, options?: RequestOptions): ApiPromise<V2AccountsResponse, PartnerAccounts.DeletePartnerAccountError>`
- **Wire**: `DELETE /v2/accounts/{account_id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V2AccountsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerAccounts.DeletePartnerAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerAccounts.DeletePartnerAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsResponse` | `v2AccountsResponseSchema` | `src/models/v2-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchLinkedAccount2

- **Signature**: `fetchLinkedAccount2(request: PartnerAccounts.FetchLinkedAccount2Request, options?: RequestOptions): ApiPromise<LinkedAccount, PartnerAccounts.FetchLinkedAccount2Error>`
- **Wire**: `GET /v2/accounts/{account_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LinkedAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerAccounts.FetchLinkedAccount2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerAccounts.FetchLinkedAccount2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkedAccount` | `linkedAccountSchema` | `src/models/linked-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateLinkedAccount2

- **Signature**: `updateLinkedAccount2(request: PartnerAccounts.UpdateLinkedAccount2Request, options?: RequestOptions): ApiPromise<LinkedAccount, PartnerAccounts.UpdateLinkedAccount2Error>`
- **Wire**: `PATCH /v2/accounts/{account_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkedAccount`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerAccounts.UpdateLinkedAccount2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerAccounts.UpdateLinkedAccount2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsRequestRazorpayPartnerAccountsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsRequestRazorpayPartnerAccountsApi` | `v2AccountsRequestRazorpayPartnerAccountsApiSchema` | `src/models/v2-accounts-request-razorpay-partner-accounts-api.ts` |
| `LinkedAccount` | `linkedAccountSchema` | `src/models/linked-account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

