<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeedbackApi — operations

Accessor: `client.FeedbackApi` · Source: `src/AmazonDevOpsGuru/Api/FeedbackApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeFeedback

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeFeedback(DescribeFeedbackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeFeedbackResponse`
- **Error**: `ApiException<DescribeFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeFeedbackRequest` | `src/AmazonDevOpsGuru/Requests/FeedbackApi/DescribeFeedbackRequest.cs` |
| `FeedbackRequest` | `src/AmazonDevOpsGuru/Models/FeedbackRequest.cs` |
| `DescribeFeedbackResponse` | `src/AmazonDevOpsGuru/Models/DescribeFeedbackResponse.cs` |
| `DescribeFeedbackError` | `src/AmazonDevOpsGuru/Errors/DescribeFeedbackError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### PutFeedback

- **Auth**: `options.Sigv4`
- **Signature**: `PutFeedback(PutFeedbackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<PutFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutFeedbackRequest` | `src/AmazonDevOpsGuru/Requests/FeedbackApi/PutFeedbackRequest.cs` |
| `DescribeFeedbackResponse` | `src/AmazonDevOpsGuru/Models/DescribeFeedbackResponse.cs` |
| `PutFeedbackError` | `src/AmazonDevOpsGuru/Errors/PutFeedbackError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

