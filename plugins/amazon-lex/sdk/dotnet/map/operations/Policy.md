<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policy — operations

Accessor: `client.Policy` · Source: `src/AmazonLex/Api/Policy.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateResourcePolicy

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateResourcePolicy(CreateResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `CreateResourcePolicyResponse`
- **Error**: `ApiException<CreateResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateResourcePolicyOperationRequest` | `src/AmazonLex/Requests/Policy/CreateResourcePolicyOperationRequest.cs` |
| `CreateResourcePolicyRequest` | `src/AmazonLex/Models/CreateResourcePolicyRequest.cs` |
| `CreateResourcePolicyResponse` | `src/AmazonLex/Models/CreateResourcePolicyResponse.cs` |
| `CreateResourcePolicyError` | `src/AmazonLex/Errors/CreateResourcePolicyError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateResourcePolicyStatement

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateResourcePolicyStatement(CreateResourcePolicyStatementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `CreateResourcePolicyStatementResponse`
- **Error**: `ApiException<CreateResourcePolicyStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateResourcePolicyStatementOperationRequest` | `src/AmazonLex/Requests/Policy/CreateResourcePolicyStatementOperationRequest.cs` |
| `CreateResourcePolicyStatementRequest` | `src/AmazonLex/Models/CreateResourcePolicyStatementRequest.cs` |
| `CreateResourcePolicyStatementResponse` | `src/AmazonLex/Models/CreateResourcePolicyStatementResponse.cs` |
| `CreateResourcePolicyStatementError` | `src/AmazonLex/Errors/CreateResourcePolicyStatementError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteResourcePolicy

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `DeleteResourcePolicyResponse`
- **Error**: `ApiException<DeleteResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyOperationRequest` | `src/AmazonLex/Requests/Policy/DeleteResourcePolicyOperationRequest.cs` |
| `DeleteResourcePolicyRequest` | `src/AmazonLex/Models/DeleteResourcePolicyRequest.cs` |
| `DeleteResourcePolicyResponse` | `src/AmazonLex/Models/DeleteResourcePolicyResponse.cs` |
| `DeleteResourcePolicyError` | `src/AmazonLex/Errors/DeleteResourcePolicyError.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteResourcePolicyStatement

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResourcePolicyStatement(DeleteResourcePolicyStatementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`, `StatementId`
- **Returns**: `DeleteResourcePolicyStatementResponse`
- **Error**: `ApiException<DeleteResourcePolicyStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyStatementOperationRequest` | `src/AmazonLex/Requests/Policy/DeleteResourcePolicyStatementOperationRequest.cs` |
| `DeleteResourcePolicyStatementRequest` | `src/AmazonLex/Models/DeleteResourcePolicyStatementRequest.cs` |
| `DeleteResourcePolicyStatementResponse` | `src/AmazonLex/Models/DeleteResourcePolicyStatementResponse.cs` |
| `DeleteResourcePolicyStatementError` | `src/AmazonLex/Errors/DeleteResourcePolicyStatementError.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeResourcePolicy

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeResourcePolicy(DescribeResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `DescribeResourcePolicyResponse`
- **Error**: `ApiException<DescribeResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeResourcePolicyOperationRequest` | `src/AmazonLex/Requests/Policy/DescribeResourcePolicyOperationRequest.cs` |
| `DescribeResourcePolicyResponse` | `src/AmazonLex/Models/DescribeResourcePolicyResponse.cs` |
| `DescribeResourcePolicyError` | `src/AmazonLex/Errors/DescribeResourcePolicyError.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateResourcePolicy

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateResourcePolicy(UpdateResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `UpdateResourcePolicyResponse`
- **Error**: `ApiException<UpdateResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateResourcePolicyOperationRequest` | `src/AmazonLex/Requests/Policy/UpdateResourcePolicyOperationRequest.cs` |
| `UpdateResourcePolicyRequest` | `src/AmazonLex/Models/UpdateResourcePolicyRequest.cs` |
| `UpdateResourcePolicyResponse` | `src/AmazonLex/Models/UpdateResourcePolicyResponse.cs` |
| `UpdateResourcePolicyError` | `src/AmazonLex/Errors/UpdateResourcePolicyError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

