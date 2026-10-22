<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuthApi — operations

Accessor: `client.oAuthApi` · Source: `src/resources/oauth-api.ts` · 2 operations · Request and error types: namespace `OAuthApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### oauthGenerateTokens

- **Signature**: `oauthGenerateTokens(request: OAuthApi.OauthGenerateTokensRequest, options?: RequestOptions): ApiPromise<Oauth2TokensResponse, OAuthApi.OauthGenerateTokensError>`
- **Wire**: `POST /oauth2/tokens`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `Oauth2TokensResponse`
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OAuthApi.OauthGenerateTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApi.OauthGenerateTokensRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `Oauth2TokensRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Oauth2TokensRequest` | `oauth2TokensRequestSchema` | `src/models/oauth2-tokens-request.ts` |
| `Oauth2TokensResponse` | `oauth2TokensResponseSchema` | `src/models/oauth2-tokens-response.ts` |

### oauthRevokeTokens

- **Signature**: `oauthRevokeTokens(request: OAuthApi.OauthRevokeTokensRequest, options?: RequestOptions): ApiPromise<undefined, OAuthApi.OauthRevokeTokensError>`
- **Wire**: `DELETE /oauth2/tokens`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OAuthApi.OauthRevokeTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApi.OauthRevokeTokensRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `Oauth2TokensRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Oauth2TokensRequest1` | `oauth2TokensRequest1Schema` | `src/models/oauth2-tokens-request1.ts` |

