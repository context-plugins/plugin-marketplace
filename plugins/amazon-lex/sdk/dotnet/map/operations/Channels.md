<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.Channels` · Source: `src/AmazonLex/Api/Channels.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBotChannelAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBotChannelAssociation(DeleteBotChannelAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `Name`
- **Returns**: `string`
- **Error**: `ApiException<DeleteBotChannelAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBotChannelAssociationOperationRequest` | `src/AmazonLex/Requests/Channels/DeleteBotChannelAssociationOperationRequest.cs` |
| `DeleteBotChannelAssociationRequest` | `src/AmazonLex/Models/DeleteBotChannelAssociationRequest.cs` |
| `DeleteBotChannelAssociationError` | `src/AmazonLex/Errors/DeleteBotChannelAssociationError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBotChannelAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `GetBotChannelAssociation(GetBotChannelAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`, `Name`
- **Returns**: `GetBotChannelAssociationResponse`
- **Error**: `ApiException<GetBotChannelAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotChannelAssociationOperationRequest` | `src/AmazonLex/Requests/Channels/GetBotChannelAssociationOperationRequest.cs` |
| `GetBotChannelAssociationResponse` | `src/AmazonLex/Models/GetBotChannelAssociationResponse.cs` |
| `GetBotChannelAssociationError` | `src/AmazonLex/Errors/GetBotChannelAssociationError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetBotChannelAssociations

- **Auth**: `options.Sigv4`
- **Signature**: `GetBotChannelAssociations(GetBotChannelAssociationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BotName`, `BotAlias`
- **Returns**: `GetBotChannelAssociationsResponse`
- **Error**: `ApiException<GetBotChannelAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBotChannelAssociationsOperationRequest` | `src/AmazonLex/Requests/Channels/GetBotChannelAssociationsOperationRequest.cs` |
| `GetBotChannelAssociationsResponse` | `src/AmazonLex/Models/GetBotChannelAssociationsResponse.cs` |
| `GetBotChannelAssociationsError` | `src/AmazonLex/Errors/GetBotChannelAssociationsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

