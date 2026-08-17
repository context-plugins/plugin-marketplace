<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401OutgoingCallerId — operations

Accessor: `client.Api20100401OutgoingCallerId` · Source: `Api/Api20100401OutgoingCallerId.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteOutgoingCallerId

- **Signature**: `DeleteOutgoingCallerId(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchOutgoingCallerId

- **Signature**: `FetchOutgoingCallerId(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountOutgoingCallerId`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountOutgoingCallerId` | `Models/ApiV2010AccountOutgoingCallerId.cs` |

### ListOutgoingCallerId

- **Signature**: `ListOutgoingCallerId(string accountSid, string? phoneNumber, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`phoneNumber` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListOutgoingCallerIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListOutgoingCallerIdResponse` | `Models/ListOutgoingCallerIdResponse.cs` |

### UpdateOutgoingCallerId

- **Signature**: `UpdateOutgoingCallerId(string accountSid, string sid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountOutgoingCallerId`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountOutgoingCallerId` | `Models/ApiV2010AccountOutgoingCallerId.cs` |

