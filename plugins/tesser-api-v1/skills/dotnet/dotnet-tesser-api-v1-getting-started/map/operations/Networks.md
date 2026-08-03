# Networks — operations

Accessor: `client.Networks` · Source: `Api/Networks.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetNetworks
- **HTTP**: `GET /networks` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve list of all supported blockchain networks. Returns an array with network key and display name.
- **Signature**: `GetNetworks(string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Network>`
- **Error**: `SdkException<GetNetworksError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
