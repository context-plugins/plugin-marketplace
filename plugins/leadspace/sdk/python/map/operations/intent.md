<!-- Generated file — do not edit; regenerated with the SDK. -->

# Intent — operations

Accessor: `client.intent` · Source: `leadspace/apis/intent.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.intent.score_company_intent

- **Route**: `POST /v1/intent/score/`
- **Auth**: `bearer_auth`
- **Signature**: `def score_company_intent(body: IntentRequest | IntentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IntentAccepted`
- **Returns (raw)**: `ApiResult[IntentAccepted, ScoreCompanyIntentErrorBody]`
- **Error**: `ScoreCompanyIntentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 427, 500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `IntentRequest` | `leadspace/models/intent_request.py` |
| `IntentRequestDict` | `leadspace/models/intent_request.py` |
| `IntentAccepted` | `leadspace/models/intent_accepted.py` |
| `ScoreCompanyIntentErrorBody` | `leadspace/errors/score_company_intent_error.py` |
| `Error` | `leadspace/models/error.py` |

