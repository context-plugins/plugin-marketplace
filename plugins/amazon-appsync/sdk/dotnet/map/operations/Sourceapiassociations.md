<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sourceapiassociations — operations

Accessor: `client.Sourceapiassociations` · Source: `src/AmazonAppSync/Api/Sourceapiassociations.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssociateSourceGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateSourceGraphqlApi(AssociateSourceGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MergedApiIdentifier`
- **Returns**: `AssociateSourceGraphqlApiResponse`
- **Error**: `ApiException<AssociateSourceGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateSourceGraphqlApiRequest` | `src/AmazonAppSync/Requests/Sourceapiassociations/AssociateSourceGraphqlApiRequest.cs` |
| `V1MergedApisSourceApiAssociationsRequest` | `src/AmazonAppSync/Models/V1MergedApisSourceApiAssociationsRequest.cs` |
| `AssociateSourceGraphqlApiResponse` | `src/AmazonAppSync/Models/AssociateSourceGraphqlApiResponse.cs` |
| `AssociateSourceGraphqlApiError` | `src/AmazonAppSync/Errors/AssociateSourceGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `LimitExceededException` | `src/AmazonAppSync/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DisassociateSourceGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateSourceGraphqlApi(DisassociateSourceGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MergedApiIdentifier`, `AssociationId`
- **Returns**: `DisassociateSourceGraphqlApiResponse`
- **Error**: `ApiException<DisassociateSourceGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateSourceGraphqlApiRequest` | `src/AmazonAppSync/Requests/Sourceapiassociations/DisassociateSourceGraphqlApiRequest.cs` |
| `DisassociateSourceGraphqlApiResponse` | `src/AmazonAppSync/Models/DisassociateSourceGraphqlApiResponse.cs` |
| `DisassociateSourceGraphqlApiError` | `src/AmazonAppSync/Errors/DisassociateSourceGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetSourceApiAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `GetSourceApiAssociation(GetSourceApiAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MergedApiIdentifier`, `AssociationId`
- **Returns**: `GetSourceApiAssociationResponse`
- **Error**: `ApiException<GetSourceApiAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSourceApiAssociationRequest` | `src/AmazonAppSync/Requests/Sourceapiassociations/GetSourceApiAssociationRequest.cs` |
| `GetSourceApiAssociationResponse` | `src/AmazonAppSync/Models/GetSourceApiAssociationResponse.cs` |
| `GetSourceApiAssociationError` | `src/AmazonAppSync/Errors/GetSourceApiAssociationError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListSourceApiAssociations

- **Auth**: `options.Sigv4`
- **Signature**: `ListSourceApiAssociations(ListSourceApiAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListSourceApiAssociationsResponse`
- **Error**: `ApiException<ListSourceApiAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSourceApiAssociationsRequest` | `src/AmazonAppSync/Requests/Sourceapiassociations/ListSourceApiAssociationsRequest.cs` |
| `ListSourceApiAssociationsResponse` | `src/AmazonAppSync/Models/ListSourceApiAssociationsResponse.cs` |
| `ListSourceApiAssociationsError` | `src/AmazonAppSync/Errors/ListSourceApiAssociationsError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateSourceApiAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSourceApiAssociation(UpdateSourceApiAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AssociationId`, `MergedApiIdentifier`
- **Returns**: `UpdateSourceApiAssociationResponse`
- **Error**: `ApiException<UpdateSourceApiAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSourceApiAssociationRequest` | `src/AmazonAppSync/Requests/Sourceapiassociations/UpdateSourceApiAssociationRequest.cs` |
| `V1MergedApisSourceApiAssociationsRequest1` | `src/AmazonAppSync/Models/V1MergedApisSourceApiAssociationsRequest1.cs` |
| `UpdateSourceApiAssociationResponse` | `src/AmazonAppSync/Models/UpdateSourceApiAssociationResponse.cs` |
| `UpdateSourceApiAssociationError` | `src/AmazonAppSync/Errors/UpdateSourceApiAssociationError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

