<!-- Generated file — do not edit; regenerated with the SDK. -->

# PersonalAccessTokens — operations

Accessor: `client.personalAccessTokens` · Source: `src/resources/personal-access-tokens.ts` · 6 operations · Request and error types: namespace `PersonalAccessTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminListPersonalAccessTokens

- **Signature**: `adminListPersonalAccessTokens(request: PersonalAccessTokens.AdminListPersonalAccessTokensRequest, options?: RequestOptions): ApiPromise<AdminPatListResponse, PersonalAccessTokens.AdminListPersonalAccessTokensError>`
- **Wire**: `GET /personal-access-tokens/admin`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminPatListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `PersonalAccessTokens.AdminListPersonalAccessTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersonalAccessTokens.AdminListPersonalAccessTokensRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminPatListResponse` | `adminPatListResponseSchema` | `src/models/admin-pat-list-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### adminRevokePersonalAccessToken

- **Signature**: `adminRevokePersonalAccessToken(request: PersonalAccessTokens.AdminRevokePersonalAccessTokenRequest, options?: RequestOptions): ApiPromise<RevokePatResponse, PersonalAccessTokens.AdminRevokePersonalAccessTokenError>`
- **Wire**: `DELETE /personal-access-tokens/admin/{tokenId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevokePatResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `PersonalAccessTokens.AdminRevokePersonalAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse4"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersonalAccessTokens.AdminRevokePersonalAccessTokenRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tokenId` | `path` | `string` | yes |
| `body` | `body` | `RevokePatRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevokePatRequest` | `revokePatRequestSchema` | `src/models/revoke-pat-request.ts` |
| `RevokePatResponse` | `revokePatResponseSchema` | `src/models/revoke-pat-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### createPersonalAccessToken

- **Signature**: `createPersonalAccessToken(request: PersonalAccessTokens.CreatePersonalAccessTokenRequest, options?: RequestOptions): ApiPromise<CreatePatResponse, PersonalAccessTokens.CreatePersonalAccessTokenError>`
- **Wire**: `POST /personal-access-tokens`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreatePatResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `PersonalAccessTokens.CreatePersonalAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [400] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse3"` [403] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersonalAccessTokens.CreatePersonalAccessTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreatePatRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePatRequest` | `createPatRequestSchema` | `src/models/create-pat-request.ts` |
| `CreatePatResponse` | `createPatResponseSchema` | `src/models/create-pat-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### listPersonalAccessTokenScopes

- **Signature**: `listPersonalAccessTokenScopes(options?: RequestOptions): ApiPromise<PatScopesListResponse, PersonalAccessTokens.ListPersonalAccessTokenScopesError>`
- **Wire**: `GET /personal-access-tokens/scopes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PatScopesListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `PersonalAccessTokens.ListPersonalAccessTokenScopesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PatScopesListResponse` | `patScopesListResponseSchema` | `src/models/pat-scopes-list-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### listPersonalAccessTokens

- **Signature**: `listPersonalAccessTokens(options?: RequestOptions): ApiPromise<ListPatResponse, PersonalAccessTokens.ListPersonalAccessTokensError>`
- **Wire**: `GET /personal-access-tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPatResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `PersonalAccessTokens.ListPersonalAccessTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPatResponse` | `listPatResponseSchema` | `src/models/list-pat-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

### revokePersonalAccessToken

- **Signature**: `revokePersonalAccessToken(request: PersonalAccessTokens.RevokePersonalAccessTokenRequest, options?: RequestOptions): ApiPromise<RevokePatResponse, PersonalAccessTokens.RevokePersonalAccessTokenError>`
- **Wire**: `DELETE /personal-access-tokens/{tokenId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevokePatResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `PersonalAccessTokens.RevokePersonalAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"applicationJsonErrorResponse"` [401] `ApplicationJsonErrorResponse` · `"applicationJsonErrorResponse2"` [404] `ApplicationJsonErrorResponse` · `"oAuthClientManagementRateLimitError"` [429] `OAuthClientManagementRateLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersonalAccessTokens.RevokePersonalAccessTokenRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tokenId` | `path` | `string` | yes |
| `body` | `body` | `RevokePatRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevokePatRequest` | `revokePatRequestSchema` | `src/models/revoke-pat-request.ts` |
| `RevokePatResponse` | `revokePatResponseSchema` | `src/models/revoke-pat-response.ts` |
| `ApplicationJsonErrorResponse` | `applicationJsonErrorResponseSchema` | `src/models/application-json-error-response.ts` |
| `OAuthClientManagementRateLimitError` | `oAuthClientManagementRateLimitErrorSchema` | `src/models/oauth-client-management-rate-limit-error.ts` |

