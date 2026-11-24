<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/AmazonDevOpsGuru/Api/Insights.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteInsight

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteInsight(DeleteInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteInsightError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteInsightRequest` | `src/AmazonDevOpsGuru/Requests/Insights/DeleteInsightRequest.cs` |
| `DeleteInsightError` | `src/AmazonDevOpsGuru/Errors/DeleteInsightError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### DescribeInsight

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeInsight(DescribeInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `AccountId` ← `AccountId`
- **Returns**: `DescribeInsightResponse`
- **Error**: `ApiException<DescribeInsightError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeInsightRequest` | `src/AmazonDevOpsGuru/Requests/Insights/DescribeInsightRequest.cs` |
| `DescribeInsightResponse` | `src/AmazonDevOpsGuru/Models/DescribeInsightResponse.cs` |
| `DescribeInsightError` | `src/AmazonDevOpsGuru/Errors/DescribeInsightError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### ListInsights

- **Auth**: `options.Sigv4`
- **Signature**: `ListInsights(ListInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListInsightsResponse`
- **Error**: `ApiException<ListInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInsightsRequest` | `src/AmazonDevOpsGuru/Requests/Insights/ListInsightsRequest.cs` |
| `InsightsRequest` | `src/AmazonDevOpsGuru/Models/InsightsRequest.cs` |
| `ListInsightsResponse` | `src/AmazonDevOpsGuru/Models/ListInsightsResponse.cs` |
| `ListInsightsError` | `src/AmazonDevOpsGuru/Errors/ListInsightsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### SearchInsights

- **Auth**: `options.Sigv4`
- **Signature**: `SearchInsights(SearchInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SearchInsightsResponse`
- **Error**: `ApiException<SearchInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchInsightsRequest` | `src/AmazonDevOpsGuru/Requests/Insights/SearchInsightsRequest.cs` |
| `InsightsSearchRequest` | `src/AmazonDevOpsGuru/Models/InsightsSearchRequest.cs` |
| `SearchInsightsResponse` | `src/AmazonDevOpsGuru/Models/SearchInsightsResponse.cs` |
| `SearchInsightsError` | `src/AmazonDevOpsGuru/Errors/SearchInsightsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

