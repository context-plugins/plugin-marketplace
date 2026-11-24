<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentsApi — operations

Accessor: `client.AgentsApi` · Source: `src/Buildkite/Api/AgentsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAgent

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAgent(GetAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetAgentRequest` | `src/Buildkite/Requests/AgentsApi/GetAgentRequest.cs` |

### ListAgents

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAgents(ListAgentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `IReadOnlyList<Agent>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAgentsRequest` | `src/Buildkite/Requests/AgentsApi/ListAgentsRequest.cs` |
| `Agent` | `src/Buildkite/Models/Agent.cs` |

### StopAgent

- **Auth**: `options.BearerAuth`
- **Signature**: `StopAgent(StopAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StopAgentRequest` | `src/Buildkite/Requests/AgentsApi/StopAgentRequest.cs` |

