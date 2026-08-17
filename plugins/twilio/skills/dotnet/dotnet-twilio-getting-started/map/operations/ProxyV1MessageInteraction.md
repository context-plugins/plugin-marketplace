<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1MessageInteraction — operations

Accessor: `client.ProxyV1MessageInteraction` · Source: `Api/ProxyV1MessageInteraction.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMessageInteraction

- **Server group**: `Default10`
- **Signature**: `CreateMessageInteraction(string serviceSid, string sessionSid, string participantSid, string? body, IReadOnlyList<string>? mediaUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - `mediaUrl` — nullable, no default → **must pass explicitly**
- **Returns**: `ProxyV1ServiceSessionParticipantMessageInteraction`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `Models/ProxyV1ServiceSessionParticipantMessageInteraction.cs` |

### FetchMessageInteraction

- **Server group**: `Default10`
- **Signature**: `FetchMessageInteraction(string serviceSid, string sessionSid, string participantSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProxyV1ServiceSessionParticipantMessageInteraction`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServiceSessionParticipantMessageInteraction` | `Models/ProxyV1ServiceSessionParticipantMessageInteraction.cs` |

### ListMessageInteraction

- **Server group**: `Default10`
- **Signature**: `ListMessageInteraction(string serviceSid, string sessionSid, string participantSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMessageInteractionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMessageInteractionResponse` | `Models/ListMessageInteractionResponse.cs` |

