<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentTypes — operations

Accessor: `client.content_types` · Source: `contentstack/apis/content_types.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.content_types.create_content_type

- **Route**: `POST /content_types`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def create_content_type(api_key: str, body: CreateContentTypeRequest | CreateContentTypeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`, `body`
- **Params**: `api_key` — header · `body` — JSON body
- **Returns (parsed)**: `ContentType2`
- **Returns (raw)**: `ApiResult[ContentType2, CreateContentTypeErrorBody]`
- **Error**: `CreateContentTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateContentTypeRequest` | `contentstack/models/create_content_type_request.py` |
| `CreateContentTypeRequestDict` | `contentstack/models/create_content_type_request.py` |
| `ContentType2` | `contentstack/models/content_type2.py` |
| `CreateContentTypeErrorBody` | `contentstack/errors/create_content_type_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.content_types.delete_content_type

- **Route**: `DELETE /content_types/{content_type_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def delete_content_type(content_type_uid: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `api_key`
- **Params**: `content_type_uid` — path · `api_key` — header
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteContentTypeErrorBody]`
- **Error**: `DeleteContentTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteContentTypeErrorBody` | `contentstack/errors/delete_content_type_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.content_types.get_all_content_types

- **Route**: `GET /content_types`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_all_content_types(api_key: str, access_token: str, *, include_count: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`, `access_token`
- **Params**: `include_count` — query · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `ContentTypeList`
- **Returns (raw)**: `ApiResult[ContentTypeList, GetAllContentTypesErrorBody]`
- **Error**: `GetAllContentTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContentTypeList` | `contentstack/models/content_type_list.py` |
| `GetAllContentTypesErrorBody` | `contentstack/errors/get_all_content_types_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.content_types.get_single_content_type

- **Route**: `GET /content_types/{content_type_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_single_content_type(content_type_uid: str, api_key: str, access_token: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `api_key`, `access_token`
- **Params**: `content_type_uid` — path · `version` — query · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `ContentType`
- **Returns (raw)**: `ApiResult[ContentType, GetSingleContentTypeErrorBody]`
- **Error**: `GetSingleContentTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContentType` | `contentstack/models/content_type.py` |
| `GetSingleContentTypeErrorBody` | `contentstack/errors/get_single_content_type_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.content_types.update_content_type

- **Route**: `PUT /content_types/{content_type_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def update_content_type(content_type_uid: str, api_key: str, body: CreateContentTypeRequest | CreateContentTypeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content_type_uid`, `api_key`, `body`
- **Params**: `content_type_uid` — path · `api_key` — header · `body` — JSON body
- **Returns (parsed)**: `ContentType2`
- **Returns (raw)**: `ApiResult[ContentType2, UpdateContentTypeErrorBody]`
- **Error**: `UpdateContentTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400] · `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateContentTypeRequest` | `contentstack/models/create_content_type_request.py` |
| `CreateContentTypeRequestDict` | `contentstack/models/create_content_type_request.py` |
| `ContentType2` | `contentstack/models/content_type2.py` |
| `UpdateContentTypeErrorBody` | `contentstack/errors/update_content_type_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

