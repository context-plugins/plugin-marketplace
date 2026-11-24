<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geography — operations

Accessor: `client.geography` · Source: `api_verve/apis/geography.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.geography.citieslookup

- **Route**: `GET /v1/citieslookup`
- **Auth**: `api_key`
- **Signature**: `def citieslookup(city: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `city`
- **Params**: `city` — query · `limit` — query
- **Returns (parsed)**: `V1CitieslookupResponse`
- **Returns (raw)**: `ApiResult[V1CitieslookupResponse, CitieslookupErrorBody]`
- **Error**: `CitieslookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CitieslookupResponse` | `api_verve/models/v1_citieslookup_response.py` |
| `CitieslookupErrorBody` | `api_verve/errors/citieslookup_error.py` |

### client.geography.coordinatesaresea

- **Route**: `GET /v1/coordinatesaresea`
- **Auth**: `api_key`
- **Signature**: `def coordinatesaresea(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query
- **Returns (parsed)**: `V1CoordinatesareseaResponse`
- **Returns (raw)**: `ApiResult[V1CoordinatesareseaResponse, CoordinatesareseaErrorBody]`
- **Error**: `CoordinatesareseaErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CoordinatesareseaResponse` | `api_verve/models/v1_coordinatesaresea_response.py` |
| `CoordinatesareseaErrorBody` | `api_verve/errors/coordinatesaresea_error.py` |

### client.geography.countryborders

- **Route**: `GET /v1/countryborders`
- **Auth**: `api_key`
- **Signature**: `def countryborders(country: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query
- **Returns (parsed)**: `V1CountrybordersResponse`
- **Returns (raw)**: `ApiResult[V1CountrybordersResponse, CountrybordersErrorBody]`
- **Error**: `CountrybordersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CountrybordersResponse` | `api_verve/models/v1_countryborders_response.py` |
| `CountrybordersErrorBody` | `api_verve/errors/countryborders_error.py` |

### client.geography.countryboundaries

- **Route**: `GET /v1/countryboundaries`
- **Auth**: `api_key`
- **Signature**: `def countryboundaries(country: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query
- **Returns (parsed)**: `V1CountryboundariesResponse`
- **Returns (raw)**: `ApiResult[V1CountryboundariesResponse, CountryboundariesErrorBody]`
- **Error**: `CountryboundariesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CountryboundariesResponse` | `api_verve/models/v1_countryboundaries_response.py` |
| `CountryboundariesErrorBody` | `api_verve/errors/countryboundaries_error.py` |

### client.geography.countryflags

- **Route**: `GET /v1/countryflags`
- **Auth**: `api_key`
- **Signature**: `def countryflags(country: str, format_: str, shape: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`, `format_`, `shape`
- **Params**: `country` — query · `format_` — query `format` · `shape` — query
- **Returns (parsed)**: `V1CountryflagsResponse`
- **Returns (raw)**: `ApiResult[V1CountryflagsResponse, CountryflagsErrorBody]`
- **Error**: `CountryflagsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CountryflagsResponse` | `api_verve/models/v1_countryflags_response.py` |
| `CountryflagsErrorBody` | `api_verve/errors/countryflags_error.py` |

### client.geography.countrylanguages

- **Route**: `GET /v1/countrylanguages`
- **Auth**: `api_key`
- **Signature**: `def countrylanguages(country: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query
- **Returns (parsed)**: `V1CountrylanguagesResponse`
- **Returns (raw)**: `ApiResult[V1CountrylanguagesResponse, CountrylanguagesErrorBody]`
- **Error**: `CountrylanguagesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CountrylanguagesResponse` | `api_verve/models/v1_countrylanguages_response.py` |
| `CountrylanguagesErrorBody` | `api_verve/errors/countrylanguages_error.py` |

### client.geography.countrylookup

- **Route**: `GET /v1/countrylookup`
- **Auth**: `api_key`
- **Signature**: `def countrylookup(country: str, *, majorcities: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `majorcities` — query
- **Returns (parsed)**: `V1CountrylookupResponse`
- **Returns (raw)**: `ApiResult[V1CountrylookupResponse, CountrylookupErrorBody]`
- **Error**: `CountrylookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CountrylookupResponse` | `api_verve/models/v1_countrylookup_response.py` |
| `CountrylookupErrorBody` | `api_verve/errors/countrylookup_error.py` |

### client.geography.countydata

- **Route**: `GET /v1/countydata`
- **Auth**: `api_key`
- **Signature**: `def countydata(state: str, county: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `state`, `county`
- **Params**: `state` — query · `county` — query
- **Returns (parsed)**: `V1CountydataResponse`
- **Returns (raw)**: `ApiResult[V1CountydataResponse, CountydataErrorBody]`
- **Error**: `CountydataErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CountydataResponse` | `api_verve/models/v1_countydata_response.py` |
| `CountydataErrorBody` | `api_verve/errors/countydata_error.py` |

### client.geography.distancecalculator

- **Route**: `GET /v1/distancecalculator`
- **Auth**: `api_key`
- **Signature**: `def distancecalculator(lat1: float, lon1: float, lat2: float, lon2: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat1`, `lon1`, `lat2`, `lon2`
- **Params**: `lat1` — query · `lon1` — query · `lat2` — query · `lon2` — query
- **Returns (parsed)**: `V1DistancecalculatorResponse`
- **Returns (raw)**: `ApiResult[V1DistancecalculatorResponse, DistancecalculatorErrorBody]`
- **Error**: `DistancecalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DistancecalculatorResponse` | `api_verve/models/v1_distancecalculator_response.py` |
| `DistancecalculatorErrorBody` | `api_verve/errors/distancecalculator_error.py` |

### client.geography.hardinesszone

- **Route**: `GET /v1/hardinesszone`
- **Auth**: `api_key`
- **Signature**: `def hardinesszone(zip_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zip_`
- **Params**: `zip_` — query `zip`
- **Returns (parsed)**: `V1HardinesszoneResponse`
- **Returns (raw)**: `ApiResult[V1HardinesszoneResponse, HardinesszoneErrorBody]`
- **Error**: `HardinesszoneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HardinesszoneResponse` | `api_verve/models/v1_hardinesszone_response.py` |
| `HardinesszoneErrorBody` | `api_verve/errors/hardinesszone_error.py` |

### client.geography.reversegeocode

- **Route**: `GET /v1/reversegeocode`
- **Auth**: `api_key`
- **Signature**: `def reversegeocode(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query
- **Returns (parsed)**: `V1ReversegeocodeResponse`
- **Returns (raw)**: `ApiResult[V1ReversegeocodeResponse, ReversegeocodeErrorBody]`
- **Error**: `ReversegeocodeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ReversegeocodeResponse` | `api_verve/models/v1_reversegeocode_response.py` |
| `ReversegeocodeErrorBody` | `api_verve/errors/reversegeocode_error.py` |

### client.geography.stateboundaries

- **Route**: `GET /v1/stateboundaries`
- **Auth**: `api_key`
- **Signature**: `def stateboundaries(state: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `state`
- **Params**: `state` — query
- **Returns (parsed)**: `V1StateboundariesResponse`
- **Returns (raw)**: `ApiResult[V1StateboundariesResponse, StateboundariesErrorBody]`
- **Error**: `StateboundariesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1StateboundariesResponse` | `api_verve/models/v1_stateboundaries_response.py` |
| `StateboundariesErrorBody` | `api_verve/errors/stateboundaries_error.py` |

### client.geography.zipcodes

- **Route**: `GET /v1/zipcodes`
- **Auth**: `api_key`
- **Signature**: `def zipcodes(zip_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zip_`
- **Params**: `zip_` — query `zip`
- **Returns (parsed)**: `V1ZipcodesResponse`
- **Returns (raw)**: `ApiResult[V1ZipcodesResponse, ZipcodesErrorBody]`
- **Error**: `ZipcodesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ZipcodesResponse` | `api_verve/models/v1_zipcodes_response.py` |
| `ZipcodesErrorBody` | `api_verve/errors/zipcodes_error.py` |

