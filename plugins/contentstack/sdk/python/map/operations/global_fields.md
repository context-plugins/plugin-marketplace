<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalFields — operations

Accessor: `client.global_fields` · Source: `contentstack/apis/global_fields.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.global_fields.get_all_global_fields

- **Route**: `GET /global_fields`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_all_global_fields(api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`, `access_token`
- **Params**: `api_key` — header · `access_token` — header
- **Returns (parsed)**: `GlobalFieldList`
- **Returns (raw)**: `ApiResult[GlobalFieldList, GetAllGlobalFieldsErrorBody]`
- **Error**: `GetAllGlobalFieldsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GlobalFieldList` | `contentstack/models/global_field_list.py` |
| `GetAllGlobalFieldsErrorBody` | `contentstack/errors/get_all_global_fields_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

### client.global_fields.get_single_global_field

- **Route**: `GET /global_fields/{global_field_uid}`
- **Auth**: `api_key` AND `delivery_token`
- **Server**: `default_contentstack_assets_api`
- **Signature**: `def get_single_global_field(global_field_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `global_field_uid`, `api_key`, `access_token`
- **Params**: `global_field_uid` — path · `api_key` — header · `access_token` — header
- **Returns (parsed)**: `GlobalField`
- **Returns (raw)**: `ApiResult[GlobalField, GetSingleGlobalFieldErrorBody]`
- **Error**: `GetSingleGlobalFieldErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackAssetsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GlobalField` | `contentstack/models/global_field.py` |
| `GetSingleGlobalFieldErrorBody` | `contentstack/errors/get_single_global_field_error.py` |
| `ErrorContentstackAssetsApi` | `contentstack/models/error_contentstack_assets_api.py` |

