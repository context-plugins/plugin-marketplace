<!-- Generated file — do not edit; regenerated with the SDK. -->

# GatewayIntegrations — operations

Accessor: `client.GatewayIntegrations` · Source: `src/FinixApiReference/Api/GatewayIntegrations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGatewayIntegration

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateGatewayIntegration(CreateGatewayIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GatewayIntegrationObject`
- **Error**: `ApiException<CreateGatewayIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGatewayIntegrationRequest` | `src/FinixApiReference/Requests/GatewayIntegrations/CreateGatewayIntegrationRequest.cs` |
| `GatewayIntegration` | `src/FinixApiReference/Models/GatewayIntegration.cs` |
| `GatewayIntegrationObject` | `src/FinixApiReference/Models/GatewayIntegrationObject.cs` |
| `CreateGatewayIntegrationError` | `src/FinixApiReference/Errors/CreateGatewayIntegrationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetGatewayIntegration

- **Auth**: `options.BasicAuth`
- **Signature**: `GetGatewayIntegration(GetGatewayIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GatewayIntegrationId`
- **Returns**: `GatewayIntegrationObject`
- **Error**: `ApiException<GetGatewayIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGatewayIntegrationRequest` | `src/FinixApiReference/Requests/GatewayIntegrations/GetGatewayIntegrationRequest.cs` |
| `GatewayIntegrationObject` | `src/FinixApiReference/Models/GatewayIntegrationObject.cs` |
| `GetGatewayIntegrationError` | `src/FinixApiReference/Errors/GetGatewayIntegrationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListGatewayIntegrations

- **Auth**: `options.BasicAuth`
- **Signature**: `ListGatewayIntegrations(ListGatewayIntegrationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkedTo`
- **Query params (wire ← C#)**: `linked_to` ← `LinkedTo`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListGatewayIntegrations`
- **Error**: `ApiException<ListGatewayIntegrationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGatewayIntegrationsRequest` | `src/FinixApiReference/Requests/GatewayIntegrations/ListGatewayIntegrationsRequest.cs` |
| `ListGatewayIntegrations` | `src/FinixApiReference/Models/ListGatewayIntegrations.cs` |
| `ListGatewayIntegrationsError` | `src/FinixApiReference/Errors/ListGatewayIntegrationsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

