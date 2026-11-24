<!-- Generated file — do not edit; regenerated with the SDK. -->

# Consents — operations

Accessor: `client.consents` · Source: `basiq/apis/consents.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.consents.delete_consent

- **Route**: `DELETE /users/{userId}/consents/{consentId}`
- **Auth**: `services_token`
- **Signature**: `def delete_consent(user_id: str, consent_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `consent_id`
- **Params**: `user_id` — path `userId` · `consent_id` — path `consentId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteConsentErrorBody]`
- **Error**: `DeleteConsentErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConsents400Error1` [400] · `UsersConsents401Error1` [401] · `UsersConsents403Error1` [403] · `UsersConsents404Error1` [404] · `UsersConsents500Error1` [500] · `UsersConsents503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteConsentErrorBody` | `basiq/errors/delete_consent_error.py` |
| `UsersConsents400Error1` | `basiq/models/users_consents400_error1.py` |
| `UsersConsents401Error1` | `basiq/models/users_consents401_error1.py` |
| `UsersConsents403Error1` | `basiq/models/users_consents403_error1.py` |
| `UsersConsents404Error1` | `basiq/models/users_consents404_error1.py` |
| `UsersConsents500Error1` | `basiq/models/users_consents500_error1.py` |
| `UsersConsents503Error1` | `basiq/models/users_consents503_error1.py` |

### client.consents.get_consents

- **Route**: `GET /users/{userId}/consents`
- **Auth**: `services_token`
- **Signature**: `def get_consents(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `UsersConsentsResponse`
- **Returns (raw)**: `ApiResult[UsersConsentsResponse, GetConsentsErrorBody]`
- **Error**: `GetConsentsErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConsents400Error1` [400] · `UsersConsents401Error1` [401] · `UsersConsents403Error1` [403] · `UsersConsents404Error1` [404] · `UsersConsents500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersConsentsResponse` | `basiq/models/users_consents_response.py` |
| `GetConsentsErrorBody` | `basiq/errors/get_consents_error.py` |
| `UsersConsents400Error1` | `basiq/models/users_consents400_error1.py` |
| `UsersConsents401Error1` | `basiq/models/users_consents401_error1.py` |
| `UsersConsents403Error1` | `basiq/models/users_consents403_error1.py` |
| `UsersConsents404Error1` | `basiq/models/users_consents404_error1.py` |
| `UsersConsents500Error1` | `basiq/models/users_consents500_error1.py` |

