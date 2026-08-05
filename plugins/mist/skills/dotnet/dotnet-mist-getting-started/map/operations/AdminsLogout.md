# AdminsLogout — operations

Accessor: `client.AdminsLogout` · Source: `Api/AdminsLogout.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Logout
- **HTTP**: `POST /api/v1/logout` (ApiHost (api))
- **Notes**: Logout
- **Signature**: `Logout(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseLogout`
- **Error**: `SdkException<LogoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
