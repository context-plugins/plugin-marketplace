<!-- Generated file — do not edit; regenerated with the SDK. -->

# StorageBuckets — operations

Accessor: `client.StorageBuckets` · Source: `src/UiPath/Api/StorageBuckets.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListStorageBuckets

- **Auth**: `options.BearerAuth`
- **Signature**: `ListStorageBuckets(ListStorageBucketsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataStorageBucketCollection`
- **Error**: `ApiException<ListStorageBucketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStorageBucketsRequest` | `src/UiPath/Requests/StorageBuckets/ListStorageBucketsRequest.cs` |
| `ODataStorageBucketCollection` | `src/UiPath/Models/ODataStorageBucketCollection.cs` |
| `ListStorageBucketsError` | `src/UiPath/Errors/ListStorageBucketsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

