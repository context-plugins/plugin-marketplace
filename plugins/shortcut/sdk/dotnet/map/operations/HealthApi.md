<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.HealthApi` · Source: `src/Shortcut/Api/HealthApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UpdateHealth

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateHealth(UpdateHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `HealthPublicId`, `Body`
- **Returns**: `Health`
- **Error**: `ApiException<UpdateHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateHealthRequest` | `src/Shortcut/Requests/HealthApi/UpdateHealthRequest.cs` |
| `UpdateHealth` | `src/Shortcut/Models/UpdateHealth.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `UpdateHealthError` | `src/Shortcut/Errors/UpdateHealthError.cs` |

