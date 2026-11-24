<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainNames — operations

Accessor: `client.DomainNames` · Source: `src/AmazonAppSync/Api/DomainNames.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssociateApi

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateApi(AssociateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Returns**: `AssociateApiResponse`
- **Error**: `ApiException<AssociateApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateApiRequest` | `src/AmazonAppSync/Requests/DomainNames/AssociateApiRequest.cs` |
| `V1DomainnamesApiassociationRequest` | `src/AmazonAppSync/Models/V1DomainnamesApiassociationRequest.cs` |
| `AssociateApiResponse` | `src/AmazonAppSync/Models/AssociateApiResponse.cs` |
| `AssociateApiError` | `src/AmazonAppSync/Errors/AssociateApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### CreateDomainName

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDomainName(CreateDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateDomainNameResponse`
- **Error**: `ApiException<CreateDomainNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDomainNameRequest` | `src/AmazonAppSync/Requests/DomainNames/CreateDomainNameRequest.cs` |
| `V1DomainnamesRequest` | `src/AmazonAppSync/Models/V1DomainnamesRequest.cs` |
| `CreateDomainNameResponse` | `src/AmazonAppSync/Models/CreateDomainNameResponse.cs` |
| `CreateDomainNameError` | `src/AmazonAppSync/Errors/CreateDomainNameError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteDomainName

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDomainName(DeleteDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Returns**: `object`
- **Error**: `ApiException<DeleteDomainNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDomainNameRequest` | `src/AmazonAppSync/Requests/DomainNames/DeleteDomainNameRequest.cs` |
| `DeleteDomainNameError` | `src/AmazonAppSync/Errors/DeleteDomainNameError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DisassociateApi

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateApi(DisassociateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Returns**: `object`
- **Error**: `ApiException<DisassociateApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateApiRequest` | `src/AmazonAppSync/Requests/DomainNames/DisassociateApiRequest.cs` |
| `DisassociateApiError` | `src/AmazonAppSync/Errors/DisassociateApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetApiAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `GetApiAssociation(GetApiAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Returns**: `GetApiAssociationResponse`
- **Error**: `ApiException<GetApiAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiAssociationRequest` | `src/AmazonAppSync/Requests/DomainNames/GetApiAssociationRequest.cs` |
| `GetApiAssociationResponse` | `src/AmazonAppSync/Models/GetApiAssociationResponse.cs` |
| `GetApiAssociationError` | `src/AmazonAppSync/Errors/GetApiAssociationError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetDomainName

- **Auth**: `options.Sigv4`
- **Signature**: `GetDomainName(GetDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Returns**: `GetDomainNameResponse`
- **Error**: `ApiException<GetDomainNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDomainNameRequest` | `src/AmazonAppSync/Requests/DomainNames/GetDomainNameRequest.cs` |
| `GetDomainNameResponse` | `src/AmazonAppSync/Models/GetDomainNameResponse.cs` |
| `GetDomainNameError` | `src/AmazonAppSync/Errors/GetDomainNameError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListDomainNames

- **Auth**: `options.Sigv4`
- **Signature**: `ListDomainNames(ListDomainNamesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListDomainNamesResponse`
- **Error**: `ApiException<ListDomainNamesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDomainNamesRequest` | `src/AmazonAppSync/Requests/DomainNames/ListDomainNamesRequest.cs` |
| `ListDomainNamesResponse` | `src/AmazonAppSync/Models/ListDomainNamesResponse.cs` |
| `ListDomainNamesError` | `src/AmazonAppSync/Errors/ListDomainNamesError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateDomainName

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateDomainName(UpdateDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Returns**: `UpdateDomainNameResponse`
- **Error**: `ApiException<UpdateDomainNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDomainNameRequest` | `src/AmazonAppSync/Requests/DomainNames/UpdateDomainNameRequest.cs` |
| `V1DomainnamesRequest1` | `src/AmazonAppSync/Models/V1DomainnamesRequest1.cs` |
| `UpdateDomainNameResponse` | `src/AmazonAppSync/Models/UpdateDomainNameResponse.cs` |
| `UpdateDomainNameError` | `src/AmazonAppSync/Errors/UpdateDomainNameError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

