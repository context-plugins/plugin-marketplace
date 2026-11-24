<!-- Generated file — do not edit; regenerated with the SDK. -->

# Types — operations

Accessor: `client.Types` · Source: `src/AmazonAppSync/Api/Types.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateType

- **Auth**: `options.Sigv4`
- **Signature**: `CreateType(CreateTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `CreateTypeResponse`
- **Error**: `ApiException<CreateTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTypeRequest` | `src/AmazonAppSync/Requests/Types/CreateTypeRequest.cs` |
| `V1ApisTypesRequest` | `src/AmazonAppSync/Models/V1ApisTypesRequest.cs` |
| `CreateTypeResponse` | `src/AmazonAppSync/Models/CreateTypeResponse.cs` |
| `CreateTypeError` | `src/AmazonAppSync/Errors/CreateTypeError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteType

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteType(DeleteTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`
- **Returns**: `object`
- **Error**: `ApiException<DeleteTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTypeRequest` | `src/AmazonAppSync/Requests/Types/DeleteTypeRequest.cs` |
| `DeleteTypeError` | `src/AmazonAppSync/Errors/DeleteTypeError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetType

- **Auth**: `options.Sigv4`
- **Signature**: `GetType(GetTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`, `Format`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `GetTypeResponse`
- **Error**: `ApiException<GetTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTypeRequest` | `src/AmazonAppSync/Requests/Types/GetTypeRequest.cs` |
| `Format` | `src/AmazonAppSync/Models/Enums/Format.cs` |
| `GetTypeResponse` | `src/AmazonAppSync/Models/GetTypeResponse.cs` |
| `GetTypeError` | `src/AmazonAppSync/Errors/GetTypeError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListTypes

- **Auth**: `options.Sigv4`
- **Signature**: `ListTypes(ListTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Format`
- **Query params (wire ← C#)**: `format` ← `Format`, `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListTypesResponse`
- **Error**: `ApiException<ListTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTypesRequest` | `src/AmazonAppSync/Requests/Types/ListTypesRequest.cs` |
| `Format` | `src/AmazonAppSync/Models/Enums/Format.cs` |
| `ListTypesResponse` | `src/AmazonAppSync/Models/ListTypesResponse.cs` |
| `ListTypesError` | `src/AmazonAppSync/Errors/ListTypesError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListTypesByAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `ListTypesByAssociation(ListTypesByAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MergedApiIdentifier`, `AssociationId`, `Format`
- **Query params (wire ← C#)**: `format` ← `Format`, `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListTypesByAssociationResponse`
- **Error**: `ApiException<ListTypesByAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTypesByAssociationRequest` | `src/AmazonAppSync/Requests/Types/ListTypesByAssociationRequest.cs` |
| `Format` | `src/AmazonAppSync/Models/Enums/Format.cs` |
| `ListTypesByAssociationResponse` | `src/AmazonAppSync/Models/ListTypesByAssociationResponse.cs` |
| `ListTypesByAssociationError` | `src/AmazonAppSync/Errors/ListTypesByAssociationError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateType

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateType(UpdateTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `TypeName`
- **Returns**: `UpdateTypeResponse`
- **Error**: `ApiException<UpdateTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTypeRequest` | `src/AmazonAppSync/Requests/Types/UpdateTypeRequest.cs` |
| `V1ApisTypesRequest1` | `src/AmazonAppSync/Models/V1ApisTypesRequest1.cs` |
| `UpdateTypeResponse` | `src/AmazonAppSync/Models/UpdateTypeResponse.cs` |
| `UpdateTypeError` | `src/AmazonAppSync/Errors/UpdateTypeError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

