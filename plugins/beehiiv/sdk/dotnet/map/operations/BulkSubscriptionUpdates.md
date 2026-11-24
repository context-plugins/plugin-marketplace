<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSubscriptionUpdates — operations

Accessor: `client.BulkSubscriptionUpdates` · Source: `src/Beehiiv/Api/BulkSubscriptionUpdates.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index7

- **Signature**: `Index7(Index7Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `BulkSubscriptionUpdatesListResponse`
- **Error**: `ApiException<Index7Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index7Request` | `src/Beehiiv/Requests/BulkSubscriptionUpdates/Index7Request.cs` |
| `BulkSubscriptionUpdatesListResponse` | `src/Beehiiv/Models/BulkSubscriptionUpdatesListResponse.cs` |
| `Index7Error` | `src/Beehiiv/Errors/Index7Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Patch

- **Signature**: `Patch(PatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `SubscriptionsPatchResponse`
- **Error**: `ApiException<PatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchRequest` | `src/Beehiiv/Requests/BulkSubscriptionUpdates/PatchRequest.cs` |
| `PublicationsSubscriptionsBulkActionsRequest` | `src/Beehiiv/Models/PublicationsSubscriptionsBulkActionsRequest.cs` |
| `SubscriptionsPatchResponse` | `src/Beehiiv/Models/SubscriptionsPatchResponse.cs` |
| `PatchError` | `src/Beehiiv/Errors/PatchError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### PatchStatus

- **Signature**: `PatchStatus(PatchStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PatchStatusRequest` | `src/Beehiiv/Requests/BulkSubscriptionUpdates/PatchStatusRequest.cs` |
| `PublicationsSubscriptionsRequest` | `src/Beehiiv/Models/PublicationsSubscriptionsRequest.cs` |

### Put

- **Signature**: `Put(PutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `SubscriptionsPatchResponse`
- **Error**: `ApiException<PutError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRequest` | `src/Beehiiv/Requests/BulkSubscriptionUpdates/PutRequest.cs` |
| `PublicationsSubscriptionsBulkActionsRequest` | `src/Beehiiv/Models/PublicationsSubscriptionsBulkActionsRequest.cs` |
| `SubscriptionsPatchResponse` | `src/Beehiiv/Models/SubscriptionsPatchResponse.cs` |
| `PutError` | `src/Beehiiv/Errors/PutError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### PutStatus

- **Signature**: `PutStatus(PutStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutStatusRequest` | `src/Beehiiv/Requests/BulkSubscriptionUpdates/PutStatusRequest.cs` |
| `PublicationsSubscriptionsRequest` | `src/Beehiiv/Models/PublicationsSubscriptionsRequest.cs` |

### Show4

- **Signature**: `Show4(Show4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Id`, `Authorization`
- **Returns**: `BulkSubscriptionUpdatesGetResponse`
- **Error**: `ApiException<Show4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show4Request` | `src/Beehiiv/Requests/BulkSubscriptionUpdates/Show4Request.cs` |
| `BulkSubscriptionUpdatesGetResponse` | `src/Beehiiv/Models/BulkSubscriptionUpdatesGetResponse.cs` |
| `Show4Error` | `src/Beehiiv/Errors/Show4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

