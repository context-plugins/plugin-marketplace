<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bots — operations

Accessor: `client.bots` · Source: `amazon_lex/apis/bots.py` · 89 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bots.batch_create_custom_vocabulary_item

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def batch_create_custom_vocabulary_item(bot_id: str, bot_version: str, locale_id: str, *, body: BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `BatchCreateCustomVocabularyItemResponse`
- **Returns (raw)**: `ApiResult[BatchCreateCustomVocabularyItemResponse, BatchCreateCustomVocabularyItemErrorBody]`
- **Error**: `BatchCreateCustomVocabularyItemErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchCreateCustomVocabularyItemRequest` | `amazon_lex/models/batch_create_custom_vocabulary_item_request.py` |
| `BatchCreateCustomVocabularyItemRequestDict` | `amazon_lex/models/batch_create_custom_vocabulary_item_request.py` |
| `BatchCreateCustomVocabularyItemResponse` | `amazon_lex/models/batch_create_custom_vocabulary_item_response.py` |
| `BatchCreateCustomVocabularyItemErrorBody` | `amazon_lex/errors/batch_create_custom_vocabulary_item_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.batch_delete_custom_vocabulary_item

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def batch_delete_custom_vocabulary_item(bot_id: str, bot_version: str, locale_id: str, *, body: BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `BatchDeleteCustomVocabularyItemResponse`
- **Returns (raw)**: `ApiResult[BatchDeleteCustomVocabularyItemResponse, BatchDeleteCustomVocabularyItemErrorBody]`
- **Error**: `BatchDeleteCustomVocabularyItemErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchDeleteCustomVocabularyItemRequest` | `amazon_lex/models/batch_delete_custom_vocabulary_item_request.py` |
| `BatchDeleteCustomVocabularyItemRequestDict` | `amazon_lex/models/batch_delete_custom_vocabulary_item_request.py` |
| `BatchDeleteCustomVocabularyItemResponse` | `amazon_lex/models/batch_delete_custom_vocabulary_item_response.py` |
| `BatchDeleteCustomVocabularyItemErrorBody` | `amazon_lex/errors/batch_delete_custom_vocabulary_item_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.batch_update_custom_vocabulary_item

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def batch_update_custom_vocabulary_item(bot_id: str, bot_version: str, locale_id: str, *, body: BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `BatchUpdateCustomVocabularyItemResponse`
- **Returns (raw)**: `ApiResult[BatchUpdateCustomVocabularyItemResponse, BatchUpdateCustomVocabularyItemErrorBody]`
- **Error**: `BatchUpdateCustomVocabularyItemErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchUpdateCustomVocabularyItemRequest` | `amazon_lex/models/batch_update_custom_vocabulary_item_request.py` |
| `BatchUpdateCustomVocabularyItemRequestDict` | `amazon_lex/models/batch_update_custom_vocabulary_item_request.py` |
| `BatchUpdateCustomVocabularyItemResponse` | `amazon_lex/models/batch_update_custom_vocabulary_item_response.py` |
| `BatchUpdateCustomVocabularyItemErrorBody` | `amazon_lex/errors/batch_update_custom_vocabulary_item_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.build_bot_locale

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def build_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, body: BuildBotLocaleRequest | BuildBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `BuildBotLocaleResponse`
- **Returns (raw)**: `ApiResult[BuildBotLocaleResponse, BuildBotLocaleErrorBody]`
- **Error**: `BuildBotLocaleErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildBotLocaleRequest` | `amazon_lex/models/build_bot_locale_request.py` |
| `BuildBotLocaleRequestDict` | `amazon_lex/models/build_bot_locale_request.py` |
| `BuildBotLocaleResponse` | `amazon_lex/models/build_bot_locale_response.py` |
| `BuildBotLocaleErrorBody` | `amazon_lex/errors/build_bot_locale_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_bot

- **Route**: `PUT /bots`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_bot(*, body: CreateBotRequest | CreateBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateBotResponse`
- **Returns (raw)**: `ApiResult[CreateBotResponse, CreateBotErrorBody]`
- **Error**: `CreateBotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBotRequest` | `amazon_lex/models/create_bot_request.py` |
| `CreateBotRequestDict` | `amazon_lex/models/create_bot_request.py` |
| `CreateBotResponse` | `amazon_lex/models/create_bot_response.py` |
| `CreateBotErrorBody` | `amazon_lex/errors/create_bot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_bot_alias

- **Route**: `PUT /bots/{botId}/botaliases`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_bot_alias(bot_id: str, *, body: CreateBotAliasRequest | CreateBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `CreateBotAliasResponse`
- **Returns (raw)**: `ApiResult[CreateBotAliasResponse, CreateBotAliasErrorBody]`
- **Error**: `CreateBotAliasErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBotAliasRequest` | `amazon_lex/models/create_bot_alias_request.py` |
| `CreateBotAliasRequestDict` | `amazon_lex/models/create_bot_alias_request.py` |
| `CreateBotAliasResponse` | `amazon_lex/models/create_bot_alias_response.py` |
| `CreateBotAliasErrorBody` | `amazon_lex/errors/create_bot_alias_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_bot_locale

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_bot_locale(bot_id: str, bot_version: str, *, body: CreateBotLocaleRequest | CreateBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `body` — JSON body
- **Returns (parsed)**: `CreateBotLocaleResponse`
- **Returns (raw)**: `ApiResult[CreateBotLocaleResponse, CreateBotLocaleErrorBody]`
- **Error**: `CreateBotLocaleErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBotLocaleRequest` | `amazon_lex/models/create_bot_locale_request.py` |
| `CreateBotLocaleRequestDict` | `amazon_lex/models/create_bot_locale_request.py` |
| `CreateBotLocaleResponse` | `amazon_lex/models/create_bot_locale_response.py` |
| `CreateBotLocaleErrorBody` | `amazon_lex/errors/create_bot_locale_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_bot_replica

- **Route**: `PUT /bots/{botId}/replicas`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_bot_replica(bot_id: str, *, body: CreateBotReplicaRequest | CreateBotReplicaRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `CreateBotReplicaResponse`
- **Returns (raw)**: `ApiResult[CreateBotReplicaResponse, CreateBotReplicaErrorBody]`
- **Error**: `CreateBotReplicaErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBotReplicaRequest` | `amazon_lex/models/create_bot_replica_request.py` |
| `CreateBotReplicaRequestDict` | `amazon_lex/models/create_bot_replica_request.py` |
| `CreateBotReplicaResponse` | `amazon_lex/models/create_bot_replica_response.py` |
| `CreateBotReplicaErrorBody` | `amazon_lex/errors/create_bot_replica_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_bot_version

- **Route**: `PUT /bots/{botId}/botversions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_bot_version(bot_id: str, *, body: CreateBotVersionRequest | CreateBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `CreateBotVersionResponse`
- **Returns (raw)**: `ApiResult[CreateBotVersionResponse, CreateBotVersionErrorBody]`
- **Error**: `CreateBotVersionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBotVersionRequest` | `amazon_lex/models/create_bot_version_request.py` |
| `CreateBotVersionRequestDict` | `amazon_lex/models/create_bot_version_request.py` |
| `CreateBotVersionResponse` | `amazon_lex/models/create_bot_version_response.py` |
| `CreateBotVersionErrorBody` | `amazon_lex/errors/create_bot_version_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_bot_version1

- **Route**: `POST /bots/{name}/versions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_bot_version1(name: str, *, body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `ModelsLexCreateBotVersionResponse`
- **Returns (raw)**: `ApiResult[ModelsLexCreateBotVersionResponse, CreateBotVersion1ErrorBody]`
- **Error**: `CreateBotVersion1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexCreateBotVersionRequest` | `amazon_lex/models/models_lex_create_bot_version_request.py` |
| `ModelsLexCreateBotVersionRequestDict` | `amazon_lex/models/models_lex_create_bot_version_request.py` |
| `ModelsLexCreateBotVersionResponse` | `amazon_lex/models/models_lex_create_bot_version_response.py` |
| `CreateBotVersion1ErrorBody` | `amazon_lex/errors/create_bot_version1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.create_intent

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_intent(bot_id: str, bot_version: str, locale_id: str, *, body: CreateIntentRequest | CreateIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `CreateIntentResponse`
- **Returns (raw)**: `ApiResult[CreateIntentResponse, CreateIntentErrorBody]`
- **Error**: `CreateIntentErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateIntentRequest` | `amazon_lex/models/create_intent_request.py` |
| `CreateIntentRequestDict` | `amazon_lex/models/create_intent_request.py` |
| `CreateIntentResponse` | `amazon_lex/models/create_intent_response.py` |
| `CreateIntentErrorBody` | `amazon_lex/errors/create_intent_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_slot

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: CreateSlotRequest | CreateSlotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `body` — JSON body
- **Returns (parsed)**: `CreateSlotResponse`
- **Returns (raw)**: `ApiResult[CreateSlotResponse, CreateSlotErrorBody]`
- **Error**: `CreateSlotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSlotRequest` | `amazon_lex/models/create_slot_request.py` |
| `CreateSlotRequestDict` | `amazon_lex/models/create_slot_request.py` |
| `CreateSlotResponse` | `amazon_lex/models/create_slot_response.py` |
| `CreateSlotErrorBody` | `amazon_lex/errors/create_slot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.create_slot_type

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_slot_type(bot_id: str, bot_version: str, locale_id: str, *, body: CreateSlotTypeRequest | CreateSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `CreateSlotTypeResponse`
- **Returns (raw)**: `ApiResult[CreateSlotTypeResponse, CreateSlotTypeErrorBody]`
- **Error**: `CreateSlotTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSlotTypeRequest` | `amazon_lex/models/create_slot_type_request.py` |
| `CreateSlotTypeRequestDict` | `amazon_lex/models/create_slot_type_request.py` |
| `CreateSlotTypeResponse` | `amazon_lex/models/create_slot_type_response.py` |
| `CreateSlotTypeErrorBody` | `amazon_lex/errors/create_slot_type_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot

- **Route**: `DELETE /bots/{botId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot(bot_id: str, *, body: DeleteBotRequest | DeleteBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `DeleteBotResponse`
- **Returns (raw)**: `ApiResult[DeleteBotResponse, DeleteBotErrorBody]`
- **Error**: `DeleteBotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotRequest` | `amazon_lex/models/delete_bot_request.py` |
| `DeleteBotRequestDict` | `amazon_lex/models/delete_bot_request.py` |
| `DeleteBotResponse` | `amazon_lex/models/delete_bot_response.py` |
| `DeleteBotErrorBody` | `amazon_lex/errors/delete_bot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot1

- **Route**: `DELETE /bots/{name}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot1(name: str, *, body: ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteBot1ErrorBody]`
- **Error**: `DeleteBot1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteBotRequest` | `amazon_lex/models/models_lex_delete_bot_request.py` |
| `ModelsLexDeleteBotRequestDict` | `amazon_lex/models/models_lex_delete_bot_request.py` |
| `DeleteBot1ErrorBody` | `amazon_lex/errors/delete_bot1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.delete_bot_alias1

- **Route**: `DELETE /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_alias1(bot_name: str, name: str, *, body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `name`
- **Params**: `bot_name` — path `botName` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteBotAlias1ErrorBody]`
- **Error**: `DeleteBotAlias1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteBotAliasRequest` | `amazon_lex/models/models_lex_delete_bot_alias_request.py` |
| `ModelsLexDeleteBotAliasRequestDict` | `amazon_lex/models/models_lex_delete_bot_alias_request.py` |
| `DeleteBotAlias1ErrorBody` | `amazon_lex/errors/delete_bot_alias1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.delete_bot_alias2

- **Route**: `DELETE /bots/{botId}/botaliases/{botAliasId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_alias2(bot_id: str, bot_alias_id: str, *, body: DeleteBotAliasRequest | DeleteBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `body` — JSON body
- **Returns (parsed)**: `DeleteBotAliasResponse`
- **Returns (raw)**: `ApiResult[DeleteBotAliasResponse, DeleteBotAlias2ErrorBody]`
- **Error**: `DeleteBotAlias2ErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotAliasRequest` | `amazon_lex/models/delete_bot_alias_request.py` |
| `DeleteBotAliasRequestDict` | `amazon_lex/models/delete_bot_alias_request.py` |
| `DeleteBotAliasResponse` | `amazon_lex/models/delete_bot_alias_response.py` |
| `DeleteBotAlias2ErrorBody` | `amazon_lex/errors/delete_bot_alias2_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot_analyzer_recommendation

- **Route**: `DELETE /bots/{botId}/botanalyzer/{botAnalyzerRequestId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_analyzer_recommendation(bot_id: str, bot_analyzer_request_id: str, *, body: DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_analyzer_request_id`
- **Params**: `bot_id` — path `botId` · `bot_analyzer_request_id` — path `botAnalyzerRequestId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteBotAnalyzerRecommendationErrorBody]`
- **Error**: `DeleteBotAnalyzerRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotAnalyzerRecommendationRequest` | `amazon_lex/models/delete_bot_analyzer_recommendation_request.py` |
| `DeleteBotAnalyzerRecommendationRequestDict` | `amazon_lex/models/delete_bot_analyzer_recommendation_request.py` |
| `DeleteBotAnalyzerRecommendationErrorBody` | `amazon_lex/errors/delete_bot_analyzer_recommendation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot_locale

- **Route**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, body: DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `DeleteBotLocaleResponse`
- **Returns (raw)**: `ApiResult[DeleteBotLocaleResponse, DeleteBotLocaleErrorBody]`
- **Error**: `DeleteBotLocaleErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotLocaleRequest` | `amazon_lex/models/delete_bot_locale_request.py` |
| `DeleteBotLocaleRequestDict` | `amazon_lex/models/delete_bot_locale_request.py` |
| `DeleteBotLocaleResponse` | `amazon_lex/models/delete_bot_locale_response.py` |
| `DeleteBotLocaleErrorBody` | `amazon_lex/errors/delete_bot_locale_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot_replica

- **Route**: `DELETE /bots/{botId}/replicas/{replicaRegion}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_replica(bot_id: str, replica_region: str, *, body: DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `replica_region`
- **Params**: `bot_id` — path `botId` · `replica_region` — path `replicaRegion` · `body` — JSON body
- **Returns (parsed)**: `DeleteBotReplicaResponse`
- **Returns (raw)**: `ApiResult[DeleteBotReplicaResponse, DeleteBotReplicaErrorBody]`
- **Error**: `DeleteBotReplicaErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotReplicaRequest` | `amazon_lex/models/delete_bot_replica_request.py` |
| `DeleteBotReplicaRequestDict` | `amazon_lex/models/delete_bot_replica_request.py` |
| `DeleteBotReplicaResponse` | `amazon_lex/models/delete_bot_replica_response.py` |
| `DeleteBotReplicaErrorBody` | `amazon_lex/errors/delete_bot_replica_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot_version

- **Route**: `DELETE /bots/{botId}/botversions/{botVersion}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_version(bot_id: str, bot_version: str, *, body: DeleteBotVersionRequest | DeleteBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `body` — JSON body
- **Returns (parsed)**: `DeleteBotVersionResponse`
- **Returns (raw)**: `ApiResult[DeleteBotVersionResponse, DeleteBotVersionErrorBody]`
- **Error**: `DeleteBotVersionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotVersionRequest` | `amazon_lex/models/delete_bot_version_request.py` |
| `DeleteBotVersionRequestDict` | `amazon_lex/models/delete_bot_version_request.py` |
| `DeleteBotVersionResponse` | `amazon_lex/models/delete_bot_version_response.py` |
| `DeleteBotVersionErrorBody` | `amazon_lex/errors/delete_bot_version_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_bot_version1

- **Route**: `DELETE /bots/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_bot_version1(name: str, version: str, *, body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `version`
- **Params**: `name` — path · `version` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteBotVersion1ErrorBody]`
- **Error**: `DeleteBotVersion1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteBotVersionRequest` | `amazon_lex/models/models_lex_delete_bot_version_request.py` |
| `ModelsLexDeleteBotVersionRequestDict` | `amazon_lex/models/models_lex_delete_bot_version_request.py` |
| `DeleteBotVersion1ErrorBody` | `amazon_lex/errors/delete_bot_version1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.delete_custom_vocabulary

- **Route**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_custom_vocabulary(bot_id: str, bot_version: str, locale_id: str, *, body: DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `DeleteCustomVocabularyResponse`
- **Returns (raw)**: `ApiResult[DeleteCustomVocabularyResponse, DeleteCustomVocabularyErrorBody]`
- **Error**: `DeleteCustomVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomVocabularyRequest` | `amazon_lex/models/delete_custom_vocabulary_request.py` |
| `DeleteCustomVocabularyRequestDict` | `amazon_lex/models/delete_custom_vocabulary_request.py` |
| `DeleteCustomVocabularyResponse` | `amazon_lex/models/delete_custom_vocabulary_response.py` |
| `DeleteCustomVocabularyErrorBody` | `amazon_lex/errors/delete_custom_vocabulary_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_intent

- **Route**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_intent(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: DeleteIntentRequest | DeleteIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteIntentErrorBody]`
- **Error**: `DeleteIntentErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteIntentRequest` | `amazon_lex/models/delete_intent_request.py` |
| `DeleteIntentRequestDict` | `amazon_lex/models/delete_intent_request.py` |
| `DeleteIntentErrorBody` | `amazon_lex/errors/delete_intent_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_intent1

- **Route**: `DELETE /intents/{name}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_intent1(name: str, *, body: ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteIntent1ErrorBody]`
- **Error**: `DeleteIntent1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteIntentRequest` | `amazon_lex/models/models_lex_delete_intent_request.py` |
| `ModelsLexDeleteIntentRequestDict` | `amazon_lex/models/models_lex_delete_intent_request.py` |
| `DeleteIntent1ErrorBody` | `amazon_lex/errors/delete_intent1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.delete_session

- **Route**: `DELETE /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_session(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: DeleteSessionRequest | DeleteSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`, `locale_id`, `session_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `locale_id` — path `localeId` · `session_id` — path `sessionId` · `body` — JSON body
- **Returns (parsed)**: `DeleteSessionResponse`
- **Returns (raw)**: `ApiResult[DeleteSessionResponse, DeleteSessionErrorBody]`
- **Error**: `DeleteSessionErrorBody` — **Case A (typed)**
- **Error arms**: `RuntimeV2LexValidationException` [400] · `AccessDeniedException` [403] · `RuntimeV2LexResourceNotFoundException` [404] · `RuntimeV2LexConflictException` [409] · `RuntimeV2LexThrottlingException` [429] · `RuntimeV2LexInternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSessionRequest` | `amazon_lex/models/delete_session_request.py` |
| `DeleteSessionRequestDict` | `amazon_lex/models/delete_session_request.py` |
| `DeleteSessionResponse` | `amazon_lex/models/delete_session_response.py` |
| `DeleteSessionErrorBody` | `amazon_lex/errors/delete_session_error.py` |
| `RuntimeV2LexValidationException` | `amazon_lex/models/runtime_v2_lex_validation_exception.py` |
| `AccessDeniedException` | `amazon_lex/models/access_denied_exception.py` |
| `RuntimeV2LexResourceNotFoundException` | `amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py` |
| `RuntimeV2LexConflictException` | `amazon_lex/models/runtime_v2_lex_conflict_exception.py` |
| `RuntimeV2LexThrottlingException` | `amazon_lex/models/runtime_v2_lex_throttling_exception.py` |
| `RuntimeV2LexInternalServerException` | `amazon_lex/models/runtime_v2_lex_internal_server_exception.py` |

### client.bots.delete_session1

- **Route**: `DELETE /bot/{botName}/alias/{botAlias}/user/{userId}/session`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_session1(bot_name: str, bot_alias: str, user_id: str, *, body: RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `user_id`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `RuntimeLexDeleteSessionResponse`
- **Returns (raw)**: `ApiResult[RuntimeLexDeleteSessionResponse, DeleteSession1ErrorBody]`
- **Error**: `DeleteSession1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RuntimeLexDeleteSessionRequest` | `amazon_lex/models/runtime_lex_delete_session_request.py` |
| `RuntimeLexDeleteSessionRequestDict` | `amazon_lex/models/runtime_lex_delete_session_request.py` |
| `RuntimeLexDeleteSessionResponse` | `amazon_lex/models/runtime_lex_delete_session_response.py` |
| `DeleteSession1ErrorBody` | `amazon_lex/errors/delete_session1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.delete_slot

- **Route**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, slot_id: str, *, body: DeleteSlotRequest | DeleteSlotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`, `slot_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `slot_id` — path `slotId` · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteSlotErrorBody]`
- **Error**: `DeleteSlotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSlotRequest` | `amazon_lex/models/delete_slot_request.py` |
| `DeleteSlotRequestDict` | `amazon_lex/models/delete_slot_request.py` |
| `DeleteSlotErrorBody` | `amazon_lex/errors/delete_slot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_slot_type

- **Route**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_slot_type(bot_id: str, bot_version: str, locale_id: str, slot_type_id: str, *, body: DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `slot_type_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `slot_type_id` — path `slotTypeId` · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteSlotTypeErrorBody]`
- **Error**: `DeleteSlotTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSlotTypeRequest` | `amazon_lex/models/delete_slot_type_request.py` |
| `DeleteSlotTypeRequestDict` | `amazon_lex/models/delete_slot_type_request.py` |
| `DeleteSlotTypeErrorBody` | `amazon_lex/errors/delete_slot_type_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_slot_type1

- **Route**: `DELETE /slottypes/{name}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_slot_type1(name: str, *, body: ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteSlotType1ErrorBody]`
- **Error**: `DeleteSlotType1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteSlotTypeRequest` | `amazon_lex/models/models_lex_delete_slot_type_request.py` |
| `ModelsLexDeleteSlotTypeRequestDict` | `amazon_lex/models/models_lex_delete_slot_type_request.py` |
| `DeleteSlotType1ErrorBody` | `amazon_lex/errors/delete_slot_type1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.delete_utterances

- **Route**: `DELETE /bots/{botId}/utterances`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_utterances(bot_id: str, *, body: DeleteUtterancesRequest | DeleteUtterancesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteUtterancesErrorBody]`
- **Error**: `DeleteUtterancesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUtterancesRequest` | `amazon_lex/models/delete_utterances_request.py` |
| `DeleteUtterancesRequestDict` | `amazon_lex/models/delete_utterances_request.py` |
| `DeleteUtterancesErrorBody` | `amazon_lex/errors/delete_utterances_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.delete_utterances1

- **Route**: `DELETE /bots/{botName}/utterances/{userId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_utterances1(bot_name: str, user_id: str, *, body: ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `user_id`
- **Params**: `bot_name` — path `botName` · `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteUtterances1ErrorBody]`
- **Error**: `DeleteUtterances1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsLexDeleteUtterancesRequest` | `amazon_lex/models/models_lex_delete_utterances_request.py` |
| `ModelsLexDeleteUtterancesRequestDict` | `amazon_lex/models/models_lex_delete_utterances_request.py` |
| `DeleteUtterances1ErrorBody` | `amazon_lex/errors/delete_utterances1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.describe_bot

- **Route**: `GET /bots/{botId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot(bot_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId`
- **Returns (parsed)**: `DescribeBotResponse`
- **Returns (raw)**: `ApiResult[DescribeBotResponse, DescribeBotErrorBody]`
- **Error**: `DescribeBotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotResponse` | `amazon_lex/models/describe_bot_response.py` |
| `DescribeBotErrorBody` | `amazon_lex/errors/describe_bot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_alias

- **Route**: `GET /bots/{botId}/botaliases/{botAliasId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_alias(bot_id: str, bot_alias_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId`
- **Returns (parsed)**: `DescribeBotAliasResponse`
- **Returns (raw)**: `ApiResult[DescribeBotAliasResponse, DescribeBotAliasErrorBody]`
- **Error**: `DescribeBotAliasErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotAliasResponse` | `amazon_lex/models/describe_bot_alias_response.py` |
| `DescribeBotAliasErrorBody` | `amazon_lex/errors/describe_bot_alias_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_analyzer_recommendation

- **Route**: `POST /bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_analyzer_recommendation(bot_id: str, bot_analyzer_request_id: str, *, body: DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_analyzer_request_id`
- **Params**: `bot_id` — path `botId` · `bot_analyzer_request_id` — path `botAnalyzerRequestId` · `body` — JSON body
- **Returns (parsed)**: `DescribeBotAnalyzerRecommendationResponse`
- **Returns (raw)**: `ApiResult[DescribeBotAnalyzerRecommendationResponse, DescribeBotAnalyzerRecommendationErrorBody]`
- **Error**: `DescribeBotAnalyzerRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotAnalyzerRecommendationRequest` | `amazon_lex/models/describe_bot_analyzer_recommendation_request.py` |
| `DescribeBotAnalyzerRecommendationRequestDict` | `amazon_lex/models/describe_bot_analyzer_recommendation_request.py` |
| `DescribeBotAnalyzerRecommendationResponse` | `amazon_lex/models/describe_bot_analyzer_recommendation_response.py` |
| `DescribeBotAnalyzerRecommendationErrorBody` | `amazon_lex/errors/describe_bot_analyzer_recommendation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_locale

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId`
- **Returns (parsed)**: `DescribeBotLocaleResponse`
- **Returns (raw)**: `ApiResult[DescribeBotLocaleResponse, DescribeBotLocaleErrorBody]`
- **Error**: `DescribeBotLocaleErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotLocaleResponse` | `amazon_lex/models/describe_bot_locale_response.py` |
| `DescribeBotLocaleErrorBody` | `amazon_lex/errors/describe_bot_locale_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_recommendation

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `bot_recommendation_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `bot_recommendation_id` — path `botRecommendationId`
- **Returns (parsed)**: `DescribeBotRecommendationResponse`
- **Returns (raw)**: `ApiResult[DescribeBotRecommendationResponse, DescribeBotRecommendationErrorBody]`
- **Error**: `DescribeBotRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotRecommendationResponse` | `amazon_lex/models/describe_bot_recommendation_response.py` |
| `DescribeBotRecommendationErrorBody` | `amazon_lex/errors/describe_bot_recommendation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_replica

- **Route**: `GET /bots/{botId}/replicas/{replicaRegion}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_replica(bot_id: str, replica_region: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `replica_region`
- **Params**: `bot_id` — path `botId` · `replica_region` — path `replicaRegion`
- **Returns (parsed)**: `DescribeBotReplicaResponse`
- **Returns (raw)**: `ApiResult[DescribeBotReplicaResponse, DescribeBotReplicaErrorBody]`
- **Error**: `DescribeBotReplicaErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotReplicaResponse` | `amazon_lex/models/describe_bot_replica_response.py` |
| `DescribeBotReplicaErrorBody` | `amazon_lex/errors/describe_bot_replica_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_resource_generation

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_resource_generation(bot_id: str, bot_version: str, locale_id: str, generation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `generation_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `generation_id` — path `generationId`
- **Returns (parsed)**: `DescribeBotResourceGenerationResponse`
- **Returns (raw)**: `ApiResult[DescribeBotResourceGenerationResponse, DescribeBotResourceGenerationErrorBody]`
- **Error**: `DescribeBotResourceGenerationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotResourceGenerationResponse` | `amazon_lex/models/describe_bot_resource_generation_response.py` |
| `DescribeBotResourceGenerationErrorBody` | `amazon_lex/errors/describe_bot_resource_generation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_bot_version

- **Route**: `GET /bots/{botId}/botversions/{botVersion}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_bot_version(bot_id: str, bot_version: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion`
- **Returns (parsed)**: `DescribeBotVersionResponse`
- **Returns (raw)**: `ApiResult[DescribeBotVersionResponse, DescribeBotVersionErrorBody]`
- **Error**: `DescribeBotVersionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeBotVersionResponse` | `amazon_lex/models/describe_bot_version_response.py` |
| `DescribeBotVersionErrorBody` | `amazon_lex/errors/describe_bot_version_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_custom_vocabulary_metadata

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_custom_vocabulary_metadata(bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId`
- **Returns (parsed)**: `DescribeCustomVocabularyMetadataResponse`
- **Returns (raw)**: `ApiResult[DescribeCustomVocabularyMetadataResponse, DescribeCustomVocabularyMetadataErrorBody]`
- **Error**: `DescribeCustomVocabularyMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeCustomVocabularyMetadataResponse` | `amazon_lex/models/describe_custom_vocabulary_metadata_response.py` |
| `DescribeCustomVocabularyMetadataErrorBody` | `amazon_lex/errors/describe_custom_vocabulary_metadata_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_intent

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_intent(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId`
- **Returns (parsed)**: `DescribeIntentResponse`
- **Returns (raw)**: `ApiResult[DescribeIntentResponse, DescribeIntentErrorBody]`
- **Error**: `DescribeIntentErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeIntentResponse` | `amazon_lex/models/describe_intent_response.py` |
| `DescribeIntentErrorBody` | `amazon_lex/errors/describe_intent_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_slot

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, slot_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`, `slot_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `slot_id` — path `slotId`
- **Returns (parsed)**: `DescribeSlotResponse`
- **Returns (raw)**: `ApiResult[DescribeSlotResponse, DescribeSlotErrorBody]`
- **Error**: `DescribeSlotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeSlotResponse` | `amazon_lex/models/describe_slot_response.py` |
| `DescribeSlotErrorBody` | `amazon_lex/errors/describe_slot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.describe_slot_type

- **Route**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_slot_type(bot_id: str, bot_version: str, locale_id: str, slot_type_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `slot_type_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `slot_type_id` — path `slotTypeId`
- **Returns (parsed)**: `DescribeSlotTypeResponse`
- **Returns (raw)**: `ApiResult[DescribeSlotTypeResponse, DescribeSlotTypeErrorBody]`
- **Error**: `DescribeSlotTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeSlotTypeResponse` | `amazon_lex/models/describe_slot_type_response.py` |
| `DescribeSlotTypeErrorBody` | `amazon_lex/errors/describe_slot_type_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.generate_bot_element

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def generate_bot_element(bot_id: str, bot_version: str, locale_id: str, *, body: GenerateBotElementRequest | GenerateBotElementRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `GenerateBotElementResponse`
- **Returns (raw)**: `ApiResult[GenerateBotElementResponse, GenerateBotElementErrorBody]`
- **Error**: `GenerateBotElementErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GenerateBotElementRequest` | `amazon_lex/models/generate_bot_element_request.py` |
| `GenerateBotElementRequestDict` | `amazon_lex/models/generate_bot_element_request.py` |
| `GenerateBotElementResponse` | `amazon_lex/models/generate_bot_element_response.py` |
| `GenerateBotElementErrorBody` | `amazon_lex/errors/generate_bot_element_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.get_bots

- **Route**: `GET /bots`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def get_bots(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetBotsResponse`
- **Returns (raw)**: `ApiResult[GetBotsResponse, GetBotsErrorBody]`
- **Error**: `GetBotsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotsResponse` | `amazon_lex/models/get_bots_response.py` |
| `GetBotsErrorBody` | `amazon_lex/errors/get_bots_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.get_session

- **Route**: `GET /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def get_session(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`, `locale_id`, `session_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `locale_id` — path `localeId` · `session_id` — path `sessionId`
- **Returns (parsed)**: `GetSessionResponse`
- **Returns (raw)**: `ApiResult[GetSessionResponse, GetSessionErrorBody]`
- **Error**: `GetSessionErrorBody` — **Case A (typed)**
- **Error arms**: `RuntimeV2LexValidationException` [400] · `AccessDeniedException` [403] · `RuntimeV2LexResourceNotFoundException` [404] · `RuntimeV2LexThrottlingException` [429] · `RuntimeV2LexInternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSessionResponse` | `amazon_lex/models/get_session_response.py` |
| `GetSessionErrorBody` | `amazon_lex/errors/get_session_error.py` |
| `RuntimeV2LexValidationException` | `amazon_lex/models/runtime_v2_lex_validation_exception.py` |
| `AccessDeniedException` | `amazon_lex/models/access_denied_exception.py` |
| `RuntimeV2LexResourceNotFoundException` | `amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py` |
| `RuntimeV2LexThrottlingException` | `amazon_lex/models/runtime_v2_lex_throttling_exception.py` |
| `RuntimeV2LexInternalServerException` | `amazon_lex/models/runtime_v2_lex_internal_server_exception.py` |

### client.bots.get_session1

- **Route**: `GET /bot/{botName}/alias/{botAlias}/user/{userId}/session`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def get_session1(bot_name: str, bot_alias: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `user_id`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `user_id` — path `userId`
- **Returns (parsed)**: `RuntimeLexGetSessionResponse`
- **Returns (raw)**: `ApiResult[RuntimeLexGetSessionResponse, GetSession1ErrorBody]`
- **Error**: `GetSession1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RuntimeLexGetSessionResponse` | `amazon_lex/models/runtime_lex_get_session_response.py` |
| `GetSession1ErrorBody` | `amazon_lex/errors/get_session1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.bots.list_aggregated_utterances

- **Route**: `POST /bots/{botId}/aggregatedutterances`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_aggregated_utterances(bot_id: str, *, body: ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListAggregatedUtterancesResponse`
- **Returns (raw)**: `ApiResult[ListAggregatedUtterancesResponse, ListAggregatedUtterancesErrorBody]`
- **Error**: `ListAggregatedUtterancesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAggregatedUtterancesRequest` | `amazon_lex/models/list_aggregated_utterances_request.py` |
| `ListAggregatedUtterancesRequestDict` | `amazon_lex/models/list_aggregated_utterances_request.py` |
| `ListAggregatedUtterancesResponse` | `amazon_lex/models/list_aggregated_utterances_response.py` |
| `ListAggregatedUtterancesErrorBody` | `amazon_lex/errors/list_aggregated_utterances_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_alias_replicas

- **Route**: `POST /bots/{botId}/replicas/{replicaRegion}/botaliases`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_alias_replicas(bot_id: str, replica_region: str, *, body: ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `replica_region`
- **Params**: `bot_id` — path `botId` · `replica_region` — path `replicaRegion` · `body` — JSON body
- **Returns (parsed)**: `ListBotAliasReplicasResponse`
- **Returns (raw)**: `ApiResult[ListBotAliasReplicasResponse, ListBotAliasReplicasErrorBody]`
- **Error**: `ListBotAliasReplicasErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotAliasReplicasRequest` | `amazon_lex/models/list_bot_alias_replicas_request.py` |
| `ListBotAliasReplicasRequestDict` | `amazon_lex/models/list_bot_alias_replicas_request.py` |
| `ListBotAliasReplicasResponse` | `amazon_lex/models/list_bot_alias_replicas_response.py` |
| `ListBotAliasReplicasErrorBody` | `amazon_lex/errors/list_bot_alias_replicas_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_aliases

- **Route**: `POST /bots/{botId}/botaliases`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_aliases(bot_id: str, *, body: ListBotAliasesRequest | ListBotAliasesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListBotAliasesResponse`
- **Returns (raw)**: `ApiResult[ListBotAliasesResponse, ListBotAliasesErrorBody]`
- **Error**: `ListBotAliasesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotAliasesRequest` | `amazon_lex/models/list_bot_aliases_request.py` |
| `ListBotAliasesRequestDict` | `amazon_lex/models/list_bot_aliases_request.py` |
| `ListBotAliasesResponse` | `amazon_lex/models/list_bot_aliases_response.py` |
| `ListBotAliasesErrorBody` | `amazon_lex/errors/list_bot_aliases_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_analyzer_history

- **Route**: `POST /bots/{botId}/botanalyzer/history`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_analyzer_history(bot_id: str, *, body: ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListBotAnalyzerHistoryResponse`
- **Returns (raw)**: `ApiResult[ListBotAnalyzerHistoryResponse, ListBotAnalyzerHistoryErrorBody]`
- **Error**: `ListBotAnalyzerHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotAnalyzerHistoryRequest` | `amazon_lex/models/list_bot_analyzer_history_request.py` |
| `ListBotAnalyzerHistoryRequestDict` | `amazon_lex/models/list_bot_analyzer_history_request.py` |
| `ListBotAnalyzerHistoryResponse` | `amazon_lex/models/list_bot_analyzer_history_response.py` |
| `ListBotAnalyzerHistoryErrorBody` | `amazon_lex/errors/list_bot_analyzer_history_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_locales

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_locales(bot_id: str, bot_version: str, *, body: ListBotLocalesRequest | ListBotLocalesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `body` — JSON body
- **Returns (parsed)**: `ListBotLocalesResponse`
- **Returns (raw)**: `ApiResult[ListBotLocalesResponse, ListBotLocalesErrorBody]`
- **Error**: `ListBotLocalesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotLocalesRequest` | `amazon_lex/models/list_bot_locales_request.py` |
| `ListBotLocalesRequestDict` | `amazon_lex/models/list_bot_locales_request.py` |
| `ListBotLocalesResponse` | `amazon_lex/models/list_bot_locales_response.py` |
| `ListBotLocalesErrorBody` | `amazon_lex/errors/list_bot_locales_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_recommendations

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_recommendations(bot_id: str, bot_version: str, locale_id: str, *, body: ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListBotRecommendationsResponse`
- **Returns (raw)**: `ApiResult[ListBotRecommendationsResponse, ListBotRecommendationsErrorBody]`
- **Error**: `ListBotRecommendationsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotRecommendationsRequest` | `amazon_lex/models/list_bot_recommendations_request.py` |
| `ListBotRecommendationsRequestDict` | `amazon_lex/models/list_bot_recommendations_request.py` |
| `ListBotRecommendationsResponse` | `amazon_lex/models/list_bot_recommendations_response.py` |
| `ListBotRecommendationsErrorBody` | `amazon_lex/errors/list_bot_recommendations_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_replicas

- **Route**: `POST /bots/{botId}/replicas`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_replicas(bot_id: str, *, body: ListBotReplicasRequest | ListBotReplicasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListBotReplicasResponse`
- **Returns (raw)**: `ApiResult[ListBotReplicasResponse, ListBotReplicasErrorBody]`
- **Error**: `ListBotReplicasErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotReplicasRequest` | `amazon_lex/models/list_bot_replicas_request.py` |
| `ListBotReplicasRequestDict` | `amazon_lex/models/list_bot_replicas_request.py` |
| `ListBotReplicasResponse` | `amazon_lex/models/list_bot_replicas_response.py` |
| `ListBotReplicasErrorBody` | `amazon_lex/errors/list_bot_replicas_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_resource_generations

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_resource_generations(bot_id: str, bot_version: str, locale_id: str, *, body: ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListBotResourceGenerationsResponse`
- **Returns (raw)**: `ApiResult[ListBotResourceGenerationsResponse, ListBotResourceGenerationsErrorBody]`
- **Error**: `ListBotResourceGenerationsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotResourceGenerationsRequest` | `amazon_lex/models/list_bot_resource_generations_request.py` |
| `ListBotResourceGenerationsRequestDict` | `amazon_lex/models/list_bot_resource_generations_request.py` |
| `ListBotResourceGenerationsResponse` | `amazon_lex/models/list_bot_resource_generations_response.py` |
| `ListBotResourceGenerationsErrorBody` | `amazon_lex/errors/list_bot_resource_generations_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_version_replicas

- **Route**: `POST /bots/{botId}/replicas/{replicaRegion}/botversions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_version_replicas(bot_id: str, replica_region: str, *, body: ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `replica_region`
- **Params**: `bot_id` — path `botId` · `replica_region` — path `replicaRegion` · `body` — JSON body
- **Returns (parsed)**: `ListBotVersionReplicasResponse`
- **Returns (raw)**: `ApiResult[ListBotVersionReplicasResponse, ListBotVersionReplicasErrorBody]`
- **Error**: `ListBotVersionReplicasErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotVersionReplicasRequest` | `amazon_lex/models/list_bot_version_replicas_request.py` |
| `ListBotVersionReplicasRequestDict` | `amazon_lex/models/list_bot_version_replicas_request.py` |
| `ListBotVersionReplicasResponse` | `amazon_lex/models/list_bot_version_replicas_response.py` |
| `ListBotVersionReplicasErrorBody` | `amazon_lex/errors/list_bot_version_replicas_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bot_versions

- **Route**: `POST /bots/{botId}/botversions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bot_versions(bot_id: str, *, body: ListBotVersionsRequest | ListBotVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListBotVersionsResponse`
- **Returns (raw)**: `ApiResult[ListBotVersionsResponse, ListBotVersionsErrorBody]`
- **Error**: `ListBotVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotVersionsRequest` | `amazon_lex/models/list_bot_versions_request.py` |
| `ListBotVersionsRequestDict` | `amazon_lex/models/list_bot_versions_request.py` |
| `ListBotVersionsResponse` | `amazon_lex/models/list_bot_versions_response.py` |
| `ListBotVersionsErrorBody` | `amazon_lex/errors/list_bot_versions_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_bots

- **Route**: `POST /bots`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_bots(*, body: ListBotsRequest | ListBotsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListBotsResponse`
- **Returns (raw)**: `ApiResult[ListBotsResponse, ListBotsErrorBody]`
- **Error**: `ListBotsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBotsRequest` | `amazon_lex/models/list_bots_request.py` |
| `ListBotsRequestDict` | `amazon_lex/models/list_bots_request.py` |
| `ListBotsResponse` | `amazon_lex/models/list_bots_response.py` |
| `ListBotsErrorBody` | `amazon_lex/errors/list_bots_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_custom_vocabulary_items

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_custom_vocabulary_items(bot_id: str, bot_version: str, locale_id: str, *, body: ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListCustomVocabularyItemsResponse`
- **Returns (raw)**: `ApiResult[ListCustomVocabularyItemsResponse, ListCustomVocabularyItemsErrorBody]`
- **Error**: `ListCustomVocabularyItemsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListCustomVocabularyItemsRequest` | `amazon_lex/models/list_custom_vocabulary_items_request.py` |
| `ListCustomVocabularyItemsRequestDict` | `amazon_lex/models/list_custom_vocabulary_items_request.py` |
| `ListCustomVocabularyItemsResponse` | `amazon_lex/models/list_custom_vocabulary_items_response.py` |
| `ListCustomVocabularyItemsErrorBody` | `amazon_lex/errors/list_custom_vocabulary_items_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_intent_metrics

- **Route**: `POST /bots/{botId}/analytics/intentmetrics`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_intent_metrics(bot_id: str, *, body: ListIntentMetricsRequest | ListIntentMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListIntentMetricsResponse`
- **Returns (raw)**: `ApiResult[ListIntentMetricsResponse, ListIntentMetricsErrorBody]`
- **Error**: `ListIntentMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListIntentMetricsRequest` | `amazon_lex/models/list_intent_metrics_request.py` |
| `ListIntentMetricsRequestDict` | `amazon_lex/models/list_intent_metrics_request.py` |
| `ListIntentMetricsResponse` | `amazon_lex/models/list_intent_metrics_response.py` |
| `ListIntentMetricsErrorBody` | `amazon_lex/errors/list_intent_metrics_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_intent_paths

- **Route**: `POST /bots/{botId}/analytics/intentpaths`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_intent_paths(bot_id: str, *, body: ListIntentPathsRequest | ListIntentPathsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListIntentPathsResponse`
- **Returns (raw)**: `ApiResult[ListIntentPathsResponse, ListIntentPathsErrorBody]`
- **Error**: `ListIntentPathsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListIntentPathsRequest` | `amazon_lex/models/list_intent_paths_request.py` |
| `ListIntentPathsRequestDict` | `amazon_lex/models/list_intent_paths_request.py` |
| `ListIntentPathsResponse` | `amazon_lex/models/list_intent_paths_response.py` |
| `ListIntentPathsErrorBody` | `amazon_lex/errors/list_intent_paths_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_intent_stage_metrics

- **Route**: `POST /bots/{botId}/analytics/intentstagemetrics`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_intent_stage_metrics(bot_id: str, *, body: ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListIntentStageMetricsResponse`
- **Returns (raw)**: `ApiResult[ListIntentStageMetricsResponse, ListIntentStageMetricsErrorBody]`
- **Error**: `ListIntentStageMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListIntentStageMetricsRequest` | `amazon_lex/models/list_intent_stage_metrics_request.py` |
| `ListIntentStageMetricsRequestDict` | `amazon_lex/models/list_intent_stage_metrics_request.py` |
| `ListIntentStageMetricsResponse` | `amazon_lex/models/list_intent_stage_metrics_response.py` |
| `ListIntentStageMetricsErrorBody` | `amazon_lex/errors/list_intent_stage_metrics_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_intents

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_intents(bot_id: str, bot_version: str, locale_id: str, *, body: ListIntentsRequest | ListIntentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListIntentsResponse`
- **Returns (raw)**: `ApiResult[ListIntentsResponse, ListIntentsErrorBody]`
- **Error**: `ListIntentsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListIntentsRequest` | `amazon_lex/models/list_intents_request.py` |
| `ListIntentsRequestDict` | `amazon_lex/models/list_intents_request.py` |
| `ListIntentsResponse` | `amazon_lex/models/list_intents_response.py` |
| `ListIntentsErrorBody` | `amazon_lex/errors/list_intents_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_recommended_intents

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_recommended_intents(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `bot_recommendation_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `bot_recommendation_id` — path `botRecommendationId` · `body` — JSON body
- **Returns (parsed)**: `ListRecommendedIntentsResponse`
- **Returns (raw)**: `ApiResult[ListRecommendedIntentsResponse, ListRecommendedIntentsErrorBody]`
- **Error**: `ListRecommendedIntentsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListRecommendedIntentsRequest` | `amazon_lex/models/list_recommended_intents_request.py` |
| `ListRecommendedIntentsRequestDict` | `amazon_lex/models/list_recommended_intents_request.py` |
| `ListRecommendedIntentsResponse` | `amazon_lex/models/list_recommended_intents_response.py` |
| `ListRecommendedIntentsErrorBody` | `amazon_lex/errors/list_recommended_intents_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_session_analytics_data

- **Route**: `POST /bots/{botId}/analytics/sessions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_session_analytics_data(bot_id: str, *, body: ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListSessionAnalyticsDataResponse`
- **Returns (raw)**: `ApiResult[ListSessionAnalyticsDataResponse, ListSessionAnalyticsDataErrorBody]`
- **Error**: `ListSessionAnalyticsDataErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSessionAnalyticsDataRequest` | `amazon_lex/models/list_session_analytics_data_request.py` |
| `ListSessionAnalyticsDataRequestDict` | `amazon_lex/models/list_session_analytics_data_request.py` |
| `ListSessionAnalyticsDataResponse` | `amazon_lex/models/list_session_analytics_data_response.py` |
| `ListSessionAnalyticsDataErrorBody` | `amazon_lex/errors/list_session_analytics_data_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_session_metrics

- **Route**: `POST /bots/{botId}/analytics/sessionmetrics`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_session_metrics(bot_id: str, *, body: ListSessionMetricsRequest | ListSessionMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListSessionMetricsResponse`
- **Returns (raw)**: `ApiResult[ListSessionMetricsResponse, ListSessionMetricsErrorBody]`
- **Error**: `ListSessionMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSessionMetricsRequest` | `amazon_lex/models/list_session_metrics_request.py` |
| `ListSessionMetricsRequestDict` | `amazon_lex/models/list_session_metrics_request.py` |
| `ListSessionMetricsResponse` | `amazon_lex/models/list_session_metrics_response.py` |
| `ListSessionMetricsErrorBody` | `amazon_lex/errors/list_session_metrics_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_slot_types

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_slot_types(bot_id: str, bot_version: str, locale_id: str, *, body: ListSlotTypesRequest | ListSlotTypesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `ListSlotTypesResponse`
- **Returns (raw)**: `ApiResult[ListSlotTypesResponse, ListSlotTypesErrorBody]`
- **Error**: `ListSlotTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSlotTypesRequest` | `amazon_lex/models/list_slot_types_request.py` |
| `ListSlotTypesRequestDict` | `amazon_lex/models/list_slot_types_request.py` |
| `ListSlotTypesResponse` | `amazon_lex/models/list_slot_types_response.py` |
| `ListSlotTypesErrorBody` | `amazon_lex/errors/list_slot_types_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_slots

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_slots(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: ListSlotsRequest | ListSlotsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `body` — JSON body
- **Returns (parsed)**: `ListSlotsResponse`
- **Returns (raw)**: `ApiResult[ListSlotsResponse, ListSlotsErrorBody]`
- **Error**: `ListSlotsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSlotsRequest` | `amazon_lex/models/list_slots_request.py` |
| `ListSlotsRequestDict` | `amazon_lex/models/list_slots_request.py` |
| `ListSlotsResponse` | `amazon_lex/models/list_slots_response.py` |
| `ListSlotsErrorBody` | `amazon_lex/errors/list_slots_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_utterance_analytics_data

- **Route**: `POST /bots/{botId}/analytics/utterances`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_utterance_analytics_data(bot_id: str, *, body: ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListUtteranceAnalyticsDataResponse`
- **Returns (raw)**: `ApiResult[ListUtteranceAnalyticsDataResponse, ListUtteranceAnalyticsDataErrorBody]`
- **Error**: `ListUtteranceAnalyticsDataErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListUtteranceAnalyticsDataRequest` | `amazon_lex/models/list_utterance_analytics_data_request.py` |
| `ListUtteranceAnalyticsDataRequestDict` | `amazon_lex/models/list_utterance_analytics_data_request.py` |
| `ListUtteranceAnalyticsDataResponse` | `amazon_lex/models/list_utterance_analytics_data_response.py` |
| `ListUtteranceAnalyticsDataErrorBody` | `amazon_lex/errors/list_utterance_analytics_data_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.list_utterance_metrics

- **Route**: `POST /bots/{botId}/analytics/utterancemetrics`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_utterance_metrics(bot_id: str, *, body: ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `ListUtteranceMetricsResponse`
- **Returns (raw)**: `ApiResult[ListUtteranceMetricsResponse, ListUtteranceMetricsErrorBody]`
- **Error**: `ListUtteranceMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListUtteranceMetricsRequest` | `amazon_lex/models/list_utterance_metrics_request.py` |
| `ListUtteranceMetricsRequestDict` | `amazon_lex/models/list_utterance_metrics_request.py` |
| `ListUtteranceMetricsResponse` | `amazon_lex/models/list_utterance_metrics_response.py` |
| `ListUtteranceMetricsErrorBody` | `amazon_lex/errors/list_utterance_metrics_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.put_session

- **Route**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def put_session(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: PutSessionRequest | PutSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`, `locale_id`, `session_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `locale_id` — path `localeId` · `session_id` — path `sessionId` · `body` — JSON body
- **Returns (parsed)**: `PutSessionResponse`
- **Returns (raw)**: `ApiResult[PutSessionResponse, PutSessionErrorBody]`
- **Error**: `PutSessionErrorBody` — **Case A (typed)**
- **Error arms**: `RuntimeV2LexValidationException` [400] · `AccessDeniedException` [403] · `RuntimeV2LexResourceNotFoundException` [404] · `RuntimeV2LexConflictException` [409] · `DependencyFailedException` [424] · `RuntimeV2LexThrottlingException` [429] · `RuntimeV2LexInternalServerException` [500] · `BadGatewayException` [502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutSessionRequest` | `amazon_lex/models/put_session_request.py` |
| `PutSessionRequestDict` | `amazon_lex/models/put_session_request.py` |
| `PutSessionResponse` | `amazon_lex/models/put_session_response.py` |
| `PutSessionErrorBody` | `amazon_lex/errors/put_session_error.py` |
| `RuntimeV2LexValidationException` | `amazon_lex/models/runtime_v2_lex_validation_exception.py` |
| `AccessDeniedException` | `amazon_lex/models/access_denied_exception.py` |
| `RuntimeV2LexResourceNotFoundException` | `amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py` |
| `RuntimeV2LexConflictException` | `amazon_lex/models/runtime_v2_lex_conflict_exception.py` |
| `DependencyFailedException` | `amazon_lex/models/dependency_failed_exception.py` |
| `RuntimeV2LexThrottlingException` | `amazon_lex/models/runtime_v2_lex_throttling_exception.py` |
| `RuntimeV2LexInternalServerException` | `amazon_lex/models/runtime_v2_lex_internal_server_exception.py` |
| `BadGatewayException` | `amazon_lex/models/bad_gateway_exception.py` |

### client.bots.put_session1

- **Route**: `POST /bot/{botName}/alias/{botAlias}/user/{userId}/session`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def put_session1(bot_name: str, bot_alias: str, user_id: str, *, body: RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `user_id`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `RuntimeLexPutSessionResponse`
- **Returns (raw)**: `ApiResult[RuntimeLexPutSessionResponse, PutSession1ErrorBody]`
- **Error**: `PutSession1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `NotAcceptableException` [406] · `ConflictException` [409] · `RuntimeLexDependencyFailedException` [424] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RuntimeLexBadGatewayException` [502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RuntimeLexPutSessionRequest` | `amazon_lex/models/runtime_lex_put_session_request.py` |
| `RuntimeLexPutSessionRequestDict` | `amazon_lex/models/runtime_lex_put_session_request.py` |
| `RuntimeLexPutSessionResponse` | `amazon_lex/models/runtime_lex_put_session_response.py` |
| `PutSession1ErrorBody` | `amazon_lex/errors/put_session1_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `NotAcceptableException` | `amazon_lex/models/not_acceptable_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `RuntimeLexDependencyFailedException` | `amazon_lex/models/runtime_lex_dependency_failed_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |
| `RuntimeLexBadGatewayException` | `amazon_lex/models/runtime_lex_bad_gateway_exception.py` |

### client.bots.recognize_text

- **Route**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def recognize_text(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: RecognizeTextRequest | RecognizeTextRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`, `locale_id`, `session_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `locale_id` — path `localeId` · `session_id` — path `sessionId` · `body` — JSON body
- **Returns (parsed)**: `RecognizeTextResponse`
- **Returns (raw)**: `ApiResult[RecognizeTextResponse, RecognizeTextErrorBody]`
- **Error**: `RecognizeTextErrorBody` — **Case A (typed)**
- **Error arms**: `RuntimeV2LexValidationException` [400] · `AccessDeniedException` [403] · `RuntimeV2LexResourceNotFoundException` [404] · `RuntimeV2LexConflictException` [409] · `DependencyFailedException` [424] · `RuntimeV2LexThrottlingException` [429] · `RuntimeV2LexInternalServerException` [500] · `BadGatewayException` [502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecognizeTextRequest` | `amazon_lex/models/recognize_text_request.py` |
| `RecognizeTextRequestDict` | `amazon_lex/models/recognize_text_request.py` |
| `RecognizeTextResponse` | `amazon_lex/models/recognize_text_response.py` |
| `RecognizeTextErrorBody` | `amazon_lex/errors/recognize_text_error.py` |
| `RuntimeV2LexValidationException` | `amazon_lex/models/runtime_v2_lex_validation_exception.py` |
| `AccessDeniedException` | `amazon_lex/models/access_denied_exception.py` |
| `RuntimeV2LexResourceNotFoundException` | `amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py` |
| `RuntimeV2LexConflictException` | `amazon_lex/models/runtime_v2_lex_conflict_exception.py` |
| `DependencyFailedException` | `amazon_lex/models/dependency_failed_exception.py` |
| `RuntimeV2LexThrottlingException` | `amazon_lex/models/runtime_v2_lex_throttling_exception.py` |
| `RuntimeV2LexInternalServerException` | `amazon_lex/models/runtime_v2_lex_internal_server_exception.py` |
| `BadGatewayException` | `amazon_lex/models/bad_gateway_exception.py` |

### client.bots.recognize_utterance

- **Route**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def recognize_utterance(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`, `locale_id`, `session_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `locale_id` — path `localeId` · `session_id` — path `sessionId` · `body` — JSON body
- **Returns (parsed)**: `RecognizeUtteranceResponse`
- **Returns (raw)**: `ApiResult[RecognizeUtteranceResponse, RecognizeUtteranceErrorBody]`
- **Error**: `RecognizeUtteranceErrorBody` — **Case A (typed)**
- **Error arms**: `RuntimeV2LexValidationException` [400] · `AccessDeniedException` [403] · `RuntimeV2LexResourceNotFoundException` [404] · `RuntimeV2LexConflictException` [409] · `DependencyFailedException` [424] · `RuntimeV2LexThrottlingException` [429] · `RuntimeV2LexInternalServerException` [500] · `BadGatewayException` [502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecognizeUtteranceRequest` | `amazon_lex/models/recognize_utterance_request.py` |
| `RecognizeUtteranceRequestDict` | `amazon_lex/models/recognize_utterance_request.py` |
| `RecognizeUtteranceResponse` | `amazon_lex/models/recognize_utterance_response.py` |
| `RecognizeUtteranceErrorBody` | `amazon_lex/errors/recognize_utterance_error.py` |
| `RuntimeV2LexValidationException` | `amazon_lex/models/runtime_v2_lex_validation_exception.py` |
| `AccessDeniedException` | `amazon_lex/models/access_denied_exception.py` |
| `RuntimeV2LexResourceNotFoundException` | `amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py` |
| `RuntimeV2LexConflictException` | `amazon_lex/models/runtime_v2_lex_conflict_exception.py` |
| `DependencyFailedException` | `amazon_lex/models/dependency_failed_exception.py` |
| `RuntimeV2LexThrottlingException` | `amazon_lex/models/runtime_v2_lex_throttling_exception.py` |
| `RuntimeV2LexInternalServerException` | `amazon_lex/models/runtime_v2_lex_internal_server_exception.py` |
| `BadGatewayException` | `amazon_lex/models/bad_gateway_exception.py` |

### client.bots.search_associated_transcripts

- **Route**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def search_associated_transcripts(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `bot_recommendation_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `bot_recommendation_id` — path `botRecommendationId` · `body` — JSON body
- **Returns (parsed)**: `SearchAssociatedTranscriptsResponse`
- **Returns (raw)**: `ApiResult[SearchAssociatedTranscriptsResponse, SearchAssociatedTranscriptsErrorBody]`
- **Error**: `SearchAssociatedTranscriptsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchAssociatedTranscriptsRequest` | `amazon_lex/models/search_associated_transcripts_request.py` |
| `SearchAssociatedTranscriptsRequestDict` | `amazon_lex/models/search_associated_transcripts_request.py` |
| `SearchAssociatedTranscriptsResponse` | `amazon_lex/models/search_associated_transcripts_response.py` |
| `SearchAssociatedTranscriptsErrorBody` | `amazon_lex/errors/search_associated_transcripts_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.start_bot_analyzer

- **Route**: `POST /bots/{botId}/botanalyzer`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_bot_analyzer(bot_id: str, *, body: StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `StartBotAnalyzerResponse`
- **Returns (raw)**: `ApiResult[StartBotAnalyzerResponse, StartBotAnalyzerErrorBody]`
- **Error**: `StartBotAnalyzerErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartBotAnalyzerRequest` | `amazon_lex/models/start_bot_analyzer_request.py` |
| `StartBotAnalyzerRequestDict` | `amazon_lex/models/start_bot_analyzer_request.py` |
| `StartBotAnalyzerResponse` | `amazon_lex/models/start_bot_analyzer_response.py` |
| `StartBotAnalyzerErrorBody` | `amazon_lex/errors/start_bot_analyzer_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.start_bot_recommendation

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, *, body: StartBotRecommendationRequest | StartBotRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `StartBotRecommendationResponse`
- **Returns (raw)**: `ApiResult[StartBotRecommendationResponse, StartBotRecommendationErrorBody]`
- **Error**: `StartBotRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartBotRecommendationRequest` | `amazon_lex/models/start_bot_recommendation_request.py` |
| `StartBotRecommendationRequestDict` | `amazon_lex/models/start_bot_recommendation_request.py` |
| `StartBotRecommendationResponse` | `amazon_lex/models/start_bot_recommendation_response.py` |
| `StartBotRecommendationErrorBody` | `amazon_lex/errors/start_bot_recommendation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.start_bot_resource_generation

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_bot_resource_generation(bot_id: str, bot_version: str, locale_id: str, *, body: StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `StartBotResourceGenerationResponse`
- **Returns (raw)**: `ApiResult[StartBotResourceGenerationResponse, StartBotResourceGenerationErrorBody]`
- **Error**: `StartBotResourceGenerationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartBotResourceGenerationRequest` | `amazon_lex/models/start_bot_resource_generation_request.py` |
| `StartBotResourceGenerationRequestDict` | `amazon_lex/models/start_bot_resource_generation_request.py` |
| `StartBotResourceGenerationResponse` | `amazon_lex/models/start_bot_resource_generation_response.py` |
| `StartBotResourceGenerationErrorBody` | `amazon_lex/errors/start_bot_resource_generation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.start_conversation

- **Route**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_conversation(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: StartConversationRequest | StartConversationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`, `locale_id`, `session_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `locale_id` — path `localeId` · `session_id` — path `sessionId` · `body` — JSON body
- **Returns (parsed)**: `StartConversationResponse`
- **Returns (raw)**: `ApiResult[StartConversationResponse, StartConversationErrorBody]`
- **Error**: `StartConversationErrorBody` — **Case A (typed)**
- **Error arms**: `RuntimeV2LexValidationException` [400] · `AccessDeniedException` [403] · `RuntimeV2LexThrottlingException` [429] · `RuntimeV2LexInternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartConversationRequest` | `amazon_lex/models/start_conversation_request.py` |
| `StartConversationRequestDict` | `amazon_lex/models/start_conversation_request.py` |
| `StartConversationResponse` | `amazon_lex/models/start_conversation_response.py` |
| `StartConversationErrorBody` | `amazon_lex/errors/start_conversation_error.py` |
| `RuntimeV2LexValidationException` | `amazon_lex/models/runtime_v2_lex_validation_exception.py` |
| `AccessDeniedException` | `amazon_lex/models/access_denied_exception.py` |
| `RuntimeV2LexThrottlingException` | `amazon_lex/models/runtime_v2_lex_throttling_exception.py` |
| `RuntimeV2LexInternalServerException` | `amazon_lex/models/runtime_v2_lex_internal_server_exception.py` |

### client.bots.stop_bot_analyzer

- **Route**: `PUT /bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def stop_bot_analyzer(bot_id: str, bot_analyzer_request_id: str, *, body: StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_analyzer_request_id`
- **Params**: `bot_id` — path `botId` · `bot_analyzer_request_id` — path `botAnalyzerRequestId` · `body` — JSON body
- **Returns (parsed)**: `StopBotAnalyzerResponse`
- **Returns (raw)**: `ApiResult[StopBotAnalyzerResponse, StopBotAnalyzerErrorBody]`
- **Error**: `StopBotAnalyzerErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopBotAnalyzerRequest` | `amazon_lex/models/stop_bot_analyzer_request.py` |
| `StopBotAnalyzerRequestDict` | `amazon_lex/models/stop_bot_analyzer_request.py` |
| `StopBotAnalyzerResponse` | `amazon_lex/models/stop_bot_analyzer_response.py` |
| `StopBotAnalyzerErrorBody` | `amazon_lex/errors/stop_bot_analyzer_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.stop_bot_recommendation

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def stop_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: StopBotRecommendationRequest | StopBotRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `bot_recommendation_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `bot_recommendation_id` — path `botRecommendationId` · `body` — JSON body
- **Returns (parsed)**: `StopBotRecommendationResponse`
- **Returns (raw)**: `ApiResult[StopBotRecommendationResponse, StopBotRecommendationErrorBody]`
- **Error**: `StopBotRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopBotRecommendationRequest` | `amazon_lex/models/stop_bot_recommendation_request.py` |
| `StopBotRecommendationRequestDict` | `amazon_lex/models/stop_bot_recommendation_request.py` |
| `StopBotRecommendationResponse` | `amazon_lex/models/stop_bot_recommendation_response.py` |
| `StopBotRecommendationErrorBody` | `amazon_lex/errors/stop_bot_recommendation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_bot

- **Route**: `PUT /bots/{botId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_bot(bot_id: str, *, body: UpdateBotRequest | UpdateBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`
- **Params**: `bot_id` — path `botId` · `body` — JSON body
- **Returns (parsed)**: `UpdateBotResponse`
- **Returns (raw)**: `ApiResult[UpdateBotResponse, UpdateBotErrorBody]`
- **Error**: `UpdateBotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateBotRequest` | `amazon_lex/models/update_bot_request.py` |
| `UpdateBotRequestDict` | `amazon_lex/models/update_bot_request.py` |
| `UpdateBotResponse` | `amazon_lex/models/update_bot_response.py` |
| `UpdateBotErrorBody` | `amazon_lex/errors/update_bot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_bot_alias

- **Route**: `PUT /bots/{botId}/botaliases/{botAliasId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_bot_alias(bot_id: str, bot_alias_id: str, *, body: UpdateBotAliasRequest | UpdateBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_alias_id`
- **Params**: `bot_id` — path `botId` · `bot_alias_id` — path `botAliasId` · `body` — JSON body
- **Returns (parsed)**: `UpdateBotAliasResponse`
- **Returns (raw)**: `ApiResult[UpdateBotAliasResponse, UpdateBotAliasErrorBody]`
- **Error**: `UpdateBotAliasErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateBotAliasRequest` | `amazon_lex/models/update_bot_alias_request.py` |
| `UpdateBotAliasRequestDict` | `amazon_lex/models/update_bot_alias_request.py` |
| `UpdateBotAliasResponse` | `amazon_lex/models/update_bot_alias_response.py` |
| `UpdateBotAliasErrorBody` | `amazon_lex/errors/update_bot_alias_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_bot_locale

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, body: UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `body` — JSON body
- **Returns (parsed)**: `UpdateBotLocaleResponse`
- **Returns (raw)**: `ApiResult[UpdateBotLocaleResponse, UpdateBotLocaleErrorBody]`
- **Error**: `UpdateBotLocaleErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateBotLocaleRequest` | `amazon_lex/models/update_bot_locale_request.py` |
| `UpdateBotLocaleRequestDict` | `amazon_lex/models/update_bot_locale_request.py` |
| `UpdateBotLocaleResponse` | `amazon_lex/models/update_bot_locale_response.py` |
| `UpdateBotLocaleErrorBody` | `amazon_lex/errors/update_bot_locale_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_bot_recommendation

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `bot_recommendation_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `bot_recommendation_id` — path `botRecommendationId` · `body` — JSON body
- **Returns (parsed)**: `UpdateBotRecommendationResponse`
- **Returns (raw)**: `ApiResult[UpdateBotRecommendationResponse, UpdateBotRecommendationErrorBody]`
- **Error**: `UpdateBotRecommendationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateBotRecommendationRequest` | `amazon_lex/models/update_bot_recommendation_request.py` |
| `UpdateBotRecommendationRequestDict` | `amazon_lex/models/update_bot_recommendation_request.py` |
| `UpdateBotRecommendationResponse` | `amazon_lex/models/update_bot_recommendation_response.py` |
| `UpdateBotRecommendationErrorBody` | `amazon_lex/errors/update_bot_recommendation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_intent

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_intent(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: UpdateIntentRequest | UpdateIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `body` — JSON body
- **Returns (parsed)**: `UpdateIntentResponse`
- **Returns (raw)**: `ApiResult[UpdateIntentResponse, UpdateIntentErrorBody]`
- **Error**: `UpdateIntentErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateIntentRequest` | `amazon_lex/models/update_intent_request.py` |
| `UpdateIntentRequestDict` | `amazon_lex/models/update_intent_request.py` |
| `UpdateIntentResponse` | `amazon_lex/models/update_intent_response.py` |
| `UpdateIntentErrorBody` | `amazon_lex/errors/update_intent_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_slot

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, slot_id: str, *, body: UpdateSlotRequest | UpdateSlotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `intent_id`, `slot_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `intent_id` — path `intentId` · `slot_id` — path `slotId` · `body` — JSON body
- **Returns (parsed)**: `UpdateSlotResponse`
- **Returns (raw)**: `ApiResult[UpdateSlotResponse, UpdateSlotErrorBody]`
- **Error**: `UpdateSlotErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSlotRequest` | `amazon_lex/models/update_slot_request.py` |
| `UpdateSlotRequestDict` | `amazon_lex/models/update_slot_request.py` |
| `UpdateSlotResponse` | `amazon_lex/models/update_slot_response.py` |
| `UpdateSlotErrorBody` | `amazon_lex/errors/update_slot_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.bots.update_slot_type

- **Route**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_slot_type(bot_id: str, bot_version: str, locale_id: str, slot_type_id: str, *, body: UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_id`, `bot_version`, `locale_id`, `slot_type_id`
- **Params**: `bot_id` — path `botId` · `bot_version` — path `botVersion` · `locale_id` — path `localeId` · `slot_type_id` — path `slotTypeId` · `body` — JSON body
- **Returns (parsed)**: `UpdateSlotTypeResponse`
- **Returns (raw)**: `ApiResult[UpdateSlotTypeResponse, UpdateSlotTypeErrorBody]`
- **Error**: `UpdateSlotTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSlotTypeRequest` | `amazon_lex/models/update_slot_type_request.py` |
| `UpdateSlotTypeRequestDict` | `amazon_lex/models/update_slot_type_request.py` |
| `UpdateSlotTypeResponse` | `amazon_lex/models/update_slot_type_response.py` |
| `UpdateSlotTypeErrorBody` | `amazon_lex/errors/update_slot_type_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

