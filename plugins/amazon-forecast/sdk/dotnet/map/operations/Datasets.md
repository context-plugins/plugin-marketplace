<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasets — operations

Accessor: `client.Datasets` · Source: `src/AmazonForecast/Api/Datasets.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDataset

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDataset(CreateDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDatasetOperationRequest` | `src/AmazonForecast/Requests/Datasets/CreateDatasetOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceDatasetsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceDatasetsApi.cs` |
| `CreateDatasetError` | `src/AmazonForecast/Errors/CreateDatasetError.cs` |

### DeleteDataset

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDataset(DeleteDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatasetOperationRequest` | `src/AmazonForecast/Requests/Datasets/DeleteDatasetOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceDatasetsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceDatasetsApi.cs` |
| `DeleteDatasetError` | `src/AmazonForecast/Errors/DeleteDatasetError.cs` |

### DescribeDataset

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDataset(DescribeDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDatasetOperationRequest` | `src/AmazonForecast/Requests/Datasets/DescribeDatasetOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceDatasetsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceDatasetsApi.cs` |
| `DescribeDatasetError` | `src/AmazonForecast/Errors/DescribeDatasetError.cs` |

### ListDatasets

- **Auth**: `options.Sigv4`
- **Signature**: `ListDatasets(ListDatasetsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDatasetsOperationRequest` | `src/AmazonForecast/Requests/Datasets/ListDatasetsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceDatasetsApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceDatasetsApi.cs` |
| `ListDatasetsError` | `src/AmazonForecast/Errors/ListDatasetsError.cs` |

