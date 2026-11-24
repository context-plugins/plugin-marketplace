<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organization — operations

Accessor: `client.Organization` · Source: `src/AmazonDevOpsGuru/Api/Organization.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeOrganizationHealth

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeOrganizationHealth(DescribeOrganizationHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeOrganizationHealthResponse`
- **Error**: `ApiException<DescribeOrganizationHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeOrganizationHealthRequest` | `src/AmazonDevOpsGuru/Requests/Organization/DescribeOrganizationHealthRequest.cs` |
| `OrganizationHealthRequest` | `src/AmazonDevOpsGuru/Models/OrganizationHealthRequest.cs` |
| `DescribeOrganizationHealthResponse` | `src/AmazonDevOpsGuru/Models/DescribeOrganizationHealthResponse.cs` |
| `DescribeOrganizationHealthError` | `src/AmazonDevOpsGuru/Errors/DescribeOrganizationHealthError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### DescribeOrganizationOverview

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeOrganizationOverview(DescribeOrganizationOverviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeOrganizationOverviewResponse`
- **Error**: `ApiException<DescribeOrganizationOverviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeOrganizationOverviewRequest` | `src/AmazonDevOpsGuru/Requests/Organization/DescribeOrganizationOverviewRequest.cs` |
| `OrganizationOverviewRequest` | `src/AmazonDevOpsGuru/Models/OrganizationOverviewRequest.cs` |
| `DescribeOrganizationOverviewResponse` | `src/AmazonDevOpsGuru/Models/DescribeOrganizationOverviewResponse.cs` |
| `DescribeOrganizationOverviewError` | `src/AmazonDevOpsGuru/Errors/DescribeOrganizationOverviewError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### DescribeOrganizationResourceCollectionHealth

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeOrganizationResourceCollectionHealth(DescribeOrganizationResourceCollectionHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeOrganizationResourceCollectionHealthResponse`
- **Error**: `ApiException<DescribeOrganizationResourceCollectionHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeOrganizationResourceCollectionHealthRequest` | `src/AmazonDevOpsGuru/Requests/Organization/DescribeOrganizationResourceCollectionHealthRequest.cs` |
| `OrganizationHealthResourceCollectionRequest` | `src/AmazonDevOpsGuru/Models/OrganizationHealthResourceCollectionRequest.cs` |
| `DescribeOrganizationResourceCollectionHealthResponse` | `src/AmazonDevOpsGuru/Models/DescribeOrganizationResourceCollectionHealthResponse.cs` |
| `DescribeOrganizationResourceCollectionHealthError` | `src/AmazonDevOpsGuru/Errors/DescribeOrganizationResourceCollectionHealthError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### ListOrganizationInsights

- **Auth**: `options.Sigv4`
- **Signature**: `ListOrganizationInsights(ListOrganizationInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListOrganizationInsightsResponse`
- **Error**: `ApiException<ListOrganizationInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrganizationInsightsRequest` | `src/AmazonDevOpsGuru/Requests/Organization/ListOrganizationInsightsRequest.cs` |
| `OrganizationInsightsRequest` | `src/AmazonDevOpsGuru/Models/OrganizationInsightsRequest.cs` |
| `ListOrganizationInsightsResponse` | `src/AmazonDevOpsGuru/Models/ListOrganizationInsightsResponse.cs` |
| `ListOrganizationInsightsError` | `src/AmazonDevOpsGuru/Errors/ListOrganizationInsightsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### SearchOrganizationInsights

- **Auth**: `options.Sigv4`
- **Signature**: `SearchOrganizationInsights(SearchOrganizationInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SearchOrganizationInsightsResponse`
- **Error**: `ApiException<SearchOrganizationInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchOrganizationInsightsRequest` | `src/AmazonDevOpsGuru/Requests/Organization/SearchOrganizationInsightsRequest.cs` |
| `OrganizationInsightsSearchRequest` | `src/AmazonDevOpsGuru/Models/OrganizationInsightsSearchRequest.cs` |
| `SearchOrganizationInsightsResponse` | `src/AmazonDevOpsGuru/Models/SearchOrganizationInsightsResponse.cs` |
| `SearchOrganizationInsightsError` | `src/AmazonDevOpsGuru/Errors/SearchOrganizationInsightsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

