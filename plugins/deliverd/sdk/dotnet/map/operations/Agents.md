<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.Agents` · Source: `src/Deliverd/Api/Agents.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Agents

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Agents(GetApiV1AgentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1AgentsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AgentsRequest` | `src/Deliverd/Requests/Agents/GetApiV1AgentsRequest.cs` |
| `ApiV1AgentsResponse` | `src/Deliverd/Models/ApiV1AgentsResponse.cs` |

### GetApiV1AgentsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1AgentsById(GetApiV1AgentsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AgentsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AgentsByIdRequest` | `src/Deliverd/Requests/Agents/GetApiV1AgentsByIdRequest.cs` |
| `ApiV1AgentsResponse1` | `src/Deliverd/Models/ApiV1AgentsResponse1.cs` |

