<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForecastExportJob — operations

Accessor: `client.ForecastExportJob` · Source: `src/AmazonForecast/Api/ForecastExportJob.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateForecastExportJob2

- **Auth**: `options.Sigv4`
- **Signature**: `CreateForecastExportJob2(CreateForecastExportJob2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateForecastExportJob2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateForecastExportJob2Request` | `src/AmazonForecast/Requests/ForecastExportJob/CreateForecastExportJob2Request.cs` |
| `XAmzTargetAmazonForecastServiceExportJobsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceExportJobsApi.cs` |
| `CreateForecastExportJob2Error` | `src/AmazonForecast/Errors/CreateForecastExportJob2Error.cs` |

### DeleteForecastExportJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteForecastExportJob(DeleteForecastExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteForecastExportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteForecastExportJobOperationRequest` | `src/AmazonForecast/Requests/ForecastExportJob/DeleteForecastExportJobOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceForecastExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceForecastExportJobApi.cs` |
| `DeleteForecastExportJobError` | `src/AmazonForecast/Errors/DeleteForecastExportJobError.cs` |

### DescribeForecastExportJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeForecastExportJob(DescribeForecastExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeForecastExportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeForecastExportJobOperationRequest` | `src/AmazonForecast/Requests/ForecastExportJob/DescribeForecastExportJobOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceForecastExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceForecastExportJobApi.cs` |
| `DescribeForecastExportJobError` | `src/AmazonForecast/Errors/DescribeForecastExportJobError.cs` |

### ListForecastExportJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListForecastExportJobs(ListForecastExportJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListForecastExportJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListForecastExportJobsOperationRequest` | `src/AmazonForecast/Requests/ForecastExportJob/ListForecastExportJobsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceForecastExportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceForecastExportJobApi.cs` |
| `ListForecastExportJobsError` | `src/AmazonForecast/Errors/ListForecastExportJobsError.cs` |

