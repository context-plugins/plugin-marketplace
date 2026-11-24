<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonForecast/Api/Operations.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAutoPredictor

- **Auth**: `options.Sigv4`
- **Signature**: `CreateAutoPredictor(CreateAutoPredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateAutoPredictorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAutoPredictorOperationRequest` | `src/AmazonForecast/Requests/Operations/CreateAutoPredictorOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceOperationsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceOperationsApi.cs` |
| `CreateAutoPredictorError` | `src/AmazonForecast/Errors/CreateAutoPredictorError.cs` |

### DeleteResourceTree

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResourceTree(DeleteResourceTreeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteResourceTreeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourceTreeOperationRequest` | `src/AmazonForecast/Requests/Operations/DeleteResourceTreeOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceOperationsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceOperationsApi.cs` |
| `DeleteResourceTreeError` | `src/AmazonForecast/Errors/DeleteResourceTreeError.cs` |

### DescribeAutoPredictor

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAutoPredictor(DescribeAutoPredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeAutoPredictorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAutoPredictorOperationRequest` | `src/AmazonForecast/Requests/Operations/DescribeAutoPredictorOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceOperationsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceOperationsApi.cs` |
| `DescribeAutoPredictorError` | `src/AmazonForecast/Errors/DescribeAutoPredictorError.cs` |

### GetAccuracyMetrics

- **Auth**: `options.Sigv4`
- **Signature**: `GetAccuracyMetrics(GetAccuracyMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAccuracyMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccuracyMetricsOperationRequest` | `src/AmazonForecast/Requests/Operations/GetAccuracyMetricsOperationRequest.cs` |
| `XAmzTarget4AmazonForecastServiceOperationsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget4AmazonForecastServiceOperationsApi.cs` |
| `GetAccuracyMetricsError` | `src/AmazonForecast/Errors/GetAccuracyMetricsError.cs` |

### ListMonitorEvaluations

- **Auth**: `options.Sigv4`
- **Signature**: `ListMonitorEvaluations(ListMonitorEvaluationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMonitorEvaluationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorEvaluationsOperationRequest` | `src/AmazonForecast/Requests/Operations/ListMonitorEvaluationsOperationRequest.cs` |
| `XAmzTarget5` | `src/AmazonForecast/Models/Enums/XAmzTarget5.cs` |
| `ListMonitorEvaluationsError` | `src/AmazonForecast/Errors/ListMonitorEvaluationsError.cs` |

### ListWhatIfAnalyses

- **Auth**: `options.Sigv4`
- **Signature**: `ListWhatIfAnalyses(ListWhatIfAnalysesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListWhatIfAnalysesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWhatIfAnalysesOperationRequest` | `src/AmazonForecast/Requests/Operations/ListWhatIfAnalysesOperationRequest.cs` |
| `XAmzTarget6` | `src/AmazonForecast/Models/Enums/XAmzTarget6.cs` |
| `ListWhatIfAnalysesError` | `src/AmazonForecast/Errors/ListWhatIfAnalysesError.cs` |

### ResumeResource

- **Auth**: `options.Sigv4`
- **Signature**: `ResumeResource(ResumeResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ResumeResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResumeResourceOperationRequest` | `src/AmazonForecast/Requests/Operations/ResumeResourceOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceOperationsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceOperationsApi.cs` |
| `ResumeResourceError` | `src/AmazonForecast/Errors/ResumeResourceError.cs` |

