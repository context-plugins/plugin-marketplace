<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `src/AmazonDevOpsGuru/Api/Accounts.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeAccountHealth

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAccountHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeAccountHealthResponse`
- **Error**: `ApiException<DescribeAccountHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAccountHealthResponse` | `src/AmazonDevOpsGuru/Models/DescribeAccountHealthResponse.cs` |
| `DescribeAccountHealthError` | `src/AmazonDevOpsGuru/Errors/DescribeAccountHealthError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### DescribeAccountOverview

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAccountOverview(DescribeAccountOverviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeAccountOverviewResponse`
- **Error**: `ApiException<DescribeAccountOverviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAccountOverviewRequest` | `src/AmazonDevOpsGuru/Requests/Accounts/DescribeAccountOverviewRequest.cs` |
| `AccountsOverviewRequest` | `src/AmazonDevOpsGuru/Models/AccountsOverviewRequest.cs` |
| `DescribeAccountOverviewResponse` | `src/AmazonDevOpsGuru/Models/DescribeAccountOverviewResponse.cs` |
| `DescribeAccountOverviewError` | `src/AmazonDevOpsGuru/Errors/DescribeAccountOverviewError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### DescribeResourceCollectionHealth

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeResourceCollectionHealth(DescribeResourceCollectionHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceCollectionType`
- **Query params (wire ← C#)**: `NextToken` ← `NextToken`
- **Returns**: `DescribeResourceCollectionHealthResponse`
- **Error**: `ApiException<DescribeResourceCollectionHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeResourceCollectionHealthRequest` | `src/AmazonDevOpsGuru/Requests/Accounts/DescribeResourceCollectionHealthRequest.cs` |
| `ResourceCollectionType` | `src/AmazonDevOpsGuru/Models/Enums/ResourceCollectionType.cs` |
| `DescribeResourceCollectionHealthResponse` | `src/AmazonDevOpsGuru/Models/DescribeResourceCollectionHealthResponse.cs` |
| `DescribeResourceCollectionHealthError` | `src/AmazonDevOpsGuru/Errors/DescribeResourceCollectionHealthError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

