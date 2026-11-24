<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResourceCollections — operations

Accessor: `client.ResourceCollections` · Source: `src/AmazonDevOpsGuru/Api/ResourceCollections.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetResourceCollection

- **Auth**: `options.Sigv4`
- **Signature**: `GetResourceCollection(GetResourceCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceCollectionType`
- **Query params (wire ← C#)**: `NextToken` ← `NextToken`
- **Returns**: `GetResourceCollectionResponse`
- **Error**: `ApiException<GetResourceCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResourceCollectionRequest` | `src/AmazonDevOpsGuru/Requests/ResourceCollections/GetResourceCollectionRequest.cs` |
| `ResourceCollectionType` | `src/AmazonDevOpsGuru/Models/Enums/ResourceCollectionType.cs` |
| `GetResourceCollectionResponse` | `src/AmazonDevOpsGuru/Models/GetResourceCollectionResponse.cs` |
| `GetResourceCollectionError` | `src/AmazonDevOpsGuru/Errors/GetResourceCollectionError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### UpdateResourceCollection

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateResourceCollection(UpdateResourceCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<UpdateResourceCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateResourceCollectionRequest` | `src/AmazonDevOpsGuru/Requests/ResourceCollections/UpdateResourceCollectionRequest.cs` |
| `ResourceCollectionsRequest` | `src/AmazonDevOpsGuru/Models/ResourceCollectionsRequest.cs` |
| `UpdateResourceCollectionError` | `src/AmazonDevOpsGuru/Errors/UpdateResourceCollectionError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

