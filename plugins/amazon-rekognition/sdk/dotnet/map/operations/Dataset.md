<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dataset — operations

Accessor: `client.Dataset` · Source: `src/AmazonRekognition/Api/Dataset.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDataset

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDataset(CreateDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDatasetOperationRequest` | `src/AmazonRekognition/Requests/Dataset/CreateDatasetOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionDatasetApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionDatasetApi.cs` |
| `CreateDatasetError` | `src/AmazonRekognition/Errors/CreateDatasetError.cs` |

### DeleteDataset

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDataset(DeleteDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatasetOperationRequest` | `src/AmazonRekognition/Requests/Dataset/DeleteDatasetOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionDatasetApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionDatasetApi.cs` |
| `DeleteDatasetError` | `src/AmazonRekognition/Errors/DeleteDatasetError.cs` |

### DescribeDataset

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDataset(DescribeDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDatasetOperationRequest` | `src/AmazonRekognition/Requests/Dataset/DescribeDatasetOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionDatasetApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionDatasetApi.cs` |
| `DescribeDatasetError` | `src/AmazonRekognition/Errors/DescribeDatasetError.cs` |

