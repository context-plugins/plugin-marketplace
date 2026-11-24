<!-- Generated file — do not edit; regenerated with the SDK. -->

# Explainability — operations

Accessor: `client.Explainability` · Source: `src/AmazonForecast/Api/Explainability.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExplainability

- **Auth**: `options.Sigv4`
- **Signature**: `CreateExplainability(CreateExplainabilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateExplainabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateExplainabilityOperationRequest` | `src/AmazonForecast/Requests/Explainability/CreateExplainabilityOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceExplainabilityApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceExplainabilityApi.cs` |
| `CreateExplainabilityError` | `src/AmazonForecast/Errors/CreateExplainabilityError.cs` |

### DeleteExplainability

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteExplainability(DeleteExplainabilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteExplainabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteExplainabilityOperationRequest` | `src/AmazonForecast/Requests/Explainability/DeleteExplainabilityOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceExplainabilityApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceExplainabilityApi.cs` |
| `DeleteExplainabilityError` | `src/AmazonForecast/Errors/DeleteExplainabilityError.cs` |

### DescribeExplainability

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeExplainability(DescribeExplainabilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeExplainabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeExplainabilityOperationRequest` | `src/AmazonForecast/Requests/Explainability/DescribeExplainabilityOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceExplainabilityApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceExplainabilityApi.cs` |
| `DescribeExplainabilityError` | `src/AmazonForecast/Errors/DescribeExplainabilityError.cs` |

### ListExplainabilities

- **Auth**: `options.Sigv4`
- **Signature**: `ListExplainabilities(ListExplainabilitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListExplainabilitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExplainabilitiesOperationRequest` | `src/AmazonForecast/Requests/Explainability/ListExplainabilitiesOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceExplainabilityApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceExplainabilityApi.cs` |
| `ListExplainabilitiesError` | `src/AmazonForecast/Errors/ListExplainabilitiesError.cs` |

