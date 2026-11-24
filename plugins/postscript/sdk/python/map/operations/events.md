<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `postscript/apis/events.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.create_custom_event

- **Route**: `POST /api/v2/events`
- **Auth**: `sec0`
- **Signature**: `def create_custom_event(*, x_postscript_shop_token: str | None = None, body: ApiV2EventsRequest | ApiV2EventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `ApiV2EventsResponse`
- **Returns (raw)**: `ApiResult[ApiV2EventsResponse, CreateCustomEventErrorBody]`
- **Error**: `CreateCustomEventErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2EventsRequest` | `postscript/models/api_v2_events_request.py` |
| `ApiV2EventsRequestDict` | `postscript/models/api_v2_events_request.py` |
| `ApiV2EventsResponse` | `postscript/models/api_v2_events_response.py` |
| `CreateCustomEventErrorBody` | `postscript/errors/create_custom_event_error.py` |

