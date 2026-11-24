<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.Connections` · Source: `src/PrismaReviews/Api/Connections.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConnectLink

- **Auth**: `options.ApiKey`
- **Signature**: `CreateConnectLink(CreateConnectLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ConnectLink`
- **Error**: `ApiException<CreateConnectLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateConnectLinkRequest` | `src/PrismaReviews/Requests/Connections/CreateConnectLinkRequest.cs` |
| `V1ConnectLinksRequest` | `src/PrismaReviews/Models/V1ConnectLinksRequest.cs` |
| `ConnectLink` | `src/PrismaReviews/Models/ConnectLink.cs` |
| `CreateConnectLinkError` | `src/PrismaReviews/Errors/CreateConnectLinkError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### CreateConnection

- **Auth**: `options.ApiKey`
- **Signature**: `CreateConnection(CreateConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ConnectionCreated`
- **Error**: `ApiException<CreateConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 422, 429, 500, 501, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateConnectionRequest` | `src/PrismaReviews/Requests/Connections/CreateConnectionRequest.cs` |
| `ConnectionInput` | `src/PrismaReviews/Models/ConnectionInput.cs` |
| `ConnectionCreated` | `src/PrismaReviews/Models/ConnectionCreated.cs` |
| `CreateConnectionError` | `src/PrismaReviews/Errors/CreateConnectionError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### DeleteConnection

- **Auth**: `options.ApiKey`
- **Signature**: `DeleteConnection(DeleteConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ConnectionDeleted`
- **Error**: `ApiException<DeleteConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteConnectionRequest` | `src/PrismaReviews/Requests/Connections/DeleteConnectionRequest.cs` |
| `ConnectionDeleted` | `src/PrismaReviews/Models/ConnectionDeleted.cs` |
| `DeleteConnectionError` | `src/PrismaReviews/Errors/DeleteConnectionError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### ListConnections

- **Auth**: `options.ApiKey`
- **Signature**: `ListConnections(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ConnectionList`
- **Error**: `ApiException<ListConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConnectionList` | `src/PrismaReviews/Models/ConnectionList.cs` |
| `ListConnectionsError` | `src/PrismaReviews/Errors/ListConnectionsError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

