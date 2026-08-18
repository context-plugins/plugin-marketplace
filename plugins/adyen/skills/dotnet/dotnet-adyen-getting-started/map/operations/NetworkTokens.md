<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkTokens — operations

Accessor: `client.NetworkTokens` · Source: `Api/NetworkTokens.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetNetworkTokensNetworkTokenId
- **Server group**: `Default13`
- **Signature**: `GetNetworkTokensNetworkTokenId(string networkTokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GetNetworkTokenResponse`
- **Error**: `SdkException<GetNetworkTokensNetworkTokenIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetNetworkTokenResponse` | `Models/GetNetworkTokenResponse.cs` |
| `GetNetworkTokensNetworkTokenIdError` | `Errors/GetNetworkTokensNetworkTokenIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchNetworkTokensNetworkTokenId
- **Server group**: `Default13`
- **Signature**: `PatchNetworkTokensNetworkTokenId(string networkTokenId, UpdateNetworkTokenRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchNetworkTokensNetworkTokenIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateNetworkTokenRequest` | `Models/UpdateNetworkTokenRequest.cs` |
| `PatchNetworkTokensNetworkTokenIdError` | `Errors/PatchNetworkTokensNetworkTokenIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

