<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/JuriSign/Api/Documents.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteDocument(DeleteDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocumentRequest` | `src/JuriSign/Requests/Documents/DeleteDocumentRequest.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `DeleteDocumentError` | `src/JuriSign/Errors/DeleteDocumentError.cs` |

### DownloadDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `DownloadDocument(DownloadDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadDocumentRequest` | `src/JuriSign/Requests/Documents/DownloadDocumentRequest.cs` |
| `DownloadDocumentError` | `src/JuriSign/Errors/DownloadDocumentError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### GetDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDocument(GetDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `DocumentsResponse1`
- **Error**: `ApiException<GetDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocumentRequest` | `src/JuriSign/Requests/Documents/GetDocumentRequest.cs` |
| `DocumentsResponse1` | `src/JuriSign/Models/DocumentsResponse1.cs` |
| `GetDocumentError` | `src/JuriSign/Errors/GetDocumentError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### ListDocuments

- **Auth**: `options.BearerAuth`
- **Signature**: `ListDocuments(ListDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `search` ← `Search`, `per_page` ← `PerPage`, `page` ← `Page`
- **Returns**: `DocumentsResponse`
- **Error**: `ApiException<ListDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentsRequest` | `src/JuriSign/Requests/Documents/ListDocumentsRequest.cs` |
| `StatusJuriSignDocumentsApi` | `src/JuriSign/Models/Enums/StatusJuriSignDocumentsApi.cs` |
| `DocumentsResponse` | `src/JuriSign/Models/DocumentsResponse.cs` |
| `ListDocumentsError` | `src/JuriSign/Errors/ListDocumentsError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### UploadDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `UploadDocument(UploadDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Returns**: `DocumentsResponse1`
- **Error**: `ApiException<UploadDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadDocumentRequest` | `src/JuriSign/Requests/Documents/UploadDocumentRequest.cs` |
| `DocumentsResponse1` | `src/JuriSign/Models/DocumentsResponse1.cs` |
| `UploadDocumentError` | `src/JuriSign/Errors/UploadDocumentError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

