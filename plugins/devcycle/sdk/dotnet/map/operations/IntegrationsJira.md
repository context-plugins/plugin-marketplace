<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsJira — operations

Accessor: `client.IntegrationsJira` · Source: `src/DevCycle/Api/IntegrationsJira.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### JiraIntegrationControllerRemove

- **Signature**: `JiraIntegrationControllerRemove(JiraIntegrationControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Token`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `JiraIntegrationControllerRemoveRequest` | `src/DevCycle/Requests/IntegrationsJira/JiraIntegrationControllerRemoveRequest.cs` |

### JiraIntegrationControllerRemoveOrganizationConnection

- **Signature**: `JiraIntegrationControllerRemoveOrganizationConnection(JiraIntegrationControllerRemoveOrganizationConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Token`
- **Returns**: `void` (Task)
- **Error**: `ApiException<JiraIntegrationControllerRemoveOrganizationConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JiraIntegrationControllerRemoveOrganizationConnectionRequest` | `src/DevCycle/Requests/IntegrationsJira/JiraIntegrationControllerRemoveOrganizationConnectionRequest.cs` |
| `JiraIntegrationControllerRemoveOrganizationConnectionError` | `src/DevCycle/Errors/JiraIntegrationControllerRemoveOrganizationConnectionError.cs` |

### JiraIntegrationControllerRemoveProjectConnection

- **Signature**: `JiraIntegrationControllerRemoveProjectConnection(JiraIntegrationControllerRemoveProjectConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Token`
- **Returns**: `void` (Task)
- **Error**: `ApiException<JiraIntegrationControllerRemoveProjectConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JiraIntegrationControllerRemoveProjectConnectionRequest` | `src/DevCycle/Requests/IntegrationsJira/JiraIntegrationControllerRemoveProjectConnectionRequest.cs` |
| `JiraIntegrationControllerRemoveProjectConnectionError` | `src/DevCycle/Errors/JiraIntegrationControllerRemoveProjectConnectionError.cs` |

