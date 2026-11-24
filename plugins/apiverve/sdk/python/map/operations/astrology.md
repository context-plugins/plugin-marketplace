<!-- Generated file — do not edit; regenerated with the SDK. -->

# Astrology — operations

Accessor: `client.astrology` · Source: `api_verve/apis/astrology.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.astrology.chinesezodiac

- **Route**: `GET /v1/chinesezodiac`
- **Auth**: `api_key`
- **Signature**: `def chinesezodiac(date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — query
- **Returns (parsed)**: `V1ChinesezodiacResponse`
- **Returns (raw)**: `ApiResult[V1ChinesezodiacResponse, ChinesezodiacErrorBody]`
- **Error**: `ChinesezodiacErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ChinesezodiacResponse` | `api_verve/models/v1_chinesezodiac_response.py` |
| `ChinesezodiacErrorBody` | `api_verve/errors/chinesezodiac_error.py` |

### client.astrology.horoscope

- **Route**: `GET /v1/horoscope`
- **Auth**: `api_key`
- **Signature**: `def horoscope(sign: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sign`
- **Params**: `sign` — query
- **Returns (parsed)**: `V1HoroscopeResponse`
- **Returns (raw)**: `ApiResult[V1HoroscopeResponse, HoroscopeErrorBody]`
- **Error**: `HoroscopeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HoroscopeResponse` | `api_verve/models/v1_horoscope_response.py` |
| `HoroscopeErrorBody` | `api_verve/errors/horoscope_error.py` |

### client.astrology.moonphases

- **Route**: `GET /v1/moonphases`
- **Auth**: `api_key`
- **Signature**: `def moonphases(*, today: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `today` — query
- **Returns (parsed)**: `V1MoonphasesResponse`
- **Returns (raw)**: `ApiResult[V1MoonphasesResponse, MoonphasesErrorBody]`
- **Error**: `MoonphasesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MoonphasesResponse` | `api_verve/models/v1_moonphases_response.py` |
| `MoonphasesErrorBody` | `api_verve/errors/moonphases_error.py` |

### client.astrology.moonposition

- **Route**: `GET /v1/moonposition`
- **Auth**: `api_key`
- **Signature**: `def moonposition(lat: float, lon: float, *, date: str | None = None, time: str | None = None, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `date` — query · `time` — query · `timezone` — query
- **Returns (parsed)**: `V1MoonpositionResponse`
- **Returns (raw)**: `ApiResult[V1MoonpositionResponse, MoonpositionErrorBody]`
- **Error**: `MoonpositionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MoonpositionResponse` | `api_verve/models/v1_moonposition_response.py` |
| `MoonpositionErrorBody` | `api_verve/errors/moonposition_error.py` |

### client.astrology.planetpositions

- **Route**: `POST /v1/planetpositions`
- **Auth**: `api_key`
- **Signature**: `def planetpositions(body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1PlanetpositionsResponse`
- **Returns (raw)**: `ApiResult[V1PlanetpositionsResponse, PlanetpositionsErrorBody]`
- **Error**: `PlanetpositionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PlanetpositionsRequest` | `api_verve/models/v1_planetpositions_request.py` |
| `V1PlanetpositionsRequestDict` | `api_verve/models/v1_planetpositions_request.py` |
| `V1PlanetpositionsResponse` | `api_verve/models/v1_planetpositions_response.py` |
| `PlanetpositionsErrorBody` | `api_verve/errors/planetpositions_error.py` |

### client.astrology.sunposition

- **Route**: `GET /v1/sunposition`
- **Auth**: `api_key`
- **Signature**: `def sunposition(lat: float, lon: float, *, date: str | None = None, time: str | None = None, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `date` — query · `time` — query · `timezone` — query
- **Returns (parsed)**: `V1SunpositionResponse`
- **Returns (raw)**: `ApiResult[V1SunpositionResponse, SunpositionErrorBody]`
- **Error**: `SunpositionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SunpositionResponse` | `api_verve/models/v1_sunposition_response.py` |
| `SunpositionErrorBody` | `api_verve/errors/sunposition_error.py` |

