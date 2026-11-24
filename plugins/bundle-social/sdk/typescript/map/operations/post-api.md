<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostApi — operations

Accessor: `client.postApi` · Source: `src/resources/post-api.ts` · 9 operations · Request and error types: namespace `PostApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postCreate

- **Signature**: `postCreate(request?: PostApi.PostCreateRequest, options?: RequestOptions): ApiPromise<ApiV1PostResponse1, PostApi.PostCreateError>`
- **Wire**: `POST /api/v1/post/`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Post400Error1"` [400] `ApiV1Post400Error1` · `"apiV1Post401Error1"` [401] `ApiV1Post401Error1` · `"apiV1Post403Error1"` [403] `ApiV1Post403Error1` · `"apiV1Post404Error1"` [404] `ApiV1Post404Error1` · `"apiV1Post409Error1"` [409] `ApiV1Post409Error1` · `"apiV1Post429Error1"` [429] `ApiV1Post429Error1` · `"apiV1Post500Error1"` [500] `ApiV1Post500Error1` · `"apiV1Post502Error1"` [502] `ApiV1Post502Error1` · `"apiV1Post503Error1"` [503] `ApiV1Post503Error1` · `"apiV1Post504Error1"` [504] `ApiV1Post504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PostRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostRequest1` | `apiV1PostRequest1Schema` | `src/models/api-v1-post-request1.ts` |
| `ApiV1PostResponse1` | `apiV1PostResponse1Schema` | `src/models/api-v1-post-response1.ts` |
| `ApiV1Post400Error1` | `apiV1Post400Error1Schema` | `src/models/api-v1-post400-error1.ts` |
| `ApiV1Post401Error1` | `apiV1Post401Error1Schema` | `src/models/api-v1-post401-error1.ts` |
| `ApiV1Post403Error1` | `apiV1Post403Error1Schema` | `src/models/api-v1-post403-error1.ts` |
| `ApiV1Post404Error1` | `apiV1Post404Error1Schema` | `src/models/api-v1-post404-error1.ts` |
| `ApiV1Post409Error1` | `apiV1Post409Error1Schema` | `src/models/api-v1-post409-error1.ts` |
| `ApiV1Post429Error1` | `apiV1Post429Error1Schema` | `src/models/api-v1-post429-error1.ts` |
| `ApiV1Post500Error1` | `apiV1Post500Error1Schema` | `src/models/api-v1-post500-error1.ts` |
| `ApiV1Post502Error1` | `apiV1Post502Error1Schema` | `src/models/api-v1-post502-error1.ts` |
| `ApiV1Post503Error1` | `apiV1Post503Error1Schema` | `src/models/api-v1-post503-error1.ts` |
| `ApiV1Post504Error1` | `apiV1Post504Error1Schema` | `src/models/api-v1-post504-error1.ts` |

### postDelete

- **Signature**: `postDelete(request: PostApi.PostDeleteRequest, options?: RequestOptions): ApiPromise<ApiV1PostResponse2, PostApi.PostDeleteError>`
- **Wire**: `DELETE /api/v1/post/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostResponse2`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Post400Error1"` [400] `ApiV1Post400Error1` · `"apiV1Post401Error1"` [401] `ApiV1Post401Error1` · `"apiV1Post403Error1"` [403] `ApiV1Post403Error1` · `"apiV1Post404Error1"` [404] `ApiV1Post404Error1` · `"apiV1Post429Error1"` [429] `ApiV1Post429Error1` · `"apiV1Post500Error1"` [500] `ApiV1Post500Error1` · `"apiV1Post502Error1"` [502] `ApiV1Post502Error1` · `"apiV1Post503Error1"` [503] `ApiV1Post503Error1` · `"apiV1Post504Error1"` [504] `ApiV1Post504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostResponse2` | `apiV1PostResponse2Schema` | `src/models/api-v1-post-response2.ts` |
| `ApiV1Post400Error1` | `apiV1Post400Error1Schema` | `src/models/api-v1-post400-error1.ts` |
| `ApiV1Post401Error1` | `apiV1Post401Error1Schema` | `src/models/api-v1-post401-error1.ts` |
| `ApiV1Post403Error1` | `apiV1Post403Error1Schema` | `src/models/api-v1-post403-error1.ts` |
| `ApiV1Post404Error1` | `apiV1Post404Error1Schema` | `src/models/api-v1-post404-error1.ts` |
| `ApiV1Post429Error1` | `apiV1Post429Error1Schema` | `src/models/api-v1-post429-error1.ts` |
| `ApiV1Post500Error1` | `apiV1Post500Error1Schema` | `src/models/api-v1-post500-error1.ts` |
| `ApiV1Post502Error1` | `apiV1Post502Error1Schema` | `src/models/api-v1-post502-error1.ts` |
| `ApiV1Post503Error1` | `apiV1Post503Error1Schema` | `src/models/api-v1-post503-error1.ts` |
| `ApiV1Post504Error1` | `apiV1Post504Error1Schema` | `src/models/api-v1-post504-error1.ts` |

### postGet

- **Signature**: `postGet(request: PostApi.PostGetRequest, options?: RequestOptions): ApiPromise<ApiV1PostResponse, PostApi.PostGetError>`
- **Wire**: `GET /api/v1/post/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Post400Error1"` [400] `ApiV1Post400Error1` · `"apiV1Post401Error1"` [401] `ApiV1Post401Error1` · `"apiV1Post403Error1"` [403] `ApiV1Post403Error1` · `"apiV1Post404Error1"` [404] `ApiV1Post404Error1` · `"apiV1Post429Error1"` [429] `ApiV1Post429Error1` · `"apiV1Post500Error1"` [500] `ApiV1Post500Error1` · `"apiV1Post502Error1"` [502] `ApiV1Post502Error1` · `"apiV1Post503Error1"` [503] `ApiV1Post503Error1` · `"apiV1Post504Error1"` [504] `ApiV1Post504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostResponse` | `apiV1PostResponseSchema` | `src/models/api-v1-post-response.ts` |
| `ApiV1Post400Error1` | `apiV1Post400Error1Schema` | `src/models/api-v1-post400-error1.ts` |
| `ApiV1Post401Error1` | `apiV1Post401Error1Schema` | `src/models/api-v1-post401-error1.ts` |
| `ApiV1Post403Error1` | `apiV1Post403Error1Schema` | `src/models/api-v1-post403-error1.ts` |
| `ApiV1Post404Error1` | `apiV1Post404Error1Schema` | `src/models/api-v1-post404-error1.ts` |
| `ApiV1Post429Error1` | `apiV1Post429Error1Schema` | `src/models/api-v1-post429-error1.ts` |
| `ApiV1Post500Error1` | `apiV1Post500Error1Schema` | `src/models/api-v1-post500-error1.ts` |
| `ApiV1Post502Error1` | `apiV1Post502Error1Schema` | `src/models/api-v1-post502-error1.ts` |
| `ApiV1Post503Error1` | `apiV1Post503Error1Schema` | `src/models/api-v1-post503-error1.ts` |
| `ApiV1Post504Error1` | `apiV1Post504Error1Schema` | `src/models/api-v1-post504-error1.ts` |

### postGetByReferenceKey

- **Signature**: `postGetByReferenceKey(request: PostApi.PostGetByReferenceKeyRequest, options?: RequestOptions): ApiPromise<ApiV1PostReferenceKeyResponse, PostApi.PostGetByReferenceKeyError>`
- **Wire**: `GET /api/v1/post/reference-key/{referenceKey}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostReferenceKeyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostGetByReferenceKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostReferenceKey400Error1"` [400] `ApiV1PostReferenceKey400Error1` · `"apiV1PostReferenceKey401Error1"` [401] `ApiV1PostReferenceKey401Error1` · `"apiV1PostReferenceKey403Error1"` [403] `ApiV1PostReferenceKey403Error1` · `"apiV1PostReferenceKey404Error1"` [404] `ApiV1PostReferenceKey404Error1` · `"apiV1PostReferenceKey429Error1"` [429] `ApiV1PostReferenceKey429Error1` · `"apiV1PostReferenceKey500Error1"` [500] `ApiV1PostReferenceKey500Error1` · `"apiV1PostReferenceKey502Error1"` [502] `ApiV1PostReferenceKey502Error1` · `"apiV1PostReferenceKey503Error1"` [503] `ApiV1PostReferenceKey503Error1` · `"apiV1PostReferenceKey504Error1"` [504] `ApiV1PostReferenceKey504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostGetByReferenceKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `referenceKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostReferenceKeyResponse` | `apiV1PostReferenceKeyResponseSchema` | `src/models/api-v1-post-reference-key-response.ts` |
| `ApiV1PostReferenceKey400Error1` | `apiV1PostReferenceKey400Error1Schema` | `src/models/api-v1-post-reference-key400-error1.ts` |
| `ApiV1PostReferenceKey401Error1` | `apiV1PostReferenceKey401Error1Schema` | `src/models/api-v1-post-reference-key401-error1.ts` |
| `ApiV1PostReferenceKey403Error1` | `apiV1PostReferenceKey403Error1Schema` | `src/models/api-v1-post-reference-key403-error1.ts` |
| `ApiV1PostReferenceKey404Error1` | `apiV1PostReferenceKey404Error1Schema` | `src/models/api-v1-post-reference-key404-error1.ts` |
| `ApiV1PostReferenceKey429Error1` | `apiV1PostReferenceKey429Error1Schema` | `src/models/api-v1-post-reference-key429-error1.ts` |
| `ApiV1PostReferenceKey500Error1` | `apiV1PostReferenceKey500Error1Schema` | `src/models/api-v1-post-reference-key500-error1.ts` |
| `ApiV1PostReferenceKey502Error1` | `apiV1PostReferenceKey502Error1Schema` | `src/models/api-v1-post-reference-key502-error1.ts` |
| `ApiV1PostReferenceKey503Error1` | `apiV1PostReferenceKey503Error1Schema` | `src/models/api-v1-post-reference-key503-error1.ts` |
| `ApiV1PostReferenceKey504Error1` | `apiV1PostReferenceKey504Error1Schema` | `src/models/api-v1-post-reference-key504-error1.ts` |

### postGetList

- **Signature**: `postGetList(request: PostApi.PostGetListRequest, options?: RequestOptions): ApiPromise<ApiV1PostResponse3, PostApi.PostGetListError>`
- **Wire**: `GET /api/v1/post/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostResponse3`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Post400Error1"` [400] `ApiV1Post400Error1` · `"apiV1Post401Error1"` [401] `ApiV1Post401Error1` · `"apiV1Post403Error1"` [403] `ApiV1Post403Error1` · `"apiV1Post404Error1"` [404] `ApiV1Post404Error1` · `"apiV1Post429Error1"` [429] `ApiV1Post429Error1` · `"apiV1Post500Error1"` [500] `ApiV1Post500Error1` · `"apiV1Post502Error1"` [502] `ApiV1Post502Error1` · `"apiV1Post503Error1"` [503] `ApiV1Post503Error1` · `"apiV1Post504Error1"` [504] `ApiV1Post504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostGetListRequest` (10):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `status` | `query` | `Status` | no | — |
| `orderBy` | `query` | `OrderByBundleSocialPostApi` | no | — |
| `order` | `query` | `Order` | no | — |
| `q` | `query` | `string` | no | — |
| `platforms` | `query` | `PlatformBundleSocialPostApi[]` | no | — |
| `postDateFrom` | `query` | `Date` (date-time) | no | — |
| `postDateTo` | `query` | `Date` (date-time) | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `OrderByBundleSocialPostApi` | `orderByBundleSocialPostApiSchema` | `src/models/order-by-bundle-social-post-api.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `PlatformBundleSocialPostApi` | `platformBundleSocialPostApiSchema` | `src/models/platform-bundle-social-post-api.ts` |
| `ApiV1PostResponse3` | `apiV1PostResponse3Schema` | `src/models/api-v1-post-response3.ts` |
| `ApiV1Post400Error1` | `apiV1Post400Error1Schema` | `src/models/api-v1-post400-error1.ts` |
| `ApiV1Post401Error1` | `apiV1Post401Error1Schema` | `src/models/api-v1-post401-error1.ts` |
| `ApiV1Post403Error1` | `apiV1Post403Error1Schema` | `src/models/api-v1-post403-error1.ts` |
| `ApiV1Post404Error1` | `apiV1Post404Error1Schema` | `src/models/api-v1-post404-error1.ts` |
| `ApiV1Post429Error1` | `apiV1Post429Error1Schema` | `src/models/api-v1-post429-error1.ts` |
| `ApiV1Post500Error1` | `apiV1Post500Error1Schema` | `src/models/api-v1-post500-error1.ts` |
| `ApiV1Post502Error1` | `apiV1Post502Error1Schema` | `src/models/api-v1-post502-error1.ts` |
| `ApiV1Post503Error1` | `apiV1Post503Error1Schema` | `src/models/api-v1-post503-error1.ts` |
| `ApiV1Post504Error1` | `apiV1Post504Error1Schema` | `src/models/api-v1-post504-error1.ts` |

### postGetReconnectSocialAccountCandidates

- **Signature**: `postGetReconnectSocialAccountCandidates(request: PostApi.PostGetReconnectSocialAccountCandidatesRequest, options?: RequestOptions): ApiPromise<ApiV1PostReconnectSocialAccountCandidatesResponse, PostApi.PostGetReconnectSocialAccountCandidatesError>`
- **Wire**: `GET /api/v1/post/reconnect-social-account/candidates`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostReconnectSocialAccountCandidatesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostGetReconnectSocialAccountCandidatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostReconnectSocialAccountCandidates400Error1"` [400] `ApiV1PostReconnectSocialAccountCandidates400Error1` · `"apiV1PostReconnectSocialAccountCandidates401Error1"` [401] `ApiV1PostReconnectSocialAccountCandidates401Error1` · `"apiV1PostReconnectSocialAccountCandidates403Error1"` [403] `ApiV1PostReconnectSocialAccountCandidates403Error1` · `"apiV1PostReconnectSocialAccountCandidates404Error1"` [404] `ApiV1PostReconnectSocialAccountCandidates404Error1` · `"apiV1PostReconnectSocialAccountCandidates429Error1"` [429] `ApiV1PostReconnectSocialAccountCandidates429Error1` · `"apiV1PostReconnectSocialAccountCandidates500Error1"` [500] `ApiV1PostReconnectSocialAccountCandidates500Error1` · `"apiV1PostReconnectSocialAccountCandidates502Error1"` [502] `ApiV1PostReconnectSocialAccountCandidates502Error1` · `"apiV1PostReconnectSocialAccountCandidates503Error1"` [503] `ApiV1PostReconnectSocialAccountCandidates503Error1` · `"apiV1PostReconnectSocialAccountCandidates504Error1"` [504] `ApiV1PostReconnectSocialAccountCandidates504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostGetReconnectSocialAccountCandidatesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `type` | `query` | `Type` | yes | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `ApiV1PostReconnectSocialAccountCandidatesResponse` | `apiV1PostReconnectSocialAccountCandidatesResponseSchema` | `src/models/api-v1-post-reconnect-social-account-candidates-response.ts` |
| `ApiV1PostReconnectSocialAccountCandidates400Error1` | `apiV1PostReconnectSocialAccountCandidates400Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates400-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates401Error1` | `apiV1PostReconnectSocialAccountCandidates401Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates401-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates403Error1` | `apiV1PostReconnectSocialAccountCandidates403Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates403-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates404Error1` | `apiV1PostReconnectSocialAccountCandidates404Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates404-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates429Error1` | `apiV1PostReconnectSocialAccountCandidates429Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates429-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates500Error1` | `apiV1PostReconnectSocialAccountCandidates500Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates500-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates502Error1` | `apiV1PostReconnectSocialAccountCandidates502Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates502-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates503Error1` | `apiV1PostReconnectSocialAccountCandidates503Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates503-error1.ts` |
| `ApiV1PostReconnectSocialAccountCandidates504Error1` | `apiV1PostReconnectSocialAccountCandidates504Error1Schema` | `src/models/api-v1-post-reconnect-social-account-candidates504-error1.ts` |

### postReconnectSocialAccount

- **Signature**: `postReconnectSocialAccount(request?: PostApi.PostReconnectSocialAccountRequest, options?: RequestOptions): ApiPromise<ApiV1PostReconnectSocialAccountResponse, PostApi.PostReconnectSocialAccountError>`
- **Wire**: `POST /api/v1/post/reconnect-social-account`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostReconnectSocialAccountResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostReconnectSocialAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostReconnectSocialAccount400Error1"` [400] `ApiV1PostReconnectSocialAccount400Error1` · `"apiV1PostReconnectSocialAccount401Error1"` [401] `ApiV1PostReconnectSocialAccount401Error1` · `"apiV1PostReconnectSocialAccount403Error1"` [403] `ApiV1PostReconnectSocialAccount403Error1` · `"apiV1PostReconnectSocialAccount404Error1"` [404] `ApiV1PostReconnectSocialAccount404Error1` · `"apiV1PostReconnectSocialAccount429Error1"` [429] `ApiV1PostReconnectSocialAccount429Error1` · `"apiV1PostReconnectSocialAccount500Error1"` [500] `ApiV1PostReconnectSocialAccount500Error1` · `"apiV1PostReconnectSocialAccount502Error1"` [502] `ApiV1PostReconnectSocialAccount502Error1` · `"apiV1PostReconnectSocialAccount503Error1"` [503] `ApiV1PostReconnectSocialAccount503Error1` · `"apiV1PostReconnectSocialAccount504Error1"` [504] `ApiV1PostReconnectSocialAccount504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostReconnectSocialAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PostReconnectSocialAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostReconnectSocialAccountRequest` | `apiV1PostReconnectSocialAccountRequestSchema` | `src/models/api-v1-post-reconnect-social-account-request.ts` |
| `ApiV1PostReconnectSocialAccountResponse` | `apiV1PostReconnectSocialAccountResponseSchema` | `src/models/api-v1-post-reconnect-social-account-response.ts` |
| `ApiV1PostReconnectSocialAccount400Error1` | `apiV1PostReconnectSocialAccount400Error1Schema` | `src/models/api-v1-post-reconnect-social-account400-error1.ts` |
| `ApiV1PostReconnectSocialAccount401Error1` | `apiV1PostReconnectSocialAccount401Error1Schema` | `src/models/api-v1-post-reconnect-social-account401-error1.ts` |
| `ApiV1PostReconnectSocialAccount403Error1` | `apiV1PostReconnectSocialAccount403Error1Schema` | `src/models/api-v1-post-reconnect-social-account403-error1.ts` |
| `ApiV1PostReconnectSocialAccount404Error1` | `apiV1PostReconnectSocialAccount404Error1Schema` | `src/models/api-v1-post-reconnect-social-account404-error1.ts` |
| `ApiV1PostReconnectSocialAccount429Error1` | `apiV1PostReconnectSocialAccount429Error1Schema` | `src/models/api-v1-post-reconnect-social-account429-error1.ts` |
| `ApiV1PostReconnectSocialAccount500Error1` | `apiV1PostReconnectSocialAccount500Error1Schema` | `src/models/api-v1-post-reconnect-social-account500-error1.ts` |
| `ApiV1PostReconnectSocialAccount502Error1` | `apiV1PostReconnectSocialAccount502Error1Schema` | `src/models/api-v1-post-reconnect-social-account502-error1.ts` |
| `ApiV1PostReconnectSocialAccount503Error1` | `apiV1PostReconnectSocialAccount503Error1Schema` | `src/models/api-v1-post-reconnect-social-account503-error1.ts` |
| `ApiV1PostReconnectSocialAccount504Error1` | `apiV1PostReconnectSocialAccount504Error1Schema` | `src/models/api-v1-post-reconnect-social-account504-error1.ts` |

### postRetry

- **Signature**: `postRetry(request: PostApi.PostRetryRequest, options?: RequestOptions): ApiPromise<ApiV1PostRetryResponse, PostApi.PostRetryError>`
- **Wire**: `POST /api/v1/post/{id}/retry`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostRetryResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostRetryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostRetry400Error1"` [400] `ApiV1PostRetry400Error1` · `"apiV1PostRetry401Error1"` [401] `ApiV1PostRetry401Error1` · `"apiV1PostRetry403Error1"` [403] `ApiV1PostRetry403Error1` · `"apiV1PostRetry404Error1"` [404] `ApiV1PostRetry404Error1` · `"apiV1PostRetry429Error1"` [429] `ApiV1PostRetry429Error1` · `"apiV1PostRetry500Error1"` [500] `ApiV1PostRetry500Error1` · `"apiV1PostRetry502Error1"` [502] `ApiV1PostRetry502Error1` · `"apiV1PostRetry503Error1"` [503] `ApiV1PostRetry503Error1` · `"apiV1PostRetry504Error1"` [504] `ApiV1PostRetry504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostRetryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostRetryResponse` | `apiV1PostRetryResponseSchema` | `src/models/api-v1-post-retry-response.ts` |
| `ApiV1PostRetry400Error1` | `apiV1PostRetry400Error1Schema` | `src/models/api-v1-post-retry400-error1.ts` |
| `ApiV1PostRetry401Error1` | `apiV1PostRetry401Error1Schema` | `src/models/api-v1-post-retry401-error1.ts` |
| `ApiV1PostRetry403Error1` | `apiV1PostRetry403Error1Schema` | `src/models/api-v1-post-retry403-error1.ts` |
| `ApiV1PostRetry404Error1` | `apiV1PostRetry404Error1Schema` | `src/models/api-v1-post-retry404-error1.ts` |
| `ApiV1PostRetry429Error1` | `apiV1PostRetry429Error1Schema` | `src/models/api-v1-post-retry429-error1.ts` |
| `ApiV1PostRetry500Error1` | `apiV1PostRetry500Error1Schema` | `src/models/api-v1-post-retry500-error1.ts` |
| `ApiV1PostRetry502Error1` | `apiV1PostRetry502Error1Schema` | `src/models/api-v1-post-retry502-error1.ts` |
| `ApiV1PostRetry503Error1` | `apiV1PostRetry503Error1Schema` | `src/models/api-v1-post-retry503-error1.ts` |
| `ApiV1PostRetry504Error1` | `apiV1PostRetry504Error1Schema` | `src/models/api-v1-post-retry504-error1.ts` |

### postUpdate

- **Signature**: `postUpdate(request: PostApi.PostUpdateRequest, options?: RequestOptions): ApiPromise<ApiV1PostResponse1, PostApi.PostUpdateError>`
- **Wire**: `PATCH /api/v1/post/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostApi.PostUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Post400Error1"` [400] `ApiV1Post400Error1` · `"apiV1Post401Error1"` [401] `ApiV1Post401Error1` · `"apiV1Post403Error1"` [403] `ApiV1Post403Error1` · `"apiV1Post404Error1"` [404] `ApiV1Post404Error1` · `"apiV1Post409Error1"` [409] `ApiV1Post409Error1` · `"apiV1Post429Error1"` [429] `ApiV1Post429Error1` · `"apiV1Post500Error1"` [500] `ApiV1Post500Error1` · `"apiV1Post502Error1"` [502] `ApiV1Post502Error1` · `"apiV1Post503Error1"` [503] `ApiV1Post503Error1` · `"apiV1Post504Error1"` [504] `ApiV1Post504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostApi.PostUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PostRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostRequest` | `apiV1PostRequestSchema` | `src/models/api-v1-post-request.ts` |
| `ApiV1PostResponse1` | `apiV1PostResponse1Schema` | `src/models/api-v1-post-response1.ts` |
| `ApiV1Post400Error1` | `apiV1Post400Error1Schema` | `src/models/api-v1-post400-error1.ts` |
| `ApiV1Post401Error1` | `apiV1Post401Error1Schema` | `src/models/api-v1-post401-error1.ts` |
| `ApiV1Post403Error1` | `apiV1Post403Error1Schema` | `src/models/api-v1-post403-error1.ts` |
| `ApiV1Post404Error1` | `apiV1Post404Error1Schema` | `src/models/api-v1-post404-error1.ts` |
| `ApiV1Post409Error1` | `apiV1Post409Error1Schema` | `src/models/api-v1-post409-error1.ts` |
| `ApiV1Post429Error1` | `apiV1Post429Error1Schema` | `src/models/api-v1-post429-error1.ts` |
| `ApiV1Post500Error1` | `apiV1Post500Error1Schema` | `src/models/api-v1-post500-error1.ts` |
| `ApiV1Post502Error1` | `apiV1Post502Error1Schema` | `src/models/api-v1-post502-error1.ts` |
| `ApiV1Post503Error1` | `apiV1Post503Error1Schema` | `src/models/api-v1-post503-error1.ts` |
| `ApiV1Post504Error1` | `apiV1Post504Error1Schema` | `src/models/api-v1-post504-error1.ts` |

