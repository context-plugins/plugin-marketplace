<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.Batch` · Source: `src/PlinthUsGrantsData/Api/Batch.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchLookup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `BatchLookup(BatchLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BatchResponse`
- **Error**: `ApiException<BatchLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchLookupRequest` | `src/PlinthUsGrantsData/Requests/Batch/BatchLookupRequest.cs` |
| `BatchRequest` | `src/PlinthUsGrantsData/Models/BatchRequest.cs` |
| `BatchResponse` | `src/PlinthUsGrantsData/Models/BatchResponse.cs` |
| `BatchLookupError` | `src/PlinthUsGrantsData/Errors/BatchLookupError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### ListBatchFields

- **Signature**: `ListBatchFields(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

