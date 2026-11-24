<!-- Generated file — do not edit; regenerated with the SDK. -->

# CalendarEvents — operations

Accessor: `client.calendar_events` · Source: `nordic_financial_news/apis/calendar_events.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.calendar_events.get_api_v1_calendar_events

- **Route**: `GET /api/v1/calendar_events`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_calendar_events(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, ticker: str | None = None, company: str | None = None, country: str | None = None, market: str | None = None, domicile: str | None = None, exchange: str | None = None, index: str | None = None, sector: str | None = None, event_type: EventType1OrStr | None = None, status: Status1OrStr | None = None, scheduled_after: str | None = None, scheduled_before: str | None = None, watchlist: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `updated_after` — query · `ticker` — query · `company` — query · `country` — query · `market` — query · `domicile` — query · `exchange` — query · `index` — query · `sector` — query · `event_type` — query · `status` — query · `scheduled_after` — query · `scheduled_before` — query · `watchlist` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CalendarEventsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CalendarEventsResponse, GetApiV1CalendarEventsErrorBody]`
- **Error**: `GetApiV1CalendarEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventType1OrStr` | `nordic_financial_news/models/enums/event_type1.py` |
| `Status1OrStr` | `nordic_financial_news/models/enums/status1.py` |
| `ApiV1CalendarEventsResponse` | `nordic_financial_news/models/api_v1_calendar_events_response.py` |
| `GetApiV1CalendarEventsErrorBody` | `nordic_financial_news/errors/get_api_v1_calendar_events_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.calendar_events.get_api_v1_calendar_events_by_id

- **Route**: `GET /api/v1/calendar_events/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_calendar_events_by_id(id_: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CalendarEventsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CalendarEventsResponse1, GetApiV1CalendarEventsByIdErrorBody]`
- **Error**: `GetApiV1CalendarEventsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CalendarEventsResponse1` | `nordic_financial_news/models/api_v1_calendar_events_response1.py` |
| `GetApiV1CalendarEventsByIdErrorBody` | `nordic_financial_news/errors/get_api_v1_calendar_events_by_id_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

