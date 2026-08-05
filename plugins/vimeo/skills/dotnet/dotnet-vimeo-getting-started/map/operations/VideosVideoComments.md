# VideosVideoComments — operations

Accessor: `client.VideosVideoComments` · Source: `Api/VideosVideoComments.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateComment
- **HTTP**: `POST /videos/{video_id}/comments` (Default (api))
- **Notes**: This method adds a video comment to the specified video.
- **Signature**: `CreateComment(double videoId, VideosCommentsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<CreateCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCommentAlt1
- **HTTP**: `POST /channels/{channel_id}/videos/{video_id}/comments` (Default (api))
- **Notes**: This method adds a video comment to the specified video.
- **Signature**: `CreateCommentAlt1(double channelId, double videoId, ChannelsVideosCommentsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<CreateCommentAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCommentReply
- **HTTP**: `POST /videos/{video_id}/comments/{comment_id}/replies` (Default (api))
- **Notes**: This method adds a reply to the specified video comment.
- **Signature**: `CreateCommentReply(double commentId, double videoId, VideosCommentsRepliesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<CreateCommentReplyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteComment
- **HTTP**: `DELETE /videos/{video_id}/comments/{comment_id}` (Default (api))
- **Notes**: This method deletes the specified video comment. The authenticated user must be the owner of the comment.
- **Signature**: `DeleteComment(double commentId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditComment
- **HTTP**: `PATCH /videos/{video_id}/comments/{comment_id}` (Default (api))
- **Notes**: This method edits the specified video comment. The authenticated user must be the owner of the comment.
- **Signature**: `EditComment(double commentId, double videoId, VideosCommentsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<EditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetComment
- **HTTP**: `GET /videos/{video_id}/comments/{comment_id}` (Default (api))
- **Notes**: This method returns the specified video comment.
- **Signature**: `GetComment(double commentId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<GetCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCommentReplies
- **HTTP**: `GET /videos/{video_id}/comments/{comment_id}/replies` (Default (api))
- **Notes**: This method returns every reply to the specified video comment.
- **Signature**: `GetCommentReplies(double commentId, double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `CommentConnection`
- **Error**: `SdkException<GetCommentRepliesError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetComments
- **HTTP**: `GET /videos/{video_id}/comments` (Default (api))
- **Notes**: This method returns every video comment on the specified video.
- **Signature**: `GetComments(double videoId, Direction? direction, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `direction` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `CommentConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetCommentsAlt1
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/comments` (Default (api))
- **Notes**: This method returns every video comment on the specified video.
- **Signature**: `GetCommentsAlt1(double channelId, double videoId, Direction? direction, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `direction` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `CommentConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
