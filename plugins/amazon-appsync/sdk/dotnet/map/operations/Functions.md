<!-- Generated file — do not edit; regenerated with the SDK. -->

# Functions — operations

Accessor: `client.Functions` · Source: `src/AmazonAppSync/Api/Functions.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFunction

- **Auth**: `options.Sigv4`
- **Signature**: `CreateFunction(CreateFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `CreateFunctionResponse`
- **Error**: `ApiException<CreateFunctionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFunctionRequest` | `src/AmazonAppSync/Requests/Functions/CreateFunctionRequest.cs` |
| `V1ApisFunctionsRequest` | `src/AmazonAppSync/Models/V1ApisFunctionsRequest.cs` |
| `CreateFunctionResponse` | `src/AmazonAppSync/Models/CreateFunctionResponse.cs` |
| `CreateFunctionError` | `src/AmazonAppSync/Errors/CreateFunctionError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteFunction

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteFunction(DeleteFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `FunctionId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteFunctionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFunctionRequest` | `src/AmazonAppSync/Requests/Functions/DeleteFunctionRequest.cs` |
| `DeleteFunctionError` | `src/AmazonAppSync/Errors/DeleteFunctionError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetFunction

- **Auth**: `options.Sigv4`
- **Signature**: `GetFunction(GetFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `FunctionId`
- **Returns**: `GetFunctionResponse`
- **Error**: `ApiException<GetFunctionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFunctionRequest` | `src/AmazonAppSync/Requests/Functions/GetFunctionRequest.cs` |
| `GetFunctionResponse` | `src/AmazonAppSync/Models/GetFunctionResponse.cs` |
| `GetFunctionError` | `src/AmazonAppSync/Errors/GetFunctionError.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |

### ListFunctions

- **Auth**: `options.Sigv4`
- **Signature**: `ListFunctions(ListFunctionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`
- **Returns**: `ListFunctionsResponse`
- **Error**: `ApiException<ListFunctionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFunctionsRequest` | `src/AmazonAppSync/Requests/Functions/ListFunctionsRequest.cs` |
| `ListFunctionsResponse` | `src/AmazonAppSync/Models/ListFunctionsResponse.cs` |
| `ListFunctionsError` | `src/AmazonAppSync/Errors/ListFunctionsError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateFunction

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateFunction(UpdateFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `FunctionId`
- **Returns**: `UpdateFunctionResponse`
- **Error**: `ApiException<UpdateFunctionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFunctionRequest` | `src/AmazonAppSync/Requests/Functions/UpdateFunctionRequest.cs` |
| `V1ApisFunctionsRequest1` | `src/AmazonAppSync/Models/V1ApisFunctionsRequest1.cs` |
| `UpdateFunctionResponse` | `src/AmazonAppSync/Models/UpdateFunctionResponse.cs` |
| `UpdateFunctionError` | `src/AmazonAppSync/Errors/UpdateFunctionError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

