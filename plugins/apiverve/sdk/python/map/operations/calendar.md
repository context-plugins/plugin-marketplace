<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.calendar` · Source: `api_verve/apis/calendar.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.calendar.agecalculator

- **Route**: `GET /v1/agecalculator`
- **Auth**: `api_key`
- **Signature**: `def agecalculator(dob: str, *, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dob`
- **Params**: `dob` — query · `timezone` — query
- **Returns (parsed)**: `V1AgecalculatorResponse`
- **Returns (raw)**: `ApiResult[V1AgecalculatorResponse, AgecalculatorErrorBody]`
- **Error**: `AgecalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AgecalculatorResponse` | `api_verve/models/v1_agecalculator_response.py` |
| `AgecalculatorErrorBody` | `api_verve/errors/agecalculator_error.py` |

### client.calendar.datecalculator

- **Route**: `GET /v1/datecalculator`
- **Auth**: `api_key`
- **Signature**: `def datecalculator(start: str, end: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start`, `end`
- **Params**: `start` — query · `end` — query
- **Returns (parsed)**: `V1DatecalculatorResponse`
- **Returns (raw)**: `ApiResult[V1DatecalculatorResponse, DatecalculatorErrorBody]`
- **Error**: `DatecalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DatecalculatorResponse` | `api_verve/models/v1_datecalculator_response.py` |
| `DatecalculatorErrorBody` | `api_verve/errors/datecalculator_error.py` |

### client.calendar.liturgicalcalendar

- **Route**: `GET /v1/liturgicalcalendar`
- **Auth**: `api_key`
- **Signature**: `def liturgicalcalendar(*, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `month` — query · `year` — query
- **Returns (parsed)**: `V1LiturgicalcalendarResponse`
- **Returns (raw)**: `ApiResult[V1LiturgicalcalendarResponse, LiturgicalcalendarErrorBody]`
- **Error**: `LiturgicalcalendarErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LiturgicalcalendarResponse` | `api_verve/models/v1_liturgicalcalendar_response.py` |
| `LiturgicalcalendarErrorBody` | `api_verve/errors/liturgicalcalendar_error.py` |

### client.calendar.workingdays

- **Route**: `GET /v1/workingdays`
- **Auth**: `api_key`
- **Signature**: `def workingdays(country: str, *, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `month` — query · `year` — query
- **Returns (parsed)**: `V1WorkingdaysResponse`
- **Returns (raw)**: `ApiResult[V1WorkingdaysResponse, WorkingdaysErrorBody]`
- **Error**: `WorkingdaysErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WorkingdaysResponse` | `api_verve/models/v1_workingdays_response.py` |
| `WorkingdaysErrorBody` | `api_verve/errors/workingdays_error.py` |

### client.calendar.worldholidays

- **Route**: `GET /v1/worldholidays`
- **Auth**: `api_key`
- **Signature**: `def worldholidays(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query
- **Returns (parsed)**: `V1WorldholidaysResponse`
- **Returns (raw)**: `ApiResult[V1WorldholidaysResponse, WorldholidaysErrorBody]`
- **Error**: `WorldholidaysErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WorldholidaysResponse` | `api_verve/models/v1_worldholidays_response.py` |
| `WorldholidaysErrorBody` | `api_verve/errors/worldholidays_error.py` |

