<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.posts` · Source: `src/resources/posts.ts` · 5 operations · Request and error types: namespace `Posts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPagePost

- **Signature**: `createPagePost(request: Posts.CreatePagePostRequest, options?: RequestOptions): ApiPromise<CreateResponse, Posts.CreatePagePostError>`
- **Wire**: `POST /{page_id}/feed`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Posts.CreatePagePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.CreatePagePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `body` | `body` | — | `PostCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostCreate` | `postCreateSchema` | `src/models/post-create.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deletePost

- **Signature**: `deletePost(request: Posts.DeletePostRequest, options?: RequestOptions): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.DeletePostError>`
- **Wire**: `DELETE /{post_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Posts.DeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.DeletePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `postId` | `path` | `post_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema` | `src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPageFeed

- **Signature**: `getPageFeed(request: Posts.GetPageFeedRequest, options?: RequestOptions): ApiPromise<PostList, Posts.GetPageFeedError>`
- **Wire**: `GET /{page_id}/feed`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Posts.GetPageFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.GetPageFeedRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostList` | `postListSchema` | `src/models/post-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPost

- **Signature**: `getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise<Post, Posts.GetPostError>`
- **Wire**: `GET /{post_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Post`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Posts.GetPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.GetPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `postId` | `path` | `post_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Post` | `postSchema` | `src/models/post.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePost

- **Signature**: `updatePost(request: Posts.UpdatePostRequest, options?: RequestOptions): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.UpdatePostError>`
- **Wire**: `POST /{post_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Posts.UpdatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.UpdatePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `postId` | `path` | `post_id` | `string` | yes |
| `body` | `body` | — | `Request` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Request` | `requestSchema` | `src/models/request.ts` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema` | `src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

