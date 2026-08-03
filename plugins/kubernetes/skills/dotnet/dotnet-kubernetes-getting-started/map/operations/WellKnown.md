# WellKnown — operations

Accessor: `client.WellKnown` · Source: `Api/WellKnown.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetServiceAccountIssuerOpenIdconfiguration
- **HTTP**: `GET /.well-known/openid-configuration/` (Default)
- **Signature**: `GetServiceAccountIssuerOpenIdconfiguration(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<GetServiceAccountIssuerOpenIdconfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
