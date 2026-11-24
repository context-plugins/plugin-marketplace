<!-- Generated file — do not edit; regenerated with the SDK. -->

# Licensing — operations

Accessor: `client.licensing` · Source: `soda/apis/licensing.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.licensing.get_api_v1_licensing_spu_consumption

- **Route**: `GET /api/v1/licensing/spuConsumption`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_licensing_spu_consumption(*, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query
- **Returns (parsed)**: `PublicApiSpuConsumptionResponse`
- **Returns (raw)**: `ApiResult[PublicApiSpuConsumptionResponse, GetApiV1LicensingSpuConsumptionErrorBody]`
- **Error**: `GetApiV1LicensingSpuConsumptionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiSpuConsumptionResponse` | `soda/models/public_api_spu_consumption_response.py` |
| `GetApiV1LicensingSpuConsumptionErrorBody` | `soda/errors/get_api_v1_licensing_spu_consumption_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

