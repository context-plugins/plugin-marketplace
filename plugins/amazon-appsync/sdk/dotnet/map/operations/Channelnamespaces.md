<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channelnamespaces — operations

Accessor: `client.Channelnamespaces` · Source: `src/AmazonAppSync/Api/Channelnamespaces.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateChannelNamespace

- **Auth**: `options.Sigv4`
- **Signature**: `CreateChannelNamespace(CreateChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `CreateChannelNamespaceResponse`
- **Error**: `ApiException<CreateChannelNamespaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateChannelNamespaceRequest` | `src/AmazonAppSync/Requests/Channelnamespaces/CreateChannelNamespaceRequest.cs` |
| `V2ApisChannelNamespacesRequest` | `src/AmazonAppSync/Models/V2ApisChannelNamespacesRequest.cs` |
| `CreateChannelNamespaceResponse` | `src/AmazonAppSync/Models/CreateChannelNamespaceResponse.cs` |
| `CreateChannelNamespaceError` | `src/AmazonAppSync/Errors/CreateChannelNamespaceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonAppSync/Models/ServiceQuotaExceededException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteChannelNamespace

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteChannelNamespace(DeleteChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Name`
- **Returns**: `object`
- **Error**: `ApiException<DeleteChannelNamespaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteChannelNamespaceRequest` | `src/AmazonAppSync/Requests/Channelnamespaces/DeleteChannelNamespaceRequest.cs` |
| `DeleteChannelNamespaceError` | `src/AmazonAppSync/Errors/DeleteChannelNamespaceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetChannelNamespace

- **Auth**: `options.Sigv4`
- **Signature**: `GetChannelNamespace(GetChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Name`
- **Returns**: `GetChannelNamespaceResponse`
- **Error**: `ApiException<GetChannelNamespaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetChannelNamespaceRequest` | `src/AmazonAppSync/Requests/Channelnamespaces/GetChannelNamespaceRequest.cs` |
| `GetChannelNamespaceResponse` | `src/AmazonAppSync/Models/GetChannelNamespaceResponse.cs` |
| `GetChannelNamespaceError` | `src/AmazonAppSync/Errors/GetChannelNamespaceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListChannelNamespaces

- **Auth**: `options.Sigv4`
- **Signature**: `ListChannelNamespaces(ListChannelNamespacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListChannelNamespacesResponse`
- **Error**: `ApiException<ListChannelNamespacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListChannelNamespacesRequest` | `src/AmazonAppSync/Requests/Channelnamespaces/ListChannelNamespacesRequest.cs` |
| `ListChannelNamespacesResponse` | `src/AmazonAppSync/Models/ListChannelNamespacesResponse.cs` |
| `ListChannelNamespacesError` | `src/AmazonAppSync/Errors/ListChannelNamespacesError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateChannelNamespace

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateChannelNamespace(UpdateChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Name`
- **Returns**: `UpdateChannelNamespaceResponse`
- **Error**: `ApiException<UpdateChannelNamespaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateChannelNamespaceRequest` | `src/AmazonAppSync/Requests/Channelnamespaces/UpdateChannelNamespaceRequest.cs` |
| `V2ApisChannelNamespacesRequest1` | `src/AmazonAppSync/Models/V2ApisChannelNamespacesRequest1.cs` |
| `UpdateChannelNamespaceResponse` | `src/AmazonAppSync/Models/UpdateChannelNamespaceResponse.cs` |
| `UpdateChannelNamespaceError` | `src/AmazonAppSync/Errors/UpdateChannelNamespaceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

