<!-- Generated file — do not edit; regenerated with the SDK. -->

# Aliases — operations

Accessor: `client.Aliases` · Source: `src/AmazonLex/Api/Aliases.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBotAlias

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotAlias(DeleteBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `Name`
- **Returns**: `string`
- **Error**: `ApiException<DeleteBotAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotAliasOperationRequest` | `src/AmazonLex/Requests/Aliases/DeleteBotAliasOperationRequest.cs` |
| `ModelsLexDeleteBotAliasRequest` | `src/AmazonLex/Models/ModelsLexDeleteBotAliasRequest.cs` |
| `DeleteBotAliasError` | `src/AmazonLex/Errors/DeleteBotAliasError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBotAlias

- **Auth**: `options.Sigv4`
- **Signature**: `GetBotAlias(GetBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `Name`
- **Returns**: `GetBotAliasResponse`
- **Error**: `ApiException<GetBotAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotAliasOperationRequest` | `src/AmazonLex/Requests/Aliases/GetBotAliasOperationRequest.cs` |
| `GetBotAliasResponse` | `src/AmazonLex/Models/GetBotAliasResponse.cs` |
| `GetBotAliasError` | `src/AmazonLex/Errors/GetBotAliasError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBotAliases

- **Auth**: `options.Sigv4`
- **Signature**: `GetBotAliases(GetBotAliasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`
- **Returns**: `GetBotAliasesResponse`
- **Error**: `ApiException<GetBotAliasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotAliasesOperationRequest` | `src/AmazonLex/Requests/Aliases/GetBotAliasesOperationRequest.cs` |
| `GetBotAliasesResponse` | `src/AmazonLex/Models/GetBotAliasesResponse.cs` |
| `GetBotAliasesError` | `src/AmazonLex/Errors/GetBotAliasesError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### PutBotAlias

- **Auth**: `options.Sigv4`
- **Signature**: `PutBotAlias(PutBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `Name`
- **Returns**: `PutBotAliasResponse`
- **Error**: `ApiException<PutBotAliasError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutBotAliasOperationRequest` | `src/AmazonLex/Requests/Aliases/PutBotAliasOperationRequest.cs` |
| `PutBotAliasRequest` | `src/AmazonLex/Models/PutBotAliasRequest.cs` |
| `PutBotAliasResponse` | `src/AmazonLex/Models/PutBotAliasResponse.cs` |
| `PutBotAliasError` | `src/AmazonLex/Errors/PutBotAliasError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

