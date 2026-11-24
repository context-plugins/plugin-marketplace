<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApIs — operations

Accessor: `client.ap_is` · Source: `read_me/apis/ap_is.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.ap_is.delete_branches_by_branch_apis_by_id

- **Route**: `DELETE /branches/{branch}/apis/{id}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def delete_branches_by_branch_apis_by_id(branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`, `id_`
- **Params**: `branch` — path · `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.ap_is.get_branches_by_branch_apis

- **Route**: `GET /branches/{branch}/apis`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def get_branches_by_branch_apis(branch: str, *, per_page: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`
- **Params**: `branch` — path · `per_page` — query `perPage` · `page` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetBranchesByBranchApisErrorBody]`
- **Error**: `GetBranchesByBranchApisErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetBranchesByBranchApisErrorBody` | `read_me/errors/get_branches_by_branch_apis_error.py` |

### client.ap_is.get_branches_by_branch_apis_by_id

- **Route**: `GET /branches/{branch}/apis/{id}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def get_branches_by_branch_apis_by_id(branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`, `id_`
- **Params**: `branch` — path · `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.ap_is.post_branches_by_branch_apis

- **Route**: `POST /branches/{branch}/apis`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def post_branches_by_branch_apis(branch: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`
- **Params**: `branch` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.ap_is.put_branches_by_branch_apis_by_id

- **Route**: `PUT /branches/{branch}/apis/{id}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def put_branches_by_branch_apis_by_id(branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`, `id_`
- **Params**: `branch` — path · `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

