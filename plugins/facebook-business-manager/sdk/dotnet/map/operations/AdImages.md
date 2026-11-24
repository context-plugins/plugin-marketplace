<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdImages — operations

Accessor: `client.AdImages` · Source: `src/FacebookBusinessManager/Api/AdImages.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UploadAdImage

- **Auth**: `options.BearerAuth`
- **Signature**: `UploadAdImage(UploadAdImageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Returns**: `ActAdimagesResponse`
- **Error**: `ApiException<UploadAdImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAdImageRequest` | `src/FacebookBusinessManager/Requests/AdImages/UploadAdImageRequest.cs` |
| `ActAdimagesResponse` | `src/FacebookBusinessManager/Models/ActAdimagesResponse.cs` |
| `UploadAdImageError` | `src/FacebookBusinessManager/Errors/UploadAdImageError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

