<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.Agents` · Source: `src/Paid/Api/Agents.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create

- **Signature**: `Create(CreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Agent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateRequest` | `src/Paid/Requests/Agents/CreateRequest.cs` |
| `AgentCreate` | `src/Paid/Models/AgentCreate.cs` |
| `Agent` | `src/Paid/Models/Agent.cs` |

### Delete

- **Signature**: `Delete(DeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AgentId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteRequest` | `src/Paid/Requests/Agents/DeleteRequest.cs` |

### DeleteByExternalId

- **Signature**: `DeleteByExternalId(DeleteByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteByExternalIdRequest` | `src/Paid/Requests/Agents/DeleteByExternalIdRequest.cs` |

### Get

- **Signature**: `Get(GetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AgentId`, `Authorization`
- **Returns**: `Agent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRequest` | `src/Paid/Requests/Agents/GetRequest.cs` |
| `Agent` | `src/Paid/Models/Agent.cs` |

### GetByExternalId

- **Signature**: `GetByExternalId(GetByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Agent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetByExternalIdRequest` | `src/Paid/Requests/Agents/GetByExternalIdRequest.cs` |
| `Agent` | `src/Paid/Models/Agent.cs` |

### List

- **Signature**: `List(ListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `IReadOnlyList<Agent>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRequest` | `src/Paid/Requests/Agents/ListRequest.cs` |
| `Agent` | `src/Paid/Models/Agent.cs` |

### Update

- **Signature**: `Update(UpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AgentId`, `Authorization`
- **Returns**: `Agent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateRequest` | `src/Paid/Requests/Agents/UpdateRequest.cs` |
| `AgentUpdate` | `src/Paid/Models/AgentUpdate.cs` |
| `Agent` | `src/Paid/Models/Agent.cs` |

### UpdateByExternalId

- **Signature**: `UpdateByExternalId(UpdateByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Agent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateByExternalIdRequest` | `src/Paid/Requests/Agents/UpdateByExternalIdRequest.cs` |
| `AgentUpdate` | `src/Paid/Models/AgentUpdate.cs` |
| `Agent` | `src/Paid/Models/Agent.cs` |

