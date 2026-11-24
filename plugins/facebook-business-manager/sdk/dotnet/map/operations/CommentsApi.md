<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommentsApi — operations

Accessor: `client.CommentsApi` · Source: `src/FacebookBusinessManager/Api/CommentsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComment

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateComment(CreateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PostId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreateCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCommentRequest` | `src/FacebookBusinessManager/Requests/CommentsApi/CreateCommentRequest.cs` |
| `CommentsRequest` | `src/FacebookBusinessManager/Models/CommentsRequest.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreateCommentError` | `src/FacebookBusinessManager/Errors/CreateCommentError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### DeleteComment

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteComment(DeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `ApiException<DeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCommentRequest` | `src/FacebookBusinessManager/Requests/CommentsApi/DeleteCommentRequest.cs` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs` |
| `DeleteCommentError` | `src/FacebookBusinessManager/Errors/DeleteCommentError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetPostComments

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPostComments(GetPostCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PostId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`, `filter` ← `Filter`, `order` ← `Order`
- **Returns**: `CommentList`
- **Error**: `ApiException<GetPostCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPostCommentsRequest` | `src/FacebookBusinessManager/Requests/CommentsApi/GetPostCommentsRequest.cs` |
| `Filter` | `src/FacebookBusinessManager/Models/Enums/Filter.cs` |
| `Order` | `src/FacebookBusinessManager/Models/Enums/Order.cs` |
| `CommentList` | `src/FacebookBusinessManager/Models/CommentList.cs` |
| `GetPostCommentsError` | `src/FacebookBusinessManager/Errors/GetPostCommentsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

