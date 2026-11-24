<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileUploads — operations

Accessor: `client.FileUploads` · Source: `src/Contentstack/Api/FileUploads.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetProjectUploadUrl

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetProjectUploadUrl(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UploadUrlResponse`
- **Error**: `ApiException<GetProjectUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadUrlResponse` | `src/Contentstack/Models/UploadUrlResponse.cs` |
| `GetProjectUploadUrlError` | `src/Contentstack/Errors/GetProjectUploadUrlError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

