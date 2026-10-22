<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectorOAuth — operations

Accessor: `client.connectorOAuth` · Source: `src/resources/connector-oauth.ts` · 2 operations · Request and error types: namespace `ConnectorOAuth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOAuthAuthorizationUrl

- **Signature**: `getOAuthAuthorizationUrl(request: ConnectorOAuth.GetOAuthAuthorizationUrlRequest, options?: RequestOptions): ApiPromise<ConnectorsOauthAuthorizeResponse, ConnectorOAuth.GetOAuthAuthorizationUrlError>`
- **Wire**: `GET /connectors/{connectorId}/oauth/authorize`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsOauthAuthorizeResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorOAuth.GetOAuthAuthorizationUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorOAuth.GetOAuthAuthorizationUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsOauthAuthorizeResponse` | `connectorsOauthAuthorizeResponseSchema` | `src/models/connectors-oauth-authorize-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### handleOAuthCallback

- **Signature**: `handleOAuthCallback(request: ConnectorOAuth.HandleOAuthCallbackRequest, options?: RequestOptions): ApiPromise<ConnectorsOauthCallbackResponse, ConnectorOAuth.HandleOAuthCallbackError>`
- **Wire**: `GET /connectors/oauth/callback`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsOauthCallbackResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorOAuth.HandleOAuthCallbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorOAuth.HandleOAuthCallbackRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `string` | yes |
| `state` | `query` | `string` | yes |
| `error` | `query` | `string` | no |
| `baseUrl` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsOauthCallbackResponse` | `connectorsOauthCallbackResponseSchema` | `src/models/connectors-oauth-callback-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

