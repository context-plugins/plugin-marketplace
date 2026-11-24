<!-- Generated file — do not edit; regenerated with the SDK. -->

# TagApi — operations

Accessor: `client.TagApi` · Source: `src/AwsCertificateManager/Api/TagApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTagsToCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `AddTagsToCertificate(AddTagsToCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddTagsToCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTagsToCertificateOperationRequest` | `src/AwsCertificateManager/Requests/TagApi/AddTagsToCertificateOperationRequest.cs` |
| `XAmzTargetAwsCertificateManagerTagApi` | `src/AwsCertificateManager/Models/Enums/XAmzTargetAwsCertificateManagerTagApi.cs` |
| `AddTagsToCertificateError` | `src/AwsCertificateManager/Errors/AddTagsToCertificateError.cs` |

### ListTagsForCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForCertificate(ListTagsForCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForCertificateOperationRequest` | `src/AwsCertificateManager/Requests/TagApi/ListTagsForCertificateOperationRequest.cs` |
| `XAmzTarget1AwsCertificateManagerTagApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget1AwsCertificateManagerTagApi.cs` |
| `ListTagsForCertificateError` | `src/AwsCertificateManager/Errors/ListTagsForCertificateError.cs` |

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AwsCertificateManager/Requests/TagApi/ListTagsForResourceOperationRequest.cs` |
| `XAmzTarget2AwsCertificateManagerTagApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget2AwsCertificateManagerTagApi.cs` |
| `ListTagsForResourceError` | `src/AwsCertificateManager/Errors/ListTagsForResourceError.cs` |

### RemoveTagsFromCertificate

- **Auth**: `options.Sigv4`
- **Signature**: `RemoveTagsFromCertificate(RemoveTagsFromCertificateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveTagsFromCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTagsFromCertificateOperationRequest` | `src/AwsCertificateManager/Requests/TagApi/RemoveTagsFromCertificateOperationRequest.cs` |
| `XAmzTarget3AwsCertificateManagerTagApi` | `src/AwsCertificateManager/Models/Enums/XAmzTarget3AwsCertificateManagerTagApi.cs` |
| `RemoveTagsFromCertificateError` | `src/AwsCertificateManager/Errors/RemoveTagsFromCertificateError.cs` |

