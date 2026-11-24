<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `src/resources/authentication.ts` · 1 operation · Request and error types: namespace `Authentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateAccessToken

- **Signature**: `generateAccessToken(request: Authentication.GenerateAccessTokenRequest, options?: RequestOptions): ApiPromise<TokenResponse, Authentication.GenerateAccessTokenError>`
- **Wire**: `POST /v2/oauth/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Authentication.GenerateAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authentication.GenerateAccessTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenRequest` | `tokenRequestSchema` | `src/models/token-request.ts` |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

