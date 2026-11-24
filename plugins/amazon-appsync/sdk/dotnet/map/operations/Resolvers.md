<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resolvers — operations

Accessor: `client.Resolvers` · Source: `src/AmazonAppSync/Api/Resolvers.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateResolver

- **Auth**: `options.Sigv4`
- **Signature**: `CreateResolver(CreateResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`
- **Returns**: `CreateResolverResponse`
- **Error**: `ApiException<CreateResolverError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateResolverRequest` | `src/AmazonAppSync/Requests/Resolvers/CreateResolverRequest.cs` |
| `V1ApisTypesResolversRequest` | `src/AmazonAppSync/Models/V1ApisTypesResolversRequest.cs` |
| `CreateResolverResponse` | `src/AmazonAppSync/Models/CreateResolverResponse.cs` |
| `CreateResolverError` | `src/AmazonAppSync/Errors/CreateResolverError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteResolver

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResolver(DeleteResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`, `FieldName`
- **Returns**: `object`
- **Error**: `ApiException<DeleteResolverError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResolverRequest` | `src/AmazonAppSync/Requests/Resolvers/DeleteResolverRequest.cs` |
| `DeleteResolverError` | `src/AmazonAppSync/Errors/DeleteResolverError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetResolver

- **Auth**: `options.Sigv4`
- **Signature**: `GetResolver(GetResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`, `FieldName`
- **Returns**: `GetResolverResponse`
- **Error**: `ApiException<GetResolverError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResolverRequest` | `src/AmazonAppSync/Requests/Resolvers/GetResolverRequest.cs` |
| `GetResolverResponse` | `src/AmazonAppSync/Models/GetResolverResponse.cs` |
| `GetResolverError` | `src/AmazonAppSync/Errors/GetResolverError.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |

### ListResolvers

- **Auth**: `options.Sigv4`
- **Signature**: `ListResolvers(ListResolversRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListResolversResponse`
- **Error**: `ApiException<ListResolversError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResolversRequest` | `src/AmazonAppSync/Requests/Resolvers/ListResolversRequest.cs` |
| `ListResolversResponse` | `src/AmazonAppSync/Models/ListResolversResponse.cs` |
| `ListResolversError` | `src/AmazonAppSync/Errors/ListResolversError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListResolversByFunction

- **Auth**: `options.Sigv4`
- **Signature**: `ListResolversByFunction(ListResolversByFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `FunctionId`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListResolversByFunctionResponse`
- **Error**: `ApiException<ListResolversByFunctionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResolversByFunctionRequest` | `src/AmazonAppSync/Requests/Resolvers/ListResolversByFunctionRequest.cs` |
| `ListResolversByFunctionResponse` | `src/AmazonAppSync/Models/ListResolversByFunctionResponse.cs` |
| `ListResolversByFunctionError` | `src/AmazonAppSync/Errors/ListResolversByFunctionError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateResolver

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateResolver(UpdateResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`, `FieldName`
- **Returns**: `UpdateResolverResponse`
- **Error**: `ApiException<UpdateResolverError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateResolverRequest` | `src/AmazonAppSync/Requests/Resolvers/UpdateResolverRequest.cs` |
| `V1ApisTypesResolversFieldNameRequest` | `src/AmazonAppSync/Models/V1ApisTypesResolversFieldNameRequest.cs` |
| `UpdateResolverResponse` | `src/AmazonAppSync/Models/UpdateResolverResponse.cs` |
| `UpdateResolverError` | `src/AmazonAppSync/Errors/UpdateResolverError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

