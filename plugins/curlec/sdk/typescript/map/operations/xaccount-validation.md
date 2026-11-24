<!-- Generated file — do not edit; regenerated with the SDK. -->

# XAccountValidation — operations

Accessor: `client.xAccountValidation` · Source: `src/resources/xaccount-validation.ts` · 3 operations · Request and error types: namespace `XAccountValidation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchFundAccountValidation

- **Signature**: `fetchFundAccountValidation(request: XAccountValidation.FetchFundAccountValidationRequest, options?: RequestOptions): ApiPromise<FundAccountValidation, XAccountValidation.FetchFundAccountValidationError>`
- **Wire**: `GET /fund_accounts/validations/{validation_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundAccountValidation`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XAccountValidation.FetchFundAccountValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XAccountValidation.FetchFundAccountValidationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `validationId` | `path` | `validation_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountValidation` | `fundAccountValidationSchema` | `src/models/fund-account-validation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFundAccountValidations

- **Signature**: `listFundAccountValidations(request?: XAccountValidation.ListFundAccountValidationsRequest, options?: RequestOptions): ApiPromise<FundAccountsValidationsResponse, XAccountValidation.ListFundAccountValidationsError>`
- **Wire**: `GET /fund_accounts/validations`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundAccountsValidationsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XAccountValidation.ListFundAccountValidationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XAccountValidation.ListFundAccountValidationsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `from` | `query` | `number` | no | — |
| `to` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountsValidationsResponse` | `fundAccountsValidationsResponseSchema` | `src/models/fund-accounts-validations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### validateFundAccount

- **Signature**: `validateFundAccount(request: XAccountValidation.ValidateFundAccountRequest, options?: RequestOptions): ApiPromise<FundAccountValidation, XAccountValidation.ValidateFundAccountError>`
- **Wire**: `POST /fund_accounts/validations`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FundAccountValidation`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XAccountValidation.ValidateFundAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XAccountValidation.ValidateFundAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FundAccountsValidationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundAccountsValidationsRequest` | `fundAccountsValidationsRequestSchema` | `src/models/fund-accounts-validations-request.ts` |
| `FundAccountValidation` | `fundAccountValidationSchema` | `src/models/fund-account-validation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

