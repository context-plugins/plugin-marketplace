# AdminsLookup — operations

Accessor: `client.AdminsLookup` · Source: `Api/AdminsLookup.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Lookup
- **HTTP**: `POST /api/v1/login/lookup` (ApiHost (api))
- **Notes**: Login Lookup
- **Signature**: `Lookup(EmailString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseLoginLookup`
- **Error**: `SdkException<LookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
