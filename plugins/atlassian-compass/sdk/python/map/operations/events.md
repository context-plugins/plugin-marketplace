<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `atlassian_compass/apis/events.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.create_compass_event

- **Route**: `POST /compass/v1/events`
- **Auth**: `basic_auth`
- **Signature**: `def create_compass_event(body: CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateCompassEventErrorBody]`
- **Error**: `CreateCompassEventErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [400, 404] · `RawError` [429, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStreamlinedEventRequest` | `atlassian_compass/models/create_streamlined_event_request.py` |
| `CreateStreamlinedEventRequestDict` | `atlassian_compass/models/create_streamlined_event_request.py` |
| `CreateCompassEventErrorBody` | `atlassian_compass/errors/create_compass_event_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

