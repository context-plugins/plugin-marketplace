<!-- Generated file — do not edit; regenerated with the SDK. -->

# Misc — operations

Accessor: `client.misc` · Source: `src/resources/misc.ts` · 92 operations · Request and error types: namespace `Misc`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### miscBlueskyDeleteComment

- **Signature**: `miscBlueskyDeleteComment(request?: Misc.MiscBlueskyDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscBlueskyCommentResponse, Misc.MiscBlueskyDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/bluesky/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscBlueskyCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscBlueskyDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscBlueskyComment400Error1"` [400] `ApiV1MiscBlueskyComment400Error1` · `"apiV1MiscBlueskyComment401Error1"` [401] `ApiV1MiscBlueskyComment401Error1` · `"apiV1MiscBlueskyComment403Error1"` [403] `ApiV1MiscBlueskyComment403Error1` · `"apiV1MiscBlueskyComment404Error1"` [404] `ApiV1MiscBlueskyComment404Error1` · `"apiV1MiscBlueskyComment429Error1"` [429] `ApiV1MiscBlueskyComment429Error1` · `"apiV1MiscBlueskyComment500Error1"` [500] `ApiV1MiscBlueskyComment500Error1` · `"apiV1MiscBlueskyComment502Error1"` [502] `ApiV1MiscBlueskyComment502Error1` · `"apiV1MiscBlueskyComment503Error1"` [503] `ApiV1MiscBlueskyComment503Error1` · `"apiV1MiscBlueskyComment504Error1"` [504] `ApiV1MiscBlueskyComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscBlueskyDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscBlueskyCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscBlueskyCommentRequest` | `apiV1MiscBlueskyCommentRequestSchema` | `src/models/api-v1-misc-bluesky-comment-request.ts` |
| `ApiV1MiscBlueskyCommentResponse` | `apiV1MiscBlueskyCommentResponseSchema` | `src/models/api-v1-misc-bluesky-comment-response.ts` |
| `ApiV1MiscBlueskyComment400Error1` | `apiV1MiscBlueskyComment400Error1Schema` | `src/models/api-v1-misc-bluesky-comment400-error1.ts` |
| `ApiV1MiscBlueskyComment401Error1` | `apiV1MiscBlueskyComment401Error1Schema` | `src/models/api-v1-misc-bluesky-comment401-error1.ts` |
| `ApiV1MiscBlueskyComment403Error1` | `apiV1MiscBlueskyComment403Error1Schema` | `src/models/api-v1-misc-bluesky-comment403-error1.ts` |
| `ApiV1MiscBlueskyComment404Error1` | `apiV1MiscBlueskyComment404Error1Schema` | `src/models/api-v1-misc-bluesky-comment404-error1.ts` |
| `ApiV1MiscBlueskyComment429Error1` | `apiV1MiscBlueskyComment429Error1Schema` | `src/models/api-v1-misc-bluesky-comment429-error1.ts` |
| `ApiV1MiscBlueskyComment500Error1` | `apiV1MiscBlueskyComment500Error1Schema` | `src/models/api-v1-misc-bluesky-comment500-error1.ts` |
| `ApiV1MiscBlueskyComment502Error1` | `apiV1MiscBlueskyComment502Error1Schema` | `src/models/api-v1-misc-bluesky-comment502-error1.ts` |
| `ApiV1MiscBlueskyComment503Error1` | `apiV1MiscBlueskyComment503Error1Schema` | `src/models/api-v1-misc-bluesky-comment503-error1.ts` |
| `ApiV1MiscBlueskyComment504Error1` | `apiV1MiscBlueskyComment504Error1Schema` | `src/models/api-v1-misc-bluesky-comment504-error1.ts` |

### miscBlueskyDeletePost

- **Signature**: `miscBlueskyDeletePost(request?: Misc.MiscBlueskyDeletePostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscBlueskyPostResponse, Misc.MiscBlueskyDeletePostError>`
- **Wire**: `DELETE /api/v1/misc/bluesky/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscBlueskyPostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscBlueskyDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscBlueskyPost400Error1"` [400] `ApiV1MiscBlueskyPost400Error1` · `"apiV1MiscBlueskyPost401Error1"` [401] `ApiV1MiscBlueskyPost401Error1` · `"apiV1MiscBlueskyPost403Error1"` [403] `ApiV1MiscBlueskyPost403Error1` · `"apiV1MiscBlueskyPost404Error1"` [404] `ApiV1MiscBlueskyPost404Error1` · `"apiV1MiscBlueskyPost429Error1"` [429] `ApiV1MiscBlueskyPost429Error1` · `"apiV1MiscBlueskyPost500Error1"` [500] `ApiV1MiscBlueskyPost500Error1` · `"apiV1MiscBlueskyPost502Error1"` [502] `ApiV1MiscBlueskyPost502Error1` · `"apiV1MiscBlueskyPost503Error1"` [503] `ApiV1MiscBlueskyPost503Error1` · `"apiV1MiscBlueskyPost504Error1"` [504] `ApiV1MiscBlueskyPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscBlueskyDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscBlueskyPostRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscBlueskyPostRequest` | `apiV1MiscBlueskyPostRequestSchema` | `src/models/api-v1-misc-bluesky-post-request.ts` |
| `ApiV1MiscBlueskyPostResponse` | `apiV1MiscBlueskyPostResponseSchema` | `src/models/api-v1-misc-bluesky-post-response.ts` |
| `ApiV1MiscBlueskyPost400Error1` | `apiV1MiscBlueskyPost400Error1Schema` | `src/models/api-v1-misc-bluesky-post400-error1.ts` |
| `ApiV1MiscBlueskyPost401Error1` | `apiV1MiscBlueskyPost401Error1Schema` | `src/models/api-v1-misc-bluesky-post401-error1.ts` |
| `ApiV1MiscBlueskyPost403Error1` | `apiV1MiscBlueskyPost403Error1Schema` | `src/models/api-v1-misc-bluesky-post403-error1.ts` |
| `ApiV1MiscBlueskyPost404Error1` | `apiV1MiscBlueskyPost404Error1Schema` | `src/models/api-v1-misc-bluesky-post404-error1.ts` |
| `ApiV1MiscBlueskyPost429Error1` | `apiV1MiscBlueskyPost429Error1Schema` | `src/models/api-v1-misc-bluesky-post429-error1.ts` |
| `ApiV1MiscBlueskyPost500Error1` | `apiV1MiscBlueskyPost500Error1Schema` | `src/models/api-v1-misc-bluesky-post500-error1.ts` |
| `ApiV1MiscBlueskyPost502Error1` | `apiV1MiscBlueskyPost502Error1Schema` | `src/models/api-v1-misc-bluesky-post502-error1.ts` |
| `ApiV1MiscBlueskyPost503Error1` | `apiV1MiscBlueskyPost503Error1Schema` | `src/models/api-v1-misc-bluesky-post503-error1.ts` |
| `ApiV1MiscBlueskyPost504Error1` | `apiV1MiscBlueskyPost504Error1Schema` | `src/models/api-v1-misc-bluesky-post504-error1.ts` |

### miscDiscordDeleteMessage

- **Signature**: `miscDiscordDeleteMessage(request?: Misc.MiscDiscordDeleteMessageRequest, options?: RequestOptions): ApiPromise<ApiV1MiscDiscordMessageResponse, Misc.MiscDiscordDeleteMessageError>`
- **Wire**: `DELETE /api/v1/misc/discord/message`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscDiscordMessageResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscDiscordDeleteMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscDiscordMessage400Error1"` [400] `ApiV1MiscDiscordMessage400Error1` · `"apiV1MiscDiscordMessage401Error1"` [401] `ApiV1MiscDiscordMessage401Error1` · `"apiV1MiscDiscordMessage403Error1"` [403] `ApiV1MiscDiscordMessage403Error1` · `"apiV1MiscDiscordMessage404Error1"` [404] `ApiV1MiscDiscordMessage404Error1` · `"apiV1MiscDiscordMessage429Error1"` [429] `ApiV1MiscDiscordMessage429Error1` · `"apiV1MiscDiscordMessage500Error1"` [500] `ApiV1MiscDiscordMessage500Error1` · `"apiV1MiscDiscordMessage502Error1"` [502] `ApiV1MiscDiscordMessage502Error1` · `"apiV1MiscDiscordMessage503Error1"` [503] `ApiV1MiscDiscordMessage503Error1` · `"apiV1MiscDiscordMessage504Error1"` [504] `ApiV1MiscDiscordMessage504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscDiscordDeleteMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscDiscordMessageRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscDiscordMessageRequest` | `apiV1MiscDiscordMessageRequestSchema` | `src/models/api-v1-misc-discord-message-request.ts` |
| `ApiV1MiscDiscordMessageResponse` | `apiV1MiscDiscordMessageResponseSchema` | `src/models/api-v1-misc-discord-message-response.ts` |
| `ApiV1MiscDiscordMessage400Error1` | `apiV1MiscDiscordMessage400Error1Schema` | `src/models/api-v1-misc-discord-message400-error1.ts` |
| `ApiV1MiscDiscordMessage401Error1` | `apiV1MiscDiscordMessage401Error1Schema` | `src/models/api-v1-misc-discord-message401-error1.ts` |
| `ApiV1MiscDiscordMessage403Error1` | `apiV1MiscDiscordMessage403Error1Schema` | `src/models/api-v1-misc-discord-message403-error1.ts` |
| `ApiV1MiscDiscordMessage404Error1` | `apiV1MiscDiscordMessage404Error1Schema` | `src/models/api-v1-misc-discord-message404-error1.ts` |
| `ApiV1MiscDiscordMessage429Error1` | `apiV1MiscDiscordMessage429Error1Schema` | `src/models/api-v1-misc-discord-message429-error1.ts` |
| `ApiV1MiscDiscordMessage500Error1` | `apiV1MiscDiscordMessage500Error1Schema` | `src/models/api-v1-misc-discord-message500-error1.ts` |
| `ApiV1MiscDiscordMessage502Error1` | `apiV1MiscDiscordMessage502Error1Schema` | `src/models/api-v1-misc-discord-message502-error1.ts` |
| `ApiV1MiscDiscordMessage503Error1` | `apiV1MiscDiscordMessage503Error1Schema` | `src/models/api-v1-misc-discord-message503-error1.ts` |
| `ApiV1MiscDiscordMessage504Error1` | `apiV1MiscDiscordMessage504Error1Schema` | `src/models/api-v1-misc-discord-message504-error1.ts` |

### miscFacebookDeleteComment

- **Signature**: `miscFacebookDeleteComment(request?: Misc.MiscFacebookDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookCommentResponse1, Misc.MiscFacebookDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/facebook/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookCommentResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookComment400Error1"` [400] `ApiV1MiscFacebookComment400Error1` · `"apiV1MiscFacebookComment401Error1"` [401] `ApiV1MiscFacebookComment401Error1` · `"apiV1MiscFacebookComment403Error1"` [403] `ApiV1MiscFacebookComment403Error1` · `"apiV1MiscFacebookComment404Error1"` [404] `ApiV1MiscFacebookComment404Error1` · `"apiV1MiscFacebookComment429Error1"` [429] `ApiV1MiscFacebookComment429Error1` · `"apiV1MiscFacebookComment500Error1"` [500] `ApiV1MiscFacebookComment500Error1` · `"apiV1MiscFacebookComment502Error1"` [502] `ApiV1MiscFacebookComment502Error1` · `"apiV1MiscFacebookComment503Error1"` [503] `ApiV1MiscFacebookComment503Error1` · `"apiV1MiscFacebookComment504Error1"` [504] `ApiV1MiscFacebookComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscFacebookCommentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookCommentRequest1` | `apiV1MiscFacebookCommentRequest1Schema` | `src/models/api-v1-misc-facebook-comment-request1.ts` |
| `ApiV1MiscFacebookCommentResponse1` | `apiV1MiscFacebookCommentResponse1Schema` | `src/models/api-v1-misc-facebook-comment-response1.ts` |
| `ApiV1MiscFacebookComment400Error1` | `apiV1MiscFacebookComment400Error1Schema` | `src/models/api-v1-misc-facebook-comment400-error1.ts` |
| `ApiV1MiscFacebookComment401Error1` | `apiV1MiscFacebookComment401Error1Schema` | `src/models/api-v1-misc-facebook-comment401-error1.ts` |
| `ApiV1MiscFacebookComment403Error1` | `apiV1MiscFacebookComment403Error1Schema` | `src/models/api-v1-misc-facebook-comment403-error1.ts` |
| `ApiV1MiscFacebookComment404Error1` | `apiV1MiscFacebookComment404Error1Schema` | `src/models/api-v1-misc-facebook-comment404-error1.ts` |
| `ApiV1MiscFacebookComment429Error1` | `apiV1MiscFacebookComment429Error1Schema` | `src/models/api-v1-misc-facebook-comment429-error1.ts` |
| `ApiV1MiscFacebookComment500Error1` | `apiV1MiscFacebookComment500Error1Schema` | `src/models/api-v1-misc-facebook-comment500-error1.ts` |
| `ApiV1MiscFacebookComment502Error1` | `apiV1MiscFacebookComment502Error1Schema` | `src/models/api-v1-misc-facebook-comment502-error1.ts` |
| `ApiV1MiscFacebookComment503Error1` | `apiV1MiscFacebookComment503Error1Schema` | `src/models/api-v1-misc-facebook-comment503-error1.ts` |
| `ApiV1MiscFacebookComment504Error1` | `apiV1MiscFacebookComment504Error1Schema` | `src/models/api-v1-misc-facebook-comment504-error1.ts` |

### miscFacebookDeletePost

- **Signature**: `miscFacebookDeletePost(request?: Misc.MiscFacebookDeletePostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookPostResponse1, Misc.MiscFacebookDeletePostError>`
- **Wire**: `DELETE /api/v1/misc/facebook/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookPostResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookPost400Error1"` [400] `ApiV1MiscFacebookPost400Error1` · `"apiV1MiscFacebookPost401Error1"` [401] `ApiV1MiscFacebookPost401Error1` · `"apiV1MiscFacebookPost403Error1"` [403] `ApiV1MiscFacebookPost403Error1` · `"apiV1MiscFacebookPost404Error1"` [404] `ApiV1MiscFacebookPost404Error1` · `"apiV1MiscFacebookPost429Error1"` [429] `ApiV1MiscFacebookPost429Error1` · `"apiV1MiscFacebookPost500Error1"` [500] `ApiV1MiscFacebookPost500Error1` · `"apiV1MiscFacebookPost502Error1"` [502] `ApiV1MiscFacebookPost502Error1` · `"apiV1MiscFacebookPost503Error1"` [503] `ApiV1MiscFacebookPost503Error1` · `"apiV1MiscFacebookPost504Error1"` [504] `ApiV1MiscFacebookPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscFacebookPostRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookPostRequest1` | `apiV1MiscFacebookPostRequest1Schema` | `src/models/api-v1-misc-facebook-post-request1.ts` |
| `ApiV1MiscFacebookPostResponse1` | `apiV1MiscFacebookPostResponse1Schema` | `src/models/api-v1-misc-facebook-post-response1.ts` |
| `ApiV1MiscFacebookPost400Error1` | `apiV1MiscFacebookPost400Error1Schema` | `src/models/api-v1-misc-facebook-post400-error1.ts` |
| `ApiV1MiscFacebookPost401Error1` | `apiV1MiscFacebookPost401Error1Schema` | `src/models/api-v1-misc-facebook-post401-error1.ts` |
| `ApiV1MiscFacebookPost403Error1` | `apiV1MiscFacebookPost403Error1Schema` | `src/models/api-v1-misc-facebook-post403-error1.ts` |
| `ApiV1MiscFacebookPost404Error1` | `apiV1MiscFacebookPost404Error1Schema` | `src/models/api-v1-misc-facebook-post404-error1.ts` |
| `ApiV1MiscFacebookPost429Error1` | `apiV1MiscFacebookPost429Error1Schema` | `src/models/api-v1-misc-facebook-post429-error1.ts` |
| `ApiV1MiscFacebookPost500Error1` | `apiV1MiscFacebookPost500Error1Schema` | `src/models/api-v1-misc-facebook-post500-error1.ts` |
| `ApiV1MiscFacebookPost502Error1` | `apiV1MiscFacebookPost502Error1Schema` | `src/models/api-v1-misc-facebook-post502-error1.ts` |
| `ApiV1MiscFacebookPost503Error1` | `apiV1MiscFacebookPost503Error1Schema` | `src/models/api-v1-misc-facebook-post503-error1.ts` |
| `ApiV1MiscFacebookPost504Error1` | `apiV1MiscFacebookPost504Error1Schema` | `src/models/api-v1-misc-facebook-post504-error1.ts` |

### miscFacebookEditComment

- **Signature**: `miscFacebookEditComment(request?: Misc.MiscFacebookEditCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookCommentResponse, Misc.MiscFacebookEditCommentError>`
- **Wire**: `PATCH /api/v1/misc/facebook/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookEditCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookComment400Error1"` [400] `ApiV1MiscFacebookComment400Error1` · `"apiV1MiscFacebookComment401Error1"` [401] `ApiV1MiscFacebookComment401Error1` · `"apiV1MiscFacebookComment403Error1"` [403] `ApiV1MiscFacebookComment403Error1` · `"apiV1MiscFacebookComment404Error1"` [404] `ApiV1MiscFacebookComment404Error1` · `"apiV1MiscFacebookComment429Error1"` [429] `ApiV1MiscFacebookComment429Error1` · `"apiV1MiscFacebookComment500Error1"` [500] `ApiV1MiscFacebookComment500Error1` · `"apiV1MiscFacebookComment502Error1"` [502] `ApiV1MiscFacebookComment502Error1` · `"apiV1MiscFacebookComment503Error1"` [503] `ApiV1MiscFacebookComment503Error1` · `"apiV1MiscFacebookComment504Error1"` [504] `ApiV1MiscFacebookComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookEditCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscFacebookCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookCommentRequest` | `apiV1MiscFacebookCommentRequestSchema` | `src/models/api-v1-misc-facebook-comment-request.ts` |
| `ApiV1MiscFacebookCommentResponse` | `apiV1MiscFacebookCommentResponseSchema` | `src/models/api-v1-misc-facebook-comment-response.ts` |
| `ApiV1MiscFacebookComment400Error1` | `apiV1MiscFacebookComment400Error1Schema` | `src/models/api-v1-misc-facebook-comment400-error1.ts` |
| `ApiV1MiscFacebookComment401Error1` | `apiV1MiscFacebookComment401Error1Schema` | `src/models/api-v1-misc-facebook-comment401-error1.ts` |
| `ApiV1MiscFacebookComment403Error1` | `apiV1MiscFacebookComment403Error1Schema` | `src/models/api-v1-misc-facebook-comment403-error1.ts` |
| `ApiV1MiscFacebookComment404Error1` | `apiV1MiscFacebookComment404Error1Schema` | `src/models/api-v1-misc-facebook-comment404-error1.ts` |
| `ApiV1MiscFacebookComment429Error1` | `apiV1MiscFacebookComment429Error1Schema` | `src/models/api-v1-misc-facebook-comment429-error1.ts` |
| `ApiV1MiscFacebookComment500Error1` | `apiV1MiscFacebookComment500Error1Schema` | `src/models/api-v1-misc-facebook-comment500-error1.ts` |
| `ApiV1MiscFacebookComment502Error1` | `apiV1MiscFacebookComment502Error1Schema` | `src/models/api-v1-misc-facebook-comment502-error1.ts` |
| `ApiV1MiscFacebookComment503Error1` | `apiV1MiscFacebookComment503Error1Schema` | `src/models/api-v1-misc-facebook-comment503-error1.ts` |
| `ApiV1MiscFacebookComment504Error1` | `apiV1MiscFacebookComment504Error1Schema` | `src/models/api-v1-misc-facebook-comment504-error1.ts` |

### miscFacebookEditPost

- **Signature**: `miscFacebookEditPost(request?: Misc.MiscFacebookEditPostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookPostResponse, Misc.MiscFacebookEditPostError>`
- **Wire**: `PATCH /api/v1/misc/facebook/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookPostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookEditPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookPost400Error1"` [400] `ApiV1MiscFacebookPost400Error1` · `"apiV1MiscFacebookPost401Error1"` [401] `ApiV1MiscFacebookPost401Error1` · `"apiV1MiscFacebookPost403Error1"` [403] `ApiV1MiscFacebookPost403Error1` · `"apiV1MiscFacebookPost404Error1"` [404] `ApiV1MiscFacebookPost404Error1` · `"apiV1MiscFacebookPost429Error1"` [429] `ApiV1MiscFacebookPost429Error1` · `"apiV1MiscFacebookPost500Error1"` [500] `ApiV1MiscFacebookPost500Error1` · `"apiV1MiscFacebookPost502Error1"` [502] `ApiV1MiscFacebookPost502Error1` · `"apiV1MiscFacebookPost503Error1"` [503] `ApiV1MiscFacebookPost503Error1` · `"apiV1MiscFacebookPost504Error1"` [504] `ApiV1MiscFacebookPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookEditPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscFacebookPostRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookPostRequest` | `apiV1MiscFacebookPostRequestSchema` | `src/models/api-v1-misc-facebook-post-request.ts` |
| `ApiV1MiscFacebookPostResponse` | `apiV1MiscFacebookPostResponseSchema` | `src/models/api-v1-misc-facebook-post-response.ts` |
| `ApiV1MiscFacebookPost400Error1` | `apiV1MiscFacebookPost400Error1Schema` | `src/models/api-v1-misc-facebook-post400-error1.ts` |
| `ApiV1MiscFacebookPost401Error1` | `apiV1MiscFacebookPost401Error1Schema` | `src/models/api-v1-misc-facebook-post401-error1.ts` |
| `ApiV1MiscFacebookPost403Error1` | `apiV1MiscFacebookPost403Error1Schema` | `src/models/api-v1-misc-facebook-post403-error1.ts` |
| `ApiV1MiscFacebookPost404Error1` | `apiV1MiscFacebookPost404Error1Schema` | `src/models/api-v1-misc-facebook-post404-error1.ts` |
| `ApiV1MiscFacebookPost429Error1` | `apiV1MiscFacebookPost429Error1Schema` | `src/models/api-v1-misc-facebook-post429-error1.ts` |
| `ApiV1MiscFacebookPost500Error1` | `apiV1MiscFacebookPost500Error1Schema` | `src/models/api-v1-misc-facebook-post500-error1.ts` |
| `ApiV1MiscFacebookPost502Error1` | `apiV1MiscFacebookPost502Error1Schema` | `src/models/api-v1-misc-facebook-post502-error1.ts` |
| `ApiV1MiscFacebookPost503Error1` | `apiV1MiscFacebookPost503Error1Schema` | `src/models/api-v1-misc-facebook-post503-error1.ts` |
| `ApiV1MiscFacebookPost504Error1` | `apiV1MiscFacebookPost504Error1Schema` | `src/models/api-v1-misc-facebook-post504-error1.ts` |

### miscFacebookGetRecommendationById

- **Signature**: `miscFacebookGetRecommendationById(request: Misc.MiscFacebookGetRecommendationByIdRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsResponse1, Misc.MiscFacebookGetRecommendationByIdError>`
- **Wire**: `GET /api/v1/misc/facebook/recommendations/{recommendationId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookRecommendationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetRecommendationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendations400Error1"` [400] `ApiV1MiscFacebookRecommendations400Error1` · `"apiV1MiscFacebookRecommendations401Error1"` [401] `ApiV1MiscFacebookRecommendations401Error1` · `"apiV1MiscFacebookRecommendations403Error1"` [403] `ApiV1MiscFacebookRecommendations403Error1` · `"apiV1MiscFacebookRecommendations404Error1"` [404] `ApiV1MiscFacebookRecommendations404Error1` · `"apiV1MiscFacebookRecommendations429Error1"` [429] `ApiV1MiscFacebookRecommendations429Error1` · `"apiV1MiscFacebookRecommendations500Error1"` [500] `ApiV1MiscFacebookRecommendations500Error1` · `"apiV1MiscFacebookRecommendations502Error1"` [502] `ApiV1MiscFacebookRecommendations502Error1` · `"apiV1MiscFacebookRecommendations503Error1"` [503] `ApiV1MiscFacebookRecommendations503Error1` · `"apiV1MiscFacebookRecommendations504Error1"` [504] `ApiV1MiscFacebookRecommendations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookGetRecommendationByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recommendationId` | `path` | `string` | yes |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsResponse1` | `apiV1MiscFacebookRecommendationsResponse1Schema` | `src/models/api-v1-misc-facebook-recommendations-response1.ts` |
| `ApiV1MiscFacebookRecommendations400Error1` | `apiV1MiscFacebookRecommendations400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations400-error1.ts` |
| `ApiV1MiscFacebookRecommendations401Error1` | `apiV1MiscFacebookRecommendations401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations401-error1.ts` |
| `ApiV1MiscFacebookRecommendations403Error1` | `apiV1MiscFacebookRecommendations403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations403-error1.ts` |
| `ApiV1MiscFacebookRecommendations404Error1` | `apiV1MiscFacebookRecommendations404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations404-error1.ts` |
| `ApiV1MiscFacebookRecommendations429Error1` | `apiV1MiscFacebookRecommendations429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations429-error1.ts` |
| `ApiV1MiscFacebookRecommendations500Error1` | `apiV1MiscFacebookRecommendations500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations500-error1.ts` |
| `ApiV1MiscFacebookRecommendations502Error1` | `apiV1MiscFacebookRecommendations502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations502-error1.ts` |
| `ApiV1MiscFacebookRecommendations503Error1` | `apiV1MiscFacebookRecommendations503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations503-error1.ts` |
| `ApiV1MiscFacebookRecommendations504Error1` | `apiV1MiscFacebookRecommendations504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations504-error1.ts` |

### miscFacebookGetRecommendationComments

- **Signature**: `miscFacebookGetRecommendationComments(request: Misc.MiscFacebookGetRecommendationCommentsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsCommentsResponse, Misc.MiscFacebookGetRecommendationCommentsError>`
- **Wire**: `GET /api/v1/misc/facebook/recommendations/{recommendationId}/comments`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookRecommendationsCommentsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetRecommendationCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendationsComments400Error1"` [400] `ApiV1MiscFacebookRecommendationsComments400Error1` · `"apiV1MiscFacebookRecommendationsComments401Error1"` [401] `ApiV1MiscFacebookRecommendationsComments401Error1` · `"apiV1MiscFacebookRecommendationsComments403Error1"` [403] `ApiV1MiscFacebookRecommendationsComments403Error1` · `"apiV1MiscFacebookRecommendationsComments404Error1"` [404] `ApiV1MiscFacebookRecommendationsComments404Error1` · `"apiV1MiscFacebookRecommendationsComments429Error1"` [429] `ApiV1MiscFacebookRecommendationsComments429Error1` · `"apiV1MiscFacebookRecommendationsComments500Error1"` [500] `ApiV1MiscFacebookRecommendationsComments500Error1` · `"apiV1MiscFacebookRecommendationsComments502Error1"` [502] `ApiV1MiscFacebookRecommendationsComments502Error1` · `"apiV1MiscFacebookRecommendationsComments503Error1"` [503] `ApiV1MiscFacebookRecommendationsComments503Error1` · `"apiV1MiscFacebookRecommendationsComments504Error1"` [504] `ApiV1MiscFacebookRecommendationsComments504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookGetRecommendationCommentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recommendationId` | `path` | `string` | yes |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsCommentsResponse` | `apiV1MiscFacebookRecommendationsCommentsResponseSchema` | `src/models/api-v1-misc-facebook-recommendations-comments-response.ts` |
| `ApiV1MiscFacebookRecommendationsComments400Error1` | `apiV1MiscFacebookRecommendationsComments400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments400-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments401Error1` | `apiV1MiscFacebookRecommendationsComments401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments401-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments403Error1` | `apiV1MiscFacebookRecommendationsComments403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments403-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments404Error1` | `apiV1MiscFacebookRecommendationsComments404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments404-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments429Error1` | `apiV1MiscFacebookRecommendationsComments429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments429-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments500Error1` | `apiV1MiscFacebookRecommendationsComments500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments500-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments502Error1` | `apiV1MiscFacebookRecommendationsComments502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments502-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments503Error1` | `apiV1MiscFacebookRecommendationsComments503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments503-error1.ts` |
| `ApiV1MiscFacebookRecommendationsComments504Error1` | `apiV1MiscFacebookRecommendationsComments504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments504-error1.ts` |

### miscFacebookGetRecommendationImportById

- **Signature**: `miscFacebookGetRecommendationImportById(request: Misc.MiscFacebookGetRecommendationImportByIdRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookGetRecommendationImportByIdError>`
- **Wire**: `GET /api/v1/misc/facebook/recommendations/import/{importId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookRecommendationsImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetRecommendationImportByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendationsImport400Error1"` [400] `ApiV1MiscFacebookRecommendationsImport400Error1` · `"apiV1MiscFacebookRecommendationsImport401Error1"` [401] `ApiV1MiscFacebookRecommendationsImport401Error1` · `"apiV1MiscFacebookRecommendationsImport403Error1"` [403] `ApiV1MiscFacebookRecommendationsImport403Error1` · `"apiV1MiscFacebookRecommendationsImport404Error1"` [404] `ApiV1MiscFacebookRecommendationsImport404Error1` · `"apiV1MiscFacebookRecommendationsImport429Error1"` [429] `ApiV1MiscFacebookRecommendationsImport429Error1` · `"apiV1MiscFacebookRecommendationsImport500Error1"` [500] `ApiV1MiscFacebookRecommendationsImport500Error1` · `"apiV1MiscFacebookRecommendationsImport502Error1"` [502] `ApiV1MiscFacebookRecommendationsImport502Error1` · `"apiV1MiscFacebookRecommendationsImport503Error1"` [503] `ApiV1MiscFacebookRecommendationsImport503Error1` · `"apiV1MiscFacebookRecommendationsImport504Error1"` [504] `ApiV1MiscFacebookRecommendationsImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookGetRecommendationImportByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsImportResponse` | `apiV1MiscFacebookRecommendationsImportResponseSchema` | `src/models/api-v1-misc-facebook-recommendations-import-response.ts` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `apiV1MiscFacebookRecommendationsImport400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import400-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `apiV1MiscFacebookRecommendationsImport401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import401-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `apiV1MiscFacebookRecommendationsImport403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import403-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `apiV1MiscFacebookRecommendationsImport404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import404-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `apiV1MiscFacebookRecommendationsImport429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import429-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `apiV1MiscFacebookRecommendationsImport500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import500-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `apiV1MiscFacebookRecommendationsImport502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import502-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `apiV1MiscFacebookRecommendationsImport503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import503-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `apiV1MiscFacebookRecommendationsImport504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import504-error1.ts` |

### miscFacebookGetRecommendationImportStatus

- **Signature**: `miscFacebookGetRecommendationImportStatus(request: Misc.MiscFacebookGetRecommendationImportStatusRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsImportResponse1, Misc.MiscFacebookGetRecommendationImportStatusError>`
- **Wire**: `GET /api/v1/misc/facebook/recommendations/import`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookRecommendationsImportResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetRecommendationImportStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendationsImport400Error1"` [400] `ApiV1MiscFacebookRecommendationsImport400Error1` · `"apiV1MiscFacebookRecommendationsImport401Error1"` [401] `ApiV1MiscFacebookRecommendationsImport401Error1` · `"apiV1MiscFacebookRecommendationsImport403Error1"` [403] `ApiV1MiscFacebookRecommendationsImport403Error1` · `"apiV1MiscFacebookRecommendationsImport404Error1"` [404] `ApiV1MiscFacebookRecommendationsImport404Error1` · `"apiV1MiscFacebookRecommendationsImport429Error1"` [429] `ApiV1MiscFacebookRecommendationsImport429Error1` · `"apiV1MiscFacebookRecommendationsImport500Error1"` [500] `ApiV1MiscFacebookRecommendationsImport500Error1` · `"apiV1MiscFacebookRecommendationsImport502Error1"` [502] `ApiV1MiscFacebookRecommendationsImport502Error1` · `"apiV1MiscFacebookRecommendationsImport503Error1"` [503] `ApiV1MiscFacebookRecommendationsImport503Error1` · `"apiV1MiscFacebookRecommendationsImport504Error1"` [504] `ApiV1MiscFacebookRecommendationsImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookGetRecommendationImportStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsImportResponse1` | `apiV1MiscFacebookRecommendationsImportResponse1Schema` | `src/models/api-v1-misc-facebook-recommendations-import-response1.ts` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `apiV1MiscFacebookRecommendationsImport400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import400-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `apiV1MiscFacebookRecommendationsImport401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import401-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `apiV1MiscFacebookRecommendationsImport403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import403-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `apiV1MiscFacebookRecommendationsImport404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import404-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `apiV1MiscFacebookRecommendationsImport429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import429-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `apiV1MiscFacebookRecommendationsImport500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import500-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `apiV1MiscFacebookRecommendationsImport502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import502-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `apiV1MiscFacebookRecommendationsImport503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import503-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `apiV1MiscFacebookRecommendationsImport504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import504-error1.ts` |

### miscFacebookGetRecommendations

- **Signature**: `miscFacebookGetRecommendations(request: Misc.MiscFacebookGetRecommendationsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsResponse, Misc.MiscFacebookGetRecommendationsError>`
- **Wire**: `GET /api/v1/misc/facebook/recommendations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookRecommendationsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendations400Error1"` [400] `ApiV1MiscFacebookRecommendations400Error1` · `"apiV1MiscFacebookRecommendations401Error1"` [401] `ApiV1MiscFacebookRecommendations401Error1` · `"apiV1MiscFacebookRecommendations403Error1"` [403] `ApiV1MiscFacebookRecommendations403Error1` · `"apiV1MiscFacebookRecommendations404Error1"` [404] `ApiV1MiscFacebookRecommendations404Error1` · `"apiV1MiscFacebookRecommendations429Error1"` [429] `ApiV1MiscFacebookRecommendations429Error1` · `"apiV1MiscFacebookRecommendations500Error1"` [500] `ApiV1MiscFacebookRecommendations500Error1` · `"apiV1MiscFacebookRecommendations502Error1"` [502] `ApiV1MiscFacebookRecommendations502Error1` · `"apiV1MiscFacebookRecommendations503Error1"` [503] `ApiV1MiscFacebookRecommendations503Error1` · `"apiV1MiscFacebookRecommendations504Error1"` [504] `ApiV1MiscFacebookRecommendations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookGetRecommendationsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `50` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsResponse` | `apiV1MiscFacebookRecommendationsResponseSchema` | `src/models/api-v1-misc-facebook-recommendations-response.ts` |
| `ApiV1MiscFacebookRecommendations400Error1` | `apiV1MiscFacebookRecommendations400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations400-error1.ts` |
| `ApiV1MiscFacebookRecommendations401Error1` | `apiV1MiscFacebookRecommendations401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations401-error1.ts` |
| `ApiV1MiscFacebookRecommendations403Error1` | `apiV1MiscFacebookRecommendations403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations403-error1.ts` |
| `ApiV1MiscFacebookRecommendations404Error1` | `apiV1MiscFacebookRecommendations404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations404-error1.ts` |
| `ApiV1MiscFacebookRecommendations429Error1` | `apiV1MiscFacebookRecommendations429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations429-error1.ts` |
| `ApiV1MiscFacebookRecommendations500Error1` | `apiV1MiscFacebookRecommendations500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations500-error1.ts` |
| `ApiV1MiscFacebookRecommendations502Error1` | `apiV1MiscFacebookRecommendations502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations502-error1.ts` |
| `ApiV1MiscFacebookRecommendations503Error1` | `apiV1MiscFacebookRecommendations503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations503-error1.ts` |
| `ApiV1MiscFacebookRecommendations504Error1` | `apiV1MiscFacebookRecommendations504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations504-error1.ts` |

### miscFacebookGetTextFormatPresets

- **Signature**: `miscFacebookGetTextFormatPresets(options?: RequestOptions): ApiPromise<ApiV1MiscFacebookTextFormatPresetsResponse, Misc.MiscFacebookGetTextFormatPresetsError>`
- **Wire**: `GET /api/v1/misc/facebook/text-format-presets`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookTextFormatPresetsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetTextFormatPresetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookTextFormatPresets400Error1"` [400] `ApiV1MiscFacebookTextFormatPresets400Error1` · `"apiV1MiscFacebookTextFormatPresets401Error1"` [401] `ApiV1MiscFacebookTextFormatPresets401Error1` · `"apiV1MiscFacebookTextFormatPresets403Error1"` [403] `ApiV1MiscFacebookTextFormatPresets403Error1` · `"apiV1MiscFacebookTextFormatPresets404Error1"` [404] `ApiV1MiscFacebookTextFormatPresets404Error1` · `"apiV1MiscFacebookTextFormatPresets429Error1"` [429] `ApiV1MiscFacebookTextFormatPresets429Error1` · `"apiV1MiscFacebookTextFormatPresets500Error1"` [500] `ApiV1MiscFacebookTextFormatPresets500Error1` · `"apiV1MiscFacebookTextFormatPresets502Error1"` [502] `ApiV1MiscFacebookTextFormatPresets502Error1` · `"apiV1MiscFacebookTextFormatPresets503Error1"` [503] `ApiV1MiscFacebookTextFormatPresets503Error1` · `"apiV1MiscFacebookTextFormatPresets504Error1"` [504] `ApiV1MiscFacebookTextFormatPresets504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookTextFormatPresetsResponse` | `apiV1MiscFacebookTextFormatPresetsResponseSchema` | `src/models/api-v1-misc-facebook-text-format-presets-response.ts` |
| `ApiV1MiscFacebookTextFormatPresets400Error1` | `apiV1MiscFacebookTextFormatPresets400Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets400-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets401Error1` | `apiV1MiscFacebookTextFormatPresets401Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets401-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets403Error1` | `apiV1MiscFacebookTextFormatPresets403Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets403-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets404Error1` | `apiV1MiscFacebookTextFormatPresets404Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets404-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets429Error1` | `apiV1MiscFacebookTextFormatPresets429Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets429-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets500Error1` | `apiV1MiscFacebookTextFormatPresets500Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets500-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets502Error1` | `apiV1MiscFacebookTextFormatPresets502Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets502-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets503Error1` | `apiV1MiscFacebookTextFormatPresets503Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets503-error1.ts` |
| `ApiV1MiscFacebookTextFormatPresets504Error1` | `apiV1MiscFacebookTextFormatPresets504Error1Schema` | `src/models/api-v1-misc-facebook-text-format-presets504-error1.ts` |

### miscFacebookGetTokenDebug

- **Signature**: `miscFacebookGetTokenDebug(request: Misc.MiscFacebookGetTokenDebugRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookTokenDebugResponse, Misc.MiscFacebookGetTokenDebugError>`
- **Wire**: `GET /api/v1/misc/facebook/token-debug`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookTokenDebugResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookGetTokenDebugError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookTokenDebug400Error1"` [400] `ApiV1MiscFacebookTokenDebug400Error1` · `"apiV1MiscFacebookTokenDebug401Error1"` [401] `ApiV1MiscFacebookTokenDebug401Error1` · `"apiV1MiscFacebookTokenDebug403Error1"` [403] `ApiV1MiscFacebookTokenDebug403Error1` · `"apiV1MiscFacebookTokenDebug404Error1"` [404] `ApiV1MiscFacebookTokenDebug404Error1` · `"apiV1MiscFacebookTokenDebug429Error1"` [429] `ApiV1MiscFacebookTokenDebug429Error1` · `"apiV1MiscFacebookTokenDebug500Error1"` [500] `ApiV1MiscFacebookTokenDebug500Error1` · `"apiV1MiscFacebookTokenDebug502Error1"` [502] `ApiV1MiscFacebookTokenDebug502Error1` · `"apiV1MiscFacebookTokenDebug503Error1"` [503] `ApiV1MiscFacebookTokenDebug503Error1` · `"apiV1MiscFacebookTokenDebug504Error1"` [504] `ApiV1MiscFacebookTokenDebug504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookGetTokenDebugRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookTokenDebugResponse` | `apiV1MiscFacebookTokenDebugResponseSchema` | `src/models/api-v1-misc-facebook-token-debug-response.ts` |
| `ApiV1MiscFacebookTokenDebug400Error1` | `apiV1MiscFacebookTokenDebug400Error1Schema` | `src/models/api-v1-misc-facebook-token-debug400-error1.ts` |
| `ApiV1MiscFacebookTokenDebug401Error1` | `apiV1MiscFacebookTokenDebug401Error1Schema` | `src/models/api-v1-misc-facebook-token-debug401-error1.ts` |
| `ApiV1MiscFacebookTokenDebug403Error1` | `apiV1MiscFacebookTokenDebug403Error1Schema` | `src/models/api-v1-misc-facebook-token-debug403-error1.ts` |
| `ApiV1MiscFacebookTokenDebug404Error1` | `apiV1MiscFacebookTokenDebug404Error1Schema` | `src/models/api-v1-misc-facebook-token-debug404-error1.ts` |
| `ApiV1MiscFacebookTokenDebug429Error1` | `apiV1MiscFacebookTokenDebug429Error1Schema` | `src/models/api-v1-misc-facebook-token-debug429-error1.ts` |
| `ApiV1MiscFacebookTokenDebug500Error1` | `apiV1MiscFacebookTokenDebug500Error1Schema` | `src/models/api-v1-misc-facebook-token-debug500-error1.ts` |
| `ApiV1MiscFacebookTokenDebug502Error1` | `apiV1MiscFacebookTokenDebug502Error1Schema` | `src/models/api-v1-misc-facebook-token-debug502-error1.ts` |
| `ApiV1MiscFacebookTokenDebug503Error1` | `apiV1MiscFacebookTokenDebug503Error1Schema` | `src/models/api-v1-misc-facebook-token-debug503-error1.ts` |
| `ApiV1MiscFacebookTokenDebug504Error1` | `apiV1MiscFacebookTokenDebug504Error1Schema` | `src/models/api-v1-misc-facebook-token-debug504-error1.ts` |

### miscFacebookImportRecommendations

- **Signature**: `miscFacebookImportRecommendations(request?: Misc.MiscFacebookImportRecommendationsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookImportRecommendationsError>`
- **Wire**: `POST /api/v1/misc/facebook/recommendations/import`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookRecommendationsImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookImportRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendationsImport400Error1"` [400] `ApiV1MiscFacebookRecommendationsImport400Error1` · `"apiV1MiscFacebookRecommendationsImport401Error1"` [401] `ApiV1MiscFacebookRecommendationsImport401Error1` · `"apiV1MiscFacebookRecommendationsImport403Error1"` [403] `ApiV1MiscFacebookRecommendationsImport403Error1` · `"apiV1MiscFacebookRecommendationsImport404Error1"` [404] `ApiV1MiscFacebookRecommendationsImport404Error1` · `"apiV1MiscFacebookRecommendationsImport409Error1"` [409] `ApiV1MiscFacebookRecommendationsImport409Error1` · `"apiV1MiscFacebookRecommendationsImport429Error1"` [429] `ApiV1MiscFacebookRecommendationsImport429Error1` · `"apiV1MiscFacebookRecommendationsImport500Error1"` [500] `ApiV1MiscFacebookRecommendationsImport500Error1` · `"apiV1MiscFacebookRecommendationsImport502Error1"` [502] `ApiV1MiscFacebookRecommendationsImport502Error1` · `"apiV1MiscFacebookRecommendationsImport503Error1"` [503] `ApiV1MiscFacebookRecommendationsImport503Error1` · `"apiV1MiscFacebookRecommendationsImport504Error1"` [504] `ApiV1MiscFacebookRecommendationsImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookImportRecommendationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscFacebookRecommendationsImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsImportRequest` | `apiV1MiscFacebookRecommendationsImportRequestSchema` | `src/models/api-v1-misc-facebook-recommendations-import-request.ts` |
| `ApiV1MiscFacebookRecommendationsImportResponse` | `apiV1MiscFacebookRecommendationsImportResponseSchema` | `src/models/api-v1-misc-facebook-recommendations-import-response.ts` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `apiV1MiscFacebookRecommendationsImport400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import400-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `apiV1MiscFacebookRecommendationsImport401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import401-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `apiV1MiscFacebookRecommendationsImport403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import403-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `apiV1MiscFacebookRecommendationsImport404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import404-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport409Error1` | `apiV1MiscFacebookRecommendationsImport409Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import409-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `apiV1MiscFacebookRecommendationsImport429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import429-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `apiV1MiscFacebookRecommendationsImport500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import500-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `apiV1MiscFacebookRecommendationsImport502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import502-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `apiV1MiscFacebookRecommendationsImport503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import503-error1.ts` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `apiV1MiscFacebookRecommendationsImport504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-import504-error1.ts` |

### miscFacebookReplyToRecommendation

- **Signature**: `miscFacebookReplyToRecommendation(request: Misc.MiscFacebookReplyToRecommendationRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsReplyResponse, Misc.MiscFacebookReplyToRecommendationError>`
- **Wire**: `PUT /api/v1/misc/facebook/recommendations/{recommendationId}/reply`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookRecommendationsReplyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookReplyToRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendationsReply400Error1"` [400] `ApiV1MiscFacebookRecommendationsReply400Error1` · `"apiV1MiscFacebookRecommendationsReply401Error1"` [401] `ApiV1MiscFacebookRecommendationsReply401Error1` · `"apiV1MiscFacebookRecommendationsReply403Error1"` [403] `ApiV1MiscFacebookRecommendationsReply403Error1` · `"apiV1MiscFacebookRecommendationsReply404Error1"` [404] `ApiV1MiscFacebookRecommendationsReply404Error1` · `"apiV1MiscFacebookRecommendationsReply429Error1"` [429] `ApiV1MiscFacebookRecommendationsReply429Error1` · `"apiV1MiscFacebookRecommendationsReply500Error1"` [500] `ApiV1MiscFacebookRecommendationsReply500Error1` · `"apiV1MiscFacebookRecommendationsReply502Error1"` [502] `ApiV1MiscFacebookRecommendationsReply502Error1` · `"apiV1MiscFacebookRecommendationsReply503Error1"` [503] `ApiV1MiscFacebookRecommendationsReply503Error1` · `"apiV1MiscFacebookRecommendationsReply504Error1"` [504] `ApiV1MiscFacebookRecommendationsReply504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookReplyToRecommendationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recommendationId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1MiscFacebookRecommendationsReplyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsReplyRequest` | `apiV1MiscFacebookRecommendationsReplyRequestSchema` | `src/models/api-v1-misc-facebook-recommendations-reply-request.ts` |
| `ApiV1MiscFacebookRecommendationsReplyResponse` | `apiV1MiscFacebookRecommendationsReplyResponseSchema` | `src/models/api-v1-misc-facebook-recommendations-reply-response.ts` |
| `ApiV1MiscFacebookRecommendationsReply400Error1` | `apiV1MiscFacebookRecommendationsReply400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply400-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply401Error1` | `apiV1MiscFacebookRecommendationsReply401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply401-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply403Error1` | `apiV1MiscFacebookRecommendationsReply403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply403-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply404Error1` | `apiV1MiscFacebookRecommendationsReply404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply404-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply429Error1` | `apiV1MiscFacebookRecommendationsReply429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply429-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply500Error1` | `apiV1MiscFacebookRecommendationsReply500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply500-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply502Error1` | `apiV1MiscFacebookRecommendationsReply502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply502-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply503Error1` | `apiV1MiscFacebookRecommendationsReply503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply503-error1.ts` |
| `ApiV1MiscFacebookRecommendationsReply504Error1` | `apiV1MiscFacebookRecommendationsReply504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-reply504-error1.ts` |

### miscFacebookReplyToRecommendationComment

- **Signature**: `miscFacebookReplyToRecommendationComment(request: Misc.MiscFacebookReplyToRecommendationCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookRecommendationsCommentsReplyResponse, Misc.MiscFacebookReplyToRecommendationCommentError>`
- **Wire**: `PUT /api/v1/misc/facebook/recommendations/{recommendationId}/comments/{commentId}/reply`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscFacebookRecommendationsCommentsReplyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookReplyToRecommendationCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookRecommendationsCommentsReply400Error1"` [400] `ApiV1MiscFacebookRecommendationsCommentsReply400Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply401Error1"` [401] `ApiV1MiscFacebookRecommendationsCommentsReply401Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply403Error1"` [403] `ApiV1MiscFacebookRecommendationsCommentsReply403Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply404Error1"` [404] `ApiV1MiscFacebookRecommendationsCommentsReply404Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply429Error1"` [429] `ApiV1MiscFacebookRecommendationsCommentsReply429Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply500Error1"` [500] `ApiV1MiscFacebookRecommendationsCommentsReply500Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply502Error1"` [502] `ApiV1MiscFacebookRecommendationsCommentsReply502Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply503Error1"` [503] `ApiV1MiscFacebookRecommendationsCommentsReply503Error1` · `"apiV1MiscFacebookRecommendationsCommentsReply504Error1"` [504] `ApiV1MiscFacebookRecommendationsCommentsReply504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookReplyToRecommendationCommentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recommendationId` | `path` | `string` | yes |
| `commentId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1MiscFacebookRecommendationsCommentsReplyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookRecommendationsCommentsReplyRequest` | `apiV1MiscFacebookRecommendationsCommentsReplyRequestSchema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply-request.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReplyResponse` | `apiV1MiscFacebookRecommendationsCommentsReplyResponseSchema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply-response.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply400Error1` | `apiV1MiscFacebookRecommendationsCommentsReply400Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply400-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply401Error1` | `apiV1MiscFacebookRecommendationsCommentsReply401Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply401-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply403Error1` | `apiV1MiscFacebookRecommendationsCommentsReply403Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply403-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply404Error1` | `apiV1MiscFacebookRecommendationsCommentsReply404Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply404-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply429Error1` | `apiV1MiscFacebookRecommendationsCommentsReply429Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply429-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply500Error1` | `apiV1MiscFacebookRecommendationsCommentsReply500Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply500-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply502Error1` | `apiV1MiscFacebookRecommendationsCommentsReply502Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply502-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply503Error1` | `apiV1MiscFacebookRecommendationsCommentsReply503Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply503-error1.ts` |
| `ApiV1MiscFacebookRecommendationsCommentsReply504Error1` | `apiV1MiscFacebookRecommendationsCommentsReply504Error1Schema` | `src/models/api-v1-misc-facebook-recommendations-comments-reply504-error1.ts` |

### miscFacebookSearchPages

- **Signature**: `miscFacebookSearchPages(request: Misc.MiscFacebookSearchPagesRequest, options?: RequestOptions): ApiPromise<ApiV1MiscFacebookPagesResponse, Misc.MiscFacebookSearchPagesError>`
- **Wire**: `GET /api/v1/misc/facebook/pages`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscFacebookPagesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscFacebookSearchPagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscFacebookPages400Error1"` [400] `ApiV1MiscFacebookPages400Error1` · `"apiV1MiscFacebookPages401Error1"` [401] `ApiV1MiscFacebookPages401Error1` · `"apiV1MiscFacebookPages403Error1"` [403] `ApiV1MiscFacebookPages403Error1` · `"apiV1MiscFacebookPages404Error1"` [404] `ApiV1MiscFacebookPages404Error1` · `"apiV1MiscFacebookPages429Error1"` [429] `ApiV1MiscFacebookPages429Error1` · `"apiV1MiscFacebookPages500Error1"` [500] `ApiV1MiscFacebookPages500Error1` · `"apiV1MiscFacebookPages502Error1"` [502] `ApiV1MiscFacebookPages502Error1` · `"apiV1MiscFacebookPages503Error1"` [503] `ApiV1MiscFacebookPages503Error1` · `"apiV1MiscFacebookPages504Error1"` [504] `ApiV1MiscFacebookPages504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscFacebookSearchPagesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `q` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscFacebookPagesResponse` | `apiV1MiscFacebookPagesResponseSchema` | `src/models/api-v1-misc-facebook-pages-response.ts` |
| `ApiV1MiscFacebookPages400Error1` | `apiV1MiscFacebookPages400Error1Schema` | `src/models/api-v1-misc-facebook-pages400-error1.ts` |
| `ApiV1MiscFacebookPages401Error1` | `apiV1MiscFacebookPages401Error1Schema` | `src/models/api-v1-misc-facebook-pages401-error1.ts` |
| `ApiV1MiscFacebookPages403Error1` | `apiV1MiscFacebookPages403Error1Schema` | `src/models/api-v1-misc-facebook-pages403-error1.ts` |
| `ApiV1MiscFacebookPages404Error1` | `apiV1MiscFacebookPages404Error1Schema` | `src/models/api-v1-misc-facebook-pages404-error1.ts` |
| `ApiV1MiscFacebookPages429Error1` | `apiV1MiscFacebookPages429Error1Schema` | `src/models/api-v1-misc-facebook-pages429-error1.ts` |
| `ApiV1MiscFacebookPages500Error1` | `apiV1MiscFacebookPages500Error1Schema` | `src/models/api-v1-misc-facebook-pages500-error1.ts` |
| `ApiV1MiscFacebookPages502Error1` | `apiV1MiscFacebookPages502Error1Schema` | `src/models/api-v1-misc-facebook-pages502-error1.ts` |
| `ApiV1MiscFacebookPages503Error1` | `apiV1MiscFacebookPages503Error1Schema` | `src/models/api-v1-misc-facebook-pages503-error1.ts` |
| `ApiV1MiscFacebookPages504Error1` | `apiV1MiscFacebookPages504Error1Schema` | `src/models/api-v1-misc-facebook-pages504-error1.ts` |

### miscGoogleBusinessAddMedia

- **Signature**: `miscGoogleBusinessAddMedia(request?: Misc.MiscGoogleBusinessAddMediaRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessMediaResponse, Misc.MiscGoogleBusinessAddMediaError>`
- **Wire**: `POST /api/v1/misc/google-business/media`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessMediaResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessAddMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessMedia400Error1"` [400] `ApiV1MiscGoogleBusinessMedia400Error1` · `"apiV1MiscGoogleBusinessMedia401Error1"` [401] `ApiV1MiscGoogleBusinessMedia401Error1` · `"apiV1MiscGoogleBusinessMedia403Error1"` [403] `ApiV1MiscGoogleBusinessMedia403Error1` · `"apiV1MiscGoogleBusinessMedia404Error1"` [404] `ApiV1MiscGoogleBusinessMedia404Error1` · `"apiV1MiscGoogleBusinessMedia429Error1"` [429] `ApiV1MiscGoogleBusinessMedia429Error1` · `"apiV1MiscGoogleBusinessMedia500Error1"` [500] `ApiV1MiscGoogleBusinessMedia500Error1` · `"apiV1MiscGoogleBusinessMedia502Error1"` [502] `ApiV1MiscGoogleBusinessMedia502Error1` · `"apiV1MiscGoogleBusinessMedia503Error1"` [503] `ApiV1MiscGoogleBusinessMedia503Error1` · `"apiV1MiscGoogleBusinessMedia504Error1"` [504] `ApiV1MiscGoogleBusinessMedia504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessAddMediaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessMediaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessMediaRequest` | `apiV1MiscGoogleBusinessMediaRequestSchema` | `src/models/api-v1-misc-google-business-media-request.ts` |
| `ApiV1MiscGoogleBusinessMediaResponse` | `apiV1MiscGoogleBusinessMediaResponseSchema` | `src/models/api-v1-misc-google-business-media-response.ts` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `apiV1MiscGoogleBusinessMedia400Error1Schema` | `src/models/api-v1-misc-google-business-media400-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `apiV1MiscGoogleBusinessMedia401Error1Schema` | `src/models/api-v1-misc-google-business-media401-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `apiV1MiscGoogleBusinessMedia403Error1Schema` | `src/models/api-v1-misc-google-business-media403-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `apiV1MiscGoogleBusinessMedia404Error1Schema` | `src/models/api-v1-misc-google-business-media404-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `apiV1MiscGoogleBusinessMedia429Error1Schema` | `src/models/api-v1-misc-google-business-media429-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `apiV1MiscGoogleBusinessMedia500Error1Schema` | `src/models/api-v1-misc-google-business-media500-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `apiV1MiscGoogleBusinessMedia502Error1Schema` | `src/models/api-v1-misc-google-business-media502-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `apiV1MiscGoogleBusinessMedia503Error1Schema` | `src/models/api-v1-misc-google-business-media503-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `apiV1MiscGoogleBusinessMedia504Error1Schema` | `src/models/api-v1-misc-google-business-media504-error1.ts` |

### miscGoogleBusinessCreatePlaceActionLink

- **Signature**: `miscGoogleBusinessCreatePlaceActionLink(request?: Misc.MiscGoogleBusinessCreatePlaceActionLinkRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, Misc.MiscGoogleBusinessCreatePlaceActionLinkError>`
- **Wire**: `POST /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessCreatePlaceActionLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1"` [400] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1"` [401] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1"` [403] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1"` [404] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1"` [429] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1"` [500] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1"` [502] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1"` [503] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1"` [504] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessCreatePlaceActionLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestSchema` | `src/models/api-v1-misc-google-business-location-place-action-links-request.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links-response1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links504-error1.ts` |

### miscGoogleBusinessDeleteMedia

- **Signature**: `miscGoogleBusinessDeleteMedia(request?: Misc.MiscGoogleBusinessDeleteMediaRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessMediaResponse2, Misc.MiscGoogleBusinessDeleteMediaError>`
- **Wire**: `DELETE /api/v1/misc/google-business/media`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessMediaResponse2`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessDeleteMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessMedia400Error1"` [400] `ApiV1MiscGoogleBusinessMedia400Error1` · `"apiV1MiscGoogleBusinessMedia401Error1"` [401] `ApiV1MiscGoogleBusinessMedia401Error1` · `"apiV1MiscGoogleBusinessMedia403Error1"` [403] `ApiV1MiscGoogleBusinessMedia403Error1` · `"apiV1MiscGoogleBusinessMedia404Error1"` [404] `ApiV1MiscGoogleBusinessMedia404Error1` · `"apiV1MiscGoogleBusinessMedia429Error1"` [429] `ApiV1MiscGoogleBusinessMedia429Error1` · `"apiV1MiscGoogleBusinessMedia500Error1"` [500] `ApiV1MiscGoogleBusinessMedia500Error1` · `"apiV1MiscGoogleBusinessMedia502Error1"` [502] `ApiV1MiscGoogleBusinessMedia502Error1` · `"apiV1MiscGoogleBusinessMedia503Error1"` [503] `ApiV1MiscGoogleBusinessMedia503Error1` · `"apiV1MiscGoogleBusinessMedia504Error1"` [504] `ApiV1MiscGoogleBusinessMedia504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessDeleteMediaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessMediaRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessMediaRequest1` | `apiV1MiscGoogleBusinessMediaRequest1Schema` | `src/models/api-v1-misc-google-business-media-request1.ts` |
| `ApiV1MiscGoogleBusinessMediaResponse2` | `apiV1MiscGoogleBusinessMediaResponse2Schema` | `src/models/api-v1-misc-google-business-media-response2.ts` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `apiV1MiscGoogleBusinessMedia400Error1Schema` | `src/models/api-v1-misc-google-business-media400-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `apiV1MiscGoogleBusinessMedia401Error1Schema` | `src/models/api-v1-misc-google-business-media401-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `apiV1MiscGoogleBusinessMedia403Error1Schema` | `src/models/api-v1-misc-google-business-media403-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `apiV1MiscGoogleBusinessMedia404Error1Schema` | `src/models/api-v1-misc-google-business-media404-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `apiV1MiscGoogleBusinessMedia429Error1Schema` | `src/models/api-v1-misc-google-business-media429-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `apiV1MiscGoogleBusinessMedia500Error1Schema` | `src/models/api-v1-misc-google-business-media500-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `apiV1MiscGoogleBusinessMedia502Error1Schema` | `src/models/api-v1-misc-google-business-media502-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `apiV1MiscGoogleBusinessMedia503Error1Schema` | `src/models/api-v1-misc-google-business-media503-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `apiV1MiscGoogleBusinessMedia504Error1Schema` | `src/models/api-v1-misc-google-business-media504-error1.ts` |

### miscGoogleBusinessDeletePlaceActionLink

- **Signature**: `miscGoogleBusinessDeletePlaceActionLink(request?: Misc.MiscGoogleBusinessDeletePlaceActionLinkRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3, Misc.MiscGoogleBusinessDeletePlaceActionLinkError>`
- **Wire**: `DELETE /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessDeletePlaceActionLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1"` [400] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1"` [401] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1"` [403] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1"` [404] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1"` [429] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1"` [500] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1"` [502] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1"` [503] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1"` [504] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessDeletePlaceActionLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Schema` | `src/models/api-v1-misc-google-business-location-place-action-links-request2.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3Schema` | `src/models/api-v1-misc-google-business-location-place-action-links-response3.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links504-error1.ts` |

### miscGoogleBusinessDeletePost

- **Signature**: `miscGoogleBusinessDeletePost(request?: Misc.MiscGoogleBusinessDeletePostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessPostResponse, Misc.MiscGoogleBusinessDeletePostError>`
- **Wire**: `DELETE /api/v1/misc/google-business/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessPostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessPost400Error1"` [400] `ApiV1MiscGoogleBusinessPost400Error1` · `"apiV1MiscGoogleBusinessPost401Error1"` [401] `ApiV1MiscGoogleBusinessPost401Error1` · `"apiV1MiscGoogleBusinessPost403Error1"` [403] `ApiV1MiscGoogleBusinessPost403Error1` · `"apiV1MiscGoogleBusinessPost404Error1"` [404] `ApiV1MiscGoogleBusinessPost404Error1` · `"apiV1MiscGoogleBusinessPost429Error1"` [429] `ApiV1MiscGoogleBusinessPost429Error1` · `"apiV1MiscGoogleBusinessPost500Error1"` [500] `ApiV1MiscGoogleBusinessPost500Error1` · `"apiV1MiscGoogleBusinessPost502Error1"` [502] `ApiV1MiscGoogleBusinessPost502Error1` · `"apiV1MiscGoogleBusinessPost503Error1"` [503] `ApiV1MiscGoogleBusinessPost503Error1` · `"apiV1MiscGoogleBusinessPost504Error1"` [504] `ApiV1MiscGoogleBusinessPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessPostRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessPostRequest` | `apiV1MiscGoogleBusinessPostRequestSchema` | `src/models/api-v1-misc-google-business-post-request.ts` |
| `ApiV1MiscGoogleBusinessPostResponse` | `apiV1MiscGoogleBusinessPostResponseSchema` | `src/models/api-v1-misc-google-business-post-response.ts` |
| `ApiV1MiscGoogleBusinessPost400Error1` | `apiV1MiscGoogleBusinessPost400Error1Schema` | `src/models/api-v1-misc-google-business-post400-error1.ts` |
| `ApiV1MiscGoogleBusinessPost401Error1` | `apiV1MiscGoogleBusinessPost401Error1Schema` | `src/models/api-v1-misc-google-business-post401-error1.ts` |
| `ApiV1MiscGoogleBusinessPost403Error1` | `apiV1MiscGoogleBusinessPost403Error1Schema` | `src/models/api-v1-misc-google-business-post403-error1.ts` |
| `ApiV1MiscGoogleBusinessPost404Error1` | `apiV1MiscGoogleBusinessPost404Error1Schema` | `src/models/api-v1-misc-google-business-post404-error1.ts` |
| `ApiV1MiscGoogleBusinessPost429Error1` | `apiV1MiscGoogleBusinessPost429Error1Schema` | `src/models/api-v1-misc-google-business-post429-error1.ts` |
| `ApiV1MiscGoogleBusinessPost500Error1` | `apiV1MiscGoogleBusinessPost500Error1Schema` | `src/models/api-v1-misc-google-business-post500-error1.ts` |
| `ApiV1MiscGoogleBusinessPost502Error1` | `apiV1MiscGoogleBusinessPost502Error1Schema` | `src/models/api-v1-misc-google-business-post502-error1.ts` |
| `ApiV1MiscGoogleBusinessPost503Error1` | `apiV1MiscGoogleBusinessPost503Error1Schema` | `src/models/api-v1-misc-google-business-post503-error1.ts` |
| `ApiV1MiscGoogleBusinessPost504Error1` | `apiV1MiscGoogleBusinessPost504Error1Schema` | `src/models/api-v1-misc-google-business-post504-error1.ts` |

### miscGoogleBusinessDeleteReviewReply

- **Signature**: `miscGoogleBusinessDeleteReviewReply(request: Misc.MiscGoogleBusinessDeleteReviewReplyRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessDeleteReviewReplyError>`
- **Wire**: `DELETE /api/v1/misc/google-business/reviews/{reviewId}/reply`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessReviewsReplyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessDeleteReviewReplyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviewsReply400Error1"` [400] `ApiV1MiscGoogleBusinessReviewsReply400Error1` · `"apiV1MiscGoogleBusinessReviewsReply401Error1"` [401] `ApiV1MiscGoogleBusinessReviewsReply401Error1` · `"apiV1MiscGoogleBusinessReviewsReply403Error1"` [403] `ApiV1MiscGoogleBusinessReviewsReply403Error1` · `"apiV1MiscGoogleBusinessReviewsReply404Error1"` [404] `ApiV1MiscGoogleBusinessReviewsReply404Error1` · `"apiV1MiscGoogleBusinessReviewsReply429Error1"` [429] `ApiV1MiscGoogleBusinessReviewsReply429Error1` · `"apiV1MiscGoogleBusinessReviewsReply500Error1"` [500] `ApiV1MiscGoogleBusinessReviewsReply500Error1` · `"apiV1MiscGoogleBusinessReviewsReply502Error1"` [502] `ApiV1MiscGoogleBusinessReviewsReply502Error1` · `"apiV1MiscGoogleBusinessReviewsReply503Error1"` [503] `ApiV1MiscGoogleBusinessReviewsReply503Error1` · `"apiV1MiscGoogleBusinessReviewsReply504Error1"` [504] `ApiV1MiscGoogleBusinessReviewsReply504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessDeleteReviewReplyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reviewId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1MiscGoogleBusinessReviewsReplyRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest1` | `apiV1MiscGoogleBusinessReviewsReplyRequest1Schema` | `src/models/api-v1-misc-google-business-reviews-reply-request1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReplyResponse` | `apiV1MiscGoogleBusinessReviewsReplyResponseSchema` | `src/models/api-v1-misc-google-business-reviews-reply-response.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply400Error1` | `apiV1MiscGoogleBusinessReviewsReply400Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply401Error1` | `apiV1MiscGoogleBusinessReviewsReply401Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply403Error1` | `apiV1MiscGoogleBusinessReviewsReply403Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply404Error1` | `apiV1MiscGoogleBusinessReviewsReply404Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply429Error1` | `apiV1MiscGoogleBusinessReviewsReply429Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply500Error1` | `apiV1MiscGoogleBusinessReviewsReply500Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply502Error1` | `apiV1MiscGoogleBusinessReviewsReply502Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply503Error1` | `apiV1MiscGoogleBusinessReviewsReply503Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply504Error1` | `apiV1MiscGoogleBusinessReviewsReply504Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply504-error1.ts` |

### miscGoogleBusinessGetAttributes

- **Signature**: `miscGoogleBusinessGetAttributes(request: Misc.MiscGoogleBusinessGetAttributesRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationAttributesResponse, Misc.MiscGoogleBusinessGetAttributesError>`
- **Wire**: `GET /api/v1/misc/google-business/location/attributes`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationAttributesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationAttributes400Error1"` [400] `ApiV1MiscGoogleBusinessLocationAttributes400Error1` · `"apiV1MiscGoogleBusinessLocationAttributes401Error1"` [401] `ApiV1MiscGoogleBusinessLocationAttributes401Error1` · `"apiV1MiscGoogleBusinessLocationAttributes403Error1"` [403] `ApiV1MiscGoogleBusinessLocationAttributes403Error1` · `"apiV1MiscGoogleBusinessLocationAttributes404Error1"` [404] `ApiV1MiscGoogleBusinessLocationAttributes404Error1` · `"apiV1MiscGoogleBusinessLocationAttributes429Error1"` [429] `ApiV1MiscGoogleBusinessLocationAttributes429Error1` · `"apiV1MiscGoogleBusinessLocationAttributes500Error1"` [500] `ApiV1MiscGoogleBusinessLocationAttributes500Error1` · `"apiV1MiscGoogleBusinessLocationAttributes502Error1"` [502] `ApiV1MiscGoogleBusinessLocationAttributes502Error1` · `"apiV1MiscGoogleBusinessLocationAttributes503Error1"` [503] `ApiV1MiscGoogleBusinessLocationAttributes503Error1` · `"apiV1MiscGoogleBusinessLocationAttributes504Error1"` [504] `ApiV1MiscGoogleBusinessLocationAttributes504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetAttributesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationAttributesResponse` | `apiV1MiscGoogleBusinessLocationAttributesResponseSchema` | `src/models/api-v1-misc-google-business-location-attributes-response.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes400Error1` | `apiV1MiscGoogleBusinessLocationAttributes400Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes401Error1` | `apiV1MiscGoogleBusinessLocationAttributes401Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes403Error1` | `apiV1MiscGoogleBusinessLocationAttributes403Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes404Error1` | `apiV1MiscGoogleBusinessLocationAttributes404Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes429Error1` | `apiV1MiscGoogleBusinessLocationAttributes429Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes500Error1` | `apiV1MiscGoogleBusinessLocationAttributes500Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes502Error1` | `apiV1MiscGoogleBusinessLocationAttributes502Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes503Error1` | `apiV1MiscGoogleBusinessLocationAttributes503Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes504Error1` | `apiV1MiscGoogleBusinessLocationAttributes504Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes504-error1.ts` |

### miscGoogleBusinessGetFoodMenus

- **Signature**: `miscGoogleBusinessGetFoodMenus(request: Misc.MiscGoogleBusinessGetFoodMenusRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessGetFoodMenusError>`
- **Wire**: `GET /api/v1/misc/google-business/location/food-menus`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationFoodMenusResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetFoodMenusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationFoodMenus400Error1"` [400] `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus401Error1"` [401] `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus403Error1"` [403] `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus404Error1"` [404] `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus429Error1"` [429] `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus500Error1"` [500] `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus502Error1"` [502] `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus503Error1"` [503] `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus504Error1"` [504] `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetFoodMenusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `fields` | `query` | `Field3[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Field3` | `field3Schema` | `src/models/field3.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusResponse` | `apiV1MiscGoogleBusinessLocationFoodMenusResponseSchema` | `src/models/api-v1-misc-google-business-location-food-menus-response.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus400Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus401Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus403Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus404Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus429Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus500Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus502Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus503Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus504Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus504-error1.ts` |

### miscGoogleBusinessGetLocation

- **Signature**: `miscGoogleBusinessGetLocation(request: Misc.MiscGoogleBusinessGetLocationRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessGetLocationError>`
- **Wire**: `GET /api/v1/misc/google-business/location`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocation400Error1"` [400] `ApiV1MiscGoogleBusinessLocation400Error1` · `"apiV1MiscGoogleBusinessLocation401Error1"` [401] `ApiV1MiscGoogleBusinessLocation401Error1` · `"apiV1MiscGoogleBusinessLocation403Error1"` [403] `ApiV1MiscGoogleBusinessLocation403Error1` · `"apiV1MiscGoogleBusinessLocation404Error1"` [404] `ApiV1MiscGoogleBusinessLocation404Error1` · `"apiV1MiscGoogleBusinessLocation429Error1"` [429] `ApiV1MiscGoogleBusinessLocation429Error1` · `"apiV1MiscGoogleBusinessLocation500Error1"` [500] `ApiV1MiscGoogleBusinessLocation500Error1` · `"apiV1MiscGoogleBusinessLocation502Error1"` [502] `ApiV1MiscGoogleBusinessLocation502Error1` · `"apiV1MiscGoogleBusinessLocation503Error1"` [503] `ApiV1MiscGoogleBusinessLocation503Error1` · `"apiV1MiscGoogleBusinessLocation504Error1"` [504] `ApiV1MiscGoogleBusinessLocation504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetLocationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `fields` | `query` | `FieldBundleSocialMiscApi[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FieldBundleSocialMiscApi` | `fieldBundleSocialMiscApiSchema` | `src/models/field-bundle-social-misc-api.ts` |
| `ApiV1MiscGoogleBusinessLocationResponse` | `apiV1MiscGoogleBusinessLocationResponseSchema` | `src/models/api-v1-misc-google-business-location-response.ts` |
| `ApiV1MiscGoogleBusinessLocation400Error1` | `apiV1MiscGoogleBusinessLocation400Error1Schema` | `src/models/api-v1-misc-google-business-location400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation401Error1` | `apiV1MiscGoogleBusinessLocation401Error1Schema` | `src/models/api-v1-misc-google-business-location401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation403Error1` | `apiV1MiscGoogleBusinessLocation403Error1Schema` | `src/models/api-v1-misc-google-business-location403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation404Error1` | `apiV1MiscGoogleBusinessLocation404Error1Schema` | `src/models/api-v1-misc-google-business-location404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation429Error1` | `apiV1MiscGoogleBusinessLocation429Error1Schema` | `src/models/api-v1-misc-google-business-location429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation500Error1` | `apiV1MiscGoogleBusinessLocation500Error1Schema` | `src/models/api-v1-misc-google-business-location500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation502Error1` | `apiV1MiscGoogleBusinessLocation502Error1Schema` | `src/models/api-v1-misc-google-business-location502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation503Error1` | `apiV1MiscGoogleBusinessLocation503Error1Schema` | `src/models/api-v1-misc-google-business-location503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation504Error1` | `apiV1MiscGoogleBusinessLocation504Error1Schema` | `src/models/api-v1-misc-google-business-location504-error1.ts` |

### miscGoogleBusinessGetReviewById

- **Signature**: `miscGoogleBusinessGetReviewById(request: Misc.MiscGoogleBusinessGetReviewByIdRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsResponse1, Misc.MiscGoogleBusinessGetReviewByIdError>`
- **Wire**: `GET /api/v1/misc/google-business/reviews/{reviewId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessReviewsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetReviewByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviews400Error1"` [400] `ApiV1MiscGoogleBusinessReviews400Error1` · `"apiV1MiscGoogleBusinessReviews401Error1"` [401] `ApiV1MiscGoogleBusinessReviews401Error1` · `"apiV1MiscGoogleBusinessReviews403Error1"` [403] `ApiV1MiscGoogleBusinessReviews403Error1` · `"apiV1MiscGoogleBusinessReviews404Error1"` [404] `ApiV1MiscGoogleBusinessReviews404Error1` · `"apiV1MiscGoogleBusinessReviews429Error1"` [429] `ApiV1MiscGoogleBusinessReviews429Error1` · `"apiV1MiscGoogleBusinessReviews500Error1"` [500] `ApiV1MiscGoogleBusinessReviews500Error1` · `"apiV1MiscGoogleBusinessReviews502Error1"` [502] `ApiV1MiscGoogleBusinessReviews502Error1` · `"apiV1MiscGoogleBusinessReviews503Error1"` [503] `ApiV1MiscGoogleBusinessReviews503Error1` · `"apiV1MiscGoogleBusinessReviews504Error1"` [504] `ApiV1MiscGoogleBusinessReviews504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetReviewByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reviewId` | `path` | `string` | yes |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsResponse1` | `apiV1MiscGoogleBusinessReviewsResponse1Schema` | `src/models/api-v1-misc-google-business-reviews-response1.ts` |
| `ApiV1MiscGoogleBusinessReviews400Error1` | `apiV1MiscGoogleBusinessReviews400Error1Schema` | `src/models/api-v1-misc-google-business-reviews400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews401Error1` | `apiV1MiscGoogleBusinessReviews401Error1Schema` | `src/models/api-v1-misc-google-business-reviews401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews403Error1` | `apiV1MiscGoogleBusinessReviews403Error1Schema` | `src/models/api-v1-misc-google-business-reviews403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews404Error1` | `apiV1MiscGoogleBusinessReviews404Error1Schema` | `src/models/api-v1-misc-google-business-reviews404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews429Error1` | `apiV1MiscGoogleBusinessReviews429Error1Schema` | `src/models/api-v1-misc-google-business-reviews429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews500Error1` | `apiV1MiscGoogleBusinessReviews500Error1Schema` | `src/models/api-v1-misc-google-business-reviews500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews502Error1` | `apiV1MiscGoogleBusinessReviews502Error1Schema` | `src/models/api-v1-misc-google-business-reviews502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews503Error1` | `apiV1MiscGoogleBusinessReviews503Error1Schema` | `src/models/api-v1-misc-google-business-reviews503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews504Error1` | `apiV1MiscGoogleBusinessReviews504Error1Schema` | `src/models/api-v1-misc-google-business-reviews504-error1.ts` |

### miscGoogleBusinessGetReviewImportById

- **Signature**: `miscGoogleBusinessGetReviewImportById(request: Misc.MiscGoogleBusinessGetReviewImportByIdRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessGetReviewImportByIdError>`
- **Wire**: `GET /api/v1/misc/google-business/reviews/import/{importId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessReviewsImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetReviewImportByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviewsImport400Error1"` [400] `ApiV1MiscGoogleBusinessReviewsImport400Error1` · `"apiV1MiscGoogleBusinessReviewsImport401Error1"` [401] `ApiV1MiscGoogleBusinessReviewsImport401Error1` · `"apiV1MiscGoogleBusinessReviewsImport403Error1"` [403] `ApiV1MiscGoogleBusinessReviewsImport403Error1` · `"apiV1MiscGoogleBusinessReviewsImport404Error1"` [404] `ApiV1MiscGoogleBusinessReviewsImport404Error1` · `"apiV1MiscGoogleBusinessReviewsImport429Error1"` [429] `ApiV1MiscGoogleBusinessReviewsImport429Error1` · `"apiV1MiscGoogleBusinessReviewsImport500Error1"` [500] `ApiV1MiscGoogleBusinessReviewsImport500Error1` · `"apiV1MiscGoogleBusinessReviewsImport502Error1"` [502] `ApiV1MiscGoogleBusinessReviewsImport502Error1` · `"apiV1MiscGoogleBusinessReviewsImport503Error1"` [503] `ApiV1MiscGoogleBusinessReviewsImport503Error1` · `"apiV1MiscGoogleBusinessReviewsImport504Error1"` [504] `ApiV1MiscGoogleBusinessReviewsImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetReviewImportByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsImportResponse` | `apiV1MiscGoogleBusinessReviewsImportResponseSchema` | `src/models/api-v1-misc-google-business-reviews-import-response.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `apiV1MiscGoogleBusinessReviewsImport400Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `apiV1MiscGoogleBusinessReviewsImport401Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `apiV1MiscGoogleBusinessReviewsImport403Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `apiV1MiscGoogleBusinessReviewsImport404Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `apiV1MiscGoogleBusinessReviewsImport429Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `apiV1MiscGoogleBusinessReviewsImport500Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `apiV1MiscGoogleBusinessReviewsImport502Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `apiV1MiscGoogleBusinessReviewsImport503Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `apiV1MiscGoogleBusinessReviewsImport504Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import504-error1.ts` |

### miscGoogleBusinessGetReviewImportStatus

- **Signature**: `miscGoogleBusinessGetReviewImportStatus(request: Misc.MiscGoogleBusinessGetReviewImportStatusRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsImportResponse1, Misc.MiscGoogleBusinessGetReviewImportStatusError>`
- **Wire**: `GET /api/v1/misc/google-business/reviews/import`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessReviewsImportResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetReviewImportStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviewsImport400Error1"` [400] `ApiV1MiscGoogleBusinessReviewsImport400Error1` · `"apiV1MiscGoogleBusinessReviewsImport401Error1"` [401] `ApiV1MiscGoogleBusinessReviewsImport401Error1` · `"apiV1MiscGoogleBusinessReviewsImport403Error1"` [403] `ApiV1MiscGoogleBusinessReviewsImport403Error1` · `"apiV1MiscGoogleBusinessReviewsImport404Error1"` [404] `ApiV1MiscGoogleBusinessReviewsImport404Error1` · `"apiV1MiscGoogleBusinessReviewsImport429Error1"` [429] `ApiV1MiscGoogleBusinessReviewsImport429Error1` · `"apiV1MiscGoogleBusinessReviewsImport500Error1"` [500] `ApiV1MiscGoogleBusinessReviewsImport500Error1` · `"apiV1MiscGoogleBusinessReviewsImport502Error1"` [502] `ApiV1MiscGoogleBusinessReviewsImport502Error1` · `"apiV1MiscGoogleBusinessReviewsImport503Error1"` [503] `ApiV1MiscGoogleBusinessReviewsImport503Error1` · `"apiV1MiscGoogleBusinessReviewsImport504Error1"` [504] `ApiV1MiscGoogleBusinessReviewsImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetReviewImportStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsImportResponse1` | `apiV1MiscGoogleBusinessReviewsImportResponse1Schema` | `src/models/api-v1-misc-google-business-reviews-import-response1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `apiV1MiscGoogleBusinessReviewsImport400Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `apiV1MiscGoogleBusinessReviewsImport401Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `apiV1MiscGoogleBusinessReviewsImport403Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `apiV1MiscGoogleBusinessReviewsImport404Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `apiV1MiscGoogleBusinessReviewsImport429Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `apiV1MiscGoogleBusinessReviewsImport500Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `apiV1MiscGoogleBusinessReviewsImport502Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `apiV1MiscGoogleBusinessReviewsImport503Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `apiV1MiscGoogleBusinessReviewsImport504Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import504-error1.ts` |

### miscGoogleBusinessGetReviews

- **Signature**: `miscGoogleBusinessGetReviews(request: Misc.MiscGoogleBusinessGetReviewsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsResponse, Misc.MiscGoogleBusinessGetReviewsError>`
- **Wire**: `GET /api/v1/misc/google-business/reviews`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessReviewsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetReviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviews400Error1"` [400] `ApiV1MiscGoogleBusinessReviews400Error1` · `"apiV1MiscGoogleBusinessReviews401Error1"` [401] `ApiV1MiscGoogleBusinessReviews401Error1` · `"apiV1MiscGoogleBusinessReviews403Error1"` [403] `ApiV1MiscGoogleBusinessReviews403Error1` · `"apiV1MiscGoogleBusinessReviews404Error1"` [404] `ApiV1MiscGoogleBusinessReviews404Error1` · `"apiV1MiscGoogleBusinessReviews429Error1"` [429] `ApiV1MiscGoogleBusinessReviews429Error1` · `"apiV1MiscGoogleBusinessReviews500Error1"` [500] `ApiV1MiscGoogleBusinessReviews500Error1` · `"apiV1MiscGoogleBusinessReviews502Error1"` [502] `ApiV1MiscGoogleBusinessReviews502Error1` · `"apiV1MiscGoogleBusinessReviews503Error1"` [503] `ApiV1MiscGoogleBusinessReviews503Error1` · `"apiV1MiscGoogleBusinessReviews504Error1"` [504] `ApiV1MiscGoogleBusinessReviews504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetReviewsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `50` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsResponse` | `apiV1MiscGoogleBusinessReviewsResponseSchema` | `src/models/api-v1-misc-google-business-reviews-response.ts` |
| `ApiV1MiscGoogleBusinessReviews400Error1` | `apiV1MiscGoogleBusinessReviews400Error1Schema` | `src/models/api-v1-misc-google-business-reviews400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews401Error1` | `apiV1MiscGoogleBusinessReviews401Error1Schema` | `src/models/api-v1-misc-google-business-reviews401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews403Error1` | `apiV1MiscGoogleBusinessReviews403Error1Schema` | `src/models/api-v1-misc-google-business-reviews403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews404Error1` | `apiV1MiscGoogleBusinessReviews404Error1Schema` | `src/models/api-v1-misc-google-business-reviews404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews429Error1` | `apiV1MiscGoogleBusinessReviews429Error1Schema` | `src/models/api-v1-misc-google-business-reviews429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews500Error1` | `apiV1MiscGoogleBusinessReviews500Error1Schema` | `src/models/api-v1-misc-google-business-reviews500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews502Error1` | `apiV1MiscGoogleBusinessReviews502Error1Schema` | `src/models/api-v1-misc-google-business-reviews502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews503Error1` | `apiV1MiscGoogleBusinessReviews503Error1Schema` | `src/models/api-v1-misc-google-business-reviews503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviews504Error1` | `apiV1MiscGoogleBusinessReviews504Error1Schema` | `src/models/api-v1-misc-google-business-reviews504-error1.ts` |

### miscGoogleBusinessGetServiceList

- **Signature**: `miscGoogleBusinessGetServiceList(request: Misc.MiscGoogleBusinessGetServiceListRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationServiceListResponse, Misc.MiscGoogleBusinessGetServiceListError>`
- **Wire**: `GET /api/v1/misc/google-business/location/service-list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationServiceListResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessGetServiceListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationServiceList400Error1"` [400] `ApiV1MiscGoogleBusinessLocationServiceList400Error1` · `"apiV1MiscGoogleBusinessLocationServiceList401Error1"` [401] `ApiV1MiscGoogleBusinessLocationServiceList401Error1` · `"apiV1MiscGoogleBusinessLocationServiceList403Error1"` [403] `ApiV1MiscGoogleBusinessLocationServiceList403Error1` · `"apiV1MiscGoogleBusinessLocationServiceList404Error1"` [404] `ApiV1MiscGoogleBusinessLocationServiceList404Error1` · `"apiV1MiscGoogleBusinessLocationServiceList429Error1"` [429] `ApiV1MiscGoogleBusinessLocationServiceList429Error1` · `"apiV1MiscGoogleBusinessLocationServiceList500Error1"` [500] `ApiV1MiscGoogleBusinessLocationServiceList500Error1` · `"apiV1MiscGoogleBusinessLocationServiceList502Error1"` [502] `ApiV1MiscGoogleBusinessLocationServiceList502Error1` · `"apiV1MiscGoogleBusinessLocationServiceList503Error1"` [503] `ApiV1MiscGoogleBusinessLocationServiceList503Error1` · `"apiV1MiscGoogleBusinessLocationServiceList504Error1"` [504] `ApiV1MiscGoogleBusinessLocationServiceList504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessGetServiceListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationServiceListResponse` | `apiV1MiscGoogleBusinessLocationServiceListResponseSchema` | `src/models/api-v1-misc-google-business-location-service-list-response.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList400Error1` | `apiV1MiscGoogleBusinessLocationServiceList400Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList401Error1` | `apiV1MiscGoogleBusinessLocationServiceList401Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList403Error1` | `apiV1MiscGoogleBusinessLocationServiceList403Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList404Error1` | `apiV1MiscGoogleBusinessLocationServiceList404Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList429Error1` | `apiV1MiscGoogleBusinessLocationServiceList429Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList500Error1` | `apiV1MiscGoogleBusinessLocationServiceList500Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList502Error1` | `apiV1MiscGoogleBusinessLocationServiceList502Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList503Error1` | `apiV1MiscGoogleBusinessLocationServiceList503Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList504Error1` | `apiV1MiscGoogleBusinessLocationServiceList504Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list504-error1.ts` |

### miscGoogleBusinessImportReviews

- **Signature**: `miscGoogleBusinessImportReviews(request?: Misc.MiscGoogleBusinessImportReviewsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessImportReviewsError>`
- **Wire**: `POST /api/v1/misc/google-business/reviews/import`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessReviewsImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessImportReviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviewsImport400Error1"` [400] `ApiV1MiscGoogleBusinessReviewsImport400Error1` · `"apiV1MiscGoogleBusinessReviewsImport401Error1"` [401] `ApiV1MiscGoogleBusinessReviewsImport401Error1` · `"apiV1MiscGoogleBusinessReviewsImport403Error1"` [403] `ApiV1MiscGoogleBusinessReviewsImport403Error1` · `"apiV1MiscGoogleBusinessReviewsImport404Error1"` [404] `ApiV1MiscGoogleBusinessReviewsImport404Error1` · `"apiV1MiscGoogleBusinessReviewsImport409Error1"` [409] `ApiV1MiscGoogleBusinessReviewsImport409Error1` · `"apiV1MiscGoogleBusinessReviewsImport429Error1"` [429] `ApiV1MiscGoogleBusinessReviewsImport429Error1` · `"apiV1MiscGoogleBusinessReviewsImport500Error1"` [500] `ApiV1MiscGoogleBusinessReviewsImport500Error1` · `"apiV1MiscGoogleBusinessReviewsImport502Error1"` [502] `ApiV1MiscGoogleBusinessReviewsImport502Error1` · `"apiV1MiscGoogleBusinessReviewsImport503Error1"` [503] `ApiV1MiscGoogleBusinessReviewsImport503Error1` · `"apiV1MiscGoogleBusinessReviewsImport504Error1"` [504] `ApiV1MiscGoogleBusinessReviewsImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessImportReviewsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessReviewsImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsImportRequest` | `apiV1MiscGoogleBusinessReviewsImportRequestSchema` | `src/models/api-v1-misc-google-business-reviews-import-request.ts` |
| `ApiV1MiscGoogleBusinessReviewsImportResponse` | `apiV1MiscGoogleBusinessReviewsImportResponseSchema` | `src/models/api-v1-misc-google-business-reviews-import-response.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `apiV1MiscGoogleBusinessReviewsImport400Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `apiV1MiscGoogleBusinessReviewsImport401Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `apiV1MiscGoogleBusinessReviewsImport403Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `apiV1MiscGoogleBusinessReviewsImport404Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport409Error1` | `apiV1MiscGoogleBusinessReviewsImport409Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import409-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `apiV1MiscGoogleBusinessReviewsImport429Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `apiV1MiscGoogleBusinessReviewsImport500Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `apiV1MiscGoogleBusinessReviewsImport502Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `apiV1MiscGoogleBusinessReviewsImport503Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `apiV1MiscGoogleBusinessReviewsImport504Error1Schema` | `src/models/api-v1-misc-google-business-reviews-import504-error1.ts` |

### miscGoogleBusinessListAvailableAttributes

- **Signature**: `miscGoogleBusinessListAvailableAttributes(request: Misc.MiscGoogleBusinessListAvailableAttributesRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse, Misc.MiscGoogleBusinessListAvailableAttributesError>`
- **Wire**: `GET /api/v1/misc/google-business/location/attributes/available`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessListAvailableAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1"` [400] `ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1"` [401] `ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1"` [403] `ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1"` [404] `ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1"` [429] `ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1"` [500] `ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1"` [502] `ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1"` [503] `ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1` · `"apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1"` [504] `ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessListAvailableAttributesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `languageCode` | `query` | `string` | no |
| `regionCode` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse` | `apiV1MiscGoogleBusinessLocationAttributesAvailableResponseSchema` | `src/models/api-v1-misc-google-business-location-attributes-available-response.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1` | `apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes-available504-error1.ts` |

### miscGoogleBusinessListCategories

- **Signature**: `miscGoogleBusinessListCategories(request: Misc.MiscGoogleBusinessListCategoriesRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse, Misc.MiscGoogleBusinessListCategoriesError>`
- **Wire**: `GET /api/v1/misc/google-business/location/categories/available`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessListCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1"` [400] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1"` [401] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1"` [403] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1"` [404] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1"` [429] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1"` [500] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1"` [502] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1"` [503] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1` · `"apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1"` [504] `ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessListCategoriesRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `regionCode` | `query` | `string` | yes | — |
| `languageCode` | `query` | `string` | yes | — |
| `names` | `query` | `string[]` | no | — |
| `filter` | `query` | `string` | no | — |
| `pageSize` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `view` | `query` | `View` | no | `View.Basic` |

| Type | Schema value | Source |
| --- | --- | --- |
| `View` | `viewSchema` | `src/models/view.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse` | `apiV1MiscGoogleBusinessLocationCategoriesAvailableResponseSchema` | `src/models/api-v1-misc-google-business-location-categories-available-response.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1` | `apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Schema` | `src/models/api-v1-misc-google-business-location-categories-available504-error1.ts` |

### miscGoogleBusinessListMedia

- **Signature**: `miscGoogleBusinessListMedia(request: Misc.MiscGoogleBusinessListMediaRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessMediaResponse1, Misc.MiscGoogleBusinessListMediaError>`
- **Wire**: `GET /api/v1/misc/google-business/media`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessMediaResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessListMediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessMedia400Error1"` [400] `ApiV1MiscGoogleBusinessMedia400Error1` · `"apiV1MiscGoogleBusinessMedia401Error1"` [401] `ApiV1MiscGoogleBusinessMedia401Error1` · `"apiV1MiscGoogleBusinessMedia403Error1"` [403] `ApiV1MiscGoogleBusinessMedia403Error1` · `"apiV1MiscGoogleBusinessMedia404Error1"` [404] `ApiV1MiscGoogleBusinessMedia404Error1` · `"apiV1MiscGoogleBusinessMedia429Error1"` [429] `ApiV1MiscGoogleBusinessMedia429Error1` · `"apiV1MiscGoogleBusinessMedia500Error1"` [500] `ApiV1MiscGoogleBusinessMedia500Error1` · `"apiV1MiscGoogleBusinessMedia502Error1"` [502] `ApiV1MiscGoogleBusinessMedia502Error1` · `"apiV1MiscGoogleBusinessMedia503Error1"` [503] `ApiV1MiscGoogleBusinessMedia503Error1` · `"apiV1MiscGoogleBusinessMedia504Error1"` [504] `ApiV1MiscGoogleBusinessMedia504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessListMediaRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessMediaResponse1` | `apiV1MiscGoogleBusinessMediaResponse1Schema` | `src/models/api-v1-misc-google-business-media-response1.ts` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `apiV1MiscGoogleBusinessMedia400Error1Schema` | `src/models/api-v1-misc-google-business-media400-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `apiV1MiscGoogleBusinessMedia401Error1Schema` | `src/models/api-v1-misc-google-business-media401-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `apiV1MiscGoogleBusinessMedia403Error1Schema` | `src/models/api-v1-misc-google-business-media403-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `apiV1MiscGoogleBusinessMedia404Error1Schema` | `src/models/api-v1-misc-google-business-media404-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `apiV1MiscGoogleBusinessMedia429Error1Schema` | `src/models/api-v1-misc-google-business-media429-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `apiV1MiscGoogleBusinessMedia500Error1Schema` | `src/models/api-v1-misc-google-business-media500-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `apiV1MiscGoogleBusinessMedia502Error1Schema` | `src/models/api-v1-misc-google-business-media502-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `apiV1MiscGoogleBusinessMedia503Error1Schema` | `src/models/api-v1-misc-google-business-media503-error1.ts` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `apiV1MiscGoogleBusinessMedia504Error1Schema` | `src/models/api-v1-misc-google-business-media504-error1.ts` |

### miscGoogleBusinessListPlaceActionLinks

- **Signature**: `miscGoogleBusinessListPlaceActionLinks(request: Misc.MiscGoogleBusinessListPlaceActionLinksRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse, Misc.MiscGoogleBusinessListPlaceActionLinksError>`
- **Wire**: `GET /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessListPlaceActionLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1"` [400] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1"` [401] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1"` [403] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1"` [404] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1"` [429] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1"` [500] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1"` [502] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1"` [503] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1"` [504] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessListPlaceActionLinksRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseSchema` | `src/models/api-v1-misc-google-business-location-place-action-links-response.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links504-error1.ts` |

### miscGoogleBusinessListSearchKeywords

- **Signature**: `miscGoogleBusinessListSearchKeywords(request: Misc.MiscGoogleBusinessListSearchKeywordsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse, Misc.MiscGoogleBusinessListSearchKeywordsError>`
- **Wire**: `GET /api/v1/misc/google-business/location/search-keywords`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessListSearchKeywordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationSearchKeywords400Error1"` [400] `ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords401Error1"` [401] `ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords403Error1"` [403] `ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords404Error1"` [404] `ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords429Error1"` [429] `ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords500Error1"` [500] `ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords502Error1"` [502] `ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords503Error1"` [503] `ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1` · `"apiV1MiscGoogleBusinessLocationSearchKeywords504Error1"` [504] `ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessListSearchKeywordsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `startMonth` | `query` | `string` | yes |
| `endMonth` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse` | `apiV1MiscGoogleBusinessLocationSearchKeywordsResponseSchema` | `src/models/api-v1-misc-google-business-location-search-keywords-response.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1` | `apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Schema` | `src/models/api-v1-misc-google-business-location-search-keywords504-error1.ts` |

### miscGoogleBusinessReplyToReview

- **Signature**: `miscGoogleBusinessReplyToReview(request: Misc.MiscGoogleBusinessReplyToReviewRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessReplyToReviewError>`
- **Wire**: `PUT /api/v1/misc/google-business/reviews/{reviewId}/reply`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessReviewsReplyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessReplyToReviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessReviewsReply400Error1"` [400] `ApiV1MiscGoogleBusinessReviewsReply400Error1` · `"apiV1MiscGoogleBusinessReviewsReply401Error1"` [401] `ApiV1MiscGoogleBusinessReviewsReply401Error1` · `"apiV1MiscGoogleBusinessReviewsReply403Error1"` [403] `ApiV1MiscGoogleBusinessReviewsReply403Error1` · `"apiV1MiscGoogleBusinessReviewsReply404Error1"` [404] `ApiV1MiscGoogleBusinessReviewsReply404Error1` · `"apiV1MiscGoogleBusinessReviewsReply429Error1"` [429] `ApiV1MiscGoogleBusinessReviewsReply429Error1` · `"apiV1MiscGoogleBusinessReviewsReply500Error1"` [500] `ApiV1MiscGoogleBusinessReviewsReply500Error1` · `"apiV1MiscGoogleBusinessReviewsReply502Error1"` [502] `ApiV1MiscGoogleBusinessReviewsReply502Error1` · `"apiV1MiscGoogleBusinessReviewsReply503Error1"` [503] `ApiV1MiscGoogleBusinessReviewsReply503Error1` · `"apiV1MiscGoogleBusinessReviewsReply504Error1"` [504] `ApiV1MiscGoogleBusinessReviewsReply504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessReplyToReviewRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reviewId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1MiscGoogleBusinessReviewsReplyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest` | `apiV1MiscGoogleBusinessReviewsReplyRequestSchema` | `src/models/api-v1-misc-google-business-reviews-reply-request.ts` |
| `ApiV1MiscGoogleBusinessReviewsReplyResponse` | `apiV1MiscGoogleBusinessReviewsReplyResponseSchema` | `src/models/api-v1-misc-google-business-reviews-reply-response.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply400Error1` | `apiV1MiscGoogleBusinessReviewsReply400Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply400-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply401Error1` | `apiV1MiscGoogleBusinessReviewsReply401Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply401-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply403Error1` | `apiV1MiscGoogleBusinessReviewsReply403Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply403-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply404Error1` | `apiV1MiscGoogleBusinessReviewsReply404Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply404-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply429Error1` | `apiV1MiscGoogleBusinessReviewsReply429Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply429-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply500Error1` | `apiV1MiscGoogleBusinessReviewsReply500Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply500-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply502Error1` | `apiV1MiscGoogleBusinessReviewsReply502Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply502-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply503Error1` | `apiV1MiscGoogleBusinessReviewsReply503Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply503-error1.ts` |
| `ApiV1MiscGoogleBusinessReviewsReply504Error1` | `apiV1MiscGoogleBusinessReviewsReply504Error1Schema` | `src/models/api-v1-misc-google-business-reviews-reply504-error1.ts` |

### miscGoogleBusinessUpdateAttributes

- **Signature**: `miscGoogleBusinessUpdateAttributes(request?: Misc.MiscGoogleBusinessUpdateAttributesRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationAttributesResponse, Misc.MiscGoogleBusinessUpdateAttributesError>`
- **Wire**: `PATCH /api/v1/misc/google-business/location/attributes`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationAttributesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessUpdateAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationAttributes400Error1"` [400] `ApiV1MiscGoogleBusinessLocationAttributes400Error1` · `"apiV1MiscGoogleBusinessLocationAttributes401Error1"` [401] `ApiV1MiscGoogleBusinessLocationAttributes401Error1` · `"apiV1MiscGoogleBusinessLocationAttributes403Error1"` [403] `ApiV1MiscGoogleBusinessLocationAttributes403Error1` · `"apiV1MiscGoogleBusinessLocationAttributes404Error1"` [404] `ApiV1MiscGoogleBusinessLocationAttributes404Error1` · `"apiV1MiscGoogleBusinessLocationAttributes429Error1"` [429] `ApiV1MiscGoogleBusinessLocationAttributes429Error1` · `"apiV1MiscGoogleBusinessLocationAttributes500Error1"` [500] `ApiV1MiscGoogleBusinessLocationAttributes500Error1` · `"apiV1MiscGoogleBusinessLocationAttributes502Error1"` [502] `ApiV1MiscGoogleBusinessLocationAttributes502Error1` · `"apiV1MiscGoogleBusinessLocationAttributes503Error1"` [503] `ApiV1MiscGoogleBusinessLocationAttributes503Error1` · `"apiV1MiscGoogleBusinessLocationAttributes504Error1"` [504] `ApiV1MiscGoogleBusinessLocationAttributes504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessUpdateAttributesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationAttributesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationAttributesRequest` | `apiV1MiscGoogleBusinessLocationAttributesRequestSchema` | `src/models/api-v1-misc-google-business-location-attributes-request.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributesResponse` | `apiV1MiscGoogleBusinessLocationAttributesResponseSchema` | `src/models/api-v1-misc-google-business-location-attributes-response.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes400Error1` | `apiV1MiscGoogleBusinessLocationAttributes400Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes401Error1` | `apiV1MiscGoogleBusinessLocationAttributes401Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes403Error1` | `apiV1MiscGoogleBusinessLocationAttributes403Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes404Error1` | `apiV1MiscGoogleBusinessLocationAttributes404Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes429Error1` | `apiV1MiscGoogleBusinessLocationAttributes429Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes500Error1` | `apiV1MiscGoogleBusinessLocationAttributes500Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes502Error1` | `apiV1MiscGoogleBusinessLocationAttributes502Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes503Error1` | `apiV1MiscGoogleBusinessLocationAttributes503Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationAttributes504Error1` | `apiV1MiscGoogleBusinessLocationAttributes504Error1Schema` | `src/models/api-v1-misc-google-business-location-attributes504-error1.ts` |

### miscGoogleBusinessUpdateFoodMenus

- **Signature**: `miscGoogleBusinessUpdateFoodMenus(request?: Misc.MiscGoogleBusinessUpdateFoodMenusRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessUpdateFoodMenusError>`
- **Wire**: `PATCH /api/v1/misc/google-business/location/food-menus`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationFoodMenusResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessUpdateFoodMenusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationFoodMenus400Error1"` [400] `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus401Error1"` [401] `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus403Error1"` [403] `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus404Error1"` [404] `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus429Error1"` [429] `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus500Error1"` [500] `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus502Error1"` [502] `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus503Error1"` [503] `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` · `"apiV1MiscGoogleBusinessLocationFoodMenus504Error1"` [504] `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessUpdateFoodMenusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationFoodMenusRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationFoodMenusRequest` | `apiV1MiscGoogleBusinessLocationFoodMenusRequestSchema` | `src/models/api-v1-misc-google-business-location-food-menus-request.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusResponse` | `apiV1MiscGoogleBusinessLocationFoodMenusResponseSchema` | `src/models/api-v1-misc-google-business-location-food-menus-response.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus400Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus401Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus403Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus404Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus429Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus500Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus502Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus503Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` | `apiV1MiscGoogleBusinessLocationFoodMenus504Error1Schema` | `src/models/api-v1-misc-google-business-location-food-menus504-error1.ts` |

### miscGoogleBusinessUpdateHours

- **Signature**: `miscGoogleBusinessUpdateHours(request?: Misc.MiscGoogleBusinessUpdateHoursRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationHoursResponse, Misc.MiscGoogleBusinessUpdateHoursError>`
- **Wire**: `PATCH /api/v1/misc/google-business/location/hours`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationHoursResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessUpdateHoursError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationHours400Error1"` [400] `ApiV1MiscGoogleBusinessLocationHours400Error1` · `"apiV1MiscGoogleBusinessLocationHours401Error1"` [401] `ApiV1MiscGoogleBusinessLocationHours401Error1` · `"apiV1MiscGoogleBusinessLocationHours403Error1"` [403] `ApiV1MiscGoogleBusinessLocationHours403Error1` · `"apiV1MiscGoogleBusinessLocationHours404Error1"` [404] `ApiV1MiscGoogleBusinessLocationHours404Error1` · `"apiV1MiscGoogleBusinessLocationHours429Error1"` [429] `ApiV1MiscGoogleBusinessLocationHours429Error1` · `"apiV1MiscGoogleBusinessLocationHours500Error1"` [500] `ApiV1MiscGoogleBusinessLocationHours500Error1` · `"apiV1MiscGoogleBusinessLocationHours502Error1"` [502] `ApiV1MiscGoogleBusinessLocationHours502Error1` · `"apiV1MiscGoogleBusinessLocationHours503Error1"` [503] `ApiV1MiscGoogleBusinessLocationHours503Error1` · `"apiV1MiscGoogleBusinessLocationHours504Error1"` [504] `ApiV1MiscGoogleBusinessLocationHours504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessUpdateHoursRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationHoursRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationHoursRequest` | `apiV1MiscGoogleBusinessLocationHoursRequestSchema` | `src/models/api-v1-misc-google-business-location-hours-request.ts` |
| `ApiV1MiscGoogleBusinessLocationHoursResponse` | `apiV1MiscGoogleBusinessLocationHoursResponseSchema` | `src/models/api-v1-misc-google-business-location-hours-response.ts` |
| `ApiV1MiscGoogleBusinessLocationHours400Error1` | `apiV1MiscGoogleBusinessLocationHours400Error1Schema` | `src/models/api-v1-misc-google-business-location-hours400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours401Error1` | `apiV1MiscGoogleBusinessLocationHours401Error1Schema` | `src/models/api-v1-misc-google-business-location-hours401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours403Error1` | `apiV1MiscGoogleBusinessLocationHours403Error1Schema` | `src/models/api-v1-misc-google-business-location-hours403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours404Error1` | `apiV1MiscGoogleBusinessLocationHours404Error1Schema` | `src/models/api-v1-misc-google-business-location-hours404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours429Error1` | `apiV1MiscGoogleBusinessLocationHours429Error1Schema` | `src/models/api-v1-misc-google-business-location-hours429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours500Error1` | `apiV1MiscGoogleBusinessLocationHours500Error1Schema` | `src/models/api-v1-misc-google-business-location-hours500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours502Error1` | `apiV1MiscGoogleBusinessLocationHours502Error1Schema` | `src/models/api-v1-misc-google-business-location-hours502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours503Error1` | `apiV1MiscGoogleBusinessLocationHours503Error1Schema` | `src/models/api-v1-misc-google-business-location-hours503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationHours504Error1` | `apiV1MiscGoogleBusinessLocationHours504Error1Schema` | `src/models/api-v1-misc-google-business-location-hours504-error1.ts` |

### miscGoogleBusinessUpdateLocation

- **Signature**: `miscGoogleBusinessUpdateLocation(request?: Misc.MiscGoogleBusinessUpdateLocationRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessUpdateLocationError>`
- **Wire**: `PATCH /api/v1/misc/google-business/location`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessUpdateLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocation400Error1"` [400] `ApiV1MiscGoogleBusinessLocation400Error1` · `"apiV1MiscGoogleBusinessLocation401Error1"` [401] `ApiV1MiscGoogleBusinessLocation401Error1` · `"apiV1MiscGoogleBusinessLocation403Error1"` [403] `ApiV1MiscGoogleBusinessLocation403Error1` · `"apiV1MiscGoogleBusinessLocation404Error1"` [404] `ApiV1MiscGoogleBusinessLocation404Error1` · `"apiV1MiscGoogleBusinessLocation429Error1"` [429] `ApiV1MiscGoogleBusinessLocation429Error1` · `"apiV1MiscGoogleBusinessLocation500Error1"` [500] `ApiV1MiscGoogleBusinessLocation500Error1` · `"apiV1MiscGoogleBusinessLocation502Error1"` [502] `ApiV1MiscGoogleBusinessLocation502Error1` · `"apiV1MiscGoogleBusinessLocation503Error1"` [503] `ApiV1MiscGoogleBusinessLocation503Error1` · `"apiV1MiscGoogleBusinessLocation504Error1"` [504] `ApiV1MiscGoogleBusinessLocation504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessUpdateLocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationRequest` | `apiV1MiscGoogleBusinessLocationRequestSchema` | `src/models/api-v1-misc-google-business-location-request.ts` |
| `ApiV1MiscGoogleBusinessLocationResponse` | `apiV1MiscGoogleBusinessLocationResponseSchema` | `src/models/api-v1-misc-google-business-location-response.ts` |
| `ApiV1MiscGoogleBusinessLocation400Error1` | `apiV1MiscGoogleBusinessLocation400Error1Schema` | `src/models/api-v1-misc-google-business-location400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation401Error1` | `apiV1MiscGoogleBusinessLocation401Error1Schema` | `src/models/api-v1-misc-google-business-location401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation403Error1` | `apiV1MiscGoogleBusinessLocation403Error1Schema` | `src/models/api-v1-misc-google-business-location403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation404Error1` | `apiV1MiscGoogleBusinessLocation404Error1Schema` | `src/models/api-v1-misc-google-business-location404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation429Error1` | `apiV1MiscGoogleBusinessLocation429Error1Schema` | `src/models/api-v1-misc-google-business-location429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation500Error1` | `apiV1MiscGoogleBusinessLocation500Error1Schema` | `src/models/api-v1-misc-google-business-location500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation502Error1` | `apiV1MiscGoogleBusinessLocation502Error1Schema` | `src/models/api-v1-misc-google-business-location502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation503Error1` | `apiV1MiscGoogleBusinessLocation503Error1Schema` | `src/models/api-v1-misc-google-business-location503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocation504Error1` | `apiV1MiscGoogleBusinessLocation504Error1Schema` | `src/models/api-v1-misc-google-business-location504-error1.ts` |

### miscGoogleBusinessUpdatePlaceActionLink

- **Signature**: `miscGoogleBusinessUpdatePlaceActionLink(request?: Misc.MiscGoogleBusinessUpdatePlaceActionLinkRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, Misc.MiscGoogleBusinessUpdatePlaceActionLinkError>`
- **Wire**: `PATCH /api/v1/misc/google-business/location/place-action-links`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessUpdatePlaceActionLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1"` [400] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1"` [401] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1"` [403] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1"` [404] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1"` [429] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1"` [500] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1"` [502] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1"` [503] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` · `"apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1"` [504] `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessUpdatePlaceActionLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links-request1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links-response1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema` | `src/models/api-v1-misc-google-business-location-place-action-links504-error1.ts` |

### miscGoogleBusinessUpdateServiceList

- **Signature**: `miscGoogleBusinessUpdateServiceList(request?: Misc.MiscGoogleBusinessUpdateServiceListRequest, options?: RequestOptions): ApiPromise<ApiV1MiscGoogleBusinessLocationServiceListResponse, Misc.MiscGoogleBusinessUpdateServiceListError>`
- **Wire**: `PATCH /api/v1/misc/google-business/location/service-list`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscGoogleBusinessLocationServiceListResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscGoogleBusinessUpdateServiceListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscGoogleBusinessLocationServiceList400Error1"` [400] `ApiV1MiscGoogleBusinessLocationServiceList400Error1` · `"apiV1MiscGoogleBusinessLocationServiceList401Error1"` [401] `ApiV1MiscGoogleBusinessLocationServiceList401Error1` · `"apiV1MiscGoogleBusinessLocationServiceList403Error1"` [403] `ApiV1MiscGoogleBusinessLocationServiceList403Error1` · `"apiV1MiscGoogleBusinessLocationServiceList404Error1"` [404] `ApiV1MiscGoogleBusinessLocationServiceList404Error1` · `"apiV1MiscGoogleBusinessLocationServiceList429Error1"` [429] `ApiV1MiscGoogleBusinessLocationServiceList429Error1` · `"apiV1MiscGoogleBusinessLocationServiceList500Error1"` [500] `ApiV1MiscGoogleBusinessLocationServiceList500Error1` · `"apiV1MiscGoogleBusinessLocationServiceList502Error1"` [502] `ApiV1MiscGoogleBusinessLocationServiceList502Error1` · `"apiV1MiscGoogleBusinessLocationServiceList503Error1"` [503] `ApiV1MiscGoogleBusinessLocationServiceList503Error1` · `"apiV1MiscGoogleBusinessLocationServiceList504Error1"` [504] `ApiV1MiscGoogleBusinessLocationServiceList504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscGoogleBusinessUpdateServiceListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscGoogleBusinessLocationServiceListRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscGoogleBusinessLocationServiceListRequest` | `apiV1MiscGoogleBusinessLocationServiceListRequestSchema` | `src/models/api-v1-misc-google-business-location-service-list-request.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceListResponse` | `apiV1MiscGoogleBusinessLocationServiceListResponseSchema` | `src/models/api-v1-misc-google-business-location-service-list-response.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList400Error1` | `apiV1MiscGoogleBusinessLocationServiceList400Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list400-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList401Error1` | `apiV1MiscGoogleBusinessLocationServiceList401Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list401-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList403Error1` | `apiV1MiscGoogleBusinessLocationServiceList403Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list403-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList404Error1` | `apiV1MiscGoogleBusinessLocationServiceList404Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list404-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList429Error1` | `apiV1MiscGoogleBusinessLocationServiceList429Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list429-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList500Error1` | `apiV1MiscGoogleBusinessLocationServiceList500Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list500-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList502Error1` | `apiV1MiscGoogleBusinessLocationServiceList502Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list502-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList503Error1` | `apiV1MiscGoogleBusinessLocationServiceList503Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list503-error1.ts` |
| `ApiV1MiscGoogleBusinessLocationServiceList504Error1` | `apiV1MiscGoogleBusinessLocationServiceList504Error1Schema` | `src/models/api-v1-misc-google-business-location-service-list504-error1.ts` |

### miscInstagramBusinessDiscovery

- **Signature**: `miscInstagramBusinessDiscovery(request: Misc.MiscInstagramBusinessDiscoveryRequest, options?: RequestOptions): ApiPromise<ApiV1MiscInstagramTagsResponse, Misc.MiscInstagramBusinessDiscoveryError>`
- **Wire**: `GET /api/v1/misc/instagram/tags`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscInstagramTagsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscInstagramBusinessDiscoveryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscInstagramTags400Error1"` [400] `ApiV1MiscInstagramTags400Error1` · `"apiV1MiscInstagramTags401Error1"` [401] `ApiV1MiscInstagramTags401Error1` · `"apiV1MiscInstagramTags403Error1"` [403] `ApiV1MiscInstagramTags403Error1` · `"apiV1MiscInstagramTags404Error1"` [404] `ApiV1MiscInstagramTags404Error1` · `"apiV1MiscInstagramTags429Error1"` [429] `ApiV1MiscInstagramTags429Error1` · `"apiV1MiscInstagramTags500Error1"` [500] `ApiV1MiscInstagramTags500Error1` · `"apiV1MiscInstagramTags502Error1"` [502] `ApiV1MiscInstagramTags502Error1` · `"apiV1MiscInstagramTags503Error1"` [503] `ApiV1MiscInstagramTags503Error1` · `"apiV1MiscInstagramTags504Error1"` [504] `ApiV1MiscInstagramTags504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscInstagramBusinessDiscoveryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `username` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscInstagramTagsResponse` | `apiV1MiscInstagramTagsResponseSchema` | `src/models/api-v1-misc-instagram-tags-response.ts` |
| `ApiV1MiscInstagramTags400Error1` | `apiV1MiscInstagramTags400Error1Schema` | `src/models/api-v1-misc-instagram-tags400-error1.ts` |
| `ApiV1MiscInstagramTags401Error1` | `apiV1MiscInstagramTags401Error1Schema` | `src/models/api-v1-misc-instagram-tags401-error1.ts` |
| `ApiV1MiscInstagramTags403Error1` | `apiV1MiscInstagramTags403Error1Schema` | `src/models/api-v1-misc-instagram-tags403-error1.ts` |
| `ApiV1MiscInstagramTags404Error1` | `apiV1MiscInstagramTags404Error1Schema` | `src/models/api-v1-misc-instagram-tags404-error1.ts` |
| `ApiV1MiscInstagramTags429Error1` | `apiV1MiscInstagramTags429Error1Schema` | `src/models/api-v1-misc-instagram-tags429-error1.ts` |
| `ApiV1MiscInstagramTags500Error1` | `apiV1MiscInstagramTags500Error1Schema` | `src/models/api-v1-misc-instagram-tags500-error1.ts` |
| `ApiV1MiscInstagramTags502Error1` | `apiV1MiscInstagramTags502Error1Schema` | `src/models/api-v1-misc-instagram-tags502-error1.ts` |
| `ApiV1MiscInstagramTags503Error1` | `apiV1MiscInstagramTags503Error1Schema` | `src/models/api-v1-misc-instagram-tags503-error1.ts` |
| `ApiV1MiscInstagramTags504Error1` | `apiV1MiscInstagramTags504Error1Schema` | `src/models/api-v1-misc-instagram-tags504-error1.ts` |

### miscInstagramDeleteComment

- **Signature**: `miscInstagramDeleteComment(request?: Misc.MiscInstagramDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscInstagramCommentResponse, Misc.MiscInstagramDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/instagram/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscInstagramCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscInstagramDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscInstagramComment400Error1"` [400] `ApiV1MiscInstagramComment400Error1` · `"apiV1MiscInstagramComment401Error1"` [401] `ApiV1MiscInstagramComment401Error1` · `"apiV1MiscInstagramComment403Error1"` [403] `ApiV1MiscInstagramComment403Error1` · `"apiV1MiscInstagramComment404Error1"` [404] `ApiV1MiscInstagramComment404Error1` · `"apiV1MiscInstagramComment429Error1"` [429] `ApiV1MiscInstagramComment429Error1` · `"apiV1MiscInstagramComment500Error1"` [500] `ApiV1MiscInstagramComment500Error1` · `"apiV1MiscInstagramComment502Error1"` [502] `ApiV1MiscInstagramComment502Error1` · `"apiV1MiscInstagramComment503Error1"` [503] `ApiV1MiscInstagramComment503Error1` · `"apiV1MiscInstagramComment504Error1"` [504] `ApiV1MiscInstagramComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscInstagramDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscInstagramCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscInstagramCommentRequest` | `apiV1MiscInstagramCommentRequestSchema` | `src/models/api-v1-misc-instagram-comment-request.ts` |
| `ApiV1MiscInstagramCommentResponse` | `apiV1MiscInstagramCommentResponseSchema` | `src/models/api-v1-misc-instagram-comment-response.ts` |
| `ApiV1MiscInstagramComment400Error1` | `apiV1MiscInstagramComment400Error1Schema` | `src/models/api-v1-misc-instagram-comment400-error1.ts` |
| `ApiV1MiscInstagramComment401Error1` | `apiV1MiscInstagramComment401Error1Schema` | `src/models/api-v1-misc-instagram-comment401-error1.ts` |
| `ApiV1MiscInstagramComment403Error1` | `apiV1MiscInstagramComment403Error1Schema` | `src/models/api-v1-misc-instagram-comment403-error1.ts` |
| `ApiV1MiscInstagramComment404Error1` | `apiV1MiscInstagramComment404Error1Schema` | `src/models/api-v1-misc-instagram-comment404-error1.ts` |
| `ApiV1MiscInstagramComment429Error1` | `apiV1MiscInstagramComment429Error1Schema` | `src/models/api-v1-misc-instagram-comment429-error1.ts` |
| `ApiV1MiscInstagramComment500Error1` | `apiV1MiscInstagramComment500Error1Schema` | `src/models/api-v1-misc-instagram-comment500-error1.ts` |
| `ApiV1MiscInstagramComment502Error1` | `apiV1MiscInstagramComment502Error1Schema` | `src/models/api-v1-misc-instagram-comment502-error1.ts` |
| `ApiV1MiscInstagramComment503Error1` | `apiV1MiscInstagramComment503Error1Schema` | `src/models/api-v1-misc-instagram-comment503-error1.ts` |
| `ApiV1MiscInstagramComment504Error1` | `apiV1MiscInstagramComment504Error1Schema` | `src/models/api-v1-misc-instagram-comment504-error1.ts` |

### miscInstagramSearchAudio

- **Signature**: `miscInstagramSearchAudio(request: Misc.MiscInstagramSearchAudioRequest, options?: RequestOptions): ApiPromise<ApiV1MiscInstagramAudioResponse, Misc.MiscInstagramSearchAudioError>`
- **Wire**: `GET /api/v1/misc/instagram/audio`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscInstagramAudioResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscInstagramSearchAudioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscInstagramAudio400Error1"` [400] `ApiV1MiscInstagramAudio400Error1` · `"apiV1MiscInstagramAudio401Error1"` [401] `ApiV1MiscInstagramAudio401Error1` · `"apiV1MiscInstagramAudio403Error1"` [403] `ApiV1MiscInstagramAudio403Error1` · `"apiV1MiscInstagramAudio404Error1"` [404] `ApiV1MiscInstagramAudio404Error1` · `"apiV1MiscInstagramAudio429Error1"` [429] `ApiV1MiscInstagramAudio429Error1` · `"apiV1MiscInstagramAudio500Error1"` [500] `ApiV1MiscInstagramAudio500Error1` · `"apiV1MiscInstagramAudio502Error1"` [502] `ApiV1MiscInstagramAudio502Error1` · `"apiV1MiscInstagramAudio503Error1"` [503] `ApiV1MiscInstagramAudio503Error1` · `"apiV1MiscInstagramAudio504Error1"` [504] `ApiV1MiscInstagramAudio504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscInstagramSearchAudioRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `audioType` | `query` | `AudioType` | yes |
| `searchQuery` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudioType` | `audioTypeSchema` | `src/models/audio-type.ts` |
| `ApiV1MiscInstagramAudioResponse` | `apiV1MiscInstagramAudioResponseSchema` | `src/models/api-v1-misc-instagram-audio-response.ts` |
| `ApiV1MiscInstagramAudio400Error1` | `apiV1MiscInstagramAudio400Error1Schema` | `src/models/api-v1-misc-instagram-audio400-error1.ts` |
| `ApiV1MiscInstagramAudio401Error1` | `apiV1MiscInstagramAudio401Error1Schema` | `src/models/api-v1-misc-instagram-audio401-error1.ts` |
| `ApiV1MiscInstagramAudio403Error1` | `apiV1MiscInstagramAudio403Error1Schema` | `src/models/api-v1-misc-instagram-audio403-error1.ts` |
| `ApiV1MiscInstagramAudio404Error1` | `apiV1MiscInstagramAudio404Error1Schema` | `src/models/api-v1-misc-instagram-audio404-error1.ts` |
| `ApiV1MiscInstagramAudio429Error1` | `apiV1MiscInstagramAudio429Error1Schema` | `src/models/api-v1-misc-instagram-audio429-error1.ts` |
| `ApiV1MiscInstagramAudio500Error1` | `apiV1MiscInstagramAudio500Error1Schema` | `src/models/api-v1-misc-instagram-audio500-error1.ts` |
| `ApiV1MiscInstagramAudio502Error1` | `apiV1MiscInstagramAudio502Error1Schema` | `src/models/api-v1-misc-instagram-audio502-error1.ts` |
| `ApiV1MiscInstagramAudio503Error1` | `apiV1MiscInstagramAudio503Error1Schema` | `src/models/api-v1-misc-instagram-audio503-error1.ts` |
| `ApiV1MiscInstagramAudio504Error1` | `apiV1MiscInstagramAudio504Error1Schema` | `src/models/api-v1-misc-instagram-audio504-error1.ts` |

### miscInstagramSearchLocations

- **Signature**: `miscInstagramSearchLocations(request: Misc.MiscInstagramSearchLocationsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscInstagramLocationsResponse, Misc.MiscInstagramSearchLocationsError>`
- **Wire**: `GET /api/v1/misc/instagram/locations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscInstagramLocationsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscInstagramSearchLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscInstagramLocations400Error1"` [400] `ApiV1MiscInstagramLocations400Error1` · `"apiV1MiscInstagramLocations401Error1"` [401] `ApiV1MiscInstagramLocations401Error1` · `"apiV1MiscInstagramLocations403Error1"` [403] `ApiV1MiscInstagramLocations403Error1` · `"apiV1MiscInstagramLocations404Error1"` [404] `ApiV1MiscInstagramLocations404Error1` · `"apiV1MiscInstagramLocations429Error1"` [429] `ApiV1MiscInstagramLocations429Error1` · `"apiV1MiscInstagramLocations500Error1"` [500] `ApiV1MiscInstagramLocations500Error1` · `"apiV1MiscInstagramLocations502Error1"` [502] `ApiV1MiscInstagramLocations502Error1` · `"apiV1MiscInstagramLocations503Error1"` [503] `ApiV1MiscInstagramLocations503Error1` · `"apiV1MiscInstagramLocations504Error1"` [504] `ApiV1MiscInstagramLocations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscInstagramSearchLocationsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `q` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscInstagramLocationsResponse` | `apiV1MiscInstagramLocationsResponseSchema` | `src/models/api-v1-misc-instagram-locations-response.ts` |
| `ApiV1MiscInstagramLocations400Error1` | `apiV1MiscInstagramLocations400Error1Schema` | `src/models/api-v1-misc-instagram-locations400-error1.ts` |
| `ApiV1MiscInstagramLocations401Error1` | `apiV1MiscInstagramLocations401Error1Schema` | `src/models/api-v1-misc-instagram-locations401-error1.ts` |
| `ApiV1MiscInstagramLocations403Error1` | `apiV1MiscInstagramLocations403Error1Schema` | `src/models/api-v1-misc-instagram-locations403-error1.ts` |
| `ApiV1MiscInstagramLocations404Error1` | `apiV1MiscInstagramLocations404Error1Schema` | `src/models/api-v1-misc-instagram-locations404-error1.ts` |
| `ApiV1MiscInstagramLocations429Error1` | `apiV1MiscInstagramLocations429Error1Schema` | `src/models/api-v1-misc-instagram-locations429-error1.ts` |
| `ApiV1MiscInstagramLocations500Error1` | `apiV1MiscInstagramLocations500Error1Schema` | `src/models/api-v1-misc-instagram-locations500-error1.ts` |
| `ApiV1MiscInstagramLocations502Error1` | `apiV1MiscInstagramLocations502Error1Schema` | `src/models/api-v1-misc-instagram-locations502-error1.ts` |
| `ApiV1MiscInstagramLocations503Error1` | `apiV1MiscInstagramLocations503Error1Schema` | `src/models/api-v1-misc-instagram-locations503-error1.ts` |
| `ApiV1MiscInstagramLocations504Error1` | `apiV1MiscInstagramLocations504Error1Schema` | `src/models/api-v1-misc-instagram-locations504-error1.ts` |

### miscLinkedinBuildCommentary

- **Signature**: `miscLinkedinBuildCommentary(request?: Misc.MiscLinkedinBuildCommentaryRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinMentionsBuilderResponse, Misc.MiscLinkedinBuildCommentaryError>`
- **Wire**: `POST /api/v1/misc/linkedin/mentions/builder`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscLinkedinMentionsBuilderResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinBuildCommentaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinMentionsBuilder400Error1"` [400] `ApiV1MiscLinkedinMentionsBuilder400Error1` · `"apiV1MiscLinkedinMentionsBuilder401Error1"` [401] `ApiV1MiscLinkedinMentionsBuilder401Error1` · `"apiV1MiscLinkedinMentionsBuilder403Error1"` [403] `ApiV1MiscLinkedinMentionsBuilder403Error1` · `"apiV1MiscLinkedinMentionsBuilder404Error1"` [404] `ApiV1MiscLinkedinMentionsBuilder404Error1` · `"apiV1MiscLinkedinMentionsBuilder429Error1"` [429] `ApiV1MiscLinkedinMentionsBuilder429Error1` · `"apiV1MiscLinkedinMentionsBuilder500Error1"` [500] `ApiV1MiscLinkedinMentionsBuilder500Error1` · `"apiV1MiscLinkedinMentionsBuilder502Error1"` [502] `ApiV1MiscLinkedinMentionsBuilder502Error1` · `"apiV1MiscLinkedinMentionsBuilder503Error1"` [503] `ApiV1MiscLinkedinMentionsBuilder503Error1` · `"apiV1MiscLinkedinMentionsBuilder504Error1"` [504] `ApiV1MiscLinkedinMentionsBuilder504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinBuildCommentaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscLinkedinMentionsBuilderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscLinkedinMentionsBuilderRequest` | `apiV1MiscLinkedinMentionsBuilderRequestSchema` | `src/models/api-v1-misc-linkedin-mentions-builder-request.ts` |
| `ApiV1MiscLinkedinMentionsBuilderResponse` | `apiV1MiscLinkedinMentionsBuilderResponseSchema` | `src/models/api-v1-misc-linkedin-mentions-builder-response.ts` |
| `ApiV1MiscLinkedinMentionsBuilder400Error1` | `apiV1MiscLinkedinMentionsBuilder400Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder400-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder401Error1` | `apiV1MiscLinkedinMentionsBuilder401Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder401-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder403Error1` | `apiV1MiscLinkedinMentionsBuilder403Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder403-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder404Error1` | `apiV1MiscLinkedinMentionsBuilder404Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder404-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder429Error1` | `apiV1MiscLinkedinMentionsBuilder429Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder429-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder500Error1` | `apiV1MiscLinkedinMentionsBuilder500Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder500-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder502Error1` | `apiV1MiscLinkedinMentionsBuilder502Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder502-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder503Error1` | `apiV1MiscLinkedinMentionsBuilder503Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder503-error1.ts` |
| `ApiV1MiscLinkedinMentionsBuilder504Error1` | `apiV1MiscLinkedinMentionsBuilder504Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-builder504-error1.ts` |

### miscLinkedinDeleteComment

- **Signature**: `miscLinkedinDeleteComment(request?: Misc.MiscLinkedinDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinCommentResponse1, Misc.MiscLinkedinDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/linkedin/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscLinkedinCommentResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinComment400Error1"` [400] `ApiV1MiscLinkedinComment400Error1` · `"apiV1MiscLinkedinComment401Error1"` [401] `ApiV1MiscLinkedinComment401Error1` · `"apiV1MiscLinkedinComment403Error1"` [403] `ApiV1MiscLinkedinComment403Error1` · `"apiV1MiscLinkedinComment404Error1"` [404] `ApiV1MiscLinkedinComment404Error1` · `"apiV1MiscLinkedinComment429Error1"` [429] `ApiV1MiscLinkedinComment429Error1` · `"apiV1MiscLinkedinComment500Error1"` [500] `ApiV1MiscLinkedinComment500Error1` · `"apiV1MiscLinkedinComment502Error1"` [502] `ApiV1MiscLinkedinComment502Error1` · `"apiV1MiscLinkedinComment503Error1"` [503] `ApiV1MiscLinkedinComment503Error1` · `"apiV1MiscLinkedinComment504Error1"` [504] `ApiV1MiscLinkedinComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscLinkedinCommentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscLinkedinCommentRequest1` | `apiV1MiscLinkedinCommentRequest1Schema` | `src/models/api-v1-misc-linkedin-comment-request1.ts` |
| `ApiV1MiscLinkedinCommentResponse1` | `apiV1MiscLinkedinCommentResponse1Schema` | `src/models/api-v1-misc-linkedin-comment-response1.ts` |
| `ApiV1MiscLinkedinComment400Error1` | `apiV1MiscLinkedinComment400Error1Schema` | `src/models/api-v1-misc-linkedin-comment400-error1.ts` |
| `ApiV1MiscLinkedinComment401Error1` | `apiV1MiscLinkedinComment401Error1Schema` | `src/models/api-v1-misc-linkedin-comment401-error1.ts` |
| `ApiV1MiscLinkedinComment403Error1` | `apiV1MiscLinkedinComment403Error1Schema` | `src/models/api-v1-misc-linkedin-comment403-error1.ts` |
| `ApiV1MiscLinkedinComment404Error1` | `apiV1MiscLinkedinComment404Error1Schema` | `src/models/api-v1-misc-linkedin-comment404-error1.ts` |
| `ApiV1MiscLinkedinComment429Error1` | `apiV1MiscLinkedinComment429Error1Schema` | `src/models/api-v1-misc-linkedin-comment429-error1.ts` |
| `ApiV1MiscLinkedinComment500Error1` | `apiV1MiscLinkedinComment500Error1Schema` | `src/models/api-v1-misc-linkedin-comment500-error1.ts` |
| `ApiV1MiscLinkedinComment502Error1` | `apiV1MiscLinkedinComment502Error1Schema` | `src/models/api-v1-misc-linkedin-comment502-error1.ts` |
| `ApiV1MiscLinkedinComment503Error1` | `apiV1MiscLinkedinComment503Error1Schema` | `src/models/api-v1-misc-linkedin-comment503-error1.ts` |
| `ApiV1MiscLinkedinComment504Error1` | `apiV1MiscLinkedinComment504Error1Schema` | `src/models/api-v1-misc-linkedin-comment504-error1.ts` |

### miscLinkedinDeletePost

- **Signature**: `miscLinkedinDeletePost(request?: Misc.MiscLinkedinDeletePostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinPostResponse1, Misc.MiscLinkedinDeletePostError>`
- **Wire**: `DELETE /api/v1/misc/linkedin/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscLinkedinPostResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinPost400Error1"` [400] `ApiV1MiscLinkedinPost400Error1` · `"apiV1MiscLinkedinPost401Error1"` [401] `ApiV1MiscLinkedinPost401Error1` · `"apiV1MiscLinkedinPost403Error1"` [403] `ApiV1MiscLinkedinPost403Error1` · `"apiV1MiscLinkedinPost404Error1"` [404] `ApiV1MiscLinkedinPost404Error1` · `"apiV1MiscLinkedinPost429Error1"` [429] `ApiV1MiscLinkedinPost429Error1` · `"apiV1MiscLinkedinPost500Error1"` [500] `ApiV1MiscLinkedinPost500Error1` · `"apiV1MiscLinkedinPost502Error1"` [502] `ApiV1MiscLinkedinPost502Error1` · `"apiV1MiscLinkedinPost503Error1"` [503] `ApiV1MiscLinkedinPost503Error1` · `"apiV1MiscLinkedinPost504Error1"` [504] `ApiV1MiscLinkedinPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscLinkedinPostRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscLinkedinPostRequest1` | `apiV1MiscLinkedinPostRequest1Schema` | `src/models/api-v1-misc-linkedin-post-request1.ts` |
| `ApiV1MiscLinkedinPostResponse1` | `apiV1MiscLinkedinPostResponse1Schema` | `src/models/api-v1-misc-linkedin-post-response1.ts` |
| `ApiV1MiscLinkedinPost400Error1` | `apiV1MiscLinkedinPost400Error1Schema` | `src/models/api-v1-misc-linkedin-post400-error1.ts` |
| `ApiV1MiscLinkedinPost401Error1` | `apiV1MiscLinkedinPost401Error1Schema` | `src/models/api-v1-misc-linkedin-post401-error1.ts` |
| `ApiV1MiscLinkedinPost403Error1` | `apiV1MiscLinkedinPost403Error1Schema` | `src/models/api-v1-misc-linkedin-post403-error1.ts` |
| `ApiV1MiscLinkedinPost404Error1` | `apiV1MiscLinkedinPost404Error1Schema` | `src/models/api-v1-misc-linkedin-post404-error1.ts` |
| `ApiV1MiscLinkedinPost429Error1` | `apiV1MiscLinkedinPost429Error1Schema` | `src/models/api-v1-misc-linkedin-post429-error1.ts` |
| `ApiV1MiscLinkedinPost500Error1` | `apiV1MiscLinkedinPost500Error1Schema` | `src/models/api-v1-misc-linkedin-post500-error1.ts` |
| `ApiV1MiscLinkedinPost502Error1` | `apiV1MiscLinkedinPost502Error1Schema` | `src/models/api-v1-misc-linkedin-post502-error1.ts` |
| `ApiV1MiscLinkedinPost503Error1` | `apiV1MiscLinkedinPost503Error1Schema` | `src/models/api-v1-misc-linkedin-post503-error1.ts` |
| `ApiV1MiscLinkedinPost504Error1` | `apiV1MiscLinkedinPost504Error1Schema` | `src/models/api-v1-misc-linkedin-post504-error1.ts` |

### miscLinkedinEditComment

- **Signature**: `miscLinkedinEditComment(request?: Misc.MiscLinkedinEditCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinCommentResponse, Misc.MiscLinkedinEditCommentError>`
- **Wire**: `PATCH /api/v1/misc/linkedin/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscLinkedinCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinEditCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinComment400Error1"` [400] `ApiV1MiscLinkedinComment400Error1` · `"apiV1MiscLinkedinComment401Error1"` [401] `ApiV1MiscLinkedinComment401Error1` · `"apiV1MiscLinkedinComment403Error1"` [403] `ApiV1MiscLinkedinComment403Error1` · `"apiV1MiscLinkedinComment404Error1"` [404] `ApiV1MiscLinkedinComment404Error1` · `"apiV1MiscLinkedinComment429Error1"` [429] `ApiV1MiscLinkedinComment429Error1` · `"apiV1MiscLinkedinComment500Error1"` [500] `ApiV1MiscLinkedinComment500Error1` · `"apiV1MiscLinkedinComment502Error1"` [502] `ApiV1MiscLinkedinComment502Error1` · `"apiV1MiscLinkedinComment503Error1"` [503] `ApiV1MiscLinkedinComment503Error1` · `"apiV1MiscLinkedinComment504Error1"` [504] `ApiV1MiscLinkedinComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinEditCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscLinkedinCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscLinkedinCommentRequest` | `apiV1MiscLinkedinCommentRequestSchema` | `src/models/api-v1-misc-linkedin-comment-request.ts` |
| `ApiV1MiscLinkedinCommentResponse` | `apiV1MiscLinkedinCommentResponseSchema` | `src/models/api-v1-misc-linkedin-comment-response.ts` |
| `ApiV1MiscLinkedinComment400Error1` | `apiV1MiscLinkedinComment400Error1Schema` | `src/models/api-v1-misc-linkedin-comment400-error1.ts` |
| `ApiV1MiscLinkedinComment401Error1` | `apiV1MiscLinkedinComment401Error1Schema` | `src/models/api-v1-misc-linkedin-comment401-error1.ts` |
| `ApiV1MiscLinkedinComment403Error1` | `apiV1MiscLinkedinComment403Error1Schema` | `src/models/api-v1-misc-linkedin-comment403-error1.ts` |
| `ApiV1MiscLinkedinComment404Error1` | `apiV1MiscLinkedinComment404Error1Schema` | `src/models/api-v1-misc-linkedin-comment404-error1.ts` |
| `ApiV1MiscLinkedinComment429Error1` | `apiV1MiscLinkedinComment429Error1Schema` | `src/models/api-v1-misc-linkedin-comment429-error1.ts` |
| `ApiV1MiscLinkedinComment500Error1` | `apiV1MiscLinkedinComment500Error1Schema` | `src/models/api-v1-misc-linkedin-comment500-error1.ts` |
| `ApiV1MiscLinkedinComment502Error1` | `apiV1MiscLinkedinComment502Error1Schema` | `src/models/api-v1-misc-linkedin-comment502-error1.ts` |
| `ApiV1MiscLinkedinComment503Error1` | `apiV1MiscLinkedinComment503Error1Schema` | `src/models/api-v1-misc-linkedin-comment503-error1.ts` |
| `ApiV1MiscLinkedinComment504Error1` | `apiV1MiscLinkedinComment504Error1Schema` | `src/models/api-v1-misc-linkedin-comment504-error1.ts` |

### miscLinkedinEditPost

- **Signature**: `miscLinkedinEditPost(request?: Misc.MiscLinkedinEditPostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinPostResponse, Misc.MiscLinkedinEditPostError>`
- **Wire**: `PATCH /api/v1/misc/linkedin/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscLinkedinPostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinEditPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinPost400Error1"` [400] `ApiV1MiscLinkedinPost400Error1` · `"apiV1MiscLinkedinPost401Error1"` [401] `ApiV1MiscLinkedinPost401Error1` · `"apiV1MiscLinkedinPost403Error1"` [403] `ApiV1MiscLinkedinPost403Error1` · `"apiV1MiscLinkedinPost404Error1"` [404] `ApiV1MiscLinkedinPost404Error1` · `"apiV1MiscLinkedinPost429Error1"` [429] `ApiV1MiscLinkedinPost429Error1` · `"apiV1MiscLinkedinPost500Error1"` [500] `ApiV1MiscLinkedinPost500Error1` · `"apiV1MiscLinkedinPost502Error1"` [502] `ApiV1MiscLinkedinPost502Error1` · `"apiV1MiscLinkedinPost503Error1"` [503] `ApiV1MiscLinkedinPost503Error1` · `"apiV1MiscLinkedinPost504Error1"` [504] `ApiV1MiscLinkedinPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinEditPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscLinkedinPostRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscLinkedinPostRequest` | `apiV1MiscLinkedinPostRequestSchema` | `src/models/api-v1-misc-linkedin-post-request.ts` |
| `ApiV1MiscLinkedinPostResponse` | `apiV1MiscLinkedinPostResponseSchema` | `src/models/api-v1-misc-linkedin-post-response.ts` |
| `ApiV1MiscLinkedinPost400Error1` | `apiV1MiscLinkedinPost400Error1Schema` | `src/models/api-v1-misc-linkedin-post400-error1.ts` |
| `ApiV1MiscLinkedinPost401Error1` | `apiV1MiscLinkedinPost401Error1Schema` | `src/models/api-v1-misc-linkedin-post401-error1.ts` |
| `ApiV1MiscLinkedinPost403Error1` | `apiV1MiscLinkedinPost403Error1Schema` | `src/models/api-v1-misc-linkedin-post403-error1.ts` |
| `ApiV1MiscLinkedinPost404Error1` | `apiV1MiscLinkedinPost404Error1Schema` | `src/models/api-v1-misc-linkedin-post404-error1.ts` |
| `ApiV1MiscLinkedinPost429Error1` | `apiV1MiscLinkedinPost429Error1Schema` | `src/models/api-v1-misc-linkedin-post429-error1.ts` |
| `ApiV1MiscLinkedinPost500Error1` | `apiV1MiscLinkedinPost500Error1Schema` | `src/models/api-v1-misc-linkedin-post500-error1.ts` |
| `ApiV1MiscLinkedinPost502Error1` | `apiV1MiscLinkedinPost502Error1Schema` | `src/models/api-v1-misc-linkedin-post502-error1.ts` |
| `ApiV1MiscLinkedinPost503Error1` | `apiV1MiscLinkedinPost503Error1Schema` | `src/models/api-v1-misc-linkedin-post503-error1.ts` |
| `ApiV1MiscLinkedinPost504Error1` | `apiV1MiscLinkedinPost504Error1Schema` | `src/models/api-v1-misc-linkedin-post504-error1.ts` |

### miscLinkedinGetTags

- **Signature**: `miscLinkedinGetTags(request: Misc.MiscLinkedinGetTagsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinMentionsTagsResponse, Misc.MiscLinkedinGetTagsError>`
- **Wire**: `GET /api/v1/misc/linkedin/mentions/tags`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscLinkedinMentionsTagsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinGetTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinMentionsTags400Error1"` [400] `ApiV1MiscLinkedinMentionsTags400Error1` · `"apiV1MiscLinkedinMentionsTags401Error1"` [401] `ApiV1MiscLinkedinMentionsTags401Error1` · `"apiV1MiscLinkedinMentionsTags403Error1"` [403] `ApiV1MiscLinkedinMentionsTags403Error1` · `"apiV1MiscLinkedinMentionsTags404Error1"` [404] `ApiV1MiscLinkedinMentionsTags404Error1` · `"apiV1MiscLinkedinMentionsTags429Error1"` [429] `ApiV1MiscLinkedinMentionsTags429Error1` · `"apiV1MiscLinkedinMentionsTags500Error1"` [500] `ApiV1MiscLinkedinMentionsTags500Error1` · `"apiV1MiscLinkedinMentionsTags502Error1"` [502] `ApiV1MiscLinkedinMentionsTags502Error1` · `"apiV1MiscLinkedinMentionsTags503Error1"` [503] `ApiV1MiscLinkedinMentionsTags503Error1` · `"apiV1MiscLinkedinMentionsTags504Error1"` [504] `ApiV1MiscLinkedinMentionsTags504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinGetTagsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `q` | `query` | `string` | no | — |
| `url` | `query` | `string` | no | — |
| `displayName` | `query` | `string` | no | — |
| `scope` | `query` | `Scope` | no | `Scope.All` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `ApiV1MiscLinkedinMentionsTagsResponse` | `apiV1MiscLinkedinMentionsTagsResponseSchema` | `src/models/api-v1-misc-linkedin-mentions-tags-response.ts` |
| `ApiV1MiscLinkedinMentionsTags400Error1` | `apiV1MiscLinkedinMentionsTags400Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags400-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags401Error1` | `apiV1MiscLinkedinMentionsTags401Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags401-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags403Error1` | `apiV1MiscLinkedinMentionsTags403Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags403-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags404Error1` | `apiV1MiscLinkedinMentionsTags404Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags404-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags429Error1` | `apiV1MiscLinkedinMentionsTags429Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags429-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags500Error1` | `apiV1MiscLinkedinMentionsTags500Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags500-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags502Error1` | `apiV1MiscLinkedinMentionsTags502Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags502-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags503Error1` | `apiV1MiscLinkedinMentionsTags503Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags503-error1.ts` |
| `ApiV1MiscLinkedinMentionsTags504Error1` | `apiV1MiscLinkedinMentionsTags504Error1Schema` | `src/models/api-v1-misc-linkedin-mentions-tags504-error1.ts` |

### miscLinkedinResharePost

- **Signature**: `miscLinkedinResharePost(request?: Misc.MiscLinkedinResharePostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscLinkedinPostReshareResponse, Misc.MiscLinkedinResharePostError>`
- **Wire**: `POST /api/v1/misc/linkedin/post/reshare`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscLinkedinPostReshareResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscLinkedinResharePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscLinkedinPostReshare400Error1"` [400] `ApiV1MiscLinkedinPostReshare400Error1` · `"apiV1MiscLinkedinPostReshare401Error1"` [401] `ApiV1MiscLinkedinPostReshare401Error1` · `"apiV1MiscLinkedinPostReshare403Error1"` [403] `ApiV1MiscLinkedinPostReshare403Error1` · `"apiV1MiscLinkedinPostReshare404Error1"` [404] `ApiV1MiscLinkedinPostReshare404Error1` · `"apiV1MiscLinkedinPostReshare422Error1"` [422] `ApiV1MiscLinkedinPostReshare422Error1` · `"apiV1MiscLinkedinPostReshare429Error1"` [429] `ApiV1MiscLinkedinPostReshare429Error1` · `"apiV1MiscLinkedinPostReshare500Error1"` [500] `ApiV1MiscLinkedinPostReshare500Error1` · `"apiV1MiscLinkedinPostReshare502Error1"` [502] `ApiV1MiscLinkedinPostReshare502Error1` · `"apiV1MiscLinkedinPostReshare503Error1"` [503] `ApiV1MiscLinkedinPostReshare503Error1` · `"apiV1MiscLinkedinPostReshare504Error1"` [504] `ApiV1MiscLinkedinPostReshare504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscLinkedinResharePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscLinkedinPostReshareRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscLinkedinPostReshareRequest` | `apiV1MiscLinkedinPostReshareRequestSchema` | `src/models/api-v1-misc-linkedin-post-reshare-request.ts` |
| `ApiV1MiscLinkedinPostReshareResponse` | `apiV1MiscLinkedinPostReshareResponseSchema` | `src/models/api-v1-misc-linkedin-post-reshare-response.ts` |
| `ApiV1MiscLinkedinPostReshare400Error1` | `apiV1MiscLinkedinPostReshare400Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare400-error1.ts` |
| `ApiV1MiscLinkedinPostReshare401Error1` | `apiV1MiscLinkedinPostReshare401Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare401-error1.ts` |
| `ApiV1MiscLinkedinPostReshare403Error1` | `apiV1MiscLinkedinPostReshare403Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare403-error1.ts` |
| `ApiV1MiscLinkedinPostReshare404Error1` | `apiV1MiscLinkedinPostReshare404Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare404-error1.ts` |
| `ApiV1MiscLinkedinPostReshare422Error1` | `apiV1MiscLinkedinPostReshare422Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare422-error1.ts` |
| `ApiV1MiscLinkedinPostReshare429Error1` | `apiV1MiscLinkedinPostReshare429Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare429-error1.ts` |
| `ApiV1MiscLinkedinPostReshare500Error1` | `apiV1MiscLinkedinPostReshare500Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare500-error1.ts` |
| `ApiV1MiscLinkedinPostReshare502Error1` | `apiV1MiscLinkedinPostReshare502Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare502-error1.ts` |
| `ApiV1MiscLinkedinPostReshare503Error1` | `apiV1MiscLinkedinPostReshare503Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare503-error1.ts` |
| `ApiV1MiscLinkedinPostReshare504Error1` | `apiV1MiscLinkedinPostReshare504Error1Schema` | `src/models/api-v1-misc-linkedin-post-reshare504-error1.ts` |

### miscMastodonDeleteComment

- **Signature**: `miscMastodonDeleteComment(request?: Misc.MiscMastodonDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscMastodonCommentResponse1, Misc.MiscMastodonDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/mastodon/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscMastodonCommentResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscMastodonDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscMastodonComment400Error1"` [400] `ApiV1MiscMastodonComment400Error1` · `"apiV1MiscMastodonComment401Error1"` [401] `ApiV1MiscMastodonComment401Error1` · `"apiV1MiscMastodonComment403Error1"` [403] `ApiV1MiscMastodonComment403Error1` · `"apiV1MiscMastodonComment404Error1"` [404] `ApiV1MiscMastodonComment404Error1` · `"apiV1MiscMastodonComment429Error1"` [429] `ApiV1MiscMastodonComment429Error1` · `"apiV1MiscMastodonComment500Error1"` [500] `ApiV1MiscMastodonComment500Error1` · `"apiV1MiscMastodonComment502Error1"` [502] `ApiV1MiscMastodonComment502Error1` · `"apiV1MiscMastodonComment503Error1"` [503] `ApiV1MiscMastodonComment503Error1` · `"apiV1MiscMastodonComment504Error1"` [504] `ApiV1MiscMastodonComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscMastodonDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscMastodonCommentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscMastodonCommentRequest1` | `apiV1MiscMastodonCommentRequest1Schema` | `src/models/api-v1-misc-mastodon-comment-request1.ts` |
| `ApiV1MiscMastodonCommentResponse1` | `apiV1MiscMastodonCommentResponse1Schema` | `src/models/api-v1-misc-mastodon-comment-response1.ts` |
| `ApiV1MiscMastodonComment400Error1` | `apiV1MiscMastodonComment400Error1Schema` | `src/models/api-v1-misc-mastodon-comment400-error1.ts` |
| `ApiV1MiscMastodonComment401Error1` | `apiV1MiscMastodonComment401Error1Schema` | `src/models/api-v1-misc-mastodon-comment401-error1.ts` |
| `ApiV1MiscMastodonComment403Error1` | `apiV1MiscMastodonComment403Error1Schema` | `src/models/api-v1-misc-mastodon-comment403-error1.ts` |
| `ApiV1MiscMastodonComment404Error1` | `apiV1MiscMastodonComment404Error1Schema` | `src/models/api-v1-misc-mastodon-comment404-error1.ts` |
| `ApiV1MiscMastodonComment429Error1` | `apiV1MiscMastodonComment429Error1Schema` | `src/models/api-v1-misc-mastodon-comment429-error1.ts` |
| `ApiV1MiscMastodonComment500Error1` | `apiV1MiscMastodonComment500Error1Schema` | `src/models/api-v1-misc-mastodon-comment500-error1.ts` |
| `ApiV1MiscMastodonComment502Error1` | `apiV1MiscMastodonComment502Error1Schema` | `src/models/api-v1-misc-mastodon-comment502-error1.ts` |
| `ApiV1MiscMastodonComment503Error1` | `apiV1MiscMastodonComment503Error1Schema` | `src/models/api-v1-misc-mastodon-comment503-error1.ts` |
| `ApiV1MiscMastodonComment504Error1` | `apiV1MiscMastodonComment504Error1Schema` | `src/models/api-v1-misc-mastodon-comment504-error1.ts` |

### miscMastodonDeleteStatus

- **Signature**: `miscMastodonDeleteStatus(request?: Misc.MiscMastodonDeleteStatusRequest, options?: RequestOptions): ApiPromise<ApiV1MiscMastodonStatusResponse1, Misc.MiscMastodonDeleteStatusError>`
- **Wire**: `DELETE /api/v1/misc/mastodon/status`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscMastodonStatusResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscMastodonDeleteStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscMastodonStatus400Error1"` [400] `ApiV1MiscMastodonStatus400Error1` · `"apiV1MiscMastodonStatus401Error1"` [401] `ApiV1MiscMastodonStatus401Error1` · `"apiV1MiscMastodonStatus403Error1"` [403] `ApiV1MiscMastodonStatus403Error1` · `"apiV1MiscMastodonStatus404Error1"` [404] `ApiV1MiscMastodonStatus404Error1` · `"apiV1MiscMastodonStatus429Error1"` [429] `ApiV1MiscMastodonStatus429Error1` · `"apiV1MiscMastodonStatus500Error1"` [500] `ApiV1MiscMastodonStatus500Error1` · `"apiV1MiscMastodonStatus502Error1"` [502] `ApiV1MiscMastodonStatus502Error1` · `"apiV1MiscMastodonStatus503Error1"` [503] `ApiV1MiscMastodonStatus503Error1` · `"apiV1MiscMastodonStatus504Error1"` [504] `ApiV1MiscMastodonStatus504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscMastodonDeleteStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscMastodonStatusRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscMastodonStatusRequest1` | `apiV1MiscMastodonStatusRequest1Schema` | `src/models/api-v1-misc-mastodon-status-request1.ts` |
| `ApiV1MiscMastodonStatusResponse1` | `apiV1MiscMastodonStatusResponse1Schema` | `src/models/api-v1-misc-mastodon-status-response1.ts` |
| `ApiV1MiscMastodonStatus400Error1` | `apiV1MiscMastodonStatus400Error1Schema` | `src/models/api-v1-misc-mastodon-status400-error1.ts` |
| `ApiV1MiscMastodonStatus401Error1` | `apiV1MiscMastodonStatus401Error1Schema` | `src/models/api-v1-misc-mastodon-status401-error1.ts` |
| `ApiV1MiscMastodonStatus403Error1` | `apiV1MiscMastodonStatus403Error1Schema` | `src/models/api-v1-misc-mastodon-status403-error1.ts` |
| `ApiV1MiscMastodonStatus404Error1` | `apiV1MiscMastodonStatus404Error1Schema` | `src/models/api-v1-misc-mastodon-status404-error1.ts` |
| `ApiV1MiscMastodonStatus429Error1` | `apiV1MiscMastodonStatus429Error1Schema` | `src/models/api-v1-misc-mastodon-status429-error1.ts` |
| `ApiV1MiscMastodonStatus500Error1` | `apiV1MiscMastodonStatus500Error1Schema` | `src/models/api-v1-misc-mastodon-status500-error1.ts` |
| `ApiV1MiscMastodonStatus502Error1` | `apiV1MiscMastodonStatus502Error1Schema` | `src/models/api-v1-misc-mastodon-status502-error1.ts` |
| `ApiV1MiscMastodonStatus503Error1` | `apiV1MiscMastodonStatus503Error1Schema` | `src/models/api-v1-misc-mastodon-status503-error1.ts` |
| `ApiV1MiscMastodonStatus504Error1` | `apiV1MiscMastodonStatus504Error1Schema` | `src/models/api-v1-misc-mastodon-status504-error1.ts` |

### miscMastodonEditComment

- **Signature**: `miscMastodonEditComment(request?: Misc.MiscMastodonEditCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscMastodonCommentResponse, Misc.MiscMastodonEditCommentError>`
- **Wire**: `PATCH /api/v1/misc/mastodon/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscMastodonCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscMastodonEditCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscMastodonComment400Error1"` [400] `ApiV1MiscMastodonComment400Error1` · `"apiV1MiscMastodonComment401Error1"` [401] `ApiV1MiscMastodonComment401Error1` · `"apiV1MiscMastodonComment403Error1"` [403] `ApiV1MiscMastodonComment403Error1` · `"apiV1MiscMastodonComment404Error1"` [404] `ApiV1MiscMastodonComment404Error1` · `"apiV1MiscMastodonComment429Error1"` [429] `ApiV1MiscMastodonComment429Error1` · `"apiV1MiscMastodonComment500Error1"` [500] `ApiV1MiscMastodonComment500Error1` · `"apiV1MiscMastodonComment502Error1"` [502] `ApiV1MiscMastodonComment502Error1` · `"apiV1MiscMastodonComment503Error1"` [503] `ApiV1MiscMastodonComment503Error1` · `"apiV1MiscMastodonComment504Error1"` [504] `ApiV1MiscMastodonComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscMastodonEditCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscMastodonCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscMastodonCommentRequest` | `apiV1MiscMastodonCommentRequestSchema` | `src/models/api-v1-misc-mastodon-comment-request.ts` |
| `ApiV1MiscMastodonCommentResponse` | `apiV1MiscMastodonCommentResponseSchema` | `src/models/api-v1-misc-mastodon-comment-response.ts` |
| `ApiV1MiscMastodonComment400Error1` | `apiV1MiscMastodonComment400Error1Schema` | `src/models/api-v1-misc-mastodon-comment400-error1.ts` |
| `ApiV1MiscMastodonComment401Error1` | `apiV1MiscMastodonComment401Error1Schema` | `src/models/api-v1-misc-mastodon-comment401-error1.ts` |
| `ApiV1MiscMastodonComment403Error1` | `apiV1MiscMastodonComment403Error1Schema` | `src/models/api-v1-misc-mastodon-comment403-error1.ts` |
| `ApiV1MiscMastodonComment404Error1` | `apiV1MiscMastodonComment404Error1Schema` | `src/models/api-v1-misc-mastodon-comment404-error1.ts` |
| `ApiV1MiscMastodonComment429Error1` | `apiV1MiscMastodonComment429Error1Schema` | `src/models/api-v1-misc-mastodon-comment429-error1.ts` |
| `ApiV1MiscMastodonComment500Error1` | `apiV1MiscMastodonComment500Error1Schema` | `src/models/api-v1-misc-mastodon-comment500-error1.ts` |
| `ApiV1MiscMastodonComment502Error1` | `apiV1MiscMastodonComment502Error1Schema` | `src/models/api-v1-misc-mastodon-comment502-error1.ts` |
| `ApiV1MiscMastodonComment503Error1` | `apiV1MiscMastodonComment503Error1Schema` | `src/models/api-v1-misc-mastodon-comment503-error1.ts` |
| `ApiV1MiscMastodonComment504Error1` | `apiV1MiscMastodonComment504Error1Schema` | `src/models/api-v1-misc-mastodon-comment504-error1.ts` |

### miscMastodonEditStatus

- **Signature**: `miscMastodonEditStatus(request?: Misc.MiscMastodonEditStatusRequest, options?: RequestOptions): ApiPromise<ApiV1MiscMastodonStatusResponse, Misc.MiscMastodonEditStatusError>`
- **Wire**: `PATCH /api/v1/misc/mastodon/status`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscMastodonStatusResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscMastodonEditStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscMastodonStatus400Error1"` [400] `ApiV1MiscMastodonStatus400Error1` · `"apiV1MiscMastodonStatus401Error1"` [401] `ApiV1MiscMastodonStatus401Error1` · `"apiV1MiscMastodonStatus403Error1"` [403] `ApiV1MiscMastodonStatus403Error1` · `"apiV1MiscMastodonStatus404Error1"` [404] `ApiV1MiscMastodonStatus404Error1` · `"apiV1MiscMastodonStatus429Error1"` [429] `ApiV1MiscMastodonStatus429Error1` · `"apiV1MiscMastodonStatus500Error1"` [500] `ApiV1MiscMastodonStatus500Error1` · `"apiV1MiscMastodonStatus502Error1"` [502] `ApiV1MiscMastodonStatus502Error1` · `"apiV1MiscMastodonStatus503Error1"` [503] `ApiV1MiscMastodonStatus503Error1` · `"apiV1MiscMastodonStatus504Error1"` [504] `ApiV1MiscMastodonStatus504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscMastodonEditStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscMastodonStatusRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscMastodonStatusRequest` | `apiV1MiscMastodonStatusRequestSchema` | `src/models/api-v1-misc-mastodon-status-request.ts` |
| `ApiV1MiscMastodonStatusResponse` | `apiV1MiscMastodonStatusResponseSchema` | `src/models/api-v1-misc-mastodon-status-response.ts` |
| `ApiV1MiscMastodonStatus400Error1` | `apiV1MiscMastodonStatus400Error1Schema` | `src/models/api-v1-misc-mastodon-status400-error1.ts` |
| `ApiV1MiscMastodonStatus401Error1` | `apiV1MiscMastodonStatus401Error1Schema` | `src/models/api-v1-misc-mastodon-status401-error1.ts` |
| `ApiV1MiscMastodonStatus403Error1` | `apiV1MiscMastodonStatus403Error1Schema` | `src/models/api-v1-misc-mastodon-status403-error1.ts` |
| `ApiV1MiscMastodonStatus404Error1` | `apiV1MiscMastodonStatus404Error1Schema` | `src/models/api-v1-misc-mastodon-status404-error1.ts` |
| `ApiV1MiscMastodonStatus429Error1` | `apiV1MiscMastodonStatus429Error1Schema` | `src/models/api-v1-misc-mastodon-status429-error1.ts` |
| `ApiV1MiscMastodonStatus500Error1` | `apiV1MiscMastodonStatus500Error1Schema` | `src/models/api-v1-misc-mastodon-status500-error1.ts` |
| `ApiV1MiscMastodonStatus502Error1` | `apiV1MiscMastodonStatus502Error1Schema` | `src/models/api-v1-misc-mastodon-status502-error1.ts` |
| `ApiV1MiscMastodonStatus503Error1` | `apiV1MiscMastodonStatus503Error1Schema` | `src/models/api-v1-misc-mastodon-status503-error1.ts` |
| `ApiV1MiscMastodonStatus504Error1` | `apiV1MiscMastodonStatus504Error1Schema` | `src/models/api-v1-misc-mastodon-status504-error1.ts` |

### miscPinterestDeletePin

- **Signature**: `miscPinterestDeletePin(request?: Misc.MiscPinterestDeletePinRequest, options?: RequestOptions): ApiPromise<ApiV1MiscPinterestPinResponse1, Misc.MiscPinterestDeletePinError>`
- **Wire**: `DELETE /api/v1/misc/pinterest/pin`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscPinterestPinResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscPinterestDeletePinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscPinterestPin400Error1"` [400] `ApiV1MiscPinterestPin400Error1` · `"apiV1MiscPinterestPin401Error1"` [401] `ApiV1MiscPinterestPin401Error1` · `"apiV1MiscPinterestPin403Error1"` [403] `ApiV1MiscPinterestPin403Error1` · `"apiV1MiscPinterestPin404Error1"` [404] `ApiV1MiscPinterestPin404Error1` · `"apiV1MiscPinterestPin429Error1"` [429] `ApiV1MiscPinterestPin429Error1` · `"apiV1MiscPinterestPin500Error1"` [500] `ApiV1MiscPinterestPin500Error1` · `"apiV1MiscPinterestPin502Error1"` [502] `ApiV1MiscPinterestPin502Error1` · `"apiV1MiscPinterestPin503Error1"` [503] `ApiV1MiscPinterestPin503Error1` · `"apiV1MiscPinterestPin504Error1"` [504] `ApiV1MiscPinterestPin504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscPinterestDeletePinRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscPinterestPinRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscPinterestPinRequest1` | `apiV1MiscPinterestPinRequest1Schema` | `src/models/api-v1-misc-pinterest-pin-request1.ts` |
| `ApiV1MiscPinterestPinResponse1` | `apiV1MiscPinterestPinResponse1Schema` | `src/models/api-v1-misc-pinterest-pin-response1.ts` |
| `ApiV1MiscPinterestPin400Error1` | `apiV1MiscPinterestPin400Error1Schema` | `src/models/api-v1-misc-pinterest-pin400-error1.ts` |
| `ApiV1MiscPinterestPin401Error1` | `apiV1MiscPinterestPin401Error1Schema` | `src/models/api-v1-misc-pinterest-pin401-error1.ts` |
| `ApiV1MiscPinterestPin403Error1` | `apiV1MiscPinterestPin403Error1Schema` | `src/models/api-v1-misc-pinterest-pin403-error1.ts` |
| `ApiV1MiscPinterestPin404Error1` | `apiV1MiscPinterestPin404Error1Schema` | `src/models/api-v1-misc-pinterest-pin404-error1.ts` |
| `ApiV1MiscPinterestPin429Error1` | `apiV1MiscPinterestPin429Error1Schema` | `src/models/api-v1-misc-pinterest-pin429-error1.ts` |
| `ApiV1MiscPinterestPin500Error1` | `apiV1MiscPinterestPin500Error1Schema` | `src/models/api-v1-misc-pinterest-pin500-error1.ts` |
| `ApiV1MiscPinterestPin502Error1` | `apiV1MiscPinterestPin502Error1Schema` | `src/models/api-v1-misc-pinterest-pin502-error1.ts` |
| `ApiV1MiscPinterestPin503Error1` | `apiV1MiscPinterestPin503Error1Schema` | `src/models/api-v1-misc-pinterest-pin503-error1.ts` |
| `ApiV1MiscPinterestPin504Error1` | `apiV1MiscPinterestPin504Error1Schema` | `src/models/api-v1-misc-pinterest-pin504-error1.ts` |

### miscPinterestEditPin

- **Signature**: `miscPinterestEditPin(request?: Misc.MiscPinterestEditPinRequest, options?: RequestOptions): ApiPromise<ApiV1MiscPinterestPinResponse, Misc.MiscPinterestEditPinError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PATCH /api/v1/misc/pinterest/pin`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscPinterestPinResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscPinterestEditPinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscPinterestPin400Error1"` [400] `ApiV1MiscPinterestPin400Error1` · `"apiV1MiscPinterestPin401Error1"` [401] `ApiV1MiscPinterestPin401Error1` · `"apiV1MiscPinterestPin403Error1"` [403] `ApiV1MiscPinterestPin403Error1` · `"apiV1MiscPinterestPin404Error1"` [404] `ApiV1MiscPinterestPin404Error1` · `"apiV1MiscPinterestPin429Error1"` [429] `ApiV1MiscPinterestPin429Error1` · `"apiV1MiscPinterestPin500Error1"` [500] `ApiV1MiscPinterestPin500Error1` · `"apiV1MiscPinterestPin502Error1"` [502] `ApiV1MiscPinterestPin502Error1` · `"apiV1MiscPinterestPin503Error1"` [503] `ApiV1MiscPinterestPin503Error1` · `"apiV1MiscPinterestPin504Error1"` [504] `ApiV1MiscPinterestPin504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscPinterestEditPinRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscPinterestPinRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscPinterestPinRequest` | `apiV1MiscPinterestPinRequestSchema` | `src/models/api-v1-misc-pinterest-pin-request.ts` |
| `ApiV1MiscPinterestPinResponse` | `apiV1MiscPinterestPinResponseSchema` | `src/models/api-v1-misc-pinterest-pin-response.ts` |
| `ApiV1MiscPinterestPin400Error1` | `apiV1MiscPinterestPin400Error1Schema` | `src/models/api-v1-misc-pinterest-pin400-error1.ts` |
| `ApiV1MiscPinterestPin401Error1` | `apiV1MiscPinterestPin401Error1Schema` | `src/models/api-v1-misc-pinterest-pin401-error1.ts` |
| `ApiV1MiscPinterestPin403Error1` | `apiV1MiscPinterestPin403Error1Schema` | `src/models/api-v1-misc-pinterest-pin403-error1.ts` |
| `ApiV1MiscPinterestPin404Error1` | `apiV1MiscPinterestPin404Error1Schema` | `src/models/api-v1-misc-pinterest-pin404-error1.ts` |
| `ApiV1MiscPinterestPin429Error1` | `apiV1MiscPinterestPin429Error1Schema` | `src/models/api-v1-misc-pinterest-pin429-error1.ts` |
| `ApiV1MiscPinterestPin500Error1` | `apiV1MiscPinterestPin500Error1Schema` | `src/models/api-v1-misc-pinterest-pin500-error1.ts` |
| `ApiV1MiscPinterestPin502Error1` | `apiV1MiscPinterestPin502Error1Schema` | `src/models/api-v1-misc-pinterest-pin502-error1.ts` |
| `ApiV1MiscPinterestPin503Error1` | `apiV1MiscPinterestPin503Error1Schema` | `src/models/api-v1-misc-pinterest-pin503-error1.ts` |
| `ApiV1MiscPinterestPin504Error1` | `apiV1MiscPinterestPin504Error1Schema` | `src/models/api-v1-misc-pinterest-pin504-error1.ts` |

### miscRedditDeleteComment

- **Signature**: `miscRedditDeleteComment(request?: Misc.MiscRedditDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscRedditCommentResponse1, Misc.MiscRedditDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/reddit/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscRedditCommentResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscRedditDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscRedditComment400Error1"` [400] `ApiV1MiscRedditComment400Error1` · `"apiV1MiscRedditComment401Error1"` [401] `ApiV1MiscRedditComment401Error1` · `"apiV1MiscRedditComment403Error1"` [403] `ApiV1MiscRedditComment403Error1` · `"apiV1MiscRedditComment404Error1"` [404] `ApiV1MiscRedditComment404Error1` · `"apiV1MiscRedditComment429Error1"` [429] `ApiV1MiscRedditComment429Error1` · `"apiV1MiscRedditComment500Error1"` [500] `ApiV1MiscRedditComment500Error1` · `"apiV1MiscRedditComment502Error1"` [502] `ApiV1MiscRedditComment502Error1` · `"apiV1MiscRedditComment503Error1"` [503] `ApiV1MiscRedditComment503Error1` · `"apiV1MiscRedditComment504Error1"` [504] `ApiV1MiscRedditComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscRedditDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscRedditCommentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscRedditCommentRequest1` | `apiV1MiscRedditCommentRequest1Schema` | `src/models/api-v1-misc-reddit-comment-request1.ts` |
| `ApiV1MiscRedditCommentResponse1` | `apiV1MiscRedditCommentResponse1Schema` | `src/models/api-v1-misc-reddit-comment-response1.ts` |
| `ApiV1MiscRedditComment400Error1` | `apiV1MiscRedditComment400Error1Schema` | `src/models/api-v1-misc-reddit-comment400-error1.ts` |
| `ApiV1MiscRedditComment401Error1` | `apiV1MiscRedditComment401Error1Schema` | `src/models/api-v1-misc-reddit-comment401-error1.ts` |
| `ApiV1MiscRedditComment403Error1` | `apiV1MiscRedditComment403Error1Schema` | `src/models/api-v1-misc-reddit-comment403-error1.ts` |
| `ApiV1MiscRedditComment404Error1` | `apiV1MiscRedditComment404Error1Schema` | `src/models/api-v1-misc-reddit-comment404-error1.ts` |
| `ApiV1MiscRedditComment429Error1` | `apiV1MiscRedditComment429Error1Schema` | `src/models/api-v1-misc-reddit-comment429-error1.ts` |
| `ApiV1MiscRedditComment500Error1` | `apiV1MiscRedditComment500Error1Schema` | `src/models/api-v1-misc-reddit-comment500-error1.ts` |
| `ApiV1MiscRedditComment502Error1` | `apiV1MiscRedditComment502Error1Schema` | `src/models/api-v1-misc-reddit-comment502-error1.ts` |
| `ApiV1MiscRedditComment503Error1` | `apiV1MiscRedditComment503Error1Schema` | `src/models/api-v1-misc-reddit-comment503-error1.ts` |
| `ApiV1MiscRedditComment504Error1` | `apiV1MiscRedditComment504Error1Schema` | `src/models/api-v1-misc-reddit-comment504-error1.ts` |

### miscRedditDeletePost

- **Signature**: `miscRedditDeletePost(request?: Misc.MiscRedditDeletePostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscRedditPostResponse1, Misc.MiscRedditDeletePostError>`
- **Wire**: `DELETE /api/v1/misc/reddit/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscRedditPostResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscRedditDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscRedditPost400Error1"` [400] `ApiV1MiscRedditPost400Error1` · `"apiV1MiscRedditPost401Error1"` [401] `ApiV1MiscRedditPost401Error1` · `"apiV1MiscRedditPost403Error1"` [403] `ApiV1MiscRedditPost403Error1` · `"apiV1MiscRedditPost404Error1"` [404] `ApiV1MiscRedditPost404Error1` · `"apiV1MiscRedditPost429Error1"` [429] `ApiV1MiscRedditPost429Error1` · `"apiV1MiscRedditPost500Error1"` [500] `ApiV1MiscRedditPost500Error1` · `"apiV1MiscRedditPost502Error1"` [502] `ApiV1MiscRedditPost502Error1` · `"apiV1MiscRedditPost503Error1"` [503] `ApiV1MiscRedditPost503Error1` · `"apiV1MiscRedditPost504Error1"` [504] `ApiV1MiscRedditPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscRedditDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscRedditPostRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscRedditPostRequest1` | `apiV1MiscRedditPostRequest1Schema` | `src/models/api-v1-misc-reddit-post-request1.ts` |
| `ApiV1MiscRedditPostResponse1` | `apiV1MiscRedditPostResponse1Schema` | `src/models/api-v1-misc-reddit-post-response1.ts` |
| `ApiV1MiscRedditPost400Error1` | `apiV1MiscRedditPost400Error1Schema` | `src/models/api-v1-misc-reddit-post400-error1.ts` |
| `ApiV1MiscRedditPost401Error1` | `apiV1MiscRedditPost401Error1Schema` | `src/models/api-v1-misc-reddit-post401-error1.ts` |
| `ApiV1MiscRedditPost403Error1` | `apiV1MiscRedditPost403Error1Schema` | `src/models/api-v1-misc-reddit-post403-error1.ts` |
| `ApiV1MiscRedditPost404Error1` | `apiV1MiscRedditPost404Error1Schema` | `src/models/api-v1-misc-reddit-post404-error1.ts` |
| `ApiV1MiscRedditPost429Error1` | `apiV1MiscRedditPost429Error1Schema` | `src/models/api-v1-misc-reddit-post429-error1.ts` |
| `ApiV1MiscRedditPost500Error1` | `apiV1MiscRedditPost500Error1Schema` | `src/models/api-v1-misc-reddit-post500-error1.ts` |
| `ApiV1MiscRedditPost502Error1` | `apiV1MiscRedditPost502Error1Schema` | `src/models/api-v1-misc-reddit-post502-error1.ts` |
| `ApiV1MiscRedditPost503Error1` | `apiV1MiscRedditPost503Error1Schema` | `src/models/api-v1-misc-reddit-post503-error1.ts` |
| `ApiV1MiscRedditPost504Error1` | `apiV1MiscRedditPost504Error1Schema` | `src/models/api-v1-misc-reddit-post504-error1.ts` |

### miscRedditEditComment

- **Signature**: `miscRedditEditComment(request?: Misc.MiscRedditEditCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscRedditCommentResponse, Misc.MiscRedditEditCommentError>`
- **Wire**: `PATCH /api/v1/misc/reddit/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscRedditCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscRedditEditCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscRedditComment400Error1"` [400] `ApiV1MiscRedditComment400Error1` · `"apiV1MiscRedditComment401Error1"` [401] `ApiV1MiscRedditComment401Error1` · `"apiV1MiscRedditComment403Error1"` [403] `ApiV1MiscRedditComment403Error1` · `"apiV1MiscRedditComment404Error1"` [404] `ApiV1MiscRedditComment404Error1` · `"apiV1MiscRedditComment429Error1"` [429] `ApiV1MiscRedditComment429Error1` · `"apiV1MiscRedditComment500Error1"` [500] `ApiV1MiscRedditComment500Error1` · `"apiV1MiscRedditComment502Error1"` [502] `ApiV1MiscRedditComment502Error1` · `"apiV1MiscRedditComment503Error1"` [503] `ApiV1MiscRedditComment503Error1` · `"apiV1MiscRedditComment504Error1"` [504] `ApiV1MiscRedditComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscRedditEditCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscRedditCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscRedditCommentRequest` | `apiV1MiscRedditCommentRequestSchema` | `src/models/api-v1-misc-reddit-comment-request.ts` |
| `ApiV1MiscRedditCommentResponse` | `apiV1MiscRedditCommentResponseSchema` | `src/models/api-v1-misc-reddit-comment-response.ts` |
| `ApiV1MiscRedditComment400Error1` | `apiV1MiscRedditComment400Error1Schema` | `src/models/api-v1-misc-reddit-comment400-error1.ts` |
| `ApiV1MiscRedditComment401Error1` | `apiV1MiscRedditComment401Error1Schema` | `src/models/api-v1-misc-reddit-comment401-error1.ts` |
| `ApiV1MiscRedditComment403Error1` | `apiV1MiscRedditComment403Error1Schema` | `src/models/api-v1-misc-reddit-comment403-error1.ts` |
| `ApiV1MiscRedditComment404Error1` | `apiV1MiscRedditComment404Error1Schema` | `src/models/api-v1-misc-reddit-comment404-error1.ts` |
| `ApiV1MiscRedditComment429Error1` | `apiV1MiscRedditComment429Error1Schema` | `src/models/api-v1-misc-reddit-comment429-error1.ts` |
| `ApiV1MiscRedditComment500Error1` | `apiV1MiscRedditComment500Error1Schema` | `src/models/api-v1-misc-reddit-comment500-error1.ts` |
| `ApiV1MiscRedditComment502Error1` | `apiV1MiscRedditComment502Error1Schema` | `src/models/api-v1-misc-reddit-comment502-error1.ts` |
| `ApiV1MiscRedditComment503Error1` | `apiV1MiscRedditComment503Error1Schema` | `src/models/api-v1-misc-reddit-comment503-error1.ts` |
| `ApiV1MiscRedditComment504Error1` | `apiV1MiscRedditComment504Error1Schema` | `src/models/api-v1-misc-reddit-comment504-error1.ts` |

### miscRedditEditPost

- **Signature**: `miscRedditEditPost(request?: Misc.MiscRedditEditPostRequest, options?: RequestOptions): ApiPromise<ApiV1MiscRedditPostResponse, Misc.MiscRedditEditPostError>`
- **Wire**: `PATCH /api/v1/misc/reddit/post`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscRedditPostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscRedditEditPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscRedditPost400Error1"` [400] `ApiV1MiscRedditPost400Error1` · `"apiV1MiscRedditPost401Error1"` [401] `ApiV1MiscRedditPost401Error1` · `"apiV1MiscRedditPost403Error1"` [403] `ApiV1MiscRedditPost403Error1` · `"apiV1MiscRedditPost404Error1"` [404] `ApiV1MiscRedditPost404Error1` · `"apiV1MiscRedditPost429Error1"` [429] `ApiV1MiscRedditPost429Error1` · `"apiV1MiscRedditPost500Error1"` [500] `ApiV1MiscRedditPost500Error1` · `"apiV1MiscRedditPost502Error1"` [502] `ApiV1MiscRedditPost502Error1` · `"apiV1MiscRedditPost503Error1"` [503] `ApiV1MiscRedditPost503Error1` · `"apiV1MiscRedditPost504Error1"` [504] `ApiV1MiscRedditPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscRedditEditPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscRedditPostRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscRedditPostRequest` | `apiV1MiscRedditPostRequestSchema` | `src/models/api-v1-misc-reddit-post-request.ts` |
| `ApiV1MiscRedditPostResponse` | `apiV1MiscRedditPostResponseSchema` | `src/models/api-v1-misc-reddit-post-response.ts` |
| `ApiV1MiscRedditPost400Error1` | `apiV1MiscRedditPost400Error1Schema` | `src/models/api-v1-misc-reddit-post400-error1.ts` |
| `ApiV1MiscRedditPost401Error1` | `apiV1MiscRedditPost401Error1Schema` | `src/models/api-v1-misc-reddit-post401-error1.ts` |
| `ApiV1MiscRedditPost403Error1` | `apiV1MiscRedditPost403Error1Schema` | `src/models/api-v1-misc-reddit-post403-error1.ts` |
| `ApiV1MiscRedditPost404Error1` | `apiV1MiscRedditPost404Error1Schema` | `src/models/api-v1-misc-reddit-post404-error1.ts` |
| `ApiV1MiscRedditPost429Error1` | `apiV1MiscRedditPost429Error1Schema` | `src/models/api-v1-misc-reddit-post429-error1.ts` |
| `ApiV1MiscRedditPost500Error1` | `apiV1MiscRedditPost500Error1Schema` | `src/models/api-v1-misc-reddit-post500-error1.ts` |
| `ApiV1MiscRedditPost502Error1` | `apiV1MiscRedditPost502Error1Schema` | `src/models/api-v1-misc-reddit-post502-error1.ts` |
| `ApiV1MiscRedditPost503Error1` | `apiV1MiscRedditPost503Error1Schema` | `src/models/api-v1-misc-reddit-post503-error1.ts` |
| `ApiV1MiscRedditPost504Error1` | `apiV1MiscRedditPost504Error1Schema` | `src/models/api-v1-misc-reddit-post504-error1.ts` |

### miscRedditGetPostRequirements

- **Signature**: `miscRedditGetPostRequirements(request: Misc.MiscRedditGetPostRequirementsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscRedditPostRequirementsResponse, Misc.MiscRedditGetPostRequirementsError>`
- **Wire**: `GET /api/v1/misc/reddit/post-requirements`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscRedditPostRequirementsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscRedditGetPostRequirementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscRedditPostRequirements400Error1"` [400] `ApiV1MiscRedditPostRequirements400Error1` · `"apiV1MiscRedditPostRequirements401Error1"` [401] `ApiV1MiscRedditPostRequirements401Error1` · `"apiV1MiscRedditPostRequirements403Error1"` [403] `ApiV1MiscRedditPostRequirements403Error1` · `"apiV1MiscRedditPostRequirements404Error1"` [404] `ApiV1MiscRedditPostRequirements404Error1` · `"apiV1MiscRedditPostRequirements429Error1"` [429] `ApiV1MiscRedditPostRequirements429Error1` · `"apiV1MiscRedditPostRequirements500Error1"` [500] `ApiV1MiscRedditPostRequirements500Error1` · `"apiV1MiscRedditPostRequirements502Error1"` [502] `ApiV1MiscRedditPostRequirements502Error1` · `"apiV1MiscRedditPostRequirements503Error1"` [503] `ApiV1MiscRedditPostRequirements503Error1` · `"apiV1MiscRedditPostRequirements504Error1"` [504] `ApiV1MiscRedditPostRequirements504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscRedditGetPostRequirementsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `subreddit` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscRedditPostRequirementsResponse` | `apiV1MiscRedditPostRequirementsResponseSchema` | `src/models/api-v1-misc-reddit-post-requirements-response.ts` |
| `ApiV1MiscRedditPostRequirements400Error1` | `apiV1MiscRedditPostRequirements400Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements400-error1.ts` |
| `ApiV1MiscRedditPostRequirements401Error1` | `apiV1MiscRedditPostRequirements401Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements401-error1.ts` |
| `ApiV1MiscRedditPostRequirements403Error1` | `apiV1MiscRedditPostRequirements403Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements403-error1.ts` |
| `ApiV1MiscRedditPostRequirements404Error1` | `apiV1MiscRedditPostRequirements404Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements404-error1.ts` |
| `ApiV1MiscRedditPostRequirements429Error1` | `apiV1MiscRedditPostRequirements429Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements429-error1.ts` |
| `ApiV1MiscRedditPostRequirements500Error1` | `apiV1MiscRedditPostRequirements500Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements500-error1.ts` |
| `ApiV1MiscRedditPostRequirements502Error1` | `apiV1MiscRedditPostRequirements502Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements502-error1.ts` |
| `ApiV1MiscRedditPostRequirements503Error1` | `apiV1MiscRedditPostRequirements503Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements503-error1.ts` |
| `ApiV1MiscRedditPostRequirements504Error1` | `apiV1MiscRedditPostRequirements504Error1Schema` | `src/models/api-v1-misc-reddit-post-requirements504-error1.ts` |

### miscRedditGetSubredditFlairs

- **Signature**: `miscRedditGetSubredditFlairs(request: Misc.MiscRedditGetSubredditFlairsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscRedditSubredditFlairsResponse[], Misc.MiscRedditGetSubredditFlairsError>`
- **Wire**: `GET /api/v1/misc/reddit/subreddit-flairs`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscRedditSubredditFlairsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscRedditGetSubredditFlairsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscRedditSubredditFlairs400Error1"` [400] `ApiV1MiscRedditSubredditFlairs400Error1` · `"apiV1MiscRedditSubredditFlairs401Error1"` [401] `ApiV1MiscRedditSubredditFlairs401Error1` · `"apiV1MiscRedditSubredditFlairs403Error1"` [403] `ApiV1MiscRedditSubredditFlairs403Error1` · `"apiV1MiscRedditSubredditFlairs404Error1"` [404] `ApiV1MiscRedditSubredditFlairs404Error1` · `"apiV1MiscRedditSubredditFlairs429Error1"` [429] `ApiV1MiscRedditSubredditFlairs429Error1` · `"apiV1MiscRedditSubredditFlairs500Error1"` [500] `ApiV1MiscRedditSubredditFlairs500Error1` · `"apiV1MiscRedditSubredditFlairs502Error1"` [502] `ApiV1MiscRedditSubredditFlairs502Error1` · `"apiV1MiscRedditSubredditFlairs503Error1"` [503] `ApiV1MiscRedditSubredditFlairs503Error1` · `"apiV1MiscRedditSubredditFlairs504Error1"` [504] `ApiV1MiscRedditSubredditFlairs504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscRedditGetSubredditFlairsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `subreddit` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscRedditSubredditFlairsResponse` | `apiV1MiscRedditSubredditFlairsResponseSchema` | `src/models/api-v1-misc-reddit-subreddit-flairs-response.ts` |
| `ApiV1MiscRedditSubredditFlairs400Error1` | `apiV1MiscRedditSubredditFlairs400Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs400-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs401Error1` | `apiV1MiscRedditSubredditFlairs401Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs401-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs403Error1` | `apiV1MiscRedditSubredditFlairs403Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs403-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs404Error1` | `apiV1MiscRedditSubredditFlairs404Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs404-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs429Error1` | `apiV1MiscRedditSubredditFlairs429Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs429-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs500Error1` | `apiV1MiscRedditSubredditFlairs500Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs500-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs502Error1` | `apiV1MiscRedditSubredditFlairs502Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs502-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs503Error1` | `apiV1MiscRedditSubredditFlairs503Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs503-error1.ts` |
| `ApiV1MiscRedditSubredditFlairs504Error1` | `apiV1MiscRedditSubredditFlairs504Error1Schema` | `src/models/api-v1-misc-reddit-subreddit-flairs504-error1.ts` |

### miscSlackDeleteMessage

- **Signature**: `miscSlackDeleteMessage(request?: Misc.MiscSlackDeleteMessageRequest, options?: RequestOptions): ApiPromise<ApiV1MiscSlackMessageResponse1, Misc.MiscSlackDeleteMessageError>`
- **Wire**: `DELETE /api/v1/misc/slack/message`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscSlackMessageResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscSlackDeleteMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscSlackMessage400Error1"` [400] `ApiV1MiscSlackMessage400Error1` · `"apiV1MiscSlackMessage401Error1"` [401] `ApiV1MiscSlackMessage401Error1` · `"apiV1MiscSlackMessage403Error1"` [403] `ApiV1MiscSlackMessage403Error1` · `"apiV1MiscSlackMessage404Error1"` [404] `ApiV1MiscSlackMessage404Error1` · `"apiV1MiscSlackMessage429Error1"` [429] `ApiV1MiscSlackMessage429Error1` · `"apiV1MiscSlackMessage500Error1"` [500] `ApiV1MiscSlackMessage500Error1` · `"apiV1MiscSlackMessage502Error1"` [502] `ApiV1MiscSlackMessage502Error1` · `"apiV1MiscSlackMessage503Error1"` [503] `ApiV1MiscSlackMessage503Error1` · `"apiV1MiscSlackMessage504Error1"` [504] `ApiV1MiscSlackMessage504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscSlackDeleteMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscSlackMessageRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscSlackMessageRequest1` | `apiV1MiscSlackMessageRequest1Schema` | `src/models/api-v1-misc-slack-message-request1.ts` |
| `ApiV1MiscSlackMessageResponse1` | `apiV1MiscSlackMessageResponse1Schema` | `src/models/api-v1-misc-slack-message-response1.ts` |
| `ApiV1MiscSlackMessage400Error1` | `apiV1MiscSlackMessage400Error1Schema` | `src/models/api-v1-misc-slack-message400-error1.ts` |
| `ApiV1MiscSlackMessage401Error1` | `apiV1MiscSlackMessage401Error1Schema` | `src/models/api-v1-misc-slack-message401-error1.ts` |
| `ApiV1MiscSlackMessage403Error1` | `apiV1MiscSlackMessage403Error1Schema` | `src/models/api-v1-misc-slack-message403-error1.ts` |
| `ApiV1MiscSlackMessage404Error1` | `apiV1MiscSlackMessage404Error1Schema` | `src/models/api-v1-misc-slack-message404-error1.ts` |
| `ApiV1MiscSlackMessage429Error1` | `apiV1MiscSlackMessage429Error1Schema` | `src/models/api-v1-misc-slack-message429-error1.ts` |
| `ApiV1MiscSlackMessage500Error1` | `apiV1MiscSlackMessage500Error1Schema` | `src/models/api-v1-misc-slack-message500-error1.ts` |
| `ApiV1MiscSlackMessage502Error1` | `apiV1MiscSlackMessage502Error1Schema` | `src/models/api-v1-misc-slack-message502-error1.ts` |
| `ApiV1MiscSlackMessage503Error1` | `apiV1MiscSlackMessage503Error1Schema` | `src/models/api-v1-misc-slack-message503-error1.ts` |
| `ApiV1MiscSlackMessage504Error1` | `apiV1MiscSlackMessage504Error1Schema` | `src/models/api-v1-misc-slack-message504-error1.ts` |

### miscSlackEditMessage

- **Signature**: `miscSlackEditMessage(request?: Misc.MiscSlackEditMessageRequest, options?: RequestOptions): ApiPromise<ApiV1MiscSlackMessageResponse, Misc.MiscSlackEditMessageError>`
- **Wire**: `PATCH /api/v1/misc/slack/message`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscSlackMessageResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscSlackEditMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscSlackMessage400Error1"` [400] `ApiV1MiscSlackMessage400Error1` · `"apiV1MiscSlackMessage401Error1"` [401] `ApiV1MiscSlackMessage401Error1` · `"apiV1MiscSlackMessage403Error1"` [403] `ApiV1MiscSlackMessage403Error1` · `"apiV1MiscSlackMessage404Error1"` [404] `ApiV1MiscSlackMessage404Error1` · `"apiV1MiscSlackMessage429Error1"` [429] `ApiV1MiscSlackMessage429Error1` · `"apiV1MiscSlackMessage500Error1"` [500] `ApiV1MiscSlackMessage500Error1` · `"apiV1MiscSlackMessage502Error1"` [502] `ApiV1MiscSlackMessage502Error1` · `"apiV1MiscSlackMessage503Error1"` [503] `ApiV1MiscSlackMessage503Error1` · `"apiV1MiscSlackMessage504Error1"` [504] `ApiV1MiscSlackMessage504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscSlackEditMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscSlackMessageRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscSlackMessageRequest` | `apiV1MiscSlackMessageRequestSchema` | `src/models/api-v1-misc-slack-message-request.ts` |
| `ApiV1MiscSlackMessageResponse` | `apiV1MiscSlackMessageResponseSchema` | `src/models/api-v1-misc-slack-message-response.ts` |
| `ApiV1MiscSlackMessage400Error1` | `apiV1MiscSlackMessage400Error1Schema` | `src/models/api-v1-misc-slack-message400-error1.ts` |
| `ApiV1MiscSlackMessage401Error1` | `apiV1MiscSlackMessage401Error1Schema` | `src/models/api-v1-misc-slack-message401-error1.ts` |
| `ApiV1MiscSlackMessage403Error1` | `apiV1MiscSlackMessage403Error1Schema` | `src/models/api-v1-misc-slack-message403-error1.ts` |
| `ApiV1MiscSlackMessage404Error1` | `apiV1MiscSlackMessage404Error1Schema` | `src/models/api-v1-misc-slack-message404-error1.ts` |
| `ApiV1MiscSlackMessage429Error1` | `apiV1MiscSlackMessage429Error1Schema` | `src/models/api-v1-misc-slack-message429-error1.ts` |
| `ApiV1MiscSlackMessage500Error1` | `apiV1MiscSlackMessage500Error1Schema` | `src/models/api-v1-misc-slack-message500-error1.ts` |
| `ApiV1MiscSlackMessage502Error1` | `apiV1MiscSlackMessage502Error1Schema` | `src/models/api-v1-misc-slack-message502-error1.ts` |
| `ApiV1MiscSlackMessage503Error1` | `apiV1MiscSlackMessage503Error1Schema` | `src/models/api-v1-misc-slack-message503-error1.ts` |
| `ApiV1MiscSlackMessage504Error1` | `apiV1MiscSlackMessage504Error1Schema` | `src/models/api-v1-misc-slack-message504-error1.ts` |

### miscTiktokDeleteComment

- **Signature**: `miscTiktokDeleteComment(request?: Misc.MiscTiktokDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTiktokCommentResponse, Misc.MiscTiktokDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/tiktok/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscTiktokCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTiktokDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTiktokComment400Error1"` [400] `ApiV1MiscTiktokComment400Error1` · `"apiV1MiscTiktokComment401Error1"` [401] `ApiV1MiscTiktokComment401Error1` · `"apiV1MiscTiktokComment403Error1"` [403] `ApiV1MiscTiktokComment403Error1` · `"apiV1MiscTiktokComment404Error1"` [404] `ApiV1MiscTiktokComment404Error1` · `"apiV1MiscTiktokComment429Error1"` [429] `ApiV1MiscTiktokComment429Error1` · `"apiV1MiscTiktokComment500Error1"` [500] `ApiV1MiscTiktokComment500Error1` · `"apiV1MiscTiktokComment502Error1"` [502] `ApiV1MiscTiktokComment502Error1` · `"apiV1MiscTiktokComment503Error1"` [503] `ApiV1MiscTiktokComment503Error1` · `"apiV1MiscTiktokComment504Error1"` [504] `ApiV1MiscTiktokComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTiktokDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscTiktokCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTiktokCommentRequest` | `apiV1MiscTiktokCommentRequestSchema` | `src/models/api-v1-misc-tiktok-comment-request.ts` |
| `ApiV1MiscTiktokCommentResponse` | `apiV1MiscTiktokCommentResponseSchema` | `src/models/api-v1-misc-tiktok-comment-response.ts` |
| `ApiV1MiscTiktokComment400Error1` | `apiV1MiscTiktokComment400Error1Schema` | `src/models/api-v1-misc-tiktok-comment400-error1.ts` |
| `ApiV1MiscTiktokComment401Error1` | `apiV1MiscTiktokComment401Error1Schema` | `src/models/api-v1-misc-tiktok-comment401-error1.ts` |
| `ApiV1MiscTiktokComment403Error1` | `apiV1MiscTiktokComment403Error1Schema` | `src/models/api-v1-misc-tiktok-comment403-error1.ts` |
| `ApiV1MiscTiktokComment404Error1` | `apiV1MiscTiktokComment404Error1Schema` | `src/models/api-v1-misc-tiktok-comment404-error1.ts` |
| `ApiV1MiscTiktokComment429Error1` | `apiV1MiscTiktokComment429Error1Schema` | `src/models/api-v1-misc-tiktok-comment429-error1.ts` |
| `ApiV1MiscTiktokComment500Error1` | `apiV1MiscTiktokComment500Error1Schema` | `src/models/api-v1-misc-tiktok-comment500-error1.ts` |
| `ApiV1MiscTiktokComment502Error1` | `apiV1MiscTiktokComment502Error1Schema` | `src/models/api-v1-misc-tiktok-comment502-error1.ts` |
| `ApiV1MiscTiktokComment503Error1` | `apiV1MiscTiktokComment503Error1Schema` | `src/models/api-v1-misc-tiktok-comment503-error1.ts` |
| `ApiV1MiscTiktokComment504Error1` | `apiV1MiscTiktokComment504Error1Schema` | `src/models/api-v1-misc-tiktok-comment504-error1.ts` |

### miscTiktokGetCommercialMusicTrendingList

- **Signature**: `miscTiktokGetCommercialMusicTrendingList(request: Misc.MiscTiktokGetCommercialMusicTrendingListRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTiktokCmlTrendingListResponse[], Misc.MiscTiktokGetCommercialMusicTrendingListError>`
- **Wire**: `GET /api/v1/misc/tiktok/cml/trending-list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscTiktokCmlTrendingListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTiktokGetCommercialMusicTrendingListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTiktokCmlTrendingList400Error1"` [400] `ApiV1MiscTiktokCmlTrendingList400Error1` · `"apiV1MiscTiktokCmlTrendingList401Error1"` [401] `ApiV1MiscTiktokCmlTrendingList401Error1` · `"apiV1MiscTiktokCmlTrendingList403Error1"` [403] `ApiV1MiscTiktokCmlTrendingList403Error1` · `"apiV1MiscTiktokCmlTrendingList404Error1"` [404] `ApiV1MiscTiktokCmlTrendingList404Error1` · `"apiV1MiscTiktokCmlTrendingList429Error1"` [429] `ApiV1MiscTiktokCmlTrendingList429Error1` · `"apiV1MiscTiktokCmlTrendingList500Error1"` [500] `ApiV1MiscTiktokCmlTrendingList500Error1` · `"apiV1MiscTiktokCmlTrendingList502Error1"` [502] `ApiV1MiscTiktokCmlTrendingList502Error1` · `"apiV1MiscTiktokCmlTrendingList503Error1"` [503] `ApiV1MiscTiktokCmlTrendingList503Error1` · `"apiV1MiscTiktokCmlTrendingList504Error1"` [504] `ApiV1MiscTiktokCmlTrendingList504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTiktokGetCommercialMusicTrendingListRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `genre` | `query` | `Genre` | no | `Genre.Pop` |
| `dateRange` | `query` | `DateRange` | no | `DateRange._7Day` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Genre` | `genreSchema` | `src/models/genre.ts` |
| `DateRange` | `dateRangeSchema` | `src/models/date-range.ts` |
| `ApiV1MiscTiktokCmlTrendingListResponse` | `apiV1MiscTiktokCmlTrendingListResponseSchema` | `src/models/api-v1-misc-tiktok-cml-trending-list-response.ts` |
| `ApiV1MiscTiktokCmlTrendingList400Error1` | `apiV1MiscTiktokCmlTrendingList400Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list400-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList401Error1` | `apiV1MiscTiktokCmlTrendingList401Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list401-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList403Error1` | `apiV1MiscTiktokCmlTrendingList403Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list403-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList404Error1` | `apiV1MiscTiktokCmlTrendingList404Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list404-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList429Error1` | `apiV1MiscTiktokCmlTrendingList429Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list429-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList500Error1` | `apiV1MiscTiktokCmlTrendingList500Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list500-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList502Error1` | `apiV1MiscTiktokCmlTrendingList502Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list502-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList503Error1` | `apiV1MiscTiktokCmlTrendingList503Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list503-error1.ts` |
| `ApiV1MiscTiktokCmlTrendingList504Error1` | `apiV1MiscTiktokCmlTrendingList504Error1Schema` | `src/models/api-v1-misc-tiktok-cml-trending-list504-error1.ts` |

### miscTiktokGetPostSettings

- **Signature**: `miscTiktokGetPostSettings(request: Misc.MiscTiktokGetPostSettingsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTiktokPostSettingsResponse, Misc.MiscTiktokGetPostSettingsError>`
- **Wire**: `GET /api/v1/misc/tiktok/post-settings`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscTiktokPostSettingsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTiktokGetPostSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTiktokPostSettings400Error1"` [400] `ApiV1MiscTiktokPostSettings400Error1` · `"apiV1MiscTiktokPostSettings401Error1"` [401] `ApiV1MiscTiktokPostSettings401Error1` · `"apiV1MiscTiktokPostSettings403Error1"` [403] `ApiV1MiscTiktokPostSettings403Error1` · `"apiV1MiscTiktokPostSettings404Error1"` [404] `ApiV1MiscTiktokPostSettings404Error1` · `"apiV1MiscTiktokPostSettings429Error1"` [429] `ApiV1MiscTiktokPostSettings429Error1` · `"apiV1MiscTiktokPostSettings500Error1"` [500] `ApiV1MiscTiktokPostSettings500Error1` · `"apiV1MiscTiktokPostSettings502Error1"` [502] `ApiV1MiscTiktokPostSettings502Error1` · `"apiV1MiscTiktokPostSettings503Error1"` [503] `ApiV1MiscTiktokPostSettings503Error1` · `"apiV1MiscTiktokPostSettings504Error1"` [504] `ApiV1MiscTiktokPostSettings504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTiktokGetPostSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTiktokPostSettingsResponse` | `apiV1MiscTiktokPostSettingsResponseSchema` | `src/models/api-v1-misc-tiktok-post-settings-response.ts` |
| `ApiV1MiscTiktokPostSettings400Error1` | `apiV1MiscTiktokPostSettings400Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings400-error1.ts` |
| `ApiV1MiscTiktokPostSettings401Error1` | `apiV1MiscTiktokPostSettings401Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings401-error1.ts` |
| `ApiV1MiscTiktokPostSettings403Error1` | `apiV1MiscTiktokPostSettings403Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings403-error1.ts` |
| `ApiV1MiscTiktokPostSettings404Error1` | `apiV1MiscTiktokPostSettings404Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings404-error1.ts` |
| `ApiV1MiscTiktokPostSettings429Error1` | `apiV1MiscTiktokPostSettings429Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings429-error1.ts` |
| `ApiV1MiscTiktokPostSettings500Error1` | `apiV1MiscTiktokPostSettings500Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings500-error1.ts` |
| `ApiV1MiscTiktokPostSettings502Error1` | `apiV1MiscTiktokPostSettings502Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings502-error1.ts` |
| `ApiV1MiscTiktokPostSettings503Error1` | `apiV1MiscTiktokPostSettings503Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings503-error1.ts` |
| `ApiV1MiscTiktokPostSettings504Error1` | `apiV1MiscTiktokPostSettings504Error1Schema` | `src/models/api-v1-misc-tiktok-post-settings504-error1.ts` |

### miscTiktokSearchLocations

- **Signature**: `miscTiktokSearchLocations(request: Misc.MiscTiktokSearchLocationsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTiktokLocationsResponse, Misc.MiscTiktokSearchLocationsError>`
- **Wire**: `GET /api/v1/misc/tiktok/locations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscTiktokLocationsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTiktokSearchLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTiktokLocations400Error1"` [400] `ApiV1MiscTiktokLocations400Error1` · `"apiV1MiscTiktokLocations401Error1"` [401] `ApiV1MiscTiktokLocations401Error1` · `"apiV1MiscTiktokLocations403Error1"` [403] `ApiV1MiscTiktokLocations403Error1` · `"apiV1MiscTiktokLocations404Error1"` [404] `ApiV1MiscTiktokLocations404Error1` · `"apiV1MiscTiktokLocations429Error1"` [429] `ApiV1MiscTiktokLocations429Error1` · `"apiV1MiscTiktokLocations500Error1"` [500] `ApiV1MiscTiktokLocations500Error1` · `"apiV1MiscTiktokLocations502Error1"` [502] `ApiV1MiscTiktokLocations502Error1` · `"apiV1MiscTiktokLocations503Error1"` [503] `ApiV1MiscTiktokLocations503Error1` · `"apiV1MiscTiktokLocations504Error1"` [504] `ApiV1MiscTiktokLocations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTiktokSearchLocationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `q` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTiktokLocationsResponse` | `apiV1MiscTiktokLocationsResponseSchema` | `src/models/api-v1-misc-tiktok-locations-response.ts` |
| `ApiV1MiscTiktokLocations400Error1` | `apiV1MiscTiktokLocations400Error1Schema` | `src/models/api-v1-misc-tiktok-locations400-error1.ts` |
| `ApiV1MiscTiktokLocations401Error1` | `apiV1MiscTiktokLocations401Error1Schema` | `src/models/api-v1-misc-tiktok-locations401-error1.ts` |
| `ApiV1MiscTiktokLocations403Error1` | `apiV1MiscTiktokLocations403Error1Schema` | `src/models/api-v1-misc-tiktok-locations403-error1.ts` |
| `ApiV1MiscTiktokLocations404Error1` | `apiV1MiscTiktokLocations404Error1Schema` | `src/models/api-v1-misc-tiktok-locations404-error1.ts` |
| `ApiV1MiscTiktokLocations429Error1` | `apiV1MiscTiktokLocations429Error1Schema` | `src/models/api-v1-misc-tiktok-locations429-error1.ts` |
| `ApiV1MiscTiktokLocations500Error1` | `apiV1MiscTiktokLocations500Error1Schema` | `src/models/api-v1-misc-tiktok-locations500-error1.ts` |
| `ApiV1MiscTiktokLocations502Error1` | `apiV1MiscTiktokLocations502Error1Schema` | `src/models/api-v1-misc-tiktok-locations502-error1.ts` |
| `ApiV1MiscTiktokLocations503Error1` | `apiV1MiscTiktokLocations503Error1Schema` | `src/models/api-v1-misc-tiktok-locations503-error1.ts` |
| `ApiV1MiscTiktokLocations504Error1` | `apiV1MiscTiktokLocations504Error1Schema` | `src/models/api-v1-misc-tiktok-locations504-error1.ts` |

### miscTwitterDeleteComment

- **Signature**: `miscTwitterDeleteComment(request?: Misc.MiscTwitterDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTwitterCommentResponse, Misc.MiscTwitterDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/twitter/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscTwitterCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTwitterDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTwitterComment400Error1"` [400] `ApiV1MiscTwitterComment400Error1` · `"apiV1MiscTwitterComment401Error1"` [401] `ApiV1MiscTwitterComment401Error1` · `"apiV1MiscTwitterComment403Error1"` [403] `ApiV1MiscTwitterComment403Error1` · `"apiV1MiscTwitterComment404Error1"` [404] `ApiV1MiscTwitterComment404Error1` · `"apiV1MiscTwitterComment429Error1"` [429] `ApiV1MiscTwitterComment429Error1` · `"apiV1MiscTwitterComment500Error1"` [500] `ApiV1MiscTwitterComment500Error1` · `"apiV1MiscTwitterComment502Error1"` [502] `ApiV1MiscTwitterComment502Error1` · `"apiV1MiscTwitterComment503Error1"` [503] `ApiV1MiscTwitterComment503Error1` · `"apiV1MiscTwitterComment504Error1"` [504] `ApiV1MiscTwitterComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTwitterDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscTwitterCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTwitterCommentRequest` | `apiV1MiscTwitterCommentRequestSchema` | `src/models/api-v1-misc-twitter-comment-request.ts` |
| `ApiV1MiscTwitterCommentResponse` | `apiV1MiscTwitterCommentResponseSchema` | `src/models/api-v1-misc-twitter-comment-response.ts` |
| `ApiV1MiscTwitterComment400Error1` | `apiV1MiscTwitterComment400Error1Schema` | `src/models/api-v1-misc-twitter-comment400-error1.ts` |
| `ApiV1MiscTwitterComment401Error1` | `apiV1MiscTwitterComment401Error1Schema` | `src/models/api-v1-misc-twitter-comment401-error1.ts` |
| `ApiV1MiscTwitterComment403Error1` | `apiV1MiscTwitterComment403Error1Schema` | `src/models/api-v1-misc-twitter-comment403-error1.ts` |
| `ApiV1MiscTwitterComment404Error1` | `apiV1MiscTwitterComment404Error1Schema` | `src/models/api-v1-misc-twitter-comment404-error1.ts` |
| `ApiV1MiscTwitterComment429Error1` | `apiV1MiscTwitterComment429Error1Schema` | `src/models/api-v1-misc-twitter-comment429-error1.ts` |
| `ApiV1MiscTwitterComment500Error1` | `apiV1MiscTwitterComment500Error1Schema` | `src/models/api-v1-misc-twitter-comment500-error1.ts` |
| `ApiV1MiscTwitterComment502Error1` | `apiV1MiscTwitterComment502Error1Schema` | `src/models/api-v1-misc-twitter-comment502-error1.ts` |
| `ApiV1MiscTwitterComment503Error1` | `apiV1MiscTwitterComment503Error1Schema` | `src/models/api-v1-misc-twitter-comment503-error1.ts` |
| `ApiV1MiscTwitterComment504Error1` | `apiV1MiscTwitterComment504Error1Schema` | `src/models/api-v1-misc-twitter-comment504-error1.ts` |

### miscTwitterDeleteTweet

- **Signature**: `miscTwitterDeleteTweet(request?: Misc.MiscTwitterDeleteTweetRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTwitterTweetResponse, Misc.MiscTwitterDeleteTweetError>`
- **Wire**: `DELETE /api/v1/misc/twitter/tweet`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscTwitterTweetResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTwitterDeleteTweetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTwitterTweet400Error1"` [400] `ApiV1MiscTwitterTweet400Error1` · `"apiV1MiscTwitterTweet401Error1"` [401] `ApiV1MiscTwitterTweet401Error1` · `"apiV1MiscTwitterTweet403Error1"` [403] `ApiV1MiscTwitterTweet403Error1` · `"apiV1MiscTwitterTweet404Error1"` [404] `ApiV1MiscTwitterTweet404Error1` · `"apiV1MiscTwitterTweet429Error1"` [429] `ApiV1MiscTwitterTweet429Error1` · `"apiV1MiscTwitterTweet500Error1"` [500] `ApiV1MiscTwitterTweet500Error1` · `"apiV1MiscTwitterTweet502Error1"` [502] `ApiV1MiscTwitterTweet502Error1` · `"apiV1MiscTwitterTweet503Error1"` [503] `ApiV1MiscTwitterTweet503Error1` · `"apiV1MiscTwitterTweet504Error1"` [504] `ApiV1MiscTwitterTweet504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTwitterDeleteTweetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscTwitterTweetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTwitterTweetRequest` | `apiV1MiscTwitterTweetRequestSchema` | `src/models/api-v1-misc-twitter-tweet-request.ts` |
| `ApiV1MiscTwitterTweetResponse` | `apiV1MiscTwitterTweetResponseSchema` | `src/models/api-v1-misc-twitter-tweet-response.ts` |
| `ApiV1MiscTwitterTweet400Error1` | `apiV1MiscTwitterTweet400Error1Schema` | `src/models/api-v1-misc-twitter-tweet400-error1.ts` |
| `ApiV1MiscTwitterTweet401Error1` | `apiV1MiscTwitterTweet401Error1Schema` | `src/models/api-v1-misc-twitter-tweet401-error1.ts` |
| `ApiV1MiscTwitterTweet403Error1` | `apiV1MiscTwitterTweet403Error1Schema` | `src/models/api-v1-misc-twitter-tweet403-error1.ts` |
| `ApiV1MiscTwitterTweet404Error1` | `apiV1MiscTwitterTweet404Error1Schema` | `src/models/api-v1-misc-twitter-tweet404-error1.ts` |
| `ApiV1MiscTwitterTweet429Error1` | `apiV1MiscTwitterTweet429Error1Schema` | `src/models/api-v1-misc-twitter-tweet429-error1.ts` |
| `ApiV1MiscTwitterTweet500Error1` | `apiV1MiscTwitterTweet500Error1Schema` | `src/models/api-v1-misc-twitter-tweet500-error1.ts` |
| `ApiV1MiscTwitterTweet502Error1` | `apiV1MiscTwitterTweet502Error1Schema` | `src/models/api-v1-misc-twitter-tweet502-error1.ts` |
| `ApiV1MiscTwitterTweet503Error1` | `apiV1MiscTwitterTweet503Error1Schema` | `src/models/api-v1-misc-twitter-tweet503-error1.ts` |
| `ApiV1MiscTwitterTweet504Error1` | `apiV1MiscTwitterTweet504Error1Schema` | `src/models/api-v1-misc-twitter-tweet504-error1.ts` |

### miscTwitterRetweet

- **Signature**: `miscTwitterRetweet(request?: Misc.MiscTwitterRetweetRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterRetweetError>`
- **Wire**: `POST /api/v1/misc/twitter/retweet`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscTwitterRetweetResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTwitterRetweetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTwitterRetweet400Error1"` [400] `ApiV1MiscTwitterRetweet400Error1` · `"apiV1MiscTwitterRetweet401Error1"` [401] `ApiV1MiscTwitterRetweet401Error1` · `"apiV1MiscTwitterRetweet403Error1"` [403] `ApiV1MiscTwitterRetweet403Error1` · `"apiV1MiscTwitterRetweet404Error1"` [404] `ApiV1MiscTwitterRetweet404Error1` · `"apiV1MiscTwitterRetweet429Error1"` [429] `ApiV1MiscTwitterRetweet429Error1` · `"apiV1MiscTwitterRetweet500Error1"` [500] `ApiV1MiscTwitterRetweet500Error1` · `"apiV1MiscTwitterRetweet502Error1"` [502] `ApiV1MiscTwitterRetweet502Error1` · `"apiV1MiscTwitterRetweet503Error1"` [503] `ApiV1MiscTwitterRetweet503Error1` · `"apiV1MiscTwitterRetweet504Error1"` [504] `ApiV1MiscTwitterRetweet504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTwitterRetweetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscTwitterRetweetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTwitterRetweetRequest` | `apiV1MiscTwitterRetweetRequestSchema` | `src/models/api-v1-misc-twitter-retweet-request.ts` |
| `ApiV1MiscTwitterRetweetResponse` | `apiV1MiscTwitterRetweetResponseSchema` | `src/models/api-v1-misc-twitter-retweet-response.ts` |
| `ApiV1MiscTwitterRetweet400Error1` | `apiV1MiscTwitterRetweet400Error1Schema` | `src/models/api-v1-misc-twitter-retweet400-error1.ts` |
| `ApiV1MiscTwitterRetweet401Error1` | `apiV1MiscTwitterRetweet401Error1Schema` | `src/models/api-v1-misc-twitter-retweet401-error1.ts` |
| `ApiV1MiscTwitterRetweet403Error1` | `apiV1MiscTwitterRetweet403Error1Schema` | `src/models/api-v1-misc-twitter-retweet403-error1.ts` |
| `ApiV1MiscTwitterRetweet404Error1` | `apiV1MiscTwitterRetweet404Error1Schema` | `src/models/api-v1-misc-twitter-retweet404-error1.ts` |
| `ApiV1MiscTwitterRetweet429Error1` | `apiV1MiscTwitterRetweet429Error1Schema` | `src/models/api-v1-misc-twitter-retweet429-error1.ts` |
| `ApiV1MiscTwitterRetweet500Error1` | `apiV1MiscTwitterRetweet500Error1Schema` | `src/models/api-v1-misc-twitter-retweet500-error1.ts` |
| `ApiV1MiscTwitterRetweet502Error1` | `apiV1MiscTwitterRetweet502Error1Schema` | `src/models/api-v1-misc-twitter-retweet502-error1.ts` |
| `ApiV1MiscTwitterRetweet503Error1` | `apiV1MiscTwitterRetweet503Error1Schema` | `src/models/api-v1-misc-twitter-retweet503-error1.ts` |
| `ApiV1MiscTwitterRetweet504Error1` | `apiV1MiscTwitterRetweet504Error1Schema` | `src/models/api-v1-misc-twitter-retweet504-error1.ts` |

### miscTwitterUnretweet

- **Signature**: `miscTwitterUnretweet(request?: Misc.MiscTwitterUnretweetRequest, options?: RequestOptions): ApiPromise<ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterUnretweetError>`
- **Wire**: `DELETE /api/v1/misc/twitter/retweet`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscTwitterRetweetResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscTwitterUnretweetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscTwitterRetweet400Error1"` [400] `ApiV1MiscTwitterRetweet400Error1` · `"apiV1MiscTwitterRetweet401Error1"` [401] `ApiV1MiscTwitterRetweet401Error1` · `"apiV1MiscTwitterRetweet403Error1"` [403] `ApiV1MiscTwitterRetweet403Error1` · `"apiV1MiscTwitterRetweet404Error1"` [404] `ApiV1MiscTwitterRetweet404Error1` · `"apiV1MiscTwitterRetweet429Error1"` [429] `ApiV1MiscTwitterRetweet429Error1` · `"apiV1MiscTwitterRetweet500Error1"` [500] `ApiV1MiscTwitterRetweet500Error1` · `"apiV1MiscTwitterRetweet502Error1"` [502] `ApiV1MiscTwitterRetweet502Error1` · `"apiV1MiscTwitterRetweet503Error1"` [503] `ApiV1MiscTwitterRetweet503Error1` · `"apiV1MiscTwitterRetweet504Error1"` [504] `ApiV1MiscTwitterRetweet504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscTwitterUnretweetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscTwitterRetweetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscTwitterRetweetRequest` | `apiV1MiscTwitterRetweetRequestSchema` | `src/models/api-v1-misc-twitter-retweet-request.ts` |
| `ApiV1MiscTwitterRetweetResponse` | `apiV1MiscTwitterRetweetResponseSchema` | `src/models/api-v1-misc-twitter-retweet-response.ts` |
| `ApiV1MiscTwitterRetweet400Error1` | `apiV1MiscTwitterRetweet400Error1Schema` | `src/models/api-v1-misc-twitter-retweet400-error1.ts` |
| `ApiV1MiscTwitterRetweet401Error1` | `apiV1MiscTwitterRetweet401Error1Schema` | `src/models/api-v1-misc-twitter-retweet401-error1.ts` |
| `ApiV1MiscTwitterRetweet403Error1` | `apiV1MiscTwitterRetweet403Error1Schema` | `src/models/api-v1-misc-twitter-retweet403-error1.ts` |
| `ApiV1MiscTwitterRetweet404Error1` | `apiV1MiscTwitterRetweet404Error1Schema` | `src/models/api-v1-misc-twitter-retweet404-error1.ts` |
| `ApiV1MiscTwitterRetweet429Error1` | `apiV1MiscTwitterRetweet429Error1Schema` | `src/models/api-v1-misc-twitter-retweet429-error1.ts` |
| `ApiV1MiscTwitterRetweet500Error1` | `apiV1MiscTwitterRetweet500Error1Schema` | `src/models/api-v1-misc-twitter-retweet500-error1.ts` |
| `ApiV1MiscTwitterRetweet502Error1` | `apiV1MiscTwitterRetweet502Error1Schema` | `src/models/api-v1-misc-twitter-retweet502-error1.ts` |
| `ApiV1MiscTwitterRetweet503Error1` | `apiV1MiscTwitterRetweet503Error1Schema` | `src/models/api-v1-misc-twitter-retweet503-error1.ts` |
| `ApiV1MiscTwitterRetweet504Error1` | `apiV1MiscTwitterRetweet504Error1Schema` | `src/models/api-v1-misc-twitter-retweet504-error1.ts` |

### miscYoutubeAddVideoToPlaylist

- **Signature**: `miscYoutubeAddVideoToPlaylist(request?: Misc.MiscYoutubeAddVideoToPlaylistRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubePlaylistItemsResponse, Misc.MiscYoutubeAddVideoToPlaylistError>`
- **Wire**: `POST /api/v1/misc/youtube/playlist-items`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubePlaylistItemsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeAddVideoToPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylistItems400Error1"` [400] `ApiV1MiscYoutubePlaylistItems400Error1` · `"apiV1MiscYoutubePlaylistItems401Error1"` [401] `ApiV1MiscYoutubePlaylistItems401Error1` · `"apiV1MiscYoutubePlaylistItems403Error1"` [403] `ApiV1MiscYoutubePlaylistItems403Error1` · `"apiV1MiscYoutubePlaylistItems404Error1"` [404] `ApiV1MiscYoutubePlaylistItems404Error1` · `"apiV1MiscYoutubePlaylistItems429Error1"` [429] `ApiV1MiscYoutubePlaylistItems429Error1` · `"apiV1MiscYoutubePlaylistItems500Error1"` [500] `ApiV1MiscYoutubePlaylistItems500Error1` · `"apiV1MiscYoutubePlaylistItems502Error1"` [502] `ApiV1MiscYoutubePlaylistItems502Error1` · `"apiV1MiscYoutubePlaylistItems503Error1"` [503] `ApiV1MiscYoutubePlaylistItems503Error1` · `"apiV1MiscYoutubePlaylistItems504Error1"` [504] `ApiV1MiscYoutubePlaylistItems504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeAddVideoToPlaylistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubePlaylistItemsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylistItemsRequest` | `apiV1MiscYoutubePlaylistItemsRequestSchema` | `src/models/api-v1-misc-youtube-playlist-items-request.ts` |
| `ApiV1MiscYoutubePlaylistItemsResponse` | `apiV1MiscYoutubePlaylistItemsResponseSchema` | `src/models/api-v1-misc-youtube-playlist-items-response.ts` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `apiV1MiscYoutubePlaylistItems400Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items400-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `apiV1MiscYoutubePlaylistItems401Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items401-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `apiV1MiscYoutubePlaylistItems403Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items403-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `apiV1MiscYoutubePlaylistItems404Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items404-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `apiV1MiscYoutubePlaylistItems429Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items429-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `apiV1MiscYoutubePlaylistItems500Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items500-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `apiV1MiscYoutubePlaylistItems502Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items502-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `apiV1MiscYoutubePlaylistItems503Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items503-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `apiV1MiscYoutubePlaylistItems504Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items504-error1.ts` |

### miscYoutubeCreateNewChannelPlaylist

- **Signature**: `miscYoutubeCreateNewChannelPlaylist(request?: Misc.MiscYoutubeCreateNewChannelPlaylistRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeCreateNewChannelPlaylistError>`
- **Wire**: `POST /api/v1/misc/youtube/playlist`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubePlaylistResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeCreateNewChannelPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylist400Error1"` [400] `ApiV1MiscYoutubePlaylist400Error1` · `"apiV1MiscYoutubePlaylist401Error1"` [401] `ApiV1MiscYoutubePlaylist401Error1` · `"apiV1MiscYoutubePlaylist403Error1"` [403] `ApiV1MiscYoutubePlaylist403Error1` · `"apiV1MiscYoutubePlaylist404Error1"` [404] `ApiV1MiscYoutubePlaylist404Error1` · `"apiV1MiscYoutubePlaylist429Error1"` [429] `ApiV1MiscYoutubePlaylist429Error1` · `"apiV1MiscYoutubePlaylist500Error1"` [500] `ApiV1MiscYoutubePlaylist500Error1` · `"apiV1MiscYoutubePlaylist502Error1"` [502] `ApiV1MiscYoutubePlaylist502Error1` · `"apiV1MiscYoutubePlaylist503Error1"` [503] `ApiV1MiscYoutubePlaylist503Error1` · `"apiV1MiscYoutubePlaylist504Error1"` [504] `ApiV1MiscYoutubePlaylist504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeCreateNewChannelPlaylistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubePlaylistRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylistRequest` | `apiV1MiscYoutubePlaylistRequestSchema` | `src/models/api-v1-misc-youtube-playlist-request.ts` |
| `ApiV1MiscYoutubePlaylistResponse1` | `apiV1MiscYoutubePlaylistResponse1Schema` | `src/models/api-v1-misc-youtube-playlist-response1.ts` |
| `ApiV1MiscYoutubePlaylist400Error1` | `apiV1MiscYoutubePlaylist400Error1Schema` | `src/models/api-v1-misc-youtube-playlist400-error1.ts` |
| `ApiV1MiscYoutubePlaylist401Error1` | `apiV1MiscYoutubePlaylist401Error1Schema` | `src/models/api-v1-misc-youtube-playlist401-error1.ts` |
| `ApiV1MiscYoutubePlaylist403Error1` | `apiV1MiscYoutubePlaylist403Error1Schema` | `src/models/api-v1-misc-youtube-playlist403-error1.ts` |
| `ApiV1MiscYoutubePlaylist404Error1` | `apiV1MiscYoutubePlaylist404Error1Schema` | `src/models/api-v1-misc-youtube-playlist404-error1.ts` |
| `ApiV1MiscYoutubePlaylist429Error1` | `apiV1MiscYoutubePlaylist429Error1Schema` | `src/models/api-v1-misc-youtube-playlist429-error1.ts` |
| `ApiV1MiscYoutubePlaylist500Error1` | `apiV1MiscYoutubePlaylist500Error1Schema` | `src/models/api-v1-misc-youtube-playlist500-error1.ts` |
| `ApiV1MiscYoutubePlaylist502Error1` | `apiV1MiscYoutubePlaylist502Error1Schema` | `src/models/api-v1-misc-youtube-playlist502-error1.ts` |
| `ApiV1MiscYoutubePlaylist503Error1` | `apiV1MiscYoutubePlaylist503Error1Schema` | `src/models/api-v1-misc-youtube-playlist503-error1.ts` |
| `ApiV1MiscYoutubePlaylist504Error1` | `apiV1MiscYoutubePlaylist504Error1Schema` | `src/models/api-v1-misc-youtube-playlist504-error1.ts` |

### miscYoutubeDeleteChannelPlaylist

- **Signature**: `miscYoutubeDeleteChannelPlaylist(request: Misc.MiscYoutubeDeleteChannelPlaylistRequest, options?: RequestOptions): ApiPromise<boolean, Misc.MiscYoutubeDeleteChannelPlaylistError>`
- **Wire**: `DELETE /api/v1/misc/youtube/playlist/{playlistId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeDeleteChannelPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylist400Error1"` [400] `ApiV1MiscYoutubePlaylist400Error1` · `"apiV1MiscYoutubePlaylist401Error1"` [401] `ApiV1MiscYoutubePlaylist401Error1` · `"apiV1MiscYoutubePlaylist403Error1"` [403] `ApiV1MiscYoutubePlaylist403Error1` · `"apiV1MiscYoutubePlaylist404Error1"` [404] `ApiV1MiscYoutubePlaylist404Error1` · `"apiV1MiscYoutubePlaylist429Error1"` [429] `ApiV1MiscYoutubePlaylist429Error1` · `"apiV1MiscYoutubePlaylist500Error1"` [500] `ApiV1MiscYoutubePlaylist500Error1` · `"apiV1MiscYoutubePlaylist502Error1"` [502] `ApiV1MiscYoutubePlaylist502Error1` · `"apiV1MiscYoutubePlaylist503Error1"` [503] `ApiV1MiscYoutubePlaylist503Error1` · `"apiV1MiscYoutubePlaylist504Error1"` [504] `ApiV1MiscYoutubePlaylist504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeDeleteChannelPlaylistRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `playlistId` | `path` | `string` | yes |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylist400Error1` | `apiV1MiscYoutubePlaylist400Error1Schema` | `src/models/api-v1-misc-youtube-playlist400-error1.ts` |
| `ApiV1MiscYoutubePlaylist401Error1` | `apiV1MiscYoutubePlaylist401Error1Schema` | `src/models/api-v1-misc-youtube-playlist401-error1.ts` |
| `ApiV1MiscYoutubePlaylist403Error1` | `apiV1MiscYoutubePlaylist403Error1Schema` | `src/models/api-v1-misc-youtube-playlist403-error1.ts` |
| `ApiV1MiscYoutubePlaylist404Error1` | `apiV1MiscYoutubePlaylist404Error1Schema` | `src/models/api-v1-misc-youtube-playlist404-error1.ts` |
| `ApiV1MiscYoutubePlaylist429Error1` | `apiV1MiscYoutubePlaylist429Error1Schema` | `src/models/api-v1-misc-youtube-playlist429-error1.ts` |
| `ApiV1MiscYoutubePlaylist500Error1` | `apiV1MiscYoutubePlaylist500Error1Schema` | `src/models/api-v1-misc-youtube-playlist500-error1.ts` |
| `ApiV1MiscYoutubePlaylist502Error1` | `apiV1MiscYoutubePlaylist502Error1Schema` | `src/models/api-v1-misc-youtube-playlist502-error1.ts` |
| `ApiV1MiscYoutubePlaylist503Error1` | `apiV1MiscYoutubePlaylist503Error1Schema` | `src/models/api-v1-misc-youtube-playlist503-error1.ts` |
| `ApiV1MiscYoutubePlaylist504Error1` | `apiV1MiscYoutubePlaylist504Error1Schema` | `src/models/api-v1-misc-youtube-playlist504-error1.ts` |

### miscYoutubeDeleteComment

- **Signature**: `miscYoutubeDeleteComment(request?: Misc.MiscYoutubeDeleteCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeCommentResponse1, Misc.MiscYoutubeDeleteCommentError>`
- **Wire**: `DELETE /api/v1/misc/youtube/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubeCommentResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeDeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeComment400Error1"` [400] `ApiV1MiscYoutubeComment400Error1` · `"apiV1MiscYoutubeComment401Error1"` [401] `ApiV1MiscYoutubeComment401Error1` · `"apiV1MiscYoutubeComment403Error1"` [403] `ApiV1MiscYoutubeComment403Error1` · `"apiV1MiscYoutubeComment404Error1"` [404] `ApiV1MiscYoutubeComment404Error1` · `"apiV1MiscYoutubeComment429Error1"` [429] `ApiV1MiscYoutubeComment429Error1` · `"apiV1MiscYoutubeComment500Error1"` [500] `ApiV1MiscYoutubeComment500Error1` · `"apiV1MiscYoutubeComment502Error1"` [502] `ApiV1MiscYoutubeComment502Error1` · `"apiV1MiscYoutubeComment503Error1"` [503] `ApiV1MiscYoutubeComment503Error1` · `"apiV1MiscYoutubeComment504Error1"` [504] `ApiV1MiscYoutubeComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeDeleteCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubeCommentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeCommentRequest1` | `apiV1MiscYoutubeCommentRequest1Schema` | `src/models/api-v1-misc-youtube-comment-request1.ts` |
| `ApiV1MiscYoutubeCommentResponse1` | `apiV1MiscYoutubeCommentResponse1Schema` | `src/models/api-v1-misc-youtube-comment-response1.ts` |
| `ApiV1MiscYoutubeComment400Error1` | `apiV1MiscYoutubeComment400Error1Schema` | `src/models/api-v1-misc-youtube-comment400-error1.ts` |
| `ApiV1MiscYoutubeComment401Error1` | `apiV1MiscYoutubeComment401Error1Schema` | `src/models/api-v1-misc-youtube-comment401-error1.ts` |
| `ApiV1MiscYoutubeComment403Error1` | `apiV1MiscYoutubeComment403Error1Schema` | `src/models/api-v1-misc-youtube-comment403-error1.ts` |
| `ApiV1MiscYoutubeComment404Error1` | `apiV1MiscYoutubeComment404Error1Schema` | `src/models/api-v1-misc-youtube-comment404-error1.ts` |
| `ApiV1MiscYoutubeComment429Error1` | `apiV1MiscYoutubeComment429Error1Schema` | `src/models/api-v1-misc-youtube-comment429-error1.ts` |
| `ApiV1MiscYoutubeComment500Error1` | `apiV1MiscYoutubeComment500Error1Schema` | `src/models/api-v1-misc-youtube-comment500-error1.ts` |
| `ApiV1MiscYoutubeComment502Error1` | `apiV1MiscYoutubeComment502Error1Schema` | `src/models/api-v1-misc-youtube-comment502-error1.ts` |
| `ApiV1MiscYoutubeComment503Error1` | `apiV1MiscYoutubeComment503Error1Schema` | `src/models/api-v1-misc-youtube-comment503-error1.ts` |
| `ApiV1MiscYoutubeComment504Error1` | `apiV1MiscYoutubeComment504Error1Schema` | `src/models/api-v1-misc-youtube-comment504-error1.ts` |

### miscYoutubeDeleteVideo

- **Signature**: `miscYoutubeDeleteVideo(request?: Misc.MiscYoutubeDeleteVideoRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeVideoResponse1, Misc.MiscYoutubeDeleteVideoError>`
- **Wire**: `DELETE /api/v1/misc/youtube/video`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubeVideoResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeDeleteVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeVideo400Error1"` [400] `ApiV1MiscYoutubeVideo400Error1` · `"apiV1MiscYoutubeVideo401Error1"` [401] `ApiV1MiscYoutubeVideo401Error1` · `"apiV1MiscYoutubeVideo403Error1"` [403] `ApiV1MiscYoutubeVideo403Error1` · `"apiV1MiscYoutubeVideo404Error1"` [404] `ApiV1MiscYoutubeVideo404Error1` · `"apiV1MiscYoutubeVideo429Error1"` [429] `ApiV1MiscYoutubeVideo429Error1` · `"apiV1MiscYoutubeVideo500Error1"` [500] `ApiV1MiscYoutubeVideo500Error1` · `"apiV1MiscYoutubeVideo502Error1"` [502] `ApiV1MiscYoutubeVideo502Error1` · `"apiV1MiscYoutubeVideo503Error1"` [503] `ApiV1MiscYoutubeVideo503Error1` · `"apiV1MiscYoutubeVideo504Error1"` [504] `ApiV1MiscYoutubeVideo504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeDeleteVideoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubeVideoRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeVideoRequest1` | `apiV1MiscYoutubeVideoRequest1Schema` | `src/models/api-v1-misc-youtube-video-request1.ts` |
| `ApiV1MiscYoutubeVideoResponse1` | `apiV1MiscYoutubeVideoResponse1Schema` | `src/models/api-v1-misc-youtube-video-response1.ts` |
| `ApiV1MiscYoutubeVideo400Error1` | `apiV1MiscYoutubeVideo400Error1Schema` | `src/models/api-v1-misc-youtube-video400-error1.ts` |
| `ApiV1MiscYoutubeVideo401Error1` | `apiV1MiscYoutubeVideo401Error1Schema` | `src/models/api-v1-misc-youtube-video401-error1.ts` |
| `ApiV1MiscYoutubeVideo403Error1` | `apiV1MiscYoutubeVideo403Error1Schema` | `src/models/api-v1-misc-youtube-video403-error1.ts` |
| `ApiV1MiscYoutubeVideo404Error1` | `apiV1MiscYoutubeVideo404Error1Schema` | `src/models/api-v1-misc-youtube-video404-error1.ts` |
| `ApiV1MiscYoutubeVideo429Error1` | `apiV1MiscYoutubeVideo429Error1Schema` | `src/models/api-v1-misc-youtube-video429-error1.ts` |
| `ApiV1MiscYoutubeVideo500Error1` | `apiV1MiscYoutubeVideo500Error1Schema` | `src/models/api-v1-misc-youtube-video500-error1.ts` |
| `ApiV1MiscYoutubeVideo502Error1` | `apiV1MiscYoutubeVideo502Error1Schema` | `src/models/api-v1-misc-youtube-video502-error1.ts` |
| `ApiV1MiscYoutubeVideo503Error1` | `apiV1MiscYoutubeVideo503Error1Schema` | `src/models/api-v1-misc-youtube-video503-error1.ts` |
| `ApiV1MiscYoutubeVideo504Error1` | `apiV1MiscYoutubeVideo504Error1Schema` | `src/models/api-v1-misc-youtube-video504-error1.ts` |

### miscYoutubeDeleteVideoFromPlaylist

- **Signature**: `miscYoutubeDeleteVideoFromPlaylist(request: Misc.MiscYoutubeDeleteVideoFromPlaylistRequest, options?: RequestOptions): ApiPromise<boolean, Misc.MiscYoutubeDeleteVideoFromPlaylistError>`
- **Wire**: `DELETE /api/v1/misc/youtube/playlist-items/{playlistItemId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeDeleteVideoFromPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylistItems400Error1"` [400] `ApiV1MiscYoutubePlaylistItems400Error1` · `"apiV1MiscYoutubePlaylistItems401Error1"` [401] `ApiV1MiscYoutubePlaylistItems401Error1` · `"apiV1MiscYoutubePlaylistItems403Error1"` [403] `ApiV1MiscYoutubePlaylistItems403Error1` · `"apiV1MiscYoutubePlaylistItems404Error1"` [404] `ApiV1MiscYoutubePlaylistItems404Error1` · `"apiV1MiscYoutubePlaylistItems429Error1"` [429] `ApiV1MiscYoutubePlaylistItems429Error1` · `"apiV1MiscYoutubePlaylistItems500Error1"` [500] `ApiV1MiscYoutubePlaylistItems500Error1` · `"apiV1MiscYoutubePlaylistItems502Error1"` [502] `ApiV1MiscYoutubePlaylistItems502Error1` · `"apiV1MiscYoutubePlaylistItems503Error1"` [503] `ApiV1MiscYoutubePlaylistItems503Error1` · `"apiV1MiscYoutubePlaylistItems504Error1"` [504] `ApiV1MiscYoutubePlaylistItems504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeDeleteVideoFromPlaylistRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `playlistItemId` | `path` | `string` | yes |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `apiV1MiscYoutubePlaylistItems400Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items400-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `apiV1MiscYoutubePlaylistItems401Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items401-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `apiV1MiscYoutubePlaylistItems403Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items403-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `apiV1MiscYoutubePlaylistItems404Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items404-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `apiV1MiscYoutubePlaylistItems429Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items429-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `apiV1MiscYoutubePlaylistItems500Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items500-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `apiV1MiscYoutubePlaylistItems502Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items502-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `apiV1MiscYoutubePlaylistItems503Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items503-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `apiV1MiscYoutubePlaylistItems504Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items504-error1.ts` |

### miscYoutubeEditComment

- **Signature**: `miscYoutubeEditComment(request?: Misc.MiscYoutubeEditCommentRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeCommentResponse, Misc.MiscYoutubeEditCommentError>`
- **Wire**: `PATCH /api/v1/misc/youtube/comment`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubeCommentResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeEditCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeComment400Error1"` [400] `ApiV1MiscYoutubeComment400Error1` · `"apiV1MiscYoutubeComment401Error1"` [401] `ApiV1MiscYoutubeComment401Error1` · `"apiV1MiscYoutubeComment403Error1"` [403] `ApiV1MiscYoutubeComment403Error1` · `"apiV1MiscYoutubeComment404Error1"` [404] `ApiV1MiscYoutubeComment404Error1` · `"apiV1MiscYoutubeComment429Error1"` [429] `ApiV1MiscYoutubeComment429Error1` · `"apiV1MiscYoutubeComment500Error1"` [500] `ApiV1MiscYoutubeComment500Error1` · `"apiV1MiscYoutubeComment502Error1"` [502] `ApiV1MiscYoutubeComment502Error1` · `"apiV1MiscYoutubeComment503Error1"` [503] `ApiV1MiscYoutubeComment503Error1` · `"apiV1MiscYoutubeComment504Error1"` [504] `ApiV1MiscYoutubeComment504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeEditCommentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubeCommentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeCommentRequest` | `apiV1MiscYoutubeCommentRequestSchema` | `src/models/api-v1-misc-youtube-comment-request.ts` |
| `ApiV1MiscYoutubeCommentResponse` | `apiV1MiscYoutubeCommentResponseSchema` | `src/models/api-v1-misc-youtube-comment-response.ts` |
| `ApiV1MiscYoutubeComment400Error1` | `apiV1MiscYoutubeComment400Error1Schema` | `src/models/api-v1-misc-youtube-comment400-error1.ts` |
| `ApiV1MiscYoutubeComment401Error1` | `apiV1MiscYoutubeComment401Error1Schema` | `src/models/api-v1-misc-youtube-comment401-error1.ts` |
| `ApiV1MiscYoutubeComment403Error1` | `apiV1MiscYoutubeComment403Error1Schema` | `src/models/api-v1-misc-youtube-comment403-error1.ts` |
| `ApiV1MiscYoutubeComment404Error1` | `apiV1MiscYoutubeComment404Error1Schema` | `src/models/api-v1-misc-youtube-comment404-error1.ts` |
| `ApiV1MiscYoutubeComment429Error1` | `apiV1MiscYoutubeComment429Error1Schema` | `src/models/api-v1-misc-youtube-comment429-error1.ts` |
| `ApiV1MiscYoutubeComment500Error1` | `apiV1MiscYoutubeComment500Error1Schema` | `src/models/api-v1-misc-youtube-comment500-error1.ts` |
| `ApiV1MiscYoutubeComment502Error1` | `apiV1MiscYoutubeComment502Error1Schema` | `src/models/api-v1-misc-youtube-comment502-error1.ts` |
| `ApiV1MiscYoutubeComment503Error1` | `apiV1MiscYoutubeComment503Error1Schema` | `src/models/api-v1-misc-youtube-comment503-error1.ts` |
| `ApiV1MiscYoutubeComment504Error1` | `apiV1MiscYoutubeComment504Error1Schema` | `src/models/api-v1-misc-youtube-comment504-error1.ts` |

### miscYoutubeEditVideo

- **Signature**: `miscYoutubeEditVideo(request?: Misc.MiscYoutubeEditVideoRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeVideoResponse, Misc.MiscYoutubeEditVideoError>`
- **Wire**: `PATCH /api/v1/misc/youtube/video`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubeVideoResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeEditVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeVideo400Error1"` [400] `ApiV1MiscYoutubeVideo400Error1` · `"apiV1MiscYoutubeVideo401Error1"` [401] `ApiV1MiscYoutubeVideo401Error1` · `"apiV1MiscYoutubeVideo403Error1"` [403] `ApiV1MiscYoutubeVideo403Error1` · `"apiV1MiscYoutubeVideo404Error1"` [404] `ApiV1MiscYoutubeVideo404Error1` · `"apiV1MiscYoutubeVideo429Error1"` [429] `ApiV1MiscYoutubeVideo429Error1` · `"apiV1MiscYoutubeVideo500Error1"` [500] `ApiV1MiscYoutubeVideo500Error1` · `"apiV1MiscYoutubeVideo502Error1"` [502] `ApiV1MiscYoutubeVideo502Error1` · `"apiV1MiscYoutubeVideo503Error1"` [503] `ApiV1MiscYoutubeVideo503Error1` · `"apiV1MiscYoutubeVideo504Error1"` [504] `ApiV1MiscYoutubeVideo504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeEditVideoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubeVideoRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeVideoRequest` | `apiV1MiscYoutubeVideoRequestSchema` | `src/models/api-v1-misc-youtube-video-request.ts` |
| `ApiV1MiscYoutubeVideoResponse` | `apiV1MiscYoutubeVideoResponseSchema` | `src/models/api-v1-misc-youtube-video-response.ts` |
| `ApiV1MiscYoutubeVideo400Error1` | `apiV1MiscYoutubeVideo400Error1Schema` | `src/models/api-v1-misc-youtube-video400-error1.ts` |
| `ApiV1MiscYoutubeVideo401Error1` | `apiV1MiscYoutubeVideo401Error1Schema` | `src/models/api-v1-misc-youtube-video401-error1.ts` |
| `ApiV1MiscYoutubeVideo403Error1` | `apiV1MiscYoutubeVideo403Error1Schema` | `src/models/api-v1-misc-youtube-video403-error1.ts` |
| `ApiV1MiscYoutubeVideo404Error1` | `apiV1MiscYoutubeVideo404Error1Schema` | `src/models/api-v1-misc-youtube-video404-error1.ts` |
| `ApiV1MiscYoutubeVideo429Error1` | `apiV1MiscYoutubeVideo429Error1Schema` | `src/models/api-v1-misc-youtube-video429-error1.ts` |
| `ApiV1MiscYoutubeVideo500Error1` | `apiV1MiscYoutubeVideo500Error1Schema` | `src/models/api-v1-misc-youtube-video500-error1.ts` |
| `ApiV1MiscYoutubeVideo502Error1` | `apiV1MiscYoutubeVideo502Error1Schema` | `src/models/api-v1-misc-youtube-video502-error1.ts` |
| `ApiV1MiscYoutubeVideo503Error1` | `apiV1MiscYoutubeVideo503Error1Schema` | `src/models/api-v1-misc-youtube-video503-error1.ts` |
| `ApiV1MiscYoutubeVideo504Error1` | `apiV1MiscYoutubeVideo504Error1Schema` | `src/models/api-v1-misc-youtube-video504-error1.ts` |

### miscYoutubeGetChannelPlaylist

- **Signature**: `miscYoutubeGetChannelPlaylist(request: Misc.MiscYoutubeGetChannelPlaylistRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubePlaylistResponse, Misc.MiscYoutubeGetChannelPlaylistError>`
- **Wire**: `GET /api/v1/misc/youtube/playlist`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscYoutubePlaylistResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeGetChannelPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylist400Error1"` [400] `ApiV1MiscYoutubePlaylist400Error1` · `"apiV1MiscYoutubePlaylist401Error1"` [401] `ApiV1MiscYoutubePlaylist401Error1` · `"apiV1MiscYoutubePlaylist403Error1"` [403] `ApiV1MiscYoutubePlaylist403Error1` · `"apiV1MiscYoutubePlaylist404Error1"` [404] `ApiV1MiscYoutubePlaylist404Error1` · `"apiV1MiscYoutubePlaylist429Error1"` [429] `ApiV1MiscYoutubePlaylist429Error1` · `"apiV1MiscYoutubePlaylist500Error1"` [500] `ApiV1MiscYoutubePlaylist500Error1` · `"apiV1MiscYoutubePlaylist502Error1"` [502] `ApiV1MiscYoutubePlaylist502Error1` · `"apiV1MiscYoutubePlaylist503Error1"` [503] `ApiV1MiscYoutubePlaylist503Error1` · `"apiV1MiscYoutubePlaylist504Error1"` [504] `ApiV1MiscYoutubePlaylist504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeGetChannelPlaylistRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `maxResults` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylistResponse` | `apiV1MiscYoutubePlaylistResponseSchema` | `src/models/api-v1-misc-youtube-playlist-response.ts` |
| `ApiV1MiscYoutubePlaylist400Error1` | `apiV1MiscYoutubePlaylist400Error1Schema` | `src/models/api-v1-misc-youtube-playlist400-error1.ts` |
| `ApiV1MiscYoutubePlaylist401Error1` | `apiV1MiscYoutubePlaylist401Error1Schema` | `src/models/api-v1-misc-youtube-playlist401-error1.ts` |
| `ApiV1MiscYoutubePlaylist403Error1` | `apiV1MiscYoutubePlaylist403Error1Schema` | `src/models/api-v1-misc-youtube-playlist403-error1.ts` |
| `ApiV1MiscYoutubePlaylist404Error1` | `apiV1MiscYoutubePlaylist404Error1Schema` | `src/models/api-v1-misc-youtube-playlist404-error1.ts` |
| `ApiV1MiscYoutubePlaylist429Error1` | `apiV1MiscYoutubePlaylist429Error1Schema` | `src/models/api-v1-misc-youtube-playlist429-error1.ts` |
| `ApiV1MiscYoutubePlaylist500Error1` | `apiV1MiscYoutubePlaylist500Error1Schema` | `src/models/api-v1-misc-youtube-playlist500-error1.ts` |
| `ApiV1MiscYoutubePlaylist502Error1` | `apiV1MiscYoutubePlaylist502Error1Schema` | `src/models/api-v1-misc-youtube-playlist502-error1.ts` |
| `ApiV1MiscYoutubePlaylist503Error1` | `apiV1MiscYoutubePlaylist503Error1Schema` | `src/models/api-v1-misc-youtube-playlist503-error1.ts` |
| `ApiV1MiscYoutubePlaylist504Error1` | `apiV1MiscYoutubePlaylist504Error1Schema` | `src/models/api-v1-misc-youtube-playlist504-error1.ts` |

### miscYoutubeGetRegions

- **Signature**: `miscYoutubeGetRegions(request: Misc.MiscYoutubeGetRegionsRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeRegionsResponse, Misc.MiscYoutubeGetRegionsError>`
- **Wire**: `GET /api/v1/misc/youtube/regions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscYoutubeRegionsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeGetRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeRegions400Error1"` [400] `ApiV1MiscYoutubeRegions400Error1` · `"apiV1MiscYoutubeRegions401Error1"` [401] `ApiV1MiscYoutubeRegions401Error1` · `"apiV1MiscYoutubeRegions403Error1"` [403] `ApiV1MiscYoutubeRegions403Error1` · `"apiV1MiscYoutubeRegions404Error1"` [404] `ApiV1MiscYoutubeRegions404Error1` · `"apiV1MiscYoutubeRegions429Error1"` [429] `ApiV1MiscYoutubeRegions429Error1` · `"apiV1MiscYoutubeRegions500Error1"` [500] `ApiV1MiscYoutubeRegions500Error1` · `"apiV1MiscYoutubeRegions502Error1"` [502] `ApiV1MiscYoutubeRegions502Error1` · `"apiV1MiscYoutubeRegions503Error1"` [503] `ApiV1MiscYoutubeRegions503Error1` · `"apiV1MiscYoutubeRegions504Error1"` [504] `ApiV1MiscYoutubeRegions504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeGetRegionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeRegionsResponse` | `apiV1MiscYoutubeRegionsResponseSchema` | `src/models/api-v1-misc-youtube-regions-response.ts` |
| `ApiV1MiscYoutubeRegions400Error1` | `apiV1MiscYoutubeRegions400Error1Schema` | `src/models/api-v1-misc-youtube-regions400-error1.ts` |
| `ApiV1MiscYoutubeRegions401Error1` | `apiV1MiscYoutubeRegions401Error1Schema` | `src/models/api-v1-misc-youtube-regions401-error1.ts` |
| `ApiV1MiscYoutubeRegions403Error1` | `apiV1MiscYoutubeRegions403Error1Schema` | `src/models/api-v1-misc-youtube-regions403-error1.ts` |
| `ApiV1MiscYoutubeRegions404Error1` | `apiV1MiscYoutubeRegions404Error1Schema` | `src/models/api-v1-misc-youtube-regions404-error1.ts` |
| `ApiV1MiscYoutubeRegions429Error1` | `apiV1MiscYoutubeRegions429Error1Schema` | `src/models/api-v1-misc-youtube-regions429-error1.ts` |
| `ApiV1MiscYoutubeRegions500Error1` | `apiV1MiscYoutubeRegions500Error1Schema` | `src/models/api-v1-misc-youtube-regions500-error1.ts` |
| `ApiV1MiscYoutubeRegions502Error1` | `apiV1MiscYoutubeRegions502Error1Schema` | `src/models/api-v1-misc-youtube-regions502-error1.ts` |
| `ApiV1MiscYoutubeRegions503Error1` | `apiV1MiscYoutubeRegions503Error1Schema` | `src/models/api-v1-misc-youtube-regions503-error1.ts` |
| `ApiV1MiscYoutubeRegions504Error1` | `apiV1MiscYoutubeRegions504Error1Schema` | `src/models/api-v1-misc-youtube-regions504-error1.ts` |

### miscYoutubeGetVideoCategories

- **Signature**: `miscYoutubeGetVideoCategories(request: Misc.MiscYoutubeGetVideoCategoriesRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeVideoCategoriesResponse, Misc.MiscYoutubeGetVideoCategoriesError>`
- **Wire**: `GET /api/v1/misc/youtube/video-categories`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscYoutubeVideoCategoriesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeGetVideoCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeVideoCategories400Error1"` [400] `ApiV1MiscYoutubeVideoCategories400Error1` · `"apiV1MiscYoutubeVideoCategories401Error1"` [401] `ApiV1MiscYoutubeVideoCategories401Error1` · `"apiV1MiscYoutubeVideoCategories403Error1"` [403] `ApiV1MiscYoutubeVideoCategories403Error1` · `"apiV1MiscYoutubeVideoCategories404Error1"` [404] `ApiV1MiscYoutubeVideoCategories404Error1` · `"apiV1MiscYoutubeVideoCategories429Error1"` [429] `ApiV1MiscYoutubeVideoCategories429Error1` · `"apiV1MiscYoutubeVideoCategories500Error1"` [500] `ApiV1MiscYoutubeVideoCategories500Error1` · `"apiV1MiscYoutubeVideoCategories502Error1"` [502] `ApiV1MiscYoutubeVideoCategories502Error1` · `"apiV1MiscYoutubeVideoCategories503Error1"` [503] `ApiV1MiscYoutubeVideoCategories503Error1` · `"apiV1MiscYoutubeVideoCategories504Error1"` [504] `ApiV1MiscYoutubeVideoCategories504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeGetVideoCategoriesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `regionCode` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeVideoCategoriesResponse` | `apiV1MiscYoutubeVideoCategoriesResponseSchema` | `src/models/api-v1-misc-youtube-video-categories-response.ts` |
| `ApiV1MiscYoutubeVideoCategories400Error1` | `apiV1MiscYoutubeVideoCategories400Error1Schema` | `src/models/api-v1-misc-youtube-video-categories400-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories401Error1` | `apiV1MiscYoutubeVideoCategories401Error1Schema` | `src/models/api-v1-misc-youtube-video-categories401-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories403Error1` | `apiV1MiscYoutubeVideoCategories403Error1Schema` | `src/models/api-v1-misc-youtube-video-categories403-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories404Error1` | `apiV1MiscYoutubeVideoCategories404Error1Schema` | `src/models/api-v1-misc-youtube-video-categories404-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories429Error1` | `apiV1MiscYoutubeVideoCategories429Error1Schema` | `src/models/api-v1-misc-youtube-video-categories429-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories500Error1` | `apiV1MiscYoutubeVideoCategories500Error1Schema` | `src/models/api-v1-misc-youtube-video-categories500-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories502Error1` | `apiV1MiscYoutubeVideoCategories502Error1Schema` | `src/models/api-v1-misc-youtube-video-categories502-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories503Error1` | `apiV1MiscYoutubeVideoCategories503Error1Schema` | `src/models/api-v1-misc-youtube-video-categories503-error1.ts` |
| `ApiV1MiscYoutubeVideoCategories504Error1` | `apiV1MiscYoutubeVideoCategories504Error1Schema` | `src/models/api-v1-misc-youtube-video-categories504-error1.ts` |

### miscYoutubeGetVideosFromPlaylist

- **Signature**: `miscYoutubeGetVideosFromPlaylist(request: Misc.MiscYoutubeGetVideosFromPlaylistRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubePlaylistItemsResponse1, Misc.MiscYoutubeGetVideosFromPlaylistError>`
- **Wire**: `GET /api/v1/misc/youtube/playlist-items`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1MiscYoutubePlaylistItemsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeGetVideosFromPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylistItems400Error1"` [400] `ApiV1MiscYoutubePlaylistItems400Error1` · `"apiV1MiscYoutubePlaylistItems401Error1"` [401] `ApiV1MiscYoutubePlaylistItems401Error1` · `"apiV1MiscYoutubePlaylistItems403Error1"` [403] `ApiV1MiscYoutubePlaylistItems403Error1` · `"apiV1MiscYoutubePlaylistItems404Error1"` [404] `ApiV1MiscYoutubePlaylistItems404Error1` · `"apiV1MiscYoutubePlaylistItems429Error1"` [429] `ApiV1MiscYoutubePlaylistItems429Error1` · `"apiV1MiscYoutubePlaylistItems500Error1"` [500] `ApiV1MiscYoutubePlaylistItems500Error1` · `"apiV1MiscYoutubePlaylistItems502Error1"` [502] `ApiV1MiscYoutubePlaylistItems502Error1` · `"apiV1MiscYoutubePlaylistItems503Error1"` [503] `ApiV1MiscYoutubePlaylistItems503Error1` · `"apiV1MiscYoutubePlaylistItems504Error1"` [504] `ApiV1MiscYoutubePlaylistItems504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeGetVideosFromPlaylistRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `playlistId` | `query` | `string` | yes | — |
| `maxResults` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylistItemsResponse1` | `apiV1MiscYoutubePlaylistItemsResponse1Schema` | `src/models/api-v1-misc-youtube-playlist-items-response1.ts` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `apiV1MiscYoutubePlaylistItems400Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items400-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `apiV1MiscYoutubePlaylistItems401Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items401-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `apiV1MiscYoutubePlaylistItems403Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items403-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `apiV1MiscYoutubePlaylistItems404Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items404-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `apiV1MiscYoutubePlaylistItems429Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items429-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `apiV1MiscYoutubePlaylistItems500Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items500-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `apiV1MiscYoutubePlaylistItems502Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items502-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `apiV1MiscYoutubePlaylistItems503Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items503-error1.ts` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `apiV1MiscYoutubePlaylistItems504Error1Schema` | `src/models/api-v1-misc-youtube-playlist-items504-error1.ts` |

### miscYoutubeSetThumbnail

- **Signature**: `miscYoutubeSetThumbnail(request?: Misc.MiscYoutubeSetThumbnailRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubeThumbnailResponse, Misc.MiscYoutubeSetThumbnailError>`
- **Wire**: `POST /api/v1/misc/youtube/thumbnail`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubeThumbnailResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeSetThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubeThumbnail400Error1"` [400] `ApiV1MiscYoutubeThumbnail400Error1` · `"apiV1MiscYoutubeThumbnail401Error1"` [401] `ApiV1MiscYoutubeThumbnail401Error1` · `"apiV1MiscYoutubeThumbnail403Error1"` [403] `ApiV1MiscYoutubeThumbnail403Error1` · `"apiV1MiscYoutubeThumbnail404Error1"` [404] `ApiV1MiscYoutubeThumbnail404Error1` · `"apiV1MiscYoutubeThumbnail429Error1"` [429] `ApiV1MiscYoutubeThumbnail429Error1` · `"apiV1MiscYoutubeThumbnail500Error1"` [500] `ApiV1MiscYoutubeThumbnail500Error1` · `"apiV1MiscYoutubeThumbnail502Error1"` [502] `ApiV1MiscYoutubeThumbnail502Error1` · `"apiV1MiscYoutubeThumbnail503Error1"` [503] `ApiV1MiscYoutubeThumbnail503Error1` · `"apiV1MiscYoutubeThumbnail504Error1"` [504] `ApiV1MiscYoutubeThumbnail504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeSetThumbnailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubeThumbnailRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubeThumbnailRequest` | `apiV1MiscYoutubeThumbnailRequestSchema` | `src/models/api-v1-misc-youtube-thumbnail-request.ts` |
| `ApiV1MiscYoutubeThumbnailResponse` | `apiV1MiscYoutubeThumbnailResponseSchema` | `src/models/api-v1-misc-youtube-thumbnail-response.ts` |
| `ApiV1MiscYoutubeThumbnail400Error1` | `apiV1MiscYoutubeThumbnail400Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail400-error1.ts` |
| `ApiV1MiscYoutubeThumbnail401Error1` | `apiV1MiscYoutubeThumbnail401Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail401-error1.ts` |
| `ApiV1MiscYoutubeThumbnail403Error1` | `apiV1MiscYoutubeThumbnail403Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail403-error1.ts` |
| `ApiV1MiscYoutubeThumbnail404Error1` | `apiV1MiscYoutubeThumbnail404Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail404-error1.ts` |
| `ApiV1MiscYoutubeThumbnail429Error1` | `apiV1MiscYoutubeThumbnail429Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail429-error1.ts` |
| `ApiV1MiscYoutubeThumbnail500Error1` | `apiV1MiscYoutubeThumbnail500Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail500-error1.ts` |
| `ApiV1MiscYoutubeThumbnail502Error1` | `apiV1MiscYoutubeThumbnail502Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail502-error1.ts` |
| `ApiV1MiscYoutubeThumbnail503Error1` | `apiV1MiscYoutubeThumbnail503Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail503-error1.ts` |
| `ApiV1MiscYoutubeThumbnail504Error1` | `apiV1MiscYoutubeThumbnail504Error1Schema` | `src/models/api-v1-misc-youtube-thumbnail504-error1.ts` |

### miscYoutubeUpdateChannelPlaylist

- **Signature**: `miscYoutubeUpdateChannelPlaylist(request?: Misc.MiscYoutubeUpdateChannelPlaylistRequest, options?: RequestOptions): ApiPromise<ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeUpdateChannelPlaylistError>`
- **Wire**: `PUT /api/v1/misc/youtube/playlist`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1MiscYoutubePlaylistResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Misc.MiscYoutubeUpdateChannelPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1MiscYoutubePlaylist400Error1"` [400] `ApiV1MiscYoutubePlaylist400Error1` · `"apiV1MiscYoutubePlaylist401Error1"` [401] `ApiV1MiscYoutubePlaylist401Error1` · `"apiV1MiscYoutubePlaylist403Error1"` [403] `ApiV1MiscYoutubePlaylist403Error1` · `"apiV1MiscYoutubePlaylist404Error1"` [404] `ApiV1MiscYoutubePlaylist404Error1` · `"apiV1MiscYoutubePlaylist429Error1"` [429] `ApiV1MiscYoutubePlaylist429Error1` · `"apiV1MiscYoutubePlaylist500Error1"` [500] `ApiV1MiscYoutubePlaylist500Error1` · `"apiV1MiscYoutubePlaylist502Error1"` [502] `ApiV1MiscYoutubePlaylist502Error1` · `"apiV1MiscYoutubePlaylist503Error1"` [503] `ApiV1MiscYoutubePlaylist503Error1` · `"apiV1MiscYoutubePlaylist504Error1"` [504] `ApiV1MiscYoutubePlaylist504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Misc.MiscYoutubeUpdateChannelPlaylistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1MiscYoutubePlaylistRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1MiscYoutubePlaylistRequest1` | `apiV1MiscYoutubePlaylistRequest1Schema` | `src/models/api-v1-misc-youtube-playlist-request1.ts` |
| `ApiV1MiscYoutubePlaylistResponse1` | `apiV1MiscYoutubePlaylistResponse1Schema` | `src/models/api-v1-misc-youtube-playlist-response1.ts` |
| `ApiV1MiscYoutubePlaylist400Error1` | `apiV1MiscYoutubePlaylist400Error1Schema` | `src/models/api-v1-misc-youtube-playlist400-error1.ts` |
| `ApiV1MiscYoutubePlaylist401Error1` | `apiV1MiscYoutubePlaylist401Error1Schema` | `src/models/api-v1-misc-youtube-playlist401-error1.ts` |
| `ApiV1MiscYoutubePlaylist403Error1` | `apiV1MiscYoutubePlaylist403Error1Schema` | `src/models/api-v1-misc-youtube-playlist403-error1.ts` |
| `ApiV1MiscYoutubePlaylist404Error1` | `apiV1MiscYoutubePlaylist404Error1Schema` | `src/models/api-v1-misc-youtube-playlist404-error1.ts` |
| `ApiV1MiscYoutubePlaylist429Error1` | `apiV1MiscYoutubePlaylist429Error1Schema` | `src/models/api-v1-misc-youtube-playlist429-error1.ts` |
| `ApiV1MiscYoutubePlaylist500Error1` | `apiV1MiscYoutubePlaylist500Error1Schema` | `src/models/api-v1-misc-youtube-playlist500-error1.ts` |
| `ApiV1MiscYoutubePlaylist502Error1` | `apiV1MiscYoutubePlaylist502Error1Schema` | `src/models/api-v1-misc-youtube-playlist502-error1.ts` |
| `ApiV1MiscYoutubePlaylist503Error1` | `apiV1MiscYoutubePlaylist503Error1Schema` | `src/models/api-v1-misc-youtube-playlist503-error1.ts` |
| `ApiV1MiscYoutubePlaylist504Error1` | `apiV1MiscYoutubePlaylist504Error1Schema` | `src/models/api-v1-misc-youtube-playlist504-error1.ts` |

