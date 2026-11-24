<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthLinks — operations

Accessor: `client.auth_links` · Source: `basiq/apis/auth_links.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.auth_links.delete_auth_link

- **Route**: `DELETE /users/{userId}/auth_link`
- **Auth**: `services_token`
- **Signature**: `def delete_auth_link(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAuthLinkErrorBody]`
- **Error**: `DeleteAuthLinkErrorBody` — **Case A (typed)**
- **Error arms**: `UsersAuthLink400Error1` [400] · `UsersAuthLink401Error1` [401] · `UsersAuthLink404Error1` [404] · `UsersAuthLink500Error1` [500] · `UsersAuthLink503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAuthLinkErrorBody` | `basiq/errors/delete_auth_link_error.py` |
| `UsersAuthLink400Error1` | `basiq/models/users_auth_link400_error1.py` |
| `UsersAuthLink401Error1` | `basiq/models/users_auth_link401_error1.py` |
| `UsersAuthLink404Error1` | `basiq/models/users_auth_link404_error1.py` |
| `UsersAuthLink500Error1` | `basiq/models/users_auth_link500_error1.py` |
| `UsersAuthLink503Error1` | `basiq/models/users_auth_link503_error1.py` |

### client.auth_links.get_auth_link

- **Route**: `GET /users/{userId}/auth_link`
- **Auth**: `services_token`
- **Signature**: `def get_auth_link(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `UsersAuthLinkResponse1`
- **Returns (raw)**: `ApiResult[UsersAuthLinkResponse1, GetAuthLinkErrorBody]`
- **Error**: `GetAuthLinkErrorBody` — **Case A (typed)**
- **Error arms**: `UsersAuthLink400Error1` [400] · `UsersAuthLink401Error1` [401] · `UsersAuthLink403Error1` [403] · `UsersAuthLink404Error1` [404] · `UsersAuthLink410Error1` [410] · `UsersAuthLink500Error1` [500] · `UsersAuthLink503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersAuthLinkResponse1` | `basiq/models/users_auth_link_response1.py` |
| `GetAuthLinkErrorBody` | `basiq/errors/get_auth_link_error.py` |
| `UsersAuthLink400Error1` | `basiq/models/users_auth_link400_error1.py` |
| `UsersAuthLink401Error1` | `basiq/models/users_auth_link401_error1.py` |
| `UsersAuthLink403Error1` | `basiq/models/users_auth_link403_error1.py` |
| `UsersAuthLink404Error1` | `basiq/models/users_auth_link404_error1.py` |
| `UsersAuthLink410Error1` | `basiq/models/users_auth_link410_error1.py` |
| `UsersAuthLink500Error1` | `basiq/models/users_auth_link500_error1.py` |
| `UsersAuthLink503Error1` | `basiq/models/users_auth_link503_error1.py` |

### client.auth_links.post_auth_link

- **Route**: `POST /users/{userId}/auth_link`
- **Auth**: `services_token`
- **Signature**: `def post_auth_link(user_id: str, *, body: UsersAuthLinkRequest | UsersAuthLinkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `UsersAuthLinkResponse`
- **Returns (raw)**: `ApiResult[UsersAuthLinkResponse, PostAuthLinkErrorBody]`
- **Error**: `PostAuthLinkErrorBody` — **Case A (typed)**
- **Error arms**: `UsersAuthLink400Error1` [400] · `UsersAuthLink401Error1` [401] · `UsersAuthLink403Error1` [403] · `UsersAuthLink404Error1` [404] · `UsersAuthLink500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersAuthLinkRequest` | `basiq/models/users_auth_link_request.py` |
| `UsersAuthLinkRequestDict` | `basiq/models/users_auth_link_request.py` |
| `UsersAuthLinkResponse` | `basiq/models/users_auth_link_response.py` |
| `PostAuthLinkErrorBody` | `basiq/errors/post_auth_link_error.py` |
| `UsersAuthLink400Error1` | `basiq/models/users_auth_link400_error1.py` |
| `UsersAuthLink401Error1` | `basiq/models/users_auth_link401_error1.py` |
| `UsersAuthLink403Error1` | `basiq/models/users_auth_link403_error1.py` |
| `UsersAuthLink404Error1` | `basiq/models/users_auth_link404_error1.py` |
| `UsersAuthLink500Error1` | `basiq/models/users_auth_link500_error1.py` |

