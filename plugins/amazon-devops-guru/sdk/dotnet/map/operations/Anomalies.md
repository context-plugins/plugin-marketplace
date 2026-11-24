<!-- Generated file — do not edit; regenerated with the SDK. -->

# Anomalies — operations

Accessor: `client.Anomalies` · Source: `src/AmazonDevOpsGuru/Api/Anomalies.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeAnomaly

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAnomaly(DescribeAnomalyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `AccountId` ← `AccountId`
- **Returns**: `DescribeAnomalyResponse`
- **Error**: `ApiException<DescribeAnomalyError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAnomalyRequest` | `src/AmazonDevOpsGuru/Requests/Anomalies/DescribeAnomalyRequest.cs` |
| `DescribeAnomalyResponse` | `src/AmazonDevOpsGuru/Models/DescribeAnomalyResponse.cs` |
| `DescribeAnomalyError` | `src/AmazonDevOpsGuru/Errors/DescribeAnomalyError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### ListAnomaliesForInsight

- **Auth**: `options.Sigv4`
- **Signature**: `ListAnomaliesForInsight(ListAnomaliesForInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InsightId`
- **Returns**: `ListAnomaliesForInsightResponse`
- **Error**: `ApiException<ListAnomaliesForInsightError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAnomaliesForInsightRequest` | `src/AmazonDevOpsGuru/Requests/Anomalies/ListAnomaliesForInsightRequest.cs` |
| `AnomaliesInsightRequest` | `src/AmazonDevOpsGuru/Models/AnomaliesInsightRequest.cs` |
| `ListAnomaliesForInsightResponse` | `src/AmazonDevOpsGuru/Models/ListAnomaliesForInsightResponse.cs` |
| `ListAnomaliesForInsightError` | `src/AmazonDevOpsGuru/Errors/ListAnomaliesForInsightError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

