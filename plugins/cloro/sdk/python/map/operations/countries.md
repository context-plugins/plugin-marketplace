<!-- Generated file — do not edit; regenerated with the SDK. -->

# Countries — operations

Accessor: `client.countries` · Source: `cloro/apis/countries.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.countries.get_countries

- **Route**: `GET /v1/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_countries(*, model: ModelOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `model` — query
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], GetCountriesErrorBody]`
- **Error**: `GetCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationErrorCloroDevCountriesApi` [400] · `AuthenticationErrorCloroDevCountriesApi` [401] · `NotFoundErrorCloroDevCountriesApi` [404] · `RateLimitErrorCloroDevCountriesApi` [429] · `InternalErrorCloroDevCountriesApi` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelOrStr` | `cloro/models/enums/model.py` |
| `GetCountriesErrorBody` | `cloro/errors/get_countries_error.py` |
| `ValidationErrorCloroDevCountriesApi` | `cloro/models/validation_error_cloro_dev_countries_api.py` |
| `AuthenticationErrorCloroDevCountriesApi` | `cloro/models/authentication_error_cloro_dev_countries_api.py` |
| `NotFoundErrorCloroDevCountriesApi` | `cloro/models/not_found_error_cloro_dev_countries_api.py` |
| `RateLimitErrorCloroDevCountriesApi` | `cloro/models/rate_limit_error_cloro_dev_countries_api.py` |
| `InternalErrorCloroDevCountriesApi` | `cloro/models/internal_error_cloro_dev_countries_api.py` |

