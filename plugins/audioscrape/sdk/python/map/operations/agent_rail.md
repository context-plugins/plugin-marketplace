<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentRail — operations

Accessor: `client.agent_rail` · Source: `audioscrape/apis/agent_rail.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.agent_rail.buy_credit

- **Route**: `POST /api/agent/v1/credits`
- **Signature**: `def buy_credit(body: BuyCreditRequest | BuyCreditRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BuyCreditErrorBody]`
- **Error**: `BuyCreditErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `BuyCreditRequest` | `audioscrape/models/buy_credit_request.py` |
| `BuyCreditRequestDict` | `audioscrape/models/buy_credit_request.py` |
| `BuyCreditErrorBody` | `audioscrape/errors/buy_credit_error.py` |

### client.agent_rail.credit_balance

- **Route**: `GET /api/agent/v1/credits`
- **Auth**: `bearer_auth`
- **Signature**: `def credit_balance(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreditBalanceErrorBody]`
- **Error**: `CreditBalanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `CreditBalanceErrorBody` | `audioscrape/errors/credit_balance_error.py` |

### client.agent_rail.excerpt

- **Route**: `GET /api/agent/v1/excerpt`
- **Auth**: `bearer_auth`
- **Signature**: `def excerpt(episode_id: int, t: float, *, seconds: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `episode_id`, `t`
- **Params**: `episode_id` — query · `t` — query · `seconds` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ExcerptErrorBody]`
- **Error**: `ExcerptErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ExcerptErrorBody` | `audioscrape/errors/excerpt_error.py` |

### client.agent_rail.manifest

- **Route**: `GET /api/agent/v1`
- **Signature**: `def manifest(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent_rail.overview

- **Route**: `GET /api/agent/v1/overview`
- **Auth**: `bearer_auth`
- **Signature**: `def overview(episode_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `episode_id`
- **Params**: `episode_id` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, OverviewErrorBody]`
- **Error**: `OverviewErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `OverviewErrorBody` | `audioscrape/errors/overview_error.py` |

### client.agent_rail.search

- **Route**: `POST /api/agent/v1/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search(body: AgentSearchRequest | AgentSearchRequestDict, *, scope: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `scope` — query · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchErrorBody]`
- **Error**: `SearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, anything unmapped]

| Type | Source |
| --- | --- |
| `AgentSearchRequest` | `audioscrape/models/agent_search_request.py` |
| `AgentSearchRequestDict` | `audioscrape/models/agent_search_request.py` |
| `SearchErrorBody` | `audioscrape/errors/search_error.py` |

### client.agent_rail.transcribe

- **Route**: `POST /api/agent/v1/transcribe`
- **Auth**: `bearer_auth`
- **Signature**: `def transcribe(body: AgentTranscribeRequest | AgentTranscribeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TranscribeErrorBody]`
- **Error**: `TranscribeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `AgentTranscribeRequest` | `audioscrape/models/agent_transcribe_request.py` |
| `AgentTranscribeRequestDict` | `audioscrape/models/agent_transcribe_request.py` |
| `TranscribeErrorBody` | `audioscrape/errors/transcribe_error.py` |

### client.agent_rail.transcription_status

- **Route**: `GET /api/agent/v1/transcriptions/{job_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def transcription_status(job_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TranscriptionStatusErrorBody]`
- **Error**: `TranscriptionStatusErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `TranscriptionStatusErrorBody` | `audioscrape/errors/transcription_status_error.py` |

