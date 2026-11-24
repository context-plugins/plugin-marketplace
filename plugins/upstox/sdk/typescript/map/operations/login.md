<!-- Generated file — do not edit; regenerated with the SDK. -->

# Login — operations

Accessor: `client.login` · Source: `src/resources/login.ts` · 4 operations · Request and error types: namespace `Login`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authorize

- **Signature**: `authorize(request: Login.AuthorizeRequest, options?: RequestOptions): ApiPromise<undefined, Login.AuthorizeError>`
- **Wire**: `GET /v2/login/authorization/dialog`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Login.AuthorizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"error302"` [302] no body · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Login.AuthorizeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `query` | `client_id` | `string` | yes |
| `redirectUri` | `query` | `redirect_uri` | `string` | yes |
| `state` | `query` | — | `string` | no |
| `scope` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### initTokenRequestForIndieUser

- **Signature**: `initTokenRequestForIndieUser(request: Login.InitTokenRequestForIndieUserRequest, options?: RequestOptions): ApiPromise<TokenResponse, Login.InitTokenRequestForIndieUserError>`
- **Wire**: `POST /v3/login/auth/token/request/{client_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Login.InitTokenRequestForIndieUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Login.InitTokenRequestForIndieUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `path` | `client_id` | `string` | yes |
| `body` | `body` | — | `IndieUserTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndieUserTokenRequest` | `indieUserTokenRequestSchema` | `src/models/indie-user-token-request.ts` |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### logout

- **Signature**: `logout(options?: RequestOptions): ApiPromise<LogoutResponse, Login.LogoutError>`
- **Wire**: `DELETE /v2/logout`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LogoutResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Login.LogoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"oAuthClientException"` [401] `OAuthClientException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LogoutResponse` | `logoutResponseSchema` | `src/models/logout-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |
| `OAuthClientException` | `oAuthClientExceptionSchema` | `src/models/oauth-client-exception.ts` |

### token

- **Signature**: `token(request: Login.TokenRequestParams, options?: RequestOptions): ApiPromise<TokenResponse, Login.TokenError>`
- **Wire**: `POST /v2/login/authorization/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Login.TokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Login.TokenRequestParams` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `code` | `form` | — | `string` | yes |
| `clientId` | `form` | `client_id` | `string` | yes |
| `clientSecret` | `form` | `client_secret` | `string` | yes |
| `redirectUri` | `form` | `redirect_uri` | `string` | yes |
| `grantType` | `form` | `grant_type` | `string` | yes |
| `refreshExtendedToken` | `form` | `refresh_extended_token` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

