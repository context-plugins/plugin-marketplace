<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.Comments` · Source: `src/Deliverd/Api/Comments.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Comments

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Comments(GetApiV1CommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1CommentsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1CommentsRequest` | `src/Deliverd/Requests/Comments/GetApiV1CommentsRequest.cs` |
| `ApiV1CommentsResponse` | `src/Deliverd/Models/ApiV1CommentsResponse.cs` |

### PostApiV1CommentsByThreadIdResolve

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1CommentsByThreadIdResolve(PostApiV1CommentsByThreadIdResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ThreadId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1CommentsByThreadIdResolveRequest` | `src/Deliverd/Requests/Comments/PostApiV1CommentsByThreadIdResolveRequest.cs` |
| `ApiV1CommentsResolveRequest` | `src/Deliverd/Models/ApiV1CommentsResolveRequest.cs` |

