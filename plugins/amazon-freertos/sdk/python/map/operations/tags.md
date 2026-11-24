<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `amazon_free_rtos/apis/tags.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tags.list_tags_for_resource

- **Route**: `GET /tags/{resourceArn}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn`
- **Returns (parsed)**: `TagsResponse`
- **Returns (raw)**: `ApiResult[TagsResponse, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsResponse` | `amazon_free_rtos/models/tags_response.py` |
| `ListTagsForResourceErrorBody` | `amazon_free_rtos/errors/list_tags_for_resource_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.tags.tag_resource

- **Route**: `POST /tags/{resourceArn}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def tag_resource(resource_arn: str, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`, `body`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsRequest` | `amazon_free_rtos/models/tags_request.py` |
| `TagsRequestDict` | `amazon_free_rtos/models/tags_request.py` |
| `TagResourceErrorBody` | `amazon_free_rtos/errors/tag_resource_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

