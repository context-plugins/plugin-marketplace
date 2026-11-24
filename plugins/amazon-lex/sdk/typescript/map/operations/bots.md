<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bots — operations

Accessor: `client.bots` · Source: `src/resources/bots.ts` · 89 operations · Request and error types: namespace `Bots`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchCreateCustomVocabularyItem

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `batchCreateCustomVocabularyItem(request: Bots.BatchCreateCustomVocabularyItemRequestParams, options?: RequestOptions): ApiPromise<BatchCreateCustomVocabularyItemResponse, Bots.BatchCreateCustomVocabularyItemError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchCreateCustomVocabularyItemResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.BatchCreateCustomVocabularyItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.BatchCreateCustomVocabularyItemRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `BatchCreateCustomVocabularyItemRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchCreateCustomVocabularyItemRequest` | `batchCreateCustomVocabularyItemRequestSchema` | `src/models/batch-create-custom-vocabulary-item-request.ts` |
| `BatchCreateCustomVocabularyItemResponse` | `batchCreateCustomVocabularyItemResponseSchema` | `src/models/batch-create-custom-vocabulary-item-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### batchDeleteCustomVocabularyItem

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `batchDeleteCustomVocabularyItem(request: Bots.BatchDeleteCustomVocabularyItemRequestParams, options?: RequestOptions): ApiPromise<BatchDeleteCustomVocabularyItemResponse, Bots.BatchDeleteCustomVocabularyItemError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchDeleteCustomVocabularyItemResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.BatchDeleteCustomVocabularyItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.BatchDeleteCustomVocabularyItemRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `BatchDeleteCustomVocabularyItemRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchDeleteCustomVocabularyItemRequest` | `batchDeleteCustomVocabularyItemRequestSchema` | `src/models/batch-delete-custom-vocabulary-item-request.ts` |
| `BatchDeleteCustomVocabularyItemResponse` | `batchDeleteCustomVocabularyItemResponseSchema` | `src/models/batch-delete-custom-vocabulary-item-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### batchUpdateCustomVocabularyItem

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `batchUpdateCustomVocabularyItem(request: Bots.BatchUpdateCustomVocabularyItemRequestParams, options?: RequestOptions): ApiPromise<BatchUpdateCustomVocabularyItemResponse, Bots.BatchUpdateCustomVocabularyItemError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchUpdateCustomVocabularyItemResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.BatchUpdateCustomVocabularyItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.BatchUpdateCustomVocabularyItemRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `BatchUpdateCustomVocabularyItemRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchUpdateCustomVocabularyItemRequest` | `batchUpdateCustomVocabularyItemRequestSchema` | `src/models/batch-update-custom-vocabulary-item-request.ts` |
| `BatchUpdateCustomVocabularyItemResponse` | `batchUpdateCustomVocabularyItemResponseSchema` | `src/models/batch-update-custom-vocabulary-item-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### buildBotLocale

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `buildBotLocale(request: Bots.BuildBotLocaleRequestParams, options?: RequestOptions): ApiPromise<BuildBotLocaleResponse, Bots.BuildBotLocaleError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildBotLocaleResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.BuildBotLocaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.BuildBotLocaleRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `BuildBotLocaleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildBotLocaleRequest` | `buildBotLocaleRequestSchema` | `src/models/build-bot-locale-request.ts` |
| `BuildBotLocaleResponse` | `buildBotLocaleResponseSchema` | `src/models/build-bot-locale-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createBot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBot(request?: Bots.CreateBotRequestParams, options?: RequestOptions): ApiPromise<CreateBotResponse, Bots.CreateBotError>`
- **Wire**: `PUT /bots`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateBotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateBotRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBotRequest` | `createBotRequestSchema` | `src/models/create-bot-request.ts` |
| `CreateBotResponse` | `createBotResponseSchema` | `src/models/create-bot-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createBotAlias

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBotAlias(request: Bots.CreateBotAliasRequestParams, options?: RequestOptions): ApiPromise<CreateBotAliasResponse, Bots.CreateBotAliasError>`
- **Wire**: `PUT /bots/{botId}/botaliases`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBotAliasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateBotAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateBotAliasRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `CreateBotAliasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBotAliasRequest` | `createBotAliasRequestSchema` | `src/models/create-bot-alias-request.ts` |
| `CreateBotAliasResponse` | `createBotAliasResponseSchema` | `src/models/create-bot-alias-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createBotLocale

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBotLocale(request: Bots.CreateBotLocaleRequestParams, options?: RequestOptions): ApiPromise<CreateBotLocaleResponse, Bots.CreateBotLocaleError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBotLocaleResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateBotLocaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateBotLocaleRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `body` | `body` | `CreateBotLocaleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBotLocaleRequest` | `createBotLocaleRequestSchema` | `src/models/create-bot-locale-request.ts` |
| `CreateBotLocaleResponse` | `createBotLocaleResponseSchema` | `src/models/create-bot-locale-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createBotReplica

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBotReplica(request: Bots.CreateBotReplicaRequestParams, options?: RequestOptions): ApiPromise<CreateBotReplicaResponse, Bots.CreateBotReplicaError>`
- **Wire**: `PUT /bots/{botId}/replicas`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBotReplicaResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateBotReplicaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateBotReplicaRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `CreateBotReplicaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBotReplicaRequest` | `createBotReplicaRequestSchema` | `src/models/create-bot-replica-request.ts` |
| `CreateBotReplicaResponse` | `createBotReplicaResponseSchema` | `src/models/create-bot-replica-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createBotVersion

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBotVersion(request: Bots.CreateBotVersionRequestParams, options?: RequestOptions): ApiPromise<CreateBotVersionResponse, Bots.CreateBotVersionError>`
- **Wire**: `PUT /bots/{botId}/botversions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBotVersionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateBotVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateBotVersionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `CreateBotVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBotVersionRequest` | `createBotVersionRequestSchema` | `src/models/create-bot-version-request.ts` |
| `CreateBotVersionResponse` | `createBotVersionResponseSchema` | `src/models/create-bot-version-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createBotVersion1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBotVersion1(request: Bots.CreateBotVersion1Request, options?: RequestOptions): ApiPromise<ModelsLexCreateBotVersionResponse, Bots.CreateBotVersion1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bots/{name}/versions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModelsLexCreateBotVersionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateBotVersion1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateBotVersion1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexCreateBotVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexCreateBotVersionRequest` | `modelsLexCreateBotVersionRequestSchema` | `src/models/models-lex-create-bot-version-request.ts` |
| `ModelsLexCreateBotVersionResponse` | `modelsLexCreateBotVersionResponseSchema` | `src/models/models-lex-create-bot-version-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |

### createIntent

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createIntent(request: Bots.CreateIntentRequestParams, options?: RequestOptions): ApiPromise<CreateIntentResponse, Bots.CreateIntentError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateIntentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateIntentRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `CreateIntentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateIntentRequest` | `createIntentRequestSchema` | `src/models/create-intent-request.ts` |
| `CreateIntentResponse` | `createIntentResponseSchema` | `src/models/create-intent-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createSlot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSlot(request: Bots.CreateSlotRequestParams, options?: RequestOptions): ApiPromise<CreateSlotResponse, Bots.CreateSlotError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSlotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateSlotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateSlotRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `body` | `body` | `CreateSlotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSlotRequest` | `createSlotRequestSchema` | `src/models/create-slot-request.ts` |
| `CreateSlotResponse` | `createSlotResponseSchema` | `src/models/create-slot-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createSlotType

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSlotType(request: Bots.CreateSlotTypeRequestParams, options?: RequestOptions): ApiPromise<CreateSlotTypeResponse, Bots.CreateSlotTypeError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSlotTypeResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.CreateSlotTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.CreateSlotTypeRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `CreateSlotTypeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSlotTypeRequest` | `createSlotTypeRequestSchema` | `src/models/create-slot-type-request.ts` |
| `CreateSlotTypeResponse` | `createSlotTypeResponseSchema` | `src/models/create-slot-type-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBot(request: Bots.DeleteBotRequestParams, options?: RequestOptions): ApiPromise<DeleteBotResponse, Bots.DeleteBotError>`
- **Wire**: `DELETE /bots/{botId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotRequest` | `deleteBotRequestSchema` | `src/models/delete-bot-request.ts` |
| `DeleteBotResponse` | `deleteBotResponseSchema` | `src/models/delete-bot-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBot1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBot1(request: Bots.DeleteBot1Request, options?: RequestOptions): ApiPromise<string, Bots.DeleteBot1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBot1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBot1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteBotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteBotRequest` | `modelsLexDeleteBotRequestSchema` | `src/models/models-lex-delete-bot-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteBotAlias1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotAlias1(request: Bots.DeleteBotAlias1Request, options?: RequestOptions): ApiPromise<string, Bots.DeleteBotAlias1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{botName}/aliases/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotAlias1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotAlias1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteBotAliasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteBotAliasRequest` | `modelsLexDeleteBotAliasRequestSchema` | `src/models/models-lex-delete-bot-alias-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteBotAlias2

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotAlias2(request: Bots.DeleteBotAlias2Request, options?: RequestOptions): ApiPromise<DeleteBotAliasResponse, Bots.DeleteBotAlias2Error>`
- **Wire**: `DELETE /bots/{botId}/botaliases/{botAliasId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBotAliasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotAlias2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotAlias2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotAliasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotAliasRequest` | `deleteBotAliasRequestSchema` | `src/models/delete-bot-alias-request.ts` |
| `DeleteBotAliasResponse` | `deleteBotAliasResponseSchema` | `src/models/delete-bot-alias-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBotAnalyzerRecommendation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotAnalyzerRecommendation(request: Bots.DeleteBotAnalyzerRecommendationRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, Bots.DeleteBotAnalyzerRecommendationError>`
- **Wire**: `DELETE /bots/{botId}/botanalyzer/{botAnalyzerRequestId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotAnalyzerRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotAnalyzerRecommendationRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAnalyzerRequestId` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotAnalyzerRecommendationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotAnalyzerRecommendationRequest` | `deleteBotAnalyzerRecommendationRequestSchema` | `src/models/delete-bot-analyzer-recommendation-request.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBotLocale

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotLocale(request: Bots.DeleteBotLocaleRequestParams, options?: RequestOptions): ApiPromise<DeleteBotLocaleResponse, Bots.DeleteBotLocaleError>`
- **Wire**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBotLocaleResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotLocaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotLocaleRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotLocaleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotLocaleRequest` | `deleteBotLocaleRequestSchema` | `src/models/delete-bot-locale-request.ts` |
| `DeleteBotLocaleResponse` | `deleteBotLocaleResponseSchema` | `src/models/delete-bot-locale-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBotReplica

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotReplica(request: Bots.DeleteBotReplicaRequestParams, options?: RequestOptions): ApiPromise<DeleteBotReplicaResponse, Bots.DeleteBotReplicaError>`
- **Wire**: `DELETE /bots/{botId}/replicas/{replicaRegion}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBotReplicaResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotReplicaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotReplicaRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `replicaRegion` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotReplicaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotReplicaRequest` | `deleteBotReplicaRequestSchema` | `src/models/delete-bot-replica-request.ts` |
| `DeleteBotReplicaResponse` | `deleteBotReplicaResponseSchema` | `src/models/delete-bot-replica-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBotVersion

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotVersion(request: Bots.DeleteBotVersionRequestParams, options?: RequestOptions): ApiPromise<DeleteBotVersionResponse, Bots.DeleteBotVersionError>`
- **Wire**: `DELETE /bots/{botId}/botversions/{botVersion}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBotVersionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotVersionRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotVersionRequest` | `deleteBotVersionRequestSchema` | `src/models/delete-bot-version-request.ts` |
| `DeleteBotVersionResponse` | `deleteBotVersionResponseSchema` | `src/models/delete-bot-version-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteBotVersion1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBotVersion1(request: Bots.DeleteBotVersion1Request, options?: RequestOptions): ApiPromise<string, Bots.DeleteBotVersion1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{name}/versions/{version}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteBotVersion1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteBotVersion1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteBotVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteBotVersionRequest` | `modelsLexDeleteBotVersionRequestSchema` | `src/models/models-lex-delete-bot-version-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteCustomVocabulary

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCustomVocabulary(request: Bots.DeleteCustomVocabularyRequestParams, options?: RequestOptions): ApiPromise<DeleteCustomVocabularyResponse, Bots.DeleteCustomVocabularyError>`
- **Wire**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteCustomVocabularyResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteCustomVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteCustomVocabularyRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `DeleteCustomVocabularyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomVocabularyRequest` | `deleteCustomVocabularyRequestSchema` | `src/models/delete-custom-vocabulary-request.ts` |
| `DeleteCustomVocabularyResponse` | `deleteCustomVocabularyResponseSchema` | `src/models/delete-custom-vocabulary-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteIntent

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteIntent(request: Bots.DeleteIntentRequestParams, options?: RequestOptions): ApiPromise<string, Bots.DeleteIntentError>`
- **Wire**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteIntentRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `body` | `body` | `DeleteIntentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteIntentRequest` | `deleteIntentRequestSchema` | `src/models/delete-intent-request.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteIntent1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteIntent1(request: Bots.DeleteIntent1Request, options?: RequestOptions): ApiPromise<string, Bots.DeleteIntent1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /intents/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteIntent1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteIntent1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteIntentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteIntentRequest` | `modelsLexDeleteIntentRequestSchema` | `src/models/models-lex-delete-intent-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteSession

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSession(request: Bots.DeleteSessionRequestParams, options?: RequestOptions): ApiPromise<DeleteSessionResponse, Bots.DeleteSessionError>`
- **Wire**: `DELETE /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteSessionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"runtimeV2LexConflictException"` [409] `RuntimeV2LexConflictException` · `"runtimeV2LexInternalServerException"` [500] `RuntimeV2LexInternalServerException` · `"runtimeV2LexResourceNotFoundException"` [404] `RuntimeV2LexResourceNotFoundException` · `"runtimeV2LexThrottlingException"` [429] `RuntimeV2LexThrottlingException` · `"runtimeV2LexValidationException"` [400] `RuntimeV2LexValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteSessionRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `sessionId` | `path` | `string` | yes |
| `body` | `body` | `DeleteSessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSessionRequest` | `deleteSessionRequestSchema` | `src/models/delete-session-request.ts` |
| `DeleteSessionResponse` | `deleteSessionResponseSchema` | `src/models/delete-session-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `RuntimeV2LexConflictException` | `runtimeV2LexConflictExceptionSchema` | `src/models/runtime-v2-lex-conflict-exception.ts` |
| `RuntimeV2LexInternalServerException` | `runtimeV2LexInternalServerExceptionSchema` | `src/models/runtime-v2-lex-internal-server-exception.ts` |
| `RuntimeV2LexResourceNotFoundException` | `runtimeV2LexResourceNotFoundExceptionSchema` | `src/models/runtime-v2-lex-resource-not-found-exception.ts` |
| `RuntimeV2LexThrottlingException` | `runtimeV2LexThrottlingExceptionSchema` | `src/models/runtime-v2-lex-throttling-exception.ts` |
| `RuntimeV2LexValidationException` | `runtimeV2LexValidationExceptionSchema` | `src/models/runtime-v2-lex-validation-exception.ts` |

### deleteSession1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSession1(request: Bots.DeleteSession1Request, options?: RequestOptions): ApiPromise<RuntimeLexDeleteSessionResponse, Bots.DeleteSession1Error>`
- **Wire**: `DELETE /bot/{botName}/alias/{botAlias}/user/{userId}/session`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RuntimeLexDeleteSessionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteSession1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteSession1Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `RuntimeLexDeleteSessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RuntimeLexDeleteSessionRequest` | `runtimeLexDeleteSessionRequestSchema` | `src/models/runtime-lex-delete-session-request.ts` |
| `RuntimeLexDeleteSessionResponse` | `runtimeLexDeleteSessionResponseSchema` | `src/models/runtime-lex-delete-session-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteSlot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSlot(request: Bots.DeleteSlotRequestParams, options?: RequestOptions): ApiPromise<string, Bots.DeleteSlotError>`
- **Wire**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteSlotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteSlotRequestParams` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `slotId` | `path` | `string` | yes |
| `body` | `body` | `DeleteSlotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSlotRequest` | `deleteSlotRequestSchema` | `src/models/delete-slot-request.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteSlotType

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSlotType(request: Bots.DeleteSlotTypeRequestParams, options?: RequestOptions): ApiPromise<string, Bots.DeleteSlotTypeError>`
- **Wire**: `DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteSlotTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteSlotTypeRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `slotTypeId` | `path` | `string` | yes |
| `body` | `body` | `DeleteSlotTypeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSlotTypeRequest` | `deleteSlotTypeRequestSchema` | `src/models/delete-slot-type-request.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteSlotType1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSlotType1(request: Bots.DeleteSlotType1Request, options?: RequestOptions): ApiPromise<string, Bots.DeleteSlotType1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /slottypes/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteSlotType1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteSlotType1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteSlotTypeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteSlotTypeRequest` | `modelsLexDeleteSlotTypeRequestSchema` | `src/models/models-lex-delete-slot-type-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### deleteUtterances

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteUtterances(request: Bots.DeleteUtterancesRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, Bots.DeleteUtterancesError>`
- **Wire**: `DELETE /bots/{botId}/utterances`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteUtterancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteUtterancesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `DeleteUtterancesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteUtterancesRequest` | `deleteUtterancesRequestSchema` | `src/models/delete-utterances-request.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteUtterances1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteUtterances1(request: Bots.DeleteUtterances1Request, options?: RequestOptions): ApiPromise<string, Bots.DeleteUtterances1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{botName}/utterances/{userId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DeleteUtterances1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DeleteUtterances1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexDeleteUtterancesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexDeleteUtterancesRequest` | `modelsLexDeleteUtterancesRequestSchema` | `src/models/models-lex-delete-utterances-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### describeBot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBot(request: Bots.DescribeBotRequestParams, options?: RequestOptions): ApiPromise<DescribeBotResponse, Bots.DescribeBotError>`
- **Wire**: `GET /bots/{botId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotResponse` | `describeBotResponseSchema` | `src/models/describe-bot-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotAlias

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotAlias(request: Bots.DescribeBotAliasRequestParams, options?: RequestOptions): ApiPromise<DescribeBotAliasResponse, Bots.DescribeBotAliasError>`
- **Wire**: `GET /bots/{botId}/botaliases/{botAliasId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotAliasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotAliasRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotAliasResponse` | `describeBotAliasResponseSchema` | `src/models/describe-bot-alias-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotAnalyzerRecommendation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotAnalyzerRecommendation(request: Bots.DescribeBotAnalyzerRecommendationRequestParams, options?: RequestOptions): ApiPromise<DescribeBotAnalyzerRecommendationResponse, Bots.DescribeBotAnalyzerRecommendationError>`
- **Wire**: `POST /bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeBotAnalyzerRecommendationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotAnalyzerRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotAnalyzerRecommendationRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAnalyzerRequestId` | `path` | `string` | yes |
| `body` | `body` | `DescribeBotAnalyzerRecommendationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotAnalyzerRecommendationRequest` | `describeBotAnalyzerRecommendationRequestSchema` | `src/models/describe-bot-analyzer-recommendation-request.ts` |
| `DescribeBotAnalyzerRecommendationResponse` | `describeBotAnalyzerRecommendationResponseSchema` | `src/models/describe-bot-analyzer-recommendation-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotLocale

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotLocale(request: Bots.DescribeBotLocaleRequestParams, options?: RequestOptions): ApiPromise<DescribeBotLocaleResponse, Bots.DescribeBotLocaleError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotLocaleResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotLocaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotLocaleRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotLocaleResponse` | `describeBotLocaleResponseSchema` | `src/models/describe-bot-locale-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotRecommendation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotRecommendation(request: Bots.DescribeBotRecommendationRequestParams, options?: RequestOptions): ApiPromise<DescribeBotRecommendationResponse, Bots.DescribeBotRecommendationError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotRecommendationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotRecommendationRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `botRecommendationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotRecommendationResponse` | `describeBotRecommendationResponseSchema` | `src/models/describe-bot-recommendation-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotReplica

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotReplica(request: Bots.DescribeBotReplicaRequestParams, options?: RequestOptions): ApiPromise<DescribeBotReplicaResponse, Bots.DescribeBotReplicaError>`
- **Wire**: `GET /bots/{botId}/replicas/{replicaRegion}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotReplicaResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotReplicaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotReplicaRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `replicaRegion` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotReplicaResponse` | `describeBotReplicaResponseSchema` | `src/models/describe-bot-replica-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotResourceGeneration

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotResourceGeneration(request: Bots.DescribeBotResourceGenerationRequestParams, options?: RequestOptions): ApiPromise<DescribeBotResourceGenerationResponse, Bots.DescribeBotResourceGenerationError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotResourceGenerationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotResourceGenerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotResourceGenerationRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `generationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotResourceGenerationResponse` | `describeBotResourceGenerationResponseSchema` | `src/models/describe-bot-resource-generation-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeBotVersion

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeBotVersion(request: Bots.DescribeBotVersionRequestParams, options?: RequestOptions): ApiPromise<DescribeBotVersionResponse, Bots.DescribeBotVersionError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeBotVersionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeBotVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeBotVersionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeBotVersionResponse` | `describeBotVersionResponseSchema` | `src/models/describe-bot-version-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeCustomVocabularyMetadata

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeCustomVocabularyMetadata(request: Bots.DescribeCustomVocabularyMetadataRequestParams, options?: RequestOptions): ApiPromise<DescribeCustomVocabularyMetadataResponse, Bots.DescribeCustomVocabularyMetadataError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeCustomVocabularyMetadataResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeCustomVocabularyMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeCustomVocabularyMetadataRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeCustomVocabularyMetadataResponse` | `describeCustomVocabularyMetadataResponseSchema` | `src/models/describe-custom-vocabulary-metadata-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeIntent

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeIntent(request: Bots.DescribeIntentRequestParams, options?: RequestOptions): ApiPromise<DescribeIntentResponse, Bots.DescribeIntentError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeIntentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeIntentRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeIntentResponse` | `describeIntentResponseSchema` | `src/models/describe-intent-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeSlot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeSlot(request: Bots.DescribeSlotRequestParams, options?: RequestOptions): ApiPromise<DescribeSlotResponse, Bots.DescribeSlotError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeSlotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeSlotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeSlotRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `slotId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeSlotResponse` | `describeSlotResponseSchema` | `src/models/describe-slot-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeSlotType

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeSlotType(request: Bots.DescribeSlotTypeRequestParams, options?: RequestOptions): ApiPromise<DescribeSlotTypeResponse, Bots.DescribeSlotTypeError>`
- **Wire**: `GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeSlotTypeResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.DescribeSlotTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.DescribeSlotTypeRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `slotTypeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeSlotTypeResponse` | `describeSlotTypeResponseSchema` | `src/models/describe-slot-type-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### generateBotElement

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generateBotElement(request: Bots.GenerateBotElementRequestParams, options?: RequestOptions): ApiPromise<GenerateBotElementResponse, Bots.GenerateBotElementError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateBotElementResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.GenerateBotElementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.GenerateBotElementRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `GenerateBotElementRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateBotElementRequest` | `generateBotElementRequestSchema` | `src/models/generate-bot-element-request.ts` |
| `GenerateBotElementResponse` | `generateBotElementResponseSchema` | `src/models/generate-bot-element-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### getBots

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBots(options?: RequestOptions): ApiPromise<GetBotsResponse, Bots.GetBotsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.GetBotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotsResponse` | `getBotsResponseSchema` | `src/models/get-bots-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getSession

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSession(request: Bots.GetSessionRequestParams, options?: RequestOptions): ApiPromise<GetSessionResponse, Bots.GetSessionError>`
- **Wire**: `GET /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSessionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.GetSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"runtimeV2LexInternalServerException"` [500] `RuntimeV2LexInternalServerException` · `"runtimeV2LexResourceNotFoundException"` [404] `RuntimeV2LexResourceNotFoundException` · `"runtimeV2LexThrottlingException"` [429] `RuntimeV2LexThrottlingException` · `"runtimeV2LexValidationException"` [400] `RuntimeV2LexValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.GetSessionRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `sessionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSessionResponse` | `getSessionResponseSchema` | `src/models/get-session-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `RuntimeV2LexInternalServerException` | `runtimeV2LexInternalServerExceptionSchema` | `src/models/runtime-v2-lex-internal-server-exception.ts` |
| `RuntimeV2LexResourceNotFoundException` | `runtimeV2LexResourceNotFoundExceptionSchema` | `src/models/runtime-v2-lex-resource-not-found-exception.ts` |
| `RuntimeV2LexThrottlingException` | `runtimeV2LexThrottlingExceptionSchema` | `src/models/runtime-v2-lex-throttling-exception.ts` |
| `RuntimeV2LexValidationException` | `runtimeV2LexValidationExceptionSchema` | `src/models/runtime-v2-lex-validation-exception.ts` |

### getSession1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSession1(request: Bots.GetSession1Request, options?: RequestOptions): ApiPromise<RuntimeLexGetSessionResponse, Bots.GetSession1Error>`
- **Wire**: `GET /bot/{botName}/alias/{botAlias}/user/{userId}/session`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RuntimeLexGetSessionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.GetSession1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.GetSession1Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RuntimeLexGetSessionResponse` | `runtimeLexGetSessionResponseSchema` | `src/models/runtime-lex-get-session-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### listAggregatedUtterances

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAggregatedUtterances(request: Bots.ListAggregatedUtterancesRequestParams, options?: RequestOptions): ApiPromise<ListAggregatedUtterancesResponse, Bots.ListAggregatedUtterancesError>`
- **Wire**: `POST /bots/{botId}/aggregatedutterances`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListAggregatedUtterancesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListAggregatedUtterancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListAggregatedUtterancesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListAggregatedUtterancesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAggregatedUtterancesRequest` | `listAggregatedUtterancesRequestSchema` | `src/models/list-aggregated-utterances-request.ts` |
| `ListAggregatedUtterancesResponse` | `listAggregatedUtterancesResponseSchema` | `src/models/list-aggregated-utterances-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotAliasReplicas

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotAliasReplicas(request: Bots.ListBotAliasReplicasRequestParams, options?: RequestOptions): ApiPromise<ListBotAliasReplicasResponse, Bots.ListBotAliasReplicasError>`
- **Wire**: `POST /bots/{botId}/replicas/{replicaRegion}/botaliases`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotAliasReplicasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotAliasReplicasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotAliasReplicasRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `replicaRegion` | `path` | `string` | yes |
| `body` | `body` | `ListBotAliasReplicasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotAliasReplicasRequest` | `listBotAliasReplicasRequestSchema` | `src/models/list-bot-alias-replicas-request.ts` |
| `ListBotAliasReplicasResponse` | `listBotAliasReplicasResponseSchema` | `src/models/list-bot-alias-replicas-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotAliases

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotAliases(request: Bots.ListBotAliasesRequestParams, options?: RequestOptions): ApiPromise<ListBotAliasesResponse, Bots.ListBotAliasesError>`
- **Wire**: `POST /bots/{botId}/botaliases`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotAliasesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotAliasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotAliasesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListBotAliasesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotAliasesRequest` | `listBotAliasesRequestSchema` | `src/models/list-bot-aliases-request.ts` |
| `ListBotAliasesResponse` | `listBotAliasesResponseSchema` | `src/models/list-bot-aliases-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotAnalyzerHistory

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotAnalyzerHistory(request: Bots.ListBotAnalyzerHistoryRequestParams, options?: RequestOptions): ApiPromise<ListBotAnalyzerHistoryResponse, Bots.ListBotAnalyzerHistoryError>`
- **Wire**: `POST /bots/{botId}/botanalyzer/history`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotAnalyzerHistoryResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotAnalyzerHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotAnalyzerHistoryRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListBotAnalyzerHistoryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotAnalyzerHistoryRequest` | `listBotAnalyzerHistoryRequestSchema` | `src/models/list-bot-analyzer-history-request.ts` |
| `ListBotAnalyzerHistoryResponse` | `listBotAnalyzerHistoryResponseSchema` | `src/models/list-bot-analyzer-history-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotLocales

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotLocales(request: Bots.ListBotLocalesRequestParams, options?: RequestOptions): ApiPromise<ListBotLocalesResponse, Bots.ListBotLocalesError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotLocalesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotLocalesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotLocalesRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `body` | `body` | `ListBotLocalesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotLocalesRequest` | `listBotLocalesRequestSchema` | `src/models/list-bot-locales-request.ts` |
| `ListBotLocalesResponse` | `listBotLocalesResponseSchema` | `src/models/list-bot-locales-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotRecommendations

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotRecommendations(request: Bots.ListBotRecommendationsRequestParams, options?: RequestOptions): ApiPromise<ListBotRecommendationsResponse, Bots.ListBotRecommendationsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotRecommendationsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotRecommendationsRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListBotRecommendationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotRecommendationsRequest` | `listBotRecommendationsRequestSchema` | `src/models/list-bot-recommendations-request.ts` |
| `ListBotRecommendationsResponse` | `listBotRecommendationsResponseSchema` | `src/models/list-bot-recommendations-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotReplicas

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotReplicas(request: Bots.ListBotReplicasRequestParams, options?: RequestOptions): ApiPromise<ListBotReplicasResponse, Bots.ListBotReplicasError>`
- **Wire**: `POST /bots/{botId}/replicas`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotReplicasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotReplicasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotReplicasRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListBotReplicasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotReplicasRequest` | `listBotReplicasRequestSchema` | `src/models/list-bot-replicas-request.ts` |
| `ListBotReplicasResponse` | `listBotReplicasResponseSchema` | `src/models/list-bot-replicas-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotResourceGenerations

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotResourceGenerations(request: Bots.ListBotResourceGenerationsRequestParams, options?: RequestOptions): ApiPromise<ListBotResourceGenerationsResponse, Bots.ListBotResourceGenerationsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotResourceGenerationsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotResourceGenerationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotResourceGenerationsRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListBotResourceGenerationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotResourceGenerationsRequest` | `listBotResourceGenerationsRequestSchema` | `src/models/list-bot-resource-generations-request.ts` |
| `ListBotResourceGenerationsResponse` | `listBotResourceGenerationsResponseSchema` | `src/models/list-bot-resource-generations-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotVersionReplicas

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotVersionReplicas(request: Bots.ListBotVersionReplicasRequestParams, options?: RequestOptions): ApiPromise<ListBotVersionReplicasResponse, Bots.ListBotVersionReplicasError>`
- **Wire**: `POST /bots/{botId}/replicas/{replicaRegion}/botversions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotVersionReplicasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotVersionReplicasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotVersionReplicasRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `replicaRegion` | `path` | `string` | yes |
| `body` | `body` | `ListBotVersionReplicasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotVersionReplicasRequest` | `listBotVersionReplicasRequestSchema` | `src/models/list-bot-version-replicas-request.ts` |
| `ListBotVersionReplicasResponse` | `listBotVersionReplicasResponseSchema` | `src/models/list-bot-version-replicas-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBotVersions

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBotVersions(request: Bots.ListBotVersionsRequestParams, options?: RequestOptions): ApiPromise<ListBotVersionsResponse, Bots.ListBotVersionsError>`
- **Wire**: `POST /bots/{botId}/botversions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotVersionsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotVersionsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListBotVersionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotVersionsRequest` | `listBotVersionsRequestSchema` | `src/models/list-bot-versions-request.ts` |
| `ListBotVersionsResponse` | `listBotVersionsResponseSchema` | `src/models/list-bot-versions-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listBots

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBots(request?: Bots.ListBotsRequestParams, options?: RequestOptions): ApiPromise<ListBotsResponse, Bots.ListBotsError>`
- **Wire**: `POST /bots`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListBotsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListBotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListBotsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListBotsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBotsRequest` | `listBotsRequestSchema` | `src/models/list-bots-request.ts` |
| `ListBotsResponse` | `listBotsResponseSchema` | `src/models/list-bots-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listCustomVocabularyItems

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomVocabularyItems(request: Bots.ListCustomVocabularyItemsRequestParams, options?: RequestOptions): ApiPromise<ListCustomVocabularyItemsResponse, Bots.ListCustomVocabularyItemsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListCustomVocabularyItemsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListCustomVocabularyItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListCustomVocabularyItemsRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListCustomVocabularyItemsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomVocabularyItemsRequest` | `listCustomVocabularyItemsRequestSchema` | `src/models/list-custom-vocabulary-items-request.ts` |
| `ListCustomVocabularyItemsResponse` | `listCustomVocabularyItemsResponseSchema` | `src/models/list-custom-vocabulary-items-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listIntentMetrics

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listIntentMetrics(request: Bots.ListIntentMetricsRequestParams, options?: RequestOptions): ApiPromise<ListIntentMetricsResponse, Bots.ListIntentMetricsError>`
- **Wire**: `POST /bots/{botId}/analytics/intentmetrics`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListIntentMetricsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListIntentMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListIntentMetricsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListIntentMetricsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIntentMetricsRequest` | `listIntentMetricsRequestSchema` | `src/models/list-intent-metrics-request.ts` |
| `ListIntentMetricsResponse` | `listIntentMetricsResponseSchema` | `src/models/list-intent-metrics-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listIntentPaths

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listIntentPaths(request: Bots.ListIntentPathsRequestParams, options?: RequestOptions): ApiPromise<ListIntentPathsResponse, Bots.ListIntentPathsError>`
- **Wire**: `POST /bots/{botId}/analytics/intentpaths`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListIntentPathsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListIntentPathsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListIntentPathsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListIntentPathsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIntentPathsRequest` | `listIntentPathsRequestSchema` | `src/models/list-intent-paths-request.ts` |
| `ListIntentPathsResponse` | `listIntentPathsResponseSchema` | `src/models/list-intent-paths-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listIntentStageMetrics

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listIntentStageMetrics(request: Bots.ListIntentStageMetricsRequestParams, options?: RequestOptions): ApiPromise<ListIntentStageMetricsResponse, Bots.ListIntentStageMetricsError>`
- **Wire**: `POST /bots/{botId}/analytics/intentstagemetrics`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListIntentStageMetricsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListIntentStageMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListIntentStageMetricsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListIntentStageMetricsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIntentStageMetricsRequest` | `listIntentStageMetricsRequestSchema` | `src/models/list-intent-stage-metrics-request.ts` |
| `ListIntentStageMetricsResponse` | `listIntentStageMetricsResponseSchema` | `src/models/list-intent-stage-metrics-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listIntents

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listIntents(request: Bots.ListIntentsRequestParams, options?: RequestOptions): ApiPromise<ListIntentsResponse, Bots.ListIntentsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListIntentsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListIntentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListIntentsRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListIntentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIntentsRequest` | `listIntentsRequestSchema` | `src/models/list-intents-request.ts` |
| `ListIntentsResponse` | `listIntentsResponseSchema` | `src/models/list-intents-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listRecommendedIntents

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRecommendedIntents(request: Bots.ListRecommendedIntentsRequestParams, options?: RequestOptions): ApiPromise<ListRecommendedIntentsResponse, Bots.ListRecommendedIntentsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListRecommendedIntentsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListRecommendedIntentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListRecommendedIntentsRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `botRecommendationId` | `path` | `string` | yes |
| `body` | `body` | `ListRecommendedIntentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRecommendedIntentsRequest` | `listRecommendedIntentsRequestSchema` | `src/models/list-recommended-intents-request.ts` |
| `ListRecommendedIntentsResponse` | `listRecommendedIntentsResponseSchema` | `src/models/list-recommended-intents-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listSessionAnalyticsData

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSessionAnalyticsData(request: Bots.ListSessionAnalyticsDataRequestParams, options?: RequestOptions): ApiPromise<ListSessionAnalyticsDataResponse, Bots.ListSessionAnalyticsDataError>`
- **Wire**: `POST /bots/{botId}/analytics/sessions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListSessionAnalyticsDataResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListSessionAnalyticsDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListSessionAnalyticsDataRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListSessionAnalyticsDataRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSessionAnalyticsDataRequest` | `listSessionAnalyticsDataRequestSchema` | `src/models/list-session-analytics-data-request.ts` |
| `ListSessionAnalyticsDataResponse` | `listSessionAnalyticsDataResponseSchema` | `src/models/list-session-analytics-data-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listSessionMetrics

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSessionMetrics(request: Bots.ListSessionMetricsRequestParams, options?: RequestOptions): ApiPromise<ListSessionMetricsResponse, Bots.ListSessionMetricsError>`
- **Wire**: `POST /bots/{botId}/analytics/sessionmetrics`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListSessionMetricsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListSessionMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListSessionMetricsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListSessionMetricsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSessionMetricsRequest` | `listSessionMetricsRequestSchema` | `src/models/list-session-metrics-request.ts` |
| `ListSessionMetricsResponse` | `listSessionMetricsResponseSchema` | `src/models/list-session-metrics-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listSlotTypes

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSlotTypes(request: Bots.ListSlotTypesRequestParams, options?: RequestOptions): ApiPromise<ListSlotTypesResponse, Bots.ListSlotTypesError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListSlotTypesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListSlotTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListSlotTypesRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `ListSlotTypesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSlotTypesRequest` | `listSlotTypesRequestSchema` | `src/models/list-slot-types-request.ts` |
| `ListSlotTypesResponse` | `listSlotTypesResponseSchema` | `src/models/list-slot-types-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listSlots

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSlots(request: Bots.ListSlotsRequestParams, options?: RequestOptions): ApiPromise<ListSlotsResponse, Bots.ListSlotsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListSlotsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListSlotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListSlotsRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `body` | `body` | `ListSlotsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSlotsRequest` | `listSlotsRequestSchema` | `src/models/list-slots-request.ts` |
| `ListSlotsResponse` | `listSlotsResponseSchema` | `src/models/list-slots-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listUtteranceAnalyticsData

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUtteranceAnalyticsData(request: Bots.ListUtteranceAnalyticsDataRequestParams, options?: RequestOptions): ApiPromise<ListUtteranceAnalyticsDataResponse, Bots.ListUtteranceAnalyticsDataError>`
- **Wire**: `POST /bots/{botId}/analytics/utterances`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListUtteranceAnalyticsDataResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListUtteranceAnalyticsDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListUtteranceAnalyticsDataRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListUtteranceAnalyticsDataRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUtteranceAnalyticsDataRequest` | `listUtteranceAnalyticsDataRequestSchema` | `src/models/list-utterance-analytics-data-request.ts` |
| `ListUtteranceAnalyticsDataResponse` | `listUtteranceAnalyticsDataResponseSchema` | `src/models/list-utterance-analytics-data-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listUtteranceMetrics

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUtteranceMetrics(request: Bots.ListUtteranceMetricsRequestParams, options?: RequestOptions): ApiPromise<ListUtteranceMetricsResponse, Bots.ListUtteranceMetricsError>`
- **Wire**: `POST /bots/{botId}/analytics/utterancemetrics`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListUtteranceMetricsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.ListUtteranceMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.ListUtteranceMetricsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `ListUtteranceMetricsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUtteranceMetricsRequest` | `listUtteranceMetricsRequestSchema` | `src/models/list-utterance-metrics-request.ts` |
| `ListUtteranceMetricsResponse` | `listUtteranceMetricsResponseSchema` | `src/models/list-utterance-metrics-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### putSession

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putSession(request: Bots.PutSessionRequestParams, options?: RequestOptions): ApiPromise<PutSessionResponse, Bots.PutSessionError>`
- **Wire**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutSessionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.PutSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badGatewayException"` [502] `BadGatewayException` · `"runtimeV2LexConflictException"` [409] `RuntimeV2LexConflictException` · `"dependencyFailedException"` [424] `DependencyFailedException` · `"runtimeV2LexInternalServerException"` [500] `RuntimeV2LexInternalServerException` · `"runtimeV2LexResourceNotFoundException"` [404] `RuntimeV2LexResourceNotFoundException` · `"runtimeV2LexThrottlingException"` [429] `RuntimeV2LexThrottlingException` · `"runtimeV2LexValidationException"` [400] `RuntimeV2LexValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.PutSessionRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `sessionId` | `path` | `string` | yes |
| `body` | `body` | `PutSessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutSessionRequest` | `putSessionRequestSchema` | `src/models/put-session-request.ts` |
| `PutSessionResponse` | `putSessionResponseSchema` | `src/models/put-session-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadGatewayException` | `badGatewayExceptionSchema` | `src/models/bad-gateway-exception.ts` |
| `RuntimeV2LexConflictException` | `runtimeV2LexConflictExceptionSchema` | `src/models/runtime-v2-lex-conflict-exception.ts` |
| `DependencyFailedException` | `dependencyFailedExceptionSchema` | `src/models/dependency-failed-exception.ts` |
| `RuntimeV2LexInternalServerException` | `runtimeV2LexInternalServerExceptionSchema` | `src/models/runtime-v2-lex-internal-server-exception.ts` |
| `RuntimeV2LexResourceNotFoundException` | `runtimeV2LexResourceNotFoundExceptionSchema` | `src/models/runtime-v2-lex-resource-not-found-exception.ts` |
| `RuntimeV2LexThrottlingException` | `runtimeV2LexThrottlingExceptionSchema` | `src/models/runtime-v2-lex-throttling-exception.ts` |
| `RuntimeV2LexValidationException` | `runtimeV2LexValidationExceptionSchema` | `src/models/runtime-v2-lex-validation-exception.ts` |

### putSession1

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putSession1(request: Bots.PutSession1Request, options?: RequestOptions): ApiPromise<RuntimeLexPutSessionResponse, Bots.PutSession1Error>`
- **Wire**: `POST /bot/{botName}/alias/{botAlias}/user/{userId}/session`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RuntimeLexPutSessionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.PutSession1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"runtimeLexBadGatewayException"` [502] `RuntimeLexBadGatewayException` · `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"runtimeLexDependencyFailedException"` [424] `RuntimeLexDependencyFailedException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notAcceptableException"` [406] `NotAcceptableException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.PutSession1Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `RuntimeLexPutSessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RuntimeLexPutSessionRequest` | `runtimeLexPutSessionRequestSchema` | `src/models/runtime-lex-put-session-request.ts` |
| `RuntimeLexPutSessionResponse` | `runtimeLexPutSessionResponseSchema` | `src/models/runtime-lex-put-session-response.ts` |
| `RuntimeLexBadGatewayException` | `runtimeLexBadGatewayExceptionSchema` | `src/models/runtime-lex-bad-gateway-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `RuntimeLexDependencyFailedException` | `runtimeLexDependencyFailedExceptionSchema` | `src/models/runtime-lex-dependency-failed-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotAcceptableException` | `notAcceptableExceptionSchema` | `src/models/not-acceptable-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### recognizeText

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `recognizeText(request: Bots.RecognizeTextRequestParams, options?: RequestOptions): ApiPromise<RecognizeTextResponse, Bots.RecognizeTextError>`
- **Wire**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecognizeTextResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.RecognizeTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badGatewayException"` [502] `BadGatewayException` · `"runtimeV2LexConflictException"` [409] `RuntimeV2LexConflictException` · `"dependencyFailedException"` [424] `DependencyFailedException` · `"runtimeV2LexInternalServerException"` [500] `RuntimeV2LexInternalServerException` · `"runtimeV2LexResourceNotFoundException"` [404] `RuntimeV2LexResourceNotFoundException` · `"runtimeV2LexThrottlingException"` [429] `RuntimeV2LexThrottlingException` · `"runtimeV2LexValidationException"` [400] `RuntimeV2LexValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.RecognizeTextRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `sessionId` | `path` | `string` | yes |
| `body` | `body` | `RecognizeTextRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecognizeTextRequest` | `recognizeTextRequestSchema` | `src/models/recognize-text-request.ts` |
| `RecognizeTextResponse` | `recognizeTextResponseSchema` | `src/models/recognize-text-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadGatewayException` | `badGatewayExceptionSchema` | `src/models/bad-gateway-exception.ts` |
| `RuntimeV2LexConflictException` | `runtimeV2LexConflictExceptionSchema` | `src/models/runtime-v2-lex-conflict-exception.ts` |
| `DependencyFailedException` | `dependencyFailedExceptionSchema` | `src/models/dependency-failed-exception.ts` |
| `RuntimeV2LexInternalServerException` | `runtimeV2LexInternalServerExceptionSchema` | `src/models/runtime-v2-lex-internal-server-exception.ts` |
| `RuntimeV2LexResourceNotFoundException` | `runtimeV2LexResourceNotFoundExceptionSchema` | `src/models/runtime-v2-lex-resource-not-found-exception.ts` |
| `RuntimeV2LexThrottlingException` | `runtimeV2LexThrottlingExceptionSchema` | `src/models/runtime-v2-lex-throttling-exception.ts` |
| `RuntimeV2LexValidationException` | `runtimeV2LexValidationExceptionSchema` | `src/models/runtime-v2-lex-validation-exception.ts` |

### recognizeUtterance

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `recognizeUtterance(request: Bots.RecognizeUtteranceRequestParams, options?: RequestOptions): ApiPromise<RecognizeUtteranceResponse, Bots.RecognizeUtteranceError>`
- **Wire**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecognizeUtteranceResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.RecognizeUtteranceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badGatewayException"` [502] `BadGatewayException` · `"runtimeV2LexConflictException"` [409] `RuntimeV2LexConflictException` · `"dependencyFailedException"` [424] `DependencyFailedException` · `"runtimeV2LexInternalServerException"` [500] `RuntimeV2LexInternalServerException` · `"runtimeV2LexResourceNotFoundException"` [404] `RuntimeV2LexResourceNotFoundException` · `"runtimeV2LexThrottlingException"` [429] `RuntimeV2LexThrottlingException` · `"runtimeV2LexValidationException"` [400] `RuntimeV2LexValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.RecognizeUtteranceRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `sessionId` | `path` | `string` | yes |
| `body` | `body` | `RecognizeUtteranceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecognizeUtteranceRequest` | `recognizeUtteranceRequestSchema` | `src/models/recognize-utterance-request.ts` |
| `RecognizeUtteranceResponse` | `recognizeUtteranceResponseSchema` | `src/models/recognize-utterance-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadGatewayException` | `badGatewayExceptionSchema` | `src/models/bad-gateway-exception.ts` |
| `RuntimeV2LexConflictException` | `runtimeV2LexConflictExceptionSchema` | `src/models/runtime-v2-lex-conflict-exception.ts` |
| `DependencyFailedException` | `dependencyFailedExceptionSchema` | `src/models/dependency-failed-exception.ts` |
| `RuntimeV2LexInternalServerException` | `runtimeV2LexInternalServerExceptionSchema` | `src/models/runtime-v2-lex-internal-server-exception.ts` |
| `RuntimeV2LexResourceNotFoundException` | `runtimeV2LexResourceNotFoundExceptionSchema` | `src/models/runtime-v2-lex-resource-not-found-exception.ts` |
| `RuntimeV2LexThrottlingException` | `runtimeV2LexThrottlingExceptionSchema` | `src/models/runtime-v2-lex-throttling-exception.ts` |
| `RuntimeV2LexValidationException` | `runtimeV2LexValidationExceptionSchema` | `src/models/runtime-v2-lex-validation-exception.ts` |

### searchAssociatedTranscripts

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `searchAssociatedTranscripts(request: Bots.SearchAssociatedTranscriptsRequestParams, options?: RequestOptions): ApiPromise<SearchAssociatedTranscriptsResponse, Bots.SearchAssociatedTranscriptsError>`
- **Wire**: `POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchAssociatedTranscriptsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.SearchAssociatedTranscriptsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.SearchAssociatedTranscriptsRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `botRecommendationId` | `path` | `string` | yes |
| `body` | `body` | `SearchAssociatedTranscriptsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchAssociatedTranscriptsRequest` | `searchAssociatedTranscriptsRequestSchema` | `src/models/search-associated-transcripts-request.ts` |
| `SearchAssociatedTranscriptsResponse` | `searchAssociatedTranscriptsResponseSchema` | `src/models/search-associated-transcripts-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startBotAnalyzer

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startBotAnalyzer(request: Bots.StartBotAnalyzerRequestParams, options?: RequestOptions): ApiPromise<StartBotAnalyzerResponse, Bots.StartBotAnalyzerError>`
- **Wire**: `POST /bots/{botId}/botanalyzer`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartBotAnalyzerResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.StartBotAnalyzerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.StartBotAnalyzerRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `StartBotAnalyzerRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartBotAnalyzerRequest` | `startBotAnalyzerRequestSchema` | `src/models/start-bot-analyzer-request.ts` |
| `StartBotAnalyzerResponse` | `startBotAnalyzerResponseSchema` | `src/models/start-bot-analyzer-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startBotRecommendation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startBotRecommendation(request: Bots.StartBotRecommendationRequestParams, options?: RequestOptions): ApiPromise<StartBotRecommendationResponse, Bots.StartBotRecommendationError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartBotRecommendationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.StartBotRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.StartBotRecommendationRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `StartBotRecommendationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartBotRecommendationRequest` | `startBotRecommendationRequestSchema` | `src/models/start-bot-recommendation-request.ts` |
| `StartBotRecommendationResponse` | `startBotRecommendationResponseSchema` | `src/models/start-bot-recommendation-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startBotResourceGeneration

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startBotResourceGeneration(request: Bots.StartBotResourceGenerationRequestParams, options?: RequestOptions): ApiPromise<StartBotResourceGenerationResponse, Bots.StartBotResourceGenerationError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartBotResourceGenerationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.StartBotResourceGenerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.StartBotResourceGenerationRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `StartBotResourceGenerationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartBotResourceGenerationRequest` | `startBotResourceGenerationRequestSchema` | `src/models/start-bot-resource-generation-request.ts` |
| `StartBotResourceGenerationResponse` | `startBotResourceGenerationResponseSchema` | `src/models/start-bot-resource-generation-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startConversation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startConversation(request: Bots.StartConversationRequestParams, options?: RequestOptions): ApiPromise<StartConversationResponse, Bots.StartConversationError>`
- **Wire**: `POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartConversationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.StartConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"runtimeV2LexInternalServerException"` [500] `RuntimeV2LexInternalServerException` · `"runtimeV2LexThrottlingException"` [429] `RuntimeV2LexThrottlingException` · `"runtimeV2LexValidationException"` [400] `RuntimeV2LexValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.StartConversationRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `sessionId` | `path` | `string` | yes |
| `body` | `body` | `StartConversationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartConversationRequest` | `startConversationRequestSchema` | `src/models/start-conversation-request.ts` |
| `StartConversationResponse` | `startConversationResponseSchema` | `src/models/start-conversation-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `RuntimeV2LexInternalServerException` | `runtimeV2LexInternalServerExceptionSchema` | `src/models/runtime-v2-lex-internal-server-exception.ts` |
| `RuntimeV2LexThrottlingException` | `runtimeV2LexThrottlingExceptionSchema` | `src/models/runtime-v2-lex-throttling-exception.ts` |
| `RuntimeV2LexValidationException` | `runtimeV2LexValidationExceptionSchema` | `src/models/runtime-v2-lex-validation-exception.ts` |

### stopBotAnalyzer

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `stopBotAnalyzer(request: Bots.StopBotAnalyzerRequestParams, options?: RequestOptions): ApiPromise<StopBotAnalyzerResponse, Bots.StopBotAnalyzerError>`
- **Wire**: `PUT /bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StopBotAnalyzerResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.StopBotAnalyzerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.StopBotAnalyzerRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAnalyzerRequestId` | `path` | `string` | yes |
| `body` | `body` | `StopBotAnalyzerRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopBotAnalyzerRequest` | `stopBotAnalyzerRequestSchema` | `src/models/stop-bot-analyzer-request.ts` |
| `StopBotAnalyzerResponse` | `stopBotAnalyzerResponseSchema` | `src/models/stop-bot-analyzer-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### stopBotRecommendation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `stopBotRecommendation(request: Bots.StopBotRecommendationRequestParams, options?: RequestOptions): ApiPromise<StopBotRecommendationResponse, Bots.StopBotRecommendationError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StopBotRecommendationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.StopBotRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.StopBotRecommendationRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `botRecommendationId` | `path` | `string` | yes |
| `body` | `body` | `StopBotRecommendationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopBotRecommendationRequest` | `stopBotRecommendationRequestSchema` | `src/models/stop-bot-recommendation-request.ts` |
| `StopBotRecommendationResponse` | `stopBotRecommendationResponseSchema` | `src/models/stop-bot-recommendation-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateBot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBot(request: Bots.UpdateBotRequestParams, options?: RequestOptions): ApiPromise<UpdateBotResponse, Bots.UpdateBotError>`
- **Wire**: `PUT /bots/{botId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateBotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateBotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateBotRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `body` | `body` | `UpdateBotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBotRequest` | `updateBotRequestSchema` | `src/models/update-bot-request.ts` |
| `UpdateBotResponse` | `updateBotResponseSchema` | `src/models/update-bot-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateBotAlias

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBotAlias(request: Bots.UpdateBotAliasRequestParams, options?: RequestOptions): ApiPromise<UpdateBotAliasResponse, Bots.UpdateBotAliasError>`
- **Wire**: `PUT /bots/{botId}/botaliases/{botAliasId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateBotAliasResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateBotAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateBotAliasRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botAliasId` | `path` | `string` | yes |
| `body` | `body` | `UpdateBotAliasRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBotAliasRequest` | `updateBotAliasRequestSchema` | `src/models/update-bot-alias-request.ts` |
| `UpdateBotAliasResponse` | `updateBotAliasResponseSchema` | `src/models/update-bot-alias-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateBotLocale

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBotLocale(request: Bots.UpdateBotLocaleRequestParams, options?: RequestOptions): ApiPromise<UpdateBotLocaleResponse, Bots.UpdateBotLocaleError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateBotLocaleResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateBotLocaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateBotLocaleRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `body` | `body` | `UpdateBotLocaleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBotLocaleRequest` | `updateBotLocaleRequestSchema` | `src/models/update-bot-locale-request.ts` |
| `UpdateBotLocaleResponse` | `updateBotLocaleResponseSchema` | `src/models/update-bot-locale-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateBotRecommendation

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBotRecommendation(request: Bots.UpdateBotRecommendationRequestParams, options?: RequestOptions): ApiPromise<UpdateBotRecommendationResponse, Bots.UpdateBotRecommendationError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateBotRecommendationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateBotRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateBotRecommendationRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `botRecommendationId` | `path` | `string` | yes |
| `body` | `body` | `UpdateBotRecommendationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBotRecommendationRequest` | `updateBotRecommendationRequestSchema` | `src/models/update-bot-recommendation-request.ts` |
| `UpdateBotRecommendationResponse` | `updateBotRecommendationResponseSchema` | `src/models/update-bot-recommendation-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateIntent

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateIntent(request: Bots.UpdateIntentRequestParams, options?: RequestOptions): ApiPromise<UpdateIntentResponse, Bots.UpdateIntentError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateIntentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateIntentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateIntentRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `body` | `body` | `UpdateIntentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateIntentRequest` | `updateIntentRequestSchema` | `src/models/update-intent-request.ts` |
| `UpdateIntentResponse` | `updateIntentResponseSchema` | `src/models/update-intent-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateSlot

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSlot(request: Bots.UpdateSlotRequestParams, options?: RequestOptions): ApiPromise<UpdateSlotResponse, Bots.UpdateSlotError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateSlotResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateSlotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateSlotRequestParams` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `intentId` | `path` | `string` | yes |
| `slotId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSlotRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSlotRequest` | `updateSlotRequestSchema` | `src/models/update-slot-request.ts` |
| `UpdateSlotResponse` | `updateSlotResponseSchema` | `src/models/update-slot-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateSlotType

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSlotType(request: Bots.UpdateSlotTypeRequestParams, options?: RequestOptions): ApiPromise<UpdateSlotTypeResponse, Bots.UpdateSlotTypeError>`
- **Wire**: `PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateSlotTypeResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Bots.UpdateSlotTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bots.UpdateSlotTypeRequestParams` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botId` | `path` | `string` | yes |
| `botVersion` | `path` | `string` | yes |
| `localeId` | `path` | `string` | yes |
| `slotTypeId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSlotTypeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSlotTypeRequest` | `updateSlotTypeRequestSchema` | `src/models/update-slot-type-request.ts` |
| `UpdateSlotTypeResponse` | `updateSlotTypeResponseSchema` | `src/models/update-slot-type-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

