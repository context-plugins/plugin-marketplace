<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `src/resources/comments.ts` · 7 operations · Request and error types: namespace `Comments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addCommentReactionApiV1CommentsCommentIdReactionsPost

- **Signature**: `addCommentReactionApiV1CommentsCommentIdReactionsPost(request: Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostRequest, options?: RequestOptions): ApiPromise<NoteSyncView, Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError>`
- **Wire**: `POST /api/v1/comments/{comment_id}/reactions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `body` | `body` | — | `Body19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body19` | `body19Schema` | `src/models/body19.ts` |
| `NoteSyncView` | `noteSyncViewSchema` | `src/models/note-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createCommentApiV1CommentsPost

- **Signature**: `createCommentApiV1CommentsPost(request: Comments.CreateCommentApiV1CommentsPostRequest, options?: RequestOptions): ApiPromise<NoteSyncView, Comments.CreateCommentApiV1CommentsPostError>`
- **Wire**: `POST /api/v1/comments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.CreateCommentApiV1CommentsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.CreateCommentApiV1CommentsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body10` | `body10Schema` | `src/models/body10.ts` |
| `NoteSyncView` | `noteSyncViewSchema` | `src/models/note-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteCommentApiV1CommentsCommentIdDelete

- **Signature**: `deleteCommentApiV1CommentsCommentIdDelete(request: Comments.DeleteCommentApiV1CommentsCommentIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Comments.DeleteCommentApiV1CommentsCommentIdDeleteError>`
- **Wire**: `DELETE /api/v1/comments/{comment_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.DeleteCommentApiV1CommentsCommentIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.DeleteCommentApiV1CommentsCommentIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getCommentApiV1CommentsCommentIdGet

- **Signature**: `getCommentApiV1CommentsCommentIdGet(request: Comments.GetCommentApiV1CommentsCommentIdGetRequest, options?: RequestOptions): ApiPromise<NoteSyncView, Comments.GetCommentApiV1CommentsCommentIdGetError>`
- **Wire**: `GET /api/v1/comments/{comment_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NoteSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.GetCommentApiV1CommentsCommentIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.GetCommentApiV1CommentsCommentIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NoteSyncView` | `noteSyncViewSchema` | `src/models/note-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getCommentsApiV1CommentsGet

- **Signature**: `getCommentsApiV1CommentsGet(request?: Comments.GetCommentsApiV1CommentsGetRequest, options?: RequestOptions): ApiPromise<PaginatedList6, Comments.GetCommentsApiV1CommentsGetError>`
- **Wire**: `GET /api/v1/comments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList6`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.GetCommentsApiV1CommentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.GetCommentsApiV1CommentsGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `string` | no | — |
| `taskId` | `query` | `task_id` | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `publicKey` | `query` | `public_key` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList6` | `paginatedList6Schema` | `src/models/paginated-list6.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost

- **Signature**: `removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost(request: Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostRequest, options?: RequestOptions): ApiPromise<undefined, Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError>`
- **Wire**: `POST /api/v1/comments/{comment_id}/reactions/remove`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `body` | `body` | — | `Body14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body14` | `body14Schema` | `src/models/body14.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateCommentApiV1CommentsCommentIdPost

- **Signature**: `updateCommentApiV1CommentsCommentIdPost(request: Comments.UpdateCommentApiV1CommentsCommentIdPostRequest, options?: RequestOptions): ApiPromise<NoteSyncView | null, Comments.UpdateCommentApiV1CommentsCommentIdPostError>`
- **Wire**: `POST /api/v1/comments/{comment_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Comments.UpdateCommentApiV1CommentsCommentIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Comments.UpdateCommentApiV1CommentsCommentIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `body` | `body` | — | `Body21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body21` | `body21Schema` | `src/models/body21.ts` |
| `NoteSyncView` | `noteSyncViewSchema` | `src/models/note-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

