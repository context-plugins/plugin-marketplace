<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feedback — operations

Accessor: `client.Feedback` · Source: `Api/Feedback.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SubmitEndpointFeedback

- **Signature**: `SubmitEndpointFeedback(EndpointFeedbackRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FeedbackResponse`
- **Error**: `SdkException<SubmitEndpointFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetFeedbackErrorResponse(out FeedbackErrorResponse)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EndpointFeedbackRequest` | `Models/EndpointFeedbackRequest.cs` |
| `FeedbackResponse` | `Models/FeedbackResponse.cs` |
| `SubmitEndpointFeedbackError` | `Errors/SubmitEndpointFeedbackError.cs` |
| `FeedbackErrorResponse` | `Models/FeedbackErrorResponse.cs` |

### SubmitSearchFeedback

- **Signature**: `SubmitSearchFeedback(Guid jobId, SearchFeedbackRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FeedbackResponse`
- **Error**: `SdkException<SubmitSearchFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetFeedbackErrorResponse(out FeedbackErrorResponse)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchFeedbackRequest` | `Models/SearchFeedbackRequest.cs` |
| `FeedbackResponse` | `Models/FeedbackResponse.cs` |
| `SubmitSearchFeedbackError` | `Errors/SubmitSearchFeedbackError.cs` |
| `FeedbackErrorResponse` | `Models/FeedbackErrorResponse.cs` |

