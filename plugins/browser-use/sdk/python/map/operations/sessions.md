<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.sessions` · Source: `browser_use/apis/sessions.py` · 14 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sessions.cancel_queued_message_sessions_session_id_queue_message_id_delete

- **Route**: `DELETE /sessions/{session_id}/queue/{message_id}`
- **Auth**: `api_key_header`
- **Signature**: `def cancel_queued_message_sessions_session_id_queue_message_id_delete(session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `message_id`
- **Params**: `session_id` — path · `message_id` — path
- **Returns (parsed)**: `QueuedMessage`
- **Returns (raw)**: `ApiResult[QueuedMessage, CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody]`
- **Error**: `CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `QueuedMessage` | `browser_use/models/queued_message.py` |
| `CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody` | `browser_use/errors/cancel_queued_message_sessions_session_id_queue_message_id_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.create_session_share_sessions_session_id_share_post

- **Route**: `POST /sessions/{session_id}/share`
- **Auth**: `api_key_header`
- **Signature**: `def create_session_share_sessions_session_id_share_post(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `SessionShareInfo`
- **Returns (raw)**: `ApiResult[SessionShareInfo, CreateSessionShareSessionsSessionIdSharePostErrorBody]`
- **Error**: `CreateSessionShareSessionsSessionIdSharePostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionShareInfo` | `browser_use/models/session_share_info.py` |
| `CreateSessionShareSessionsSessionIdSharePostErrorBody` | `browser_use/errors/create_session_share_sessions_session_id_share_post_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.delete_session_sessions_session_id_delete

- **Route**: `DELETE /sessions/{session_id}`
- **Auth**: `api_key_header`
- **Signature**: `def delete_session_sessions_session_id_delete(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSessionSessionsSessionIdDeleteErrorBody]`
- **Error**: `DeleteSessionSessionsSessionIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, 502, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSessionSessionsSessionIdDeleteErrorBody` | `browser_use/errors/delete_session_sessions_session_id_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.get_session_cost_sessions_session_id_cost_get

- **Route**: `GET /sessions/{session_id}/cost`
- **Auth**: `api_key_header`
- **Signature**: `def get_session_cost_sessions_session_id_cost_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `SessionCostResponse`
- **Returns (raw)**: `ApiResult[SessionCostResponse, GetSessionCostSessionsSessionIdCostGetErrorBody]`
- **Error**: `GetSessionCostSessionsSessionIdCostGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionCostResponse` | `browser_use/models/session_cost_response.py` |
| `GetSessionCostSessionsSessionIdCostGetErrorBody` | `browser_use/errors/get_session_cost_sessions_session_id_cost_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.get_session_queue_message_sessions_session_id_queue_message_id_get

- **Route**: `GET /sessions/{session_id}/queue/{message_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_session_queue_message_sessions_session_id_queue_message_id_get(session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `message_id`
- **Params**: `session_id` — path · `message_id` — path
- **Returns (parsed)**: `QueuedMessage`
- **Returns (raw)**: `ApiResult[QueuedMessage, GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody]`
- **Error**: `GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `QueuedMessage` | `browser_use/models/queued_message.py` |
| `GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody` | `browser_use/errors/get_session_queue_message_sessions_session_id_queue_message_id_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.get_session_sessions_session_id_get

- **Route**: `GET /sessions/{session_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_session_sessions_session_id_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `SessionInfo`
- **Returns (raw)**: `ApiResult[SessionInfo, GetSessionSessionsSessionIdGetErrorBody]`
- **Error**: `GetSessionSessionsSessionIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionInfo` | `browser_use/models/session_info.py` |
| `GetSessionSessionsSessionIdGetErrorBody` | `browser_use/errors/get_session_sessions_session_id_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.get_session_share_sessions_session_id_share_get

- **Route**: `GET /sessions/{session_id}/share`
- **Auth**: `api_key_header`
- **Signature**: `def get_session_share_sessions_session_id_share_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `SessionShareInfo`
- **Returns (raw)**: `ApiResult[SessionShareInfo, GetSessionShareSessionsSessionIdShareGetErrorBody]`
- **Error**: `GetSessionShareSessionsSessionIdShareGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionShareInfo` | `browser_use/models/session_share_info.py` |
| `GetSessionShareSessionsSessionIdShareGetErrorBody` | `browser_use/errors/get_session_share_sessions_session_id_share_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.list_session_queue_sessions_session_id_queue_get

- **Route**: `GET /sessions/{session_id}/queue`
- **Auth**: `api_key_header`
- **Signature**: `def list_session_queue_sessions_session_id_queue_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `QueueListResponse`
- **Returns (raw)**: `ApiResult[QueueListResponse, ListSessionQueueSessionsSessionIdQueueGetErrorBody]`
- **Error**: `ListSessionQueueSessionsSessionIdQueueGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `QueueListResponse` | `browser_use/models/queue_list_response.py` |
| `ListSessionQueueSessionsSessionIdQueueGetErrorBody` | `browser_use/errors/list_session_queue_sessions_session_id_queue_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.list_sessions_sessions_get

- **Route**: `GET /sessions`
- **Auth**: `api_key_header`
- **Signature**: `def list_sessions_sessions_get(*, limit: int | None = 20, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `SessionListResponse`
- **Returns (raw)**: `ApiResult[SessionListResponse, ListSessionsSessionsGetErrorBody]`
- **Error**: `ListSessionsSessionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionListResponse` | `browser_use/models/session_list_response.py` |
| `ListSessionsSessionsGetErrorBody` | `browser_use/errors/list_sessions_sessions_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.purge_session_sessions_session_id_purge_post

- **Route**: `POST /sessions/{session_id}/purge`
- **Auth**: `api_key_header`
- **Signature**: `def purge_session_sessions_session_id_purge_post(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PurgeSessionSessionsSessionIdPurgePostErrorBody]`
- **Error**: `PurgeSessionSessionsSessionIdPurgePostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `PurgeSessionSessionsSessionIdPurgePostErrorBody` | `browser_use/errors/purge_session_sessions_session_id_purge_post_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.queue_session_message_sessions_session_id_queue_post

- **Route**: `POST /sessions/{session_id}/queue`
- **Auth**: `api_key_header`
- **Signature**: `def queue_session_message_sessions_session_id_queue_post(session_id: UUID, body: QueueMessageRequest | QueueMessageRequestDict, *, x_v4_queue_deduplicate: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `body`
- **Params**: `session_id` — path · `x_v4_queue_deduplicate` — header `X-V4-Queue-Deduplicate` · `body` — JSON body
- **Returns (parsed)**: `QueuedMessage`
- **Returns (raw)**: `ApiResult[QueuedMessage, QueueSessionMessageSessionsSessionIdQueuePostErrorBody]`
- **Error**: `QueueSessionMessageSessionsSessionIdQueuePostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiKeySpendLimitError` [402] · `HttpValidationError` [422] · `RawError` [403, 404, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `QueueMessageRequest` | `browser_use/models/queue_message_request.py` |
| `QueueMessageRequestDict` | `browser_use/models/queue_message_request.py` |
| `QueuedMessage` | `browser_use/models/queued_message.py` |
| `QueueSessionMessageSessionsSessionIdQueuePostErrorBody` | `browser_use/errors/queue_session_message_sessions_session_id_queue_post_error.py` |
| `ApiKeySpendLimitError` | `browser_use/models/api_key_spend_limit_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.update_session_cost_cap_sessions_session_id_cost_cap_patch

- **Route**: `PATCH /sessions/{session_id}/cost-cap`
- **Auth**: `api_key_header`
- **Signature**: `def update_session_cost_cap_sessions_session_id_cost_cap_patch(session_id: UUID, body: SessionCostCapRequest | SessionCostCapRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `body`
- **Params**: `session_id` — path · `body` — JSON body
- **Returns (parsed)**: `SessionCostCapResponse`
- **Returns (raw)**: `ApiResult[SessionCostCapResponse, UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody]`
- **Error**: `UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionCostCapRequest` | `browser_use/models/session_cost_cap_request.py` |
| `SessionCostCapRequestDict` | `browser_use/models/session_cost_cap_request.py` |
| `SessionCostCapResponse` | `browser_use/models/session_cost_cap_response.py` |
| `UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody` | `browser_use/errors/update_session_cost_cap_sessions_session_id_cost_cap_patch_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.update_session_sessions_session_id_patch

- **Route**: `PATCH /sessions/{session_id}`
- **Auth**: `api_key_header`
- **Signature**: `def update_session_sessions_session_id_patch(session_id: UUID, body: SessionUpdateRequest | SessionUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `body`
- **Params**: `session_id` — path · `body` — JSON body
- **Returns (parsed)**: `SessionInfo`
- **Returns (raw)**: `ApiResult[SessionInfo, UpdateSessionSessionsSessionIdPatchErrorBody]`
- **Error**: `UpdateSessionSessionsSessionIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionUpdateRequest` | `browser_use/models/session_update_request.py` |
| `SessionUpdateRequestDict` | `browser_use/models/session_update_request.py` |
| `SessionInfo` | `browser_use/models/session_info.py` |
| `UpdateSessionSessionsSessionIdPatchErrorBody` | `browser_use/errors/update_session_sessions_session_id_patch_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.sessions.update_session_share_sessions_session_id_share_put

- **Route**: `PUT /sessions/{session_id}/share`
- **Auth**: `api_key_header`
- **Signature**: `def update_session_share_sessions_session_id_share_put(session_id: UUID, body: SessionShareUpdateRequest | SessionShareUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `body`
- **Params**: `session_id` — path · `body` — JSON body
- **Returns (parsed)**: `SessionShareInfo`
- **Returns (raw)**: `ApiResult[SessionShareInfo, UpdateSessionShareSessionsSessionIdSharePutErrorBody]`
- **Error**: `UpdateSessionShareSessionsSessionIdSharePutErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SessionShareUpdateRequest` | `browser_use/models/session_share_update_request.py` |
| `SessionShareUpdateRequestDict` | `browser_use/models/session_share_update_request.py` |
| `SessionShareInfo` | `browser_use/models/session_share_info.py` |
| `UpdateSessionShareSessionsSessionIdSharePutErrorBody` | `browser_use/errors/update_session_share_sessions_session_id_share_put_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

