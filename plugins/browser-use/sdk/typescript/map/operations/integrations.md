<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.integrations` · Source: `src/resources/integrations.ts` · 5 operations · Request and error types: namespace `Integrations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authorizeIntegrationIntegrationsProviderAuthorizePost

- **Signature**: `authorizeIntegrationIntegrationsProviderAuthorizePost(request: Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest, options?: RequestOptions): ApiPromise<AuthorizeResponse, Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError>`
- **Wire**: `POST /integrations/{provider}/authorize`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizeResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `provider` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizeResponse` | `authorizeResponseSchema` | `src/models/authorize-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### disconnectIntegrationIntegrationsProviderDelete

- **Signature**: `disconnectIntegrationIntegrationsProviderDelete(request: Integrations.DisconnectIntegrationIntegrationsProviderDeleteRequest, options?: RequestOptions): ApiPromise<DisconnectResponse, Integrations.DisconnectIntegrationIntegrationsProviderDeleteError>`
- **Wire**: `DELETE /integrations/{provider}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisconnectResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Integrations.DisconnectIntegrationIntegrationsProviderDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.DisconnectIntegrationIntegrationsProviderDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `provider` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisconnectResponse` | `disconnectResponseSchema` | `src/models/disconnect-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getConnectionStatusIntegrationsProviderStatusGet

- **Signature**: `getConnectionStatusIntegrationsProviderStatusGet(request: Integrations.GetConnectionStatusIntegrationsProviderStatusGetRequest, options?: RequestOptions): ApiPromise<ConnectionStatusResponse, Integrations.GetConnectionStatusIntegrationsProviderStatusGetError>`
- **Wire**: `GET /integrations/{provider}/status`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectionStatusResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Integrations.GetConnectionStatusIntegrationsProviderStatusGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.GetConnectionStatusIntegrationsProviderStatusGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `provider` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionStatusResponse` | `connectionStatusResponseSchema` | `src/models/connection-status-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listCategoriesIntegrationsCategoriesGet

- **Signature**: `listCategoriesIntegrationsCategoriesGet(options?: RequestOptions): ApiPromise<IntegrationCategoryResponse, Integrations.ListCategoriesIntegrationsCategoriesGetError>`
- **Wire**: `GET /integrations/categories`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationCategoryResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Integrations.ListCategoriesIntegrationsCategoriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationCategoryResponse` | `integrationCategoryResponseSchema` | `src/models/integration-category-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listIntegrationsIntegrationsGet

- **Signature**: `listIntegrationsIntegrationsGet(request?: Integrations.ListIntegrationsIntegrationsGetRequest, options?: RequestOptions): ApiPromise<IntegrationListResponse, Integrations.ListIntegrationsIntegrationsGetError>`
- **Wire**: `GET /integrations`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Integrations.ListIntegrationsIntegrationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.ListIntegrationsIntegrationsGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `Limit` | no | — |
| `offset` | `query` | — | `number` | no | `0` |
| `search` | `query` | — | `Search` | no | — |
| `popularOnly` | `query` | `popular_only` | `boolean` | no | `false` |
| `connectedOnly` | `query` | `connected_only` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `Search` | `searchSchema` | `src/models/unions/search.ts` |
| `IntegrationListResponse` | `integrationListResponseSchema` | `src/models/integration-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

