# Feedback — operations

Accessor: `client.Feedback` · Source: `Api/Feedback.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SubmitEndpointFeedback
- **HTTP**: `POST /feedback` (Default (api))
- **Signature**: `SubmitEndpointFeedback(EndpointFeedbackRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FeedbackResponse`
- **Error**: `SdkException<SubmitEndpointFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetFeedbackErrorResponse(out FeedbackErrorResponse)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubmitSearchFeedback
- **HTTP**: `POST /search/{jobId}/feedback` (Default (api))
- **Signature**: `SubmitSearchFeedback(Guid jobId, SearchFeedbackRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FeedbackResponse`
- **Error**: `SdkException<SubmitSearchFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetFeedbackErrorResponse(out FeedbackErrorResponse)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
