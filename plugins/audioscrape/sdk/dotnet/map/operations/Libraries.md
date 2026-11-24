<!-- Generated file — do not edit; regenerated with the SDK. -->

# Libraries — operations

Accessor: `client.Libraries` · Source: `src/Audioscrape/Api/Libraries.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDataset

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDataset(GetDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `DatasetDetail`
- **Error**: `ApiException<GetDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDatasetRequest` | `src/Audioscrape/Requests/Libraries/GetDatasetRequest.cs` |
| `DatasetDetail` | `src/Audioscrape/Models/DatasetDetail.cs` |
| `GetDatasetError` | `src/Audioscrape/Errors/GetDatasetError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetLibrary

- **Auth**: `options.BearerAuth`
- **Signature**: `GetLibrary(GetLibraryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Returns**: `LibraryDetail`
- **Error**: `ApiException<GetLibraryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLibraryRequest` | `src/Audioscrape/Requests/Libraries/GetLibraryRequest.cs` |
| `LibraryDetail` | `src/Audioscrape/Models/LibraryDetail.cs` |
| `GetLibraryError` | `src/Audioscrape/Errors/GetLibraryError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListLibraries

- **Auth**: `options.BearerAuth`
- **Signature**: `ListLibraries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `LibraryList`
- **Error**: `ApiException<ListLibrariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LibraryList` | `src/Audioscrape/Models/LibraryList.cs` |
| `ListLibrariesError` | `src/Audioscrape/Errors/ListLibrariesError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

