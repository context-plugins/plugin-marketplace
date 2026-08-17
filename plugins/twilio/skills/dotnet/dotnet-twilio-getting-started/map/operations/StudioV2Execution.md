<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2Execution — operations

Accessor: `client.StudioV2Execution` · Source: `Api/StudioV2Execution.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExecution2

- **Server group**: `Default11`
- **Signature**: `CreateExecution2(string flowSid, string to, string from, object? parameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `parameters` — nullable, no default → **must pass explicitly**
- **Returns**: `StudioV2FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV2FlowExecution` | `Models/StudioV2FlowExecution.cs` |

### DeleteExecution2

- **Server group**: `Default11`
- **Signature**: `DeleteExecution2(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchExecution2

- **Server group**: `Default11`
- **Signature**: `FetchExecution2(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV2FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV2FlowExecution` | `Models/StudioV2FlowExecution.cs` |

### ListExecution2

- **Server group**: `Default11`
- **Signature**: `ListExecution2(string flowSid, EngagementEnumStatus? status, DateTimeOffset? dateCreatedFrom, DateTimeOffset? dateCreatedTo, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `status` ← `status`, `DateCreatedFrom` ← `dateCreatedFrom`, `DateCreatedTo` ← `dateCreatedTo`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListExecutionResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EngagementEnumStatus` | `Models/Enums/EngagementEnumStatus.cs` |
| `ListExecutionResponse1` | `Models/ListExecutionResponse1.cs` |

### UpdateExecution2

- **Server group**: `Default11`
- **Signature**: `UpdateExecution2(string flowSid, string sid, EngagementEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV2FlowExecution`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EngagementEnumStatus` | `Models/Enums/EngagementEnumStatus.cs` |
| `StudioV2FlowExecution` | `Models/StudioV2FlowExecution.cs` |

