<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetImportJob — operations

Accessor: `client.DatasetImportJob` · Source: `src/AmazonForecast/Api/DatasetImportJob.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDatasetImportJob

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDatasetImportJob(CreateDatasetImportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDatasetImportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDatasetImportJobOperationRequest` | `src/AmazonForecast/Requests/DatasetImportJob/CreateDatasetImportJobOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceDatasetImportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceDatasetImportJobApi.cs` |
| `CreateDatasetImportJobError` | `src/AmazonForecast/Errors/CreateDatasetImportJobError.cs` |

### DeleteDatasetImportJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDatasetImportJob(DeleteDatasetImportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDatasetImportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatasetImportJobOperationRequest` | `src/AmazonForecast/Requests/DatasetImportJob/DeleteDatasetImportJobOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceDatasetImportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceDatasetImportJobApi.cs` |
| `DeleteDatasetImportJobError` | `src/AmazonForecast/Errors/DeleteDatasetImportJobError.cs` |

### DescribeDatasetImportJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDatasetImportJob(DescribeDatasetImportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDatasetImportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDatasetImportJobOperationRequest` | `src/AmazonForecast/Requests/DatasetImportJob/DescribeDatasetImportJobOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceDatasetImportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceDatasetImportJobApi.cs` |
| `DescribeDatasetImportJobError` | `src/AmazonForecast/Errors/DescribeDatasetImportJobError.cs` |

### ListDatasetImportJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListDatasetImportJobs(ListDatasetImportJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDatasetImportJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDatasetImportJobsOperationRequest` | `src/AmazonForecast/Requests/DatasetImportJob/ListDatasetImportJobsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceDatasetImportJobApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceDatasetImportJobApi.cs` |
| `ListDatasetImportJobsError` | `src/AmazonForecast/Errors/ListDatasetImportJobsError.cs` |

