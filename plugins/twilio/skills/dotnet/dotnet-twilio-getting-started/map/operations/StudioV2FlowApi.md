<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowApi — operations

Accessor: `client.StudioV2FlowApi` · Source: `Api/StudioV2FlowApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFlow

- **Server group**: `Default11`
- **Signature**: `CreateFlow(string friendlyName, FlowEnumStatus status, object definition, string? commitMessage, string? authorSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `commitMessage` — nullable, no default → **must pass explicitly**
  - `authorSid` — nullable, no default → **must pass explicitly**
- **Returns**: `StudioV2Flow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlowEnumStatus` | `Models/Enums/FlowEnumStatus.cs` |
| `StudioV2Flow` | `Models/StudioV2Flow.cs` |

### DeleteFlow2

- **Server group**: `Default11`
- **Signature**: `DeleteFlow2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchFlow2

- **Server group**: `Default11`
- **Signature**: `FetchFlow2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV2Flow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV2Flow` | `Models/StudioV2Flow.cs` |

### ListFlow2

- **Server group**: `Default11`
- **Signature**: `ListFlow2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFlowResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListFlowResponse1` | `Models/ListFlowResponse1.cs` |

### UpdateFlow

- **Server group**: `Default11`
- **Signature**: `UpdateFlow(string sid, FlowEnumStatus status, string? friendlyName, object? definition, string? commitMessage, string? authorSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `authorSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `StudioV2Flow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlowEnumStatus` | `Models/Enums/FlowEnumStatus.cs` |
| `StudioV2Flow` | `Models/StudioV2Flow.cs` |

