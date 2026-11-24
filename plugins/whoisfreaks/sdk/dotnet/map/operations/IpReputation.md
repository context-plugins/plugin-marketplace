<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpReputation — operations

Accessor: `client.IpReputation` · Source: `src/WhoisFreaks/Api/IpReputation.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkIpReputation

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `BulkIpReputation(BulkIpReputationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<IpReputationResponse>`
- **Error**: `ApiException<BulkIpReputationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkIpReputationRequest` | `src/WhoisFreaks/Requests/IpReputation/BulkIpReputationRequest.cs` |
| `V10SecurityRequest` | `src/WhoisFreaks/Models/V10SecurityRequest.cs` |
| `IpReputationResponse` | `src/WhoisFreaks/Models/IpReputationResponse.cs` |
| `BulkIpReputationError` | `src/WhoisFreaks/Errors/BulkIpReputationError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### IpReputationInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `IpReputationInvoke(IpReputationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `IpReputationResponse`
- **Error**: `ApiException<IpReputationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IpReputationRequest` | `src/WhoisFreaks/Requests/IpReputation/IpReputationRequest.cs` |
| `IpReputationResponse` | `src/WhoisFreaks/Models/IpReputationResponse.cs` |
| `IpReputationError` | `src/WhoisFreaks/Errors/IpReputationError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

