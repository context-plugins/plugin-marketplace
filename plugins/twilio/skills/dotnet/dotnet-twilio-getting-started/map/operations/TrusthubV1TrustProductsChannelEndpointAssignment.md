<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProductsChannelEndpointAssignment — operations

Accessor: `client.TrusthubV1TrustProductsChannelEndpointAssignment` · Source: `Api/TrusthubV1TrustProductsChannelEndpointAssignment.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTrustProductChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `CreateTrustProductChannelEndpointAssignment(string trustProductSid, string channelEndpointType, string channelEndpointSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProductTrustProductChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `Models/TrusthubV1TrustProductTrustProductChannelEndpointAssignment.cs` |

### DeleteTrustProductChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `DeleteTrustProductChannelEndpointAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTrustProductChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `FetchTrustProductChannelEndpointAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProductTrustProductChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `Models/TrusthubV1TrustProductTrustProductChannelEndpointAssignment.cs` |

### ListTrustProductChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `ListTrustProductChannelEndpointAssignment(string trustProductSid, string? channelEndpointSid, string? channelEndpointSids, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`channelEndpointSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ChannelEndpointSid` ← `channelEndpointSid`, `ChannelEndpointSids` ← `channelEndpointSids`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductChannelEndpointAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTrustProductChannelEndpointAssignmentResponse` | `Models/ListTrustProductChannelEndpointAssignmentResponse.cs` |

