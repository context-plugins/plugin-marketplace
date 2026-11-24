<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `fireflies_ai/client.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.graphql_operation

- **Route**: `POST /`
- **Auth**: `bearer_auth`
- **Signature**: `def graphql_operation(body: GraphQlRequest | GraphQlRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GraphQlResponse`
- **Returns (raw)**: `ApiResult[GraphQlResponse, GraphqlOperationErrorBody]`
- **Error**: `GraphqlOperationErrorBody` — **Case A (typed)**
- **Error arms**: `GraphQlErrorResponse` [401] · `RawError` [429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `GraphQlRequest` | `fireflies_ai/models/graph_ql_request.py` |
| `GraphQlRequestDict` | `fireflies_ai/models/graph_ql_request.py` |
| `GraphQlResponse` | `fireflies_ai/models/graph_ql_response.py` |
| `GraphqlOperationErrorBody` | `fireflies_ai/errors/graphql_operation_error.py` |
| `GraphQlErrorResponse` | `fireflies_ai/models/graph_ql_error_response.py` |

