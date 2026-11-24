<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `doi_t/apis/users.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.cancel_invite

- **Route**: `POST /iam/v1/users/{id}/actions/cancel`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def cancel_invite(id_: str, idempotency_key: str, *, dry_run: bool | None = False, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `idempotency_key`
- **Params**: `id_` — path `id` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `CancelInviteResponse`
- **Returns (raw)**: `ApiResult[CancelInviteResponse, CancelInviteErrorBody]`
- **Error**: `CancelInviteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelInviteResponse` | `doi_t/models/cancel_invite_response.py` |
| `CancelInviteErrorBody` | `doi_t/errors/cancel_invite_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.users.delete_user

- **Route**: `DELETE /iam/v1/users/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_user(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `DeleteUserResponse`
- **Returns (raw)**: `ApiResult[DeleteUserResponse, DeleteUserErrorBody]`
- **Error**: `DeleteUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUserResponse` | `doi_t/models/delete_user_response.py` |
| `DeleteUserErrorBody` | `doi_t/errors/delete_user_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.users.invite_user

- **Route**: `POST /iam/v1/users/invite`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def invite_user(body: InviteUserRequest | InviteUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `InviteResponse`
- **Returns (raw)**: `ApiResult[InviteResponse, InviteUserErrorBody]`
- **Error**: `InviteUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InviteUserRequest` | `doi_t/models/invite_user_request.py` |
| `InviteUserRequestDict` | `doi_t/models/invite_user_request.py` |
| `InviteResponse` | `doi_t/models/invite_response.py` |
| `InviteUserErrorBody` | `doi_t/errors/invite_user_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.users.list_users

- **Route**: `GET /iam/v1/users`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_users(*, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `email` — query
- **Returns (parsed)**: `ListUsersResponseBody`
- **Returns (raw)**: `ApiResult[ListUsersResponseBody, ListUsersErrorBody]`
- **Error**: `ListUsersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListUsersResponseBody` | `doi_t/models/list_users_response_body.py` |
| `ListUsersErrorBody` | `doi_t/errors/list_users_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.users.resend_invite

- **Route**: `POST /iam/v1/users/{id}/actions/resend`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def resend_invite(id_: str, idempotency_key: str, *, dry_run: bool | None = False, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `idempotency_key`
- **Params**: `id_` — path `id` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `ResendInviteResponse`
- **Returns (raw)**: `ApiResult[ResendInviteResponse, ResendInviteErrorBody]`
- **Error**: `ResendInviteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResendInviteResponse` | `doi_t/models/resend_invite_response.py` |
| `ResendInviteErrorBody` | `doi_t/errors/resend_invite_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.users.update_user

- **Route**: `PATCH /iam/v1/users/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_user(id_: str, body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `UpdateUserResponse`
- **Returns (raw)**: `ApiResult[UpdateUserResponse, UpdateUserErrorBody]`
- **Error**: `UpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `doi_t/models/update_user_request.py` |
| `UpdateUserRequestDict` | `doi_t/models/update_user_request.py` |
| `UpdateUserResponse` | `doi_t/models/update_user_response.py` |
| `UpdateUserErrorBody` | `doi_t/errors/update_user_error.py` |
| `Error` | `doi_t/models/error.py` |

