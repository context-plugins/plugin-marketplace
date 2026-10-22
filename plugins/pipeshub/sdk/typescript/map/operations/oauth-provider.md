<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuthProvider — operations

Accessor: `client.oAuthProvider` · Source: `src/resources/oauth-provider.ts` · 3 operations · Request and error types: namespace `OAuthProvider`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### oauthIntrospect

- **Signature**: `oauthIntrospect(request: OAuthProvider.OauthIntrospectRequest, options?: RequestOptions): ApiPromise<OAuthIntrospectResponse, OAuthProvider.OauthIntrospectError>`
- **Wire**: `POST /oauth2/introspect`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthIntrospectResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthProvider.OauthIntrospectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthErrorResponse"` [401] `OAuthErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthProvider.OauthIntrospectRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `form` | — | `string` | yes |
| `clientId` | `form` | `client_id` | `string` | yes |
| `tokenTypeHint` | `form` | `token_type_hint` | `TokenTypeHint1` | no |
| `clientSecret` | `form` | `client_secret` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenTypeHint1` | `tokenTypeHint1Schema` | `src/models/token-type-hint1.ts` |
| `OAuthIntrospectResponse` | `oAuthIntrospectResponseSchema` | `src/models/oauth-introspect-response.ts` |
| `OAuthErrorResponse` | `oAuthErrorResponseSchema` | `src/models/oauth-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### oauthRevoke

- **Signature**: `oauthRevoke(request: OAuthProvider.OauthRevokeRequest, options?: RequestOptions): ApiPromise<undefined, OAuthProvider.OauthRevokeError>`
- **Wire**: `POST /oauth2/revoke`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthProvider.OauthRevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthErrorResponse"` [401] `OAuthErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthProvider.OauthRevokeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `form` | — | `string` | yes |
| `clientId` | `form` | `client_id` | `string` | yes |
| `tokenTypeHint` | `form` | `token_type_hint` | `TokenTypeHint` | no |
| `clientSecret` | `form` | `client_secret` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenTypeHint` | `tokenTypeHintSchema` | `src/models/token-type-hint.ts` |
| `OAuthErrorResponse` | `oAuthErrorResponseSchema` | `src/models/oauth-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### oauthToken

- **Signature**: `oauthToken(request: OAuthProvider.OauthTokenRequest, options?: RequestOptions): ApiPromise<OAuthTokenResponse, OAuthProvider.OauthTokenError>`
- **Wire**: `POST /oauth2/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthTokenResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthProvider.OauthTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthErrorResponse"` [400] `OAuthErrorResponse` · `"oAuthErrorResponse2"` [401] `OAuthErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthProvider.OauthTokenRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `grantType` | `form` | `grant_type` | `GrantType` | yes |
| `code` | `form` | — | `string` | no |
| `redirectUri` | `form` | `redirect_uri` | `string` | no |
| `clientId` | `form` | `client_id` | `string` | no |
| `clientSecret` | `form` | `client_secret` | `string` | no |
| `refreshToken` | `form` | `refresh_token` | `string` | no |
| `scope` | `form` | — | `string` | no |
| `codeVerifier` | `form` | `code_verifier` | `string` | no |
| `subjectToken` | `form` | `subject_token` | `string` | no |
| `subjectTokenType` | `form` | `subject_token_type` | `string` | no |
| `requestedSubject` | `form` | `requested_subject` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `OAuthTokenResponse` | `oAuthTokenResponseSchema` | `src/models/oauth-token-response.ts` |
| `OAuthErrorResponse` | `oAuthErrorResponseSchema` | `src/models/oauth-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

