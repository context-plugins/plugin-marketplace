<!-- Generated file — do not edit; regenerated with the SDK. -->

# Addon — operations

Accessor: `client.addon` · Source: `bitbucket/apis/addon.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.addon.delete_addon

- **Route**: `DELETE /addon`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_addon(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAddonErrorBody]`
- **Error**: `DeleteAddonErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAddonErrorBody` | `bitbucket/errors/delete_addon_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.delete_addon_linkers_by_linker_key_values

- **Route**: `DELETE /addon/linkers/{linker_key}/values`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`
- **Params**: `linker_key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAddonLinkersByLinkerKeyValuesErrorBody]`
- **Error**: `DeleteAddonLinkersByLinkerKeyValuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAddonLinkersByLinkerKeyValuesErrorBody` | `bitbucket/errors/delete_addon_linkers_by_linker_key_values_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.delete_addon_linkers_by_linker_key_values_by_value_id

- **Route**: `DELETE /addon/linkers/{linker_key}/values/{value_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_addon_linkers_by_linker_key_values_by_value_id(linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`, `value_id`
- **Params**: `linker_key` — path · `value_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody]`
- **Error**: `DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody` | `bitbucket/errors/delete_addon_linkers_by_linker_key_values_by_value_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.get_addon_linkers

- **Route**: `GET /addon/linkers`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_addon_linkers(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAddonLinkersErrorBody]`
- **Error**: `GetAddonLinkersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetAddonLinkersErrorBody` | `bitbucket/errors/get_addon_linkers_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.get_addon_linkers_by_linker_key

- **Route**: `GET /addon/linkers/{linker_key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_addon_linkers_by_linker_key(linker_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`
- **Params**: `linker_key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAddonLinkersByLinkerKeyErrorBody]`
- **Error**: `GetAddonLinkersByLinkerKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetAddonLinkersByLinkerKeyErrorBody` | `bitbucket/errors/get_addon_linkers_by_linker_key_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.get_addon_linkers_by_linker_key_values

- **Route**: `GET /addon/linkers/{linker_key}/values`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`
- **Params**: `linker_key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAddonLinkersByLinkerKeyValuesErrorBody]`
- **Error**: `GetAddonLinkersByLinkerKeyValuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetAddonLinkersByLinkerKeyValuesErrorBody` | `bitbucket/errors/get_addon_linkers_by_linker_key_values_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.get_addon_linkers_by_linker_key_values_by_value_id

- **Route**: `GET /addon/linkers/{linker_key}/values/{value_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_addon_linkers_by_linker_key_values_by_value_id(linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`, `value_id`
- **Params**: `linker_key` — path · `value_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody]`
- **Error**: `GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody` | `bitbucket/errors/get_addon_linkers_by_linker_key_values_by_value_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.post_addon_linkers_by_linker_key_values

- **Route**: `POST /addon/linkers/{linker_key}/values`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`
- **Params**: `linker_key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostAddonLinkersByLinkerKeyValuesErrorBody]`
- **Error**: `PostAddonLinkersByLinkerKeyValuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostAddonLinkersByLinkerKeyValuesErrorBody` | `bitbucket/errors/post_addon_linkers_by_linker_key_values_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.put_addon

- **Route**: `PUT /addon`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_addon(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutAddonErrorBody]`
- **Error**: `PutAddonErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutAddonErrorBody` | `bitbucket/errors/put_addon_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.addon.put_addon_linkers_by_linker_key_values

- **Route**: `PUT /addon/linkers/{linker_key}/values`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linker_key`
- **Params**: `linker_key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutAddonLinkersByLinkerKeyValuesErrorBody]`
- **Error**: `PutAddonLinkersByLinkerKeyValuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutAddonLinkersByLinkerKeyValuesErrorBody` | `bitbucket/errors/put_addon_linkers_by_linker_key_values_error.py` |
| `Error` | `bitbucket/models/error.py` |

