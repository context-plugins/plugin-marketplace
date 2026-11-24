<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `src/resources/comments.ts` · 4 operations · Request and error types: namespace `Comments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComment

- **Signature**: `createComment(request: Comments.CreateCommentRequest, options?: RequestOptions): ApiPromise<Comment, Comments.CreateCommentError>`
- **Wire**: `POST /{baseId}/{tableIdOrName}/{recordId}/comments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Comment`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Comments.CreateCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.CreateCommentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `body` | `body` | `RecordIdCommentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordIdCommentsRequest` | `recordIdCommentsRequestSchema` | `src/models/record-id-comments-request.ts` |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteComment

- **Signature**: `deleteComment(request: Comments.DeleteCommentRequest, options?: RequestOptions): ApiPromise<RecordIdCommentsCommentIdResponse, Comments.DeleteCommentError>`
- **Wire**: `DELETE /{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecordIdCommentsCommentIdResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Comments.DeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.DeleteCommentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `commentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordIdCommentsCommentIdResponse` | `recordIdCommentsCommentIdResponseSchema` | `src/models/record-id-comments-comment-id-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listComments

- **Signature**: `listComments(request: Comments.ListCommentsRequest, options?: RequestOptions): ApiPromise<CommentList, Comments.ListCommentsError>`
- **Wire**: `GET /{baseId}/{tableIdOrName}/{recordId}/comments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentList`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Comments.ListCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.ListCommentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `offset` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentList` | `commentListSchema` | `src/models/comment-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateComment

- **Signature**: `updateComment(request: Comments.UpdateCommentRequest, options?: RequestOptions): ApiPromise<Comment, Comments.UpdateCommentError>`
- **Wire**: `PATCH /{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Comment`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Comments.UpdateCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.UpdateCommentRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `tableIdOrName` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |
| `commentId` | `path` | `string` | yes |
| `body` | `body` | `RecordIdCommentsCommentIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordIdCommentsCommentIdRequest` | `recordIdCommentsCommentIdRequestSchema` | `src/models/record-id-comments-comment-id-request.ts` |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

