<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tokens — operations

Accessor: `client.tokens` · Source: `src/resources/tokens.ts` · 1 operation · Request and error types: namespace `Tokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApplicationAccessToken

- **Signature**: `createApplicationAccessToken(request: Tokens.CreateApplicationAccessTokenRequest, options?: RequestOptions): ApiPromise<TokenResponse, Tokens.CreateApplicationAccessTokenError>`
- **Wire**: `POST /token`
- **Auth**: `clientCredentials`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `Tokens.CreateApplicationAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"token401Error1"` [401] `Token401Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tokens.CreateApplicationAccessTokenRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `grantType` | `form` | `grant_type` | `GrantType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `Token401Error1` | `token401Error1Schema` | `src/models/token401-error1.ts` |

