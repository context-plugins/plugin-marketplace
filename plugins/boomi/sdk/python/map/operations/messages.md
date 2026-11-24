<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `boomi/apis/messages.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.messages.publish_messages

- **Route**: `POST /`
- **Auth**: `bearer_auth`
- **Server**: `default_boomi_event_streams_rest_messages_api`
- **Signature**: `def publish_messages(body: MultiMessageRequest | MultiMessageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublishResponse`
- **Returns (raw)**: `ApiResult[PublishResponse, PublishMessagesErrorBody]`
- **Error**: `PublishMessagesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiEventStreamsRestMessagesApi` [400, 401] · `RawError` [413, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `MultiMessageRequest` | `boomi/models/multi_message_request.py` |
| `MultiMessageRequestDict` | `boomi/models/multi_message_request.py` |
| `PublishResponse` | `boomi/models/publish_response.py` |
| `PublishMessagesErrorBody` | `boomi/errors/publish_messages_error.py` |
| `ErrorResponseBoomiEventStreamsRestMessagesApi` | `boomi/models/error_response_boomi_event_streams_rest_messages_api.py` |

