<!-- Generated file — do not edit; regenerated with the SDK. -->

# NlWeb — operations

Accessor: `client.nl_web` · Source: `agent_ready/apis/nl_web.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.nl_web.ask_get

- **Route**: `GET /api/v1/ask`
- **Signature**: `def ask_get(query: str, *, mode: ModeOrStr | None = None, item_type: ItemType3OrStr | None = None, stream: StreamOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `mode` — query · `item_type` — query `itemType` · `stream` — query
- **Returns (parsed)**: `AskResponse1`
- **Returns (raw)**: `ApiResult[AskResponse1, AskGetErrorBody]`
- **Error**: `AskGetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModeOrStr` | `agent_ready/models/enums/mode.py` |
| `ItemType3OrStr` | `agent_ready/models/enums/item_type3.py` |
| `StreamOrStr` | `agent_ready/models/enums/stream.py` |
| `AskResponse1` | `agent_ready/models/unions/ask_response1.py` |
| `AskGetErrorBody` | `agent_ready/errors/ask_get_error.py` |
| `Error` | `agent_ready/models/error.py` |

### client.nl_web.ask_post

- **Route**: `POST /api/v1/ask`
- **Signature**: `def ask_post(body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AskResponse1`
- **Returns (raw)**: `ApiResult[AskResponse1, AskPostErrorBody]`
- **Error**: `AskPostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 429, 500, 503] · `AskResponse1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AskRequest` | `agent_ready/models/ask_request.py` |
| `AskRequestDict` | `agent_ready/models/ask_request.py` |
| `AskResponse1` | `agent_ready/models/unions/ask_response1.py` |
| `AskPostErrorBody` | `agent_ready/errors/ask_post_error.py` |
| `Error` | `agent_ready/models/error.py` |

