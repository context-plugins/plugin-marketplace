<!-- Generated file — do not edit; regenerated with the SDK. -->

# Replies — operations

Accessor: `client.replies` · Source: `src/resources/replies.ts` · 2 operations · Request and error types: namespace `Replies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteReply

- **Signature**: `deleteReply(request: Replies.DeleteReplyRequest, options?: RequestOptions): ApiPromise<ReplyDeletion, Replies.DeleteReplyError>`
- **Wire**: `DELETE /v1/reviews/{id}/reply`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReplyDeletion`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Replies.DeleteReplyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Replies.DeleteReplyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReplyDeletion` | `replyDeletionSchema` | `src/models/reply-deletion.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### replyToReview

- **Signature**: `replyToReview(request: Replies.ReplyToReviewRequest, options?: RequestOptions): ApiPromise<Review, Replies.ReplyToReviewError>`
- **Wire**: `POST /v1/reviews/{id}/reply`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **Returns**: `Review`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Replies.ReplyToReviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"error5"` [422] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Replies.ReplyToReviewRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `V1ReviewsReplyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ReviewsReplyRequest` | `v1ReviewsReplyRequestSchema` | `src/models/v1-reviews-reply-request.ts` |
| `Review` | `reviewSchema` | `src/models/review.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

