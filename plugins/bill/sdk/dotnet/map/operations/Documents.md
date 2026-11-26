<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/Bill/Api/Documents.cs` · 4 operations

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
| `CreateBillDocumentRequest` | `src/Bill/Requests/Documents/CreateBillDocumentRequest.cs` |
| `DocumentCreateResponseDto` | `src/Bill/Models/DocumentCreateResponseDto.cs` |
| `CreateBillDocumentError` | `src/Bill/Errors/CreateBillDocumentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetDocument

- **Signature**: `GetDocument(GetDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`
- **Returns**: `DocumentResponseDto`
- **Error**: `ApiException<GetDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocumentRequest` | `src/Bill/Requests/Documents/GetDocumentRequest.cs` |
| `DocumentResponseDto` | `src/Bill/Models/DocumentResponseDto.cs` |
| `GetDocumentError` | `src/Bill/Errors/GetDocumentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListDocuments

- **Signature**: `ListDocuments(ListDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoDocumentResponseDto`
- **Error**: `ApiException<ListDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentsRequest` | `src/Bill/Requests/Documents/ListDocumentsRequest.cs` |
| `ListResponseDtoDocumentResponseDto` | `src/Bill/Models/ListResponseDtoDocumentResponseDto.cs` |
| `ListDocumentsError` | `src/Bill/Errors/ListDocumentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UploadStatus

- **Signature**: `UploadStatus(UploadStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<DocumentUploadStatusResponseDto>`
- **Error**: `ApiException<UploadStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadStatusRequest` | `src/Bill/Requests/Documents/UploadStatusRequest.cs` |
| `DocumentUploadStatusResponseDto` | `src/Bill/Models/DocumentUploadStatusResponseDto.cs` |
| `UploadStatusError` | `src/Bill/Errors/UploadStatusError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

