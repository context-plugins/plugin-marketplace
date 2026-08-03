# Documents — operations

Accessor: `client.Documents` · Source: `Api/Documents.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDocumentsId
- **HTTP**: `DELETE /documents/{id}` (Default (balanceplatform-api-test))
- **Notes**: Deletes a document. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `DeleteDocumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteDocumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDocumentsId
- **HTTP**: `GET /documents/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns a document. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetDocumentsId(string id, bool? skipContent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `skipContent` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `skipContent` ← `skipContent`
- **Returns**: `Document`
- **Error**: `SdkException<GetDocumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchDocumentsId
- **HTTP**: `PATCH /documents/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates a document. &gt;You can upload a maximum of 15 pages for photo IDs. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PatchDocumentsId(string id, string? xRequestedVerificationCode, Document? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Document`
- **Error**: `SdkException<PatchDocumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDocuments
- **HTTP**: `POST /documents` (Default (balanceplatform-api-test))
- **Notes**: Uploads a document for verification checks. Adyen uses the information from the legal entity to run automated verification checks. If these checks fail, you will be notified to provide additional documents. You should only upload documents when Adyen requests additional information for the legal entity. &gt;You can upload a maximum of 15 pages for photo IDs. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostDocuments(string? xRequestedVerificationCode, Document? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Document`
- **Error**: `SdkException<PostDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
