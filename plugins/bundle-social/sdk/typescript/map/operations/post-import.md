<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostImport — operations

Accessor: `client.postImport` · Source: `src/resources/post-import.ts` · 6 operations · Request and error types: namespace `PostImport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postImportCreate

- **Signature**: `postImportCreate(request?: PostImport.PostImportCreateRequest, options?: RequestOptions): ApiPromise<ApiV1PostHistoryImportResponse, PostImport.PostImportCreateError>`
- **Wire**: `POST /api/v1/post-history-import/`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostHistoryImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostImport.PostImportCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostHistoryImport400Error1"` [400] `ApiV1PostHistoryImport400Error1` · `"apiV1PostHistoryImport401Error1"` [401] `ApiV1PostHistoryImport401Error1` · `"apiV1PostHistoryImport403Error1"` [403] `ApiV1PostHistoryImport403Error1` · `"apiV1PostHistoryImport404Error1"` [404] `ApiV1PostHistoryImport404Error1` · `"apiV1PostHistoryImport409Error1"` [409] `ApiV1PostHistoryImport409Error1` · `"apiV1PostHistoryImport429Error1"` [429] `ApiV1PostHistoryImport429Error1` · `"apiV1PostHistoryImport500Error1"` [500] `ApiV1PostHistoryImport500Error1` · `"apiV1PostHistoryImport502Error1"` [502] `ApiV1PostHistoryImport502Error1` · `"apiV1PostHistoryImport503Error1"` [503] `ApiV1PostHistoryImport503Error1` · `"apiV1PostHistoryImport504Error1"` [504] `ApiV1PostHistoryImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostImport.PostImportCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PostHistoryImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostHistoryImportRequest` | `apiV1PostHistoryImportRequestSchema` | `src/models/api-v1-post-history-import-request.ts` |
| `ApiV1PostHistoryImportResponse` | `apiV1PostHistoryImportResponseSchema` | `src/models/api-v1-post-history-import-response.ts` |
| `ApiV1PostHistoryImport400Error1` | `apiV1PostHistoryImport400Error1Schema` | `src/models/api-v1-post-history-import400-error1.ts` |
| `ApiV1PostHistoryImport401Error1` | `apiV1PostHistoryImport401Error1Schema` | `src/models/api-v1-post-history-import401-error1.ts` |
| `ApiV1PostHistoryImport403Error1` | `apiV1PostHistoryImport403Error1Schema` | `src/models/api-v1-post-history-import403-error1.ts` |
| `ApiV1PostHistoryImport404Error1` | `apiV1PostHistoryImport404Error1Schema` | `src/models/api-v1-post-history-import404-error1.ts` |
| `ApiV1PostHistoryImport409Error1` | `apiV1PostHistoryImport409Error1Schema` | `src/models/api-v1-post-history-import409-error1.ts` |
| `ApiV1PostHistoryImport429Error1` | `apiV1PostHistoryImport429Error1Schema` | `src/models/api-v1-post-history-import429-error1.ts` |
| `ApiV1PostHistoryImport500Error1` | `apiV1PostHistoryImport500Error1Schema` | `src/models/api-v1-post-history-import500-error1.ts` |
| `ApiV1PostHistoryImport502Error1` | `apiV1PostHistoryImport502Error1Schema` | `src/models/api-v1-post-history-import502-error1.ts` |
| `ApiV1PostHistoryImport503Error1` | `apiV1PostHistoryImport503Error1Schema` | `src/models/api-v1-post-history-import503-error1.ts` |
| `ApiV1PostHistoryImport504Error1` | `apiV1PostHistoryImport504Error1Schema` | `src/models/api-v1-post-history-import504-error1.ts` |

### postImportDeleteImportedPosts

- **Signature**: `postImportDeleteImportedPosts(request?: PostImport.PostImportDeleteImportedPostsRequest, options?: RequestOptions): ApiPromise<ApiV1PostHistoryImportPostsResponse1, PostImport.PostImportDeleteImportedPostsError>`
- **Wire**: `DELETE /api/v1/post-history-import/posts`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostHistoryImportPostsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostImport.PostImportDeleteImportedPostsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostHistoryImportPosts400Error1"` [400] `ApiV1PostHistoryImportPosts400Error1` · `"apiV1PostHistoryImportPosts401Error1"` [401] `ApiV1PostHistoryImportPosts401Error1` · `"apiV1PostHistoryImportPosts403Error1"` [403] `ApiV1PostHistoryImportPosts403Error1` · `"apiV1PostHistoryImportPosts404Error1"` [404] `ApiV1PostHistoryImportPosts404Error1` · `"apiV1PostHistoryImportPosts429Error1"` [429] `ApiV1PostHistoryImportPosts429Error1` · `"apiV1PostHistoryImportPosts500Error1"` [500] `ApiV1PostHistoryImportPosts500Error1` · `"apiV1PostHistoryImportPosts502Error1"` [502] `ApiV1PostHistoryImportPosts502Error1` · `"apiV1PostHistoryImportPosts503Error1"` [503] `ApiV1PostHistoryImportPosts503Error1` · `"apiV1PostHistoryImportPosts504Error1"` [504] `ApiV1PostHistoryImportPosts504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostImport.PostImportDeleteImportedPostsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PostHistoryImportPostsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostHistoryImportPostsRequest` | `apiV1PostHistoryImportPostsRequestSchema` | `src/models/api-v1-post-history-import-posts-request.ts` |
| `ApiV1PostHistoryImportPostsResponse1` | `apiV1PostHistoryImportPostsResponse1Schema` | `src/models/api-v1-post-history-import-posts-response1.ts` |
| `ApiV1PostHistoryImportPosts400Error1` | `apiV1PostHistoryImportPosts400Error1Schema` | `src/models/api-v1-post-history-import-posts400-error1.ts` |
| `ApiV1PostHistoryImportPosts401Error1` | `apiV1PostHistoryImportPosts401Error1Schema` | `src/models/api-v1-post-history-import-posts401-error1.ts` |
| `ApiV1PostHistoryImportPosts403Error1` | `apiV1PostHistoryImportPosts403Error1Schema` | `src/models/api-v1-post-history-import-posts403-error1.ts` |
| `ApiV1PostHistoryImportPosts404Error1` | `apiV1PostHistoryImportPosts404Error1Schema` | `src/models/api-v1-post-history-import-posts404-error1.ts` |
| `ApiV1PostHistoryImportPosts429Error1` | `apiV1PostHistoryImportPosts429Error1Schema` | `src/models/api-v1-post-history-import-posts429-error1.ts` |
| `ApiV1PostHistoryImportPosts500Error1` | `apiV1PostHistoryImportPosts500Error1Schema` | `src/models/api-v1-post-history-import-posts500-error1.ts` |
| `ApiV1PostHistoryImportPosts502Error1` | `apiV1PostHistoryImportPosts502Error1Schema` | `src/models/api-v1-post-history-import-posts502-error1.ts` |
| `ApiV1PostHistoryImportPosts503Error1` | `apiV1PostHistoryImportPosts503Error1Schema` | `src/models/api-v1-post-history-import-posts503-error1.ts` |
| `ApiV1PostHistoryImportPosts504Error1` | `apiV1PostHistoryImportPosts504Error1Schema` | `src/models/api-v1-post-history-import-posts504-error1.ts` |

### postImportGetById

- **Signature**: `postImportGetById(request: PostImport.PostImportGetByIdRequest, options?: RequestOptions): ApiPromise<ApiV1PostHistoryImportResponse, PostImport.PostImportGetByIdError>`
- **Wire**: `GET /api/v1/post-history-import/{importId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostHistoryImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostImport.PostImportGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostHistoryImport400Error1"` [400] `ApiV1PostHistoryImport400Error1` · `"apiV1PostHistoryImport401Error1"` [401] `ApiV1PostHistoryImport401Error1` · `"apiV1PostHistoryImport403Error1"` [403] `ApiV1PostHistoryImport403Error1` · `"apiV1PostHistoryImport404Error1"` [404] `ApiV1PostHistoryImport404Error1` · `"apiV1PostHistoryImport429Error1"` [429] `ApiV1PostHistoryImport429Error1` · `"apiV1PostHistoryImport500Error1"` [500] `ApiV1PostHistoryImport500Error1` · `"apiV1PostHistoryImport502Error1"` [502] `ApiV1PostHistoryImport502Error1` · `"apiV1PostHistoryImport503Error1"` [503] `ApiV1PostHistoryImport503Error1` · `"apiV1PostHistoryImport504Error1"` [504] `ApiV1PostHistoryImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostImport.PostImportGetByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostHistoryImportResponse` | `apiV1PostHistoryImportResponseSchema` | `src/models/api-v1-post-history-import-response.ts` |
| `ApiV1PostHistoryImport400Error1` | `apiV1PostHistoryImport400Error1Schema` | `src/models/api-v1-post-history-import400-error1.ts` |
| `ApiV1PostHistoryImport401Error1` | `apiV1PostHistoryImport401Error1Schema` | `src/models/api-v1-post-history-import401-error1.ts` |
| `ApiV1PostHistoryImport403Error1` | `apiV1PostHistoryImport403Error1Schema` | `src/models/api-v1-post-history-import403-error1.ts` |
| `ApiV1PostHistoryImport404Error1` | `apiV1PostHistoryImport404Error1Schema` | `src/models/api-v1-post-history-import404-error1.ts` |
| `ApiV1PostHistoryImport429Error1` | `apiV1PostHistoryImport429Error1Schema` | `src/models/api-v1-post-history-import429-error1.ts` |
| `ApiV1PostHistoryImport500Error1` | `apiV1PostHistoryImport500Error1Schema` | `src/models/api-v1-post-history-import500-error1.ts` |
| `ApiV1PostHistoryImport502Error1` | `apiV1PostHistoryImport502Error1Schema` | `src/models/api-v1-post-history-import502-error1.ts` |
| `ApiV1PostHistoryImport503Error1` | `apiV1PostHistoryImport503Error1Schema` | `src/models/api-v1-post-history-import503-error1.ts` |
| `ApiV1PostHistoryImport504Error1` | `apiV1PostHistoryImport504Error1Schema` | `src/models/api-v1-post-history-import504-error1.ts` |

### postImportGetImportedPosts

- **Signature**: `postImportGetImportedPosts(request: PostImport.PostImportGetImportedPostsRequest, options?: RequestOptions): ApiPromise<ApiV1PostHistoryImportPostsResponse, PostImport.PostImportGetImportedPostsError>`
- **Wire**: `GET /api/v1/post-history-import/posts`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostHistoryImportPostsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostImport.PostImportGetImportedPostsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostHistoryImportPosts400Error1"` [400] `ApiV1PostHistoryImportPosts400Error1` · `"apiV1PostHistoryImportPosts401Error1"` [401] `ApiV1PostHistoryImportPosts401Error1` · `"apiV1PostHistoryImportPosts403Error1"` [403] `ApiV1PostHistoryImportPosts403Error1` · `"apiV1PostHistoryImportPosts404Error1"` [404] `ApiV1PostHistoryImportPosts404Error1` · `"apiV1PostHistoryImportPosts429Error1"` [429] `ApiV1PostHistoryImportPosts429Error1` · `"apiV1PostHistoryImportPosts500Error1"` [500] `ApiV1PostHistoryImportPosts500Error1` · `"apiV1PostHistoryImportPosts502Error1"` [502] `ApiV1PostHistoryImportPosts502Error1` · `"apiV1PostHistoryImportPosts503Error1"` [503] `ApiV1PostHistoryImportPosts503Error1` · `"apiV1PostHistoryImportPosts504Error1"` [504] `ApiV1PostHistoryImportPosts504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostImport.PostImportGetImportedPostsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `socialAccountType` | `query` | `SocialAccountTypeBundleSocialPostImportApi` | yes | — |
| `limit` | `query` | `number` | no | `50` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SocialAccountTypeBundleSocialPostImportApi` | `socialAccountTypeBundleSocialPostImportApiSchema` | `src/models/social-account-type-bundle-social-post-import-api.ts` |
| `ApiV1PostHistoryImportPostsResponse` | `apiV1PostHistoryImportPostsResponseSchema` | `src/models/api-v1-post-history-import-posts-response.ts` |
| `ApiV1PostHistoryImportPosts400Error1` | `apiV1PostHistoryImportPosts400Error1Schema` | `src/models/api-v1-post-history-import-posts400-error1.ts` |
| `ApiV1PostHistoryImportPosts401Error1` | `apiV1PostHistoryImportPosts401Error1Schema` | `src/models/api-v1-post-history-import-posts401-error1.ts` |
| `ApiV1PostHistoryImportPosts403Error1` | `apiV1PostHistoryImportPosts403Error1Schema` | `src/models/api-v1-post-history-import-posts403-error1.ts` |
| `ApiV1PostHistoryImportPosts404Error1` | `apiV1PostHistoryImportPosts404Error1Schema` | `src/models/api-v1-post-history-import-posts404-error1.ts` |
| `ApiV1PostHistoryImportPosts429Error1` | `apiV1PostHistoryImportPosts429Error1Schema` | `src/models/api-v1-post-history-import-posts429-error1.ts` |
| `ApiV1PostHistoryImportPosts500Error1` | `apiV1PostHistoryImportPosts500Error1Schema` | `src/models/api-v1-post-history-import-posts500-error1.ts` |
| `ApiV1PostHistoryImportPosts502Error1` | `apiV1PostHistoryImportPosts502Error1Schema` | `src/models/api-v1-post-history-import-posts502-error1.ts` |
| `ApiV1PostHistoryImportPosts503Error1` | `apiV1PostHistoryImportPosts503Error1Schema` | `src/models/api-v1-post-history-import-posts503-error1.ts` |
| `ApiV1PostHistoryImportPosts504Error1` | `apiV1PostHistoryImportPosts504Error1Schema` | `src/models/api-v1-post-history-import-posts504-error1.ts` |

### postImportGetStatus

- **Signature**: `postImportGetStatus(request: PostImport.PostImportGetStatusRequest, options?: RequestOptions): ApiPromise<ApiV1PostHistoryImportResponse1, PostImport.PostImportGetStatusError>`
- **Wire**: `GET /api/v1/post-history-import/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostHistoryImportResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostImport.PostImportGetStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostHistoryImport400Error1"` [400] `ApiV1PostHistoryImport400Error1` · `"apiV1PostHistoryImport401Error1"` [401] `ApiV1PostHistoryImport401Error1` · `"apiV1PostHistoryImport403Error1"` [403] `ApiV1PostHistoryImport403Error1` · `"apiV1PostHistoryImport404Error1"` [404] `ApiV1PostHistoryImport404Error1` · `"apiV1PostHistoryImport429Error1"` [429] `ApiV1PostHistoryImport429Error1` · `"apiV1PostHistoryImport500Error1"` [500] `ApiV1PostHistoryImport500Error1` · `"apiV1PostHistoryImport502Error1"` [502] `ApiV1PostHistoryImport502Error1` · `"apiV1PostHistoryImport503Error1"` [503] `ApiV1PostHistoryImport503Error1` · `"apiV1PostHistoryImport504Error1"` [504] `ApiV1PostHistoryImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostImport.PostImportGetStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `socialAccountType` | `query` | `SocialAccountTypeBundleSocialPostImportApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SocialAccountTypeBundleSocialPostImportApi` | `socialAccountTypeBundleSocialPostImportApiSchema` | `src/models/social-account-type-bundle-social-post-import-api.ts` |
| `ApiV1PostHistoryImportResponse1` | `apiV1PostHistoryImportResponse1Schema` | `src/models/api-v1-post-history-import-response1.ts` |
| `ApiV1PostHistoryImport400Error1` | `apiV1PostHistoryImport400Error1Schema` | `src/models/api-v1-post-history-import400-error1.ts` |
| `ApiV1PostHistoryImport401Error1` | `apiV1PostHistoryImport401Error1Schema` | `src/models/api-v1-post-history-import401-error1.ts` |
| `ApiV1PostHistoryImport403Error1` | `apiV1PostHistoryImport403Error1Schema` | `src/models/api-v1-post-history-import403-error1.ts` |
| `ApiV1PostHistoryImport404Error1` | `apiV1PostHistoryImport404Error1Schema` | `src/models/api-v1-post-history-import404-error1.ts` |
| `ApiV1PostHistoryImport429Error1` | `apiV1PostHistoryImport429Error1Schema` | `src/models/api-v1-post-history-import429-error1.ts` |
| `ApiV1PostHistoryImport500Error1` | `apiV1PostHistoryImport500Error1Schema` | `src/models/api-v1-post-history-import500-error1.ts` |
| `ApiV1PostHistoryImport502Error1` | `apiV1PostHistoryImport502Error1Schema` | `src/models/api-v1-post-history-import502-error1.ts` |
| `ApiV1PostHistoryImport503Error1` | `apiV1PostHistoryImport503Error1Schema` | `src/models/api-v1-post-history-import503-error1.ts` |
| `ApiV1PostHistoryImport504Error1` | `apiV1PostHistoryImport504Error1Schema` | `src/models/api-v1-post-history-import504-error1.ts` |

### postImportRetryImport

- **Signature**: `postImportRetryImport(request: PostImport.PostImportRetryImportRequest, options?: RequestOptions): ApiPromise<ApiV1PostHistoryImportRetryResponse, PostImport.PostImportRetryImportError>`
- **Wire**: `POST /api/v1/post-history-import/{importId}/retry`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostHistoryImportRetryResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostImport.PostImportRetryImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostHistoryImportRetry400Error1"` [400] `ApiV1PostHistoryImportRetry400Error1` · `"apiV1PostHistoryImportRetry401Error1"` [401] `ApiV1PostHistoryImportRetry401Error1` · `"apiV1PostHistoryImportRetry403Error1"` [403] `ApiV1PostHistoryImportRetry403Error1` · `"apiV1PostHistoryImportRetry404Error1"` [404] `ApiV1PostHistoryImportRetry404Error1` · `"apiV1PostHistoryImportRetry429Error1"` [429] `ApiV1PostHistoryImportRetry429Error1` · `"apiV1PostHistoryImportRetry500Error1"` [500] `ApiV1PostHistoryImportRetry500Error1` · `"apiV1PostHistoryImportRetry502Error1"` [502] `ApiV1PostHistoryImportRetry502Error1` · `"apiV1PostHistoryImportRetry503Error1"` [503] `ApiV1PostHistoryImportRetry503Error1` · `"apiV1PostHistoryImportRetry504Error1"` [504] `ApiV1PostHistoryImportRetry504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostImport.PostImportRetryImportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PostHistoryImportRetryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostHistoryImportRetryRequest` | `apiV1PostHistoryImportRetryRequestSchema` | `src/models/api-v1-post-history-import-retry-request.ts` |
| `ApiV1PostHistoryImportRetryResponse` | `apiV1PostHistoryImportRetryResponseSchema` | `src/models/api-v1-post-history-import-retry-response.ts` |
| `ApiV1PostHistoryImportRetry400Error1` | `apiV1PostHistoryImportRetry400Error1Schema` | `src/models/api-v1-post-history-import-retry400-error1.ts` |
| `ApiV1PostHistoryImportRetry401Error1` | `apiV1PostHistoryImportRetry401Error1Schema` | `src/models/api-v1-post-history-import-retry401-error1.ts` |
| `ApiV1PostHistoryImportRetry403Error1` | `apiV1PostHistoryImportRetry403Error1Schema` | `src/models/api-v1-post-history-import-retry403-error1.ts` |
| `ApiV1PostHistoryImportRetry404Error1` | `apiV1PostHistoryImportRetry404Error1Schema` | `src/models/api-v1-post-history-import-retry404-error1.ts` |
| `ApiV1PostHistoryImportRetry429Error1` | `apiV1PostHistoryImportRetry429Error1Schema` | `src/models/api-v1-post-history-import-retry429-error1.ts` |
| `ApiV1PostHistoryImportRetry500Error1` | `apiV1PostHistoryImportRetry500Error1Schema` | `src/models/api-v1-post-history-import-retry500-error1.ts` |
| `ApiV1PostHistoryImportRetry502Error1` | `apiV1PostHistoryImportRetry502Error1Schema` | `src/models/api-v1-post-history-import-retry502-error1.ts` |
| `ApiV1PostHistoryImportRetry503Error1` | `apiV1PostHistoryImportRetry503Error1Schema` | `src/models/api-v1-post-history-import-retry503-error1.ts` |
| `ApiV1PostHistoryImportRetry504Error1` | `apiV1PostHistoryImportRetry504Error1Schema` | `src/models/api-v1-post-history-import-retry504-error1.ts` |

