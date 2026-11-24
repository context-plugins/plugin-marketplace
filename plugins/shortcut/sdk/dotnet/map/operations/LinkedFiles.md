<!-- Generated file — do not edit; regenerated with the SDK. -->

# LinkedFiles — operations

Accessor: `client.LinkedFiles` · Source: `src/Shortcut/Api/LinkedFiles.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateLinkedFile

- **Auth**: `options.ApiToken`
- **Signature**: `CreateLinkedFile(CreateLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LinkedFile`
- **Error**: `ApiException<CreateLinkedFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLinkedFileRequest` | `src/Shortcut/Requests/LinkedFiles/CreateLinkedFileRequest.cs` |
| `CreateLinkedFile` | `src/Shortcut/Models/CreateLinkedFile.cs` |
| `LinkedFile` | `src/Shortcut/Models/LinkedFile.cs` |
| `CreateLinkedFileError` | `src/Shortcut/Errors/CreateLinkedFileError.cs` |

### DeleteLinkedFile

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteLinkedFile(DeleteLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkedFilePublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteLinkedFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLinkedFileRequest` | `src/Shortcut/Requests/LinkedFiles/DeleteLinkedFileRequest.cs` |
| `DeleteLinkedFileError` | `src/Shortcut/Errors/DeleteLinkedFileError.cs` |

### GetLinkedFile

- **Auth**: `options.ApiToken`
- **Signature**: `GetLinkedFile(GetLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkedFilePublicId`
- **Returns**: `LinkedFile`
- **Error**: `ApiException<GetLinkedFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLinkedFileRequest` | `src/Shortcut/Requests/LinkedFiles/GetLinkedFileRequest.cs` |
| `LinkedFile` | `src/Shortcut/Models/LinkedFile.cs` |
| `GetLinkedFileError` | `src/Shortcut/Errors/GetLinkedFileError.cs` |

### ListLinkedFiles

- **Auth**: `options.ApiToken`
- **Signature**: `ListLinkedFiles(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<LinkedFile>`
- **Error**: `ApiException<ListLinkedFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LinkedFile` | `src/Shortcut/Models/LinkedFile.cs` |
| `ListLinkedFilesError` | `src/Shortcut/Errors/ListLinkedFilesError.cs` |

### UpdateLinkedFile

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateLinkedFile(UpdateLinkedFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkedFilePublicId`, `Body`
- **Returns**: `LinkedFile`
- **Error**: `ApiException<UpdateLinkedFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLinkedFileRequest` | `src/Shortcut/Requests/LinkedFiles/UpdateLinkedFileRequest.cs` |
| `UpdateLinkedFile` | `src/Shortcut/Models/UpdateLinkedFile.cs` |
| `LinkedFile` | `src/Shortcut/Models/LinkedFile.cs` |
| `UpdateLinkedFileError` | `src/Shortcut/Errors/UpdateLinkedFileError.cs` |

