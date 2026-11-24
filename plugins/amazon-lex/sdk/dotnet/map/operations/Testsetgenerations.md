<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsetgenerations — operations

Accessor: `client.Testsetgenerations` · Source: `src/AmazonLex/Api/Testsetgenerations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeTestSetGeneration

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTestSetGeneration(DescribeTestSetGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetGenerationId`
- **Returns**: `DescribeTestSetGenerationResponse`
- **Error**: `ApiException<DescribeTestSetGenerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTestSetGenerationOperationRequest` | `src/AmazonLex/Requests/Testsetgenerations/DescribeTestSetGenerationOperationRequest.cs` |
| `DescribeTestSetGenerationResponse` | `src/AmazonLex/Models/DescribeTestSetGenerationResponse.cs` |
| `DescribeTestSetGenerationError` | `src/AmazonLex/Errors/DescribeTestSetGenerationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartTestSetGeneration

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartTestSetGeneration(StartTestSetGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StartTestSetGenerationResponse`
- **Error**: `ApiException<StartTestSetGenerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTestSetGenerationOperationRequest` | `src/AmazonLex/Requests/Testsetgenerations/StartTestSetGenerationOperationRequest.cs` |
| `StartTestSetGenerationRequest` | `src/AmazonLex/Models/StartTestSetGenerationRequest.cs` |
| `StartTestSetGenerationResponse` | `src/AmazonLex/Models/StartTestSetGenerationResponse.cs` |
| `StartTestSetGenerationError` | `src/AmazonLex/Errors/StartTestSetGenerationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

