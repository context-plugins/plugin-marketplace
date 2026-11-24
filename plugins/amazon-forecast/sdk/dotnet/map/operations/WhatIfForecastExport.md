<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfForecastExport — operations

Accessor: `client.WhatIfForecastExport` · Source: `src/AmazonForecast/Api/WhatIfForecastExport.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWhatIfForecastExport

- **Auth**: `options.Sigv4`
- **Signature**: `CreateWhatIfForecastExport(CreateWhatIfForecastExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateWhatIfForecastExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWhatIfForecastExportOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecastExport/CreateWhatIfForecastExportOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceWhatIfForecastExportApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceWhatIfForecastExportApi.cs` |
| `CreateWhatIfForecastExportError` | `src/AmazonForecast/Errors/CreateWhatIfForecastExportError.cs` |

### DeleteWhatIfForecastExport

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteWhatIfForecastExport(DeleteWhatIfForecastExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWhatIfForecastExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWhatIfForecastExportOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecastExport/DeleteWhatIfForecastExportOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi.cs` |
| `DeleteWhatIfForecastExportError` | `src/AmazonForecast/Errors/DeleteWhatIfForecastExportError.cs` |

### DescribeWhatIfForecastExport

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeWhatIfForecastExport(DescribeWhatIfForecastExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeWhatIfForecastExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeWhatIfForecastExportOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecastExport/DescribeWhatIfForecastExportOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi.cs` |
| `DescribeWhatIfForecastExportError` | `src/AmazonForecast/Errors/DescribeWhatIfForecastExportError.cs` |

### ListWhatIfForecastExports

- **Auth**: `options.Sigv4`
- **Signature**: `ListWhatIfForecastExports(ListWhatIfForecastExportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListWhatIfForecastExportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWhatIfForecastExportsOperationRequest` | `src/AmazonForecast/Requests/WhatIfForecastExport/ListWhatIfForecastExportsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi.cs` |
| `ListWhatIfForecastExportsError` | `src/AmazonForecast/Errors/ListWhatIfForecastExportsError.cs` |

