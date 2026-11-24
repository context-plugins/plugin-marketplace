<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apis — operations

Accessor: `client.Apis` · Source: `src/AmazonAppSync/Api/Apis.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateApi

- **Auth**: `options.Sigv4`
- **Signature**: `CreateApi(CreateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateApiResponse`
- **Error**: `ApiException<CreateApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateApiRequest` | `src/AmazonAppSync/Requests/Apis/CreateApiRequest.cs` |
| `V2ApisRequest` | `src/AmazonAppSync/Models/V2ApisRequest.cs` |
| `CreateApiResponse` | `src/AmazonAppSync/Models/CreateApiResponse.cs` |
| `CreateApiError` | `src/AmazonAppSync/Errors/CreateApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `ServiceQuotaExceededException` | `src/AmazonAppSync/Models/ServiceQuotaExceededException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### CreateGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `CreateGraphqlApi(CreateGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateGraphqlApiResponse`
- **Error**: `ApiException<CreateGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiLimitExceededException([NotNullWhen(true)] out ApiLimitExceededException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGraphqlApiRequest` | `src/AmazonAppSync/Requests/Apis/CreateGraphqlApiRequest.cs` |
| `V1ApisRequest` | `src/AmazonAppSync/Models/V1ApisRequest.cs` |
| `CreateGraphqlApiResponse` | `src/AmazonAppSync/Models/CreateGraphqlApiResponse.cs` |
| `CreateGraphqlApiError` | `src/AmazonAppSync/Errors/CreateGraphqlApiError.cs` |
| `ApiLimitExceededException` | `src/AmazonAppSync/Models/ApiLimitExceededException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `LimitExceededException` | `src/AmazonAppSync/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteApi

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteApi(DeleteApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiRequest` | `src/AmazonAppSync/Requests/Apis/DeleteApiRequest.cs` |
| `DeleteApiError` | `src/AmazonAppSync/Errors/DeleteApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteGraphqlApi(DeleteGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGraphqlApiRequest` | `src/AmazonAppSync/Requests/Apis/DeleteGraphqlApiRequest.cs` |
| `DeleteGraphqlApiError` | `src/AmazonAppSync/Errors/DeleteGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetApi

- **Auth**: `options.Sigv4`
- **Signature**: `GetApi(GetApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetApiResponse`
- **Error**: `ApiException<GetApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiRequest` | `src/AmazonAppSync/Requests/Apis/GetApiRequest.cs` |
| `GetApiResponse` | `src/AmazonAppSync/Models/GetApiResponse.cs` |
| `GetApiError` | `src/AmazonAppSync/Errors/GetApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `GetGraphqlApi(GetGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetGraphqlApiResponse`
- **Error**: `ApiException<GetGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGraphqlApiRequest` | `src/AmazonAppSync/Requests/Apis/GetGraphqlApiRequest.cs` |
| `GetGraphqlApiResponse` | `src/AmazonAppSync/Models/GetGraphqlApiResponse.cs` |
| `GetGraphqlApiError` | `src/AmazonAppSync/Errors/GetGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListApis

- **Auth**: `options.Sigv4`
- **Signature**: `ListApis(ListApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListApisResponse`
- **Error**: `ApiException<ListApisError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListApisRequest` | `src/AmazonAppSync/Requests/Apis/ListApisRequest.cs` |
| `ListApisResponse` | `src/AmazonAppSync/Models/ListApisResponse.cs` |
| `ListApisError` | `src/AmazonAppSync/Errors/ListApisError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListGraphqlApis

- **Auth**: `options.Sigv4`
- **Signature**: `ListGraphqlApis(ListGraphqlApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`, `apiType` ← `ApiType`, `owner` ← `Owner`
- **Returns**: `ListGraphqlApisResponse`
- **Error**: `ApiException<ListGraphqlApisError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGraphqlApisRequest` | `src/AmazonAppSync/Requests/Apis/ListGraphqlApisRequest.cs` |
| `ApiType2` | `src/AmazonAppSync/Models/Enums/ApiType2.cs` |
| `Owner` | `src/AmazonAppSync/Models/Enums/Owner.cs` |
| `ListGraphqlApisResponse` | `src/AmazonAppSync/Models/ListGraphqlApisResponse.cs` |
| `ListGraphqlApisError` | `src/AmazonAppSync/Errors/ListGraphqlApisError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateApi

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateApi(UpdateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `UpdateApiResponse`
- **Error**: `ApiException<UpdateApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateApiRequest` | `src/AmazonAppSync/Requests/Apis/UpdateApiRequest.cs` |
| `V2ApisRequest1` | `src/AmazonAppSync/Models/V2ApisRequest1.cs` |
| `UpdateApiResponse` | `src/AmazonAppSync/Models/UpdateApiResponse.cs` |
| `UpdateApiError` | `src/AmazonAppSync/Errors/UpdateApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateGraphqlApi(UpdateGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `UpdateGraphqlApiResponse`
- **Error**: `ApiException<UpdateGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGraphqlApiRequest` | `src/AmazonAppSync/Requests/Apis/UpdateGraphqlApiRequest.cs` |
| `V1ApisRequest1` | `src/AmazonAppSync/Models/V1ApisRequest1.cs` |
| `UpdateGraphqlApiResponse` | `src/AmazonAppSync/Models/UpdateGraphqlApiResponse.cs` |
| `UpdateGraphqlApiError` | `src/AmazonAppSync/Errors/UpdateGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

