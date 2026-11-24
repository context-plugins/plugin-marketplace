<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.integrations` · Source: `browser_use/apis/integrations.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.integrations.authorize_integration_integrations_provider_authorize_post

- **Route**: `POST /integrations/{provider}/authorize`
- **Auth**: `api_key_header`
- **Signature**: `def authorize_integration_integrations_provider_authorize_post(provider: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `provider`
- **Params**: `provider` — path
- **Returns (parsed)**: `AuthorizeResponse`
- **Returns (raw)**: `ApiResult[AuthorizeResponse, AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody]`
- **Error**: `AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthorizeResponse` | `browser_use/models/authorize_response.py` |
| `AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody` | `browser_use/errors/authorize_integration_integrations_provider_authorize_post_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.integrations.disconnect_integration_integrations_provider_delete

- **Route**: `DELETE /integrations/{provider}`
- **Auth**: `api_key_header`
- **Signature**: `def disconnect_integration_integrations_provider_delete(provider: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `provider`
- **Params**: `provider` — path
- **Returns (parsed)**: `DisconnectResponse`
- **Returns (raw)**: `ApiResult[DisconnectResponse, DisconnectIntegrationIntegrationsProviderDeleteErrorBody]`
- **Error**: `DisconnectIntegrationIntegrationsProviderDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisconnectResponse` | `browser_use/models/disconnect_response.py` |
| `DisconnectIntegrationIntegrationsProviderDeleteErrorBody` | `browser_use/errors/disconnect_integration_integrations_provider_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.integrations.get_connection_status_integrations_provider_status_get

- **Route**: `GET /integrations/{provider}/status`
- **Auth**: `api_key_header`
- **Signature**: `def get_connection_status_integrations_provider_status_get(provider: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `provider`
- **Params**: `provider` — path
- **Returns (parsed)**: `ConnectionStatusResponse`
- **Returns (raw)**: `ApiResult[ConnectionStatusResponse, GetConnectionStatusIntegrationsProviderStatusGetErrorBody]`
- **Error**: `GetConnectionStatusIntegrationsProviderStatusGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionStatusResponse` | `browser_use/models/connection_status_response.py` |
| `GetConnectionStatusIntegrationsProviderStatusGetErrorBody` | `browser_use/errors/get_connection_status_integrations_provider_status_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.integrations.list_categories_integrations_categories_get

- **Route**: `GET /integrations/categories`
- **Auth**: `api_key_header`
- **Signature**: `def list_categories_integrations_categories_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `IntegrationCategoryResponse`
- **Returns (raw)**: `ApiResult[IntegrationCategoryResponse, ListCategoriesIntegrationsCategoriesGetErrorBody]`
- **Error**: `ListCategoriesIntegrationsCategoriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IntegrationCategoryResponse` | `browser_use/models/integration_category_response.py` |
| `ListCategoriesIntegrationsCategoriesGetErrorBody` | `browser_use/errors/list_categories_integrations_categories_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.integrations.list_integrations_integrations_get

- **Route**: `GET /integrations`
- **Auth**: `api_key_header`
- **Signature**: `def list_integrations_integrations_get(*, limit: int | None = None, offset: int | None = 0, search: str | None = None, popular_only: bool | None = False, connected_only: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `search` — query · `popular_only` — query · `connected_only` — query
- **Returns (parsed)**: `IntegrationListResponse`
- **Returns (raw)**: `ApiResult[IntegrationListResponse, ListIntegrationsIntegrationsGetErrorBody]`
- **Error**: `ListIntegrationsIntegrationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IntegrationListResponse` | `browser_use/models/integration_list_response.py` |
| `ListIntegrationsIntegrationsGetErrorBody` | `browser_use/errors/list_integrations_integrations_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

