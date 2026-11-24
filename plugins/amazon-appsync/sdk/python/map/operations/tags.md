<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `amazon_app_sync/apis/tags.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tags.list_tags_for_resource

- **Route**: `GET /v1/tags/{resourceArn}`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn`
- **Returns (parsed)**: `ListTagsForResourceResponse`
- **Returns (raw)**: `ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTagsForResourceResponse` | `amazon_app_sync/models/list_tags_for_resource_response.py` |
| `ListTagsForResourceErrorBody` | `amazon_app_sync/errors/list_tags_for_resource_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.tags.tag_resource

- **Route**: `POST /v1/tags/{resourceArn}`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(resource_arn: str, *, body: V1TagsRequest | V1TagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1TagsRequest` | `amazon_app_sync/models/v1_tags_request.py` |
| `V1TagsRequestDict` | `amazon_app_sync/models/v1_tags_request.py` |
| `TagResourceErrorBody` | `amazon_app_sync/errors/tag_resource_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.tags.untag_resource

- **Route**: `DELETE /v1/tags/{resourceArn}`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(resource_arn: str, tag_keys: list[str], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`, `tag_keys`
- **Params**: `resource_arn` — path `resourceArn` · `tag_keys` — query `tagKeys`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UntagResourceErrorBody` | `amazon_app_sync/errors/untag_resource_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

