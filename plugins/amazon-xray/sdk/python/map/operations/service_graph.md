<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceGraph — operations

Accessor: `client.service_graph` · Source: `aws_x_ray/apis/service_graph.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service_graph.get_service_graph

- **Route**: `POST /ServiceGraph`
- **Auth**: `sigv4`
- **Signature**: `def get_service_graph(*, body: ServiceGraphRequest | ServiceGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetServiceGraphResult`
- **Returns (raw)**: `ApiResult[GetServiceGraphResult, GetServiceGraphErrorBody]`
- **Error**: `GetServiceGraphErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceGraphRequest` | `aws_x_ray/models/service_graph_request.py` |
| `ServiceGraphRequestDict` | `aws_x_ray/models/service_graph_request.py` |
| `GetServiceGraphResult` | `aws_x_ray/models/get_service_graph_result.py` |
| `GetServiceGraphErrorBody` | `aws_x_ray/errors/get_service_graph_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

