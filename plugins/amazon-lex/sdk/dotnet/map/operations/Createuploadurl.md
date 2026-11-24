<!-- Generated file — do not edit; regenerated with the SDK. -->

# Createuploadurl — operations

Accessor: `client.Createuploadurl` · Source: `src/AmazonLex/Api/Createuploadurl.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUploadUrl

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateUploadUrl(CreateUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateUploadUrlResponse`
- **Error**: `ApiException<CreateUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUploadUrlRequest` | `src/AmazonLex/Requests/Createuploadurl/CreateUploadUrlRequest.cs` |
| `CreateUploadUrlResponse` | `src/AmazonLex/Models/CreateUploadUrlResponse.cs` |
| `CreateUploadUrlError` | `src/AmazonLex/Errors/CreateUploadUrlError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

