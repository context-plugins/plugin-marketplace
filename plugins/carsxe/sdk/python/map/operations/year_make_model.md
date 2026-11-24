<!-- Generated file — do not edit; regenerated with the SDK. -->

# YearMakeModel — operations

Accessor: `client.year_make_model` · Source: `cars_xe/apis/year_make_model.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.year_make_model.decode_obd_code

- **Route**: `GET /obdcodesdecoder`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def decode_obd_code(code: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `code`
- **Params**: `code` — query
- **Returns (parsed)**: `ObdcodesdecoderResponse`
- **Returns (raw)**: `ApiResult[ObdcodesdecoderResponse, DecodeObdCodeErrorBody]`
- **Error**: `DecodeObdCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObdcodesdecoderResponse` | `cars_xe/models/obdcodesdecoder_response.py` |
| `DecodeObdCodeErrorBody` | `cars_xe/errors/decode_obd_code_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.year_make_model.get_year_make_model

- **Route**: `GET /v1/ymm`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_year_make_model(year: str, make: str, model: str, *, trim: str | None = None, all_trim_options: AllTrimOptionsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `year`, `make`, `model`
- **Params**: `year` — query · `make` — query · `model` — query · `trim` — query · `all_trim_options` — query `allTrimOptions`
- **Returns (parsed)**: `V1YmmResponse`
- **Returns (raw)**: `ApiResult[V1YmmResponse, GetYearMakeModelErrorBody]`
- **Error**: `GetYearMakeModelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AllTrimOptionsOrStr` | `cars_xe/models/enums/all_trim_options.py` |
| `V1YmmResponse` | `cars_xe/models/v1_ymm_response.py` |
| `GetYearMakeModelErrorBody` | `cars_xe/errors/get_year_make_model_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.year_make_model.get_year_make_model_options

- **Route**: `GET /v1/ymm-options`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_year_make_model_options(*, dimension: DimensionOrStr | None = None, year: str | None = None, make: str | None = None, model: str | None = None, trim: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `dimension` — query · `year` — query · `make` — query · `model` — query · `trim` — query
- **Returns (parsed)**: `V1YmmOptionsResponse`
- **Returns (raw)**: `ApiResult[V1YmmOptionsResponse, GetYearMakeModelOptionsErrorBody]`
- **Error**: `GetYearMakeModelOptionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DimensionOrStr` | `cars_xe/models/enums/dimension.py` |
| `V1YmmOptionsResponse` | `cars_xe/models/v1_ymm_options_response.py` |
| `GetYearMakeModelOptionsErrorBody` | `cars_xe/errors/get_year_make_model_options_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

