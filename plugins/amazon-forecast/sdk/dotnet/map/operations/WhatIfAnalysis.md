<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfAnalysis — operations

Accessor: `client.WhatIfAnalysis` · Source: `src/AmazonForecast/Api/WhatIfAnalysis.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWhatIfAnalysis

- **Auth**: `options.Sigv4`
- **Signature**: `CreateWhatIfAnalysis(CreateWhatIfAnalysisOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateWhatIfAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWhatIfAnalysisOperationRequest` | `src/AmazonForecast/Requests/WhatIfAnalysis/CreateWhatIfAnalysisOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceWhatIfAnalysisApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceWhatIfAnalysisApi.cs` |
| `CreateWhatIfAnalysisError` | `src/AmazonForecast/Errors/CreateWhatIfAnalysisError.cs` |

### DeleteWhatIfAnalysis

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteWhatIfAnalysis(DeleteWhatIfAnalysisOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWhatIfAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWhatIfAnalysisOperationRequest` | `src/AmazonForecast/Requests/WhatIfAnalysis/DeleteWhatIfAnalysisOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi.cs` |
| `DeleteWhatIfAnalysisError` | `src/AmazonForecast/Errors/DeleteWhatIfAnalysisError.cs` |

### DescribeWhatIfAnalysis

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeWhatIfAnalysis(DescribeWhatIfAnalysisOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeWhatIfAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeWhatIfAnalysisOperationRequest` | `src/AmazonForecast/Requests/WhatIfAnalysis/DescribeWhatIfAnalysisOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi.cs` |
| `DescribeWhatIfAnalysisError` | `src/AmazonForecast/Errors/DescribeWhatIfAnalysisError.cs` |

