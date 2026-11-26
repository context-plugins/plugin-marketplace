<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feedback — operations

Accessor: `client.Feedback` · Source: `src/Search1Api/Api/Feedback.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FeedbackInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `FeedbackInvoke(FeedbackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FeedbackResponse`
- **Error**: `ApiException<FeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 403, 413, 415, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeedbackOperationRequest` | `src/Search1Api/Requests/Feedback/FeedbackOperationRequest.cs` |
| `FeedbackRequest` | `src/Search1Api/Models/FeedbackRequest.cs` |
| `FeedbackResponse` | `src/Search1Api/Models/FeedbackResponse.cs` |
| `FeedbackError` | `src/Search1Api/Errors/FeedbackError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

