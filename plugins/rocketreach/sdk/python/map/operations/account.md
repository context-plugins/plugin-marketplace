<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `rocket_reach/apis/account.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.create_new_api_key

- **Route**: `POST /account/key/`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_new_api_key(*, api_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_key` — form field
- **Returns (parsed)**: `ApiKey`
- **Returns (raw)**: `ApiResult[ApiKey, CreateNewApiKeyErrorBody]`
- **Error**: `CreateNewApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiKey` | `rocket_reach/models/api_key.py` |
| `CreateNewApiKeyErrorBody` | `rocket_reach/errors/create_new_api_key_error.py` |

### client.account.get_account

- **Route**: `GET /account/`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def get_account(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UserModel`
- **Returns (raw)**: `ApiResult[UserModel, GetAccountErrorBody]`
- **Error**: `GetAccountErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `UserModel` | `rocket_reach/models/user_model.py` |
| `GetAccountErrorBody` | `rocket_reach/errors/get_account_error.py` |

### client.account.get_universal_account

- **Route**: `GET /universal/account/`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def get_universal_account(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UniversalCreditsUserModelWithExtraAttributes`
- **Returns (raw)**: `ApiResult[UniversalCreditsUserModelWithExtraAttributes, GetUniversalAccountErrorBody]`
- **Error**: `GetUniversalAccountErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `UniversalCreditsUserModelWithExtraAttributes` | `rocket_reach/models/universal_credits_user_model_with_extra_attributes.py` |
| `GetUniversalAccountErrorBody` | `rocket_reach/errors/get_universal_account_error.py` |

