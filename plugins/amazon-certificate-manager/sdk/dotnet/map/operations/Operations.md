<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AwsCertificateManager/Api/Operations.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountConfiguration

- **Auth**: `options.Sigv4`
- **Signature**: `GetAccountConfiguration(GetAccountConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAccountConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountConfigurationRequest` | `src/AwsCertificateManager/Requests/Operations/GetAccountConfigurationRequest.cs` |
| `XAmzTarget3AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget3AwsCertificateManagerOperationsApi.cs` |
| `GetAccountConfigurationError` | `src/AwsCertificateManager/Errors/GetAccountConfigurationError.cs` |

### GetAcmeExternalAccountBindingCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `GetAcmeExternalAccountBindingCredentials(GetAcmeExternalAccountBindingCredentialsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAcmeExternalAccountBindingCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAcmeExternalAccountBindingCredentialsOperationRequest` | `src/AwsCertificateManager/Requests/Operations/GetAcmeExternalAccountBindingCredentialsOperationRequest.cs` |
| `XAmzTarget5AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget5AwsCertificateManagerOperationsApi.cs` |
| `GetAcmeExternalAccountBindingCredentialsError` | `src/AwsCertificateManager/Errors/GetAcmeExternalAccountBindingCredentialsError.cs` |

### ListCertificateDomainValidations

- **Auth**: `options.Sigv4`
- **Signature**: `ListCertificateDomainValidations(ListCertificateDomainValidationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCertificateDomainValidationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCertificateDomainValidationsOperationRequest` | `src/AwsCertificateManager/Requests/Operations/ListCertificateDomainValidationsOperationRequest.cs` |
| `XAmzTarget6AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget6AwsCertificateManagerOperationsApi.cs` |
| `ListCertificateDomainValidationsError` | `src/AwsCertificateManager/Errors/ListCertificateDomainValidationsError.cs` |

### PutAccountConfiguration

- **Auth**: `options.Sigv4`
- **Signature**: `PutAccountConfiguration(PutAccountConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutAccountConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutAccountConfigurationOperationRequest` | `src/AwsCertificateManager/Requests/Operations/PutAccountConfigurationOperationRequest.cs` |
| `XAmzTarget4AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget4AwsCertificateManagerOperationsApi.cs` |
| `PutAccountConfigurationError` | `src/AwsCertificateManager/Errors/PutAccountConfigurationError.cs` |

### RenewCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `RenewCertificate(RenewCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RenewCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenewCertificateOperationRequest` | `src/AwsCertificateManager/Requests/Operations/RenewCertificateOperationRequest.cs` |
| `XAmzTargetAwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTargetAwsCertificateManagerOperationsApi.cs` |
| `RenewCertificateError` | `src/AwsCertificateManager/Errors/RenewCertificateError.cs` |

### RequestCertificate2

- **Auth**: `options.Sigv4`
- **Signature**: `RequestCertificate2(RequestCertificate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RequestCertificate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RequestCertificate2Request` | `src/AwsCertificateManager/Requests/Operations/RequestCertificate2Request.cs` |
| `XAmzTarget1AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1AwsCertificateManagerOperationsApi.cs` |
| `RequestCertificate2Error` | `src/AwsCertificateManager/Errors/RequestCertificate2Error.cs` |

### ResendValidationEmail

- **Auth**: `options.Sigv4`
- **Signature**: `ResendValidationEmail(ResendValidationEmailOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ResendValidationEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResendValidationEmailOperationRequest` | `src/AwsCertificateManager/Requests/Operations/ResendValidationEmailOperationRequest.cs` |
| `XAmzTarget2AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2AwsCertificateManagerOperationsApi.cs` |
| `ResendValidationEmailError` | `src/AwsCertificateManager/Errors/ResendValidationEmailError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AwsCertificateManager/Requests/Operations/TagResourceOperationRequest.cs` |
| `XAmzTarget7AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget7AwsCertificateManagerOperationsApi.cs` |
| `TagResourceError` | `src/AwsCertificateManager/Errors/TagResourceError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AwsCertificateManager/Requests/Operations/UntagResourceOperationRequest.cs` |
| `XAmzTarget8AwsCertificateManagerOperationsApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget8AwsCertificateManagerOperationsApi.cs` |
| `UntagResourceError` | `src/AwsCertificateManager/Errors/UntagResourceError.cs` |

### UpdateCertificateOptions

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateCertificateOptions(UpdateCertificateOptionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateCertificateOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCertificateOptionsOperationRequest` | `src/AwsCertificateManager/Requests/Operations/UpdateCertificateOptionsOperationRequest.cs` |
| `XAmzTarget9` | `src/AwsCertificateManager/Models/Enums/XAmzTarget9.cs` |
| `UpdateCertificateOptionsError` | `src/AwsCertificateManager/Errors/UpdateCertificateOptionsError.cs` |

