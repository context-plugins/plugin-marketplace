<!-- Generated file — do not edit; regenerated with the SDK. -->

# Registry — operations

Accessor: `client.registry` · Source: `relm_crm/apis/registry.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.registry.create_enum_value

- **Route**: `POST /enums`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_enum_value(body: EnumsRequest | EnumsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `EnumsRequest` | `relm_crm/models/enums_request.py` |
| `EnumsRequestDict` | `relm_crm/models/enums_request.py` |

### client.registry.create_field

- **Route**: `POST /fields`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_field(body: FieldsRequest | FieldsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FieldsRequest` | `relm_crm/models/fields_request.py` |
| `FieldsRequestDict` | `relm_crm/models/fields_request.py` |

### client.registry.create_type

- **Route**: `POST /types`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_type(body: TypesRequest | TypesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TypesRequest` | `relm_crm/models/types_request.py` |
| `TypesRequestDict` | `relm_crm/models/types_request.py` |

### client.registry.list_enums

- **Route**: `GET /enums`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_enums(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

