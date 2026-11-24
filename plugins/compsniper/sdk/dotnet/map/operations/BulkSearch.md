<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSearch — operations

Accessor: `client.BulkSearch` · Source: `src/CompSniper/Api/BulkSearch.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkSearchInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `BulkSearchInvoke(BulkSearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IAsyncEnumerable<string>`
- **Error**: `ApiException<BulkSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 403, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkSearchOperationRequest` | `src/CompSniper/Requests/BulkSearch/BulkSearchOperationRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `BulkSearchRequest` | `src/CompSniper/Models/BulkSearchRequest.cs` |
| `BulkSearchError` | `src/CompSniper/Errors/BulkSearchError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### DownloadBulkSearchCsv

- **Auth**: `options.BearerAuth`
- **Signature**: `DownloadBulkSearchCsv(DownloadBulkSearchCsvRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Query params (wire ← C#)**: `index` ← `Index`
- **Returns**: `string`
- **Error**: `ApiException<DownloadBulkSearchCsvError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadBulkSearchCsvRequest` | `src/CompSniper/Requests/BulkSearch/DownloadBulkSearchCsvRequest.cs` |
| `DownloadBulkSearchCsvError` | `src/CompSniper/Errors/DownloadBulkSearchCsvError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

