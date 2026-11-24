<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomPages — operations

Accessor: `client.custom_pages` · Source: `read_me/apis/custom_pages.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.custom_pages.delete_branches_by_branch_custom_pages_by_slug

- **Route**: `DELETE /branches/{branch}/custom_pages/{slug}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def delete_branches_by_branch_custom_pages_by_slug(branch: str, slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`, `slug`
- **Params**: `branch` — path · `slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.custom_pages.get_branches_by_branch_custom_pages

- **Route**: `GET /branches/{branch}/custom_pages`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def get_branches_by_branch_custom_pages(branch: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`
- **Params**: `branch` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.custom_pages.get_branches_by_branch_custom_pages_by_slug

- **Route**: `GET /branches/{branch}/custom_pages/{slug}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def get_branches_by_branch_custom_pages_by_slug(branch: str, slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`, `slug`
- **Params**: `branch` — path · `slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.custom_pages.post_branches_by_branch_custom_pages

- **Route**: `POST /branches/{branch}/custom_pages`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def post_branches_by_branch_custom_pages(branch: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`
- **Params**: `branch` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.custom_pages.put_branches_by_branch_custom_pages_by_slug

- **Route**: `PUT /branches/{branch}/custom_pages/{slug}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def put_branches_by_branch_custom_pages_by_slug(branch: str, slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `branch`, `slug`
- **Params**: `branch` — path · `slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

