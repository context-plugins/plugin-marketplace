<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1Execution — operations

Accessor: `client.StudioV1Execution` · Source: `Api/StudioV1Execution.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExecution

- **Server group**: `Default11`
- **Signature**: `CreateExecution(string flowSid, string to, string from, object? parameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `parameters` — nullable, no default → **must pass explicitly**
- **Returns**: `StudioV1FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1FlowExecution` | `Models/StudioV1FlowExecution.cs` |

### DeleteExecution

- **Server group**: `Default11`
- **Signature**: `DeleteExecution(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchExecution

- **Server group**: `Default11`
- **Signature**: `FetchExecution(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV1FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1FlowExecution` | `Models/StudioV1FlowExecution.cs` |

### ListExecution

- **Server group**: `Default11`
- **Signature**: `ListExecution(string flowSid, DateTimeOffset? dateCreatedFrom, DateTimeOffset? dateCreatedTo, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateCreatedFrom` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `DateCreatedFrom` ← `dateCreatedFrom`, `DateCreatedTo` ← `dateCreatedTo`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListExecutionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListExecutionResponse` | `Models/ListExecutionResponse.cs` |

### UpdateExecution

- **Server group**: `Default11`
- **Signature**: `UpdateExecution(string flowSid, string sid, ExecutionEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV1FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExecutionEnumStatus` | `Models/Enums/ExecutionEnumStatus.cs` |
| `StudioV1FlowExecution` | `Models/StudioV1FlowExecution.cs` |

