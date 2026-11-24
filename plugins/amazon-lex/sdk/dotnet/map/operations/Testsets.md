<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsets — operations

Accessor: `client.Testsets` · Source: `src/AmazonLex/Api/Testsets.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTestSetDiscrepancyReport2

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateTestSetDiscrepancyReport2(CreateTestSetDiscrepancyReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `CreateTestSetDiscrepancyReportResponse`
- **Error**: `ApiException<CreateTestSetDiscrepancyReport2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTestSetDiscrepancyReport2Request` | `src/AmazonLex/Requests/Testsets/CreateTestSetDiscrepancyReport2Request.cs` |
| `CreateTestSetDiscrepancyReportRequest` | `src/AmazonLex/Models/CreateTestSetDiscrepancyReportRequest.cs` |
| `CreateTestSetDiscrepancyReportResponse` | `src/AmazonLex/Models/CreateTestSetDiscrepancyReportResponse.cs` |
| `CreateTestSetDiscrepancyReport2Error` | `src/AmazonLex/Errors/CreateTestSetDiscrepancyReport2Error.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteTestSet

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteTestSet(DeleteTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `string`
- **Error**: `ApiException<DeleteTestSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTestSetOperationRequest` | `src/AmazonLex/Requests/Testsets/DeleteTestSetOperationRequest.cs` |
| `DeleteTestSetRequest` | `src/AmazonLex/Models/DeleteTestSetRequest.cs` |
| `DeleteTestSetError` | `src/AmazonLex/Errors/DeleteTestSetError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeTestSet

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTestSet(DescribeTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `DescribeTestSetResponse`
- **Error**: `ApiException<DescribeTestSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTestSetOperationRequest` | `src/AmazonLex/Requests/Testsets/DescribeTestSetOperationRequest.cs` |
| `DescribeTestSetResponse` | `src/AmazonLex/Models/DescribeTestSetResponse.cs` |
| `DescribeTestSetError` | `src/AmazonLex/Errors/DescribeTestSetError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListTestSetRecords

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTestSetRecords(ListTestSetRecordsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `ListTestSetRecordsResponse`
- **Error**: `ApiException<ListTestSetRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestSetRecordsOperationRequest` | `src/AmazonLex/Requests/Testsets/ListTestSetRecordsOperationRequest.cs` |
| `ListTestSetRecordsRequest` | `src/AmazonLex/Models/ListTestSetRecordsRequest.cs` |
| `ListTestSetRecordsResponse` | `src/AmazonLex/Models/ListTestSetRecordsResponse.cs` |
| `ListTestSetRecordsError` | `src/AmazonLex/Errors/ListTestSetRecordsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListTestSets

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTestSets(ListTestSetsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListTestSetsResponse`
- **Error**: `ApiException<ListTestSetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestSetsOperationRequest` | `src/AmazonLex/Requests/Testsets/ListTestSetsOperationRequest.cs` |
| `ListTestSetsRequest` | `src/AmazonLex/Models/ListTestSetsRequest.cs` |
| `ListTestSetsResponse` | `src/AmazonLex/Models/ListTestSetsResponse.cs` |
| `ListTestSetsError` | `src/AmazonLex/Errors/ListTestSetsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartTestExecution2

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartTestExecution2(StartTestExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi`
- **Error**: `ApiException<StartTestExecution2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTestExecution2Request` | `src/AmazonLex/Requests/Testsets/StartTestExecution2Request.cs` |
| `StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi` | `src/AmazonLex/Models/StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi.cs` |
| `StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi` | `src/AmazonLex/Models/StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi.cs` |
| `StartTestExecution2Error` | `src/AmazonLex/Errors/StartTestExecution2Error.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateTestSet

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateTestSet(UpdateTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `UpdateTestSetResponse`
- **Error**: `ApiException<UpdateTestSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTestSetOperationRequest` | `src/AmazonLex/Requests/Testsets/UpdateTestSetOperationRequest.cs` |
| `UpdateTestSetRequest` | `src/AmazonLex/Models/UpdateTestSetRequest.cs` |
| `UpdateTestSetResponse` | `src/AmazonLex/Models/UpdateTestSetResponse.cs` |
| `UpdateTestSetError` | `src/AmazonLex/Errors/UpdateTestSetError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

