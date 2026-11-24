<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingApi — operations

Accessor: `client.messaging_api` · Source: `call_node/apis/messaging_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.messaging_api.get_message

- **Route**: `GET /api/v1/messages/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_message(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Message`
- **Returns (raw)**: `ApiResult[Message, GetMessageErrorBody]`
- **Error**: `GetMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Message` | `call_node/models/message.py` |
| `GetMessageErrorBody` | `call_node/errors/get_message_error.py` |
| `Error` | `call_node/models/error.py` |

### client.messaging_api.send_message

- **Route**: `POST /api/v1/messages`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def send_message(body: SendMessageRequest | SendMessageRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_idempotency_key` — header `X-Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SendMessageResponse`
- **Returns (raw)**: `ApiResult[SendMessageResponse, SendMessageErrorBody]`
- **Error**: `SendMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SendMessageRequest` | `call_node/models/send_message_request.py` |
| `SendMessageRequestDict` | `call_node/models/send_message_request.py` |
| `SendMessageResponse` | `call_node/models/send_message_response.py` |
| `SendMessageErrorBody` | `call_node/errors/send_message_error.py` |
| `Error` | `call_node/models/error.py` |

