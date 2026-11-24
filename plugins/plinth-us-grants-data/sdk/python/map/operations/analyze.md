<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analyze — operations

Accessor: `client.analyze` · Source: `plinth_us_grants_data/apis/analyze.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analyze.ask_question

- **Route**: `POST /api/analyze`
- **Auth**: `api_key_auth`
- **Signature**: `def ask_question(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AskQuestionErrorBody]`
- **Error**: `AskQuestionErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AskQuestionErrorBody` | `plinth_us_grants_data/errors/ask_question_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

