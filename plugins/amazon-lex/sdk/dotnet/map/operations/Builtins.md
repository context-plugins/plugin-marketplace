<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builtins — operations

Accessor: `client.Builtins` · Source: `src/AmazonLex/Api/Builtins.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBuiltinIntent

- **Server group**: `DefaultAmazonLexModelBuildingV2BuiltinsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetBuiltinIntent(GetBuiltinIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Signature`
- **Returns**: `GetBuiltinIntentResponse`
- **Error**: `ApiException<GetBuiltinIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBuiltinIntentOperationRequest` | `src/AmazonLex/Requests/Builtins/GetBuiltinIntentOperationRequest.cs` |
| `GetBuiltinIntentResponse` | `src/AmazonLex/Models/GetBuiltinIntentResponse.cs` |
| `GetBuiltinIntentError` | `src/AmazonLex/Errors/GetBuiltinIntentError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBuiltinIntents

- **Server group**: `DefaultAmazonLexModelBuildingV2BuiltinsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetBuiltinIntents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetBuiltinIntentsResponse`
- **Error**: `ApiException<GetBuiltinIntentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBuiltinIntentsResponse` | `src/AmazonLex/Models/GetBuiltinIntentsResponse.cs` |
| `GetBuiltinIntentsError` | `src/AmazonLex/Errors/GetBuiltinIntentsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBuiltinSlotTypes

- **Server group**: `DefaultAmazonLexModelBuildingV2BuiltinsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetBuiltinSlotTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetBuiltinSlotTypesResponse`
- **Error**: `ApiException<GetBuiltinSlotTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBuiltinSlotTypesResponse` | `src/AmazonLex/Models/GetBuiltinSlotTypesResponse.cs` |
| `GetBuiltinSlotTypesError` | `src/AmazonLex/Errors/GetBuiltinSlotTypesError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### ListBuiltInIntents

- **Server group**: `DefaultAmazonLexModelBuildingV2BuiltinsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBuiltInIntents(ListBuiltInIntentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LocaleId`
- **Returns**: `ListBuiltInIntentsResponse`
- **Error**: `ApiException<ListBuiltInIntentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuiltInIntentsOperationRequest` | `src/AmazonLex/Requests/Builtins/ListBuiltInIntentsOperationRequest.cs` |
| `ListBuiltInIntentsRequest` | `src/AmazonLex/Models/ListBuiltInIntentsRequest.cs` |
| `ListBuiltInIntentsResponse` | `src/AmazonLex/Models/ListBuiltInIntentsResponse.cs` |
| `ListBuiltInIntentsError` | `src/AmazonLex/Errors/ListBuiltInIntentsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListBuiltInSlotTypes

- **Server group**: `DefaultAmazonLexModelBuildingV2BuiltinsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListBuiltInSlotTypes(ListBuiltInSlotTypesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LocaleId`
- **Returns**: `ListBuiltInSlotTypesResponse`
- **Error**: `ApiException<ListBuiltInSlotTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuiltInSlotTypesOperationRequest` | `src/AmazonLex/Requests/Builtins/ListBuiltInSlotTypesOperationRequest.cs` |
| `ListBuiltInSlotTypesRequest` | `src/AmazonLex/Models/ListBuiltInSlotTypesRequest.cs` |
| `ListBuiltInSlotTypesResponse` | `src/AmazonLex/Models/ListBuiltInSlotTypesResponse.cs` |
| `ListBuiltInSlotTypesError` | `src/AmazonLex/Errors/ListBuiltInSlotTypesError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

