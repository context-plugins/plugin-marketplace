<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsDynatrace — operations

Accessor: `client.IntegrationsDynatrace` · Source: `src/DevCycle/Api/IntegrationsDynatrace.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DynatraceIntegrationControllerCreateIntegration

- **Signature**: `DynatraceIntegrationControllerCreateIntegration(DynatraceIntegrationControllerCreateIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DynatraceIntegrationControllerCreateIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DynatraceIntegrationControllerCreateIntegrationRequest` | `src/DevCycle/Requests/IntegrationsDynatrace/DynatraceIntegrationControllerCreateIntegrationRequest.cs` |
| `CreateDynatraceIntegrationDto` | `src/DevCycle/Models/CreateDynatraceIntegrationDto.cs` |
| `DynatraceIntegrationControllerCreateIntegrationError` | `src/DevCycle/Errors/DynatraceIntegrationControllerCreateIntegrationError.cs` |

### DynatraceIntegrationControllerDeleteEnvironment

- **Signature**: `DynatraceIntegrationControllerDeleteEnvironment(DynatraceIntegrationControllerDeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DynatraceEnvironmentId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DynatraceIntegrationControllerDeleteEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DynatraceIntegrationControllerDeleteEnvironmentRequest` | `src/DevCycle/Requests/IntegrationsDynatrace/DynatraceIntegrationControllerDeleteEnvironmentRequest.cs` |
| `DynatraceIntegrationControllerDeleteEnvironmentError` | `src/DevCycle/Errors/DynatraceIntegrationControllerDeleteEnvironmentError.cs` |

### DynatraceIntegrationControllerGetIntegrations

- **Signature**: `DynatraceIntegrationControllerGetIntegrations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DynatraceIntegration`
- **Error**: `ApiException<DynatraceIntegrationControllerGetIntegrationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DynatraceIntegration` | `src/DevCycle/Models/DynatraceIntegration.cs` |
| `DynatraceIntegrationControllerGetIntegrationsError` | `src/DevCycle/Errors/DynatraceIntegrationControllerGetIntegrationsError.cs` |

