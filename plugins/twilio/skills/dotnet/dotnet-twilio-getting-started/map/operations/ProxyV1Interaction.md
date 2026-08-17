<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1Interaction — operations

Accessor: `client.ProxyV1Interaction` · Source: `Api/ProxyV1Interaction.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteInteraction

- **Server group**: `Default10`
- **Signature**: `DeleteInteraction(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchInteraction

- **Server group**: `Default10`
- **Signature**: `FetchInteraction(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProxyV1ServiceSessionInteraction`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServiceSessionInteraction` | `Models/ProxyV1ServiceSessionInteraction.cs` |

### ListInteraction

- **Server group**: `Default10`
- **Signature**: `ListInteraction(string serviceSid, string sessionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInteractionResponse` | `Models/ListInteractionResponse.cs` |

