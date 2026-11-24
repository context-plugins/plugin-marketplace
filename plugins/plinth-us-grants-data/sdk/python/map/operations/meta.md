<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `plinth_us_grants_data/apis/meta.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.meta.get_meta

- **Route**: `GET /api/v1/meta`
- **Signature**: `def get_meta(*, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `jurisdiction` — query
- **Returns (parsed)**: `MetaResponse`
- **Returns (raw)**: `ApiResult[MetaResponse, GetMetaErrorBody]`
- **Error**: `GetMetaErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetaResponse` | `plinth_us_grants_data/models/meta_response.py` |
| `GetMetaErrorBody` | `plinth_us_grants_data/errors/get_meta_error.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

