<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorizations — operations

Accessor: `client.authorizations` · Source: `src/resources/authorizations.ts` · 1 operation · Request and error types: namespace `Authorizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authorize

- **Server**: `defaultOAuth2AuthorizationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `authorize(request: Authorizations.AuthorizeRequest, options?: RequestOptions): ApiPromise<undefined, Authorizations.AuthorizeError>`
- **Wire**: `GET /oauth/authorize`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Authorizations.AuthorizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] `Record<string, unknown>` · `"oAuthError"` [400] `OAuthError` · `"oAuthError2"` [401] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorizations.AuthorizeRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `query` | `client_id` | `string` | yes |
| `redirectUri` | `query` | `redirect_uri` | `string` | yes |
| `responseType` | `query` | `response_type` | `string` | yes |
| `scope` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `codeChallenge` | `query` | `code_challenge` | `string` | no |
| `codeChallengeMethod` | `query` | `code_challenge_method` | `CodeChallengeMethod` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CodeChallengeMethod` | `codeChallengeMethodSchema` | `src/models/code-challenge-method.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

