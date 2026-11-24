<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.calendar` · Source: `alpha_ai/apis/calendar.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.calendar.get_api_calendar

- **Route**: `GET /api/calendar/`
- **Auth**: `api_key`
- **Signature**: `def get_api_calendar(*, from_date: str | None = None, to_date: str | None = None, event_key: str | None = None, importance: ImportanceOrStr | None = None, country: CountryOrStr | None = Country.US, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_date` — query · `to_date` — query · `event_key` — query · `importance` — query · `country` — query
- **Returns (parsed)**: `CalendarEvents`
- **Returns (raw)**: `ApiResult[CalendarEvents, GetApiCalendarErrorBody]`
- **Error**: `GetApiCalendarErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `ImportanceOrStr` | `alpha_ai/models/enums/importance.py` |
| `CountryOrStr` | `alpha_ai/models/enums/country.py` |
| `CalendarEvents` | `alpha_ai/models/calendar_events.py` |
| `GetApiCalendarErrorBody` | `alpha_ai/errors/get_api_calendar_error.py` |
| `Error` | `alpha_ai/models/error.py` |

