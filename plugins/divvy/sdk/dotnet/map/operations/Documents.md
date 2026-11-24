<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/Divvy/Api/Documents.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBillDocument

- **Signature**: `CreateBillDocument(CreateBillDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`, `Name`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `DocumentCreateResponseDto`
- **Error**: `ApiException<CreateBillDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillDocumentRequest` | `src/Divvy/Requests/Documents/CreateBillDocumentRequest.cs` |
| `DocumentCreateResponseDto` | `src/Divvy/Models/DocumentCreateResponseDto.cs` |
| `CreateBillDocumentError` | `src/Divvy/Errors/CreateBillDocumentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetDocument

- **Signature**: `GetDocument(GetDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`
- **Returns**: `DocumentResponseDto`
- **Error**: `ApiException<GetDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocumentRequest` | `src/Divvy/Requests/Documents/GetDocumentRequest.cs` |
| `DocumentResponseDto` | `src/Divvy/Models/DocumentResponseDto.cs` |
| `GetDocumentError` | `src/Divvy/Errors/GetDocumentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListDocuments

- **Signature**: `ListDocuments(ListDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoDocumentResponseDto`
- **Error**: `ApiException<ListDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentsRequest` | `src/Divvy/Requests/Documents/ListDocumentsRequest.cs` |
| `ListResponseDtoDocumentResponseDto` | `src/Divvy/Models/ListResponseDtoDocumentResponseDto.cs` |
| `ListDocumentsError` | `src/Divvy/Errors/ListDocumentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UploadStatus

- **Signature**: `UploadStatus(UploadStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<DocumentUploadStatusResponseDto>`
- **Error**: `ApiException<UploadStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadStatusRequest` | `src/Divvy/Requests/Documents/UploadStatusRequest.cs` |
| `DocumentUploadStatusResponseDto` | `src/Divvy/Models/DocumentUploadStatusResponseDto.cs` |
| `UploadStatusError` | `src/Divvy/Errors/UploadStatusError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

