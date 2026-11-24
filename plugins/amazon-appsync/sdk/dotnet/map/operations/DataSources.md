<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.DataSources` · Source: `src/AmazonAppSync/Api/DataSources.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDataSource

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDataSource(CreateDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `CreateDataSourceResponse`
- **Error**: `ApiException<CreateDataSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDataSourceRequest` | `src/AmazonAppSync/Requests/DataSources/CreateDataSourceRequest.cs` |
| `V1ApisDatasourcesRequest` | `src/AmazonAppSync/Models/V1ApisDatasourcesRequest.cs` |
| `CreateDataSourceResponse` | `src/AmazonAppSync/Models/CreateDataSourceResponse.cs` |
| `CreateDataSourceError` | `src/AmazonAppSync/Errors/CreateDataSourceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteDataSource

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDataSource(DeleteDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Name`
- **Returns**: `object`
- **Error**: `ApiException<DeleteDataSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDataSourceRequest` | `src/AmazonAppSync/Requests/DataSources/DeleteDataSourceRequest.cs` |
| `DeleteDataSourceError` | `src/AmazonAppSync/Errors/DeleteDataSourceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetDataSource

- **Auth**: `options.Sigv4`
- **Signature**: `GetDataSource(GetDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Name`
- **Returns**: `GetDataSourceResponse`
- **Error**: `ApiException<GetDataSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDataSourceRequest` | `src/AmazonAppSync/Requests/DataSources/GetDataSourceRequest.cs` |
| `GetDataSourceResponse` | `src/AmazonAppSync/Models/GetDataSourceResponse.cs` |
| `GetDataSourceError` | `src/AmazonAppSync/Errors/GetDataSourceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetDataSourceIntrospection

- **Auth**: `options.Sigv4`
- **Signature**: `GetDataSourceIntrospection(GetDataSourceIntrospectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IntrospectionId`
- **Query params (wire ← C#)**: `includeModelsSDL` ← `IncludeModelsSdl`, `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `GetDataSourceIntrospectionResponse`
- **Error**: `ApiException<GetDataSourceIntrospectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDataSourceIntrospectionRequest` | `src/AmazonAppSync/Requests/DataSources/GetDataSourceIntrospectionRequest.cs` |
| `GetDataSourceIntrospectionResponse` | `src/AmazonAppSync/Models/GetDataSourceIntrospectionResponse.cs` |
| `GetDataSourceIntrospectionError` | `src/AmazonAppSync/Errors/GetDataSourceIntrospectionError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListDataSources

- **Auth**: `options.Sigv4`
- **Signature**: `ListDataSources(ListDataSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListDataSourcesResponse`
- **Error**: `ApiException<ListDataSourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDataSourcesRequest` | `src/AmazonAppSync/Requests/DataSources/ListDataSourcesRequest.cs` |
| `ListDataSourcesResponse` | `src/AmazonAppSync/Models/ListDataSourcesResponse.cs` |
| `ListDataSourcesError` | `src/AmazonAppSync/Errors/ListDataSourcesError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### StartDataSourceIntrospection

- **Auth**: `options.Sigv4`
- **Signature**: `StartDataSourceIntrospection(StartDataSourceIntrospectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StartDataSourceIntrospectionResponse`
- **Error**: `ApiException<StartDataSourceIntrospectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartDataSourceIntrospectionRequest` | `src/AmazonAppSync/Requests/DataSources/StartDataSourceIntrospectionRequest.cs` |
| `V1DatasourcesIntrospectionsRequest` | `src/AmazonAppSync/Models/V1DatasourcesIntrospectionsRequest.cs` |
| `StartDataSourceIntrospectionResponse` | `src/AmazonAppSync/Models/StartDataSourceIntrospectionResponse.cs` |
| `StartDataSourceIntrospectionError` | `src/AmazonAppSync/Errors/StartDataSourceIntrospectionError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateDataSource

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateDataSource(UpdateDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Name`
- **Returns**: `UpdateDataSourceResponse`
- **Error**: `ApiException<UpdateDataSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDataSourceRequest` | `src/AmazonAppSync/Requests/DataSources/UpdateDataSourceRequest.cs` |
| `V1ApisDatasourcesRequest1` | `src/AmazonAppSync/Models/V1ApisDatasourcesRequest1.cs` |
| `UpdateDataSourceResponse` | `src/AmazonAppSync/Models/UpdateDataSourceResponse.cs` |
| `UpdateDataSourceError` | `src/AmazonAppSync/Errors/UpdateDataSourceError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

