<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.Connections` · Source: `src/DoiT/Api/Connections.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCloudflowConnection

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateCloudflowConnection(CreateCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CloudflowConnection`
- **Error**: `ApiException<CreateCloudflowConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCloudflowConnectionRequest` | `src/DoiT/Requests/Connections/CreateCloudflowConnectionRequest.cs` |
| `CloudflowV1ConnectionsRequest` | `src/DoiT/Models/CloudflowV1ConnectionsRequest.cs` |
| `CloudflowConnection` | `src/DoiT/Models/CloudflowConnection.cs` |
| `CreateCloudflowConnectionError` | `src/DoiT/Errors/CreateCloudflowConnectionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteCloudflowConnection

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteCloudflowConnection(DeleteCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConnectionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCloudflowConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetCloudflowV1Connections409Error1([NotNullWhen(true)] out CloudflowV1Connections409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCloudflowConnectionRequest` | `src/DoiT/Requests/Connections/DeleteCloudflowConnectionRequest.cs` |
| `DeleteCloudflowConnectionError` | `src/DoiT/Errors/DeleteCloudflowConnectionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `CloudflowV1Connections409Error1` | `src/DoiT/Models/CloudflowV1Connections409Error1.cs` |

### GetCloudflowConnection

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudflowConnection(GetCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConnectionId`
- **Returns**: `CloudflowConnection`
- **Error**: `ApiException<GetCloudflowConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudflowConnectionRequest` | `src/DoiT/Requests/Connections/GetCloudflowConnectionRequest.cs` |
| `CloudflowConnection` | `src/DoiT/Models/CloudflowConnection.cs` |
| `GetCloudflowConnectionError` | `src/DoiT/Errors/GetCloudflowConnectionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudflowConnections

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudflowConnections(ListCloudflowConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `CloudflowConnectionListResponse`
- **Error**: `ApiException<ListCloudflowConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudflowConnectionsRequest` | `src/DoiT/Requests/Connections/ListCloudflowConnectionsRequest.cs` |
| `CloudflowConnectionListResponse` | `src/DoiT/Models/CloudflowConnectionListResponse.cs` |
| `ListCloudflowConnectionsError` | `src/DoiT/Errors/ListCloudflowConnectionsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateCloudflowConnection

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateCloudflowConnection(UpdateCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConnectionId`, `Body`
- **Returns**: `CloudflowConnection`
- **Error**: `ApiException<UpdateCloudflowConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCloudflowConnectionRequest` | `src/DoiT/Requests/Connections/UpdateCloudflowConnectionRequest.cs` |
| `CloudflowV1ConnectionsRequest1` | `src/DoiT/Models/CloudflowV1ConnectionsRequest1.cs` |
| `CloudflowConnection` | `src/DoiT/Models/CloudflowConnection.cs` |
| `UpdateCloudflowConnectionError` | `src/DoiT/Errors/UpdateCloudflowConnectionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

