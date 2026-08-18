<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agent — operations

Accessor: `client.Agent` · Source: `Api/Agent.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelAgent

- **Signature**: `CancelAgent(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SuccessResponse` | `Models/SuccessResponse.cs` |

### GetAgentStatus

- **Signature**: `GetAgentStatus(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AgentResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AgentResponse1` | `Models/AgentResponse1.cs` |

### StartAgent

- **Signature**: `StartAgent(AgentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AgentResponse`
- **Error**: `SdkException<StartAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetAgent402Error1(out Agent402Error1)` [402] · `TryGetAgent429Error1(out Agent429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AgentRequest` | `Models/AgentRequest.cs` |
| `AgentResponse` | `Models/AgentResponse.cs` |
| `StartAgentError` | `Errors/StartAgentError.cs` |
| `Agent402Error1` | `Models/Agent402Error1.cs` |
| `Agent429Error1` | `Models/Agent429Error1.cs` |

