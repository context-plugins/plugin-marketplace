<!-- Generated file — do not edit; regenerated with the SDK. -->

# PlateDecoder — operations

Accessor: `client.plate_decoder` · Source: `cars_xe/apis/plate_decoder.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.plate_decoder.decode_plate

- **Route**: `GET /platedecoder`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def decode_plate(plate: str, state: str, *, country: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plate`, `state`
- **Params**: `plate` — query · `state` — query · `country` — query · `format_` — query `format`
- **Returns (parsed)**: `PlatedecoderResponse`
- **Returns (raw)**: `ApiResult[PlatedecoderResponse, DecodePlateErrorBody]`
- **Error**: `DecodePlateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 502, 504] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `cars_xe/models/enums/format.py` |
| `PlatedecoderResponse` | `cars_xe/models/platedecoder_response.py` |
| `DecodePlateErrorBody` | `cars_xe/errors/decode_plate_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.plate_decoder.decode_plate_v2

- **Route**: `GET /v2/platedecoder`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def decode_plate_v2(plate: str, *, country: str | None = None, state: str | None = None, district: str | None = None, require_vin: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plate`
- **Params**: `plate` — query · `country` — query · `state` — query · `district` — query · `require_vin` — query
- **Returns (parsed)**: `V2PlatedecoderResponse`
- **Returns (raw)**: `ApiResult[V2PlatedecoderResponse, DecodePlateV2ErrorBody]`
- **Error**: `DecodePlateV2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2PlatedecoderResponse` | `cars_xe/models/v2_platedecoder_response.py` |
| `DecodePlateV2ErrorBody` | `cars_xe/errors/decode_plate_v2_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.plate_decoder.decode_us_plate

- **Route**: `GET /v1/us-platedecoder`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def decode_us_plate(plate: str, state: str, *, decode_vin: DecodeVinOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plate`, `state`
- **Params**: `plate` — query · `state` — query · `decode_vin` — query `decodeVIN`
- **Returns (parsed)**: `V1UsPlatedecoderResponse`
- **Returns (raw)**: `ApiResult[V1UsPlatedecoderResponse, DecodeUsPlateErrorBody]`
- **Error**: `DecodeUsPlateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DecodeVinOrStr` | `cars_xe/models/enums/decode_vin.py` |
| `V1UsPlatedecoderResponse` | `cars_xe/models/v1_us_platedecoder_response.py` |
| `DecodeUsPlateErrorBody` | `cars_xe/errors/decode_us_plate_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

