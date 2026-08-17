<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Transcription — operations

Accessor: `client.Api20100401Transcription` · Source: `Api/Api20100401Transcription.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteTranscription

- **Signature**: `DeleteTranscription(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTranscription

- **Signature**: `FetchTranscription(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountTranscription`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountTranscription` | `Models/ApiV2010AccountTranscription.cs` |

### ListTranscription

- **Signature**: `ListTranscription(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTranscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTranscriptionResponse` | `Models/ListTranscriptionResponse.cs` |

