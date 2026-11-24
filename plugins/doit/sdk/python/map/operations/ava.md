<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ava — operations

Accessor: `client.ava` · Source: `doi_t/apis/ava.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ava.ask_ava_streaming

- **Route**: `POST /ava/v1/ask`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def ask_ava_streaming(body: AvaAskRequest | AvaAskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EventStream[str]`
- **Returns (raw)**: `ApiResult[EventStream[str], AskAvaStreamingErrorBody]`
- **Error**: `AskAvaStreamingErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AvaAskRequest` | `doi_t/models/ava_ask_request.py` |
| `AvaAskRequestDict` | `doi_t/models/ava_ask_request.py` |
| `AskAvaStreamingErrorBody` | `doi_t/errors/ask_ava_streaming_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.ava.ask_ava_sync

- **Route**: `POST /ava/v1/askSync`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def ask_ava_sync(body: AvaAskSyncRequest | AvaAskSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AvaAskSyncResponse`
- **Returns (raw)**: `ApiResult[AvaAskSyncResponse, AskAvaSyncErrorBody]`
- **Error**: `AskAvaSyncErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AvaAskSyncRequest` | `doi_t/models/ava_ask_sync_request.py` |
| `AvaAskSyncRequestDict` | `doi_t/models/ava_ask_sync_request.py` |
| `AvaAskSyncResponse` | `doi_t/models/ava_ask_sync_response.py` |
| `AskAvaSyncErrorBody` | `doi_t/errors/ask_ava_sync_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.ava.ava_feedback

- **Route**: `POST /ava/v1/feedback`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def ava_feedback(body: AvaFeedbackRequest | AvaFeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AvaFeedbackErrorBody]`
- **Error**: `AvaFeedbackErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AvaFeedbackRequest` | `doi_t/models/ava_feedback_request.py` |
| `AvaFeedbackRequestDict` | `doi_t/models/ava_feedback_request.py` |
| `AvaFeedbackErrorBody` | `doi_t/errors/ava_feedback_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.ava.delete_ava_conversation

- **Route**: `DELETE /ava/v1/deleteConversation`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_ava_conversation(conversation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `conversation_id`
- **Params**: `conversation_id` — query `conversationId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAvaConversationErrorBody]`
- **Error**: `DeleteAvaConversationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAvaConversationErrorBody` | `doi_t/errors/delete_ava_conversation_error.py` |
| `Error` | `doi_t/models/error.py` |

