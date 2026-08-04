# AuthenticationExtrasExchange — operations

Accessor: `client.AuthenticationExtrasExchange` · Source: `Api/AuthenticationExtrasExchange.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExchangeAuthCode
- **HTTP**: `POST /oauth/access_token` (Default (api))
- **Notes**: This method exchanges an OAuth authorization code for an OAuth access token.
- **Signature**: `ExchangeAuthCode(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ExchangeAuthCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
