<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `basiq/apis/users.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.create_user

- **Route**: `POST /users`
- **Auth**: `services_token`
- **Signature**: `def create_user(body: UsersRequest | UsersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UserPostResponse`
- **Returns (raw)**: `ApiResult[UserPostResponse, CreateUserErrorBody]`
- **Error**: `CreateUserErrorBody` — **Case A (typed)**
- **Error arms**: `Users400Error1` [400] · `Users401Error1` [401] · `Users403Error1` [403] · `Users404Error1` [404] · `Users500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersRequest` | `basiq/models/users_request.py` |
| `UsersRequestDict` | `basiq/models/users_request.py` |
| `UserPostResponse` | `basiq/models/user_post_response.py` |
| `CreateUserErrorBody` | `basiq/errors/create_user_error.py` |
| `Users400Error1` | `basiq/models/users400_error1.py` |
| `Users401Error1` | `basiq/models/users401_error1.py` |
| `Users403Error1` | `basiq/models/users403_error1.py` |
| `Users404Error1` | `basiq/models/users404_error1.py` |
| `Users500Error1` | `basiq/models/users500_error1.py` |

### client.users.delete_user

- **Route**: `DELETE /users/{userId}`
- **Auth**: `services_token`
- **Signature**: `def delete_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUserErrorBody]`
- **Error**: `DeleteUserErrorBody` — **Case A (typed)**
- **Error arms**: `Users400Error1` [400] · `Users401Error1` [401] · `Users403Error1` [403] · `Users404Error1` [404] · `Users500Error1` [500] · `Users503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUserErrorBody` | `basiq/errors/delete_user_error.py` |
| `Users400Error1` | `basiq/models/users400_error1.py` |
| `Users401Error1` | `basiq/models/users401_error1.py` |
| `Users403Error1` | `basiq/models/users403_error1.py` |
| `Users404Error1` | `basiq/models/users404_error1.py` |
| `Users500Error1` | `basiq/models/users500_error1.py` |
| `Users503Error1` | `basiq/models/users503_error1.py` |

### client.users.get_user

- **Route**: `GET /users/{userId}`
- **Auth**: `services_token`
- **Signature**: `def get_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `UserGetResponse`
- **Returns (raw)**: `ApiResult[UserGetResponse, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `Users400Error1` [400] · `Users401Error1` [401] · `Users403Error1` [403] · `Users404Error1` [404] · `Users500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserGetResponse` | `basiq/models/user_get_response.py` |
| `GetUserErrorBody` | `basiq/errors/get_user_error.py` |
| `Users400Error1` | `basiq/models/users400_error1.py` |
| `Users401Error1` | `basiq/models/users401_error1.py` |
| `Users403Error1` | `basiq/models/users403_error1.py` |
| `Users404Error1` | `basiq/models/users404_error1.py` |
| `Users500Error1` | `basiq/models/users500_error1.py` |

### client.users.update_user

- **Route**: `POST /users/{userId}`
- **Auth**: `services_token`
- **Signature**: `def update_user(user_id: str, body: UsersRequest1 | UsersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `UserPostResponse`
- **Returns (raw)**: `ApiResult[UserPostResponse, UpdateUserErrorBody]`
- **Error**: `UpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `Users400Error1` [400] · `Users401Error1` [401] · `Users403Error1` [403] · `Users404Error1` [404] · `Users500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersRequest1` | `basiq/models/users_request1.py` |
| `UsersRequest1Dict` | `basiq/models/users_request1.py` |
| `UserPostResponse` | `basiq/models/user_post_response.py` |
| `UpdateUserErrorBody` | `basiq/errors/update_user_error.py` |
| `Users400Error1` | `basiq/models/users400_error1.py` |
| `Users401Error1` | `basiq/models/users401_error1.py` |
| `Users403Error1` | `basiq/models/users403_error1.py` |
| `Users404Error1` | `basiq/models/users404_error1.py` |
| `Users500Error1` | `basiq/models/users500_error1.py` |

