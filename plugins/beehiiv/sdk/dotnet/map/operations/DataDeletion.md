<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataDeletion — operations

Accessor: `client.DataDeletion` · Source: `src/Beehiiv/Api/DataDeletion.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create5

- **Signature**: `Create5(Create5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `DataDeletionRequestResponse`
- **Error**: `ApiException<Create5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create5Request` | `src/Beehiiv/Requests/DataDeletion/Create5Request.cs` |
| `PublicationsDataPrivacyDeletionRequestsRequest` | `src/Beehiiv/Models/PublicationsDataPrivacyDeletionRequestsRequest.cs` |
| `DataDeletionRequestResponse` | `src/Beehiiv/Models/DataDeletionRequestResponse.cs` |
| `Create5Error` | `src/Beehiiv/Errors/Create5Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index11

- **Signature**: `Index11(Index11Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `DataDeletionRequestIndexResponse`
- **Error**: `ApiException<Index11Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index11Request` | `src/Beehiiv/Requests/DataDeletion/Index11Request.cs` |
| `DataDeletionRequestIndexResponse` | `src/Beehiiv/Models/DataDeletionRequestIndexResponse.cs` |
| `Index11Error` | `src/Beehiiv/Errors/Index11Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show8

- **Signature**: `Show8(Show8Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Id`, `Authorization`
- **Returns**: `DataDeletionRequestResponse`
- **Error**: `ApiException<Show8Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show8Request` | `src/Beehiiv/Requests/DataDeletion/Show8Request.cs` |
| `DataDeletionRequestResponse` | `src/Beehiiv/Models/DataDeletionRequestResponse.cs` |
| `Show8Error` | `src/Beehiiv/Errors/Show8Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

