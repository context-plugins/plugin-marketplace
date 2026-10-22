<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserAccount — operations

Accessor: `client.userAccount` · Source: `src/resources/user-account.ts` · 4 operations · Request and error types: namespace `UserAccount`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authenticate

- **Signature**: `authenticate(request: UserAccount.AuthenticateRequestParams, options?: RequestOptions): ApiPromise<AuthenticateResponse, UserAccount.AuthenticateError>`
- **Wire**: `POST /userAccount/authenticate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthenticateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `UserAccount.AuthenticateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"rateLimitErrorResponse"` [429] `RateLimitErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserAccount.AuthenticateRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xSessionToken` | `header` | `x-session-token` | `string` | yes |
| `body` | `body` | — | `AuthenticateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthenticateRequest` | `authenticateRequestSchema` | `src/models/authenticate-request.ts` |
| `AuthenticateResponse` | `authenticateResponseSchema` | `src/models/unions/authenticate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitErrorResponse` | `rateLimitErrorResponseSchema` | `src/models/rate-limit-error-response.ts` |

### initAuth

- **Signature**: `initAuth(request: UserAccount.InitAuthRequestParams, options?: RequestOptions): ApiPromise<InitAuthResponse, UserAccount.InitAuthError>`
- **Wire**: `POST /userAccount/initAuth`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InitAuthResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `UserAccount.InitAuthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"rateLimitErrorResponse"` [429] `RateLimitErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserAccount.InitAuthRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InitAuthRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitAuthRequest` | `initAuthRequestSchema` | `src/models/init-auth-request.ts` |
| `InitAuthResponse` | `initAuthResponseSchema` | `src/models/init-auth-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitErrorResponse` | `rateLimitErrorResponseSchema` | `src/models/rate-limit-error-response.ts` |

### refreshToken

- **Signature**: `refreshToken(options?: RequestOptions): ApiPromise<RefreshTokenResponse, UserAccount.RefreshTokenError>`
- **Wire**: `POST /userAccount/refresh/token`
- **Auth**: `scopedToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RefreshTokenResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `UserAccount.RefreshTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RefreshTokenResponse` | `refreshTokenResponseSchema` | `src/models/refresh-token-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resetPassword

- **Signature**: `resetPassword(request: UserAccount.ResetPasswordRequest, options?: RequestOptions): ApiPromise<AuthenticatedPasswordResetResponse, UserAccount.ResetPasswordError>`
- **Wire**: `POST /userAccount/password/reset`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthenticatedPasswordResetResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `UserAccount.ResetPasswordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"rateLimitErrorResponse"` [429] `RateLimitErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserAccount.ResetPasswordRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserAccountPasswordResetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserAccountPasswordResetRequest` | `userAccountPasswordResetRequestSchema` | `src/models/user-account-password-reset-request.ts` |
| `AuthenticatedPasswordResetResponse` | `authenticatedPasswordResetResponseSchema` | `src/models/authenticated-password-reset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitErrorResponse` | `rateLimitErrorResponseSchema` | `src/models/rate-limit-error-response.ts` |

