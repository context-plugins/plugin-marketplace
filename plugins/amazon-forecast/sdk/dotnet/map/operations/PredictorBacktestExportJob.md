<!-- Generated file — do not edit; regenerated with the SDK. -->

# PredictorBacktestExportJob — operations

Accessor: `client.PredictorBacktestExportJob` · Source: `src/AmazonForecast/Api/PredictorBacktestExportJob.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePredictorBacktestExportJob

- **Auth**: `options.Sigv4`
- **Signature**: `CreatePredictorBacktestExportJob(CreatePredictorBacktestExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePredictorBacktestExportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePredictorBacktestExportJobOperationRequest` | `src/AmazonForecast/Requests/PredictorBacktestExportJob/CreatePredictorBacktestExportJobOperationRequest.cs` |
| `XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi.cs` |
| `CreatePredictorBacktestExportJobError` | `src/AmazonForecast/Errors/CreatePredictorBacktestExportJobError.cs` |

### DeletePredictorBacktestExportJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeletePredictorBacktestExportJob(DeletePredictorBacktestExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePredictorBacktestExportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePredictorBacktestExportJobOperationRequest` | `src/AmazonForecast/Requests/PredictorBacktestExportJob/DeletePredictorBacktestExportJobOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi.cs` |
| `DeletePredictorBacktestExportJobError` | `src/AmazonForecast/Errors/DeletePredictorBacktestExportJobError.cs` |

### DescribePredictorBacktestExportJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribePredictorBacktestExportJob(DescribePredictorBacktestExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribePredictorBacktestExportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribePredictorBacktestExportJobOperationRequest` | `src/AmazonForecast/Requests/PredictorBacktestExportJob/DescribePredictorBacktestExportJobOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi.cs` |
| `DescribePredictorBacktestExportJobError` | `src/AmazonForecast/Errors/DescribePredictorBacktestExportJobError.cs` |

### ListPredictorBacktestExportJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListPredictorBacktestExportJobs(ListPredictorBacktestExportJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListPredictorBacktestExportJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPredictorBacktestExportJobsOperationRequest` | `src/AmazonForecast/Requests/PredictorBacktestExportJob/ListPredictorBacktestExportJobsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi.cs` |
| `ListPredictorBacktestExportJobsError` | `src/AmazonForecast/Errors/ListPredictorBacktestExportJobsError.cs` |

