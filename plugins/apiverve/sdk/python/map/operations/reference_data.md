<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReferenceData — operations

Accessor: `client.reference_data` · Source: `api_verve/apis/reference_data.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reference_data.birthstones

- **Route**: `GET /v1/birthstones`
- **Auth**: `api_key`
- **Signature**: `def birthstones(month: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `month`
- **Params**: `month` — query
- **Returns (parsed)**: `V1BirthstonesResponse`
- **Returns (raw)**: `ApiResult[V1BirthstonesResponse, BirthstonesErrorBody]`
- **Error**: `BirthstonesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BirthstonesResponse` | `api_verve/models/v1_birthstones_response.py` |
| `BirthstonesErrorBody` | `api_verve/errors/birthstones_error.py` |

### client.reference_data.caaparser

- **Route**: `POST /v1/caaparser`
- **Auth**: `api_key`
- **Signature**: `def caaparser(body: V1CaaparserRequest | V1CaaparserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CaaparserResponse`
- **Returns (raw)**: `ApiResult[V1CaaparserResponse, CaaparserErrorBody]`
- **Error**: `CaaparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CaaparserRequest` | `api_verve/models/v1_caaparser_request.py` |
| `V1CaaparserRequestDict` | `api_verve/models/v1_caaparser_request.py` |
| `V1CaaparserResponse` | `api_verve/models/v1_caaparser_response.py` |
| `CaaparserErrorBody` | `api_verve/errors/caaparser_error.py` |

### client.reference_data.colorbrightness

- **Route**: `GET /v1/colorbrightness`
- **Auth**: `api_key`
- **Signature**: `def colorbrightness(hex_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `hex_`
- **Params**: `hex_` — query `hex`
- **Returns (parsed)**: `V1ColorbrightnessResponse`
- **Returns (raw)**: `ApiResult[V1ColorbrightnessResponse, ColorbrightnessErrorBody]`
- **Error**: `ColorbrightnessErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ColorbrightnessResponse` | `api_verve/models/v1_colorbrightness_response.py` |
| `ColorbrightnessErrorBody` | `api_verve/errors/colorbrightness_error.py` |

### client.reference_data.colornamefinder

- **Route**: `GET /v1/colornamefinder`
- **Auth**: `api_key`
- **Signature**: `def colornamefinder(hex_: str, *, closest: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `hex_`
- **Params**: `hex_` — query `hex` · `closest` — query
- **Returns (parsed)**: `V1ColornamefinderResponse`
- **Returns (raw)**: `ApiResult[V1ColornamefinderResponse, ColornamefinderErrorBody]`
- **Error**: `ColornamefinderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ColornamefinderResponse` | `api_verve/models/v1_colornamefinder_response.py` |
| `ColornamefinderErrorBody` | `api_verve/errors/colornamefinder_error.py` |

### client.reference_data.httpstatuslookup

- **Route**: `GET /v1/httpstatuslookup`
- **Auth**: `api_key`
- **Signature**: `def httpstatuslookup(code: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `code`
- **Params**: `code` — query
- **Returns (parsed)**: `V1HttpstatuslookupResponse`
- **Returns (raw)**: `ApiResult[V1HttpstatuslookupResponse, HttpstatuslookupErrorBody]`
- **Error**: `HttpstatuslookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HttpstatuslookupResponse` | `api_verve/models/v1_httpstatuslookup_response.py` |
| `HttpstatuslookupErrorBody` | `api_verve/errors/httpstatuslookup_error.py` |

### client.reference_data.mayancalendar

- **Route**: `GET /v1/mayancalendar`
- **Auth**: `api_key`
- **Signature**: `def mayancalendar(date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — query
- **Returns (parsed)**: `V1MayancalendarResponse`
- **Returns (raw)**: `ApiResult[V1MayancalendarResponse, MayancalendarErrorBody]`
- **Error**: `MayancalendarErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MayancalendarResponse` | `api_verve/models/v1_mayancalendar_response.py` |
| `MayancalendarErrorBody` | `api_verve/errors/mayancalendar_error.py` |

### client.reference_data.mimetypelookup

- **Route**: `GET /v1/mimetypelookup`
- **Auth**: `api_key`
- **Signature**: `def mimetypelookup(extension: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `extension`
- **Params**: `extension` — query
- **Returns (parsed)**: `V1MimetypelookupResponse`
- **Returns (raw)**: `ApiResult[V1MimetypelookupResponse, MimetypelookupErrorBody]`
- **Error**: `MimetypelookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MimetypelookupResponse` | `api_verve/models/v1_mimetypelookup_response.py` |
| `MimetypelookupErrorBody` | `api_verve/errors/mimetypelookup_error.py` |

### client.reference_data.portnumberlookup

- **Route**: `GET /v1/portnumberlookup`
- **Auth**: `api_key`
- **Signature**: `def portnumberlookup(port: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `port`
- **Params**: `port` — query
- **Returns (parsed)**: `V1PortnumberlookupResponse`
- **Returns (raw)**: `ApiResult[V1PortnumberlookupResponse, PortnumberlookupErrorBody]`
- **Error**: `PortnumberlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PortnumberlookupResponse` | `api_verve/models/v1_portnumberlookup_response.py` |
| `PortnumberlookupErrorBody` | `api_verve/errors/portnumberlookup_error.py` |

### client.reference_data.ringsizeconverter

- **Route**: `GET /v1/ringsizeconverter`
- **Auth**: `api_key`
- **Signature**: `def ringsizeconverter(size: str, from_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `size`, `from_`
- **Params**: `size` — query · `from_` — query `from`
- **Returns (parsed)**: `V1RingsizeconverterResponse`
- **Returns (raw)**: `ApiResult[V1RingsizeconverterResponse, RingsizeconverterErrorBody]`
- **Error**: `RingsizeconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RingsizeconverterResponse` | `api_verve/models/v1_ringsizeconverter_response.py` |
| `RingsizeconverterErrorBody` | `api_verve/errors/ringsizeconverter_error.py` |

### client.reference_data.shoesizeconverter

- **Route**: `GET /v1/shoesizeconverter`
- **Auth**: `api_key`
- **Signature**: `def shoesizeconverter(size: str, from_: str, *, gender: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `size`, `from_`
- **Params**: `size` — query · `from_` — query `from` · `gender` — query
- **Returns (parsed)**: `V1ShoesizeconverterResponse`
- **Returns (raw)**: `ApiResult[V1ShoesizeconverterResponse, ShoesizeconverterErrorBody]`
- **Error**: `ShoesizeconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ShoesizeconverterResponse` | `api_verve/models/v1_shoesizeconverter_response.py` |
| `ShoesizeconverterErrorBody` | `api_verve/errors/shoesizeconverter_error.py` |

### client.reference_data.srvparser

- **Route**: `POST /v1/srvparser`
- **Auth**: `api_key`
- **Signature**: `def srvparser(body: V1SrvparserRequest | V1SrvparserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SrvparserResponse`
- **Returns (raw)**: `ApiResult[V1SrvparserResponse, SrvparserErrorBody]`
- **Error**: `SrvparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SrvparserRequest` | `api_verve/models/v1_srvparser_request.py` |
| `V1SrvparserRequestDict` | `api_verve/models/v1_srvparser_request.py` |
| `V1SrvparserResponse` | `api_verve/models/v1_srvparser_response.py` |
| `SrvparserErrorBody` | `api_verve/errors/srvparser_error.py` |

