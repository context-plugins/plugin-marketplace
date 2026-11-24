<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `contentstack/apis/events.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.get_all_events

- **Route**: `GET /events`
- **Server**: `default_contentstack_events_api`
- **Signature**: `def get_all_events(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `EventList`
- **Returns (raw)**: `ApiResult[EventList, GetAllEventsErrorBody]`
- **Error**: `GetAllEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventList` | `contentstack/models/event_list.py` |
| `GetAllEventsErrorBody` | `contentstack/errors/get_all_events_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.events.track_events

- **Route**: `POST /events`
- **Server**: `default_contentstack_events_api`
- **Signature**: `def track_events(x_project_uid: str, x_cs_personalize_user_uid: str, body: list[TrackEvent | TrackEventDict], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `x_cs_personalize_user_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `x_cs_personalize_user_uid` — header `x-cs-personalize-user-uid` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TrackEventsErrorBody]`
- **Error**: `TrackEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrackEvent` | `contentstack/models/track_event.py` |
| `TrackEventDict` | `contentstack/models/track_event.py` |
| `TrackEventsErrorBody` | `contentstack/errors/track_events_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

