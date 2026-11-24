<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShippingRates — operations

Accessor: `client.shipping_rates` · Source: `comp_sniper/apis/shipping_rates.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.shipping_rates.get_shipping_rate_usage

- **Route**: `GET /v1/shipping/usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_shipping_rate_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ShippingRateUsageResponse`
- **Returns (raw)**: `ApiResult[ShippingRateUsageResponse, GetShippingRateUsageErrorBody]`
- **Error**: `GetShippingRateUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ShippingRateUsageResponse` | `comp_sniper/models/shipping_rate_usage_response.py` |
| `GetShippingRateUsageErrorBody` | `comp_sniper/errors/get_shipping_rate_usage_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.shipping_rates.get_shipping_rates

- **Route**: `POST /v1/shipping/rates`
- **Auth**: `bearer_auth`
- **Signature**: `def get_shipping_rates(body: ShippingRateRequest | ShippingRateRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `ShippingRateResponse`
- **Returns (raw)**: `ApiResult[ShippingRateResponse, GetShippingRatesErrorBody]`
- **Error**: `GetShippingRatesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 403, 409, 413, 422, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ShippingRateRequest` | `comp_sniper/models/shipping_rate_request.py` |
| `ShippingRateRequestDict` | `comp_sniper/models/shipping_rate_request.py` |
| `ShippingRateResponse` | `comp_sniper/models/shipping_rate_response.py` |
| `GetShippingRatesErrorBody` | `comp_sniper/errors/get_shipping_rates_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

