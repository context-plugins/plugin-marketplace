<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExportJobs — operations

Accessor: `client.ExportJobs` · Source: `src/AmazonForecast/Api/ExportJobs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateForecastExportJob

- **Auth**: `options.Sigv4`
- **Signature**: `CreateForecastExportJob(CreateForecastExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateForecastExportJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateForecastExportJobOperationRequest` | `src/AmazonForecast/Requests/ExportJobs/CreateForecastExportJobOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceExportJobsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceExportJobsApi.cs` |
| `CreateForecastExportJobError` | `src/AmazonForecast/Errors/CreateForecastExportJobError.cs` |

