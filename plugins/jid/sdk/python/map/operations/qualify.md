<!-- Generated file — do not edit; regenerated with the SDK. -->

# Qualify — operations

Accessor: `client.qualify` · Source: `jid/apis/qualify.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.qualify.get_results

- **Route**: `GET /v1/results`
- **Auth**: `bearer`
- **Signature**: `def get_results(ids: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query
- **Returns (parsed)**: `V1ResultsResponse`
- **Returns (raw)**: `ApiResult[V1ResultsResponse, GetResultsErrorBody]`
- **Error**: `GetResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ResultsResponse` | `jid/models/v1_results_response.py` |
| `GetResultsErrorBody` | `jid/errors/get_results_error.py` |
| `Error` | `jid/models/error.py` |

### client.qualify.qualify_counterparty

- **Route**: `POST /v1/qualify`
- **Auth**: `bearer`
- **Signature**: `def qualify_counterparty(body: V1QualifyRequest2 | V1QualifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Qualification`
- **Returns (raw)**: `ApiResult[Qualification, QualifyCounterpartyErrorBody]`
- **Error**: `QualifyCounterpartyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1QualifyRequest2` | `jid/models/unions/v1_qualify_request2.py` |
| `V1QualifyRequest2Dict` | `jid/models/unions/v1_qualify_request2.py` |
| `Qualification` | `jid/models/qualification.py` |
| `QualifyCounterpartyErrorBody` | `jid/errors/qualify_counterparty_error.py` |
| `Error` | `jid/models/error.py` |

### client.qualify.record_outcome

- **Route**: `POST /v1/outcomes`
- **Auth**: `bearer`
- **Signature**: `def record_outcome(body: V1OutcomesRequest | V1OutcomesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1OutcomesResponse`
- **Returns (raw)**: `ApiResult[V1OutcomesResponse, RecordOutcomeErrorBody]`
- **Error**: `RecordOutcomeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 410] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1OutcomesRequest` | `jid/models/v1_outcomes_request.py` |
| `V1OutcomesRequestDict` | `jid/models/v1_outcomes_request.py` |
| `V1OutcomesResponse` | `jid/models/v1_outcomes_response.py` |
| `RecordOutcomeErrorBody` | `jid/errors/record_outcome_error.py` |
| `Error` | `jid/models/error.py` |

