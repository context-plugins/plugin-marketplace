<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entries — operations

Accessor: `client.entries` · Source: `contentstack/apis/entries.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.entries.create_entry

- **Route**: `POST /content_types/{content_type_uid}/entries`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def create_entry(content_type_uid: str, api_key: str, body: CreateEntryRequest | CreateEntryRequestDict, *, locale: str | None = None, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `api_key`, `body`
- **Params**: `content_type_uid` — path · `locale` — query · `api_key` — header · `authtoken` — header · `body` — JSON body
- **Returns (parsed)**: `Entry2`
- **Returns (raw)**: `ApiResult[Entry2, CreateEntryErrorBody]`
- **Error**: `CreateEntryErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEntryRequest` | `contentstack/models/create_entry_request.py` |
| `CreateEntryRequestDict` | `contentstack/models/create_entry_request.py` |
| `Entry2` | `contentstack/models/entry2.py` |
| `CreateEntryErrorBody` | `contentstack/errors/create_entry_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entries.delete_entry

- **Route**: `DELETE /content_types/{content_type_uid}/entries/{entry_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def delete_entry(content_type_uid: str, entry_uid: str, api_key: str, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `api_key`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `api_key` — header · `authtoken` — header
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEntryErrorBody]`
- **Error**: `DeleteEntryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEntryErrorBody` | `contentstack/errors/delete_entry_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entries.get_all_entries

- **Route**: `GET /content_types/{content_type_uid}/entries`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_all_entries(content_type_uid: str, api_key: str, access_token: str, *, locale: str | None = None, skip: int | None = 0, limit: int | None = 100, query: str | None = None, include_count: bool | None = None, include_content_type: bool | None = None, include_reference: bool | None = None, only: str | None = None, except_: str | None = None, asc: str | None = None, desc: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `api_key`, `access_token`
- **Params**: `content_type_uid` — path · `locale` — query · `skip` — query · `limit` — query · `query` — query · `include_count` — query · `include_content_type` — query · `include_reference` — query · `only` — query · `except_` — query `except` · `asc` — query · `desc` — query · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `EntryList`
- **Returns (raw)**: `ApiResult[EntryList, GetAllEntriesErrorBody]`
- **Error**: `GetAllEntriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntryList` | `contentstack/models/entry_list.py` |
| `GetAllEntriesErrorBody` | `contentstack/errors/get_all_entries_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entries.get_single_entry

- **Route**: `GET /content_types/{content_type_uid}/entries/{entry_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_single_entry(content_type_uid: str, entry_uid: str, api_key: str, access_token: str, *, locale: str | None = None, include_reference: bool | None = None, version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `api_key`, `access_token`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `locale` — query · `include_reference` — query · `version` — query · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `Entry`
- **Returns (raw)**: `ApiResult[Entry, GetSingleEntryErrorBody]`
- **Error**: `GetSingleEntryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Entry` | `contentstack/models/entry.py` |
| `GetSingleEntryErrorBody` | `contentstack/errors/get_single_entry_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entries.publish_entry

- **Route**: `POST /content_types/{content_type_uid}/entries/{entry_uid}/publish`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def publish_entry(content_type_uid: str, entry_uid: str, api_key: str, body: PublishRequest | PublishRequestDict, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `api_key`, `body`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `api_key` — header · `authtoken` — header · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PublishEntryErrorBody]`
- **Error**: `PublishEntryErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublishRequest` | `contentstack/models/publish_request.py` |
| `PublishRequestDict` | `contentstack/models/publish_request.py` |
| `PublishEntryErrorBody` | `contentstack/errors/publish_entry_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entries.unpublish_entry

- **Route**: `POST /content_types/{content_type_uid}/entries/{entry_uid}/unpublish`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def unpublish_entry(content_type_uid: str, entry_uid: str, api_key: str, body: PublishRequest | PublishRequestDict, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `api_key`, `body`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `api_key` — header · `authtoken` — header · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UnpublishEntryErrorBody]`
- **Error**: `UnpublishEntryErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublishRequest` | `contentstack/models/publish_request.py` |
| `PublishRequestDict` | `contentstack/models/publish_request.py` |
| `UnpublishEntryErrorBody` | `contentstack/errors/unpublish_entry_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.entries.update_entry

- **Route**: `PUT /content_types/{content_type_uid}/entries/{entry_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def update_entry(content_type_uid: str, entry_uid: str, api_key: str, body: UpdateEntryRequest | UpdateEntryRequestDict, *, locale: str | None = None, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `entry_uid`, `api_key`, `body`
- **Params**: `content_type_uid` — path · `entry_uid` — path · `locale` — query · `api_key` — header · `authtoken` — header · `body` — JSON body
- **Returns (parsed)**: `Entry2`
- **Returns (raw)**: `ApiResult[Entry2, UpdateEntryErrorBody]`
- **Error**: `UpdateEntryErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateEntryRequest` | `contentstack/models/update_entry_request.py` |
| `UpdateEntryRequestDict` | `contentstack/models/update_entry_request.py` |
| `Entry2` | `contentstack/models/entry2.py` |
| `UpdateEntryErrorBody` | `contentstack/errors/update_entry_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

