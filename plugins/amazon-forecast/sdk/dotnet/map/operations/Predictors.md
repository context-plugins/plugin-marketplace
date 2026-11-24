<!-- Generated file — do not edit; regenerated with the SDK. -->

# Predictors — operations

Accessor: `client.Predictors` · Source: `src/AmazonForecast/Api/Predictors.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePredictor

- **Auth**: `options.Sigv4`
- **Signature**: `CreatePredictor(CreatePredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePredictorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePredictorOperationRequest` | `src/AmazonForecast/Requests/Predictors/CreatePredictorOperationRequest.cs` |
| `XAmzTargetAmazonForecastServicePredictorsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServicePredictorsApi.cs` |
| `CreatePredictorError` | `src/AmazonForecast/Errors/CreatePredictorError.cs` |

### DeletePredictor

- **Auth**: `options.Sigv4`
- **Signature**: `DeletePredictor(DeletePredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePredictorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePredictorOperationRequest` | `src/AmazonForecast/Requests/Predictors/DeletePredictorOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServicePredictorsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServicePredictorsApi.cs` |
| `DeletePredictorError` | `src/AmazonForecast/Errors/DeletePredictorError.cs` |

### DescribePredictor

- **Auth**: `options.Sigv4`
- **Signature**: `DescribePredictor(DescribePredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribePredictorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribePredictorOperationRequest` | `src/AmazonForecast/Requests/Predictors/DescribePredictorOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServicePredictorsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServicePredictorsApi.cs` |
| `DescribePredictorError` | `src/AmazonForecast/Errors/DescribePredictorError.cs` |

### ListPredictors

- **Auth**: `options.Sigv4`
- **Signature**: `ListPredictors(ListPredictorsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListPredictorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPredictorsOperationRequest` | `src/AmazonForecast/Requests/Predictors/ListPredictorsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServicePredictorsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServicePredictorsApi.cs` |
| `ListPredictorsError` | `src/AmazonForecast/Errors/ListPredictorsError.cs` |

