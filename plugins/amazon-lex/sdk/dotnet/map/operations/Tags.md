<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/AmazonLex/Api/Tags.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTagsForResource

- **Server group**: `DefaultAmazonLexModelBuildingV2TagsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `ListTagsForResourceResponse`
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AmazonLex/Requests/Tags/ListTagsForResourceOperationRequest.cs` |
| `ListTagsForResourceResponse` | `src/AmazonLex/Models/ListTagsForResourceResponse.cs` |
| `ListTagsForResourceError` | `src/AmazonLex/Errors/ListTagsForResourceError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListTagsForResource1

- **Server group**: `DefaultAmazonLexModelBuildingV2TagsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource1(ListTagsForResource1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `ModelsLexListTagsForResourceResponse`
- **Error**: `ApiException<ListTagsForResource1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResource1Request` | `src/AmazonLex/Requests/Tags/ListTagsForResource1Request.cs` |
| `ModelsLexListTagsForResourceResponse` | `src/AmazonLex/Models/ModelsLexListTagsForResourceResponse.cs` |
| `ListTagsForResource1Error` | `src/AmazonLex/Errors/ListTagsForResource1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### TagResource

- **Server group**: `DefaultAmazonLexModelBuildingV2TagsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `object`
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AmazonLex/Requests/Tags/TagResourceOperationRequest.cs` |
| `TagResourceRequest` | `src/AmazonLex/Models/TagResourceRequest.cs` |
| `TagResourceError` | `src/AmazonLex/Errors/TagResourceError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### TagResource1

- **Server group**: `DefaultAmazonLexModelBuildingV2TagsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `TagResource1(TagResource1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `object`
- **Error**: `ApiException<TagResource1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResource1Request` | `src/AmazonLex/Requests/Tags/TagResource1Request.cs` |
| `ModelsLexTagResourceRequest` | `src/AmazonLex/Models/ModelsLexTagResourceRequest.cs` |
| `TagResource1Error` | `src/AmazonLex/Errors/TagResource1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### UntagResource

- **Server group**: `DefaultAmazonLexModelBuildingV2TagsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `object`
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AmazonLex/Requests/Tags/UntagResourceOperationRequest.cs` |
| `UntagResourceRequest` | `src/AmazonLex/Models/UntagResourceRequest.cs` |
| `UntagResourceError` | `src/AmazonLex/Errors/UntagResourceError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UntagResource1

- **Server group**: `DefaultAmazonLexModelBuildingV2TagsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource1(UntagResource1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `object`
- **Error**: `ApiException<UntagResource1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResource1Request` | `src/AmazonLex/Requests/Tags/UntagResource1Request.cs` |
| `ModelsLexUntagResourceRequest` | `src/AmazonLex/Models/ModelsLexUntagResourceRequest.cs` |
| `UntagResource1Error` | `src/AmazonLex/Errors/UntagResource1Error.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

