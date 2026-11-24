<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountApi — operations

Accessor: `client.account_api` · Source: `odds_relay/apis/account_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account_api.get_pricing

- **Route**: `GET /v2/pricing`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_pricing(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PriceTable`
- **Returns (raw)**: `ApiResult[PriceTable, GetPricingErrorBody]`
- **Error**: `GetPricingErrorBody` — **Case A (typed)**
- **Error arms**: `Error400` [400] · `Error401` [401] · `Error403` [403] · `Error429` [429] · `Error500` [500] · `Error503` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `PriceTable` | `odds_relay/models/price_table.py` |
| `GetPricingErrorBody` | `odds_relay/errors/get_pricing_error.py` |
| `Error400` | `odds_relay/models/error400.py` |
| `Error401` | `odds_relay/models/error401.py` |
| `Error403` | `odds_relay/models/error403.py` |
| `Error429` | `odds_relay/models/error429.py` |
| `Error500` | `odds_relay/models/error500.py` |
| `Error503` | `odds_relay/models/error503.py` |

### client.account_api.get_usage

- **Route**: `GET /v2/usage`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Usage`
- **Returns (raw)**: `ApiResult[Usage, GetUsageErrorBody]`
- **Error**: `GetUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error400` [400] · `Error401` [401] · `Error403` [403] · `Error429` [429] · `Error500` [500] · `Error503` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `Usage` | `odds_relay/models/usage.py` |
| `GetUsageErrorBody` | `odds_relay/errors/get_usage_error.py` |
| `Error400` | `odds_relay/models/error400.py` |
| `Error401` | `odds_relay/models/error401.py` |
| `Error403` | `odds_relay/models/error403.py` |
| `Error429` | `odds_relay/models/error429.py` |
| `Error500` | `odds_relay/models/error500.py` |
| `Error503` | `odds_relay/models/error503.py` |

