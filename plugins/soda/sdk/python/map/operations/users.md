<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `soda/apis/users.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.delete_api_v1_user_groups_user_group_id

- **Route**: `DELETE /api/v1/userGroups/{userGroupId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_user_groups_user_group_id(user_group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_group_id`
- **Params**: `user_group_id` — path `userGroupId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteApiV1UserGroupsUserGroupIdErrorBody]`
- **Error**: `DeleteApiV1UserGroupsUserGroupIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiV1UserGroupsUserGroupIdErrorBody` | `soda/errors/delete_api_v1_user_groups_user_group_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.get_api_v1_user_groups

- **Route**: `GET /api/v1/userGroups`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_user_groups(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `search` — query · `size` — query
- **Returns (parsed)**: `PublicApiUserGroupsResponse`
- **Returns (raw)**: `ApiResult[PublicApiUserGroupsResponse, GetApiV1UserGroupsErrorBody]`
- **Error**: `GetApiV1UserGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUserGroupsResponse` | `soda/models/public_api_user_groups_response.py` |
| `GetApiV1UserGroupsErrorBody` | `soda/errors/get_api_v1_user_groups_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.get_api_v1_user_groups_user_group_id

- **Route**: `GET /api/v1/userGroups/{userGroupId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_user_groups_user_group_id(user_group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_group_id`
- **Params**: `user_group_id` — path `userGroupId`
- **Returns (parsed)**: `UserGroupContentDto`
- **Returns (raw)**: `ApiResult[UserGroupContentDto, GetApiV1UserGroupsUserGroupIdErrorBody]`
- **Error**: `GetApiV1UserGroupsUserGroupIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserGroupContentDto` | `soda/models/user_group_content_dto.py` |
| `GetApiV1UserGroupsUserGroupIdErrorBody` | `soda/errors/get_api_v1_user_groups_user_group_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.get_api_v1_users

- **Route**: `GET /api/v1/users`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_users(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `search` — query · `size` — query
- **Returns (parsed)**: `PublicApiUsersResponse`
- **Returns (raw)**: `ApiResult[PublicApiUsersResponse, GetApiV1UsersErrorBody]`
- **Error**: `GetApiV1UsersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUsersResponse` | `soda/models/public_api_users_response.py` |
| `GetApiV1UsersErrorBody` | `soda/errors/get_api_v1_users_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.post_api_v1_user_groups

- **Route**: `POST /api/v1/userGroups`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_user_groups(body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1UserGroupsErrorBody]`
- **Error**: `PostApiV1UserGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateUserGroupRequestDto` | `soda/models/public_api_create_user_group_request_dto.py` |
| `PublicApiCreateUserGroupRequestDtoDict` | `soda/models/public_api_create_user_group_request_dto.py` |
| `PostApiV1UserGroupsErrorBody` | `soda/errors/post_api_v1_user_groups_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.post_api_v1_user_groups_user_group_id

- **Route**: `POST /api/v1/userGroups/{userGroupId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_user_groups_user_group_id(user_group_id: str, body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_group_id`, `body`
- **Params**: `user_group_id` — path `userGroupId` · `body` — JSON body
- **Returns (parsed)**: `UserGroupContentDto`
- **Returns (raw)**: `ApiResult[UserGroupContentDto, PostApiV1UserGroupsUserGroupIdErrorBody]`
- **Error**: `PostApiV1UserGroupsUserGroupIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateUserGroupRequestDto` | `soda/models/public_api_update_user_group_request_dto.py` |
| `PublicApiUpdateUserGroupRequestDtoDict` | `soda/models/public_api_update_user_group_request_dto.py` |
| `UserGroupContentDto` | `soda/models/user_group_content_dto.py` |
| `PostApiV1UserGroupsUserGroupIdErrorBody` | `soda/errors/post_api_v1_user_groups_user_group_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.post_api_v1_users

- **Route**: `POST /api/v1/users`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_users(body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiInviteUserResponse`
- **Returns (raw)**: `ApiResult[PublicApiInviteUserResponse, PostApiV1UsersErrorBody]`
- **Error**: `PostApiV1UsersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiInviteUserRequestDto` | `soda/models/public_api_invite_user_request_dto.py` |
| `PublicApiInviteUserRequestDtoDict` | `soda/models/public_api_invite_user_request_dto.py` |
| `PublicApiInviteUserResponse` | `soda/models/public_api_invite_user_response.py` |
| `PostApiV1UsersErrorBody` | `soda/errors/post_api_v1_users_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.users.post_api_v1_users_user_id_disable

- **Route**: `POST /api/v1/users/{userId}/disable`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_users_user_id_disable(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, PostApiV1UsersUserIdDisableErrorBody]`
- **Error**: `PostApiV1UsersUserIdDisableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostApiV1UsersUserIdDisableErrorBody` | `soda/errors/post_api_v1_users_user_id_disable_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

