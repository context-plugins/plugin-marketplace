<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `amazon_lex/apis/tags.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tags.list_tags_for_resource

- **Route**: `GET /tags/{resourceARN}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_tags_api`
- **Signature**: `def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceARN`
- **Returns (parsed)**: `ListTagsForResourceResponse`
- **Returns (raw)**: `ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTagsForResourceResponse` | `amazon_lex/models/list_tags_for_resource_response.py` |
| `ListTagsForResourceErrorBody` | `amazon_lex/errors/list_tags_for_resource_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.tags.list_tags_for_resource1

- **Route**: `GET /tags/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_tags_api`
- **Signature**: `def list_tags_for_resource1(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn`
- **Returns (parsed)**: `ModelsLexListTagsForResourceResponse`
- **Returns (raw)**: `ApiResult[ModelsLexListTagsForResourceResponse, ListTagsForResource1ErrorBody]`
- **Error**: `ListTagsForResource1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexListTagsForResourceResponse` | `amazon_lex/models/models_lex_list_tags_for_resource_response.py` |
| `ListTagsForResource1ErrorBody` | `amazon_lex/errors/list_tags_for_resource1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.tags.tag_resource

- **Route**: `POST /tags/{resourceARN}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_tags_api`
- **Signature**: `def tag_resource(resource_arn: str, *, body: TagResourceRequest | TagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceARN` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagResourceRequest` | `amazon_lex/models/tag_resource_request.py` |
| `TagResourceRequestDict` | `amazon_lex/models/tag_resource_request.py` |
| `TagResourceErrorBody` | `amazon_lex/errors/tag_resource_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.tags.tag_resource1

- **Route**: `POST /tags/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_tags_api`
- **Signature**: `def tag_resource1(resource_arn: str, *, body: ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TagResource1ErrorBody]`
- **Error**: `TagResource1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexTagResourceRequest` | `amazon_lex/models/models_lex_tag_resource_request.py` |
| `ModelsLexTagResourceRequestDict` | `amazon_lex/models/models_lex_tag_resource_request.py` |
| `TagResource1ErrorBody` | `amazon_lex/errors/tag_resource1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.tags.untag_resource

- **Route**: `DELETE /tags/{resourceARN}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_tags_api`
- **Signature**: `def untag_resource(resource_arn: str, *, body: UntagResourceRequest | UntagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceARN` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UntagResourceRequest` | `amazon_lex/models/untag_resource_request.py` |
| `UntagResourceRequestDict` | `amazon_lex/models/untag_resource_request.py` |
| `UntagResourceErrorBody` | `amazon_lex/errors/untag_resource_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.tags.untag_resource1

- **Route**: `DELETE /tags/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_tags_api`
- **Signature**: `def untag_resource1(resource_arn: str, *, body: ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UntagResource1ErrorBody]`
- **Error**: `UntagResource1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexUntagResourceRequest` | `amazon_lex/models/models_lex_untag_resource_request.py` |
| `ModelsLexUntagResourceRequestDict` | `amazon_lex/models/models_lex_untag_resource_request.py` |
| `UntagResource1ErrorBody` | `amazon_lex/errors/untag_resource1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

