<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recommendations — operations

Accessor: `client.Recommendations` · Source: `src/AmazonDevOpsGuru/Api/Recommendations.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListRecommendations

- **Auth**: `options.Sigv4`
- **Signature**: `ListRecommendations(ListRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListRecommendationsResponse`
- **Error**: `ApiException<ListRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecommendationsRequest` | `src/AmazonDevOpsGuru/Requests/Recommendations/ListRecommendationsRequest.cs` |
| `RecommendationsRequest` | `src/AmazonDevOpsGuru/Models/RecommendationsRequest.cs` |
| `ListRecommendationsResponse` | `src/AmazonDevOpsGuru/Models/ListRecommendationsResponse.cs` |
| `ListRecommendationsError` | `src/AmazonDevOpsGuru/Errors/ListRecommendationsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

