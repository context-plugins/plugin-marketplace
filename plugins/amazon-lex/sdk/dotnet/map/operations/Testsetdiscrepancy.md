<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsetdiscrepancy — operations

Accessor: `client.Testsetdiscrepancy` · Source: `src/AmazonLex/Api/Testsetdiscrepancy.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTestSetDiscrepancyReport

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateTestSetDiscrepancyReport(CreateTestSetDiscrepancyReportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetId`
- **Returns**: `CreateTestSetDiscrepancyReportResponse`
- **Error**: `ApiException<CreateTestSetDiscrepancyReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTestSetDiscrepancyReportOperationRequest` | `src/AmazonLex/Requests/Testsetdiscrepancy/CreateTestSetDiscrepancyReportOperationRequest.cs` |
| `CreateTestSetDiscrepancyReportRequest` | `src/AmazonLex/Models/CreateTestSetDiscrepancyReportRequest.cs` |
| `CreateTestSetDiscrepancyReportResponse` | `src/AmazonLex/Models/CreateTestSetDiscrepancyReportResponse.cs` |
| `CreateTestSetDiscrepancyReportError` | `src/AmazonLex/Errors/CreateTestSetDiscrepancyReportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeTestSetDiscrepancyReport

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTestSetDiscrepancyReport(DescribeTestSetDiscrepancyReportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TestSetDiscrepancyReportId`
- **Returns**: `DescribeTestSetDiscrepancyReportResponse`
- **Error**: `ApiException<DescribeTestSetDiscrepancyReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTestSetDiscrepancyReportOperationRequest` | `src/AmazonLex/Requests/Testsetdiscrepancy/DescribeTestSetDiscrepancyReportOperationRequest.cs` |
| `DescribeTestSetDiscrepancyReportResponse` | `src/AmazonLex/Models/DescribeTestSetDiscrepancyReportResponse.cs` |
| `DescribeTestSetDiscrepancyReportError` | `src/AmazonLex/Errors/DescribeTestSetDiscrepancyReportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

