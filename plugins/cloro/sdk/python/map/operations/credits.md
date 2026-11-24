<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credits — operations

Accessor: `client.credits` · Source: `cloro/apis/credits.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.credits.get_credits

- **Route**: `GET /v1/credits`
- **Auth**: `bearer_auth`
- **Signature**: `def get_credits(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `CreditsResponse`
- **Returns (raw)**: `ApiResult[CreditsResponse, GetCreditsErrorBody]`
- **Error**: `GetCreditsErrorBody` — **Case A (typed)**
- **Error arms**: `AuthenticationErrorCloroDevCreditsApi` [401] · `RateLimitErrorCloroDevCreditsApi` [429] · `InternalErrorCloroDevCreditsApi` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditsResponse` | `cloro/models/credits_response.py` |
| `GetCreditsErrorBody` | `cloro/errors/get_credits_error.py` |
| `AuthenticationErrorCloroDevCreditsApi` | `cloro/models/authentication_error_cloro_dev_credits_api.py` |
| `RateLimitErrorCloroDevCreditsApi` | `cloro/models/rate_limit_error_cloro_dev_credits_api.py` |
| `InternalErrorCloroDevCreditsApi` | `cloro/models/internal_error_cloro_dev_credits_api.py` |

