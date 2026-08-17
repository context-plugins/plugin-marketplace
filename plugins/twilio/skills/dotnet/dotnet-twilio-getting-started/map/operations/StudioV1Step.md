<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1Step — operations

Accessor: `client.StudioV1Step` · Source: `Api/StudioV1Step.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchStep

- **Server group**: `Default11`
- **Signature**: `FetchStep(string flowSid, string engagementSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV1FlowEngagementStep`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV1FlowEngagementStep` | `Models/StudioV1FlowEngagementStep.cs` |

### ListStep

- **Server group**: `Default11`
- **Signature**: `ListStep(string flowSid, string engagementSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListStepResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListStepResponse` | `Models/ListStepResponse.cs` |

