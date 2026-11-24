<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recalls — operations

Accessor: `client.Recalls` · Source: `src/CarsXe/Api/Recalls.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DownloadRecallsBatchResults

- **Auth**: `options.ApiKeyQuery` OR `options.RecallsBatchToken`
- **Signature**: `DownloadRecallsBatchResults(DownloadRecallsBatchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BatchId`
- **Query params (wire ← C#)**: `batchId` ← `BatchId`
- **Returns**: `string`
- **Error**: `ApiException<DownloadRecallsBatchResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadRecallsBatchResultsRequest` | `src/CarsXe/Requests/Recalls/DownloadRecallsBatchResultsRequest.cs` |
| `DownloadRecallsBatchResultsError` | `src/CarsXe/Errors/DownloadRecallsBatchResultsError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |

### GetRecallsBatchResults

- **Auth**: `options.ApiKeyQuery` OR `options.RecallsBatchToken`
- **Signature**: `GetRecallsBatchResults(GetRecallsBatchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BatchId`
- **Query params (wire ← C#)**: `batchId` ← `BatchId`
- **Returns**: `V1RecallsBatchResultsResponse`
- **Error**: `ApiException<GetRecallsBatchResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecallsBatchResultsRequest` | `src/CarsXe/Requests/Recalls/GetRecallsBatchResultsRequest.cs` |
| `V1RecallsBatchResultsResponse` | `src/CarsXe/Models/V1RecallsBatchResultsResponse.cs` |
| `GetRecallsBatchResultsError` | `src/CarsXe/Errors/GetRecallsBatchResultsError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |

### GetRecallsBatchStatus

- **Auth**: `options.ApiKeyQuery` OR `options.RecallsBatchToken`
- **Signature**: `GetRecallsBatchStatus(GetRecallsBatchStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BatchId`
- **Query params (wire ← C#)**: `batchId` ← `BatchId`
- **Returns**: `V1RecallsBatchStatusResponse`
- **Error**: `ApiException<GetRecallsBatchStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecallsBatchStatusRequest` | `src/CarsXe/Requests/Recalls/GetRecallsBatchStatusRequest.cs` |
| `V1RecallsBatchStatusResponse` | `src/CarsXe/Models/V1RecallsBatchStatusResponse.cs` |
| `GetRecallsBatchStatusError` | `src/CarsXe/Errors/GetRecallsBatchStatusError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |

### GetRecallsByYmm

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetRecallsByYmm(GetRecallsByYmmRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Year`, `Make`, `Model`
- **Query params (wire ← C#)**: `year` ← `Year`, `make` ← `Make`, `model` ← `Model`
- **Returns**: `V1RecallsYmmResponse`
- **Error**: `ApiException<GetRecallsByYmmError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecallsByYmmRequest` | `src/CarsXe/Requests/Recalls/GetRecallsByYmmRequest.cs` |
| `V1RecallsYmmResponse` | `src/CarsXe/Models/V1RecallsYmmResponse.cs` |
| `GetRecallsByYmmError` | `src/CarsXe/Errors/GetRecallsByYmmError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### GetVehicleRecalls

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetVehicleRecalls(GetVehicleRecallsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`
- **Returns**: `V1RecallsResponse`
- **Error**: `ApiException<GetVehicleRecallsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleRecallsRequest` | `src/CarsXe/Requests/Recalls/GetVehicleRecallsRequest.cs` |
| `V1RecallsResponse` | `src/CarsXe/Models/V1RecallsResponse.cs` |
| `GetVehicleRecallsError` | `src/CarsXe/Errors/GetVehicleRecallsError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### SubmitRecallsBatch

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `SubmitRecallsBatch(SubmitRecallsBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1RecallsBatchSubmitResponse`
- **Error**: `ApiException<SubmitRecallsBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 405, 500, 502] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitRecallsBatchRequest` | `src/CarsXe/Requests/Recalls/SubmitRecallsBatchRequest.cs` |
| `V1RecallsBatchSubmitRequest` | `src/CarsXe/Models/V1RecallsBatchSubmitRequest.cs` |
| `V1RecallsBatchSubmitResponse` | `src/CarsXe/Models/V1RecallsBatchSubmitResponse.cs` |
| `SubmitRecallsBatchError` | `src/CarsXe/Errors/SubmitRecallsBatchError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

