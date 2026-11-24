<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gpg — operations

Accessor: `client.gpg` · Source: `bitbucket/apis/gpg.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.gpg.delete_users_by_selected_user_gpg_keys_by_fingerprint

- **Route**: `DELETE /users/{selected_user}/gpg-keys/{fingerprint}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_users_by_selected_user_gpg_keys_by_fingerprint(fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fingerprint`, `selected_user`
- **Params**: `fingerprint` — path · `selected_user` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody]`
- **Error**: `DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody` | `bitbucket/errors/delete_users_by_selected_user_gpg_keys_by_fingerprint_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.gpg.get_users_by_selected_user_gpg_keys

- **Route**: `GET /users/{selected_user}/gpg-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_users_by_selected_user_gpg_keys(selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path
- **Returns (parsed)**: `PaginatedGpgUserKeys`
- **Returns (raw)**: `ApiResult[PaginatedGpgUserKeys, GetUsersBySelectedUserGpgKeysErrorBody]`
- **Error**: `GetUsersBySelectedUserGpgKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedGpgUserKeys` | `bitbucket/models/paginated_gpg_user_keys.py` |
| `GetUsersBySelectedUserGpgKeysErrorBody` | `bitbucket/errors/get_users_by_selected_user_gpg_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.gpg.get_users_by_selected_user_gpg_keys_by_fingerprint

- **Route**: `GET /users/{selected_user}/gpg-keys/{fingerprint}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_users_by_selected_user_gpg_keys_by_fingerprint(fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fingerprint`, `selected_user`
- **Params**: `fingerprint` — path · `selected_user` — path
- **Returns (parsed)**: `GpgAccountKey`
- **Returns (raw)**: `ApiResult[GpgAccountKey, GetUsersBySelectedUserGpgKeysByFingerprintErrorBody]`
- **Error**: `GetUsersBySelectedUserGpgKeysByFingerprintErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `GpgAccountKey` | `bitbucket/models/gpg_account_key.py` |
| `GetUsersBySelectedUserGpgKeysByFingerprintErrorBody` | `bitbucket/errors/get_users_by_selected_user_gpg_keys_by_fingerprint_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.gpg.post_users_by_selected_user_gpg_keys

- **Route**: `POST /users/{selected_user}/gpg-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_users_by_selected_user_gpg_keys(selected_user: str, *, body: GpgAccountKey | GpgAccountKeyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path · `body` — JSON body
- **Returns (parsed)**: `GpgAccountKey`
- **Returns (raw)**: `ApiResult[GpgAccountKey, PostUsersBySelectedUserGpgKeysErrorBody]`
- **Error**: `PostUsersBySelectedUserGpgKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `GpgAccountKey` | `bitbucket/models/gpg_account_key.py` |
| `GpgAccountKeyDict` | `bitbucket/models/gpg_account_key.py` |
| `PostUsersBySelectedUserGpgKeysErrorBody` | `bitbucket/errors/post_users_by_selected_user_gpg_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

