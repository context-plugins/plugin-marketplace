<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `divvy/apis/events.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.get_event_catalog

- **Route**: `GET /v3/events/catalog`
- **Server**: `default_connect_events_api`
- **Signature**: `def get_event_catalog(*, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `list[EventCatalogDto]`
- **Returns (raw)**: `ApiResult[list[EventCatalogDto], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `EventCatalogDto` | `divvy/models/event_catalog_dto.py` |

### client.events.get_events_for_subscription

- **Route**: `GET /v3/events/subscription/{subscriptionId}`
- **Server**: `default_connect_events_api`
- **Signature**: `def get_events_for_subscription(subscription_id: str, *, entity_id: str | None = None, max_: int | None = None, created_time_from: str | None = None, created_time_to: str | None = None, ascending: bool | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`
- **Params**: `subscription_id` — path `subscriptionId` · `entity_id` — query `entityId` · `max_` — query `max` · `created_time_from` — query `createdTimeFrom` · `created_time_to` — query `createdTimeTo` · `ascending` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationDtoEventWithRetriesDto`
- **Returns (raw)**: `ApiResult[PaginationDtoEventWithRetriesDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginationDtoEventWithRetriesDto` | `divvy/models/pagination_dto_event_with_retries_dto.py` |

### client.events.resend_event

- **Route**: `POST /v3/events/subscription/{subscriptionId}/event/{eventId}`
- **Server**: `default_connect_events_api`
- **Signature**: `def resend_event(subscription_id: str, event_id: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`, `event_id`
- **Params**: `subscription_id` — path `subscriptionId` · `event_id` — path `eventId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `EventDto`
- **Returns (raw)**: `ApiResult[EventDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `EventDto` | `divvy/models/event_dto.py` |

