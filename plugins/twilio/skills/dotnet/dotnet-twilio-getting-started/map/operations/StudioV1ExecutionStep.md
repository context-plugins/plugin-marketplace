<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1ExecutionStep — operations

Accessor: `client.StudioV1ExecutionStep` · Source: `Api/StudioV1ExecutionStep.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchExecutionStep

- **Server group**: `Default11`
- **Signature**: `FetchExecutionStep(string flowSid, string executionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV1FlowExecutionExecutionStep`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1FlowExecutionExecutionStep` | `Models/StudioV1FlowExecutionExecutionStep.cs` |

### ListExecutionStep

- **Server group**: `Default11`
- **Signature**: `ListExecutionStep(string flowSid, string executionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListExecutionStepResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListExecutionStepResponse` | `Models/ListExecutionStepResponse.cs` |

