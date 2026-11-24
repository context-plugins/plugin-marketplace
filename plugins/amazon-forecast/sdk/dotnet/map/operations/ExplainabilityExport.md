<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExplainabilityExport — operations

Accessor: `client.ExplainabilityExport` · Source: `src/AmazonForecast/Api/ExplainabilityExport.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExplainabilityExport

- **Auth**: `options.Sigv4`
- **Signature**: `CreateExplainabilityExport(CreateExplainabilityExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateExplainabilityExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateExplainabilityExportOperationRequest` | `src/AmazonForecast/Requests/ExplainabilityExport/CreateExplainabilityExportOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceExplainabilityExportApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceExplainabilityExportApi.cs` |
| `CreateExplainabilityExportError` | `src/AmazonForecast/Errors/CreateExplainabilityExportError.cs` |

### DeleteExplainabilityExport

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteExplainabilityExport(DeleteExplainabilityExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteExplainabilityExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteExplainabilityExportOperationRequest` | `src/AmazonForecast/Requests/ExplainabilityExport/DeleteExplainabilityExportOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceExplainabilityExportApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceExplainabilityExportApi.cs` |
| `DeleteExplainabilityExportError` | `src/AmazonForecast/Errors/DeleteExplainabilityExportError.cs` |

### DescribeExplainabilityExport

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeExplainabilityExport(DescribeExplainabilityExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeExplainabilityExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeExplainabilityExportOperationRequest` | `src/AmazonForecast/Requests/ExplainabilityExport/DescribeExplainabilityExportOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceExplainabilityExportApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceExplainabilityExportApi.cs` |
| `DescribeExplainabilityExportError` | `src/AmazonForecast/Errors/DescribeExplainabilityExportError.cs` |

### ListExplainabilityExports

- **Auth**: `options.Sigv4`
- **Signature**: `ListExplainabilityExports(ListExplainabilityExportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListExplainabilityExportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExplainabilityExportsOperationRequest` | `src/AmazonForecast/Requests/ExplainabilityExport/ListExplainabilityExportsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceExplainabilityExportApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceExplainabilityExportApi.cs` |
| `ListExplainabilityExportsError` | `src/AmazonForecast/Errors/ListExplainabilityExportsError.cs` |

