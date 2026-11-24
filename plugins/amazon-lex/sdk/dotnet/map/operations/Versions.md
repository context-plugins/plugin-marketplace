<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.Versions` · Source: `src/AmazonLex/Api/Versions.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBotVersion2

- **Auth**: `options.Sigv4`
- **Signature**: `CreateBotVersion2(CreateBotVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi`
- **Error**: `ApiException<CreateBotVersion2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBotVersion2Request` | `src/AmazonLex/Requests/Versions/CreateBotVersion2Request.cs` |
| `ModelsLexCreateBotVersionRequest` | `src/AmazonLex/Models/ModelsLexCreateBotVersionRequest.cs` |
| `ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi` | `src/AmazonLex/Models/ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi.cs` |
| `CreateBotVersion2Error` | `src/AmazonLex/Errors/CreateBotVersion2Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### CreateIntentVersion

- **Auth**: `options.Sigv4`
- **Signature**: `CreateIntentVersion(CreateIntentVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `CreateIntentVersionResponse`
- **Error**: `ApiException<CreateIntentVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateIntentVersionOperationRequest` | `src/AmazonLex/Requests/Versions/CreateIntentVersionOperationRequest.cs` |
| `CreateIntentVersionRequest` | `src/AmazonLex/Models/CreateIntentVersionRequest.cs` |
| `CreateIntentVersionResponse` | `src/AmazonLex/Models/CreateIntentVersionResponse.cs` |
| `CreateIntentVersionError` | `src/AmazonLex/Errors/CreateIntentVersionError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### CreateSlotTypeVersion

- **Auth**: `options.Sigv4`
- **Signature**: `CreateSlotTypeVersion(CreateSlotTypeVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `CreateSlotTypeVersionResponse`
- **Error**: `ApiException<CreateSlotTypeVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSlotTypeVersionOperationRequest` | `src/AmazonLex/Requests/Versions/CreateSlotTypeVersionOperationRequest.cs` |
| `CreateSlotTypeVersionRequest` | `src/AmazonLex/Models/CreateSlotTypeVersionRequest.cs` |
| `CreateSlotTypeVersionResponse` | `src/AmazonLex/Models/CreateSlotTypeVersionResponse.cs` |
| `CreateSlotTypeVersionError` | `src/AmazonLex/Errors/CreateSlotTypeVersionError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteBotVersion2

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotVersion2(DeleteBotVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `string`
- **Error**: `ApiException<DeleteBotVersion2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotVersion2Request` | `src/AmazonLex/Requests/Versions/DeleteBotVersion2Request.cs` |
| `ModelsLexDeleteBotVersionRequest` | `src/AmazonLex/Models/ModelsLexDeleteBotVersionRequest.cs` |
| `DeleteBotVersion2Error` | `src/AmazonLex/Errors/DeleteBotVersion2Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteIntentVersion

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteIntentVersion(DeleteIntentVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `string`
- **Error**: `ApiException<DeleteIntentVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteIntentVersionOperationRequest` | `src/AmazonLex/Requests/Versions/DeleteIntentVersionOperationRequest.cs` |
| `DeleteIntentVersionRequest` | `src/AmazonLex/Models/DeleteIntentVersionRequest.cs` |
| `DeleteIntentVersionError` | `src/AmazonLex/Errors/DeleteIntentVersionError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### DeleteSlotTypeVersion2

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSlotTypeVersion2(DeleteSlotTypeVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `string`
- **Error**: `ApiException<DeleteSlotTypeVersion2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSlotTypeVersion2Request` | `src/AmazonLex/Requests/Versions/DeleteSlotTypeVersion2Request.cs` |
| `DeleteSlotTypeVersionRequest` | `src/AmazonLex/Models/DeleteSlotTypeVersionRequest.cs` |
| `DeleteSlotTypeVersion2Error` | `src/AmazonLex/Errors/DeleteSlotTypeVersion2Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBot

- **Auth**: `options.Sigv4`
- **Signature**: `GetBot(GetBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `VersionOrAlias`
- **Returns**: `GetBotResponse`
- **Error**: `ApiException<GetBotError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotOperationRequest` | `src/AmazonLex/Requests/Versions/GetBotOperationRequest.cs` |
| `GetBotResponse` | `src/AmazonLex/Models/GetBotResponse.cs` |
| `GetBotError` | `src/AmazonLex/Errors/GetBotError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBotVersions

- **Auth**: `options.Sigv4`
- **Signature**: `GetBotVersions(GetBotVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `GetBotVersionsResponse`
- **Error**: `ApiException<GetBotVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotVersionsOperationRequest` | `src/AmazonLex/Requests/Versions/GetBotVersionsOperationRequest.cs` |
| `GetBotVersionsResponse` | `src/AmazonLex/Models/GetBotVersionsResponse.cs` |
| `GetBotVersionsError` | `src/AmazonLex/Errors/GetBotVersionsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetIntent

- **Auth**: `options.Sigv4`
- **Signature**: `GetIntent(GetIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `GetIntentResponse`
- **Error**: `ApiException<GetIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntentOperationRequest` | `src/AmazonLex/Requests/Versions/GetIntentOperationRequest.cs` |
| `GetIntentResponse` | `src/AmazonLex/Models/GetIntentResponse.cs` |
| `GetIntentError` | `src/AmazonLex/Errors/GetIntentError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetIntentVersions

- **Auth**: `options.Sigv4`
- **Signature**: `GetIntentVersions(GetIntentVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `GetIntentVersionsResponse`
- **Error**: `ApiException<GetIntentVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntentVersionsOperationRequest` | `src/AmazonLex/Requests/Versions/GetIntentVersionsOperationRequest.cs` |
| `GetIntentVersionsResponse` | `src/AmazonLex/Models/GetIntentVersionsResponse.cs` |
| `GetIntentVersionsError` | `src/AmazonLex/Errors/GetIntentVersionsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetSlotType

- **Auth**: `options.Sigv4`
- **Signature**: `GetSlotType(GetSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `GetSlotTypeResponse`
- **Error**: `ApiException<GetSlotTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSlotTypeOperationRequest` | `src/AmazonLex/Requests/Versions/GetSlotTypeOperationRequest.cs` |
| `GetSlotTypeResponse` | `src/AmazonLex/Models/GetSlotTypeResponse.cs` |
| `GetSlotTypeError` | `src/AmazonLex/Errors/GetSlotTypeError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetSlotTypeVersions

- **Auth**: `options.Sigv4`
- **Signature**: `GetSlotTypeVersions(GetSlotTypeVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `GetSlotTypeVersionsResponse`
- **Error**: `ApiException<GetSlotTypeVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSlotTypeVersionsOperationRequest` | `src/AmazonLex/Requests/Versions/GetSlotTypeVersionsOperationRequest.cs` |
| `GetSlotTypeVersionsResponse` | `src/AmazonLex/Models/GetSlotTypeVersionsResponse.cs` |
| `GetSlotTypeVersionsError` | `src/AmazonLex/Errors/GetSlotTypeVersionsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### PutBot

- **Auth**: `options.Sigv4`
- **Signature**: `PutBot(PutBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `PutBotResponse`
- **Error**: `ApiException<PutBotError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutBotOperationRequest` | `src/AmazonLex/Requests/Versions/PutBotOperationRequest.cs` |
| `PutBotRequest` | `src/AmazonLex/Models/PutBotRequest.cs` |
| `PutBotResponse` | `src/AmazonLex/Models/PutBotResponse.cs` |
| `PutBotError` | `src/AmazonLex/Errors/PutBotError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### PutIntent

- **Auth**: `options.Sigv4`
- **Signature**: `PutIntent(PutIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `PutIntentResponse`
- **Error**: `ApiException<PutIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutIntentOperationRequest` | `src/AmazonLex/Requests/Versions/PutIntentOperationRequest.cs` |
| `PutIntentRequest` | `src/AmazonLex/Models/PutIntentRequest.cs` |
| `PutIntentResponse` | `src/AmazonLex/Models/PutIntentResponse.cs` |
| `PutIntentError` | `src/AmazonLex/Errors/PutIntentError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### PutSlotType

- **Auth**: `options.Sigv4`
- **Signature**: `PutSlotType(PutSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `PutSlotTypeResponse`
- **Error**: `ApiException<PutSlotTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSlotTypeOperationRequest` | `src/AmazonLex/Requests/Versions/PutSlotTypeOperationRequest.cs` |
| `PutSlotTypeRequest` | `src/AmazonLex/Models/PutSlotTypeRequest.cs` |
| `PutSlotTypeResponse` | `src/AmazonLex/Models/PutSlotTypeResponse.cs` |
| `PutSlotTypeError` | `src/AmazonLex/Errors/PutSlotTypeError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

