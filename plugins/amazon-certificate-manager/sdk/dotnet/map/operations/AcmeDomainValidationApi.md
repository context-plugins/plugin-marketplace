<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeDomainValidationApi — operations

Accessor: `client.AcmeDomainValidationApi` · Source: `src/AwsCertificateManager/Api/AcmeDomainValidationApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAcmeDomainValidation

- **Auth**: `options.Sigv4`
- **Signature**: `CreateAcmeDomainValidation(CreateAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateAcmeDomainValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAcmeDomainValidationOperationRequest` | `src/AwsCertificateManager/Requests/AcmeDomainValidationApi/CreateAcmeDomainValidationOperationRequest.cs` |
| `XAmzTargetAwsCertificateManagerAcmeDomainValidationApi` | `src/AwsCertificateManager/Models/Enums/XAmzTargetAwsCertificateManagerAcmeDomainValidationApi.cs` |
| `CreateAcmeDomainValidationError` | `src/AwsCertificateManager/Errors/CreateAcmeDomainValidationError.cs` |

### DeleteAcmeDomainValidation

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteAcmeDomainValidation(DeleteAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAcmeDomainValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAcmeDomainValidationOperationRequest` | `src/AwsCertificateManager/Requests/AcmeDomainValidationApi/DeleteAcmeDomainValidationOperationRequest.cs` |
| `XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi.cs` |
| `DeleteAcmeDomainValidationError` | `src/AwsCertificateManager/Errors/DeleteAcmeDomainValidationError.cs` |

### DescribeAcmeDomainValidation

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAcmeDomainValidation(DescribeAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeAcmeDomainValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAcmeDomainValidationOperationRequest` | `src/AwsCertificateManager/Requests/AcmeDomainValidationApi/DescribeAcmeDomainValidationOperationRequest.cs` |
| `XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi.cs` |
| `DescribeAcmeDomainValidationError` | `src/AwsCertificateManager/Errors/DescribeAcmeDomainValidationError.cs` |

### ListAcmeDomainValidations

- **Auth**: `options.Sigv4`
- **Signature**: `ListAcmeDomainValidations(ListAcmeDomainValidationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListAcmeDomainValidationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAcmeDomainValidationsOperationRequest` | `src/AwsCertificateManager/Requests/AcmeDomainValidationApi/ListAcmeDomainValidationsOperationRequest.cs` |
| `XAmzTarget3` | `src/AwsCertificateManager/Models/Enums/XAmzTarget3.cs` |
| `ListAcmeDomainValidationsError` | `src/AwsCertificateManager/Errors/ListAcmeDomainValidationsError.cs` |

### UpdateAcmeDomainValidation

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateAcmeDomainValidation(UpdateAcmeDomainValidationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateAcmeDomainValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAcmeDomainValidationOperationRequest` | `src/AwsCertificateManager/Requests/AcmeDomainValidationApi/UpdateAcmeDomainValidationOperationRequest.cs` |
| `XAmzTarget4` | `src/AwsCertificateManager/Models/Enums/XAmzTarget4.cs` |
| `UpdateAcmeDomainValidationError` | `src/AwsCertificateManager/Errors/UpdateAcmeDomainValidationError.cs` |

