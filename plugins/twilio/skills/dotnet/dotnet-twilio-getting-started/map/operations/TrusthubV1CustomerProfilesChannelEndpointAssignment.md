<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfilesChannelEndpointAssignment — operations

Accessor: `client.TrusthubV1CustomerProfilesChannelEndpointAssignment` · Source: `Api/TrusthubV1CustomerProfilesChannelEndpointAssignment.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerProfileChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `CreateCustomerProfileChannelEndpointAssignment(string customerProfileSid, string channelEndpointType, string channelEndpointSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `Models/TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment.cs` |

### DeleteCustomerProfileChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `DeleteCustomerProfileChannelEndpointAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchCustomerProfileChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `FetchCustomerProfileChannelEndpointAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment` | `Models/TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment.cs` |

### ListCustomerProfileChannelEndpointAssignment

- **Server group**: `Default9`
- **Signature**: `ListCustomerProfileChannelEndpointAssignment(string customerProfileSid, string? channelEndpointSid, string? channelEndpointSids, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`channelEndpointSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ChannelEndpointSid` ← `channelEndpointSid`, `ChannelEndpointSids` ← `channelEndpointSids`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileChannelEndpointAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCustomerProfileChannelEndpointAssignmentResponse` | `Models/ListCustomerProfileChannelEndpointAssignmentResponse.cs` |

