<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.Items` · Source: `src/Audioscrape/Api/Items.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetItem

- **Auth**: `options.BearerAuth`
- **Signature**: `GetItem(GetItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ItemId`
- **Query params (wire ← C#)**: `include` ← `Include`
- **Returns**: `EpisodeDetail`
- **Error**: `ApiException<GetItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetItemRequest` | `src/Audioscrape/Requests/Items/GetItemRequest.cs` |
| `EpisodeDetail` | `src/Audioscrape/Models/EpisodeDetail.cs` |
| `GetItemError` | `src/Audioscrape/Errors/GetItemError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetItemTranscript

- **Auth**: `options.BearerAuth`
- **Signature**: `GetItemTranscript(GetItemTranscriptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ItemId`
- **Returns**: `Transcript`
- **Error**: `ApiException<GetItemTranscriptError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetItemTranscriptRequest` | `src/Audioscrape/Requests/Items/GetItemTranscriptRequest.cs` |
| `Transcript` | `src/Audioscrape/Models/Transcript.cs` |
| `GetItemTranscriptError` | `src/Audioscrape/Errors/GetItemTranscriptError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListItems

- **Auth**: `options.BearerAuth`
- **Signature**: `ListItems(ListItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `source_type` ← `SourceType`, `dataset_id` ← `DatasetId`, `library` ← `Library`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ItemList`
- **Error**: `ApiException<ListItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListItemsRequest` | `src/Audioscrape/Requests/Items/ListItemsRequest.cs` |
| `ItemList` | `src/Audioscrape/Models/ItemList.cs` |
| `ListItemsError` | `src/Audioscrape/Errors/ListItemsError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### UploadItemExternal

- **Auth**: `options.BearerAuth`
- **Signature**: `UploadItemExternal(UploadItemExternalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `UploadResponse`
- **Error**: `ApiException<UploadItemExternalError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [400, 401, 404, 409, 413, 415, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadItemExternalRequest` | `src/Audioscrape/Requests/Items/UploadItemExternalRequest.cs` |
| `UploadFromUrl` | `src/Audioscrape/Models/UploadFromUrl.cs` |
| `UploadResponse` | `src/Audioscrape/Models/UploadResponse.cs` |
| `UploadItemExternalError` | `src/Audioscrape/Errors/UploadItemExternalError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

