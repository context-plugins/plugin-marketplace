# NetworkTokens — operations

Accessor: `client.NetworkTokens` · Source: `Api/NetworkTokens.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetNetworkTokensNetworkTokenId
- **HTTP**: `GET /networkTokens/{networkTokenId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a network token.
- **Signature**: `GetNetworkTokensNetworkTokenId(string networkTokenId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetNetworkTokenResponse`
- **Error**: `SdkException<GetNetworkTokensNetworkTokenIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchNetworkTokensNetworkTokenId
- **HTTP**: `PATCH /networkTokens/{networkTokenId}` (Default (balanceplatform-api-test))
- **Notes**: Updates the status of the network token.
- **Signature**: `PatchNetworkTokensNetworkTokenId(string networkTokenId, UpdateNetworkTokenRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchNetworkTokensNetworkTokenIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
