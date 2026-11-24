<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transportation — operations

Accessor: `client.transportation` · Source: `api_verve/apis/transportation.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transportation.airlinelookup

- **Route**: `GET /v1/airlinelookup`
- **Auth**: `api_key`
- **Signature**: `def airlinelookup(iata: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iata`
- **Params**: `iata` — query
- **Returns (parsed)**: `V1AirlinelookupResponse`
- **Returns (raw)**: `ApiResult[V1AirlinelookupResponse, AirlinelookupErrorBody]`
- **Error**: `AirlinelookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AirlinelookupResponse` | `api_verve/models/v1_airlinelookup_response.py` |
| `AirlinelookupErrorBody` | `api_verve/errors/airlinelookup_error.py` |

### client.transportation.airportcodeconverter

- **Route**: `GET /v1/airportcodeconverter`
- **Auth**: `api_key`
- **Signature**: `def airportcodeconverter(code: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `code`
- **Params**: `code` — query
- **Returns (parsed)**: `V1AirportcodeconverterResponse`
- **Returns (raw)**: `ApiResult[V1AirportcodeconverterResponse, AirportcodeconverterErrorBody]`
- **Error**: `AirportcodeconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AirportcodeconverterResponse` | `api_verve/models/v1_airportcodeconverter_response.py` |
| `AirportcodeconverterErrorBody` | `api_verve/errors/airportcodeconverter_error.py` |

### client.transportation.airportdistance

- **Route**: `GET /v1/airportdistance`
- **Auth**: `api_key`
- **Signature**: `def airportdistance(iata1: str, iata2: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iata1`, `iata2`
- **Params**: `iata1` — query · `iata2` — query
- **Returns (parsed)**: `V1AirportdistanceResponse`
- **Returns (raw)**: `ApiResult[V1AirportdistanceResponse, AirportdistanceErrorBody]`
- **Error**: `AirportdistanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AirportdistanceResponse` | `api_verve/models/v1_airportdistance_response.py` |
| `AirportdistanceErrorBody` | `api_verve/errors/airportdistance_error.py` |

### client.transportation.airports

- **Route**: `GET /v1/airports`
- **Auth**: `api_key`
- **Signature**: `def airports(iata: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iata`
- **Params**: `iata` — query
- **Returns (parsed)**: `V1AirportsResponse`
- **Returns (raw)**: `ApiResult[V1AirportsResponse, AirportsErrorBody]`
- **Error**: `AirportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AirportsResponse` | `api_verve/models/v1_airports_response.py` |
| `AirportsErrorBody` | `api_verve/errors/airports_error.py` |

### client.transportation.carmodels

- **Route**: `GET /v1/carmodels`
- **Auth**: `api_key`
- **Signature**: `def carmodels(make: str, *, year: int | None = None, model: str | None = None, trim: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `make`
- **Params**: `make` — query · `year` — query · `model` — query · `trim` — query
- **Returns (parsed)**: `V1CarmodelsResponse`
- **Returns (raw)**: `ApiResult[V1CarmodelsResponse, CarmodelsErrorBody]`
- **Error**: `CarmodelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CarmodelsResponse` | `api_verve/models/v1_carmodels_response.py` |
| `CarmodelsErrorBody` | `api_verve/errors/carmodels_error.py` |

### client.transportation.vindecoder

- **Route**: `GET /v1/vindecoder`
- **Auth**: `api_key`
- **Signature**: `def vindecoder(vin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query
- **Returns (parsed)**: `V1VindecoderResponse`
- **Returns (raw)**: `ApiResult[V1VindecoderResponse, VindecoderErrorBody]`
- **Error**: `VindecoderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1VindecoderResponse` | `api_verve/models/v1_vindecoder_response.py` |
| `VindecoderErrorBody` | `api_verve/errors/vindecoder_error.py` |

