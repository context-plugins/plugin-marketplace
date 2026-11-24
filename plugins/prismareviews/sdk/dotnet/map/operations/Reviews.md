<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.Reviews` · Source: `src/PrismaReviews/Api/Reviews.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetReview

- **Auth**: `options.ApiKey`
- **Signature**: `GetReview(GetReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Review`
- **Error**: `ApiException<GetReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReviewRequest` | `src/PrismaReviews/Requests/Reviews/GetReviewRequest.cs` |
| `Review` | `src/PrismaReviews/Models/Review.cs` |
| `GetReviewError` | `src/PrismaReviews/Errors/GetReviewError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### ListReviews

- **Auth**: `options.ApiKey`
- **Signature**: `ListReviews(ListReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `location_id` ← `LocationId`, `platform` ← `Platform`, `since` ← `Since`, `has_reply` ← `HasReply`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ReviewList`
- **Error**: `ApiException<ListReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReviewsRequest` | `src/PrismaReviews/Requests/Reviews/ListReviewsRequest.cs` |
| `PlatformId` | `src/PrismaReviews/Models/Enums/PlatformId.cs` |
| `Since` | `src/PrismaReviews/Models/AnyOf/Since.cs` |
| `HasReply` | `src/PrismaReviews/Models/Enums/HasReply.cs` |
| `ReviewList` | `src/PrismaReviews/Models/ReviewList.cs` |
| `ListReviewsError` | `src/PrismaReviews/Errors/ListReviewsError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

