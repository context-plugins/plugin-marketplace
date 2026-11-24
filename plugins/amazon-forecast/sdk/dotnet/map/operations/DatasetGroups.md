<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetGroups — operations

Accessor: `client.DatasetGroups` · Source: `src/AmazonForecast/Api/DatasetGroups.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDatasetGroup

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDatasetGroup(CreateDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDatasetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDatasetGroupOperationRequest` | `src/AmazonForecast/Requests/DatasetGroups/CreateDatasetGroupOperationRequest.cs` |
| `XAmzTarget` | `src/AmazonForecast/Models/Enums/XAmzTarget.cs` |
| `CreateDatasetGroupError` | `src/AmazonForecast/Errors/CreateDatasetGroupError.cs` |

### DeleteDatasetGroup

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDatasetGroup(DeleteDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDatasetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatasetGroupOperationRequest` | `src/AmazonForecast/Requests/DatasetGroups/DeleteDatasetGroupOperationRequest.cs` |
| `XAmzTarget1` | `src/AmazonForecast/Models/Enums/XAmzTarget1.cs` |
| `DeleteDatasetGroupError` | `src/AmazonForecast/Errors/DeleteDatasetGroupError.cs` |

### DescribeDatasetGroup

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDatasetGroup(DescribeDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDatasetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDatasetGroupOperationRequest` | `src/AmazonForecast/Requests/DatasetGroups/DescribeDatasetGroupOperationRequest.cs` |
| `XAmzTarget2` | `src/AmazonForecast/Models/Enums/XAmzTarget2.cs` |
| `DescribeDatasetGroupError` | `src/AmazonForecast/Errors/DescribeDatasetGroupError.cs` |

### ListDatasetGroups

- **Auth**: `options.Sigv4`
- **Signature**: `ListDatasetGroups(ListDatasetGroupsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDatasetGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDatasetGroupsOperationRequest` | `src/AmazonForecast/Requests/DatasetGroups/ListDatasetGroupsOperationRequest.cs` |
| `XAmzTarget3` | `src/AmazonForecast/Models/Enums/XAmzTarget3.cs` |
| `ListDatasetGroupsError` | `src/AmazonForecast/Errors/ListDatasetGroupsError.cs` |

### UpdateDatasetGroup

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateDatasetGroup(UpdateDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateDatasetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDatasetGroupOperationRequest` | `src/AmazonForecast/Requests/DatasetGroups/UpdateDatasetGroupOperationRequest.cs` |
| `XAmzTarget4` | `src/AmazonForecast/Models/Enums/XAmzTarget4.cs` |
| `UpdateDatasetGroupError` | `src/AmazonForecast/Errors/UpdateDatasetGroupError.cs` |

