<!-- Generated file — do not edit; regenerated with the SDK. -->

# XFundAccounts — operations

Accessor: `client.xFundAccounts` · Source: `src/resources/xfund-accounts.ts` · 4 operations · Request and error types: namespace `XFundAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateDeactivateFundAccount

- **Signature**: `activateDeactivateFundAccount(request: XFundAccounts.ActivateDeactivateFundAccountRequest, options?: RequestOptions): ApiPromise<FundAccountRazorpayXFundAccountsApi, XFundAccounts.ActivateDeactivateFundAccountError>`
- **Wire**: `PATCH /fund_accounts/{fund_account_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FundAccountRazorpayXFundAccountsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XFundAccounts.ActivateDeactivateFundAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XFundAccounts.ActivateDeactivateFundAccountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fundAccountId` | `path` | `fund_account_id` | `string` | yes |
| `body` | `body` | — | `FundAccountsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountsRequest1` | `fundAccountsRequest1Schema` | `src/models/fund-accounts-request1.ts` |
| `FundAccountRazorpayXFundAccountsApi` | `fundAccountRazorpayXFundAccountsApiSchema` | `src/models/fund-account-razorpay-xfund-accounts-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createFundAccount

- **Signature**: `createFundAccount(request: XFundAccounts.CreateFundAccountRequest, options?: RequestOptions): ApiPromise<FundAccountRazorpayXFundAccountsApi, XFundAccounts.CreateFundAccountError>`
- **Wire**: `POST /fund_accounts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FundAccountRazorpayXFundAccountsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XFundAccounts.CreateFundAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XFundAccounts.CreateFundAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FundAccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountsRequest` | `fundAccountsRequestSchema` | `src/models/fund-accounts-request.ts` |
| `FundAccountRazorpayXFundAccountsApi` | `fundAccountRazorpayXFundAccountsApiSchema` | `src/models/fund-account-razorpay-xfund-accounts-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchFundAccount

- **Signature**: `fetchFundAccount(request: XFundAccounts.FetchFundAccountRequest, options?: RequestOptions): ApiPromise<FundAccountRazorpayXFundAccountsApi, XFundAccounts.FetchFundAccountError>`
- **Wire**: `GET /fund_accounts/{fund_account_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundAccountRazorpayXFundAccountsApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XFundAccounts.FetchFundAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XFundAccounts.FetchFundAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fundAccountId` | `path` | `fund_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountRazorpayXFundAccountsApi` | `fundAccountRazorpayXFundAccountsApiSchema` | `src/models/fund-account-razorpay-xfund-accounts-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFundAccounts

- **Signature**: `listFundAccounts(request?: XFundAccounts.ListFundAccountsRequest, options?: RequestOptions): ApiPromise<FundAccountsResponse, XFundAccounts.ListFundAccountsError>`
- **Wire**: `GET /fund_accounts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundAccountsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XFundAccounts.ListFundAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XFundAccounts.ListFundAccountsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `contactId` | `query` | `contact_id` | `string` | no | — |
| `accountType` | `query` | `account_type` | `string` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountsResponse` | `fundAccountsResponseSchema` | `src/models/fund-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

