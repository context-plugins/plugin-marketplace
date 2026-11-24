<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.Integrations` · Source: `src/Shortcut/Api/Integrations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGenericIntegration

- **Auth**: `options.ApiToken`
- **Signature**: `CreateGenericIntegration(CreateGenericIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateGenericIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGenericIntegrationRequest` | `src/Shortcut/Requests/Integrations/CreateGenericIntegrationRequest.cs` |
| `CreateGenericIntegration` | `src/Shortcut/Models/CreateGenericIntegration.cs` |
| `CreateGenericIntegrationError` | `src/Shortcut/Errors/CreateGenericIntegrationError.cs` |

### DeleteGenericIntegration

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteGenericIntegration(DeleteGenericIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IntegrationPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteGenericIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGenericIntegrationRequest` | `src/Shortcut/Requests/Integrations/DeleteGenericIntegrationRequest.cs` |
| `DeleteGenericIntegrationError` | `src/Shortcut/Errors/DeleteGenericIntegrationError.cs` |

### GetGenericIntegration

- **Auth**: `options.ApiToken`
- **Signature**: `GetGenericIntegration(GetGenericIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IntegrationPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetGenericIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGenericIntegrationRequest` | `src/Shortcut/Requests/Integrations/GetGenericIntegrationRequest.cs` |
| `GetGenericIntegrationError` | `src/Shortcut/Errors/GetGenericIntegrationError.cs` |

