# Documents — operations

Accessor: `client.Documents` · Source: `Api/Documents.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDocument
- **HTTP**: `POST /documents` (Api (api))
- **Notes**: Upload a document . Include `scope` as a query parameter. Uses multipart/form-data.
- **Signature**: `CreateDocument(string userToken, DocumentFields fields, BinaryContent upload, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `DocumentResult`
- **Error**: `SdkException<CreateDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDocument
- **HTTP**: `GET /documents/{document-token}` (Api (api))
- **Notes**: Fetch a single document by its token.
- **Signature**: `GetDocument(string documentToken = "docu-6e582242-5dd4-4883-b0c2-488e09a26595", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `documentToken` = "docu-6e582242-5dd4-4883-b0c2-488e09a26595", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `DocumentResult`
- **Error**: `SdkException<GetDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadDocumentRequirementSearch
- **HTTP**: `GET /documents/requirements/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous document requirement search.
- **Signature**: `ReadDocumentRequirementSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `DocumentRequirementsSearchResult`
- **Error**: `SdkException<ReadDocumentRequirementSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReadDocumentSearch
- **HTTP**: `GET /documents/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous document search.
- **Signature**: `ReadDocumentSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `DocumentSearchResult`
- **Error**: `SdkException<ReadDocumentSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchDocumentRequirements
- **HTTP**: `POST /documents/requirements/search` (Api (api))
- **Notes**: Search document requirements.
- **Signature**: `SearchDocumentRequirements(DocumentRequirementSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `DocumentRequirementsSearchResult`
- **Error**: `SdkException<SearchDocumentRequirementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchDocuments
- **HTTP**: `POST /documents/search` (Api (api))
- **Notes**: Search for documents. Include `scope` in body.
- **Signature**: `SearchDocuments(DocumentSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `DocumentSearchResult`
- **Error**: `SdkException<SearchDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDocument
- **HTTP**: `PUT /documents/{document-token}` (Api (api))
- **Notes**: Update a document. Include `scope` as a query parameter.
- **Signature**: `UpdateDocument(string userToken, DocumentFields fields, BinaryContent upload, string documentToken = "docu-6e582242-5dd4-4883-b0c2-488e09a26595", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `documentToken` = "docu-6e582242-5dd4-4883-b0c2-488e09a26595", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `DocumentResult`
- **Error**: `SdkException<UpdateDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
