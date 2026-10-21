<!-- Generated file — do not edit; regenerated with the SDK. -->

# OpenIdConnect — operations

Accessor: `client.openIdConnect` · Source: `src/resources/open-id-connect.ts` · 1 operation · Request and error types: namespace `OpenIdConnect`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### oauthUserInfo

- **Signature**: `oauthUserInfo(options?: RequestOptions): ApiPromise<OAuthUserInfoResponse, OpenIdConnect.OauthUserInfoError>`
- **Wire**: `GET /oauth2/userinfo`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OAuthUserInfoResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OpenIdConnect.OauthUserInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthUserInfoResponse` | `oAuthUserInfoResponseSchema` | `src/models/oauth-user-info-response.ts` |

