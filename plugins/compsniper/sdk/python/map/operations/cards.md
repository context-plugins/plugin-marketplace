<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.cards` · Source: `comp_sniper/apis/cards.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cards.cancel_card_batch

- **Route**: `DELETE /v1/cards/batch/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def cancel_card_batch(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CancelCardBatchErrorBody]`
- **Error**: `CancelCardBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelCardBatchErrorBody` | `comp_sniper/errors/cancel_card_batch_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.cards.get_card_batch

- **Route**: `GET /v1/cards/batch/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_card_batch(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `CardBatchJob`
- **Returns (raw)**: `ApiResult[CardBatchJob, GetCardBatchErrorBody]`
- **Error**: `GetCardBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardBatchJob` | `comp_sniper/models/card_batch_job.py` |
| `GetCardBatchErrorBody` | `comp_sniper/errors/get_card_batch_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.cards.submit_card_batch

- **Route**: `POST /v1/cards/batch`
- **Auth**: `bearer_auth`
- **Signature**: `def submit_card_batch(body: CardBatchRequest | CardBatchRequestDict, *, x_credit_source: XCreditSourceOrStr | None = None, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_credit_source` — header `X-Credit-Source` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `CardBatchAccepted`
- **Returns (raw)**: `ApiResult[CardBatchAccepted, SubmitCardBatchErrorBody]`
- **Error**: `SubmitCardBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardBatchRequest` | `comp_sniper/models/card_batch_request.py` |
| `CardBatchRequestDict` | `comp_sniper/models/card_batch_request.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `CardBatchAccepted` | `comp_sniper/models/card_batch_accepted.py` |
| `SubmitCardBatchErrorBody` | `comp_sniper/errors/submit_card_batch_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

