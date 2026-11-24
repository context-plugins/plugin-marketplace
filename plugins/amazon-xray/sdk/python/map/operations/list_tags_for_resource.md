<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListTagsForResource — operations

Accessor: `client.list_tags_for_resource` · Source: `aws_x_ray/apis/list_tags_for_resource.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.list_tags_for_resource.list_tags_for_resource

- **Route**: `POST /ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(*, body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListTagsForResourceResponse`
- **Returns (raw)**: `ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ResourceNotFoundException` [404] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTagsForResourceRequest` | `aws_x_ray/models/list_tags_for_resource_request.py` |
| `ListTagsForResourceRequestDict` | `aws_x_ray/models/list_tags_for_resource_request.py` |
| `ListTagsForResourceResponse` | `aws_x_ray/models/list_tags_for_resource_response.py` |
| `ListTagsForResourceErrorBody` | `aws_x_ray/errors/list_tags_for_resource_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ResourceNotFoundException` | `aws_x_ray/models/resource_not_found_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

