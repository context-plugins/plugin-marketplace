# PublicKeyApi — operations

Accessor: `client.PublicKeyApi` · Source: `Api/PublicKeyApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPublicKey
- **HTTP**: `GET /public_key/{public_key_id}` (Default (api))
- **Signature**: `GetPublicKey(string publicKeyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PublicKey`
- **Error**: `SdkException<GetPublicKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
