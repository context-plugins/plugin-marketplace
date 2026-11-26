<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForceDreamClient — operations

Accessor: `client` · Source: `src/ForceDream/ForceDreamClient.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAgentReliability

- **Signature**: `GetAgentReliability(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReliabilityListResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReliabilityListResult` | `src/ForceDream/Models/ReliabilityListResult.cs` |

### GetBalance

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BalanceResult`
- **Error**: `ApiException<GetBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1([NotNullWhen(true)] out Unauthorized1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceResult` | `src/ForceDream/Models/BalanceResult.cs` |
| `GetBalanceError` | `src/ForceDream/Errors/GetBalanceError.cs` |
| `Unauthorized1` | `src/ForceDream/Models/Unauthorized1.cs` |

### GetInvokeResult

- **Auth**: `options.BearerAuth`
- **Signature**: `GetInvokeResult(GetInvokeResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `TaskId`
- **Returns**: `InvokeResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetInvokeResultRequest` | `src/ForceDream/Requests/GetInvokeResultRequest.cs` |
| `InvokeResult` | `src/ForceDream/Models/InvokeResult.cs` |

### GetProof

- **Signature**: `GetProof(GetProofRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Returns**: `V1WorkforceProofPublicResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetProofRequest` | `src/ForceDream/Requests/GetProofRequest.cs` |
| `V1WorkforceProofPublicResponse` | `src/ForceDream/Models/V1WorkforceProofPublicResponse.cs` |

### GetProofPublicKey

- **Signature**: `GetProofPublicKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1WorkforceProofPublicKeyResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1WorkforceProofPublicKeyResponse` | `src/ForceDream/Models/V1WorkforceProofPublicKeyResponse.cs` |

### InvokeAgent

- **Auth**: `options.BearerAuth`
- **Signature**: `InvokeAgent(InvokeAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `Body`
- **Returns**: `V1AgentsInvokeResponse`
- **Error**: `ApiException<InvokeAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1([NotNullWhen(true)] out Unauthorized1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InvokeAgentRequest` | `src/ForceDream/Requests/InvokeAgentRequest.cs` |
| `V1AgentsInvokeRequest` | `src/ForceDream/Models/V1AgentsInvokeRequest.cs` |
| `V1AgentsInvokeResponse` | `src/ForceDream/Models/V1AgentsInvokeResponse.cs` |
| `InvokeAgentError` | `src/ForceDream/Errors/InvokeAgentError.cs` |
| `Unauthorized1` | `src/ForceDream/Models/Unauthorized1.cs` |

### ListAgents

- **Signature**: `ListAgents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AgentListResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AgentListResult` | `src/ForceDream/Models/AgentListResult.cs` |

### Signup

- **Signature**: `Signup(SignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SignupResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SignupRequest` | `src/ForceDream/Requests/SignupRequest.cs` |
| `ApiSignupRequest` | `src/ForceDream/Models/ApiSignupRequest.cs` |
| `SignupResult` | `src/ForceDream/Models/SignupResult.cs` |

