<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentApi — operations

Accessor: `client.DocumentApi` · Source: `src/Skribble/Api/DocumentApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDocument

- **Server group**: `DefaultSkribbleDocumentApi`
- **Auth**: `options.Bearer`
- **Signature**: `DeleteDocument(DeleteDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocumentRequest` | `src/Skribble/Requests/DocumentApi/DeleteDocumentRequest.cs` |
| `DeleteDocumentError` | `src/Skribble/Errors/DeleteDocumentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetDocumentContent

- **Server group**: `DefaultSkribbleDocumentApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetDocumentContent(GetDocumentContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocId`
- **Returns**: `DocumentContentResponse`
- **Error**: `ApiException<GetDocumentContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocumentContentRequest` | `src/Skribble/Requests/DocumentApi/GetDocumentContentRequest.cs` |
| `DocumentContentResponse` | `src/Skribble/Models/DocumentContentResponse.cs` |
| `GetDocumentContentError` | `src/Skribble/Errors/GetDocumentContentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetDocumentMetadata

- **Server group**: `DefaultSkribbleDocumentApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetDocumentMetadata(GetDocumentMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocId`
- **Returns**: `DocumentResponse`
- **Error**: `ApiException<GetDocumentMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocumentMetadataRequest` | `src/Skribble/Requests/DocumentApi/GetDocumentMetadataRequest.cs` |
| `DocumentResponse` | `src/Skribble/Models/DocumentResponse.cs` |
| `GetDocumentMetadataError` | `src/Skribble/Errors/GetDocumentMetadataError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetDocumentPreview

- **Server group**: `DefaultSkribbleDocumentApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetDocumentPreview(GetDocumentPreviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocId`, `PageId`
- **Query params (wire ← C#)**: `scale` ← `Scale`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<GetDocumentPreviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocumentPreviewRequest` | `src/Skribble/Requests/DocumentApi/GetDocumentPreviewRequest.cs` |
| `GetDocumentPreviewError` | `src/Skribble/Errors/GetDocumentPreviewError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetDocuments

- **Server group**: `DefaultSkribbleDocumentApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetDocuments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<DocumentResponse>`
- **Error**: `ApiException<GetDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentResponse` | `src/Skribble/Models/DocumentResponse.cs` |
| `GetDocumentsError` | `src/Skribble/Errors/GetDocumentsError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### UploadDocument

- **Server group**: `DefaultSkribbleDocumentApi`
- **Auth**: `options.Bearer`
- **Signature**: `UploadDocument(UploadDocumentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DocumentResponse`
- **Error**: `ApiException<UploadDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadDocumentOperationRequest` | `src/Skribble/Requests/DocumentApi/UploadDocumentOperationRequest.cs` |
| `UploadDocumentRequest` | `src/Skribble/Models/UploadDocumentRequest.cs` |
| `DocumentResponse` | `src/Skribble/Models/DocumentResponse.cs` |
| `UploadDocumentError` | `src/Skribble/Errors/UploadDocumentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

