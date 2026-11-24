<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feedback — operations

Accessor: `client.Feedback` · Source: `src/S1/Api/Feedback.cs` · 1 operation

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
| `FeedbackOperationRequest` | `src/S1/Requests/Feedback/FeedbackOperationRequest.cs` |
| `FeedbackRequest` | `src/S1/Models/FeedbackRequest.cs` |
| `FeedbackResponse` | `src/S1/Models/FeedbackResponse.cs` |
| `FeedbackError` | `src/S1/Errors/FeedbackError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

