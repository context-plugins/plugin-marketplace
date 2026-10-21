<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuthConfiguration — operations

Accessor: `client.oAuthConfiguration` · Source: `src/resources/oauth-configuration.ts` · 8 operations · Request and error types: namespace `OAuthConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOAuthConfig

- **Signature**: `createOAuthConfig(request: OAuthConfiguration.CreateOAuthConfigRequestParams, options?: RequestOptions): ApiPromise<OauthResponse2, OAuthConfiguration.CreateOAuthConfigError>`
- **Wire**: `POST /oauth/{connectorType}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OauthResponse2`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.CreateOAuthConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.CreateOAuthConfigRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |
| `body` | `body` | `CreateOAuthConfigRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOAuthConfigRequest` | `createOAuthConfigRequestSchema` | `src/models/create-oauth-config-request.ts` |
| `OauthResponse2` | `oauthResponse2Schema` | `src/models/oauth-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteOAuthConfig

- **Signature**: `deleteOAuthConfig(request: OAuthConfiguration.DeleteOAuthConfigRequest, options?: RequestOptions): ApiPromise<OauthResponse5, OAuthConfiguration.DeleteOAuthConfigError>`
- **Wire**: `DELETE /oauth/{connectorType}/{configId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OauthResponse5`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.DeleteOAuthConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.DeleteOAuthConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |
| `configId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthResponse5` | `oauthResponse5Schema` | `src/models/oauth-response5.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getOAuthConfig

- **Signature**: `getOAuthConfig(request: OAuthConfiguration.GetOAuthConfigRequest, options?: RequestOptions): ApiPromise<OauthResponse3, OAuthConfiguration.GetOAuthConfigError>`
- **Wire**: `GET /oauth/{connectorType}/{configId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OauthResponse3`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.GetOAuthConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.GetOAuthConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |
| `configId` | `path` | `string` | yes |
| `reveal` | `query` | `Reveal` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reveal` | `revealSchema` | `src/models/reveal.ts` |
| `OauthResponse3` | `oauthResponse3Schema` | `src/models/oauth-response3.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getOAuthConnectorType

- **Signature**: `getOAuthConnectorType(request: OAuthConfiguration.GetOAuthConnectorTypeRequest, options?: RequestOptions): ApiPromise<OauthRegistryResponse1, OAuthConfiguration.GetOAuthConnectorTypeError>`
- **Wire**: `GET /oauth/registry/{connectorType}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OauthRegistryResponse1`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.GetOAuthConnectorTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.GetOAuthConnectorTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthRegistryResponse1` | `oauthRegistryResponse1Schema` | `src/models/oauth-registry-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getOAuthRegistry

- **Signature**: `getOAuthRegistry(request: OAuthConfiguration.GetOAuthRegistryRequest, options?: RequestOptions): ApiPromise<OauthRegistryResponse, OAuthConfiguration.GetOAuthRegistryError>`
- **Wire**: `GET /oauth/registry`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OauthRegistryResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.GetOAuthRegistryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.GetOAuthRegistryRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthRegistryResponse` | `oauthRegistryResponseSchema` | `src/models/oauth-registry-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listOAuthConfigs

- **Signature**: `listOAuthConfigs(request: OAuthConfiguration.ListOAuthConfigsRequest, options?: RequestOptions): ApiPromise<OauthResponse, OAuthConfiguration.ListOAuthConfigsError>`
- **Wire**: `GET /oauth`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OauthResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.ListOAuthConfigsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.ListOAuthConfigsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthResponse` | `oauthResponseSchema` | `src/models/oauth-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listOAuthConfigsByType

- **Signature**: `listOAuthConfigsByType(request: OAuthConfiguration.ListOAuthConfigsByTypeRequest, options?: RequestOptions): ApiPromise<OauthResponse1, OAuthConfiguration.ListOAuthConfigsByTypeError>`
- **Wire**: `GET /oauth/{connectorType}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OauthResponse1`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.ListOAuthConfigsByTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.ListOAuthConfigsByTypeRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes | — |
| `scope` | `query` | `ConnectorScope` | no | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |
| `reveal` | `query` | `Reveal` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorScope` | `connectorScopeSchema` | `src/models/connector-scope.ts` |
| `Reveal` | `revealSchema` | `src/models/reveal.ts` |
| `OauthResponse1` | `oauthResponse1Schema` | `src/models/oauth-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateOAuthConfig

- **Signature**: `updateOAuthConfig(request: OAuthConfiguration.UpdateOAuthConfigRequest, options?: RequestOptions): ApiPromise<OauthResponse2, OAuthConfiguration.UpdateOAuthConfigError>`
- **Wire**: `PUT /oauth/{connectorType}/{configId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OauthResponse2`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthConfiguration.UpdateOAuthConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthConfiguration.UpdateOAuthConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |
| `configId` | `path` | `string` | yes |
| `body` | `body` | `OauthRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthRequest2` | `oauthRequest2Schema` | `src/models/unions/oauth-request2.ts` |
| `OauthResponse2` | `oauthResponse2Schema` | `src/models/oauth-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

