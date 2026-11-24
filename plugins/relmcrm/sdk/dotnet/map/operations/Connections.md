<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.Connections` · Source: `src/RelmCrm/Api/Connections.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConnection

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateConnection(CreateConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateConnectionRequest` | `src/RelmCrm/Requests/Connections/CreateConnectionRequest.cs` |
| `ConnectionsRequest` | `src/RelmCrm/Models/ConnectionsRequest.cs` |

### DeleteConnection

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteConnection(DeleteConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteConnectionRequest` | `src/RelmCrm/Requests/Connections/DeleteConnectionRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### ListConnections

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListConnections(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

