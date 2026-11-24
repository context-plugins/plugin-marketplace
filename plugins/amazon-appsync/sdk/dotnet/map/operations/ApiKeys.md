<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.ApiKeys` · Source: `src/AmazonAppSync/Api/ApiKeys.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateApiKey

- **Auth**: `options.Sigv4`
- **Signature**: `CreateApiKey(CreateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `CreateApiKeyResponse`
- **Error**: `ApiException<CreateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiKeyLimitExceededException([NotNullWhen(true)] out ApiKeyLimitExceededException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateApiKeyRequest` | `src/AmazonAppSync/Requests/ApiKeys/CreateApiKeyRequest.cs` |
| `V1ApisApikeysRequest` | `src/AmazonAppSync/Models/V1ApisApikeysRequest.cs` |
| `CreateApiKeyResponse` | `src/AmazonAppSync/Models/CreateApiKeyResponse.cs` |
| `CreateApiKeyError` | `src/AmazonAppSync/Errors/CreateApiKeyError.cs` |
| `ApiKeyLimitExceededException` | `src/AmazonAppSync/Models/ApiKeyLimitExceededException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonAppSync/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteApiKey

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteApiKey(DeleteApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiKeyRequest` | `src/AmazonAppSync/Requests/ApiKeys/DeleteApiKeyRequest.cs` |
| `DeleteApiKeyError` | `src/AmazonAppSync/Errors/DeleteApiKeyError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListApiKeys

- **Auth**: `options.Sigv4`
- **Signature**: `ListApiKeys(ListApiKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListApiKeysResponse`
- **Error**: `ApiException<ListApiKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListApiKeysRequest` | `src/AmazonAppSync/Requests/ApiKeys/ListApiKeysRequest.cs` |
| `ListApiKeysResponse` | `src/AmazonAppSync/Models/ListApiKeysResponse.cs` |
| `ListApiKeysError` | `src/AmazonAppSync/Errors/ListApiKeysError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateApiKey

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateApiKey(UpdateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Id`
- **Returns**: `UpdateApiKeyResponse`
- **Error**: `ApiException<UpdateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiKeyValidityOutOfBoundsException([NotNullWhen(true)] out ApiKeyValidityOutOfBoundsException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateApiKeyRequest` | `src/AmazonAppSync/Requests/ApiKeys/UpdateApiKeyRequest.cs` |
| `V1ApisApikeysRequest1` | `src/AmazonAppSync/Models/V1ApisApikeysRequest1.cs` |
| `UpdateApiKeyResponse` | `src/AmazonAppSync/Models/UpdateApiKeyResponse.cs` |
| `UpdateApiKeyError` | `src/AmazonAppSync/Errors/UpdateApiKeyError.cs` |
| `ApiKeyValidityOutOfBoundsException` | `src/AmazonAppSync/Models/ApiKeyValidityOutOfBoundsException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonAppSync/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

