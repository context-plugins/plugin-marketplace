<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuthApps — operations

Accessor: `client.oAuthApps` · Source: `src/resources/oauth-apps.ts` · 11 operations · Request and error types: namespace `OAuthApps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateOAuthApp

- **Signature**: `activateOAuthApp(request: OAuthApps.ActivateOAuthAppRequest, options?: RequestOptions): ApiPromise<ActivateOAuthAppResponse, OAuthApps.ActivateOAuthAppError>`
- **Wire**: `POST /oauth-clients/{appId}/activate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ActivateOAuthAppResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.ActivateOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse4"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.ActivateOAuthAppRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivateOAuthAppResponse` | `activateOAuthAppResponseSchema` | `src/models/activate-oauth-app-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### createOAuthApp

- **Signature**: `createOAuthApp(request: OAuthApps.CreateOAuthAppRequestParams, options?: RequestOptions): ApiPromise<CreateOAuthAppResponse, OAuthApps.CreateOAuthAppError>`
- **Wire**: `POST /oauth-clients`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateOAuthAppResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.CreateOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.CreateOAuthAppRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateOAuthAppRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOAuthAppRequest` | `createOAuthAppRequestSchema` | `src/models/create-oauth-app-request.ts` |
| `CreateOAuthAppResponse` | `createOAuthAppResponseSchema` | `src/models/create-oauth-app-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### deleteOAuthApp

- **Signature**: `deleteOAuthApp(request: OAuthApps.DeleteOAuthAppRequest, options?: RequestOptions): ApiPromise<OauthClientsResponse, OAuthApps.DeleteOAuthAppError>`
- **Wire**: `DELETE /oauth-clients/{appId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OauthClientsResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.DeleteOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.DeleteOAuthAppRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthClientsResponse` | `oauthClientsResponseSchema` | `src/models/oauth-clients-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### getOAuthApp

- **Signature**: `getOAuthApp(request: OAuthApps.GetOAuthAppRequest, options?: RequestOptions): ApiPromise<OAuthAppResponse, OAuthApps.GetOAuthAppError>`
- **Wire**: `GET /oauth-clients/{appId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OAuthAppResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.GetOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.GetOAuthAppRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthAppResponse` | `oAuthAppResponseSchema` | `src/models/oauth-app-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### listOAuthAppTokens

- **Signature**: `listOAuthAppTokens(request: OAuthApps.ListOAuthAppTokensRequest, options?: RequestOptions): ApiPromise<OAuthAppTokensListResponse, OAuthApps.ListOAuthAppTokensError>`
- **Wire**: `GET /oauth-clients/{appId}/tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OAuthAppTokensListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.ListOAuthAppTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.ListOAuthAppTokensRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthAppTokensListResponse` | `oAuthAppTokensListResponseSchema` | `src/models/oauth-app-tokens-list-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### listOAuthApps

- **Signature**: `listOAuthApps(request: OAuthApps.ListOAuthAppsRequest, options?: RequestOptions): ApiPromise<OAuthAppListResponse, OAuthApps.ListOAuthAppsError>`
- **Wire**: `GET /oauth-clients`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OAuthAppListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.ListOAuthAppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.ListOAuthAppsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `status` | `query` | `Status9` | no | — |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status9` | `status9Schema` | `src/models/status9.ts` |
| `OAuthAppListResponse` | `oAuthAppListResponseSchema` | `src/models/oauth-app-list-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### listOAuthScopes

- **Signature**: `listOAuthScopes(options?: RequestOptions): ApiPromise<OAuthScopesGroupedResponse, OAuthApps.ListOAuthScopesError>`
- **Wire**: `GET /oauth-clients/scopes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OAuthScopesGroupedResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.ListOAuthScopesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthScopesGroupedResponse` | `oAuthScopesGroupedResponseSchema` | `src/models/oauth-scopes-grouped-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### regenerateOAuthAppSecret

- **Signature**: `regenerateOAuthAppSecret(request: OAuthApps.RegenerateOAuthAppSecretRequest, options?: RequestOptions): ApiPromise<RegenerateOAuthAppSecretResponse, OAuthApps.RegenerateOAuthAppSecretError>`
- **Wire**: `POST /oauth-clients/{appId}/regenerate-secret`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RegenerateOAuthAppSecretResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.RegenerateOAuthAppSecretError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.RegenerateOAuthAppSecretRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegenerateOAuthAppSecretResponse` | `regenerateOAuthAppSecretResponseSchema` | `src/models/regenerate-oauth-app-secret-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### revokeAllOAuthAppTokens

- **Signature**: `revokeAllOAuthAppTokens(request: OAuthApps.RevokeAllOAuthAppTokensRequest, options?: RequestOptions): ApiPromise<OauthClientsRevokeAllTokensResponse, OAuthApps.RevokeAllOAuthAppTokensError>`
- **Wire**: `POST /oauth-clients/{appId}/revoke-all-tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OauthClientsRevokeAllTokensResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.RevokeAllOAuthAppTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.RevokeAllOAuthAppTokensRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthClientsRevokeAllTokensResponse` | `oauthClientsRevokeAllTokensResponseSchema` | `src/models/oauth-clients-revoke-all-tokens-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### suspendOAuthApp

- **Signature**: `suspendOAuthApp(request: OAuthApps.SuspendOAuthAppRequest, options?: RequestOptions): ApiPromise<SuspendOAuthAppResponse, OAuthApps.SuspendOAuthAppError>`
- **Wire**: `POST /oauth-clients/{appId}/suspend`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuspendOAuthAppResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.SuspendOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse4"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.SuspendOAuthAppRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuspendOAuthAppResponse` | `suspendOAuthAppResponseSchema` | `src/models/suspend-oauth-app-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### updateOAuthApp

- **Signature**: `updateOAuthApp(request: OAuthApps.UpdateOAuthAppRequestParams, options?: RequestOptions): ApiPromise<UpdateOAuthAppResponse, OAuthApps.UpdateOAuthAppError>`
- **Wire**: `PUT /oauth-clients/{appId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateOAuthAppResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OAuthApps.UpdateOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse4"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuthApps.UpdateOAuthAppRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `string` | yes |
| `body` | `body` | `UpdateOAuthAppRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateOAuthAppRequest` | `updateOAuthAppRequestSchema` | `src/models/update-oauth-app-request.ts` |
| `UpdateOAuthAppResponse` | `updateOAuthAppResponseSchema` | `src/models/update-oauth-app-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

