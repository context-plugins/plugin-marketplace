<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.Comments` · Source: `src/Instagram/Api/Comments.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComment

- **Signature**: `CreateComment(CreateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`, `Body`
- **Returns**: `CommentsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateCommentRequest` | `src/Instagram/Requests/Comments/CreateCommentRequest.cs` |
| `CommentsRequest` | `src/Instagram/Models/CommentsRequest.cs` |
| `CommentsResponse` | `src/Instagram/Models/CommentsResponse.cs` |

### CreateCommentReply

- **Signature**: `CreateCommentReply(CreateCommentReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `Body`
- **Returns**: `RepliesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateCommentReplyRequest` | `src/Instagram/Requests/Comments/CreateCommentReplyRequest.cs` |
| `RepliesRequest` | `src/Instagram/Models/RepliesRequest.cs` |
| `RepliesResponse` | `src/Instagram/Models/RepliesResponse.cs` |

### DeleteComment

- **Signature**: `DeleteComment(DeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteCommentRequest` | `src/Instagram/Requests/Comments/DeleteCommentRequest.cs` |
| `SuccessResponse` | `src/Instagram/Models/SuccessResponse.cs` |

### GetComment

- **Signature**: `GetComment(GetCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `Comment`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCommentRequest` | `src/Instagram/Requests/Comments/GetCommentRequest.cs` |
| `Comment` | `src/Instagram/Models/Comment.cs` |

### GetCommentReplies

- **Signature**: `GetCommentReplies(GetCommentRepliesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `CommentList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCommentRepliesRequest` | `src/Instagram/Requests/Comments/GetCommentRepliesRequest.cs` |
| `CommentList` | `src/Instagram/Models/CommentList.cs` |

### GetMediaComments

- **Signature**: `GetMediaComments(GetMediaCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `CommentList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMediaCommentsRequest` | `src/Instagram/Requests/Comments/GetMediaCommentsRequest.cs` |
| `CommentList` | `src/Instagram/Models/CommentList.cs` |

### HideComment

- **Signature**: `HideComment(HideCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `HideCommentRequest` | `src/Instagram/Requests/Comments/HideCommentRequest.cs` |
| `RequestModel` | `src/Instagram/Models/RequestModel.cs` |
| `SuccessResponse` | `src/Instagram/Models/SuccessResponse.cs` |

