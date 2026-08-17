<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DestinationAlphaSender — operations

Accessor: `client.MessagingV1DestinationAlphaSender` · Source: `Api/MessagingV1DestinationAlphaSender.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDestinationAlphaSender

- **Server group**: `Default1`
- **Signature**: `CreateDestinationAlphaSender(string serviceSid, string alphaSender, string? isoCountryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isoCountryCode` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV1ServiceDestinationAlphaSender`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceDestinationAlphaSender` | `Models/MessagingV1ServiceDestinationAlphaSender.cs` |

### DeleteDestinationAlphaSender

- **Server group**: `Default1`
- **Signature**: `DeleteDestinationAlphaSender(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchDestinationAlphaSender

- **Server group**: `Default1`
- **Signature**: `FetchDestinationAlphaSender(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceDestinationAlphaSender`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceDestinationAlphaSender` | `Models/MessagingV1ServiceDestinationAlphaSender.cs` |

### ListDestinationAlphaSender

- **Server group**: `Default1`
- **Signature**: `ListDestinationAlphaSender(string serviceSid, string? isoCountryCode, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`isoCountryCode` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `IsoCountryCode` ← `isoCountryCode`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDestinationAlphaSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDestinationAlphaSenderResponse` | `Models/ListDestinationAlphaSenderResponse.cs` |

