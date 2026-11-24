<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.batch` · Source: `plinth_us_grants_data/apis/batch.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.batch.batch_lookup

- **Route**: `POST /api/v1/batch`
- **Auth**: `api_key_auth`
- **Signature**: `def batch_lookup(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BatchResponse`
- **Returns (raw)**: `ApiResult[BatchResponse, BatchLookupErrorBody]`
- **Error**: `BatchLookupErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRequest` | `plinth_us_grants_data/models/batch_request.py` |
| `BatchRequestDict` | `plinth_us_grants_data/models/batch_request.py` |
| `BatchResponse` | `plinth_us_grants_data/models/batch_response.py` |
| `BatchLookupErrorBody` | `plinth_us_grants_data/errors/batch_lookup_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.batch.list_batch_fields

- **Route**: `GET /api/v1/batch/fields`
- **Signature**: `def list_batch_fields(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

