<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ssh — operations

Accessor: `client.ssh` · Source: `bitbucket/apis/ssh.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ssh.delete_users_by_selected_user_ssh_keys_by_key_id

- **Route**: `DELETE /users/{selected_user}/ssh-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_users_by_selected_user_ssh_keys_by_key_id(key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `selected_user`
- **Params**: `key_id` — path · `selected_user` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody]`
- **Error**: `DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody` | `bitbucket/errors/delete_users_by_selected_user_ssh_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.ssh.get_users_by_selected_user_ssh_keys

- **Route**: `GET /users/{selected_user}/ssh-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_users_by_selected_user_ssh_keys(selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path
- **Returns (parsed)**: `PaginatedSshUserKeys`
- **Returns (raw)**: `ApiResult[PaginatedSshUserKeys, GetUsersBySelectedUserSshKeysErrorBody]`
- **Error**: `GetUsersBySelectedUserSshKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedSshUserKeys` | `bitbucket/models/paginated_ssh_user_keys.py` |
| `GetUsersBySelectedUserSshKeysErrorBody` | `bitbucket/errors/get_users_by_selected_user_ssh_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.ssh.get_users_by_selected_user_ssh_keys_by_key_id

- **Route**: `GET /users/{selected_user}/ssh-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_users_by_selected_user_ssh_keys_by_key_id(key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `selected_user`
- **Params**: `key_id` — path · `selected_user` — path
- **Returns (parsed)**: `SshAccountKey`
- **Returns (raw)**: `ApiResult[SshAccountKey, GetUsersBySelectedUserSshKeysByKeyIdErrorBody]`
- **Error**: `GetUsersBySelectedUserSshKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `SshAccountKey` | `bitbucket/models/ssh_account_key.py` |
| `GetUsersBySelectedUserSshKeysByKeyIdErrorBody` | `bitbucket/errors/get_users_by_selected_user_ssh_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.ssh.post_users_by_selected_user_ssh_keys

- **Route**: `POST /users/{selected_user}/ssh-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_users_by_selected_user_ssh_keys(selected_user: str, *, expires_on: str | None = None, body: SshAccountKey | SshAccountKeyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path · `expires_on` — query · `body` — JSON body
- **Returns (parsed)**: `SshAccountKey`
- **Returns (raw)**: `ApiResult[SshAccountKey, PostUsersBySelectedUserSshKeysErrorBody]`
- **Error**: `PostUsersBySelectedUserSshKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `SshAccountKey` | `bitbucket/models/ssh_account_key.py` |
| `SshAccountKeyDict` | `bitbucket/models/ssh_account_key.py` |
| `PostUsersBySelectedUserSshKeysErrorBody` | `bitbucket/errors/post_users_by_selected_user_ssh_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.ssh.put_users_by_selected_user_ssh_keys_by_key_id

- **Route**: `PUT /users/{selected_user}/ssh-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_users_by_selected_user_ssh_keys_by_key_id(key_id: str, selected_user: str, *, body: SshAccountKey | SshAccountKeyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `selected_user`
- **Params**: `key_id` — path · `selected_user` — path · `body` — JSON body
- **Returns (parsed)**: `SshAccountKey`
- **Returns (raw)**: `ApiResult[SshAccountKey, PutUsersBySelectedUserSshKeysByKeyIdErrorBody]`
- **Error**: `PutUsersBySelectedUserSshKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `SshAccountKey` | `bitbucket/models/ssh_account_key.py` |
| `SshAccountKeyDict` | `bitbucket/models/ssh_account_key.py` |
| `PutUsersBySelectedUserSshKeysByKeyIdErrorBody` | `bitbucket/errors/put_users_by_selected_user_ssh_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

