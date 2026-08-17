<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Payload — operations

Accessor: `client.Api20100401Payload` · Source: `Api/Api20100401Payload.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRecordingAddOnResultPayload

- **Signature**: `DeleteRecordingAddOnResultPayload(string accountSid, string referenceSid, string addOnResultSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRecordingAddOnResultPayload

- **Signature**: `FetchRecordingAddOnResultPayload(string accountSid, string referenceSid, string addOnResultSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload` | `Models/ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload.cs` |

### ListRecordingAddOnResultPayload

- **Signature**: `ListRecordingAddOnResultPayload(string accountSid, string referenceSid, string addOnResultSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingAddOnResultPayloadResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRecordingAddOnResultPayloadResponse` | `Models/ListRecordingAddOnResultPayloadResponse.cs` |

