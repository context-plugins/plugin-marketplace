<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bots — operations

Accessor: `client.Bots` · Source: `src/AmazonLex/Api/Bots.cs` · 89 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchCreateCustomVocabularyItem

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `BatchCreateCustomVocabularyItem(BatchCreateCustomVocabularyItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `BatchCreateCustomVocabularyItemResponse`
- **Error**: `ApiException<BatchCreateCustomVocabularyItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchCreateCustomVocabularyItemOperationRequest` | `src/AmazonLex/Requests/Bots/BatchCreateCustomVocabularyItemOperationRequest.cs` |
| `BatchCreateCustomVocabularyItemRequest` | `src/AmazonLex/Models/BatchCreateCustomVocabularyItemRequest.cs` |
| `BatchCreateCustomVocabularyItemResponse` | `src/AmazonLex/Models/BatchCreateCustomVocabularyItemResponse.cs` |
| `BatchCreateCustomVocabularyItemError` | `src/AmazonLex/Errors/BatchCreateCustomVocabularyItemError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### BatchDeleteCustomVocabularyItem

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `BatchDeleteCustomVocabularyItem(BatchDeleteCustomVocabularyItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `BatchDeleteCustomVocabularyItemResponse`
- **Error**: `ApiException<BatchDeleteCustomVocabularyItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDeleteCustomVocabularyItemOperationRequest` | `src/AmazonLex/Requests/Bots/BatchDeleteCustomVocabularyItemOperationRequest.cs` |
| `BatchDeleteCustomVocabularyItemRequest` | `src/AmazonLex/Models/BatchDeleteCustomVocabularyItemRequest.cs` |
| `BatchDeleteCustomVocabularyItemResponse` | `src/AmazonLex/Models/BatchDeleteCustomVocabularyItemResponse.cs` |
| `BatchDeleteCustomVocabularyItemError` | `src/AmazonLex/Errors/BatchDeleteCustomVocabularyItemError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### BatchUpdateCustomVocabularyItem

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `BatchUpdateCustomVocabularyItem(BatchUpdateCustomVocabularyItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `BatchUpdateCustomVocabularyItemResponse`
- **Error**: `ApiException<BatchUpdateCustomVocabularyItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchUpdateCustomVocabularyItemOperationRequest` | `src/AmazonLex/Requests/Bots/BatchUpdateCustomVocabularyItemOperationRequest.cs` |
| `BatchUpdateCustomVocabularyItemRequest` | `src/AmazonLex/Models/BatchUpdateCustomVocabularyItemRequest.cs` |
| `BatchUpdateCustomVocabularyItemResponse` | `src/AmazonLex/Models/BatchUpdateCustomVocabularyItemResponse.cs` |
| `BatchUpdateCustomVocabularyItemError` | `src/AmazonLex/Errors/BatchUpdateCustomVocabularyItemError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### BuildBotLocale

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `BuildBotLocale(BuildBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `BuildBotLocaleResponse`
- **Error**: `ApiException<BuildBotLocaleError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BuildBotLocaleOperationRequest` | `src/AmazonLex/Requests/Bots/BuildBotLocaleOperationRequest.cs` |
| `BuildBotLocaleRequest` | `src/AmazonLex/Models/BuildBotLocaleRequest.cs` |
| `BuildBotLocaleResponse` | `src/AmazonLex/Models/BuildBotLocaleResponse.cs` |
| `BuildBotLocaleError` | `src/AmazonLex/Errors/BuildBotLocaleError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateBot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateBot(CreateBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateBotResponse`
- **Error**: `ApiException<CreateBotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotOperationRequest` | `src/AmazonLex/Requests/Bots/CreateBotOperationRequest.cs` |
| `CreateBotRequest` | `src/AmazonLex/Models/CreateBotRequest.cs` |
| `CreateBotResponse` | `src/AmazonLex/Models/CreateBotResponse.cs` |
| `CreateBotError` | `src/AmazonLex/Errors/CreateBotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateBotAlias

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateBotAlias(CreateBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `CreateBotAliasResponse`
- **Error**: `ApiException<CreateBotAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotAliasOperationRequest` | `src/AmazonLex/Requests/Bots/CreateBotAliasOperationRequest.cs` |
| `CreateBotAliasRequest` | `src/AmazonLex/Models/CreateBotAliasRequest.cs` |
| `CreateBotAliasResponse` | `src/AmazonLex/Models/CreateBotAliasResponse.cs` |
| `CreateBotAliasError` | `src/AmazonLex/Errors/CreateBotAliasError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateBotLocale

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateBotLocale(CreateBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`
- **Returns**: `CreateBotLocaleResponse`
- **Error**: `ApiException<CreateBotLocaleError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotLocaleOperationRequest` | `src/AmazonLex/Requests/Bots/CreateBotLocaleOperationRequest.cs` |
| `CreateBotLocaleRequest` | `src/AmazonLex/Models/CreateBotLocaleRequest.cs` |
| `CreateBotLocaleResponse` | `src/AmazonLex/Models/CreateBotLocaleResponse.cs` |
| `CreateBotLocaleError` | `src/AmazonLex/Errors/CreateBotLocaleError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateBotReplica

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateBotReplica(CreateBotReplicaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `CreateBotReplicaResponse`
- **Error**: `ApiException<CreateBotReplicaError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotReplicaOperationRequest` | `src/AmazonLex/Requests/Bots/CreateBotReplicaOperationRequest.cs` |
| `CreateBotReplicaRequest` | `src/AmazonLex/Models/CreateBotReplicaRequest.cs` |
| `CreateBotReplicaResponse` | `src/AmazonLex/Models/CreateBotReplicaResponse.cs` |
| `CreateBotReplicaError` | `src/AmazonLex/Errors/CreateBotReplicaError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateBotVersion

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateBotVersion(CreateBotVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `CreateBotVersionResponse`
- **Error**: `ApiException<CreateBotVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotVersionOperationRequest` | `src/AmazonLex/Requests/Bots/CreateBotVersionOperationRequest.cs` |
| `CreateBotVersionRequest` | `src/AmazonLex/Models/CreateBotVersionRequest.cs` |
| `CreateBotVersionResponse` | `src/AmazonLex/Models/CreateBotVersionResponse.cs` |
| `CreateBotVersionError` | `src/AmazonLex/Errors/CreateBotVersionError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateBotVersion1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateBotVersion1(CreateBotVersion1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `ModelsLexCreateBotVersionResponse`
- **Error**: `ApiException<CreateBotVersion1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotVersion1Request` | `src/AmazonLex/Requests/Bots/CreateBotVersion1Request.cs` |
| `ModelsLexCreateBotVersionRequest` | `src/AmazonLex/Models/ModelsLexCreateBotVersionRequest.cs` |
| `ModelsLexCreateBotVersionResponse` | `src/AmazonLex/Models/ModelsLexCreateBotVersionResponse.cs` |
| `CreateBotVersion1Error` | `src/AmazonLex/Errors/CreateBotVersion1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### CreateIntent

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateIntent(CreateIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `CreateIntentResponse`
- **Error**: `ApiException<CreateIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateIntentOperationRequest` | `src/AmazonLex/Requests/Bots/CreateIntentOperationRequest.cs` |
| `CreateIntentRequest` | `src/AmazonLex/Models/CreateIntentRequest.cs` |
| `CreateIntentResponse` | `src/AmazonLex/Models/CreateIntentResponse.cs` |
| `CreateIntentError` | `src/AmazonLex/Errors/CreateIntentError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateSlot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateSlot(CreateSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`
- **Returns**: `CreateSlotResponse`
- **Error**: `ApiException<CreateSlotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSlotOperationRequest` | `src/AmazonLex/Requests/Bots/CreateSlotOperationRequest.cs` |
| `CreateSlotRequest` | `src/AmazonLex/Models/CreateSlotRequest.cs` |
| `CreateSlotResponse` | `src/AmazonLex/Models/CreateSlotResponse.cs` |
| `CreateSlotError` | `src/AmazonLex/Errors/CreateSlotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### CreateSlotType

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateSlotType(CreateSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `CreateSlotTypeResponse`
- **Error**: `ApiException<CreateSlotTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSlotTypeOperationRequest` | `src/AmazonLex/Requests/Bots/CreateSlotTypeOperationRequest.cs` |
| `CreateSlotTypeRequest` | `src/AmazonLex/Models/CreateSlotTypeRequest.cs` |
| `CreateSlotTypeResponse` | `src/AmazonLex/Models/CreateSlotTypeResponse.cs` |
| `CreateSlotTypeError` | `src/AmazonLex/Errors/CreateSlotTypeError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBot(DeleteBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `DeleteBotResponse`
- **Error**: `ApiException<DeleteBotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteBotOperationRequest.cs` |
| `DeleteBotRequest` | `src/AmazonLex/Models/DeleteBotRequest.cs` |
| `DeleteBotResponse` | `src/AmazonLex/Models/DeleteBotResponse.cs` |
| `DeleteBotError` | `src/AmazonLex/Errors/DeleteBotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBot1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBot1(DeleteBot1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `string`
- **Error**: `ApiException<DeleteBot1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBot1Request` | `src/AmazonLex/Requests/Bots/DeleteBot1Request.cs` |
| `ModelsLexDeleteBotRequest` | `src/AmazonLex/Models/ModelsLexDeleteBotRequest.cs` |
| `DeleteBot1Error` | `src/AmazonLex/Errors/DeleteBot1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteBotAlias1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotAlias1(DeleteBotAlias1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `Name`
- **Returns**: `string`
- **Error**: `ApiException<DeleteBotAlias1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotAlias1Request` | `src/AmazonLex/Requests/Bots/DeleteBotAlias1Request.cs` |
| `ModelsLexDeleteBotAliasRequest` | `src/AmazonLex/Models/ModelsLexDeleteBotAliasRequest.cs` |
| `DeleteBotAlias1Error` | `src/AmazonLex/Errors/DeleteBotAlias1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteBotAlias2

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotAlias2(DeleteBotAlias2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`
- **Returns**: `DeleteBotAliasResponse`
- **Error**: `ApiException<DeleteBotAlias2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotAlias2Request` | `src/AmazonLex/Requests/Bots/DeleteBotAlias2Request.cs` |
| `DeleteBotAliasRequest` | `src/AmazonLex/Models/DeleteBotAliasRequest.cs` |
| `DeleteBotAliasResponse` | `src/AmazonLex/Models/DeleteBotAliasResponse.cs` |
| `DeleteBotAlias2Error` | `src/AmazonLex/Errors/DeleteBotAlias2Error.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBotAnalyzerRecommendation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotAnalyzerRecommendation(DeleteBotAnalyzerRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAnalyzerRequestId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteBotAnalyzerRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotAnalyzerRecommendationOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteBotAnalyzerRecommendationOperationRequest.cs` |
| `DeleteBotAnalyzerRecommendationRequest` | `src/AmazonLex/Models/DeleteBotAnalyzerRecommendationRequest.cs` |
| `DeleteBotAnalyzerRecommendationError` | `src/AmazonLex/Errors/DeleteBotAnalyzerRecommendationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBotLocale

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotLocale(DeleteBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `DeleteBotLocaleResponse`
- **Error**: `ApiException<DeleteBotLocaleError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotLocaleOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteBotLocaleOperationRequest.cs` |
| `DeleteBotLocaleRequest` | `src/AmazonLex/Models/DeleteBotLocaleRequest.cs` |
| `DeleteBotLocaleResponse` | `src/AmazonLex/Models/DeleteBotLocaleResponse.cs` |
| `DeleteBotLocaleError` | `src/AmazonLex/Errors/DeleteBotLocaleError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBotReplica

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotReplica(DeleteBotReplicaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `ReplicaRegion`
- **Returns**: `DeleteBotReplicaResponse`
- **Error**: `ApiException<DeleteBotReplicaError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotReplicaOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteBotReplicaOperationRequest.cs` |
| `DeleteBotReplicaRequest` | `src/AmazonLex/Models/DeleteBotReplicaRequest.cs` |
| `DeleteBotReplicaResponse` | `src/AmazonLex/Models/DeleteBotReplicaResponse.cs` |
| `DeleteBotReplicaError` | `src/AmazonLex/Errors/DeleteBotReplicaError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBotVersion

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotVersion(DeleteBotVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`
- **Returns**: `DeleteBotVersionResponse`
- **Error**: `ApiException<DeleteBotVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotVersionOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteBotVersionOperationRequest.cs` |
| `DeleteBotVersionRequest` | `src/AmazonLex/Models/DeleteBotVersionRequest.cs` |
| `DeleteBotVersionResponse` | `src/AmazonLex/Models/DeleteBotVersionResponse.cs` |
| `DeleteBotVersionError` | `src/AmazonLex/Errors/DeleteBotVersionError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteBotVersion1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotVersion1(DeleteBotVersion1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `string`
- **Error**: `ApiException<DeleteBotVersion1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotVersion1Request` | `src/AmazonLex/Requests/Bots/DeleteBotVersion1Request.cs` |
| `ModelsLexDeleteBotVersionRequest` | `src/AmazonLex/Models/ModelsLexDeleteBotVersionRequest.cs` |
| `DeleteBotVersion1Error` | `src/AmazonLex/Errors/DeleteBotVersion1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteCustomVocabulary

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteCustomVocabulary(DeleteCustomVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `DeleteCustomVocabularyResponse`
- **Error**: `ApiException<DeleteCustomVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomVocabularyOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteCustomVocabularyOperationRequest.cs` |
| `DeleteCustomVocabularyRequest` | `src/AmazonLex/Models/DeleteCustomVocabularyRequest.cs` |
| `DeleteCustomVocabularyResponse` | `src/AmazonLex/Models/DeleteCustomVocabularyResponse.cs` |
| `DeleteCustomVocabularyError` | `src/AmazonLex/Errors/DeleteCustomVocabularyError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteIntent

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteIntent(DeleteIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`
- **Returns**: `string`
- **Error**: `ApiException<DeleteIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteIntentOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteIntentOperationRequest.cs` |
| `DeleteIntentRequest` | `src/AmazonLex/Models/DeleteIntentRequest.cs` |
| `DeleteIntentError` | `src/AmazonLex/Errors/DeleteIntentError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteIntent1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteIntent1(DeleteIntent1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `string`
- **Error**: `ApiException<DeleteIntent1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteIntent1Request` | `src/AmazonLex/Requests/Bots/DeleteIntent1Request.cs` |
| `ModelsLexDeleteIntentRequest` | `src/AmazonLex/Models/ModelsLexDeleteIntentRequest.cs` |
| `DeleteIntent1Error` | `src/AmazonLex/Errors/DeleteIntent1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteSession

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSession(DeleteSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`, `LocaleId`, `SessionId`
- **Returns**: `DeleteSessionResponse`
- **Error**: `ApiException<DeleteSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetRuntimeV2LexResourceNotFoundException([NotNullWhen(true)] out RuntimeV2LexResourceNotFoundException? value)` [404] · `TryGetRuntimeV2LexConflictException([NotNullWhen(true)] out RuntimeV2LexConflictException? value)` [409] · `TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value)` [429] · `TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSessionOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteSessionOperationRequest.cs` |
| `DeleteSessionRequest` | `src/AmazonLex/Models/DeleteSessionRequest.cs` |
| `DeleteSessionResponse` | `src/AmazonLex/Models/DeleteSessionResponse.cs` |
| `DeleteSessionError` | `src/AmazonLex/Errors/DeleteSessionError.cs` |
| `RuntimeV2LexValidationException` | `src/AmazonLex/Models/RuntimeV2LexValidationException.cs` |
| `AccessDeniedException` | `src/AmazonLex/Models/AccessDeniedException.cs` |
| `RuntimeV2LexResourceNotFoundException` | `src/AmazonLex/Models/RuntimeV2LexResourceNotFoundException.cs` |
| `RuntimeV2LexConflictException` | `src/AmazonLex/Models/RuntimeV2LexConflictException.cs` |
| `RuntimeV2LexThrottlingException` | `src/AmazonLex/Models/RuntimeV2LexThrottlingException.cs` |
| `RuntimeV2LexInternalServerException` | `src/AmazonLex/Models/RuntimeV2LexInternalServerException.cs` |

### DeleteSession1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSession1(DeleteSession1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `UserId`
- **Returns**: `RuntimeLexDeleteSessionResponse`
- **Error**: `ApiException<DeleteSession1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSession1Request` | `src/AmazonLex/Requests/Bots/DeleteSession1Request.cs` |
| `RuntimeLexDeleteSessionRequest` | `src/AmazonLex/Models/RuntimeLexDeleteSessionRequest.cs` |
| `RuntimeLexDeleteSessionResponse` | `src/AmazonLex/Models/RuntimeLexDeleteSessionResponse.cs` |
| `DeleteSession1Error` | `src/AmazonLex/Errors/DeleteSession1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteSlot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSlot(DeleteSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`, `SlotId`
- **Returns**: `string`
- **Error**: `ApiException<DeleteSlotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSlotOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteSlotOperationRequest.cs` |
| `DeleteSlotRequest` | `src/AmazonLex/Models/DeleteSlotRequest.cs` |
| `DeleteSlotError` | `src/AmazonLex/Errors/DeleteSlotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteSlotType

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSlotType(DeleteSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `SlotTypeId`
- **Returns**: `string`
- **Error**: `ApiException<DeleteSlotTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSlotTypeOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteSlotTypeOperationRequest.cs` |
| `DeleteSlotTypeRequest` | `src/AmazonLex/Models/DeleteSlotTypeRequest.cs` |
| `DeleteSlotTypeError` | `src/AmazonLex/Errors/DeleteSlotTypeError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteSlotType1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSlotType1(DeleteSlotType1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `string`
- **Error**: `ApiException<DeleteSlotType1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSlotType1Request` | `src/AmazonLex/Requests/Bots/DeleteSlotType1Request.cs` |
| `ModelsLexDeleteSlotTypeRequest` | `src/AmazonLex/Models/ModelsLexDeleteSlotTypeRequest.cs` |
| `DeleteSlotType1Error` | `src/AmazonLex/Errors/DeleteSlotType1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteUtterances

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteUtterances(DeleteUtterancesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteUtterancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUtterancesOperationRequest` | `src/AmazonLex/Requests/Bots/DeleteUtterancesOperationRequest.cs` |
| `DeleteUtterancesRequest` | `src/AmazonLex/Models/DeleteUtterancesRequest.cs` |
| `DeleteUtterancesError` | `src/AmazonLex/Errors/DeleteUtterancesError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteUtterances1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteUtterances1(DeleteUtterances1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `UserId`
- **Returns**: `string`
- **Error**: `ApiException<DeleteUtterances1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUtterances1Request` | `src/AmazonLex/Requests/Bots/DeleteUtterances1Request.cs` |
| `ModelsLexDeleteUtterancesRequest` | `src/AmazonLex/Models/ModelsLexDeleteUtterancesRequest.cs` |
| `DeleteUtterances1Error` | `src/AmazonLex/Errors/DeleteUtterances1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DescribeBot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBot(DescribeBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `DescribeBotResponse`
- **Error**: `ApiException<DescribeBotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotOperationRequest.cs` |
| `DescribeBotResponse` | `src/AmazonLex/Models/DescribeBotResponse.cs` |
| `DescribeBotError` | `src/AmazonLex/Errors/DescribeBotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotAlias

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotAlias(DescribeBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`
- **Returns**: `DescribeBotAliasResponse`
- **Error**: `ApiException<DescribeBotAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotAliasOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotAliasOperationRequest.cs` |
| `DescribeBotAliasResponse` | `src/AmazonLex/Models/DescribeBotAliasResponse.cs` |
| `DescribeBotAliasError` | `src/AmazonLex/Errors/DescribeBotAliasError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotAnalyzerRecommendation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotAnalyzerRecommendation(DescribeBotAnalyzerRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAnalyzerRequestId`
- **Returns**: `DescribeBotAnalyzerRecommendationResponse`
- **Error**: `ApiException<DescribeBotAnalyzerRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotAnalyzerRecommendationOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotAnalyzerRecommendationOperationRequest.cs` |
| `DescribeBotAnalyzerRecommendationRequest` | `src/AmazonLex/Models/DescribeBotAnalyzerRecommendationRequest.cs` |
| `DescribeBotAnalyzerRecommendationResponse` | `src/AmazonLex/Models/DescribeBotAnalyzerRecommendationResponse.cs` |
| `DescribeBotAnalyzerRecommendationError` | `src/AmazonLex/Errors/DescribeBotAnalyzerRecommendationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotLocale

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotLocale(DescribeBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `DescribeBotLocaleResponse`
- **Error**: `ApiException<DescribeBotLocaleError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotLocaleOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotLocaleOperationRequest.cs` |
| `DescribeBotLocaleResponse` | `src/AmazonLex/Models/DescribeBotLocaleResponse.cs` |
| `DescribeBotLocaleError` | `src/AmazonLex/Errors/DescribeBotLocaleError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotRecommendation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotRecommendation(DescribeBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `BotRecommendationId`
- **Returns**: `DescribeBotRecommendationResponse`
- **Error**: `ApiException<DescribeBotRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotRecommendationOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotRecommendationOperationRequest.cs` |
| `DescribeBotRecommendationResponse` | `src/AmazonLex/Models/DescribeBotRecommendationResponse.cs` |
| `DescribeBotRecommendationError` | `src/AmazonLex/Errors/DescribeBotRecommendationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotReplica

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotReplica(DescribeBotReplicaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `ReplicaRegion`
- **Returns**: `DescribeBotReplicaResponse`
- **Error**: `ApiException<DescribeBotReplicaError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotReplicaOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotReplicaOperationRequest.cs` |
| `DescribeBotReplicaResponse` | `src/AmazonLex/Models/DescribeBotReplicaResponse.cs` |
| `DescribeBotReplicaError` | `src/AmazonLex/Errors/DescribeBotReplicaError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotResourceGeneration

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotResourceGeneration(DescribeBotResourceGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `GenerationId`
- **Returns**: `DescribeBotResourceGenerationResponse`
- **Error**: `ApiException<DescribeBotResourceGenerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotResourceGenerationOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotResourceGenerationOperationRequest.cs` |
| `DescribeBotResourceGenerationResponse` | `src/AmazonLex/Models/DescribeBotResourceGenerationResponse.cs` |
| `DescribeBotResourceGenerationError` | `src/AmazonLex/Errors/DescribeBotResourceGenerationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeBotVersion

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBotVersion(DescribeBotVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`
- **Returns**: `DescribeBotVersionResponse`
- **Error**: `ApiException<DescribeBotVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBotVersionOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeBotVersionOperationRequest.cs` |
| `DescribeBotVersionResponse` | `src/AmazonLex/Models/DescribeBotVersionResponse.cs` |
| `DescribeBotVersionError` | `src/AmazonLex/Errors/DescribeBotVersionError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeCustomVocabularyMetadata

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCustomVocabularyMetadata(DescribeCustomVocabularyMetadataOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `DescribeCustomVocabularyMetadataResponse`
- **Error**: `ApiException<DescribeCustomVocabularyMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCustomVocabularyMetadataOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeCustomVocabularyMetadataOperationRequest.cs` |
| `DescribeCustomVocabularyMetadataResponse` | `src/AmazonLex/Models/DescribeCustomVocabularyMetadataResponse.cs` |
| `DescribeCustomVocabularyMetadataError` | `src/AmazonLex/Errors/DescribeCustomVocabularyMetadataError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeIntent

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeIntent(DescribeIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`
- **Returns**: `DescribeIntentResponse`
- **Error**: `ApiException<DescribeIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeIntentOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeIntentOperationRequest.cs` |
| `DescribeIntentResponse` | `src/AmazonLex/Models/DescribeIntentResponse.cs` |
| `DescribeIntentError` | `src/AmazonLex/Errors/DescribeIntentError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeSlot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeSlot(DescribeSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`, `SlotId`
- **Returns**: `DescribeSlotResponse`
- **Error**: `ApiException<DescribeSlotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSlotOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeSlotOperationRequest.cs` |
| `DescribeSlotResponse` | `src/AmazonLex/Models/DescribeSlotResponse.cs` |
| `DescribeSlotError` | `src/AmazonLex/Errors/DescribeSlotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeSlotType

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeSlotType(DescribeSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `SlotTypeId`
- **Returns**: `DescribeSlotTypeResponse`
- **Error**: `ApiException<DescribeSlotTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSlotTypeOperationRequest` | `src/AmazonLex/Requests/Bots/DescribeSlotTypeOperationRequest.cs` |
| `DescribeSlotTypeResponse` | `src/AmazonLex/Models/DescribeSlotTypeResponse.cs` |
| `DescribeSlotTypeError` | `src/AmazonLex/Errors/DescribeSlotTypeError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### GenerateBotElement

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GenerateBotElement(GenerateBotElementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `GenerateBotElementResponse`
- **Error**: `ApiException<GenerateBotElementError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateBotElementOperationRequest` | `src/AmazonLex/Requests/Bots/GenerateBotElementOperationRequest.cs` |
| `GenerateBotElementRequest` | `src/AmazonLex/Models/GenerateBotElementRequest.cs` |
| `GenerateBotElementResponse` | `src/AmazonLex/Models/GenerateBotElementResponse.cs` |
| `GenerateBotElementError` | `src/AmazonLex/Errors/GenerateBotElementError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### GetBots

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetBots(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetBotsResponse`
- **Error**: `ApiException<GetBotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotsResponse` | `src/AmazonLex/Models/GetBotsResponse.cs` |
| `GetBotsError` | `src/AmazonLex/Errors/GetBotsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetSession

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetSession(GetSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`, `LocaleId`, `SessionId`
- **Returns**: `GetSessionResponse`
- **Error**: `ApiException<GetSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetRuntimeV2LexResourceNotFoundException([NotNullWhen(true)] out RuntimeV2LexResourceNotFoundException? value)` [404] · `TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value)` [429] · `TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionOperationRequest` | `src/AmazonLex/Requests/Bots/GetSessionOperationRequest.cs` |
| `GetSessionResponse` | `src/AmazonLex/Models/GetSessionResponse.cs` |
| `GetSessionError` | `src/AmazonLex/Errors/GetSessionError.cs` |
| `RuntimeV2LexValidationException` | `src/AmazonLex/Models/RuntimeV2LexValidationException.cs` |
| `AccessDeniedException` | `src/AmazonLex/Models/AccessDeniedException.cs` |
| `RuntimeV2LexResourceNotFoundException` | `src/AmazonLex/Models/RuntimeV2LexResourceNotFoundException.cs` |
| `RuntimeV2LexThrottlingException` | `src/AmazonLex/Models/RuntimeV2LexThrottlingException.cs` |
| `RuntimeV2LexInternalServerException` | `src/AmazonLex/Models/RuntimeV2LexInternalServerException.cs` |

### GetSession1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetSession1(GetSession1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `UserId`
- **Returns**: `RuntimeLexGetSessionResponse`
- **Error**: `ApiException<GetSession1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSession1Request` | `src/AmazonLex/Requests/Bots/GetSession1Request.cs` |
| `RuntimeLexGetSessionResponse` | `src/AmazonLex/Models/RuntimeLexGetSessionResponse.cs` |
| `GetSession1Error` | `src/AmazonLex/Errors/GetSession1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### ListAggregatedUtterances

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListAggregatedUtterances(ListAggregatedUtterancesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListAggregatedUtterancesResponse`
- **Error**: `ApiException<ListAggregatedUtterancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAggregatedUtterancesOperationRequest` | `src/AmazonLex/Requests/Bots/ListAggregatedUtterancesOperationRequest.cs` |
| `ListAggregatedUtterancesRequest` | `src/AmazonLex/Models/ListAggregatedUtterancesRequest.cs` |
| `ListAggregatedUtterancesResponse` | `src/AmazonLex/Models/ListAggregatedUtterancesResponse.cs` |
| `ListAggregatedUtterancesError` | `src/AmazonLex/Errors/ListAggregatedUtterancesError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotAliasReplicas

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotAliasReplicas(ListBotAliasReplicasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `ReplicaRegion`
- **Returns**: `ListBotAliasReplicasResponse`
- **Error**: `ApiException<ListBotAliasReplicasError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotAliasReplicasOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotAliasReplicasOperationRequest.cs` |
| `ListBotAliasReplicasRequest` | `src/AmazonLex/Models/ListBotAliasReplicasRequest.cs` |
| `ListBotAliasReplicasResponse` | `src/AmazonLex/Models/ListBotAliasReplicasResponse.cs` |
| `ListBotAliasReplicasError` | `src/AmazonLex/Errors/ListBotAliasReplicasError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotAliases

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotAliases(ListBotAliasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListBotAliasesResponse`
- **Error**: `ApiException<ListBotAliasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotAliasesOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotAliasesOperationRequest.cs` |
| `ListBotAliasesRequest` | `src/AmazonLex/Models/ListBotAliasesRequest.cs` |
| `ListBotAliasesResponse` | `src/AmazonLex/Models/ListBotAliasesResponse.cs` |
| `ListBotAliasesError` | `src/AmazonLex/Errors/ListBotAliasesError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotAnalyzerHistory

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotAnalyzerHistory(ListBotAnalyzerHistoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListBotAnalyzerHistoryResponse`
- **Error**: `ApiException<ListBotAnalyzerHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotAnalyzerHistoryOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotAnalyzerHistoryOperationRequest.cs` |
| `ListBotAnalyzerHistoryRequest` | `src/AmazonLex/Models/ListBotAnalyzerHistoryRequest.cs` |
| `ListBotAnalyzerHistoryResponse` | `src/AmazonLex/Models/ListBotAnalyzerHistoryResponse.cs` |
| `ListBotAnalyzerHistoryError` | `src/AmazonLex/Errors/ListBotAnalyzerHistoryError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotLocales

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotLocales(ListBotLocalesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`
- **Returns**: `ListBotLocalesResponse`
- **Error**: `ApiException<ListBotLocalesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotLocalesOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotLocalesOperationRequest.cs` |
| `ListBotLocalesRequest` | `src/AmazonLex/Models/ListBotLocalesRequest.cs` |
| `ListBotLocalesResponse` | `src/AmazonLex/Models/ListBotLocalesResponse.cs` |
| `ListBotLocalesError` | `src/AmazonLex/Errors/ListBotLocalesError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotRecommendations

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotRecommendations(ListBotRecommendationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `ListBotRecommendationsResponse`
- **Error**: `ApiException<ListBotRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotRecommendationsOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotRecommendationsOperationRequest.cs` |
| `ListBotRecommendationsRequest` | `src/AmazonLex/Models/ListBotRecommendationsRequest.cs` |
| `ListBotRecommendationsResponse` | `src/AmazonLex/Models/ListBotRecommendationsResponse.cs` |
| `ListBotRecommendationsError` | `src/AmazonLex/Errors/ListBotRecommendationsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotReplicas

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotReplicas(ListBotReplicasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListBotReplicasResponse`
- **Error**: `ApiException<ListBotReplicasError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotReplicasOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotReplicasOperationRequest.cs` |
| `ListBotReplicasRequest` | `src/AmazonLex/Models/ListBotReplicasRequest.cs` |
| `ListBotReplicasResponse` | `src/AmazonLex/Models/ListBotReplicasResponse.cs` |
| `ListBotReplicasError` | `src/AmazonLex/Errors/ListBotReplicasError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotResourceGenerations

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotResourceGenerations(ListBotResourceGenerationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `ListBotResourceGenerationsResponse`
- **Error**: `ApiException<ListBotResourceGenerationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotResourceGenerationsOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotResourceGenerationsOperationRequest.cs` |
| `ListBotResourceGenerationsRequest` | `src/AmazonLex/Models/ListBotResourceGenerationsRequest.cs` |
| `ListBotResourceGenerationsResponse` | `src/AmazonLex/Models/ListBotResourceGenerationsResponse.cs` |
| `ListBotResourceGenerationsError` | `src/AmazonLex/Errors/ListBotResourceGenerationsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotVersionReplicas

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotVersionReplicas(ListBotVersionReplicasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `ReplicaRegion`
- **Returns**: `ListBotVersionReplicasResponse`
- **Error**: `ApiException<ListBotVersionReplicasError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotVersionReplicasOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotVersionReplicasOperationRequest.cs` |
| `ListBotVersionReplicasRequest` | `src/AmazonLex/Models/ListBotVersionReplicasRequest.cs` |
| `ListBotVersionReplicasResponse` | `src/AmazonLex/Models/ListBotVersionReplicasResponse.cs` |
| `ListBotVersionReplicasError` | `src/AmazonLex/Errors/ListBotVersionReplicasError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBotVersions

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBotVersions(ListBotVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListBotVersionsResponse`
- **Error**: `ApiException<ListBotVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotVersionsOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotVersionsOperationRequest.cs` |
| `ListBotVersionsRequest` | `src/AmazonLex/Models/ListBotVersionsRequest.cs` |
| `ListBotVersionsResponse` | `src/AmazonLex/Models/ListBotVersionsResponse.cs` |
| `ListBotVersionsError` | `src/AmazonLex/Errors/ListBotVersionsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBots

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBots(ListBotsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListBotsResponse`
- **Error**: `ApiException<ListBotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBotsOperationRequest` | `src/AmazonLex/Requests/Bots/ListBotsOperationRequest.cs` |
| `ListBotsRequest` | `src/AmazonLex/Models/ListBotsRequest.cs` |
| `ListBotsResponse` | `src/AmazonLex/Models/ListBotsResponse.cs` |
| `ListBotsError` | `src/AmazonLex/Errors/ListBotsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListCustomVocabularyItems

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListCustomVocabularyItems(ListCustomVocabularyItemsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `ListCustomVocabularyItemsResponse`
- **Error**: `ApiException<ListCustomVocabularyItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomVocabularyItemsOperationRequest` | `src/AmazonLex/Requests/Bots/ListCustomVocabularyItemsOperationRequest.cs` |
| `ListCustomVocabularyItemsRequest` | `src/AmazonLex/Models/ListCustomVocabularyItemsRequest.cs` |
| `ListCustomVocabularyItemsResponse` | `src/AmazonLex/Models/ListCustomVocabularyItemsResponse.cs` |
| `ListCustomVocabularyItemsError` | `src/AmazonLex/Errors/ListCustomVocabularyItemsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListIntentMetrics

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListIntentMetrics(ListIntentMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListIntentMetricsResponse`
- **Error**: `ApiException<ListIntentMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIntentMetricsOperationRequest` | `src/AmazonLex/Requests/Bots/ListIntentMetricsOperationRequest.cs` |
| `ListIntentMetricsRequest` | `src/AmazonLex/Models/ListIntentMetricsRequest.cs` |
| `ListIntentMetricsResponse` | `src/AmazonLex/Models/ListIntentMetricsResponse.cs` |
| `ListIntentMetricsError` | `src/AmazonLex/Errors/ListIntentMetricsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListIntentPaths

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListIntentPaths(ListIntentPathsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListIntentPathsResponse`
- **Error**: `ApiException<ListIntentPathsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIntentPathsOperationRequest` | `src/AmazonLex/Requests/Bots/ListIntentPathsOperationRequest.cs` |
| `ListIntentPathsRequest` | `src/AmazonLex/Models/ListIntentPathsRequest.cs` |
| `ListIntentPathsResponse` | `src/AmazonLex/Models/ListIntentPathsResponse.cs` |
| `ListIntentPathsError` | `src/AmazonLex/Errors/ListIntentPathsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListIntentStageMetrics

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListIntentStageMetrics(ListIntentStageMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListIntentStageMetricsResponse`
- **Error**: `ApiException<ListIntentStageMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIntentStageMetricsOperationRequest` | `src/AmazonLex/Requests/Bots/ListIntentStageMetricsOperationRequest.cs` |
| `ListIntentStageMetricsRequest` | `src/AmazonLex/Models/ListIntentStageMetricsRequest.cs` |
| `ListIntentStageMetricsResponse` | `src/AmazonLex/Models/ListIntentStageMetricsResponse.cs` |
| `ListIntentStageMetricsError` | `src/AmazonLex/Errors/ListIntentStageMetricsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListIntents

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListIntents(ListIntentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `ListIntentsResponse`
- **Error**: `ApiException<ListIntentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIntentsOperationRequest` | `src/AmazonLex/Requests/Bots/ListIntentsOperationRequest.cs` |
| `ListIntentsRequest` | `src/AmazonLex/Models/ListIntentsRequest.cs` |
| `ListIntentsResponse` | `src/AmazonLex/Models/ListIntentsResponse.cs` |
| `ListIntentsError` | `src/AmazonLex/Errors/ListIntentsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListRecommendedIntents

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListRecommendedIntents(ListRecommendedIntentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `BotRecommendationId`
- **Returns**: `ListRecommendedIntentsResponse`
- **Error**: `ApiException<ListRecommendedIntentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecommendedIntentsOperationRequest` | `src/AmazonLex/Requests/Bots/ListRecommendedIntentsOperationRequest.cs` |
| `ListRecommendedIntentsRequest` | `src/AmazonLex/Models/ListRecommendedIntentsRequest.cs` |
| `ListRecommendedIntentsResponse` | `src/AmazonLex/Models/ListRecommendedIntentsResponse.cs` |
| `ListRecommendedIntentsError` | `src/AmazonLex/Errors/ListRecommendedIntentsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListSessionAnalyticsData

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListSessionAnalyticsData(ListSessionAnalyticsDataOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListSessionAnalyticsDataResponse`
- **Error**: `ApiException<ListSessionAnalyticsDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSessionAnalyticsDataOperationRequest` | `src/AmazonLex/Requests/Bots/ListSessionAnalyticsDataOperationRequest.cs` |
| `ListSessionAnalyticsDataRequest` | `src/AmazonLex/Models/ListSessionAnalyticsDataRequest.cs` |
| `ListSessionAnalyticsDataResponse` | `src/AmazonLex/Models/ListSessionAnalyticsDataResponse.cs` |
| `ListSessionAnalyticsDataError` | `src/AmazonLex/Errors/ListSessionAnalyticsDataError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListSessionMetrics

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListSessionMetrics(ListSessionMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListSessionMetricsResponse`
- **Error**: `ApiException<ListSessionMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSessionMetricsOperationRequest` | `src/AmazonLex/Requests/Bots/ListSessionMetricsOperationRequest.cs` |
| `ListSessionMetricsRequest` | `src/AmazonLex/Models/ListSessionMetricsRequest.cs` |
| `ListSessionMetricsResponse` | `src/AmazonLex/Models/ListSessionMetricsResponse.cs` |
| `ListSessionMetricsError` | `src/AmazonLex/Errors/ListSessionMetricsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListSlotTypes

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListSlotTypes(ListSlotTypesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `ListSlotTypesResponse`
- **Error**: `ApiException<ListSlotTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSlotTypesOperationRequest` | `src/AmazonLex/Requests/Bots/ListSlotTypesOperationRequest.cs` |
| `ListSlotTypesRequest` | `src/AmazonLex/Models/ListSlotTypesRequest.cs` |
| `ListSlotTypesResponse` | `src/AmazonLex/Models/ListSlotTypesResponse.cs` |
| `ListSlotTypesError` | `src/AmazonLex/Errors/ListSlotTypesError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListSlots

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListSlots(ListSlotsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`
- **Returns**: `ListSlotsResponse`
- **Error**: `ApiException<ListSlotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSlotsOperationRequest` | `src/AmazonLex/Requests/Bots/ListSlotsOperationRequest.cs` |
| `ListSlotsRequest` | `src/AmazonLex/Models/ListSlotsRequest.cs` |
| `ListSlotsResponse` | `src/AmazonLex/Models/ListSlotsResponse.cs` |
| `ListSlotsError` | `src/AmazonLex/Errors/ListSlotsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListUtteranceAnalyticsData

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListUtteranceAnalyticsData(ListUtteranceAnalyticsDataOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListUtteranceAnalyticsDataResponse`
- **Error**: `ApiException<ListUtteranceAnalyticsDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUtteranceAnalyticsDataOperationRequest` | `src/AmazonLex/Requests/Bots/ListUtteranceAnalyticsDataOperationRequest.cs` |
| `ListUtteranceAnalyticsDataRequest` | `src/AmazonLex/Models/ListUtteranceAnalyticsDataRequest.cs` |
| `ListUtteranceAnalyticsDataResponse` | `src/AmazonLex/Models/ListUtteranceAnalyticsDataResponse.cs` |
| `ListUtteranceAnalyticsDataError` | `src/AmazonLex/Errors/ListUtteranceAnalyticsDataError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListUtteranceMetrics

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListUtteranceMetrics(ListUtteranceMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `ListUtteranceMetricsResponse`
- **Error**: `ApiException<ListUtteranceMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUtteranceMetricsOperationRequest` | `src/AmazonLex/Requests/Bots/ListUtteranceMetricsOperationRequest.cs` |
| `ListUtteranceMetricsRequest` | `src/AmazonLex/Models/ListUtteranceMetricsRequest.cs` |
| `ListUtteranceMetricsResponse` | `src/AmazonLex/Models/ListUtteranceMetricsResponse.cs` |
| `ListUtteranceMetricsError` | `src/AmazonLex/Errors/ListUtteranceMetricsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### PutSession

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `PutSession(PutSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`, `LocaleId`, `SessionId`
- **Returns**: `PutSessionResponse`
- **Error**: `ApiException<PutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetRuntimeV2LexResourceNotFoundException([NotNullWhen(true)] out RuntimeV2LexResourceNotFoundException? value)` [404] · `TryGetRuntimeV2LexConflictException([NotNullWhen(true)] out RuntimeV2LexConflictException? value)` [409] · `TryGetDependencyFailedException([NotNullWhen(true)] out DependencyFailedException? value)` [424] · `TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value)` [429] · `TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value)` [500] · `TryGetBadGatewayException([NotNullWhen(true)] out BadGatewayException? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSessionOperationRequest` | `src/AmazonLex/Requests/Bots/PutSessionOperationRequest.cs` |
| `PutSessionRequest` | `src/AmazonLex/Models/PutSessionRequest.cs` |
| `PutSessionResponse` | `src/AmazonLex/Models/PutSessionResponse.cs` |
| `PutSessionError` | `src/AmazonLex/Errors/PutSessionError.cs` |
| `RuntimeV2LexValidationException` | `src/AmazonLex/Models/RuntimeV2LexValidationException.cs` |
| `AccessDeniedException` | `src/AmazonLex/Models/AccessDeniedException.cs` |
| `RuntimeV2LexResourceNotFoundException` | `src/AmazonLex/Models/RuntimeV2LexResourceNotFoundException.cs` |
| `RuntimeV2LexConflictException` | `src/AmazonLex/Models/RuntimeV2LexConflictException.cs` |
| `DependencyFailedException` | `src/AmazonLex/Models/DependencyFailedException.cs` |
| `RuntimeV2LexThrottlingException` | `src/AmazonLex/Models/RuntimeV2LexThrottlingException.cs` |
| `RuntimeV2LexInternalServerException` | `src/AmazonLex/Models/RuntimeV2LexInternalServerException.cs` |
| `BadGatewayException` | `src/AmazonLex/Models/BadGatewayException.cs` |

### PutSession1

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `PutSession1(PutSession1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `UserId`
- **Returns**: `RuntimeLexPutSessionResponse`
- **Error**: `ApiException<PutSession1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetNotAcceptableException([NotNullWhen(true)] out NotAcceptableException? value)` [406] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetRuntimeLexDependencyFailedException([NotNullWhen(true)] out RuntimeLexDependencyFailedException? value)` [424] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRuntimeLexBadGatewayException([NotNullWhen(true)] out RuntimeLexBadGatewayException? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSession1Request` | `src/AmazonLex/Requests/Bots/PutSession1Request.cs` |
| `RuntimeLexPutSessionRequest` | `src/AmazonLex/Models/RuntimeLexPutSessionRequest.cs` |
| `RuntimeLexPutSessionResponse` | `src/AmazonLex/Models/RuntimeLexPutSessionResponse.cs` |
| `PutSession1Error` | `src/AmazonLex/Errors/PutSession1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `NotAcceptableException` | `src/AmazonLex/Models/NotAcceptableException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `RuntimeLexDependencyFailedException` | `src/AmazonLex/Models/RuntimeLexDependencyFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |
| `RuntimeLexBadGatewayException` | `src/AmazonLex/Models/RuntimeLexBadGatewayException.cs` |

### RecognizeText

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `RecognizeText(RecognizeTextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`, `LocaleId`, `SessionId`
- **Returns**: `RecognizeTextResponse`
- **Error**: `ApiException<RecognizeTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetRuntimeV2LexResourceNotFoundException([NotNullWhen(true)] out RuntimeV2LexResourceNotFoundException? value)` [404] · `TryGetRuntimeV2LexConflictException([NotNullWhen(true)] out RuntimeV2LexConflictException? value)` [409] · `TryGetDependencyFailedException([NotNullWhen(true)] out DependencyFailedException? value)` [424] · `TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value)` [429] · `TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value)` [500] · `TryGetBadGatewayException([NotNullWhen(true)] out BadGatewayException? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecognizeTextOperationRequest` | `src/AmazonLex/Requests/Bots/RecognizeTextOperationRequest.cs` |
| `RecognizeTextRequest` | `src/AmazonLex/Models/RecognizeTextRequest.cs` |
| `RecognizeTextResponse` | `src/AmazonLex/Models/RecognizeTextResponse.cs` |
| `RecognizeTextError` | `src/AmazonLex/Errors/RecognizeTextError.cs` |
| `RuntimeV2LexValidationException` | `src/AmazonLex/Models/RuntimeV2LexValidationException.cs` |
| `AccessDeniedException` | `src/AmazonLex/Models/AccessDeniedException.cs` |
| `RuntimeV2LexResourceNotFoundException` | `src/AmazonLex/Models/RuntimeV2LexResourceNotFoundException.cs` |
| `RuntimeV2LexConflictException` | `src/AmazonLex/Models/RuntimeV2LexConflictException.cs` |
| `DependencyFailedException` | `src/AmazonLex/Models/DependencyFailedException.cs` |
| `RuntimeV2LexThrottlingException` | `src/AmazonLex/Models/RuntimeV2LexThrottlingException.cs` |
| `RuntimeV2LexInternalServerException` | `src/AmazonLex/Models/RuntimeV2LexInternalServerException.cs` |
| `BadGatewayException` | `src/AmazonLex/Models/BadGatewayException.cs` |

### RecognizeUtterance

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `RecognizeUtterance(RecognizeUtteranceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`, `LocaleId`, `SessionId`
- **Returns**: `RecognizeUtteranceResponse`
- **Error**: `ApiException<RecognizeUtteranceError>` — **Case A (typed)**
- **Error accessors**: `TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetRuntimeV2LexResourceNotFoundException([NotNullWhen(true)] out RuntimeV2LexResourceNotFoundException? value)` [404] · `TryGetRuntimeV2LexConflictException([NotNullWhen(true)] out RuntimeV2LexConflictException? value)` [409] · `TryGetDependencyFailedException([NotNullWhen(true)] out DependencyFailedException? value)` [424] · `TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value)` [429] · `TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value)` [500] · `TryGetBadGatewayException([NotNullWhen(true)] out BadGatewayException? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecognizeUtteranceOperationRequest` | `src/AmazonLex/Requests/Bots/RecognizeUtteranceOperationRequest.cs` |
| `RecognizeUtteranceRequest` | `src/AmazonLex/Models/RecognizeUtteranceRequest.cs` |
| `RecognizeUtteranceResponse` | `src/AmazonLex/Models/RecognizeUtteranceResponse.cs` |
| `RecognizeUtteranceError` | `src/AmazonLex/Errors/RecognizeUtteranceError.cs` |
| `RuntimeV2LexValidationException` | `src/AmazonLex/Models/RuntimeV2LexValidationException.cs` |
| `AccessDeniedException` | `src/AmazonLex/Models/AccessDeniedException.cs` |
| `RuntimeV2LexResourceNotFoundException` | `src/AmazonLex/Models/RuntimeV2LexResourceNotFoundException.cs` |
| `RuntimeV2LexConflictException` | `src/AmazonLex/Models/RuntimeV2LexConflictException.cs` |
| `DependencyFailedException` | `src/AmazonLex/Models/DependencyFailedException.cs` |
| `RuntimeV2LexThrottlingException` | `src/AmazonLex/Models/RuntimeV2LexThrottlingException.cs` |
| `RuntimeV2LexInternalServerException` | `src/AmazonLex/Models/RuntimeV2LexInternalServerException.cs` |
| `BadGatewayException` | `src/AmazonLex/Models/BadGatewayException.cs` |

### SearchAssociatedTranscripts

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `SearchAssociatedTranscripts(SearchAssociatedTranscriptsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `BotRecommendationId`
- **Returns**: `SearchAssociatedTranscriptsResponse`
- **Error**: `ApiException<SearchAssociatedTranscriptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchAssociatedTranscriptsOperationRequest` | `src/AmazonLex/Requests/Bots/SearchAssociatedTranscriptsOperationRequest.cs` |
| `SearchAssociatedTranscriptsRequest` | `src/AmazonLex/Models/SearchAssociatedTranscriptsRequest.cs` |
| `SearchAssociatedTranscriptsResponse` | `src/AmazonLex/Models/SearchAssociatedTranscriptsResponse.cs` |
| `SearchAssociatedTranscriptsError` | `src/AmazonLex/Errors/SearchAssociatedTranscriptsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartBotAnalyzer

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartBotAnalyzer(StartBotAnalyzerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `StartBotAnalyzerResponse`
- **Error**: `ApiException<StartBotAnalyzerError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartBotAnalyzerOperationRequest` | `src/AmazonLex/Requests/Bots/StartBotAnalyzerOperationRequest.cs` |
| `StartBotAnalyzerRequest` | `src/AmazonLex/Models/StartBotAnalyzerRequest.cs` |
| `StartBotAnalyzerResponse` | `src/AmazonLex/Models/StartBotAnalyzerResponse.cs` |
| `StartBotAnalyzerError` | `src/AmazonLex/Errors/StartBotAnalyzerError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartBotRecommendation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartBotRecommendation(StartBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `StartBotRecommendationResponse`
- **Error**: `ApiException<StartBotRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartBotRecommendationOperationRequest` | `src/AmazonLex/Requests/Bots/StartBotRecommendationOperationRequest.cs` |
| `StartBotRecommendationRequest` | `src/AmazonLex/Models/StartBotRecommendationRequest.cs` |
| `StartBotRecommendationResponse` | `src/AmazonLex/Models/StartBotRecommendationResponse.cs` |
| `StartBotRecommendationError` | `src/AmazonLex/Errors/StartBotRecommendationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartBotResourceGeneration

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartBotResourceGeneration(StartBotResourceGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `StartBotResourceGenerationResponse`
- **Error**: `ApiException<StartBotResourceGenerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartBotResourceGenerationOperationRequest` | `src/AmazonLex/Requests/Bots/StartBotResourceGenerationOperationRequest.cs` |
| `StartBotResourceGenerationRequest` | `src/AmazonLex/Models/StartBotResourceGenerationRequest.cs` |
| `StartBotResourceGenerationResponse` | `src/AmazonLex/Models/StartBotResourceGenerationResponse.cs` |
| `StartBotResourceGenerationError` | `src/AmazonLex/Errors/StartBotResourceGenerationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartConversation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartConversation(StartConversationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`, `LocaleId`, `SessionId`
- **Returns**: `StartConversationResponse`
- **Error**: `ApiException<StartConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value)` [429] · `TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartConversationOperationRequest` | `src/AmazonLex/Requests/Bots/StartConversationOperationRequest.cs` |
| `StartConversationRequest` | `src/AmazonLex/Models/StartConversationRequest.cs` |
| `StartConversationResponse` | `src/AmazonLex/Models/StartConversationResponse.cs` |
| `StartConversationError` | `src/AmazonLex/Errors/StartConversationError.cs` |
| `RuntimeV2LexValidationException` | `src/AmazonLex/Models/RuntimeV2LexValidationException.cs` |
| `AccessDeniedException` | `src/AmazonLex/Models/AccessDeniedException.cs` |
| `RuntimeV2LexThrottlingException` | `src/AmazonLex/Models/RuntimeV2LexThrottlingException.cs` |
| `RuntimeV2LexInternalServerException` | `src/AmazonLex/Models/RuntimeV2LexInternalServerException.cs` |

### StopBotAnalyzer

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StopBotAnalyzer(StopBotAnalyzerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAnalyzerRequestId`
- **Returns**: `StopBotAnalyzerResponse`
- **Error**: `ApiException<StopBotAnalyzerError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopBotAnalyzerOperationRequest` | `src/AmazonLex/Requests/Bots/StopBotAnalyzerOperationRequest.cs` |
| `StopBotAnalyzerRequest` | `src/AmazonLex/Models/StopBotAnalyzerRequest.cs` |
| `StopBotAnalyzerResponse` | `src/AmazonLex/Models/StopBotAnalyzerResponse.cs` |
| `StopBotAnalyzerError` | `src/AmazonLex/Errors/StopBotAnalyzerError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StopBotRecommendation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StopBotRecommendation(StopBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `BotRecommendationId`
- **Returns**: `StopBotRecommendationResponse`
- **Error**: `ApiException<StopBotRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopBotRecommendationOperationRequest` | `src/AmazonLex/Requests/Bots/StopBotRecommendationOperationRequest.cs` |
| `StopBotRecommendationRequest` | `src/AmazonLex/Models/StopBotRecommendationRequest.cs` |
| `StopBotRecommendationResponse` | `src/AmazonLex/Models/StopBotRecommendationResponse.cs` |
| `StopBotRecommendationError` | `src/AmazonLex/Errors/StopBotRecommendationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateBot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateBot(UpdateBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`
- **Returns**: `UpdateBotResponse`
- **Error**: `ApiException<UpdateBotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBotOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateBotOperationRequest.cs` |
| `UpdateBotRequest` | `src/AmazonLex/Models/UpdateBotRequest.cs` |
| `UpdateBotResponse` | `src/AmazonLex/Models/UpdateBotResponse.cs` |
| `UpdateBotError` | `src/AmazonLex/Errors/UpdateBotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateBotAlias

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateBotAlias(UpdateBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotAliasId`
- **Returns**: `UpdateBotAliasResponse`
- **Error**: `ApiException<UpdateBotAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBotAliasOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateBotAliasOperationRequest.cs` |
| `UpdateBotAliasRequest` | `src/AmazonLex/Models/UpdateBotAliasRequest.cs` |
| `UpdateBotAliasResponse` | `src/AmazonLex/Models/UpdateBotAliasResponse.cs` |
| `UpdateBotAliasError` | `src/AmazonLex/Errors/UpdateBotAliasError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateBotLocale

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateBotLocale(UpdateBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`
- **Returns**: `UpdateBotLocaleResponse`
- **Error**: `ApiException<UpdateBotLocaleError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBotLocaleOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateBotLocaleOperationRequest.cs` |
| `UpdateBotLocaleRequest` | `src/AmazonLex/Models/UpdateBotLocaleRequest.cs` |
| `UpdateBotLocaleResponse` | `src/AmazonLex/Models/UpdateBotLocaleResponse.cs` |
| `UpdateBotLocaleError` | `src/AmazonLex/Errors/UpdateBotLocaleError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateBotRecommendation

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateBotRecommendation(UpdateBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `BotRecommendationId`
- **Returns**: `UpdateBotRecommendationResponse`
- **Error**: `ApiException<UpdateBotRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBotRecommendationOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateBotRecommendationOperationRequest.cs` |
| `UpdateBotRecommendationRequest` | `src/AmazonLex/Models/UpdateBotRecommendationRequest.cs` |
| `UpdateBotRecommendationResponse` | `src/AmazonLex/Models/UpdateBotRecommendationResponse.cs` |
| `UpdateBotRecommendationError` | `src/AmazonLex/Errors/UpdateBotRecommendationError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateIntent

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateIntent(UpdateIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`
- **Returns**: `UpdateIntentResponse`
- **Error**: `ApiException<UpdateIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateIntentOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateIntentOperationRequest.cs` |
| `UpdateIntentRequest` | `src/AmazonLex/Models/UpdateIntentRequest.cs` |
| `UpdateIntentResponse` | `src/AmazonLex/Models/UpdateIntentResponse.cs` |
| `UpdateIntentError` | `src/AmazonLex/Errors/UpdateIntentError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateSlot

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSlot(UpdateSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `IntentId`, `SlotId`
- **Returns**: `UpdateSlotResponse`
- **Error**: `ApiException<UpdateSlotError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSlotOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateSlotOperationRequest.cs` |
| `UpdateSlotRequest` | `src/AmazonLex/Models/UpdateSlotRequest.cs` |
| `UpdateSlotResponse` | `src/AmazonLex/Models/UpdateSlotResponse.cs` |
| `UpdateSlotError` | `src/AmazonLex/Errors/UpdateSlotError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateSlotType

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSlotType(UpdateSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotId`, `BotVersion`, `LocaleId`, `SlotTypeId`
- **Returns**: `UpdateSlotTypeResponse`
- **Error**: `ApiException<UpdateSlotTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSlotTypeOperationRequest` | `src/AmazonLex/Requests/Bots/UpdateSlotTypeOperationRequest.cs` |
| `UpdateSlotTypeRequest` | `src/AmazonLex/Models/UpdateSlotTypeRequest.cs` |
| `UpdateSlotTypeResponse` | `src/AmazonLex/Models/UpdateSlotTypeResponse.cs` |
| `UpdateSlotTypeError` | `src/AmazonLex/Errors/UpdateSlotTypeError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

