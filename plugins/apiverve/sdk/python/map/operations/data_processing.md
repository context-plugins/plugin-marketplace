<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataProcessing — operations

Accessor: `client.data_processing` · Source: `api_verve/apis/data_processing.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_processing.counter

- **Route**: `GET /v1/counter`
- **Auth**: `api_key`
- **Signature**: `def counter(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — query `id`
- **Returns (parsed)**: `V1CounterResponse`
- **Returns (raw)**: `ApiResult[V1CounterResponse, CounterErrorBody]`
- **Error**: `CounterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CounterResponse` | `api_verve/models/v1_counter_response.py` |
| `CounterErrorBody` | `api_verve/errors/counter_error.py` |

### client.data_processing.htmltotext

- **Route**: `POST /v1/htmltotext`
- **Auth**: `api_key`
- **Signature**: `def htmltotext(body: V1HtmltotextRequest | V1HtmltotextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1HtmltotextResponse`
- **Returns (raw)**: `ApiResult[V1HtmltotextResponse, HtmltotextErrorBody]`
- **Error**: `HtmltotextErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HtmltotextRequest` | `api_verve/models/v1_htmltotext_request.py` |
| `V1HtmltotextRequestDict` | `api_verve/models/v1_htmltotext_request.py` |
| `V1HtmltotextResponse` | `api_verve/models/v1_htmltotext_response.py` |
| `HtmltotextErrorBody` | `api_verve/errors/htmltotext_error.py` |

### client.data_processing.metadataextractor

- **Route**: `POST /v1/metadataextractor`
- **Auth**: `api_key`
- **Signature**: `def metadataextractor(body: V1MetadataextractorRequest | V1MetadataextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MetadataextractorResponse`
- **Returns (raw)**: `ApiResult[V1MetadataextractorResponse, MetadataextractorErrorBody]`
- **Error**: `MetadataextractorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MetadataextractorRequest` | `api_verve/models/v1_metadataextractor_request.py` |
| `V1MetadataextractorRequestDict` | `api_verve/models/v1_metadataextractor_request.py` |
| `V1MetadataextractorResponse` | `api_verve/models/v1_metadataextractor_response.py` |
| `MetadataextractorErrorBody` | `api_verve/errors/metadataextractor_error.py` |

### client.data_processing.morsecode

- **Route**: `POST /v1/morsecode`
- **Auth**: `api_key`
- **Signature**: `def morsecode(body: V1MorsecodeRequest | V1MorsecodeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MorsecodeResponse`
- **Returns (raw)**: `ApiResult[V1MorsecodeResponse, MorsecodeErrorBody]`
- **Error**: `MorsecodeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MorsecodeRequest` | `api_verve/models/v1_morsecode_request.py` |
| `V1MorsecodeRequestDict` | `api_verve/models/v1_morsecode_request.py` |
| `V1MorsecodeResponse` | `api_verve/models/v1_morsecode_response.py` |
| `MorsecodeErrorBody` | `api_verve/errors/morsecode_error.py` |

### client.data_processing.murmurhash

- **Route**: `POST /v1/murmurhash`
- **Auth**: `api_key`
- **Signature**: `def murmurhash(body: V1MurmurhashRequest | V1MurmurhashRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MurmurhashResponse`
- **Returns (raw)**: `ApiResult[V1MurmurhashResponse, MurmurhashErrorBody]`
- **Error**: `MurmurhashErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MurmurhashRequest` | `api_verve/models/v1_murmurhash_request.py` |
| `V1MurmurhashRequestDict` | `api_verve/models/v1_murmurhash_request.py` |
| `V1MurmurhashResponse` | `api_verve/models/v1_murmurhash_response.py` |
| `MurmurhashErrorBody` | `api_verve/errors/murmurhash_error.py` |

### client.data_processing.sqlexplainer

- **Route**: `POST /v1/sqlexplainer`
- **Auth**: `api_key`
- **Signature**: `def sqlexplainer(body: V1SqlexplainerRequest | V1SqlexplainerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SqlexplainerResponse`
- **Returns (raw)**: `ApiResult[V1SqlexplainerResponse, SqlexplainerErrorBody]`
- **Error**: `SqlexplainerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SqlexplainerRequest` | `api_verve/models/v1_sqlexplainer_request.py` |
| `V1SqlexplainerRequestDict` | `api_verve/models/v1_sqlexplainer_request.py` |
| `V1SqlexplainerResponse` | `api_verve/models/v1_sqlexplainer_response.py` |
| `SqlexplainerErrorBody` | `api_verve/errors/sqlexplainer_error.py` |

