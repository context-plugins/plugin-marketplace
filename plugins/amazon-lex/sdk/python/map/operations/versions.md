<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.versions` · Source: `amazon_lex/apis/versions.py` · 15 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.versions.create_bot_version2

- **Route**: `POST /bots/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_bot_version2(name: str, *, body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi`
- **Returns (raw)**: `ApiResult[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi, CreateBotVersion2ErrorBody]`
- **Error**: `CreateBotVersion2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexCreateBotVersionRequest` | `amazon_lex/models/models_lex_create_bot_version_request.py` |
| `ModelsLexCreateBotVersionRequestDict` | `amazon_lex/models/models_lex_create_bot_version_request.py` |
| `ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi` | `amazon_lex/models/models_lex_create_bot_version_response_amazon_lex_model_building_v2_versions_api.py` |
| `CreateBotVersion2ErrorBody` | `amazon_lex/errors/create_bot_version2_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.create_intent_version

- **Route**: `POST /intents/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_intent_version(name: str, *, body: CreateIntentVersionRequest | CreateIntentVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `CreateIntentVersionResponse`
- **Returns (raw)**: `ApiResult[CreateIntentVersionResponse, CreateIntentVersionErrorBody]`
- **Error**: `CreateIntentVersionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateIntentVersionRequest` | `amazon_lex/models/create_intent_version_request.py` |
| `CreateIntentVersionRequestDict` | `amazon_lex/models/create_intent_version_request.py` |
| `CreateIntentVersionResponse` | `amazon_lex/models/create_intent_version_response.py` |
| `CreateIntentVersionErrorBody` | `amazon_lex/errors/create_intent_version_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.create_slot_type_version

- **Route**: `POST /slottypes/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_slot_type_version(name: str, *, body: CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `CreateSlotTypeVersionResponse`
- **Returns (raw)**: `ApiResult[CreateSlotTypeVersionResponse, CreateSlotTypeVersionErrorBody]`
- **Error**: `CreateSlotTypeVersionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSlotTypeVersionRequest` | `amazon_lex/models/create_slot_type_version_request.py` |
| `CreateSlotTypeVersionRequestDict` | `amazon_lex/models/create_slot_type_version_request.py` |
| `CreateSlotTypeVersionResponse` | `amazon_lex/models/create_slot_type_version_response.py` |
| `CreateSlotTypeVersionErrorBody` | `amazon_lex/errors/create_slot_type_version_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.delete_bot_version2

- **Route**: `DELETE /bots/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_bot_version2(name: str, version: str, *, body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteBotVersion2ErrorBody]`
- **Error**: `DeleteBotVersion2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteBotVersionRequest` | `amazon_lex/models/models_lex_delete_bot_version_request.py` |
| `ModelsLexDeleteBotVersionRequestDict` | `amazon_lex/models/models_lex_delete_bot_version_request.py` |
| `DeleteBotVersion2ErrorBody` | `amazon_lex/errors/delete_bot_version2_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.delete_intent_version

- **Route**: `DELETE /intents/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_intent_version(name: str, version: str, *, body: DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteIntentVersionErrorBody]`
- **Error**: `DeleteIntentVersionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteIntentVersionRequest` | `amazon_lex/models/delete_intent_version_request.py` |
| `DeleteIntentVersionRequestDict` | `amazon_lex/models/delete_intent_version_request.py` |
| `DeleteIntentVersionErrorBody` | `amazon_lex/errors/delete_intent_version_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.delete_slot_type_version2

- **Route**: `DELETE /slottypes/{name}/version/{version}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_slot_type_version2(name: str, version: str, *, body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteSlotTypeVersion2ErrorBody]`
- **Error**: `DeleteSlotTypeVersion2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSlotTypeVersionRequest` | `amazon_lex/models/delete_slot_type_version_request.py` |
| `DeleteSlotTypeVersionRequestDict` | `amazon_lex/models/delete_slot_type_version_request.py` |
| `DeleteSlotTypeVersion2ErrorBody` | `amazon_lex/errors/delete_slot_type_version2_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.get_bot

- **Route**: `GET /bots/{name}/versions/{versionOrAlias}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_bot(name: str, version_or_alias: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version_or_alias`
- **Params**: `name` — path · `version_or_alias` — path `versionOrAlias`
- **Returns (parsed)**: `GetBotResponse`
- **Returns (raw)**: `ApiResult[GetBotResponse, GetBotErrorBody]`
- **Error**: `GetBotErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotResponse` | `amazon_lex/models/get_bot_response.py` |
| `GetBotErrorBody` | `amazon_lex/errors/get_bot_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.get_bot_versions

- **Route**: `GET /bots/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_bot_versions(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path
- **Returns (parsed)**: `GetBotVersionsResponse`
- **Returns (raw)**: `ApiResult[GetBotVersionsResponse, GetBotVersionsErrorBody]`
- **Error**: `GetBotVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotVersionsResponse` | `amazon_lex/models/get_bot_versions_response.py` |
| `GetBotVersionsErrorBody` | `amazon_lex/errors/get_bot_versions_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.get_intent

- **Route**: `GET /intents/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_intent(name: str, version: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path
- **Returns (parsed)**: `GetIntentResponse`
- **Returns (raw)**: `ApiResult[GetIntentResponse, GetIntentErrorBody]`
- **Error**: `GetIntentErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIntentResponse` | `amazon_lex/models/get_intent_response.py` |
| `GetIntentErrorBody` | `amazon_lex/errors/get_intent_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.get_intent_versions

- **Route**: `GET /intents/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_intent_versions(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path
- **Returns (parsed)**: `GetIntentVersionsResponse`
- **Returns (raw)**: `ApiResult[GetIntentVersionsResponse, GetIntentVersionsErrorBody]`
- **Error**: `GetIntentVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIntentVersionsResponse` | `amazon_lex/models/get_intent_versions_response.py` |
| `GetIntentVersionsErrorBody` | `amazon_lex/errors/get_intent_versions_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.get_slot_type

- **Route**: `GET /slottypes/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_slot_type(name: str, version: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path
- **Returns (parsed)**: `GetSlotTypeResponse`
- **Returns (raw)**: `ApiResult[GetSlotTypeResponse, GetSlotTypeErrorBody]`
- **Error**: `GetSlotTypeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSlotTypeResponse` | `amazon_lex/models/get_slot_type_response.py` |
| `GetSlotTypeErrorBody` | `amazon_lex/errors/get_slot_type_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.get_slot_type_versions

- **Route**: `GET /slottypes/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_slot_type_versions(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path
- **Returns (parsed)**: `GetSlotTypeVersionsResponse`
- **Returns (raw)**: `ApiResult[GetSlotTypeVersionsResponse, GetSlotTypeVersionsErrorBody]`
- **Error**: `GetSlotTypeVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSlotTypeVersionsResponse` | `amazon_lex/models/get_slot_type_versions_response.py` |
| `GetSlotTypeVersionsErrorBody` | `amazon_lex/errors/get_slot_type_versions_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.put_bot

- **Route**: `PUT /bots/{name}/versions/$LATEST`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def put_bot(name: str, *, body: PutBotRequest | PutBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `PutBotResponse`
- **Returns (raw)**: `ApiResult[PutBotResponse, PutBotErrorBody]`
- **Error**: `PutBotErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutBotRequest` | `amazon_lex/models/put_bot_request.py` |
| `PutBotRequestDict` | `amazon_lex/models/put_bot_request.py` |
| `PutBotResponse` | `amazon_lex/models/put_bot_response.py` |
| `PutBotErrorBody` | `amazon_lex/errors/put_bot_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.put_intent

- **Route**: `PUT /intents/{name}/versions/$LATEST`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def put_intent(name: str, *, body: PutIntentRequest | PutIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `PutIntentResponse`
- **Returns (raw)**: `ApiResult[PutIntentResponse, PutIntentErrorBody]`
- **Error**: `PutIntentErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutIntentRequest` | `amazon_lex/models/put_intent_request.py` |
| `PutIntentRequestDict` | `amazon_lex/models/put_intent_request.py` |
| `PutIntentResponse` | `amazon_lex/models/put_intent_response.py` |
| `PutIntentErrorBody` | `amazon_lex/errors/put_intent_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.versions.put_slot_type

- **Route**: `PUT /slottypes/{name}/versions/$LATEST`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def put_slot_type(name: str, *, body: PutSlotTypeRequest | PutSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `PutSlotTypeResponse`
- **Returns (raw)**: `ApiResult[PutSlotTypeResponse, PutSlotTypeErrorBody]`
- **Error**: `PutSlotTypeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutSlotTypeRequest` | `amazon_lex/models/put_slot_type_request.py` |
| `PutSlotTypeRequestDict` | `amazon_lex/models/put_slot_type_request.py` |
| `PutSlotTypeResponse` | `amazon_lex/models/put_slot_type_response.py` |
| `PutSlotTypeErrorBody` | `amazon_lex/errors/put_slot_type_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

