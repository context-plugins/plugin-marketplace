<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1FlowApi — operations

Accessor: `client.StudioV1FlowApi` · Source: `Api/StudioV1FlowApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteFlow

- **Server group**: `Default11`
- **Signature**: `DeleteFlow(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchFlow

- **Server group**: `Default11`
- **Signature**: `FetchFlow(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV1Flow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1Flow` | `Models/StudioV1Flow.cs` |

### ListFlow

- **Server group**: `Default11`
- **Signature**: `ListFlow(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFlowResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListFlowResponse` | `Models/ListFlowResponse.cs` |

