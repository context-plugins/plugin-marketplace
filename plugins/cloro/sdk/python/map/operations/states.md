<!-- Generated file — do not edit; regenerated with the SDK. -->

# States — operations

Accessor: `client.states` · Source: `cloro/apis/states.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.states.get_states

- **Route**: `GET /v1/states`
- **Auth**: `bearer_auth`
- **Signature**: `def get_states(country: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query
- **Returns (parsed)**: `list[V1StatesResponse]`
- **Returns (raw)**: `ApiResult[list[V1StatesResponse], GetStatesErrorBody]`
- **Error**: `GetStatesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevCountriesApi` [400] · `AuthenticationErrorCloroDevCountriesApi` [401] · `RateLimitErrorCloroDevStatesApi` [429] · `InternalErrorCloroDevCountriesApi` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StatesResponse` | `cloro/models/v1_states_response.py` |
| `GetStatesErrorBody` | `cloro/errors/get_states_error.py` |
| `ValidationErrorCloroDevCountriesApi` | `cloro/models/validation_error_cloro_dev_countries_api.py` |
| `AuthenticationErrorCloroDevCountriesApi` | `cloro/models/authentication_error_cloro_dev_countries_api.py` |
| `RateLimitErrorCloroDevStatesApi` | `cloro/models/rate_limit_error_cloro_dev_states_api.py` |
| `InternalErrorCloroDevCountriesApi` | `cloro/models/internal_error_cloro_dev_countries_api.py` |

