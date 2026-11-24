<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recipes — operations

Accessor: `client.recipes` · Source: `read_me/apis/recipes.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.recipes.delete_recipes_by_slug

- **Route**: `DELETE /recipes/{slug}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def delete_recipes_by_slug(slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.recipes.get_recipes

- **Route**: `GET /recipes`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def get_recipes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.recipes.get_recipes_by_slug

- **Route**: `GET /recipes/{slug}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def get_recipes_by_slug(slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.recipes.post_recipes

- **Route**: `POST /recipes`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def post_recipes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.recipes.put_recipes_by_slug

- **Route**: `PUT /recipes/{slug}`
- **Auth**: `bearer_auth`
- **Server**: `default_read_me_api_keys_api`
- **Signature**: `def put_recipes_by_slug(slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

