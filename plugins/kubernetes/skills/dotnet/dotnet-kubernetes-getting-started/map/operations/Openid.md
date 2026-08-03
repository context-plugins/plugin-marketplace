# Openid — operations

Accessor: `client.Openid` · Source: `Api/Openid.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetServiceAccountIssuerOpenIdkeyset
- **HTTP**: `GET /openid/v1/jwks/` (Default)
- **Signature**: `GetServiceAccountIssuerOpenIdkeyset(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetServiceAccountIssuerOpenIdkeysetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
