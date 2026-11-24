<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `common_elements/apis/meta.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.meta.get_api_status

- **Route**: `GET /api/v1/meta/status`
- **Signature**: `def get_api_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetApiStatusErrorBody]`
- **Error**: `GetApiStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiStatusErrorBody` | `common_elements/errors/get_api_status_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.meta.get_data_dictionary

- **Route**: `GET /api/v1/meta/dictionary`
- **Auth**: `bearer_auth`
- **Signature**: `def get_data_dictionary(*, resource: str | None = None, fill_rates: FillRatesOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `resource` — query · `fill_rates` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetDataDictionaryErrorBody]`
- **Error**: `GetDataDictionaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FillRatesOrStr` | `common_elements/models/enums/fill_rates.py` |
| `GetDataDictionaryErrorBody` | `common_elements/errors/get_data_dictionary_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.meta.get_key_usage

- **Route**: `GET /api/v1/meta/usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_key_usage(*, days: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetKeyUsageErrorBody]`
- **Error**: `GetKeyUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetKeyUsageErrorBody` | `common_elements/errors/get_key_usage_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.meta.get_meta_index

- **Route**: `GET /api/v1/meta`
- **Signature**: `def get_meta_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetMetaIndexErrorBody]`
- **Error**: `GetMetaIndexErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMetaIndexErrorBody` | `common_elements/errors/get_meta_index_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.meta.get_open_api_document

- **Route**: `GET /api/v1/openapi`
- **Signature**: `def get_open_api_document(*, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `format_` — query `format`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetOpenApiDocumentErrorBody]`
- **Error**: `GetOpenApiDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `common_elements/models/enums/format.py` |
| `GetOpenApiDocumentErrorBody` | `common_elements/errors/get_open_api_document_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.meta.get_sandbox_manifest

- **Route**: `GET /api/v1/meta/sandbox`
- **Signature**: `def get_sandbox_manifest(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetSandboxManifestErrorBody]`
- **Error**: `GetSandboxManifestErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSandboxManifestErrorBody` | `common_elements/errors/get_sandbox_manifest_error.py` |
| `Error` | `common_elements/models/error.py` |

