<!-- Generated file — do not edit; regenerated with the SDK. -->

# Photos — operations

Accessor: `client.Photos` · Source: `src/FacebookBusinessManager/Api/Photos.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UploadPagePhoto

- **Auth**: `options.BearerAuth`
- **Signature**: `UploadPagePhoto(UploadPagePhotoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<UploadPagePhotoError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadPagePhotoRequest` | `src/FacebookBusinessManager/Requests/Photos/UploadPagePhotoRequest.cs` |
| `PhotosRequest` | `src/FacebookBusinessManager/Models/PhotosRequest.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `UploadPagePhotoError` | `src/FacebookBusinessManager/Errors/UploadPagePhotoError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

