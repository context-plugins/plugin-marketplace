<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.credentials` · Source: `plinth_us_grants_data/apis/credentials.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.credentials.answer_challenge

- **Route**: `POST /api/v1/agent-key/answer`
- **Signature**: `def answer_challenge(body: AnswerRequest | AnswerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UnlockResult`
- **Returns (raw)**: `ApiResult[UnlockResult, AnswerChallengeErrorBody]`
- **Error**: `AnswerChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnswerRequest` | `plinth_us_grants_data/models/answer_request.py` |
| `AnswerRequestDict` | `plinth_us_grants_data/models/answer_request.py` |
| `UnlockResult` | `plinth_us_grants_data/models/unlock_result.py` |
| `AnswerChallengeErrorBody` | `plinth_us_grants_data/errors/answer_challenge_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

### client.credentials.describe_agent_key

- **Route**: `GET /api/v1/agent-key`
- **Signature**: `def describe_agent_key(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.credentials.describe_challenge

- **Route**: `GET /api/v1/agent-key/challenge`
- **Signature**: `def describe_challenge(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.credentials.mint_agent_key

- **Route**: `POST /api/v1/agent-key`
- **Signature**: `def mint_agent_key(body: AgentKeyRequest | AgentKeyRequestDict, *, signature_agent: str | None = None, signature_input: str | None = None, signature: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `signature_agent` — header `Signature-Agent` · `signature_input` — header `Signature-Input` · `signature` — header `Signature` · `body` — JSON body
- **Returns (parsed)**: `TrialKey`
- **Returns (raw)**: `ApiResult[TrialKey, MintAgentKeyErrorBody]`
- **Error**: `MintAgentKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AgentKeyRequest` | `plinth_us_grants_data/models/agent_key_request.py` |
| `AgentKeyRequestDict` | `plinth_us_grants_data/models/agent_key_request.py` |
| `TrialKey` | `plinth_us_grants_data/models/trial_key.py` |
| `MintAgentKeyErrorBody` | `plinth_us_grants_data/errors/mint_agent_key_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

### client.credentials.take_challenge

- **Route**: `POST /api/v1/agent-key/challenge`
- **Signature**: `def take_challenge(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ChallengeIssued`
- **Returns (raw)**: `ApiResult[ChallengeIssued, TakeChallengeErrorBody]`
- **Error**: `TakeChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChallengeIssued` | `plinth_us_grants_data/models/challenge_issued.py` |
| `TakeChallengeErrorBody` | `plinth_us_grants_data/errors/take_challenge_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

