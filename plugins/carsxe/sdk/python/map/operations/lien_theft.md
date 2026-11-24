<!-- Generated file — do not edit; regenerated with the SDK. -->

# LienTheft — operations

Accessor: `client.lien_theft` · Source: `cars_xe/apis/lien_theft.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.lien_theft.get_lien_theft

- **Route**: `GET /v1/lien-theft`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_lien_theft(vin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query
- **Returns (parsed)**: `V1LienTheftResponse`
- **Returns (raw)**: `ApiResult[V1LienTheftResponse, GetLienTheftErrorBody]`
- **Error**: `GetLienTheftErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1LienTheftResponse` | `cars_xe/models/v1_lien_theft_response.py` |
| `GetLienTheftErrorBody` | `cars_xe/errors/get_lien_theft_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

