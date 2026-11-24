<!-- Generated file — do not edit; regenerated with the SDK. -->

# Replies — operations

Accessor: `client.Replies` · Source: `src/PrismaReviews/Api/Replies.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteReply

- **Auth**: `options.ApiKey`
- **Signature**: `DeleteReply(DeleteReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ReplyDeletion`
- **Error**: `ApiException<DeleteReplyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReplyRequest` | `src/PrismaReviews/Requests/Replies/DeleteReplyRequest.cs` |
| `ReplyDeletion` | `src/PrismaReviews/Models/ReplyDeletion.cs` |
| `DeleteReplyError` | `src/PrismaReviews/Errors/DeleteReplyError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### ReplyToReview

- **Auth**: `options.ApiKey`
- **Signature**: `ReplyToReview(ReplyToReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Review`
- **Error**: `ApiException<ReplyToReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 409, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplyToReviewRequest` | `src/PrismaReviews/Requests/Replies/ReplyToReviewRequest.cs` |
| `V1ReviewsReplyRequest` | `src/PrismaReviews/Models/V1ReviewsReplyRequest.cs` |
| `Review` | `src/PrismaReviews/Models/Review.cs` |
| `ReplyToReviewError` | `src/PrismaReviews/Errors/ReplyToReviewError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

