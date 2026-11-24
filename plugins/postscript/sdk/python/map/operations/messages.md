<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `postscript/apis/messages.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.messages.create_message

- **Route**: `POST /api/v2/message_requests`
- **Auth**: `sec0`
- **Signature**: `def create_message(*, x_postscript_shop_token: str | None = None, body: ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `ApiV2MessageRequestsResponse`
- **Returns (raw)**: `ApiResult[ApiV2MessageRequestsResponse, CreateMessageErrorBody]`
- **Error**: `CreateMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2MessageRequestsRequest` | `postscript/models/api_v2_message_requests_request.py` |
| `ApiV2MessageRequestsRequestDict` | `postscript/models/api_v2_message_requests_request.py` |
| `ApiV2MessageRequestsResponse` | `postscript/models/api_v2_message_requests_response.py` |
| `CreateMessageErrorBody` | `postscript/errors/create_message_error.py` |

### client.messages.get_message_request

- **Route**: `GET /api/v2/message_requests/{id}`
- **Auth**: `sec0`
- **Signature**: `def get_message_request(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2MessageRequestsResponse`
- **Returns (raw)**: `ApiResult[ApiV2MessageRequestsResponse, GetMessageRequestErrorBody]`
- **Error**: `GetMessageRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2MessageRequestsResponse` | `postscript/models/api_v2_message_requests_response.py` |
| `GetMessageRequestErrorBody` | `postscript/errors/get_message_request_error.py` |

### client.messages.get_sent_message

- **Route**: `GET /api/v2/sent_messages/{id}`
- **Auth**: `sec0`
- **Signature**: `def get_sent_message(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2SentMessagesResponse`
- **Returns (raw)**: `ApiResult[ApiV2SentMessagesResponse, GetSentMessageErrorBody]`
- **Error**: `GetSentMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2SentMessages400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2SentMessagesResponse` | `postscript/models/api_v2_sent_messages_response.py` |
| `GetSentMessageErrorBody` | `postscript/errors/get_sent_message_error.py` |
| `ApiV2SentMessages400Error1` | `postscript/models/api_v2_sent_messages400_error1.py` |

