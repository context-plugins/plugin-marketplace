<!-- Generated file — do not edit; regenerated with the SDK. -->

# Libraries — operations

Accessor: `client.libraries` · Source: `audioscrape/apis/libraries.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.libraries.get_dataset

- **Route**: `GET /api/datasets/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_dataset(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `DatasetDetail`
- **Returns (raw)**: `ApiResult[DatasetDetail, GetDatasetErrorBody]`
- **Error**: `GetDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatasetDetail` | `audioscrape/models/dataset_detail.py` |
| `GetDatasetErrorBody` | `audioscrape/errors/get_dataset_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.libraries.get_library

- **Route**: `GET /api/libraries/{slug}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_library(slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path
- **Returns (parsed)**: `LibraryDetail`
- **Returns (raw)**: `ApiResult[LibraryDetail, GetLibraryErrorBody]`
- **Error**: `GetLibraryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LibraryDetail` | `audioscrape/models/library_detail.py` |
| `GetLibraryErrorBody` | `audioscrape/errors/get_library_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.libraries.list_libraries

- **Route**: `GET /api/libraries`
- **Auth**: `bearer_auth`
- **Signature**: `def list_libraries(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `LibraryList`
- **Returns (raw)**: `ApiResult[LibraryList, ListLibrariesErrorBody]`
- **Error**: `ListLibrariesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LibraryList` | `audioscrape/models/library_list.py` |
| `ListLibrariesErrorBody` | `audioscrape/errors/list_libraries_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

