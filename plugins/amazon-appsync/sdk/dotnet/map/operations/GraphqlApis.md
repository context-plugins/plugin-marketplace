<!-- Generated file — do not edit; regenerated with the SDK. -->

# GraphqlApis — operations

Accessor: `client.GraphqlApis` · Source: `src/AmazonAppSync/Api/GraphqlApis.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGraphqlApi2

- **Auth**: `options.Sigv4`
- **Signature**: `CreateGraphqlApi2(CreateGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateGraphqlApiResponse`
- **Error**: `ApiException<CreateGraphqlApi2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiLimitExceededException([NotNullWhen(true)] out ApiLimitExceededException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGraphqlApi2Request` | `src/AmazonAppSync/Requests/GraphqlApis/CreateGraphqlApi2Request.cs` |
| `V1ApisRequest` | `src/AmazonAppSync/Models/V1ApisRequest.cs` |
| `CreateGraphqlApiResponse` | `src/AmazonAppSync/Models/CreateGraphqlApiResponse.cs` |
| `CreateGraphqlApi2Error` | `src/AmazonAppSync/Errors/CreateGraphqlApi2Error.cs` |
| `ApiLimitExceededException` | `src/AmazonAppSync/Models/ApiLimitExceededException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `LimitExceededException` | `src/AmazonAppSync/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DeleteGraphqlApi2

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteGraphqlApi2(DeleteGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteGraphqlApi2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGraphqlApi2Request` | `src/AmazonAppSync/Requests/GraphqlApis/DeleteGraphqlApi2Request.cs` |
| `DeleteGraphqlApi2Error` | `src/AmazonAppSync/Errors/DeleteGraphqlApi2Error.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### EvaluateMappingTemplate

- **Auth**: `options.Sigv4`
- **Signature**: `EvaluateMappingTemplate(EvaluateMappingTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `EvaluateMappingTemplateResponse`
- **Error**: `ApiException<EvaluateMappingTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EvaluateMappingTemplateRequest` | `src/AmazonAppSync/Requests/GraphqlApis/EvaluateMappingTemplateRequest.cs` |
| `V1DataplaneEvaluatetemplateRequest` | `src/AmazonAppSync/Models/V1DataplaneEvaluatetemplateRequest.cs` |
| `EvaluateMappingTemplateResponse` | `src/AmazonAppSync/Models/EvaluateMappingTemplateResponse.cs` |
| `EvaluateMappingTemplateError` | `src/AmazonAppSync/Errors/EvaluateMappingTemplateError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetGraphqlApi2

- **Auth**: `options.Sigv4`
- **Signature**: `GetGraphqlApi2(GetGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetGraphqlApiResponse`
- **Error**: `ApiException<GetGraphqlApi2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGraphqlApi2Request` | `src/AmazonAppSync/Requests/GraphqlApis/GetGraphqlApi2Request.cs` |
| `GetGraphqlApiResponse` | `src/AmazonAppSync/Models/GetGraphqlApiResponse.cs` |
| `GetGraphqlApi2Error` | `src/AmazonAppSync/Errors/GetGraphqlApi2Error.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### ListGraphqlApis2

- **Auth**: `options.Sigv4`
- **Signature**: `ListGraphqlApis2(ListGraphqlApis2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextToken` ← `NextToken`, `maxResults` ← `MaxResults`, `apiType` ← `ApiType`, `owner` ← `Owner`
- **Returns**: `ListGraphqlApisResponse`
- **Error**: `ApiException<ListGraphqlApis2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGraphqlApis2Request` | `src/AmazonAppSync/Requests/GraphqlApis/ListGraphqlApis2Request.cs` |
| `ApiType2` | `src/AmazonAppSync/Models/Enums/ApiType2.cs` |
| `Owner` | `src/AmazonAppSync/Models/Enums/Owner.cs` |
| `ListGraphqlApisResponse` | `src/AmazonAppSync/Models/ListGraphqlApisResponse.cs` |
| `ListGraphqlApis2Error` | `src/AmazonAppSync/Errors/ListGraphqlApis2Error.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### UpdateGraphqlApi2

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateGraphqlApi2(UpdateGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `UpdateGraphqlApiResponse`
- **Error**: `ApiException<UpdateGraphqlApi2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGraphqlApi2Request` | `src/AmazonAppSync/Requests/GraphqlApis/UpdateGraphqlApi2Request.cs` |
| `V1ApisRequest1` | `src/AmazonAppSync/Models/V1ApisRequest1.cs` |
| `UpdateGraphqlApiResponse` | `src/AmazonAppSync/Models/UpdateGraphqlApiResponse.cs` |
| `UpdateGraphqlApi2Error` | `src/AmazonAppSync/Errors/UpdateGraphqlApi2Error.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

