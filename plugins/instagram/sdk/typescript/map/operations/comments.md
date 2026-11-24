<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `src/resources/comments.ts` · 7 operations · Request types: namespace `Comments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComment

- **Signature**: `createComment(request: Comments.CreateCommentRequest, options?: RequestOptions): ApiPromise<CommentsResponse, ApiError>`
- **Wire**: `POST /{media_id}/comments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CommentsResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.CreateCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `body` | `body` | — | `CommentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentsRequest` | `commentsRequestSchema` | `src/models/comments-request.ts` |
| `CommentsResponse` | `commentsResponseSchema` | `src/models/comments-response.ts` |

### createCommentReply

- **Signature**: `createCommentReply(request: Comments.CreateCommentReplyRequest, options?: RequestOptions): ApiPromise<RepliesResponse, ApiError>`
- **Wire**: `POST /{comment_id}/replies`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RepliesResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.CreateCommentReplyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `body` | `body` | — | `RepliesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepliesRequest` | `repliesRequestSchema` | `src/models/replies-request.ts` |
| `RepliesResponse` | `repliesResponseSchema` | `src/models/replies-response.ts` |

### deleteComment

- **Signature**: `deleteComment(request: Comments.DeleteCommentRequest, options?: RequestOptions): ApiPromise<SuccessResponse, ApiError>`
- **Wire**: `DELETE /{comment_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.DeleteCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |

### getComment

- **Signature**: `getComment(request: Comments.GetCommentRequest, options?: RequestOptions): ApiPromise<Comment, ApiError>`
- **Wire**: `GET /{comment_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Comment`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.GetCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Comment` | `commentSchema` | `src/models/comment.ts` |

### getCommentReplies

- **Signature**: `getCommentReplies(request: Comments.GetCommentRepliesRequest, options?: RequestOptions): ApiPromise<CommentList, ApiError>`
- **Wire**: `GET /{comment_id}/replies`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.GetCommentRepliesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentList` | `commentListSchema` | `src/models/comment-list.ts` |

### getMediaComments

- **Signature**: `getMediaComments(request: Comments.GetMediaCommentsRequest, options?: RequestOptions): ApiPromise<CommentList, ApiError>`
- **Wire**: `GET /{media_id}/comments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentList`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.GetMediaCommentsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentList` | `commentListSchema` | `src/models/comment-list.ts` |

### hideComment

- **Signature**: `hideComment(request: Comments.HideCommentRequest, options?: RequestOptions): ApiPromise<SuccessResponse, ApiError>`
- **Wire**: `POST /{comment_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.HideCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `body` | `body` | — | `Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Request` | `requestSchema` | `src/models/request.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |

