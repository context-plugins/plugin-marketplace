<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testexecutions — operations

Accessor: `client.Testexecutions` · Source: `src/AmazonLex/Api/Testexecutions.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeTestExecution

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTestExecution(DescribeTestExecutionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestExecutionId`
- **Returns**: `DescribeTestExecutionResponse`
- **Error**: `ApiException<DescribeTestExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTestExecutionOperationRequest` | `src/AmazonLex/Requests/Testexecutions/DescribeTestExecutionOperationRequest.cs` |
| `DescribeTestExecutionResponse` | `src/AmazonLex/Models/DescribeTestExecutionResponse.cs` |
| `DescribeTestExecutionError` | `src/AmazonLex/Errors/DescribeTestExecutionError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### GetTestExecutionArtifactsUrl

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetTestExecutionArtifactsUrl(GetTestExecutionArtifactsUrlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestExecutionId`
- **Returns**: `GetTestExecutionArtifactsUrlResponse`
- **Error**: `ApiException<GetTestExecutionArtifactsUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTestExecutionArtifactsUrlOperationRequest` | `src/AmazonLex/Requests/Testexecutions/GetTestExecutionArtifactsUrlOperationRequest.cs` |
| `GetTestExecutionArtifactsUrlResponse` | `src/AmazonLex/Models/GetTestExecutionArtifactsUrlResponse.cs` |
| `GetTestExecutionArtifactsUrlError` | `src/AmazonLex/Errors/GetTestExecutionArtifactsUrlError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListTestExecutionResultItems

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTestExecutionResultItems(ListTestExecutionResultItemsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestExecutionId`
- **Returns**: `ListTestExecutionResultItemsResponse`
- **Error**: `ApiException<ListTestExecutionResultItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestExecutionResultItemsOperationRequest` | `src/AmazonLex/Requests/Testexecutions/ListTestExecutionResultItemsOperationRequest.cs` |
| `ListTestExecutionResultItemsRequest` | `src/AmazonLex/Models/ListTestExecutionResultItemsRequest.cs` |
| `ListTestExecutionResultItemsResponse` | `src/AmazonLex/Models/ListTestExecutionResultItemsResponse.cs` |
| `ListTestExecutionResultItemsError` | `src/AmazonLex/Errors/ListTestExecutionResultItemsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListTestExecutions

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTestExecutions(ListTestExecutionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListTestExecutionsResponse`
- **Error**: `ApiException<ListTestExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestExecutionsOperationRequest` | `src/AmazonLex/Requests/Testexecutions/ListTestExecutionsOperationRequest.cs` |
| `ListTestExecutionsRequest` | `src/AmazonLex/Models/ListTestExecutionsRequest.cs` |
| `ListTestExecutionsResponse` | `src/AmazonLex/Models/ListTestExecutionsResponse.cs` |
| `ListTestExecutionsError` | `src/AmazonLex/Errors/ListTestExecutionsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartTestExecution

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartTestExecution(StartTestExecutionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `StartTestExecutionResponse`
- **Error**: `ApiException<StartTestExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTestExecutionOperationRequest` | `src/AmazonLex/Requests/Testexecutions/StartTestExecutionOperationRequest.cs` |
| `StartTestExecutionRequest` | `src/AmazonLex/Models/StartTestExecutionRequest.cs` |
| `StartTestExecutionResponse` | `src/AmazonLex/Models/StartTestExecutionResponse.cs` |
| `StartTestExecutionError` | `src/AmazonLex/Errors/StartTestExecutionError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

