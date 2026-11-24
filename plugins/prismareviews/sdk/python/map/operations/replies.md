<!-- Generated file — do not edit; regenerated with the SDK. -->

# Replies — operations

Accessor: `client.replies` · Source: `prisma_reviews/apis/replies.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.replies.delete_reply

- **Route**: `DELETE /v1/reviews/{id}/reply`
- **Auth**: `api_key`
- **Signature**: `def delete_reply(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ReplyDeletion`
- **Returns (raw)**: `ApiResult[ReplyDeletion, DeleteReplyErrorBody]`
- **Error**: `DeleteReplyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReplyDeletion` | `prisma_reviews/models/reply_deletion.py` |
| `DeleteReplyErrorBody` | `prisma_reviews/errors/delete_reply_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.replies.reply_to_review

- **Route**: `POST /v1/reviews/{id}/reply`
- **Auth**: `api_key`
- **Signature**: `def reply_to_review(id_: str, body: V1ReviewsReplyRequest | V1ReviewsReplyRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `Review`
- **Returns (raw)**: `ApiResult[Review, ReplyToReviewErrorBody]`
- **Error**: `ReplyToReviewErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 409, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ReviewsReplyRequest` | `prisma_reviews/models/v1_reviews_reply_request.py` |
| `V1ReviewsReplyRequestDict` | `prisma_reviews/models/v1_reviews_reply_request.py` |
| `Review` | `prisma_reviews/models/review.py` |
| `ReplyToReviewErrorBody` | `prisma_reviews/errors/reply_to_review_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

