<!-- Generated file — do not edit; regenerated with the SDK. -->

# Advisories — operations

Accessor: `client.advisories` · Source: `dynamic_feed/apis/advisories.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.advisories.advisories_advisories_get

- **Route**: `GET /advisories`
- **Signature**: `def advisories_advisories_get(*, q: str | None = None, package: str | None = None, ecosystem: str | None = None, severity: str | None = None, min_cvss: float | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `package` — query · `ecosystem` — query · `severity` — query · `min_cvss` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AdvisoriesAdvisoriesGetErrorBody]`
- **Error**: `AdvisoriesAdvisoriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdvisoriesAdvisoriesGetErrorBody` | `dynamic_feed/errors/advisories_advisories_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.advisories.advisories_check_advisories_check_get

- **Route**: `GET /advisories/check`
- **Signature**: `def advisories_check_advisories_check_get(package: str, *, version: str | None = None, ecosystem: str | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `package`
- **Params**: `package` — query · `version` — query · `ecosystem` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AdvisoriesCheckAdvisoriesCheckGetErrorBody]`
- **Error**: `AdvisoriesCheckAdvisoriesCheckGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdvisoriesCheckAdvisoriesCheckGetErrorBody` | `dynamic_feed/errors/advisories_check_advisories_check_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

