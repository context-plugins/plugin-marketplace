<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1Engagement — operations

Accessor: `client.StudioV1Engagement` · Source: `Api/StudioV1Engagement.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEngagement

- **Server group**: `Default11`
- **Signature**: `CreateEngagement(string flowSid, string to, string from, object? parameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `parameters` — nullable, no default → **must pass explicitly**
- **Returns**: `StudioV1FlowEngagement`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1FlowEngagement` | `Models/StudioV1FlowEngagement.cs` |

### DeleteEngagement

- **Server group**: `Default11`
- **Signature**: `DeleteEngagement(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchEngagement

- **Server group**: `Default11`
- **Signature**: `FetchEngagement(string flowSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV1FlowEngagement`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1FlowEngagement` | `Models/StudioV1FlowEngagement.cs` |

### ListEngagement

- **Server group**: `Default11`
- **Signature**: `ListEngagement(string flowSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEngagementResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEngagementResponse` | `Models/ListEngagementResponse.cs` |

