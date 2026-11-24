<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rest — operations

Accessor: `client.rest` · Source: `instacart/apis/rest.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.rest.create

- **Route**: `POST /rest/llm_integration/openapi/v2_1/recipes`
- **Server**: `default_instacart_rest_api`
- **Signature**: `def create(body: CreateRequest | CreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateErrorBody]`
- **Error**: `CreateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateRequest` | `instacart/models/create_request.py` |
| `CreateRequestDict` | `instacart/models/create_request.py` |
| `CreateErrorBody` | `instacart/errors/create_error.py` |

