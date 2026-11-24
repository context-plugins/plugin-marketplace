<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeEndpointApi — operations

Accessor: `client.AcmeEndpointApi` · Source: `src/AwsCertificateManager/Api/AcmeEndpointApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAcmeEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `CreateAcmeEndpoint(CreateAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateAcmeEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAcmeEndpointOperationRequest` | `src/AwsCertificateManager/Requests/AcmeEndpointApi/CreateAcmeEndpointOperationRequest.cs` |
| `XAmzTargetAwsCertificateManagerAcmeEndpointApi` | `src/AwsCertificateManager/Models/Enums/XAmzTargetAwsCertificateManagerAcmeEndpointApi.cs` |
| `CreateAcmeEndpointError` | `src/AwsCertificateManager/Errors/CreateAcmeEndpointError.cs` |

### DeleteAcmeEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteAcmeEndpoint(DeleteAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAcmeEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAcmeEndpointOperationRequest` | `src/AwsCertificateManager/Requests/AcmeEndpointApi/DeleteAcmeEndpointOperationRequest.cs` |
| `XAmzTarget1AwsCertificateManagerAcmeEndpointApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1AwsCertificateManagerAcmeEndpointApi.cs` |
| `DeleteAcmeEndpointError` | `src/AwsCertificateManager/Errors/DeleteAcmeEndpointError.cs` |

### DescribeAcmeEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAcmeEndpoint(DescribeAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeAcmeEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAcmeEndpointOperationRequest` | `src/AwsCertificateManager/Requests/AcmeEndpointApi/DescribeAcmeEndpointOperationRequest.cs` |
| `XAmzTarget2AwsCertificateManagerAcmeEndpointApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2AwsCertificateManagerAcmeEndpointApi.cs` |
| `DescribeAcmeEndpointError` | `src/AwsCertificateManager/Errors/DescribeAcmeEndpointError.cs` |

### ListAcmeEndpoints

- **Auth**: `options.Sigv4`
- **Signature**: `ListAcmeEndpoints(ListAcmeEndpointsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListAcmeEndpointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAcmeEndpointsOperationRequest` | `src/AwsCertificateManager/Requests/AcmeEndpointApi/ListAcmeEndpointsOperationRequest.cs` |
| `XAmzTarget3AwsCertificateManagerAcmeEndpointApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget3AwsCertificateManagerAcmeEndpointApi.cs` |
| `ListAcmeEndpointsError` | `src/AwsCertificateManager/Errors/ListAcmeEndpointsError.cs` |

### UpdateAcmeEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateAcmeEndpoint(UpdateAcmeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateAcmeEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAcmeEndpointOperationRequest` | `src/AwsCertificateManager/Requests/AcmeEndpointApi/UpdateAcmeEndpointOperationRequest.cs` |
| `XAmzTarget4AwsCertificateManagerAcmeEndpointApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget4AwsCertificateManagerAcmeEndpointApi.cs` |
| `UpdateAcmeEndpointError` | `src/AwsCertificateManager/Errors/UpdateAcmeEndpointError.cs` |

