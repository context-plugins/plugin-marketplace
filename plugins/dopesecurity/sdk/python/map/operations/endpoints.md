<!-- Generated file — do not edit; regenerated with the SDK. -->

# Endpoints — operations

Accessor: `client.endpoints` · Source: `dope_security/apis/endpoints.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.endpoints.search_endpoints

- **Route**: `GET /endpoints/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_endpoints(*, id_: str | None = None, email_id: str | None = None, device_name: str | None = None, user_id: str | None = None, os_version: str | None = None, status: list[StatusOrStr] | None = None, debug_state: list[DebugStateOrStr] | None = None, fallback_mode: FallbackModeOrStr | None = None, location_id: str | None = None, agent_version: str | None = None, first: int | None = 50, after: str | None = None, order: OrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `id_` — query `id` · `email_id` — query `emailId` · `device_name` — query `deviceName` · `user_id` — query `userId` · `os_version` — query `osVersion` · `status` — query · `debug_state` — query `debugState` · `fallback_mode` — query `fallbackMode` · `location_id` — query `locationId` · `agent_version` — query `agentVersion` · `first` — query · `after` — query · `order` — query
- **Returns (parsed)**: `EndpointsSearchResponse`
- **Returns (raw)**: `ApiResult[EndpointsSearchResponse, SearchEndpointsErrorBody]`
- **Error**: `SearchEndpointsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusOrStr` | `dope_security/models/enums/status.py` |
| `DebugStateOrStr` | `dope_security/models/enums/debug_state.py` |
| `FallbackModeOrStr` | `dope_security/models/enums/fallback_mode.py` |
| `OrderOrStr` | `dope_security/models/enums/order.py` |
| `EndpointsSearchResponse` | `dope_security/models/endpoints_search_response.py` |
| `SearchEndpointsErrorBody` | `dope_security/errors/search_endpoints_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

