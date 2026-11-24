<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `givebutter/apis/messages.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.messages.messages_index

- **Route**: `GET /v1/messages`
- **Auth**: `http`
- **Signature**: `def messages_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1MessagesResponse`
- **Returns (raw)**: `ApiResult[V1MessagesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1MessagesResponse` | `givebutter/models/v1_messages_response.py` |

### client.messages.messages_show

- **Route**: `GET /v1/messages/{message}`
- **Auth**: `http`
- **Signature**: `def messages_show(message: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `message`
- **Params**: `message` — path
- **Returns (parsed)**: `MessageResource`
- **Returns (raw)**: `ApiResult[MessageResource, MessagesShowErrorBody]`
- **Error**: `MessagesShowErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResource` | `givebutter/models/message_resource.py` |
| `MessagesShowErrorBody` | `givebutter/errors/messages_show_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

