<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationUsers — operations

Accessor: `client.organization_users` · Source: `divvy/apis/organization_users.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organization_users.archive_organization_user

- **Route**: `POST /v3/users/{userId}/archive`
- **Server**: `default`
- **Signature**: `def archive_organization_user(user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, ArchiveOrganizationUserErrorBody]`
- **Error**: `ArchiveOrganizationUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `ArchiveOrganizationUserErrorBody` | `divvy/errors/archive_organization_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organization_users.create_organization_user

- **Route**: `POST /v3/users`
- **Server**: `default`
- **Signature**: `def create_organization_user(body: OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, CreateOrganizationUserErrorBody]`
- **Error**: `CreateOrganizationUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserCreateRequestDto` | `divvy/models/organization_user_create_request_dto.py` |
| `OrganizationUserCreateRequestDtoDict` | `divvy/models/organization_user_create_request_dto.py` |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `CreateOrganizationUserErrorBody` | `divvy/errors/create_organization_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organization_users.get_organization_user

- **Route**: `GET /v3/users/{userId}`
- **Server**: `default`
- **Signature**: `def get_organization_user(user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, GetOrganizationUserErrorBody]`
- **Error**: `GetOrganizationUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `GetOrganizationUserErrorBody` | `divvy/errors/get_organization_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organization_users.list_organization_users

- **Route**: `GET /v3/users`
- **Server**: `default`
- **Signature**: `def list_organization_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoOrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoOrganizationUserResponseDto, ListOrganizationUsersErrorBody]`
- **Error**: `ListOrganizationUsersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoOrganizationUserResponseDto` | `divvy/models/list_response_dto_organization_user_response_dto.py` |
| `ListOrganizationUsersErrorBody` | `divvy/errors/list_organization_users_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organization_users.restore_organization_user

- **Route**: `POST /v3/users/{userId}/restore`
- **Server**: `default`
- **Signature**: `def restore_organization_user(user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, RestoreOrganizationUserErrorBody]`
- **Error**: `RestoreOrganizationUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `RestoreOrganizationUserErrorBody` | `divvy/errors/restore_organization_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organization_users.update_organization_user

- **Route**: `PATCH /v3/users/{userId}`
- **Server**: `default`
- **Signature**: `def update_organization_user(user_id: str, body: OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `OrganizationUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationUserResponseDto, UpdateOrganizationUserErrorBody]`
- **Error**: `UpdateOrganizationUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUserUpdateRequestDto` | `divvy/models/organization_user_update_request_dto.py` |
| `OrganizationUserUpdateRequestDtoDict` | `divvy/models/organization_user_update_request_dto.py` |
| `OrganizationUserResponseDto` | `divvy/models/organization_user_response_dto.py` |
| `UpdateOrganizationUserErrorBody` | `divvy/errors/update_organization_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

