<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonLex/Api/Operations.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSlotTypeVersion

- **Server group**: `DefaultAmazonLexModelBuildingV2OperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSlotTypeVersion(DeleteSlotTypeVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Version`
- **Returns**: `string`
- **Error**: `ApiException<DeleteSlotTypeVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSlotTypeVersionOperationRequest` | `src/AmazonLex/Requests/Operations/DeleteSlotTypeVersionOperationRequest.cs` |
| `DeleteSlotTypeVersionRequest` | `src/AmazonLex/Models/DeleteSlotTypeVersionRequest.cs` |
| `DeleteSlotTypeVersionError` | `src/AmazonLex/Errors/DeleteSlotTypeVersionError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetIntents

- **Server group**: `DefaultAmazonLexModelBuildingV2OperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetIntents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetIntentsResponse`
- **Error**: `ApiException<GetIntentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntentsResponse` | `src/AmazonLex/Models/GetIntentsResponse.cs` |
| `GetIntentsError` | `src/AmazonLex/Errors/GetIntentsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetSlotTypes

- **Server group**: `DefaultAmazonLexModelBuildingV2OperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetSlotTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetSlotTypesResponse`
- **Error**: `ApiException<GetSlotTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSlotTypesResponse` | `src/AmazonLex/Models/GetSlotTypesResponse.cs` |
| `GetSlotTypesError` | `src/AmazonLex/Errors/GetSlotTypesError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetUtterancesView

- **Server group**: `DefaultAmazonLexModelBuildingV2OperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetUtterancesView(GetUtterancesViewOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`
- **Returns**: `GetUtterancesViewResponse`
- **Error**: `ApiException<GetUtterancesViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUtterancesViewOperationRequest` | `src/AmazonLex/Requests/Operations/GetUtterancesViewOperationRequest.cs` |
| `GetUtterancesViewResponse` | `src/AmazonLex/Models/GetUtterancesViewResponse.cs` |
| `GetUtterancesViewError` | `src/AmazonLex/Errors/GetUtterancesViewError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### PostContent

- **Server group**: `DefaultAmazonLexModelBuildingV2OperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `PostContent(PostContentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `UserId`
- **Returns**: `PostContentResponse`
- **Error**: `ApiException<PostContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetNotAcceptableException([NotNullWhen(true)] out NotAcceptableException? value)` [406] · `TryGetRequestTimeoutException([NotNullWhen(true)] out RequestTimeoutException? value)` [408] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetUnsupportedMediaTypeException([NotNullWhen(true)] out UnsupportedMediaTypeException? value)` [415] · `TryGetRuntimeLexDependencyFailedException([NotNullWhen(true)] out RuntimeLexDependencyFailedException? value)` [424] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRuntimeLexBadGatewayException([NotNullWhen(true)] out RuntimeLexBadGatewayException? value)` [502] · `TryGetLoopDetectedException([NotNullWhen(true)] out LoopDetectedException? value)` [508] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostContentOperationRequest` | `src/AmazonLex/Requests/Operations/PostContentOperationRequest.cs` |
| `PostContentRequest` | `src/AmazonLex/Models/PostContentRequest.cs` |
| `PostContentResponse` | `src/AmazonLex/Models/PostContentResponse.cs` |
| `PostContentError` | `src/AmazonLex/Errors/PostContentError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `NotAcceptableException` | `src/AmazonLex/Models/NotAcceptableException.cs` |
| `RequestTimeoutException` | `src/AmazonLex/Models/RequestTimeoutException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `UnsupportedMediaTypeException` | `src/AmazonLex/Models/UnsupportedMediaTypeException.cs` |
| `RuntimeLexDependencyFailedException` | `src/AmazonLex/Models/RuntimeLexDependencyFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |
| `RuntimeLexBadGatewayException` | `src/AmazonLex/Models/RuntimeLexBadGatewayException.cs` |
| `LoopDetectedException` | `src/AmazonLex/Models/LoopDetectedException.cs` |

### PostText

- **Server group**: `DefaultAmazonLexModelBuildingV2OperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `PostText(PostTextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `UserId`
- **Returns**: `PostTextResponse`
- **Error**: `ApiException<PostTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetRuntimeLexDependencyFailedException([NotNullWhen(true)] out RuntimeLexDependencyFailedException? value)` [424] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRuntimeLexBadGatewayException([NotNullWhen(true)] out RuntimeLexBadGatewayException? value)` [502] · `TryGetLoopDetectedException([NotNullWhen(true)] out LoopDetectedException? value)` [508] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostTextOperationRequest` | `src/AmazonLex/Requests/Operations/PostTextOperationRequest.cs` |
| `PostTextRequest` | `src/AmazonLex/Models/PostTextRequest.cs` |
| `PostTextResponse` | `src/AmazonLex/Models/PostTextResponse.cs` |
| `PostTextError` | `src/AmazonLex/Errors/PostTextError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `RuntimeLexDependencyFailedException` | `src/AmazonLex/Models/RuntimeLexDependencyFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |
| `RuntimeLexBadGatewayException` | `src/AmazonLex/Models/RuntimeLexBadGatewayException.cs` |
| `LoopDetectedException` | `src/AmazonLex/Models/LoopDetectedException.cs` |

