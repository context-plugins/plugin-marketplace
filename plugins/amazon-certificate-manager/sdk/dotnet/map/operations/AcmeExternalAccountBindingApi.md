<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeExternalAccountBindingApi — operations

Accessor: `client.AcmeExternalAccountBindingApi` · Source: `src/AwsCertificateManager/Api/AcmeExternalAccountBindingApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAcmeExternalAccountBinding

- **Auth**: `options.Sigv4`
- **Signature**: `CreateAcmeExternalAccountBinding(CreateAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateAcmeExternalAccountBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAcmeExternalAccountBindingOperationRequest` | `src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/CreateAcmeExternalAccountBindingOperationRequest.cs` |
| `XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi` | `src/AwsCertificateManager/Models/Enums/XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi.cs` |
| `CreateAcmeExternalAccountBindingError` | `src/AwsCertificateManager/Errors/CreateAcmeExternalAccountBindingError.cs` |

### DeleteAcmeExternalAccountBinding

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteAcmeExternalAccountBinding(DeleteAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAcmeExternalAccountBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAcmeExternalAccountBindingOperationRequest` | `src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/DeleteAcmeExternalAccountBindingOperationRequest.cs` |
| `XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi.cs` |
| `DeleteAcmeExternalAccountBindingError` | `src/AwsCertificateManager/Errors/DeleteAcmeExternalAccountBindingError.cs` |

### DescribeAcmeExternalAccountBinding

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAcmeExternalAccountBinding(DescribeAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeAcmeExternalAccountBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAcmeExternalAccountBindingOperationRequest` | `src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/DescribeAcmeExternalAccountBindingOperationRequest.cs` |
| `XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi.cs` |
| `DescribeAcmeExternalAccountBindingError` | `src/AwsCertificateManager/Errors/DescribeAcmeExternalAccountBindingError.cs` |

### ListAcmeExternalAccountBindings

- **Auth**: `options.Sigv4`
- **Signature**: `ListAcmeExternalAccountBindings(ListAcmeExternalAccountBindingsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListAcmeExternalAccountBindingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAcmeExternalAccountBindingsOperationRequest` | `src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/ListAcmeExternalAccountBindingsOperationRequest.cs` |
| `XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi.cs` |
| `ListAcmeExternalAccountBindingsError` | `src/AwsCertificateManager/Errors/ListAcmeExternalAccountBindingsError.cs` |

### RevokeAcmeExternalAccountBinding

- **Auth**: `options.Sigv4`
- **Signature**: `RevokeAcmeExternalAccountBinding(RevokeAcmeExternalAccountBindingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RevokeAcmeExternalAccountBindingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeAcmeExternalAccountBindingOperationRequest` | `src/AwsCertificateManager/Requests/AcmeExternalAccountBindingApi/RevokeAcmeExternalAccountBindingOperationRequest.cs` |
| `XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi.cs` |
| `RevokeAcmeExternalAccountBindingError` | `src/AwsCertificateManager/Errors/RevokeAcmeExternalAccountBindingError.cs` |

