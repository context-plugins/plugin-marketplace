<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentReferenceApi — operations

Accessor: `client.document_reference_api` · Source: `health_gorilla/apis/document_reference_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.document_reference_api.read_document_reference

- **Route**: `GET /DocumentReference/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_document_reference(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `DocumentReference`
- **Returns (raw)**: `ApiResult[DocumentReference, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DocumentReference` | `health_gorilla/models/document_reference.py` |

### client.document_reference_api.search_document_references

- **Route**: `GET /DocumentReference`
- **Auth**: `bearer_auth`
- **Signature**: `def search_document_references(*, patient: str | None = None, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `patient` — query · `type_` — query `type` · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |

