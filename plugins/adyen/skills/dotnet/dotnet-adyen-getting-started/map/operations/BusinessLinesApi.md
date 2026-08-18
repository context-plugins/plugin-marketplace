<!-- Generated file — do not edit; regenerated with the SDK. -->

# BusinessLinesApi — operations

Accessor: `client.BusinessLinesApi` · Source: `Api/BusinessLinesApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBusinessLinesId
- **Server group**: `Default18`
- **Signature**: `DeleteBusinessLinesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBusinessLinesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBusinessLinesIdError` | `Errors/DeleteBusinessLinesIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetBusinessLinesId
- **Server group**: `Default18`
- **Signature**: `GetBusinessLinesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BusinessLine`
- **Error**: `SdkException<GetBusinessLinesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BusinessLine` | `Models/BusinessLine.cs` |
| `GetBusinessLinesIdError` | `Errors/GetBusinessLinesIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PatchBusinessLinesId
- **Server group**: `Default18`
- **Signature**: `PatchBusinessLinesId(string id, BusinessLineInfoUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BusinessLine`
- **Error**: `SdkException<PatchBusinessLinesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BusinessLineInfoUpdate` | `Models/BusinessLineInfoUpdate.cs` |
| `BusinessLine` | `Models/BusinessLine.cs` |
| `PatchBusinessLinesIdError` | `Errors/PatchBusinessLinesIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostBusinessLines
- **Server group**: `Default18`
- **Signature**: `PostBusinessLines(BusinessLineInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BusinessLine`
- **Error**: `SdkException<PostBusinessLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BusinessLineInfo` | `Models/BusinessLineInfo.cs` |
| `BusinessLine` | `Models/BusinessLine.cs` |
| `PostBusinessLinesError` | `Errors/PostBusinessLinesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

