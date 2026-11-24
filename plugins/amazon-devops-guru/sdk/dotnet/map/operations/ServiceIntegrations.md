<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceIntegrations — operations

Accessor: `client.ServiceIntegrations` · Source: `src/AmazonDevOpsGuru/Api/ServiceIntegrations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeServiceIntegration

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeServiceIntegration(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeServiceIntegrationResponse`
- **Error**: `ApiException<DescribeServiceIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeServiceIntegrationResponse` | `src/AmazonDevOpsGuru/Models/DescribeServiceIntegrationResponse.cs` |
| `DescribeServiceIntegrationError` | `src/AmazonDevOpsGuru/Errors/DescribeServiceIntegrationError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### UpdateServiceIntegration

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateServiceIntegration(UpdateServiceIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<UpdateServiceIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateServiceIntegrationRequest` | `src/AmazonDevOpsGuru/Requests/ServiceIntegrations/UpdateServiceIntegrationRequest.cs` |
| `ServiceIntegrationsRequest` | `src/AmazonDevOpsGuru/Models/ServiceIntegrationsRequest.cs` |
| `UpdateServiceIntegrationError` | `src/AmazonDevOpsGuru/Errors/UpdateServiceIntegrationError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

