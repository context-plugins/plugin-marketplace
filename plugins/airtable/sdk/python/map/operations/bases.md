<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bases — operations

Accessor: `client.bases` · Source: `airtable/apis/bases.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bases.create_base

- **Route**: `POST /meta/bases`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_base(body: CreateBaseRequest | CreateBaseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BaseSchema`
- **Returns (raw)**: `ApiResult[BaseSchema, CreateBaseErrorBody]`
- **Error**: `CreateBaseErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBaseRequest` | `airtable/models/create_base_request.py` |
| `CreateBaseRequestDict` | `airtable/models/create_base_request.py` |
| `BaseSchema` | `airtable/models/base_schema.py` |
| `CreateBaseErrorBody` | `airtable/errors/create_base_error.py` |
| `Error` | `airtable/models/error.py` |

### client.bases.get_base_schema

- **Route**: `GET /meta/bases/{baseId}/tables`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_base_schema(base_id: str, *, include: list[IncludeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`
- **Params**: `base_id` — path `baseId` · `include` — query
- **Returns (parsed)**: `MetaBasesTablesResponse`
- **Returns (raw)**: `ApiResult[MetaBasesTablesResponse, GetBaseSchemaErrorBody]`
- **Error**: `GetBaseSchemaErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IncludeOrStr` | `airtable/models/enums/include.py` |
| `MetaBasesTablesResponse` | `airtable/models/meta_bases_tables_response.py` |
| `GetBaseSchemaErrorBody` | `airtable/errors/get_base_schema_error.py` |
| `Error` | `airtable/models/error.py` |

### client.bases.list_bases

- **Route**: `GET /meta/bases`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_bases(*, offset: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `offset` — query
- **Returns (parsed)**: `BaseList`
- **Returns (raw)**: `ApiResult[BaseList, ListBasesErrorBody]`
- **Error**: `ListBasesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BaseList` | `airtable/models/base_list.py` |
| `ListBasesErrorBody` | `airtable/errors/list_bases_error.py` |
| `Error` | `airtable/models/error.py` |

### client.bases.whoami

- **Route**: `GET /meta/whoami`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def whoami(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `MetaWhoamiResponse`
- **Returns (raw)**: `ApiResult[MetaWhoamiResponse, WhoamiErrorBody]`
- **Error**: `WhoamiErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetaWhoamiResponse` | `airtable/models/meta_whoami_response.py` |
| `WhoamiErrorBody` | `airtable/errors/whoami_error.py` |
| `Error` | `airtable/models/error.py` |

