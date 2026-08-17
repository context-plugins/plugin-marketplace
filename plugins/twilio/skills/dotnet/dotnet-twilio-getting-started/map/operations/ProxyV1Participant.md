<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1Participant — operations

Accessor: `client.ProxyV1Participant` · Source: `Api/ProxyV1Participant.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateParticipant2

- **Server group**: `Default10`
- **Signature**: `CreateParticipant2(string serviceSid, string sessionSid, string identifier, string? friendlyName, string? proxyIdentifier, string? proxyIdentifierSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `proxyIdentifier` — nullable, no default → **must pass explicitly**
  - `proxyIdentifierSid` — nullable, no default → **must pass explicitly**
- **Returns**: `ProxyV1ServiceSessionParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServiceSessionParticipant` | `Models/ProxyV1ServiceSessionParticipant.cs` |

### DeleteParticipant2

- **Server group**: `Default10`
- **Signature**: `DeleteParticipant2(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchParticipant3

- **Server group**: `Default10`
- **Signature**: `FetchParticipant3(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProxyV1ServiceSessionParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServiceSessionParticipant` | `Models/ProxyV1ServiceSessionParticipant.cs` |

### ListParticipant2

- **Server group**: `Default10`
- **Signature**: `ListParticipant2(string serviceSid, string sessionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListParticipantResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListParticipantResponse1` | `Models/ListParticipantResponse1.cs` |

