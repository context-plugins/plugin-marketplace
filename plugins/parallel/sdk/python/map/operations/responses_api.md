<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResponsesApi — operations

Accessor: `client.responses_api` · Source: `parallel/apis/responses_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.responses_api.create_response_v1_responses_post

- **Route**: `POST /v1/responses`
- **Auth**: `api_key_auth`
- **Signature**: `def create_response_v1_responses_post(body: ResponseCreateRequest | ResponseCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Response`
- **Returns (raw)**: `ApiResult[Response, CreateResponseV1ResponsesPostErrorBody]`
- **Error**: `CreateResponseV1ResponsesPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponseCreateRequest` | `parallel/models/response_create_request.py` |
| `ResponseCreateRequestDict` | `parallel/models/response_create_request.py` |
| `Response` | `parallel/models/response.py` |
| `CreateResponseV1ResponsesPostErrorBody` | `parallel/errors/create_response_v1_responses_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

