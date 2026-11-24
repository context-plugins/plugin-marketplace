<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskIndicators — operations

Accessor: `client.risk_indicators` · Source: `deliverd/apis/risk_indicators.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.risk_indicators.get_api_v1_risk_indicators

- **Route**: `GET /api/v1/risk-indicators`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_risk_indicators(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `period` — query
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1RiskIndicatorsErrorBody]`
- **Error**: `GetApiV1RiskIndicatorsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiV1RiskIndicatorsErrorBody` | `deliverd/errors/get_api_v1_risk_indicators_error.py` |

### client.risk_indicators.post_api_v1_risk_indicators_by_key_readings

- **Route**: `POST /api/v1/risk-indicators/{key}/readings`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_risk_indicators_by_key_readings(key: str, *, body: ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1RiskIndicatorsByKeyReadingsErrorBody]`
- **Error**: `PostApiV1RiskIndicatorsByKeyReadingsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1RiskIndicatorsReadingsRequest` | `deliverd/models/api_v1_risk_indicators_readings_request.py` |
| `ApiV1RiskIndicatorsReadingsRequestDict` | `deliverd/models/api_v1_risk_indicators_readings_request.py` |
| `PostApiV1RiskIndicatorsByKeyReadingsErrorBody` | `deliverd/errors/post_api_v1_risk_indicators_by_key_readings_error.py` |

