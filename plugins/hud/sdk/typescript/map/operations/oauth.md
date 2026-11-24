<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuth — operations

Accessor: `client.oAuth` · Source: `src/resources/oauth.ts` · 1 operation · Request and error types: namespace `OAuth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### joinOauthAppTeamV2OauthJoinPost

- **Signature**: `joinOauthAppTeamV2OauthJoinPost(options?: RequestOptions): ApiPromise<OAuthJoinResponse, OAuth.JoinOauthAppTeamV2OauthJoinPostError>`
- **Wire**: `POST /v2/oauth/join`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthJoinResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `OAuth.JoinOauthAppTeamV2OauthJoinPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthJoinResponse` | `oAuthJoinResponseSchema` | `src/models/oauth-join-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

