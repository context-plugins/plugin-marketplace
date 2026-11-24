<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.Connections` · Source: `src/Basiq/Api/Connections.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteConnection

- **Auth**: `options.ServicesToken`
- **Signature**: `DeleteConnection(DeleteConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `ConnectionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConnections400Error1([NotNullWhen(true)] out UsersConnections400Error1? value)` [400] · `TryGetUsersConnections403Error1([NotNullWhen(true)] out UsersConnections403Error1? value)` [403] · `TryGetUsersConnections404Error1([NotNullWhen(true)] out UsersConnections404Error1? value)` [404] · `TryGetUsersConnections500Error1([NotNullWhen(true)] out UsersConnections500Error1? value)` [500] · `TryGetUsersConnections503Error1([NotNullWhen(true)] out UsersConnections503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteConnectionRequest` | `src/Basiq/Requests/Connections/DeleteConnectionRequest.cs` |
| `DeleteConnectionError` | `src/Basiq/Errors/DeleteConnectionError.cs` |
| `UsersConnections400Error1` | `src/Basiq/Models/UsersConnections400Error1.cs` |
| `UsersConnections403Error1` | `src/Basiq/Models/UsersConnections403Error1.cs` |
| `UsersConnections404Error1` | `src/Basiq/Models/UsersConnections404Error1.cs` |
| `UsersConnections500Error1` | `src/Basiq/Models/UsersConnections500Error1.cs` |
| `UsersConnections503Error1` | `src/Basiq/Models/UsersConnections503Error1.cs` |

### GetConnection

- **Auth**: `options.ServicesToken`
- **Signature**: `GetConnection(GetConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `ConnectionId`
- **Returns**: `ConnectionGetResponseResource`
- **Error**: `ApiException<GetConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConnections400Error1([NotNullWhen(true)] out UsersConnections400Error1? value)` [400] · `TryGetUsersConnections401Error1([NotNullWhen(true)] out UsersConnections401Error1? value)` [401] · `TryGetUsersConnections403Error1([NotNullWhen(true)] out UsersConnections403Error1? value)` [403] · `TryGetUsersConnections404Error1([NotNullWhen(true)] out UsersConnections404Error1? value)` [404] · `TryGetUsersConnections500Error1([NotNullWhen(true)] out UsersConnections500Error1? value)` [500] · `TryGetUsersConnections503Error1([NotNullWhen(true)] out UsersConnections503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConnectionRequest` | `src/Basiq/Requests/Connections/GetConnectionRequest.cs` |
| `ConnectionGetResponseResource` | `src/Basiq/Models/ConnectionGetResponseResource.cs` |
| `GetConnectionError` | `src/Basiq/Errors/GetConnectionError.cs` |
| `UsersConnections400Error1` | `src/Basiq/Models/UsersConnections400Error1.cs` |
| `UsersConnections401Error1` | `src/Basiq/Models/UsersConnections401Error1.cs` |
| `UsersConnections403Error1` | `src/Basiq/Models/UsersConnections403Error1.cs` |
| `UsersConnections404Error1` | `src/Basiq/Models/UsersConnections404Error1.cs` |
| `UsersConnections500Error1` | `src/Basiq/Models/UsersConnections500Error1.cs` |
| `UsersConnections503Error1` | `src/Basiq/Models/UsersConnections503Error1.cs` |

### GetConnections

- **Auth**: `options.ServicesToken`
- **Signature**: `GetConnections(GetConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `ConnectionsGetResponseResource`
- **Error**: `ApiException<GetConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConnections400Error1([NotNullWhen(true)] out UsersConnections400Error1? value)` [400] · `TryGetUsersConnections403Error1([NotNullWhen(true)] out UsersConnections403Error1? value)` [403] · `TryGetUsersConnections404Error1([NotNullWhen(true)] out UsersConnections404Error1? value)` [404] · `TryGetUsersConnections500Error1([NotNullWhen(true)] out UsersConnections500Error1? value)` [500] · `TryGetUsersConnections503Error1([NotNullWhen(true)] out UsersConnections503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConnectionsRequest` | `src/Basiq/Requests/Connections/GetConnectionsRequest.cs` |
| `ConnectionsGetResponseResource` | `src/Basiq/Models/ConnectionsGetResponseResource.cs` |
| `GetConnectionsError` | `src/Basiq/Errors/GetConnectionsError.cs` |
| `UsersConnections400Error1` | `src/Basiq/Models/UsersConnections400Error1.cs` |
| `UsersConnections403Error1` | `src/Basiq/Models/UsersConnections403Error1.cs` |
| `UsersConnections404Error1` | `src/Basiq/Models/UsersConnections404Error1.cs` |
| `UsersConnections500Error1` | `src/Basiq/Models/UsersConnections500Error1.cs` |
| `UsersConnections503Error1` | `src/Basiq/Models/UsersConnections503Error1.cs` |

### PurgeConnectionData

- **Auth**: `options.ServicesToken`
- **Signature**: `PurgeConnectionData(PurgeConnectionDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `ConnectionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PurgeConnectionDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConnectionsPurge400Error1([NotNullWhen(true)] out UsersConnectionsPurge400Error1? value)` [400] · `TryGetUsersConnectionsPurge403Error1([NotNullWhen(true)] out UsersConnectionsPurge403Error1? value)` [403] · `TryGetUsersConnectionsPurge404Error1([NotNullWhen(true)] out UsersConnectionsPurge404Error1? value)` [404] · `TryGetUsersConnectionsPurge500Error1([NotNullWhen(true)] out UsersConnectionsPurge500Error1? value)` [500] · `TryGetUsersConnectionsPurge503Error1([NotNullWhen(true)] out UsersConnectionsPurge503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurgeConnectionDataRequest` | `src/Basiq/Requests/Connections/PurgeConnectionDataRequest.cs` |
| `PurgeConnectionDataError` | `src/Basiq/Errors/PurgeConnectionDataError.cs` |
| `UsersConnectionsPurge400Error1` | `src/Basiq/Models/UsersConnectionsPurge400Error1.cs` |
| `UsersConnectionsPurge403Error1` | `src/Basiq/Models/UsersConnectionsPurge403Error1.cs` |
| `UsersConnectionsPurge404Error1` | `src/Basiq/Models/UsersConnectionsPurge404Error1.cs` |
| `UsersConnectionsPurge500Error1` | `src/Basiq/Models/UsersConnectionsPurge500Error1.cs` |
| `UsersConnectionsPurge503Error1` | `src/Basiq/Models/UsersConnectionsPurge503Error1.cs` |

### RefreshConnection

- **Auth**: `options.ServicesToken`
- **Signature**: `RefreshConnection(RefreshConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `ConnectionId`
- **Returns**: `ConnectionResponseResource`
- **Error**: `ApiException<RefreshConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConnectionsRefresh400Error1([NotNullWhen(true)] out UsersConnectionsRefresh400Error1? value)` [400] · `TryGetUsersConnectionsRefresh403Error1([NotNullWhen(true)] out UsersConnectionsRefresh403Error1? value)` [403] · `TryGetUsersConnectionsRefresh404Error1([NotNullWhen(true)] out UsersConnectionsRefresh404Error1? value)` [404] · `TryGetUsersConnectionsRefresh500Error1([NotNullWhen(true)] out UsersConnectionsRefresh500Error1? value)` [500] · `TryGetUsersConnectionsRefresh503Error1([NotNullWhen(true)] out UsersConnectionsRefresh503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshConnectionRequest` | `src/Basiq/Requests/Connections/RefreshConnectionRequest.cs` |
| `ConnectionResponseResource` | `src/Basiq/Models/ConnectionResponseResource.cs` |
| `RefreshConnectionError` | `src/Basiq/Errors/RefreshConnectionError.cs` |
| `UsersConnectionsRefresh400Error1` | `src/Basiq/Models/UsersConnectionsRefresh400Error1.cs` |
| `UsersConnectionsRefresh403Error1` | `src/Basiq/Models/UsersConnectionsRefresh403Error1.cs` |
| `UsersConnectionsRefresh404Error1` | `src/Basiq/Models/UsersConnectionsRefresh404Error1.cs` |
| `UsersConnectionsRefresh500Error1` | `src/Basiq/Models/UsersConnectionsRefresh500Error1.cs` |
| `UsersConnectionsRefresh503Error1` | `src/Basiq/Models/UsersConnectionsRefresh503Error1.cs` |

### RefreshConnections

- **Auth**: `options.ServicesToken`
- **Signature**: `RefreshConnections(RefreshConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `ConnectionsRefreshResource`
- **Error**: `ApiException<RefreshConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConnectionsRefresh400Error1([NotNullWhen(true)] out UsersConnectionsRefresh400Error1? value)` [400] · `TryGetUsersConnectionsRefresh403Error1([NotNullWhen(true)] out UsersConnectionsRefresh403Error1? value)` [403] · `TryGetUsersConnectionsRefresh404Error1([NotNullWhen(true)] out UsersConnectionsRefresh404Error1? value)` [404] · `TryGetUsersConnectionsRefresh500Error1([NotNullWhen(true)] out UsersConnectionsRefresh500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshConnectionsRequest` | `src/Basiq/Requests/Connections/RefreshConnectionsRequest.cs` |
| `ConnectionsRefreshResource` | `src/Basiq/Models/ConnectionsRefreshResource.cs` |
| `RefreshConnectionsError` | `src/Basiq/Errors/RefreshConnectionsError.cs` |
| `UsersConnectionsRefresh400Error1` | `src/Basiq/Models/UsersConnectionsRefresh400Error1.cs` |
| `UsersConnectionsRefresh403Error1` | `src/Basiq/Models/UsersConnectionsRefresh403Error1.cs` |
| `UsersConnectionsRefresh404Error1` | `src/Basiq/Models/UsersConnectionsRefresh404Error1.cs` |
| `UsersConnectionsRefresh500Error1` | `src/Basiq/Models/UsersConnectionsRefresh500Error1.cs` |

