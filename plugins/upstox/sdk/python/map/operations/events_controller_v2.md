<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventsControllerV2 — operations

Accessor: `client.events_controller_v2` · Source: `upstox/apis/events_controller_v2.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events_controller_v2.publish_event

- **Route**: `POST /v2/events`
- **Signature**: `def publish_event(body: EventRequest | EventRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EventResponse`
- **Returns (raw)**: `ApiResult[EventResponse, PublishEventErrorBody]`
- **Error**: `PublishEventErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventRequest` | `upstox/models/event_request.py` |
| `EventRequestDict` | `upstox/models/event_request.py` |
| `EventResponse` | `upstox/models/event_response.py` |
| `PublishEventErrorBody` | `upstox/errors/publish_event_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

