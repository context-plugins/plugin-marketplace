<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apicaches — operations

Accessor: `client.Apicaches` · Source: `src/AmazonAppSync/Api/Apicaches.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateApiCache

- **Auth**: `options.Sigv4`
- **Signature**: `CreateApiCache(CreateApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `CreateApiCacheResponse`
- **Error**: `ApiException<CreateApiCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateApiCacheRequest` | `src/AmazonAppSync/Requests/Apicaches/CreateApiCacheRequest.cs` |
| `V1ApisApiCachesRequest` | `src/AmazonAppSync/Models/V1ApisApiCachesRequest.cs` |
| `CreateApiCacheResponse` | `src/AmazonAppSync/Models/CreateApiCacheResponse.cs` |
| `CreateApiCacheError` | `src/AmazonAppSync/Errors/CreateApiCacheError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteApiCache

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteApiCache(DeleteApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteApiCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiCacheRequest` | `src/AmazonAppSync/Requests/Apicaches/DeleteApiCacheRequest.cs` |
| `DeleteApiCacheError` | `src/AmazonAppSync/Errors/DeleteApiCacheError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetApiCache

- **Auth**: `options.Sigv4`
- **Signature**: `GetApiCache(GetApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetApiCacheResponse`
- **Error**: `ApiException<GetApiCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiCacheRequest` | `src/AmazonAppSync/Requests/Apicaches/GetApiCacheRequest.cs` |
| `GetApiCacheResponse` | `src/AmazonAppSync/Models/GetApiCacheResponse.cs` |
| `GetApiCacheError` | `src/AmazonAppSync/Errors/GetApiCacheError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateApiCache

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateApiCache(UpdateApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `UpdateApiCacheResponse`
- **Error**: `ApiException<UpdateApiCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateApiCacheRequest` | `src/AmazonAppSync/Requests/Apicaches/UpdateApiCacheRequest.cs` |
| `V1ApisApiCachesUpdateRequest` | `src/AmazonAppSync/Models/V1ApisApiCachesUpdateRequest.cs` |
| `UpdateApiCacheResponse` | `src/AmazonAppSync/Models/UpdateApiCacheResponse.cs` |
| `UpdateApiCacheError` | `src/AmazonAppSync/Errors/UpdateApiCacheError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

