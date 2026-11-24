<!-- Generated file — do not edit; regenerated with the SDK. -->

# Videos — operations

Accessor: `client.Videos` · Source: `src/FacebookBusinessManager/Api/Videos.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UploadPageVideo

- **Auth**: `options.BearerAuth`
- **Signature**: `UploadPageVideo(UploadPageVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<UploadPageVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadPageVideoRequest` | `src/FacebookBusinessManager/Requests/Videos/UploadPageVideoRequest.cs` |
| `VideosRequest` | `src/FacebookBusinessManager/Models/VideosRequest.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `UploadPageVideoError` | `src/FacebookBusinessManager/Errors/UploadPageVideoError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

