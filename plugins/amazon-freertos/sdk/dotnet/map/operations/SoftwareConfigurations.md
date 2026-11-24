<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareConfigurations — operations

Accessor: `client.SoftwareConfigurations` · Source: `src/AmazonFreeRtos/Api/SoftwareConfigurations.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSoftwareConfiguration

- **Auth**: `options.AwsSigV4`
- **Signature**: `CreateSoftwareConfiguration(CreateSoftwareConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SoftwareConfiguration`
- **Error**: `ApiException<CreateSoftwareConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSoftwareConfigurationOperationRequest` | `src/AmazonFreeRtos/Requests/SoftwareConfigurations/CreateSoftwareConfigurationOperationRequest.cs` |
| `CreateSoftwareConfigurationRequest` | `src/AmazonFreeRtos/Models/CreateSoftwareConfigurationRequest.cs` |
| `SoftwareConfiguration` | `src/AmazonFreeRtos/Models/SoftwareConfiguration.cs` |
| `CreateSoftwareConfigurationError` | `src/AmazonFreeRtos/Errors/CreateSoftwareConfigurationError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### DeleteSoftwareConfiguration

- **Auth**: `options.AwsSigV4`
- **Signature**: `DeleteSoftwareConfiguration(DeleteSoftwareConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConfigId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSoftwareConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSoftwareConfigurationRequest` | `src/AmazonFreeRtos/Requests/SoftwareConfigurations/DeleteSoftwareConfigurationRequest.cs` |
| `DeleteSoftwareConfigurationError` | `src/AmazonFreeRtos/Errors/DeleteSoftwareConfigurationError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### DescribeSoftwareConfiguration

- **Auth**: `options.AwsSigV4`
- **Signature**: `DescribeSoftwareConfiguration(DescribeSoftwareConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConfigId`
- **Returns**: `SoftwareConfiguration`
- **Error**: `ApiException<DescribeSoftwareConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSoftwareConfigurationRequest` | `src/AmazonFreeRtos/Requests/SoftwareConfigurations/DescribeSoftwareConfigurationRequest.cs` |
| `SoftwareConfiguration` | `src/AmazonFreeRtos/Models/SoftwareConfiguration.cs` |
| `DescribeSoftwareConfigurationError` | `src/AmazonFreeRtos/Errors/DescribeSoftwareConfigurationError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### ListSoftwareConfigurations

- **Auth**: `options.AwsSigV4`
- **Signature**: `ListSoftwareConfigurations(ListSoftwareConfigurationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `nextToken` ← `NextToken`
- **Returns**: `SoftwareConfigurationRecordsResponse`
- **Error**: `ApiException<ListSoftwareConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSoftwareConfigurationsRequest` | `src/AmazonFreeRtos/Requests/SoftwareConfigurations/ListSoftwareConfigurationsRequest.cs` |
| `SoftwareConfigurationRecordsResponse` | `src/AmazonFreeRtos/Models/SoftwareConfigurationRecordsResponse.cs` |
| `ListSoftwareConfigurationsError` | `src/AmazonFreeRtos/Errors/ListSoftwareConfigurationsError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### UpdateSoftwareConfiguration

- **Auth**: `options.AwsSigV4`
- **Signature**: `UpdateSoftwareConfiguration(UpdateSoftwareConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConfigId`, `Body`
- **Returns**: `SoftwareConfiguration`
- **Error**: `ApiException<UpdateSoftwareConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSoftwareConfigurationOperationRequest` | `src/AmazonFreeRtos/Requests/SoftwareConfigurations/UpdateSoftwareConfigurationOperationRequest.cs` |
| `UpdateSoftwareConfigurationRequest` | `src/AmazonFreeRtos/Models/UpdateSoftwareConfigurationRequest.cs` |
| `SoftwareConfiguration` | `src/AmazonFreeRtos/Models/SoftwareConfiguration.cs` |
| `UpdateSoftwareConfigurationError` | `src/AmazonFreeRtos/Errors/UpdateSoftwareConfigurationError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

