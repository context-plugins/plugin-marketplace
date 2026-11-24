<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_lex/apis/operations.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.delete_slot_type_version

- **Route**: `DELETE /slottypes/{name}/version/{version}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_operations_api`
- **Signature**: `def delete_slot_type_version(name: str, version: str, *, body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteSlotTypeVersionErrorBody]`
- **Error**: `DeleteSlotTypeVersionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSlotTypeVersionRequest` | `amazon_lex/models/delete_slot_type_version_request.py` |
| `DeleteSlotTypeVersionRequestDict` | `amazon_lex/models/delete_slot_type_version_request.py` |
| `DeleteSlotTypeVersionErrorBody` | `amazon_lex/errors/delete_slot_type_version_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.operations.get_intents

- **Route**: `GET /intents`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_operations_api`
- **Signature**: `def get_intents(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetIntentsResponse`
- **Returns (raw)**: `ApiResult[GetIntentsResponse, GetIntentsErrorBody]`
- **Error**: `GetIntentsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIntentsResponse` | `amazon_lex/models/get_intents_response.py` |
| `GetIntentsErrorBody` | `amazon_lex/errors/get_intents_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.operations.get_slot_types

- **Route**: `GET /slottypes`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_operations_api`
- **Signature**: `def get_slot_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetSlotTypesResponse`
- **Returns (raw)**: `ApiResult[GetSlotTypesResponse, GetSlotTypesErrorBody]`
- **Error**: `GetSlotTypesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSlotTypesResponse` | `amazon_lex/models/get_slot_types_response.py` |
| `GetSlotTypesErrorBody` | `amazon_lex/errors/get_slot_types_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.operations.get_utterances_view

- **Route**: `GET /bots/{botName}/utterances?view=aggregation`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_operations_api`
- **Signature**: `def get_utterances_view(bot_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`
- **Params**: `bot_name` — path `botName`
- **Returns (parsed)**: `GetUtterancesViewResponse`
- **Returns (raw)**: `ApiResult[GetUtterancesViewResponse, GetUtterancesViewErrorBody]`
- **Error**: `GetUtterancesViewErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetUtterancesViewResponse` | `amazon_lex/models/get_utterances_view_response.py` |
| `GetUtterancesViewErrorBody` | `amazon_lex/errors/get_utterances_view_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.operations.post_content

- **Route**: `POST /bot/{botName}/alias/{botAlias}/user/{userId}/content`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_operations_api`
- **Signature**: `def post_content(bot_name: str, bot_alias: str, user_id: str, *, body: PostContentRequest | PostContentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `user_id`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `PostContentResponse`
- **Returns (raw)**: `ApiResult[PostContentResponse, PostContentErrorBody]`
- **Error**: `PostContentErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `NotAcceptableException` [406] · `RequestTimeoutException` [408] · `ConflictException` [409] · `UnsupportedMediaTypeException` [415] · `RuntimeLexDependencyFailedException` [424] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RuntimeLexBadGatewayException` [502] · `LoopDetectedException` [508] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostContentRequest` | `amazon_lex/models/post_content_request.py` |
| `PostContentRequestDict` | `amazon_lex/models/post_content_request.py` |
| `PostContentResponse` | `amazon_lex/models/post_content_response.py` |
| `PostContentErrorBody` | `amazon_lex/errors/post_content_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `NotAcceptableException` | `amazon_lex/models/not_acceptable_exception.py` |
| `RequestTimeoutException` | `amazon_lex/models/request_timeout_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `UnsupportedMediaTypeException` | `amazon_lex/models/unsupported_media_type_exception.py` |
| `RuntimeLexDependencyFailedException` | `amazon_lex/models/runtime_lex_dependency_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |
| `RuntimeLexBadGatewayException` | `amazon_lex/models/runtime_lex_bad_gateway_exception.py` |
| `LoopDetectedException` | `amazon_lex/models/loop_detected_exception.py` |

### client.operations.post_text

- **Route**: `POST /bot/{botName}/alias/{botAlias}/user/{userId}/text`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_operations_api`
- **Signature**: `def post_text(bot_name: str, bot_alias: str, user_id: str, *, body: PostTextRequest | PostTextRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `user_id`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `PostTextResponse`
- **Returns (raw)**: `ApiResult[PostTextResponse, PostTextErrorBody]`
- **Error**: `PostTextErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `RuntimeLexDependencyFailedException` [424] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RuntimeLexBadGatewayException` [502] · `LoopDetectedException` [508] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostTextRequest` | `amazon_lex/models/post_text_request.py` |
| `PostTextRequestDict` | `amazon_lex/models/post_text_request.py` |
| `PostTextResponse` | `amazon_lex/models/post_text_response.py` |
| `PostTextErrorBody` | `amazon_lex/errors/post_text_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `RuntimeLexDependencyFailedException` | `amazon_lex/models/runtime_lex_dependency_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |
| `RuntimeLexBadGatewayException` | `amazon_lex/models/runtime_lex_bad_gateway_exception.py` |
| `LoopDetectedException` | `amazon_lex/models/loop_detected_exception.py` |

