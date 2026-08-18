<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `Api/Documents.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDocumentsId
- **Server group**: `Default18`
- **Signature**: `DeleteDocumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteDocumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocumentsIdError` | `Errors/DeleteDocumentsIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetDocumentsId
- **Server group**: `Default18`
- **Signature**: `GetDocumentsId(string id, bool? skipContent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `skipContent` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `skipContent` ← `skipContent`
- **Returns**: `Document`
- **Error**: `SdkException<GetDocumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Document` | `Models/Document.cs` |
| `GetDocumentsIdError` | `Errors/GetDocumentsIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PatchDocumentsId
- **Server group**: `Default18`
- **Signature**: `PatchDocumentsId(string id, string? xRequestedVerificationCode, Document? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Document`
- **Error**: `SdkException<PatchDocumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Document` | `Models/Document.cs` |
| `PatchDocumentsIdError` | `Errors/PatchDocumentsIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDocuments
- **Server group**: `Default18`
- **Signature**: `PostDocuments(string? xRequestedVerificationCode, Document? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Document`
- **Error**: `SdkException<PostDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Document` | `Models/Document.cs` |
| `PostDocumentsError` | `Errors/PostDocumentsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

