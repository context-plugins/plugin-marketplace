<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `basiq/apis/events.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.get_event_type_by_id

- **Route**: `GET /events/types/{id}`
- **Auth**: `services_token`
- **Signature**: `def get_event_type_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `EventsTypesResponse1`
- **Returns (raw)**: `ApiResult[EventsTypesResponse1, GetEventTypeByIdErrorBody]`
- **Error**: `GetEventTypeByIdErrorBody` — **Case A (typed)**
- **Error arms**: `EventsTypes400Error1` [400] · `EventsTypes401Error1` [401] · `EventsTypes403Error1` [403] · `EventsTypes404Error1` [404] · `EventsTypes429Error1` [429] · `EventsTypes500Error1` [500] · `EventsTypes503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventsTypesResponse1` | `basiq/models/events_types_response1.py` |
| `GetEventTypeByIdErrorBody` | `basiq/errors/get_event_type_by_id_error.py` |
| `EventsTypes400Error1` | `basiq/models/events_types400_error1.py` |
| `EventsTypes401Error1` | `basiq/models/events_types401_error1.py` |
| `EventsTypes403Error1` | `basiq/models/events_types403_error1.py` |
| `EventsTypes404Error1` | `basiq/models/events_types404_error1.py` |
| `EventsTypes429Error1` | `basiq/models/events_types429_error1.py` |
| `EventsTypes500Error1` | `basiq/models/events_types500_error1.py` |
| `EventsTypes503Error1` | `basiq/models/events_types503_error1.py` |

### client.events.get_events

- **Route**: `GET /events`
- **Auth**: `services_token`
- **Signature**: `def get_events(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `filter`
- **Returns (parsed)**: `EventsGetResponseResource`
- **Returns (raw)**: `ApiResult[EventsGetResponseResource, GetEventsErrorBody]`
- **Error**: `GetEventsErrorBody` — **Case A (typed)**
- **Error arms**: `Events400Error1` [400] · `Events401Error1` [401] · `Events403Error1` [403] · `Events404Error1` [404] · `Events500Error1` [500] · `Events503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventsGetResponseResource` | `basiq/models/events_get_response_resource.py` |
| `GetEventsErrorBody` | `basiq/errors/get_events_error.py` |
| `Events400Error1` | `basiq/models/events400_error1.py` |
| `Events401Error1` | `basiq/models/events401_error1.py` |
| `Events403Error1` | `basiq/models/events403_error1.py` |
| `Events404Error1` | `basiq/models/events404_error1.py` |
| `Events500Error1` | `basiq/models/events500_error1.py` |
| `Events503Error1` | `basiq/models/events503_error1.py` |

### client.events.get_type_by_id

- **Route**: `GET /events/{id}`
- **Auth**: `services_token`
- **Signature**: `def get_type_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `EventsResponse`
- **Returns (raw)**: `ApiResult[EventsResponse, GetTypeByIdErrorBody]`
- **Error**: `GetTypeByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Events400Error21` [400] · `Events401Error21` [401] · `Events403Error21` [403] · `Events404Error21` [404] · `Events429Error1` [429] · `Events500Error21` [500] · `Events503Error21` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventsResponse` | `basiq/models/events_response.py` |
| `GetTypeByIdErrorBody` | `basiq/errors/get_type_by_id_error.py` |
| `Events400Error21` | `basiq/models/events400_error21.py` |
| `Events401Error21` | `basiq/models/events401_error21.py` |
| `Events403Error21` | `basiq/models/events403_error21.py` |
| `Events404Error21` | `basiq/models/events404_error21.py` |
| `Events429Error1` | `basiq/models/events429_error1.py` |
| `Events500Error21` | `basiq/models/events500_error21.py` |
| `Events503Error21` | `basiq/models/events503_error21.py` |

### client.events.list_event_types

- **Route**: `GET /events/types`
- **Auth**: `services_token`
- **Signature**: `def list_event_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `EventsTypesResponse`
- **Returns (raw)**: `ApiResult[EventsTypesResponse, ListEventTypesErrorBody]`
- **Error**: `ListEventTypesErrorBody` — **Case A (typed)**
- **Error arms**: `EventsTypes401Error1` [401] · `EventsTypes403Error1` [403] · `EventsTypes429Error1` [429] · `EventsTypes500Error1` [500] · `EventsTypes503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventsTypesResponse` | `basiq/models/events_types_response.py` |
| `ListEventTypesErrorBody` | `basiq/errors/list_event_types_error.py` |
| `EventsTypes401Error1` | `basiq/models/events_types401_error1.py` |
| `EventsTypes403Error1` | `basiq/models/events_types403_error1.py` |
| `EventsTypes429Error1` | `basiq/models/events_types429_error1.py` |
| `EventsTypes500Error1` | `basiq/models/events_types500_error1.py` |
| `EventsTypes503Error1` | `basiq/models/events_types503_error1.py` |

