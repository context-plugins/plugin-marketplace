<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.Integrations` · Source: `src/BrowserUse/Api/Integrations.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AuthorizeIntegrationIntegrationsProviderAuthorizePost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `AuthorizeIntegrationIntegrationsProviderAuthorizePost(AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Provider`
- **Returns**: `AuthorizeResponse`
- **Error**: `ApiException<AuthorizeIntegrationIntegrationsProviderAuthorizePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest` | `src/BrowserUse/Requests/Integrations/AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest.cs` |
| `AuthorizeResponse` | `src/BrowserUse/Models/AuthorizeResponse.cs` |
| `AuthorizeIntegrationIntegrationsProviderAuthorizePostError` | `src/BrowserUse/Errors/AuthorizeIntegrationIntegrationsProviderAuthorizePostError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### DisconnectIntegrationIntegrationsProviderDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DisconnectIntegrationIntegrationsProviderDelete(DisconnectIntegrationIntegrationsProviderDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Provider`
- **Returns**: `DisconnectResponse`
- **Error**: `ApiException<DisconnectIntegrationIntegrationsProviderDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisconnectIntegrationIntegrationsProviderDeleteRequest` | `src/BrowserUse/Requests/Integrations/DisconnectIntegrationIntegrationsProviderDeleteRequest.cs` |
| `DisconnectResponse` | `src/BrowserUse/Models/DisconnectResponse.cs` |
| `DisconnectIntegrationIntegrationsProviderDeleteError` | `src/BrowserUse/Errors/DisconnectIntegrationIntegrationsProviderDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetConnectionStatusIntegrationsProviderStatusGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetConnectionStatusIntegrationsProviderStatusGet(GetConnectionStatusIntegrationsProviderStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Provider`
- **Returns**: `ConnectionStatusResponse`
- **Error**: `ApiException<GetConnectionStatusIntegrationsProviderStatusGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConnectionStatusIntegrationsProviderStatusGetRequest` | `src/BrowserUse/Requests/Integrations/GetConnectionStatusIntegrationsProviderStatusGetRequest.cs` |
| `ConnectionStatusResponse` | `src/BrowserUse/Models/ConnectionStatusResponse.cs` |
| `GetConnectionStatusIntegrationsProviderStatusGetError` | `src/BrowserUse/Errors/GetConnectionStatusIntegrationsProviderStatusGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListCategoriesIntegrationsCategoriesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListCategoriesIntegrationsCategoriesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IntegrationCategoryResponse`
- **Error**: `ApiException<ListCategoriesIntegrationsCategoriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IntegrationCategoryResponse` | `src/BrowserUse/Models/IntegrationCategoryResponse.cs` |
| `ListCategoriesIntegrationsCategoriesGetError` | `src/BrowserUse/Errors/ListCategoriesIntegrationsCategoriesGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListIntegrationsIntegrationsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListIntegrationsIntegrationsGet(ListIntegrationsIntegrationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `search` ← `Search`, `popular_only` ← `PopularOnly`, `connected_only` ← `ConnectedOnly`
- **Returns**: `IntegrationListResponse`
- **Error**: `ApiException<ListIntegrationsIntegrationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIntegrationsIntegrationsGetRequest` | `src/BrowserUse/Requests/Integrations/ListIntegrationsIntegrationsGetRequest.cs` |
| `Limit` | `src/BrowserUse/Models/AnyOf/Limit.cs` |
| `Search` | `src/BrowserUse/Models/AnyOf/Search.cs` |
| `IntegrationListResponse` | `src/BrowserUse/Models/IntegrationListResponse.cs` |
| `ListIntegrationsIntegrationsGetError` | `src/BrowserUse/Errors/ListIntegrationsIntegrationsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

