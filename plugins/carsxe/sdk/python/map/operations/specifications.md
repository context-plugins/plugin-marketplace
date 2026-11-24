<!-- Generated file — do not edit; regenerated with the SDK. -->

# Specifications — operations

Accessor: `client.specifications` · Source: `cars_xe/apis/specifications.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.specifications.get_international_vin_decoder

- **Route**: `GET /v1/international-vin-decoder`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_international_vin_decoder(vin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query
- **Returns (parsed)**: `V1InternationalVinDecoderResponse`
- **Returns (raw)**: `ApiResult[V1InternationalVinDecoderResponse, GetInternationalVinDecoderErrorBody]`
- **Error**: `GetInternationalVinDecoderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1InternationalVinDecoderResponse` | `cars_xe/models/v1_international_vin_decoder_response.py` |
| `GetInternationalVinDecoderErrorBody` | `cars_xe/errors/get_international_vin_decoder_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.specifications.get_vehicle_specs

- **Route**: `GET /specs`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_vehicle_specs(vin: str, *, format_: FormatOrStr | None = Format.JSON, deepdata: DeepdataOrStr | None = None, disable_int_vin_decoding: DisableIntVinDecodingOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query · `format_` — query `format` · `deepdata` — query · `disable_int_vin_decoding` — query `disableIntVINDecoding`
- **Returns (parsed)**: `SpecsResponse`
- **Returns (raw)**: `ApiResult[SpecsResponse, GetVehicleSpecsErrorBody]`
- **Error**: `GetVehicleSpecsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `cars_xe/models/enums/format.py` |
| `DeepdataOrStr` | `cars_xe/models/enums/deepdata.py` |
| `DisableIntVinDecodingOrStr` | `cars_xe/models/enums/disable_int_vin_decoding.py` |
| `SpecsResponse` | `cars_xe/models/specs_response.py` |
| `GetVehicleSpecsErrorBody` | `cars_xe/errors/get_vehicle_specs_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

