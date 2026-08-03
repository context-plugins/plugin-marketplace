# Comments — operations

Accessor: `client.Comments` · Source: `Api/Comments.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateComment
- **HTTP**: `POST /comments` (Default (api))
- **Notes**: Creates a comment on a page or in an existing discussion thread. The integration must have comment capabilities to use this endpoint.
- **Signature**: `CreateComment(CommentsRequest body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<CreateCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListComments
- **HTTP**: `GET /comments` (Default (api))
- **Notes**: Retrieves a list of unresolved comments from a page or block. Requires the integration to have read comment capabilities.
- **Signature**: `ListComments(Guid blockId, string? startCursor, int? pageSize, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startCursor` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Query params (wire ← C#)**: `block_id` ← `blockId`, `start_cursor` ← `startCursor`, `page_size` ← `pageSize`
- **Returns**: `PaginatedList`
- **Error**: `SdkException<ListCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
