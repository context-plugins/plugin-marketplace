<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommentApi — operations

Accessor: `client.commentApi` · Source: `src/resources/comment-api.ts` · 11 operations · Request and error types: namespace `CommentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### commentCreate

- **Signature**: `commentCreate(request?: CommentApi.CommentCreateRequest, options?: RequestOptions): ApiPromise<ApiV1CommentResponse, CommentApi.CommentCreateError>`
- **Wire**: `POST /api/v1/comment/`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Comment400Error1"` [400] `ApiV1Comment400Error1` · `"apiV1Comment401Error1"` [401] `ApiV1Comment401Error1` · `"apiV1Comment403Error1"` [403] `ApiV1Comment403Error1` · `"apiV1Comment404Error1"` [404] `ApiV1Comment404Error1` · `"apiV1Comment429Error1"` [429] `ApiV1Comment429Error1` · `"apiV1Comment500Error1"` [500] `ApiV1Comment500Error1` · `"apiV1Comment502Error1"` [502] `ApiV1Comment502Error1` · `"apiV1Comment503Error1"` [503] `ApiV1Comment503Error1` · `"apiV1Comment504Error1"` [504] `ApiV1Comment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1CommentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentRequest1` | `apiV1CommentRequest1Schema` | `src/models/api-v1-comment-request1.ts` |
| `ApiV1CommentResponse` | `apiV1CommentResponseSchema` | `src/models/api-v1-comment-response.ts` |
| `ApiV1Comment400Error1` | `apiV1Comment400Error1Schema` | `src/models/api-v1-comment400-error1.ts` |
| `ApiV1Comment401Error1` | `apiV1Comment401Error1Schema` | `src/models/api-v1-comment401-error1.ts` |
| `ApiV1Comment403Error1` | `apiV1Comment403Error1Schema` | `src/models/api-v1-comment403-error1.ts` |
| `ApiV1Comment404Error1` | `apiV1Comment404Error1Schema` | `src/models/api-v1-comment404-error1.ts` |
| `ApiV1Comment429Error1` | `apiV1Comment429Error1Schema` | `src/models/api-v1-comment429-error1.ts` |
| `ApiV1Comment500Error1` | `apiV1Comment500Error1Schema` | `src/models/api-v1-comment500-error1.ts` |
| `ApiV1Comment502Error1` | `apiV1Comment502Error1Schema` | `src/models/api-v1-comment502-error1.ts` |
| `ApiV1Comment503Error1` | `apiV1Comment503Error1Schema` | `src/models/api-v1-comment503-error1.ts` |
| `ApiV1Comment504Error1` | `apiV1Comment504Error1Schema` | `src/models/api-v1-comment504-error1.ts` |

### commentDelete

- **Signature**: `commentDelete(request: CommentApi.CommentDeleteRequest, options?: RequestOptions): ApiPromise<ApiV1CommentResponse, CommentApi.CommentDeleteError>`
- **Wire**: `DELETE /api/v1/comment/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Comment400Error1"` [400] `ApiV1Comment400Error1` · `"apiV1Comment401Error1"` [401] `ApiV1Comment401Error1` · `"apiV1Comment403Error1"` [403] `ApiV1Comment403Error1` · `"apiV1Comment404Error1"` [404] `ApiV1Comment404Error1` · `"apiV1Comment429Error1"` [429] `ApiV1Comment429Error1` · `"apiV1Comment500Error1"` [500] `ApiV1Comment500Error1` · `"apiV1Comment502Error1"` [502] `ApiV1Comment502Error1` · `"apiV1Comment503Error1"` [503] `ApiV1Comment503Error1` · `"apiV1Comment504Error1"` [504] `ApiV1Comment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentResponse` | `apiV1CommentResponseSchema` | `src/models/api-v1-comment-response.ts` |
| `ApiV1Comment400Error1` | `apiV1Comment400Error1Schema` | `src/models/api-v1-comment400-error1.ts` |
| `ApiV1Comment401Error1` | `apiV1Comment401Error1Schema` | `src/models/api-v1-comment401-error1.ts` |
| `ApiV1Comment403Error1` | `apiV1Comment403Error1Schema` | `src/models/api-v1-comment403-error1.ts` |
| `ApiV1Comment404Error1` | `apiV1Comment404Error1Schema` | `src/models/api-v1-comment404-error1.ts` |
| `ApiV1Comment429Error1` | `apiV1Comment429Error1Schema` | `src/models/api-v1-comment429-error1.ts` |
| `ApiV1Comment500Error1` | `apiV1Comment500Error1Schema` | `src/models/api-v1-comment500-error1.ts` |
| `ApiV1Comment502Error1` | `apiV1Comment502Error1Schema` | `src/models/api-v1-comment502-error1.ts` |
| `ApiV1Comment503Error1` | `apiV1Comment503Error1Schema` | `src/models/api-v1-comment503-error1.ts` |
| `ApiV1Comment504Error1` | `apiV1Comment504Error1Schema` | `src/models/api-v1-comment504-error1.ts` |

### commentGet

- **Signature**: `commentGet(request: CommentApi.CommentGetRequest, options?: RequestOptions): ApiPromise<ApiV1CommentResponse, CommentApi.CommentGetError>`
- **Wire**: `GET /api/v1/comment/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Comment400Error1"` [400] `ApiV1Comment400Error1` · `"apiV1Comment401Error1"` [401] `ApiV1Comment401Error1` · `"apiV1Comment403Error1"` [403] `ApiV1Comment403Error1` · `"apiV1Comment404Error1"` [404] `ApiV1Comment404Error1` · `"apiV1Comment429Error1"` [429] `ApiV1Comment429Error1` · `"apiV1Comment500Error1"` [500] `ApiV1Comment500Error1` · `"apiV1Comment502Error1"` [502] `ApiV1Comment502Error1` · `"apiV1Comment503Error1"` [503] `ApiV1Comment503Error1` · `"apiV1Comment504Error1"` [504] `ApiV1Comment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentResponse` | `apiV1CommentResponseSchema` | `src/models/api-v1-comment-response.ts` |
| `ApiV1Comment400Error1` | `apiV1Comment400Error1Schema` | `src/models/api-v1-comment400-error1.ts` |
| `ApiV1Comment401Error1` | `apiV1Comment401Error1Schema` | `src/models/api-v1-comment401-error1.ts` |
| `ApiV1Comment403Error1` | `apiV1Comment403Error1Schema` | `src/models/api-v1-comment403-error1.ts` |
| `ApiV1Comment404Error1` | `apiV1Comment404Error1Schema` | `src/models/api-v1-comment404-error1.ts` |
| `ApiV1Comment429Error1` | `apiV1Comment429Error1Schema` | `src/models/api-v1-comment429-error1.ts` |
| `ApiV1Comment500Error1` | `apiV1Comment500Error1Schema` | `src/models/api-v1-comment500-error1.ts` |
| `ApiV1Comment502Error1` | `apiV1Comment502Error1Schema` | `src/models/api-v1-comment502-error1.ts` |
| `ApiV1Comment503Error1` | `apiV1Comment503Error1Schema` | `src/models/api-v1-comment503-error1.ts` |
| `ApiV1Comment504Error1` | `apiV1Comment504Error1Schema` | `src/models/api-v1-comment504-error1.ts` |

### commentGetList

- **Signature**: `commentGetList(request: CommentApi.CommentGetListRequest, options?: RequestOptions): ApiPromise<ApiV1CommentResponse3, CommentApi.CommentGetListError>`
- **Wire**: `GET /api/v1/comment/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CommentResponse3`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Comment400Error1"` [400] `ApiV1Comment400Error1` · `"apiV1Comment401Error1"` [401] `ApiV1Comment401Error1` · `"apiV1Comment403Error1"` [403] `ApiV1Comment403Error1` · `"apiV1Comment404Error1"` [404] `ApiV1Comment404Error1` · `"apiV1Comment429Error1"` [429] `ApiV1Comment429Error1` · `"apiV1Comment500Error1"` [500] `ApiV1Comment500Error1` · `"apiV1Comment502Error1"` [502] `ApiV1Comment502Error1` · `"apiV1Comment503Error1"` [503] `ApiV1Comment503Error1` · `"apiV1Comment504Error1"` [504] `ApiV1Comment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentGetListRequest` (10):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `postId` | `query` | `string` | no | — |
| `importedPostId` | `query` | `string` | no | — |
| `status` | `query` | `Status4` | no | — |
| `orderBy` | `query` | `OrderBy` | no | — |
| `order` | `query` | `Order` | no | — |
| `q` | `query` | `string` | no | — |
| `platforms` | `query` | `Platform6[]` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status4` | `status4Schema` | `src/models/status4.ts` |
| `OrderBy` | `orderBySchema` | `src/models/order-by.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Platform6` | `platform6Schema` | `src/models/platform6.ts` |
| `ApiV1CommentResponse3` | `apiV1CommentResponse3Schema` | `src/models/api-v1-comment-response3.ts` |
| `ApiV1Comment400Error1` | `apiV1Comment400Error1Schema` | `src/models/api-v1-comment400-error1.ts` |
| `ApiV1Comment401Error1` | `apiV1Comment401Error1Schema` | `src/models/api-v1-comment401-error1.ts` |
| `ApiV1Comment403Error1` | `apiV1Comment403Error1Schema` | `src/models/api-v1-comment403-error1.ts` |
| `ApiV1Comment404Error1` | `apiV1Comment404Error1Schema` | `src/models/api-v1-comment404-error1.ts` |
| `ApiV1Comment429Error1` | `apiV1Comment429Error1Schema` | `src/models/api-v1-comment429-error1.ts` |
| `ApiV1Comment500Error1` | `apiV1Comment500Error1Schema` | `src/models/api-v1-comment500-error1.ts` |
| `ApiV1Comment502Error1` | `apiV1Comment502Error1Schema` | `src/models/api-v1-comment502-error1.ts` |
| `ApiV1Comment503Error1` | `apiV1Comment503Error1Schema` | `src/models/api-v1-comment503-error1.ts` |
| `ApiV1Comment504Error1` | `apiV1Comment504Error1Schema` | `src/models/api-v1-comment504-error1.ts` |

### commentImportActionFetchedComment

- **Signature**: `commentImportActionFetchedComment(request: CommentApi.CommentImportActionFetchedCommentRequest, options?: RequestOptions): ApiPromise<ApiV1CommentImportCommentsActionResponse, CommentApi.CommentImportActionFetchedCommentError>`
- **Wire**: `POST /api/v1/comment/import/comments/{commentId}/action`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CommentImportCommentsActionResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentImportActionFetchedCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CommentImportCommentsAction400Error1"` [400] `ApiV1CommentImportCommentsAction400Error1` · `"apiV1CommentImportCommentsAction401Error1"` [401] `ApiV1CommentImportCommentsAction401Error1` · `"apiV1CommentImportCommentsAction403Error1"` [403] `ApiV1CommentImportCommentsAction403Error1` · `"apiV1CommentImportCommentsAction404Error1"` [404] `ApiV1CommentImportCommentsAction404Error1` · `"apiV1CommentImportCommentsAction429Error1"` [429] `ApiV1CommentImportCommentsAction429Error1` · `"apiV1CommentImportCommentsAction500Error1"` [500] `ApiV1CommentImportCommentsAction500Error1` · `"apiV1CommentImportCommentsAction502Error1"` [502] `ApiV1CommentImportCommentsAction502Error1` · `"apiV1CommentImportCommentsAction503Error1"` [503] `ApiV1CommentImportCommentsAction503Error1` · `"apiV1CommentImportCommentsAction504Error1"` [504] `ApiV1CommentImportCommentsAction504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentImportActionFetchedCommentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `commentId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1CommentImportCommentsActionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentImportCommentsActionRequest` | `apiV1CommentImportCommentsActionRequestSchema` | `src/models/api-v1-comment-import-comments-action-request.ts` |
| `ApiV1CommentImportCommentsActionResponse` | `apiV1CommentImportCommentsActionResponseSchema` | `src/models/api-v1-comment-import-comments-action-response.ts` |
| `ApiV1CommentImportCommentsAction400Error1` | `apiV1CommentImportCommentsAction400Error1Schema` | `src/models/api-v1-comment-import-comments-action400-error1.ts` |
| `ApiV1CommentImportCommentsAction401Error1` | `apiV1CommentImportCommentsAction401Error1Schema` | `src/models/api-v1-comment-import-comments-action401-error1.ts` |
| `ApiV1CommentImportCommentsAction403Error1` | `apiV1CommentImportCommentsAction403Error1Schema` | `src/models/api-v1-comment-import-comments-action403-error1.ts` |
| `ApiV1CommentImportCommentsAction404Error1` | `apiV1CommentImportCommentsAction404Error1Schema` | `src/models/api-v1-comment-import-comments-action404-error1.ts` |
| `ApiV1CommentImportCommentsAction429Error1` | `apiV1CommentImportCommentsAction429Error1Schema` | `src/models/api-v1-comment-import-comments-action429-error1.ts` |
| `ApiV1CommentImportCommentsAction500Error1` | `apiV1CommentImportCommentsAction500Error1Schema` | `src/models/api-v1-comment-import-comments-action500-error1.ts` |
| `ApiV1CommentImportCommentsAction502Error1` | `apiV1CommentImportCommentsAction502Error1Schema` | `src/models/api-v1-comment-import-comments-action502-error1.ts` |
| `ApiV1CommentImportCommentsAction503Error1` | `apiV1CommentImportCommentsAction503Error1Schema` | `src/models/api-v1-comment-import-comments-action503-error1.ts` |
| `ApiV1CommentImportCommentsAction504Error1` | `apiV1CommentImportCommentsAction504Error1Schema` | `src/models/api-v1-comment-import-comments-action504-error1.ts` |

### commentImportCreate

- **Signature**: `commentImportCreate(request?: CommentApi.CommentImportCreateRequest, options?: RequestOptions): ApiPromise<ApiV1CommentImportResponse, CommentApi.CommentImportCreateError>`
- **Wire**: `POST /api/v1/comment/import`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CommentImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentImportCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CommentImport400Error1"` [400] `ApiV1CommentImport400Error1` · `"apiV1CommentImport401Error1"` [401] `ApiV1CommentImport401Error1` · `"apiV1CommentImport403Error1"` [403] `ApiV1CommentImport403Error1` · `"apiV1CommentImport404Error1"` [404] `ApiV1CommentImport404Error1` · `"apiV1CommentImport409Error1"` [409] `ApiV1CommentImport409Error1` · `"apiV1CommentImport429Error1"` [429] `ApiV1CommentImport429Error1` · `"apiV1CommentImport500Error1"` [500] `ApiV1CommentImport500Error1` · `"apiV1CommentImport502Error1"` [502] `ApiV1CommentImport502Error1` · `"apiV1CommentImport503Error1"` [503] `ApiV1CommentImport503Error1` · `"apiV1CommentImport504Error1"` [504] `ApiV1CommentImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentImportCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1CommentImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentImportRequest` | `apiV1CommentImportRequestSchema` | `src/models/api-v1-comment-import-request.ts` |
| `ApiV1CommentImportResponse` | `apiV1CommentImportResponseSchema` | `src/models/api-v1-comment-import-response.ts` |
| `ApiV1CommentImport400Error1` | `apiV1CommentImport400Error1Schema` | `src/models/api-v1-comment-import400-error1.ts` |
| `ApiV1CommentImport401Error1` | `apiV1CommentImport401Error1Schema` | `src/models/api-v1-comment-import401-error1.ts` |
| `ApiV1CommentImport403Error1` | `apiV1CommentImport403Error1Schema` | `src/models/api-v1-comment-import403-error1.ts` |
| `ApiV1CommentImport404Error1` | `apiV1CommentImport404Error1Schema` | `src/models/api-v1-comment-import404-error1.ts` |
| `ApiV1CommentImport409Error1` | `apiV1CommentImport409Error1Schema` | `src/models/api-v1-comment-import409-error1.ts` |
| `ApiV1CommentImport429Error1` | `apiV1CommentImport429Error1Schema` | `src/models/api-v1-comment-import429-error1.ts` |
| `ApiV1CommentImport500Error1` | `apiV1CommentImport500Error1Schema` | `src/models/api-v1-comment-import500-error1.ts` |
| `ApiV1CommentImport502Error1` | `apiV1CommentImport502Error1Schema` | `src/models/api-v1-comment-import502-error1.ts` |
| `ApiV1CommentImport503Error1` | `apiV1CommentImport503Error1Schema` | `src/models/api-v1-comment-import503-error1.ts` |
| `ApiV1CommentImport504Error1` | `apiV1CommentImport504Error1Schema` | `src/models/api-v1-comment-import504-error1.ts` |

### commentImportGetById

- **Signature**: `commentImportGetById(request: CommentApi.CommentImportGetByIdRequest, options?: RequestOptions): ApiPromise<ApiV1CommentImportResponse, CommentApi.CommentImportGetByIdError>`
- **Wire**: `GET /api/v1/comment/import/{importId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CommentImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentImportGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CommentImport400Error1"` [400] `ApiV1CommentImport400Error1` · `"apiV1CommentImport401Error1"` [401] `ApiV1CommentImport401Error1` · `"apiV1CommentImport403Error1"` [403] `ApiV1CommentImport403Error1` · `"apiV1CommentImport404Error1"` [404] `ApiV1CommentImport404Error1` · `"apiV1CommentImport429Error1"` [429] `ApiV1CommentImport429Error1` · `"apiV1CommentImport500Error1"` [500] `ApiV1CommentImport500Error1` · `"apiV1CommentImport502Error1"` [502] `ApiV1CommentImport502Error1` · `"apiV1CommentImport503Error1"` [503] `ApiV1CommentImport503Error1` · `"apiV1CommentImport504Error1"` [504] `ApiV1CommentImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentImportGetByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentImportResponse` | `apiV1CommentImportResponseSchema` | `src/models/api-v1-comment-import-response.ts` |
| `ApiV1CommentImport400Error1` | `apiV1CommentImport400Error1Schema` | `src/models/api-v1-comment-import400-error1.ts` |
| `ApiV1CommentImport401Error1` | `apiV1CommentImport401Error1Schema` | `src/models/api-v1-comment-import401-error1.ts` |
| `ApiV1CommentImport403Error1` | `apiV1CommentImport403Error1Schema` | `src/models/api-v1-comment-import403-error1.ts` |
| `ApiV1CommentImport404Error1` | `apiV1CommentImport404Error1Schema` | `src/models/api-v1-comment-import404-error1.ts` |
| `ApiV1CommentImport429Error1` | `apiV1CommentImport429Error1Schema` | `src/models/api-v1-comment-import429-error1.ts` |
| `ApiV1CommentImport500Error1` | `apiV1CommentImport500Error1Schema` | `src/models/api-v1-comment-import500-error1.ts` |
| `ApiV1CommentImport502Error1` | `apiV1CommentImport502Error1Schema` | `src/models/api-v1-comment-import502-error1.ts` |
| `ApiV1CommentImport503Error1` | `apiV1CommentImport503Error1Schema` | `src/models/api-v1-comment-import503-error1.ts` |
| `ApiV1CommentImport504Error1` | `apiV1CommentImport504Error1Schema` | `src/models/api-v1-comment-import504-error1.ts` |

### commentImportGetFetchedComments

- **Signature**: `commentImportGetFetchedComments(request: CommentApi.CommentImportGetFetchedCommentsRequest, options?: RequestOptions): ApiPromise<ApiV1CommentImportCommentsResponse, CommentApi.CommentImportGetFetchedCommentsError>`
- **Wire**: `GET /api/v1/comment/import/comments`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CommentImportCommentsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentImportGetFetchedCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CommentImportComments400Error1"` [400] `ApiV1CommentImportComments400Error1` · `"apiV1CommentImportComments401Error1"` [401] `ApiV1CommentImportComments401Error1` · `"apiV1CommentImportComments403Error1"` [403] `ApiV1CommentImportComments403Error1` · `"apiV1CommentImportComments404Error1"` [404] `ApiV1CommentImportComments404Error1` · `"apiV1CommentImportComments429Error1"` [429] `ApiV1CommentImportComments429Error1` · `"apiV1CommentImportComments500Error1"` [500] `ApiV1CommentImportComments500Error1` · `"apiV1CommentImportComments502Error1"` [502] `ApiV1CommentImportComments502Error1` · `"apiV1CommentImportComments503Error1"` [503] `ApiV1CommentImportComments503Error1` · `"apiV1CommentImportComments504Error1"` [504] `ApiV1CommentImportComments504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentImportGetFetchedCommentsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `postId` | `query` | `string` | no | — |
| `importedPostId` | `query` | `string` | no | — |
| `platform` | `query` | `PlatformBundleSocialCommentApi` | no | — |
| `socialAccountId` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformBundleSocialCommentApi` | `platformBundleSocialCommentApiSchema` | `src/models/platform-bundle-social-comment-api.ts` |
| `ApiV1CommentImportCommentsResponse` | `apiV1CommentImportCommentsResponseSchema` | `src/models/api-v1-comment-import-comments-response.ts` |
| `ApiV1CommentImportComments400Error1` | `apiV1CommentImportComments400Error1Schema` | `src/models/api-v1-comment-import-comments400-error1.ts` |
| `ApiV1CommentImportComments401Error1` | `apiV1CommentImportComments401Error1Schema` | `src/models/api-v1-comment-import-comments401-error1.ts` |
| `ApiV1CommentImportComments403Error1` | `apiV1CommentImportComments403Error1Schema` | `src/models/api-v1-comment-import-comments403-error1.ts` |
| `ApiV1CommentImportComments404Error1` | `apiV1CommentImportComments404Error1Schema` | `src/models/api-v1-comment-import-comments404-error1.ts` |
| `ApiV1CommentImportComments429Error1` | `apiV1CommentImportComments429Error1Schema` | `src/models/api-v1-comment-import-comments429-error1.ts` |
| `ApiV1CommentImportComments500Error1` | `apiV1CommentImportComments500Error1Schema` | `src/models/api-v1-comment-import-comments500-error1.ts` |
| `ApiV1CommentImportComments502Error1` | `apiV1CommentImportComments502Error1Schema` | `src/models/api-v1-comment-import-comments502-error1.ts` |
| `ApiV1CommentImportComments503Error1` | `apiV1CommentImportComments503Error1Schema` | `src/models/api-v1-comment-import-comments503-error1.ts` |
| `ApiV1CommentImportComments504Error1` | `apiV1CommentImportComments504Error1Schema` | `src/models/api-v1-comment-import-comments504-error1.ts` |

### commentImportGetList

- **Signature**: `commentImportGetList(request: CommentApi.CommentImportGetListRequest, options?: RequestOptions): ApiPromise<ApiV1CommentImportResponse1, CommentApi.CommentImportGetListError>`
- **Wire**: `GET /api/v1/comment/import`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CommentImportResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentImportGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CommentImport400Error1"` [400] `ApiV1CommentImport400Error1` · `"apiV1CommentImport401Error1"` [401] `ApiV1CommentImport401Error1` · `"apiV1CommentImport403Error1"` [403] `ApiV1CommentImport403Error1` · `"apiV1CommentImport404Error1"` [404] `ApiV1CommentImport404Error1` · `"apiV1CommentImport429Error1"` [429] `ApiV1CommentImport429Error1` · `"apiV1CommentImport500Error1"` [500] `ApiV1CommentImport500Error1` · `"apiV1CommentImport502Error1"` [502] `ApiV1CommentImport502Error1` · `"apiV1CommentImport503Error1"` [503] `ApiV1CommentImport503Error1` · `"apiV1CommentImport504Error1"` [504] `ApiV1CommentImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentImportGetListRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `postId` | `query` | `string` | no | — |
| `importedPostId` | `query` | `string` | no | — |
| `status` | `query` | `StatusBundleSocialCommentApi` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusBundleSocialCommentApi` | `statusBundleSocialCommentApiSchema` | `src/models/status-bundle-social-comment-api.ts` |
| `ApiV1CommentImportResponse1` | `apiV1CommentImportResponse1Schema` | `src/models/api-v1-comment-import-response1.ts` |
| `ApiV1CommentImport400Error1` | `apiV1CommentImport400Error1Schema` | `src/models/api-v1-comment-import400-error1.ts` |
| `ApiV1CommentImport401Error1` | `apiV1CommentImport401Error1Schema` | `src/models/api-v1-comment-import401-error1.ts` |
| `ApiV1CommentImport403Error1` | `apiV1CommentImport403Error1Schema` | `src/models/api-v1-comment-import403-error1.ts` |
| `ApiV1CommentImport404Error1` | `apiV1CommentImport404Error1Schema` | `src/models/api-v1-comment-import404-error1.ts` |
| `ApiV1CommentImport429Error1` | `apiV1CommentImport429Error1Schema` | `src/models/api-v1-comment-import429-error1.ts` |
| `ApiV1CommentImport500Error1` | `apiV1CommentImport500Error1Schema` | `src/models/api-v1-comment-import500-error1.ts` |
| `ApiV1CommentImport502Error1` | `apiV1CommentImport502Error1Schema` | `src/models/api-v1-comment-import502-error1.ts` |
| `ApiV1CommentImport503Error1` | `apiV1CommentImport503Error1Schema` | `src/models/api-v1-comment-import503-error1.ts` |
| `ApiV1CommentImport504Error1` | `apiV1CommentImport504Error1Schema` | `src/models/api-v1-comment-import504-error1.ts` |

### commentRetry

- **Signature**: `commentRetry(request: CommentApi.CommentRetryRequest, options?: RequestOptions): ApiPromise<ApiV1CommentRetryResponse, CommentApi.CommentRetryError>`
- **Wire**: `POST /api/v1/comment/{id}/retry`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CommentRetryResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentRetryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CommentRetry400Error1"` [400] `ApiV1CommentRetry400Error1` · `"apiV1CommentRetry401Error1"` [401] `ApiV1CommentRetry401Error1` · `"apiV1CommentRetry403Error1"` [403] `ApiV1CommentRetry403Error1` · `"apiV1CommentRetry404Error1"` [404] `ApiV1CommentRetry404Error1` · `"apiV1CommentRetry429Error1"` [429] `ApiV1CommentRetry429Error1` · `"apiV1CommentRetry500Error1"` [500] `ApiV1CommentRetry500Error1` · `"apiV1CommentRetry502Error1"` [502] `ApiV1CommentRetry502Error1` · `"apiV1CommentRetry503Error1"` [503] `ApiV1CommentRetry503Error1` · `"apiV1CommentRetry504Error1"` [504] `ApiV1CommentRetry504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentRetryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentRetryResponse` | `apiV1CommentRetryResponseSchema` | `src/models/api-v1-comment-retry-response.ts` |
| `ApiV1CommentRetry400Error1` | `apiV1CommentRetry400Error1Schema` | `src/models/api-v1-comment-retry400-error1.ts` |
| `ApiV1CommentRetry401Error1` | `apiV1CommentRetry401Error1Schema` | `src/models/api-v1-comment-retry401-error1.ts` |
| `ApiV1CommentRetry403Error1` | `apiV1CommentRetry403Error1Schema` | `src/models/api-v1-comment-retry403-error1.ts` |
| `ApiV1CommentRetry404Error1` | `apiV1CommentRetry404Error1Schema` | `src/models/api-v1-comment-retry404-error1.ts` |
| `ApiV1CommentRetry429Error1` | `apiV1CommentRetry429Error1Schema` | `src/models/api-v1-comment-retry429-error1.ts` |
| `ApiV1CommentRetry500Error1` | `apiV1CommentRetry500Error1Schema` | `src/models/api-v1-comment-retry500-error1.ts` |
| `ApiV1CommentRetry502Error1` | `apiV1CommentRetry502Error1Schema` | `src/models/api-v1-comment-retry502-error1.ts` |
| `ApiV1CommentRetry503Error1` | `apiV1CommentRetry503Error1Schema` | `src/models/api-v1-comment-retry503-error1.ts` |
| `ApiV1CommentRetry504Error1` | `apiV1CommentRetry504Error1Schema` | `src/models/api-v1-comment-retry504-error1.ts` |

### commentUpdate

- **Signature**: `commentUpdate(request: CommentApi.CommentUpdateRequest, options?: RequestOptions): ApiPromise<ApiV1CommentResponse, CommentApi.CommentUpdateError>`
- **Wire**: `PATCH /api/v1/comment/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `CommentApi.CommentUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Comment400Error1"` [400] `ApiV1Comment400Error1` · `"apiV1Comment401Error1"` [401] `ApiV1Comment401Error1` · `"apiV1Comment403Error1"` [403] `ApiV1Comment403Error1` · `"apiV1Comment404Error1"` [404] `ApiV1Comment404Error1` · `"apiV1Comment429Error1"` [429] `ApiV1Comment429Error1` · `"apiV1Comment500Error1"` [500] `ApiV1Comment500Error1` · `"apiV1Comment502Error1"` [502] `ApiV1Comment502Error1` · `"apiV1Comment503Error1"` [503] `ApiV1Comment503Error1` · `"apiV1Comment504Error1"` [504] `ApiV1Comment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CommentApi.CommentUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1CommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentRequest` | `apiV1CommentRequestSchema` | `src/models/api-v1-comment-request.ts` |
| `ApiV1CommentResponse` | `apiV1CommentResponseSchema` | `src/models/api-v1-comment-response.ts` |
| `ApiV1Comment400Error1` | `apiV1Comment400Error1Schema` | `src/models/api-v1-comment400-error1.ts` |
| `ApiV1Comment401Error1` | `apiV1Comment401Error1Schema` | `src/models/api-v1-comment401-error1.ts` |
| `ApiV1Comment403Error1` | `apiV1Comment403Error1Schema` | `src/models/api-v1-comment403-error1.ts` |
| `ApiV1Comment404Error1` | `apiV1Comment404Error1Schema` | `src/models/api-v1-comment404-error1.ts` |
| `ApiV1Comment429Error1` | `apiV1Comment429Error1Schema` | `src/models/api-v1-comment429-error1.ts` |
| `ApiV1Comment500Error1` | `apiV1Comment500Error1Schema` | `src/models/api-v1-comment500-error1.ts` |
| `ApiV1Comment502Error1` | `apiV1Comment502Error1Schema` | `src/models/api-v1-comment502-error1.ts` |
| `ApiV1Comment503Error1` | `apiV1Comment503Error1Schema` | `src/models/api-v1-comment503-error1.ts` |
| `ApiV1Comment504Error1` | `apiV1Comment504Error1Schema` | `src/models/api-v1-comment504-error1.ts` |

