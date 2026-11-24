<!-- Generated file — do not edit; regenerated with the SDK. -->

# Heartbeats — operations

Accessor: `client.Heartbeats` · Source: `src/BetterStack/Api/Heartbeats.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateHeartbeat

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateHeartbeat(CreateHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateHeartbeatRequest` | `src/BetterStack/Requests/Heartbeats/CreateHeartbeatRequest.cs` |
| `HeartbeatCreate` | `src/BetterStack/Models/HeartbeatCreate.cs` |

### DeleteHeartbeat

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteHeartbeat(DeleteHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteHeartbeatRequest` | `src/BetterStack/Requests/Heartbeats/DeleteHeartbeatRequest.cs` |

### GetHeartbeat

- **Auth**: `options.BearerAuth`
- **Signature**: `GetHeartbeat(GetHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetHeartbeatRequest` | `src/BetterStack/Requests/Heartbeats/GetHeartbeatRequest.cs` |

### GetHeartbeatAvailability

- **Auth**: `options.BearerAuth`
- **Signature**: `GetHeartbeatAvailability(GetHeartbeatAvailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetHeartbeatAvailabilityRequest` | `src/BetterStack/Requests/Heartbeats/GetHeartbeatAvailabilityRequest.cs` |

### ListHeartbeats

- **Auth**: `options.BearerAuth`
- **Signature**: `ListHeartbeats(ListHeartbeatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`, `page` ← `Page`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListHeartbeatsRequest` | `src/BetterStack/Requests/Heartbeats/ListHeartbeatsRequest.cs` |

### UpdateHeartbeat

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateHeartbeat(UpdateHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateHeartbeatRequest` | `src/BetterStack/Requests/Heartbeats/UpdateHeartbeatRequest.cs` |
| `HeartbeatCreate` | `src/BetterStack/Models/HeartbeatCreate.cs` |

