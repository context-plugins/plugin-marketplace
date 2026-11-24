<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.identities` · Source: `basiq/apis/identities.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.identities.get_user_identities

- **Route**: `GET /users/{userId}/identities`
- **Auth**: `services_token`
- **Signature**: `def get_user_identities(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `IdentitiesGetResponseResource`
- **Returns (raw)**: `ApiResult[IdentitiesGetResponseResource, GetUserIdentitiesErrorBody]`
- **Error**: `GetUserIdentitiesErrorBody` — **Case A (typed)**
- **Error arms**: `UsersIdentities400Error1` [400] · `UsersIdentities403Error1` [403] · `UsersIdentities500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdentitiesGetResponseResource` | `basiq/models/identities_get_response_resource.py` |
| `GetUserIdentitiesErrorBody` | `basiq/errors/get_user_identities_error.py` |
| `UsersIdentities400Error1` | `basiq/models/users_identities400_error1.py` |
| `UsersIdentities403Error1` | `basiq/models/users_identities403_error1.py` |
| `UsersIdentities500Error1` | `basiq/models/users_identities500_error1.py` |

### client.identities.get_user_identity

- **Route**: `GET /users/{userId}/identities/{identityId}`
- **Auth**: `services_token`
- **Signature**: `def get_user_identity(user_id: str, identity_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `identity_id`
- **Params**: `user_id` — path `userId` · `identity_id` — path `identityId`
- **Returns (parsed)**: `UsersIdentitiesResponse`
- **Returns (raw)**: `ApiResult[UsersIdentitiesResponse, GetUserIdentityErrorBody]`
- **Error**: `GetUserIdentityErrorBody` — **Case A (typed)**
- **Error arms**: `UsersIdentities400Error1` [400] · `UsersIdentities403Error1` [403] · `UsersIdentities404Error1` [404] · `UsersIdentities500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersIdentitiesResponse` | `basiq/models/users_identities_response.py` |
| `GetUserIdentityErrorBody` | `basiq/errors/get_user_identity_error.py` |
| `UsersIdentities400Error1` | `basiq/models/users_identities400_error1.py` |
| `UsersIdentities403Error1` | `basiq/models/users_identities403_error1.py` |
| `UsersIdentities404Error1` | `basiq/models/users_identities404_error1.py` |
| `UsersIdentities500Error1` | `basiq/models/users_identities500_error1.py` |

