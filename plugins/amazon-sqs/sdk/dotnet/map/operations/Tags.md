<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/AmazonSqs/Api/Tags.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListQueueTags

- **Auth**: `options.Sigv4`
- **Signature**: `ListQueueTags(ListQueueTagsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListQueueTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQueueTagsOperationRequest` | `src/AmazonSqs/Requests/Tags/ListQueueTagsOperationRequest.cs` |
| `XAmzTarget2AmazonSimpleQueueServiceTagsApi` | `src/AmazonSqs/Models/Enums/XAmzTarget2AmazonSimpleQueueServiceTagsApi.cs` |
| `ListQueueTagsError` | `src/AmazonSqs/Errors/ListQueueTagsError.cs` |

### TagQueue2

- **Auth**: `options.Sigv4`
- **Signature**: `TagQueue2(TagQueue2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagQueue2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagQueue2Request` | `src/AmazonSqs/Requests/Tags/TagQueue2Request.cs` |
| `XAmzTargetAmazonSimpleQueueServiceTagsApi` | `src/AmazonSqs/Models/Enums/XAmzTargetAmazonSimpleQueueServiceTagsApi.cs` |
| `TagQueue2Error` | `src/AmazonSqs/Errors/TagQueue2Error.cs` |

### UntagQueue2

- **Auth**: `options.Sigv4`
- **Signature**: `UntagQueue2(UntagQueue2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagQueue2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagQueue2Request` | `src/AmazonSqs/Requests/Tags/UntagQueue2Request.cs` |
| `XAmzTarget1AmazonSimpleQueueServiceTagsApi` | `src/AmazonSqs/Models/Enums/XAmzTarget1AmazonSimpleQueueServiceTagsApi.cs` |
| `UntagQueue2Error` | `src/AmazonSqs/Errors/UntagQueue2Error.cs` |

