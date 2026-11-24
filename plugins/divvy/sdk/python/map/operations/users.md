<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `divvy/apis/users.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.create_user

- **Route**: `POST /v3/spend/users`
- **Server**: `default`
- **Signature**: `def create_user(body: CreateUserRequestDto | CreateUserRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `UserResponseDto`
- **Returns (raw)**: `ApiResult[UserResponseDto, CreateUserErrorBody]`
- **Error**: `CreateUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateUserRequestDto` | `divvy/models/create_user_request_dto.py` |
| `CreateUserRequestDtoDict` | `divvy/models/create_user_request_dto.py` |
| `UserResponseDto` | `divvy/models/user_response_dto.py` |
| `CreateUserErrorBody` | `divvy/errors/create_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.users.delete_user

- **Route**: `DELETE /v3/spend/users/{userId}`
- **Server**: `default`
- **Signature**: `def delete_user(user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUserErrorBody]`
- **Error**: `DeleteUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUserErrorBody` | `divvy/errors/delete_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.users.get_current_user

- **Route**: `GET /v3/spend/users/current`
- **Server**: `default`
- **Signature**: `def get_current_user(*, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_token` — header `apiToken`
- **Returns (parsed)**: `UserResponseDto`
- **Returns (raw)**: `ApiResult[UserResponseDto, GetCurrentUserErrorBody]`
- **Error**: `GetCurrentUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserResponseDto` | `divvy/models/user_response_dto.py` |
| `GetCurrentUserErrorBody` | `divvy/errors/get_current_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.users.get_user

- **Route**: `GET /v3/spend/users/{userId}`
- **Server**: `default`
- **Signature**: `def get_user(user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `UserResponseDto`
- **Returns (raw)**: `ApiResult[UserResponseDto, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserResponseDto` | `divvy/models/user_response_dto.py` |
| `GetUserErrorBody` | `divvy/errors/get_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.users.list_users

- **Route**: `GET /v3/spend/users`
- **Server**: `default`
- **Signature**: `def list_users(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `max_` — query `max` · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoUserResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoUserResponseDto, ListUsersErrorBody]`
- **Error**: `ListUsersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoUserResponseDto` | `divvy/models/pagination_response_dto_user_response_dto.py` |
| `ListUsersErrorBody` | `divvy/errors/list_users_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.users.update_user

- **Route**: `PATCH /v3/spend/users/{userId}`
- **Server**: `default`
- **Signature**: `def update_user(user_id: str, body: UpdateUserRequestDto | UpdateUserRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `UserResponseDto`
- **Returns (raw)**: `ApiResult[UserResponseDto, UpdateUserErrorBody]`
- **Error**: `UpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateUserRequestDto` | `divvy/models/update_user_request_dto.py` |
| `UpdateUserRequestDtoDict` | `divvy/models/update_user_request_dto.py` |
| `UserResponseDto` | `divvy/models/user_response_dto.py` |
| `UpdateUserErrorBody` | `divvy/errors/update_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

