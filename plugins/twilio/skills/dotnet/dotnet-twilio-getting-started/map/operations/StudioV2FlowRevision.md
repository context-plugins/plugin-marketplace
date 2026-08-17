<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowRevision — operations

Accessor: `client.StudioV2FlowRevision` · Source: `Api/StudioV2FlowRevision.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchFlowRevision

- **Server group**: `Default11`
- **Signature**: `FetchFlowRevision(string sid, string revision, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV2FlowFlowRevision`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV2FlowFlowRevision` | `Models/StudioV2FlowFlowRevision.cs` |

### ListFlowRevision

- **Server group**: `Default11`
- **Signature**: `ListFlowRevision(string sid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFlowRevisionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListFlowRevisionResponse` | `Models/ListFlowRevisionResponse.cs` |

