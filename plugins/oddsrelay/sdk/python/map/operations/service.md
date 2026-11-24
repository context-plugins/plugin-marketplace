<!-- Generated file — do not edit; regenerated with the SDK. -->

# Service — operations

Accessor: `client.service` · Source: `odds_relay/apis/service.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service.get_coverage

- **Route**: `GET /v2/coverage`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_coverage(*, region: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `region` — query
- **Returns (parsed)**: `V2CoverageResponse`
- **Returns (raw)**: `ApiResult[V2CoverageResponse, GetCoverageErrorBody]`
- **Error**: `GetCoverageErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayServiceApi` [400] · `Error401OddsRelayServiceApi` [401] · `Error403OddsRelayServiceApi` [403] · `Error404OddsRelayServiceApi` [404] · `Error429OddsRelayServiceApi` [429] · `Error500OddsRelayServiceApi` [500] · `Error503OddsRelayServiceApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `V2CoverageResponse` | `odds_relay/models/unions/v2_coverage_response.py` |
| `GetCoverageErrorBody` | `odds_relay/errors/get_coverage_error.py` |
| `Error400OddsRelayServiceApi` | `odds_relay/models/error400_odds_relay_service_api.py` |
| `Error401OddsRelayServiceApi` | `odds_relay/models/error401_odds_relay_service_api.py` |
| `Error403OddsRelayServiceApi` | `odds_relay/models/error403_odds_relay_service_api.py` |
| `Error404OddsRelayServiceApi` | `odds_relay/models/error404_odds_relay_service_api.py` |
| `Error429OddsRelayServiceApi` | `odds_relay/models/error429_odds_relay_service_api.py` |
| `Error500OddsRelayServiceApi` | `odds_relay/models/error500_odds_relay_service_api.py` |
| `Error503OddsRelayServiceApi` | `odds_relay/models/error503_odds_relay_service_api.py` |

### client.service.get_health

- **Route**: `GET /v2/health`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, GetHealthErrorBody]`
- **Error**: `GetHealthErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayServiceApi` [400] · `Error401OddsRelayServiceApi` [401] · `Error403OddsRelayServiceApi` [403] · `Error429OddsRelayServiceApi` [429] · `Error500OddsRelayServiceApi` [500] · `Error503OddsRelayServiceApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `Health` | `odds_relay/models/health.py` |
| `GetHealthErrorBody` | `odds_relay/errors/get_health_error.py` |
| `Error400OddsRelayServiceApi` | `odds_relay/models/error400_odds_relay_service_api.py` |
| `Error401OddsRelayServiceApi` | `odds_relay/models/error401_odds_relay_service_api.py` |
| `Error403OddsRelayServiceApi` | `odds_relay/models/error403_odds_relay_service_api.py` |
| `Error429OddsRelayServiceApi` | `odds_relay/models/error429_odds_relay_service_api.py` |
| `Error500OddsRelayServiceApi` | `odds_relay/models/error500_odds_relay_service_api.py` |
| `Error503OddsRelayServiceApi` | `odds_relay/models/error503_odds_relay_service_api.py` |

### client.service.get_liveness

- **Route**: `GET /healthz`
- **Signature**: `def get_liveness(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, GetLivenessErrorBody]`
- **Error**: `GetLivenessErrorBody` — **Case A (typed)**
- **Error arms**: `str` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `GetLivenessErrorBody` | `odds_relay/errors/get_liveness_error.py` |

### client.service.get_open_api

- **Route**: `GET /v2/openapi.json`
- **Signature**: `def get_open_api(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetOpenApiErrorBody]`
- **Error**: `GetOpenApiErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayServiceApi` [400] · `Error429OddsRelayServiceApi` [429] · `Error500OddsRelayServiceApi` [500] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `GetOpenApiErrorBody` | `odds_relay/errors/get_open_api_error.py` |
| `Error400OddsRelayServiceApi` | `odds_relay/models/error400_odds_relay_service_api.py` |
| `Error429OddsRelayServiceApi` | `odds_relay/models/error429_odds_relay_service_api.py` |
| `Error500OddsRelayServiceApi` | `odds_relay/models/error500_odds_relay_service_api.py` |

### client.service.get_status

- **Route**: `GET /v2/status`
- **Signature**: `def get_status(*, region: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `region` — query
- **Returns (parsed)**: `StatusOddsRelayServiceApi`
- **Returns (raw)**: `ApiResult[StatusOddsRelayServiceApi, GetStatusErrorBody]`
- **Error**: `GetStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayServiceApi` [400] · `Error404OddsRelayServiceApi` [404] · `Error429OddsRelayServiceApi` [429] · `Error500OddsRelayServiceApi` [500] · `Error503OddsRelayServiceApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `StatusOddsRelayServiceApi` | `odds_relay/models/status_odds_relay_service_api.py` |
| `GetStatusErrorBody` | `odds_relay/errors/get_status_error.py` |
| `Error400OddsRelayServiceApi` | `odds_relay/models/error400_odds_relay_service_api.py` |
| `Error404OddsRelayServiceApi` | `odds_relay/models/error404_odds_relay_service_api.py` |
| `Error429OddsRelayServiceApi` | `odds_relay/models/error429_odds_relay_service_api.py` |
| `Error500OddsRelayServiceApi` | `odds_relay/models/error500_odds_relay_service_api.py` |
| `Error503OddsRelayServiceApi` | `odds_relay/models/error503_odds_relay_service_api.py` |

