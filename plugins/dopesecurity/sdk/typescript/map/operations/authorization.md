<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `src/resources/authorization.ts` · 1 operation · Request and error types: namespace `Authorization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dope-security`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateAccessToken

- **Signature**: `generateAccessToken(request: Authorization.GenerateAccessTokenRequest, options?: RequestOptions): ApiPromise<PartnerOauthTokenResponse, Authorization.GenerateAccessTokenError>`
- **Wire**: `POST /partner/oauth/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerOauthTokenResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Authorization.GenerateAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthError"` [400] `OAuthError` · `"oAuthError2"` [401] `OAuthError` · `"oAuthError3"` [500] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.GenerateAccessTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerOauthTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerOauthTokenRequest` | `partnerOauthTokenRequestSchema` | `src/models/partner-oauth-token-request.ts` |
| `PartnerOauthTokenResponse` | `partnerOauthTokenResponseSchema` | `src/models/partner-oauth-token-response.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

