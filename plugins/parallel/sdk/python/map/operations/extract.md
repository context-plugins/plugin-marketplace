<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extract — operations

Accessor: `client.extract` · Source: `parallel/apis/extract.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.extract.extract_v1_extract_post

- **Route**: `POST /v1/extract`
- **Auth**: `api_key_auth`
- **Signature**: `def extract_v1_extract_post(body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ExtractResponse`
- **Returns (raw)**: `ApiResult[V1ExtractResponse, ExtractV1ExtractPostErrorBody]`
- **Error**: `ExtractV1ExtractPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ExtractRequest` | `parallel/models/v1_extract_request.py` |
| `V1ExtractRequestDict` | `parallel/models/v1_extract_request.py` |
| `V1ExtractResponse` | `parallel/models/v1_extract_response.py` |
| `ExtractV1ExtractPostErrorBody` | `parallel/errors/extract_v1_extract_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

