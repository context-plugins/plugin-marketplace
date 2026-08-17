<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401RecordingTranscription — operations

Accessor: `client.Api20100401RecordingTranscription` · Source: `Api/Api20100401RecordingTranscription.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRecordingTranscription

- **Signature**: `DeleteRecordingTranscription(string accountSid, string recordingSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRecordingTranscription

- **Signature**: `FetchRecordingTranscription(string accountSid, string recordingSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountRecordingRecordingTranscription`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountRecordingRecordingTranscription` | `Models/ApiV2010AccountRecordingRecordingTranscription.cs` |

### ListRecordingTranscription

- **Signature**: `ListRecordingTranscription(string accountSid, string recordingSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingTranscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRecordingTranscriptionResponse` | `Models/ListRecordingTranscriptionResponse.cs` |

