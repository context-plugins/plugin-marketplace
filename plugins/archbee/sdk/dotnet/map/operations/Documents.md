<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/Archbee/Api/Documents.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteDocument(DeleteDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DocResponse`
- **Error**: `ApiException<DeleteDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetDoc400Error1([NotNullWhen(true)] out Doc400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocumentRequest` | `src/Archbee/Requests/Documents/DeleteDocumentRequest.cs` |
| `DocRequest` | `src/Archbee/Models/DocRequest.cs` |
| `DocResponse` | `src/Archbee/Models/DocResponse.cs` |
| `DeleteDocumentError` | `src/Archbee/Errors/DeleteDocumentError.cs` |
| `Doc400Error1` | `src/Archbee/Models/Doc400Error1.cs` |

### GetDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDocument(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DocResponse1`
- **Error**: `ApiException<GetDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetDoc400Error1([NotNullWhen(true)] out Doc400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocResponse1` | `src/Archbee/Models/DocResponse1.cs` |
| `GetDocumentError` | `src/Archbee/Errors/GetDocumentError.cs` |
| `Doc400Error1` | `src/Archbee/Models/Doc400Error1.cs` |

### ImportContent

- **Auth**: `options.BearerAuth`
- **Signature**: `ImportContent(ImportContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Returns**: `ImportContentResponse`
- **Error**: `ApiException<ImportContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetImportContent400Error1([NotNullWhen(true)] out ImportContent400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportContentRequest` | `src/Archbee/Requests/Documents/ImportContentRequest.cs` |
| `Type1` | `src/Archbee/Models/Enums/Type1.cs` |
| `ImportContentResponse` | `src/Archbee/Models/ImportContentResponse.cs` |
| `ImportContentError` | `src/Archbee/Errors/ImportContentError.cs` |
| `ImportContent400Error1` | `src/Archbee/Models/ImportContent400Error1.cs` |

### SearchDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchDocument(SearchDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DocsSearchResponse`
- **Error**: `ApiException<SearchDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetDocsSearch400Error1([NotNullWhen(true)] out DocsSearch400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchDocumentRequest` | `src/Archbee/Requests/Documents/SearchDocumentRequest.cs` |
| `DocsSearchRequest` | `src/Archbee/Models/DocsSearchRequest.cs` |
| `DocsSearchResponse` | `src/Archbee/Models/DocsSearchResponse.cs` |
| `SearchDocumentError` | `src/Archbee/Errors/SearchDocumentError.cs` |
| `DocsSearch400Error1` | `src/Archbee/Models/DocsSearch400Error1.cs` |

### UpdateCreateDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateCreateDocument(UpdateCreateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DocResponse2`
- **Error**: `ApiException<UpdateCreateDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetDoc400Error1([NotNullWhen(true)] out Doc400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCreateDocumentRequest` | `src/Archbee/Requests/Documents/UpdateCreateDocumentRequest.cs` |
| `DocRequest1` | `src/Archbee/Models/DocRequest1.cs` |
| `DocResponse2` | `src/Archbee/Models/DocResponse2.cs` |
| `UpdateCreateDocumentError` | `src/Archbee/Errors/UpdateCreateDocumentError.cs` |
| `Doc400Error1` | `src/Archbee/Models/Doc400Error1.cs` |

