<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.sessions` · Source: `browser_stack/apis/sessions.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.sessions.delete_session

- **Route**: `DELETE /automate/sessions/{sessionId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def delete_session(session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path `sessionId`
- **Returns (parsed)**: `StatusMessage`
- **Returns (raw)**: `ApiResult[StatusMessage, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusMessage` | `browser_stack/models/status_message.py` |

### client.sessions.get_session

- **Route**: `GET /automate/sessions/{sessionId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def get_session(session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path `sessionId`
- **Returns (parsed)**: `Session`
- **Returns (raw)**: `ApiResult[Session, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Session` | `browser_stack/models/session.py` |

### client.sessions.get_session_console_logs

- **Route**: `GET /automate/sessions/{sessionId}/consolelogs`
- **Auth**: `basic_auth`
- **Signature**: `def get_session_console_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path `sessionId`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, RawError]`
- **Error**: `RawError` — **Case B**

### client.sessions.get_session_logs

- **Route**: `GET /automate/sessions/{sessionId}/logs`
- **Auth**: `basic_auth`
- **Signature**: `def get_session_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path `sessionId`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, RawError]`
- **Error**: `RawError` — **Case B**

### client.sessions.get_session_network_logs

- **Route**: `GET /automate/sessions/{sessionId}/networklogs`
- **Auth**: `basic_auth`
- **Signature**: `def get_session_network_logs(session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path `sessionId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.sessions.list_build_sessions

- **Route**: `GET /automate/builds/{buildId}/sessions.json`
- **Auth**: `basic_auth`
- **Signature**: `def list_build_sessions(build_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path `buildId`
- **Returns (parsed)**: `list[Session]`
- **Returns (raw)**: `ApiResult[list[Session], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Session` | `browser_stack/models/session.py` |

### client.sessions.update_session

- **Route**: `PUT /automate/sessions/{sessionId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def update_session(session_id: str, body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `body`
- **Params**: `session_id` — path `sessionId` · `body` — JSON body
- **Returns (parsed)**: `Session`
- **Returns (raw)**: `ApiResult[Session, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AutomateSessionsJsonRequest` | `browser_stack/models/automate_sessions_json_request.py` |
| `AutomateSessionsJsonRequestDict` | `browser_stack/models/automate_sessions_json_request.py` |
| `Session` | `browser_stack/models/session.py` |

