<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chat — operations

Accessor: `client.chat` · Source: `instacart/apis/chat.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.chat.get_chat_messages

- **Route**: `GET /v2/post_checkout/chat/{order_id}/messages`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_chat_messages(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `ChatMessagesResponse`
- **Returns (raw)**: `ApiResult[ChatMessagesResponse, GetChatMessagesErrorBody]`
- **Error**: `GetChatMessagesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChatMessagesResponse` | `instacart/models/chat_messages_response.py` |
| `GetChatMessagesErrorBody` | `instacart/errors/get_chat_messages_error.py` |
| `Error` | `instacart/models/error.py` |

### client.chat.send_chat_message

- **Route**: `POST /v2/post_checkout/chat/{order_id}/messages`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def send_chat_message(order_id: str, body: SendMessageRequest | SendMessageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `body`
- **Params**: `order_id` — path · `body` — JSON body
- **Returns (parsed)**: `ChatMessage`
- **Returns (raw)**: `ApiResult[ChatMessage, SendChatMessageErrorBody]`
- **Error**: `SendChatMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SendMessageRequest` | `instacart/models/send_message_request.py` |
| `SendMessageRequestDict` | `instacart/models/send_message_request.py` |
| `ChatMessage` | `instacart/models/chat_message.py` |
| `SendChatMessageErrorBody` | `instacart/errors/send_chat_message_error.py` |
| `Error` | `instacart/models/error.py` |

