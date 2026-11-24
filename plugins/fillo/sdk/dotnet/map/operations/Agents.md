<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.Agents` · Source: `src/Fillo/Api/Agents.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAgentGrants

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAgentGrants(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageAgentsResponse`
- **Error**: `ApiException<ListAgentGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageAgentsResponse` | `src/Fillo/Models/ApiV1ManageAgentsResponse.cs` |
| `ListAgentGrantsError` | `src/Fillo/Errors/ListAgentGrantsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RevokeAgentGrant

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeAgentGrant(RevokeAgentGrantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageAgentsResponse1`
- **Error**: `ApiException<RevokeAgentGrantError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeAgentGrantRequest` | `src/Fillo/Requests/Agents/RevokeAgentGrantRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageAgentsResponse1` | `src/Fillo/Models/ApiV1ManageAgentsResponse1.cs` |
| `RevokeAgentGrantError` | `src/Fillo/Errors/RevokeAgentGrantError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

