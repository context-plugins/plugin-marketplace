<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommentsApi — operations

Accessor: `client.commentsApi` · Source: `src/resources/comments-api.ts` · 3 operations · Request and error types: namespace `CommentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComment

- **Signature**: `createComment(request: CommentsApi.CreateCommentRequest, options?: RequestOptions): ApiPromise<CreateResponse, CommentsApi.CreateCommentError>`
- **Wire**: `POST /{post_id}/comments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `CommentsApi.CreateCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentsApi.CreateCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `postId` | `path` | `post_id` | `string` | yes |
| `body` | `body` | — | `CommentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentsRequest` | `commentsRequestSchema` | `src/models/comments-request.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteComment

- **Signature**: `deleteComment(request: CommentsApi.DeleteCommentRequest, options?: RequestOptions): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, CommentsApi.DeleteCommentError>`
- **Wire**: `DELETE /{comment_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `CommentsApi.DeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentsApi.DeleteCommentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema` | `src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPostComments

- **Signature**: `getPostComments(request: CommentsApi.GetPostCommentsRequest, options?: RequestOptions): ApiPromise<CommentList, CommentsApi.GetPostCommentsError>`
- **Wire**: `GET /{post_id}/comments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `CommentsApi.GetPostCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentsApi.GetPostCommentsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `postId` | `path` | `post_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |
| `filter` | `query` | — | `Filter` | no | — |
| `order` | `query` | — | `Order` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter` | `filterSchema` | `src/models/filter.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `CommentList` | `commentListSchema` | `src/models/comment-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

