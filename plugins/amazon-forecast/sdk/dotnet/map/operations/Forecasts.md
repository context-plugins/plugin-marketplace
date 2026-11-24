<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forecasts — operations

Accessor: `client.Forecasts` · Source: `src/AmazonForecast/Api/Forecasts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateForecast

- **Auth**: `options.Sigv4`
- **Signature**: `CreateForecast(CreateForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateForecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateForecastOperationRequest` | `src/AmazonForecast/Requests/Forecasts/CreateForecastOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceForecastsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceForecastsApi.cs` |
| `CreateForecastError` | `src/AmazonForecast/Errors/CreateForecastError.cs` |

### DeleteForecast

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteForecast(DeleteForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteForecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteForecastOperationRequest` | `src/AmazonForecast/Requests/Forecasts/DeleteForecastOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceForecastsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceForecastsApi.cs` |
| `DeleteForecastError` | `src/AmazonForecast/Errors/DeleteForecastError.cs` |

### DescribeForecast

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeForecast(DescribeForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeForecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeForecastOperationRequest` | `src/AmazonForecast/Requests/Forecasts/DescribeForecastOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceForecastsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceForecastsApi.cs` |
| `DescribeForecastError` | `src/AmazonForecast/Errors/DescribeForecastError.cs` |

### ListForecasts

- **Auth**: `options.Sigv4`
- **Signature**: `ListForecasts(ListForecastsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListForecastsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListForecastsOperationRequest` | `src/AmazonForecast/Requests/Forecasts/ListForecastsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceForecastsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceForecastsApi.cs` |
| `ListForecastsError` | `src/AmazonForecast/Errors/ListForecastsError.cs` |

