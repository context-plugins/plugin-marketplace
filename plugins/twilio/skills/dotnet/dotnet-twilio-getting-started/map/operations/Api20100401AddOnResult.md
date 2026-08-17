<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AddOnResult — operations

Accessor: `client.Api20100401AddOnResult` · Source: `Api/Api20100401AddOnResult.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRecordingAddOnResult

- **Signature**: `DeleteRecordingAddOnResult(string accountSid, string referenceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRecordingAddOnResult

- **Signature**: `FetchRecordingAddOnResult(string accountSid, string referenceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountRecordingRecordingAddOnResult`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountRecordingRecordingAddOnResult` | `Models/ApiV2010AccountRecordingRecordingAddOnResult.cs` |

### ListRecordingAddOnResult

- **Signature**: `ListRecordingAddOnResult(string accountSid, string referenceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingAddOnResultResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRecordingAddOnResultResponse` | `Models/ListRecordingAddOnResultResponse.cs` |

