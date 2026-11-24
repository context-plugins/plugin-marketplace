<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `appstore_spy/apis/events.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.get_events_play_liveops_get

- **Route**: `GET /play/liveops`
- **Auth**: `api_key_header`
- **Signature**: `def get_events_play_liveops_get(app: str, *, country: AppCountriesOrStr | None = AppCountries.US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `app`
- **Params**: `app` — query · `country` — query · `freshness` — query
- **Returns (parsed)**: `list[Event]`
- **Returns (raw)**: `ApiResult[list[Event], GetEventsPlayLiveopsGetErrorBody]`
- **Error**: `GetEventsPlayLiveopsGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayLiveops401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `CacheTimeOrStr` | `appstore_spy/models/enums/cache_time.py` |
| `Event` | `appstore_spy/models/event.py` |
| `GetEventsPlayLiveopsGetErrorBody` | `appstore_spy/errors/get_events_play_liveops_get_error.py` |
| `PlayLiveops401Error1` | `appstore_spy/models/play_liveops401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

