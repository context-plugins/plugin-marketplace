<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonStorageGatewayRestApi — operations

Accessor: `client.AmazonStorageGatewayRestApi` · Source: `src/AwsStorageGateway/Api/AmazonStorageGatewayRestApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateGateway

- **Auth**: `options.Sigv4`
- **Signature**: `ActivateGateway(ActivateGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ActivateGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateGatewayRequest` | `src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/ActivateGatewayRequest.cs` |
| `XAmzTarget` | `src/AwsStorageGateway/Models/Enums/XAmzTarget.cs` |
| `ActivateGatewayError` | `src/AwsStorageGateway/Errors/ActivateGatewayError.cs` |

### CreateNfsFileShare

- **Auth**: `options.Sigv4`
- **Signature**: `CreateNfsFileShare(CreateNfsFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateNfsFileShareError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateNfsFileShareRequest` | `src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/CreateNfsFileShareRequest.cs` |
| `XAmzTarget2` | `src/AwsStorageGateway/Models/Enums/XAmzTarget2.cs` |
| `CreateNfsFileShareError` | `src/AwsStorageGateway/Errors/CreateNfsFileShareError.cs` |

### DescribeGatewayInformation

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeGatewayInformation(DescribeGatewayInformationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeGatewayInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeGatewayInformationRequest` | `src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/DescribeGatewayInformationRequest.cs` |
| `XAmzTarget4` | `src/AwsStorageGateway/Models/Enums/XAmzTarget4.cs` |
| `DescribeGatewayInformationError` | `src/AwsStorageGateway/Errors/DescribeGatewayInformationError.cs` |

### ListGateways

- **Auth**: `options.Sigv4`
- **Signature**: `ListGateways(ListGatewaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListGatewaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGatewaysRequest` | `src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/ListGatewaysRequest.cs` |
| `XAmzTarget3` | `src/AwsStorageGateway/Models/Enums/XAmzTarget3.cs` |
| `ListGatewaysError` | `src/AwsStorageGateway/Errors/ListGatewaysError.cs` |

### ListVolumes

- **Auth**: `options.Sigv4`
- **Signature**: `ListVolumes(ListVolumesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVolumesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVolumesRequest` | `src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/ListVolumesRequest.cs` |
| `XAmzTarget1` | `src/AwsStorageGateway/Models/Enums/XAmzTarget1.cs` |
| `ListVolumesError` | `src/AwsStorageGateway/Errors/ListVolumesError.cs` |

