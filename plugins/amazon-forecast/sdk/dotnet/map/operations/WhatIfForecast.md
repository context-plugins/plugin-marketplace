<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfForecast — operations

Accessor: `client.WhatIfForecast` · Source: `src/AmazonForecast/Api/WhatIfForecast.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWhatIfForecast

- **Auth**: `options.Sigv4`
- **Signature**: `CreateWhatIfForecast(CreateWhatIfForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateWhatIfForecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWhatIfForecastOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecast/CreateWhatIfForecastOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceWhatIfForecastApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceWhatIfForecastApi.cs` |
| `CreateWhatIfForecastError` | `src/AmazonForecast/Errors/CreateWhatIfForecastError.cs` |

### DeleteWhatIfForecast

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteWhatIfForecast(DeleteWhatIfForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWhatIfForecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWhatIfForecastOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecast/DeleteWhatIfForecastOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceWhatIfForecastApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceWhatIfForecastApi.cs` |
| `DeleteWhatIfForecastError` | `src/AmazonForecast/Errors/DeleteWhatIfForecastError.cs` |

### DescribeWhatIfForecast

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeWhatIfForecast(DescribeWhatIfForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeWhatIfForecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeWhatIfForecastOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecast/DescribeWhatIfForecastOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceWhatIfForecastApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceWhatIfForecastApi.cs` |
| `DescribeWhatIfForecastError` | `src/AmazonForecast/Errors/DescribeWhatIfForecastError.cs` |

### ListWhatIfForecasts

- **Auth**: `options.Sigv4`
- **Signature**: `ListWhatIfForecasts(ListWhatIfForecastsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListWhatIfForecastsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWhatIfForecastsOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecast/ListWhatIfForecastsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceWhatIfForecastApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceWhatIfForecastApi.cs` |
| `ListWhatIfForecastsError` | `src/AmazonForecast/Errors/ListWhatIfForecastsError.cs` |

