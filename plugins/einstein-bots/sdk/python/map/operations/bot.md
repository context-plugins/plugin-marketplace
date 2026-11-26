<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bot — operations

Accessor: `client.bot` · Source: `einstein_bots/apis/bot.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bot.continue_session

- **Route**: `POST /v5.3.0/sessions/{session-id}/messages`
- **Auth**: `chatbot_auth_authorization_code` OR `chatbot_auth_implicit` OR `jwt_bearer`
- **Server**: `default`
- **Signature**: `def continue_session(session_id: str, x_org_id: str, body: ChatMessageEnvelope | ChatMessageEnvelopeDict, *, x_request_id: str | None = None, x_runtime_crc: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `x_org_id`, `body`
- **Params**: `session_id` — path `session-id` · `x_org_id` — header `X-Org-Id` · `x_request_id` — header `X-Request-ID` · `x_runtime_crc` — header `X-Runtime-CRC` · `body` — JSON body
- **Returns (parsed)**: `ChatMessageResponseEnvelope`
- **Returns (raw)**: `ApiResult[ChatMessageResponseEnvelope, ContinueSessionErrorBody]`
- **Error**: `ContinueSessionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 423, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChatMessageEnvelope` | `einstein_bots/models/chat_message_envelope.py` |
| `ChatMessageEnvelopeDict` | `einstein_bots/models/chat_message_envelope.py` |
| `ChatMessageResponseEnvelope` | `einstein_bots/models/chat_message_response_envelope.py` |
| `ContinueSessionErrorBody` | `einstein_bots/errors/continue_session_error.py` |
| `Error` | `einstein_bots/models/error.py` |

### client.bot.end_session

- **Route**: `DELETE /v5.3.0/sessions/{session-id}`
- **Auth**: `chatbot_auth_authorization_code` OR `chatbot_auth_implicit` OR `jwt_bearer`
- **Server**: `default`
- **Signature**: `def end_session(session_id: str, x_org_id: str, x_session_end_reason: EndSessionReasonOrStr, *, x_request_id: str | None = None, x_runtime_crc: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `x_org_id`, `x_session_end_reason`
- **Params**: `session_id` — path `session-id` · `x_org_id` — header `X-Org-Id` · `x_session_end_reason` — header `X-Session-End-Reason` · `x_request_id` — header `X-Request-ID` · `x_runtime_crc` — header `X-Runtime-CRC`
- **Returns (parsed)**: `ChatMessageResponseEnvelope`
- **Returns (raw)**: `ApiResult[ChatMessageResponseEnvelope, EndSessionErrorBody]`
- **Error**: `EndSessionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 423, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EndSessionReasonOrStr` | `einstein_bots/models/enums/end_session_reason.py` |
| `ChatMessageResponseEnvelope` | `einstein_bots/models/chat_message_response_envelope.py` |
| `EndSessionErrorBody` | `einstein_bots/errors/end_session_error.py` |
| `Error` | `einstein_bots/models/error.py` |

### client.bot.start_session

- **Route**: `POST /v5.3.0/bots/{bot-id}/sessions`
- **Auth**: `chatbot_auth_authorization_code` OR `chatbot_auth_implicit` OR `jwt_bearer`
- **Server**: `default`
- **Signature**: `def start_session(bot_id: str, x_org_id: str, body: InitMessageEnvelope | InitMessageEnvelopeDict, *, x_request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `x_org_id`, `body`
- **Params**: `bot_id` — path `bot-id` · `x_org_id` — header `X-Org-Id` · `x_request_id` — header `X-Request-ID` · `body` — JSON body
- **Returns (parsed)**: `ResponseEnvelope`
- **Returns (raw)**: `ApiResult[ResponseEnvelope, StartSessionErrorBody]`
- **Error**: `StartSessionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 423, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InitMessageEnvelope` | `einstein_bots/models/init_message_envelope.py` |
| `InitMessageEnvelopeDict` | `einstein_bots/models/init_message_envelope.py` |
| `ResponseEnvelope` | `einstein_bots/models/response_envelope.py` |
| `StartSessionErrorBody` | `einstein_bots/errors/start_session_error.py` |
| `Error` | `einstein_bots/models/error.py` |

