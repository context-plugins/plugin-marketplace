<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonAppSync/Api/Operations.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssociateMergedGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateMergedGraphqlApi(AssociateMergedGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceApiIdentifier`
- **Returns**: `AssociateMergedGraphqlApiResponse`
- **Error**: `ApiException<AssociateMergedGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateMergedGraphqlApiRequest` | `src/AmazonAppSync/Requests/Operations/AssociateMergedGraphqlApiRequest.cs` |
| `V1SourceApisMergedApiAssociationsRequest` | `src/AmazonAppSync/Models/V1SourceApisMergedApiAssociationsRequest.cs` |
| `AssociateMergedGraphqlApiResponse` | `src/AmazonAppSync/Models/AssociateMergedGraphqlApiResponse.cs` |
| `AssociateMergedGraphqlApiError` | `src/AmazonAppSync/Errors/AssociateMergedGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `LimitExceededException` | `src/AmazonAppSync/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### DisassociateMergedGraphqlApi

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateMergedGraphqlApi(DisassociateMergedGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceApiIdentifier`, `AssociationId`
- **Returns**: `DisassociateMergedGraphqlApiResponse`
- **Error**: `ApiException<DisassociateMergedGraphqlApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateMergedGraphqlApiRequest` | `src/AmazonAppSync/Requests/Operations/DisassociateMergedGraphqlApiRequest.cs` |
| `DisassociateMergedGraphqlApiResponse` | `src/AmazonAppSync/Models/DisassociateMergedGraphqlApiResponse.cs` |
| `DisassociateMergedGraphqlApiError` | `src/AmazonAppSync/Errors/DisassociateMergedGraphqlApiError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### EvaluateCode

- **Auth**: `options.Sigv4`
- **Signature**: `EvaluateCode(EvaluateCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `EvaluateCodeResponse`
- **Error**: `ApiException<EvaluateCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EvaluateCodeRequest` | `src/AmazonAppSync/Requests/Operations/EvaluateCodeRequest.cs` |
| `V1DataplaneEvaluatecodeRequest` | `src/AmazonAppSync/Models/V1DataplaneEvaluatecodeRequest.cs` |
| `EvaluateCodeResponse` | `src/AmazonAppSync/Models/EvaluateCodeResponse.cs` |
| `EvaluateCodeError` | `src/AmazonAppSync/Errors/EvaluateCodeError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### FlushApiCache

- **Auth**: `options.Sigv4`
- **Signature**: `FlushApiCache(FlushApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `object`
- **Error**: `ApiException<FlushApiCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FlushApiCacheRequest` | `src/AmazonAppSync/Requests/Operations/FlushApiCacheRequest.cs` |
| `FlushApiCacheError` | `src/AmazonAppSync/Errors/FlushApiCacheError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetGraphqlApiEnvironmentVariables

- **Auth**: `options.Sigv4`
- **Signature**: `GetGraphqlApiEnvironmentVariables(GetGraphqlApiEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetGraphqlApiEnvironmentVariablesResponse`
- **Error**: `ApiException<GetGraphqlApiEnvironmentVariablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGraphqlApiEnvironmentVariablesRequest` | `src/AmazonAppSync/Requests/Operations/GetGraphqlApiEnvironmentVariablesRequest.cs` |
| `GetGraphqlApiEnvironmentVariablesResponse` | `src/AmazonAppSync/Models/GetGraphqlApiEnvironmentVariablesResponse.cs` |
| `GetGraphqlApiEnvironmentVariablesError` | `src/AmazonAppSync/Errors/GetGraphqlApiEnvironmentVariablesError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetSchemaCreationStatus

- **Auth**: `options.Sigv4`
- **Signature**: `GetSchemaCreationStatus(GetSchemaCreationStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetSchemaCreationStatusResponse`
- **Error**: `ApiException<GetSchemaCreationStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSchemaCreationStatusRequest` | `src/AmazonAppSync/Requests/Operations/GetSchemaCreationStatusRequest.cs` |
| `GetSchemaCreationStatusResponse` | `src/AmazonAppSync/Models/GetSchemaCreationStatusResponse.cs` |
| `GetSchemaCreationStatusError` | `src/AmazonAppSync/Errors/GetSchemaCreationStatusError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### PutGraphqlApiEnvironmentVariables

- **Auth**: `options.Sigv4`
- **Signature**: `PutGraphqlApiEnvironmentVariables(PutGraphqlApiEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `PutGraphqlApiEnvironmentVariablesResponse`
- **Error**: `ApiException<PutGraphqlApiEnvironmentVariablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutGraphqlApiEnvironmentVariablesRequest` | `src/AmazonAppSync/Requests/Operations/PutGraphqlApiEnvironmentVariablesRequest.cs` |
| `V1ApisEnvironmentVariablesRequest` | `src/AmazonAppSync/Models/V1ApisEnvironmentVariablesRequest.cs` |
| `PutGraphqlApiEnvironmentVariablesResponse` | `src/AmazonAppSync/Models/PutGraphqlApiEnvironmentVariablesResponse.cs` |
| `PutGraphqlApiEnvironmentVariablesError` | `src/AmazonAppSync/Errors/PutGraphqlApiEnvironmentVariablesError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `AccessDeniedException` | `src/AmazonAppSync/Models/AccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### StartSchemaCreation

- **Auth**: `options.Sigv4`
- **Signature**: `StartSchemaCreation(StartSchemaCreationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `StartSchemaCreationResponse`
- **Error**: `ApiException<StartSchemaCreationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSchemaCreationRequest` | `src/AmazonAppSync/Requests/Operations/StartSchemaCreationRequest.cs` |
| `V1ApisSchemacreationRequest` | `src/AmazonAppSync/Models/V1ApisSchemacreationRequest.cs` |
| `StartSchemaCreationResponse` | `src/AmazonAppSync/Models/StartSchemaCreationResponse.cs` |
| `StartSchemaCreationError` | `src/AmazonAppSync/Errors/StartSchemaCreationError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### StartSchemaMerge

- **Auth**: `options.Sigv4`
- **Signature**: `StartSchemaMerge(StartSchemaMergeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AssociationId`, `MergedApiIdentifier`
- **Returns**: `StartSchemaMergeResponse`
- **Error**: `ApiException<StartSchemaMergeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSchemaMergeRequest` | `src/AmazonAppSync/Requests/Operations/StartSchemaMergeRequest.cs` |
| `StartSchemaMergeResponse` | `src/AmazonAppSync/Models/StartSchemaMergeResponse.cs` |
| `StartSchemaMergeError` | `src/AmazonAppSync/Errors/StartSchemaMergeError.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

