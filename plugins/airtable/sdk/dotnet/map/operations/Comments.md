<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.Comments` · Source: `src/Airtable/Api/Comments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComment

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateComment(CreateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`, `Body`
- **Returns**: `Comment`
- **Error**: `ApiException<CreateCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCommentRequest` | `src/Airtable/Requests/Comments/CreateCommentRequest.cs` |
| `RecordIdCommentsRequest` | `src/Airtable/Models/RecordIdCommentsRequest.cs` |
| `Comment` | `src/Airtable/Models/Comment.cs` |
| `CreateCommentError` | `src/Airtable/Errors/CreateCommentError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### DeleteComment

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteComment(DeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`, `CommentId`
- **Returns**: `RecordIdCommentsCommentIdResponse`
- **Error**: `ApiException<DeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCommentRequest` | `src/Airtable/Requests/Comments/DeleteCommentRequest.cs` |
| `RecordIdCommentsCommentIdResponse` | `src/Airtable/Models/RecordIdCommentsCommentIdResponse.cs` |
| `DeleteCommentError` | `src/Airtable/Errors/DeleteCommentError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### ListComments

- **Auth**: `options.BearerAuth`
- **Signature**: `ListComments(ListCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`
- **Query params (wire ← C#)**: `offset` ← `Offset`, `pageSize` ← `PageSize`
- **Returns**: `CommentList`
- **Error**: `ApiException<ListCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCommentsRequest` | `src/Airtable/Requests/Comments/ListCommentsRequest.cs` |
| `CommentList` | `src/Airtable/Models/CommentList.cs` |
| `ListCommentsError` | `src/Airtable/Errors/ListCommentsError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### UpdateComment

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateComment(UpdateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`, `CommentId`, `Body`
- **Returns**: `Comment`
- **Error**: `ApiException<UpdateCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCommentRequest` | `src/Airtable/Requests/Comments/UpdateCommentRequest.cs` |
| `RecordIdCommentsCommentIdRequest` | `src/Airtable/Models/RecordIdCommentsCommentIdRequest.cs` |
| `Comment` | `src/Airtable/Models/Comment.cs` |
| `UpdateCommentError` | `src/Airtable/Errors/UpdateCommentError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

