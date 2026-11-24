<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataValidation — operations

Accessor: `client.data_validation` · Source: `api_verve/apis/data_validation.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_validation.cardvalidator

- **Route**: `GET /v1/cardvalidator`
- **Auth**: `api_key`
- **Signature**: `def cardvalidator(number: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `number`
- **Params**: `number` — query
- **Returns (parsed)**: `V1CardvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1CardvalidatorResponse, CardvalidatorErrorBody]`
- **Error**: `CardvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CardvalidatorResponse` | `api_verve/models/v1_cardvalidator_response.py` |
| `CardvalidatorErrorBody` | `api_verve/errors/cardvalidator_error.py` |

### client.data_validation.disposablephone

- **Route**: `GET /v1/disposablephone`
- **Auth**: `api_key`
- **Signature**: `def disposablephone(phone: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `phone`
- **Params**: `phone` — query
- **Returns (parsed)**: `V1DisposablephoneResponse`
- **Returns (raw)**: `ApiResult[V1DisposablephoneResponse, DisposablephoneErrorBody]`
- **Error**: `DisposablephoneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DisposablephoneResponse` | `api_verve/models/v1_disposablephone_response.py` |
| `DisposablephoneErrorBody` | `api_verve/errors/disposablephone_error.py` |

### client.data_validation.emaildisposablechecker

- **Route**: `GET /v1/emaildisposablechecker`
- **Auth**: `api_key`
- **Signature**: `def emaildisposablechecker(email: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `email`
- **Params**: `email` — query
- **Returns (parsed)**: `V1EmaildisposablecheckerResponse`
- **Returns (raw)**: `ApiResult[V1EmaildisposablecheckerResponse, EmaildisposablecheckerErrorBody]`
- **Error**: `EmaildisposablecheckerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EmaildisposablecheckerResponse` | `api_verve/models/v1_emaildisposablechecker_response.py` |
| `EmaildisposablecheckerErrorBody` | `api_verve/errors/emaildisposablechecker_error.py` |

### client.data_validation.emailvalidator

- **Route**: `GET /v1/emailvalidator`
- **Auth**: `api_key`
- **Signature**: `def emailvalidator(email: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `email`
- **Params**: `email` — query
- **Returns (parsed)**: `V1EmailvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1EmailvalidatorResponse, EmailvalidatorErrorBody]`
- **Error**: `EmailvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EmailvalidatorResponse` | `api_verve/models/v1_emailvalidator_response.py` |
| `EmailvalidatorErrorBody` | `api_verve/errors/emailvalidator_error.py` |

### client.data_validation.passwordstrength

- **Route**: `GET /v1/passwordstrength`
- **Auth**: `api_key`
- **Signature**: `def passwordstrength(password: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `password`
- **Params**: `password` — query
- **Returns (parsed)**: `V1PasswordstrengthResponse`
- **Returns (raw)**: `ApiResult[V1PasswordstrengthResponse, PasswordstrengthErrorBody]`
- **Error**: `PasswordstrengthErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PasswordstrengthResponse` | `api_verve/models/v1_passwordstrength_response.py` |
| `PasswordstrengthErrorBody` | `api_verve/errors/passwordstrength_error.py` |

### client.data_validation.phonenumbervalidator

- **Route**: `GET /v1/phonenumbervalidator`
- **Auth**: `api_key`
- **Signature**: `def phonenumbervalidator(number: str, country: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `number`, `country`
- **Params**: `number` — query · `country` — query
- **Returns (parsed)**: `V1PhonenumbervalidatorResponse`
- **Returns (raw)**: `ApiResult[V1PhonenumbervalidatorResponse, PhonenumbervalidatorErrorBody]`
- **Error**: `PhonenumbervalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PhonenumbervalidatorResponse` | `api_verve/models/v1_phonenumbervalidator_response.py` |
| `PhonenumbervalidatorErrorBody` | `api_verve/errors/phonenumbervalidator_error.py` |

### client.data_validation.seovalidator

- **Route**: `POST /v1/seovalidator`
- **Auth**: `api_key`
- **Signature**: `def seovalidator(body: V1SeovalidatorRequest | V1SeovalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SeovalidatorResponse`
- **Returns (raw)**: `ApiResult[V1SeovalidatorResponse, SeovalidatorErrorBody]`
- **Error**: `SeovalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SeovalidatorRequest` | `api_verve/models/v1_seovalidator_request.py` |
| `V1SeovalidatorRequestDict` | `api_verve/models/v1_seovalidator_request.py` |
| `V1SeovalidatorResponse` | `api_verve/models/v1_seovalidator_response.py` |
| `SeovalidatorErrorBody` | `api_verve/errors/seovalidator_error.py` |

### client.data_validation.spamdetector

- **Route**: `POST /v1/spamdetector`
- **Auth**: `api_key`
- **Signature**: `def spamdetector(body: V1SpamdetectorRequest | V1SpamdetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SpamdetectorResponse`
- **Returns (raw)**: `ApiResult[V1SpamdetectorResponse, SpamdetectorErrorBody]`
- **Error**: `SpamdetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SpamdetectorRequest` | `api_verve/models/v1_spamdetector_request.py` |
| `V1SpamdetectorRequestDict` | `api_verve/models/v1_spamdetector_request.py` |
| `V1SpamdetectorResponse` | `api_verve/models/v1_spamdetector_response.py` |
| `SpamdetectorErrorBody` | `api_verve/errors/spamdetector_error.py` |

### client.data_validation.usernameprofanity

- **Route**: `GET /v1/usernameprofanity`
- **Auth**: `api_key`
- **Signature**: `def usernameprofanity(username: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`
- **Params**: `username` — query
- **Returns (parsed)**: `V1UsernameprofanityResponse`
- **Returns (raw)**: `ApiResult[V1UsernameprofanityResponse, UsernameprofanityErrorBody]`
- **Error**: `UsernameprofanityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UsernameprofanityResponse` | `api_verve/models/v1_usernameprofanity_response.py` |
| `UsernameprofanityErrorBody` | `api_verve/errors/usernameprofanity_error.py` |

