<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.Folders` · Source: `src/UiPath/Api/Folders.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListFolders

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFolders(ListFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataFolderCollection`
- **Error**: `ApiException<ListFoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFoldersRequest` | `src/UiPath/Requests/Folders/ListFoldersRequest.cs` |
| `ODataFolderCollection` | `src/UiPath/Models/ODataFolderCollection.cs` |
| `ListFoldersError` | `src/UiPath/Errors/ListFoldersError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

