<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tokens — operations

Accessor: `client.tokens` · Source: `src/resources/tokens.ts` · 4 operations · Request and error types: namespace `Tokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### introspect

- **Server**: `defaultOAuth2AuthorizationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `introspect(request?: Tokens.IntrospectRequest, options?: RequestOptions): ApiPromise<IntrospectionResponse, Tokens.IntrospectError>`
- **Wire**: `POST /oauth/introspect`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntrospectionResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tokens.IntrospectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthError"` [400] `OAuthError` · `"oAuthError2"` [401] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.IntrospectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthIntrospectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthIntrospectRequest` | `oauthIntrospectRequestSchema` | `src/models/oauth-introspect-request.ts` |
| `IntrospectionResponse` | `introspectionResponseSchema` | `src/models/introspection-response.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

### revoke

- **Server**: `defaultOAuth2AuthorizationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `revoke(request?: Tokens.RevokeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tokens.RevokeError>`
- **Wire**: `POST /oauth/revoke`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tokens.RevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthError"` [401] `OAuthError` · `"oAuthError2"` [403] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.RevokeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthRevokeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthRevokeRequest` | `oauthRevokeRequestSchema` | `src/models/oauth-revoke-request.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

### token

- **Server**: `defaultOAuth2AuthorizationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `token(request?: Tokens.TokenRequest, options?: RequestOptions): ApiPromise<TokenResponse, Tokens.TokenError>`
- **Wire**: `POST /oauth/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tokens.TokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthError"` [400] `OAuthError` · `"oAuthError2"` [401] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.TokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthTokenRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthTokenRequest` | `oauthTokenRequestSchema` | `src/models/oauth-token-request.ts` |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

### tokenInfo

- **Server**: `defaultOAuth2AuthorizationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `tokenInfo(request: Tokens.TokenInfoRequest, options?: RequestOptions): ApiPromise<TokenInfoResponse, Tokens.TokenInfoError>`
- **Wire**: `GET /oauth/token/info`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenInfoResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tokens.TokenInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthError"` [401] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.TokenInfoRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenInfoResponse` | `tokenInfoResponseSchema` | `src/models/token-info-response.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

