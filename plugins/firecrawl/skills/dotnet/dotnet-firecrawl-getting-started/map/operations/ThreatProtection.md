# ThreatProtection — operations

Accessor: `client.ThreatProtection` · Source: `Api/ThreatProtection.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetThreatProtection
- **HTTP**: `GET /team/threat-protection` (Default (api))
- **Signature**: `GetThreatProtection(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamThreatProtectionResponse`
- **Error**: `SdkException<GetThreatProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateThreatProtection
- **HTTP**: `PUT /team/threat-protection` (Default (api))
- **Notes**: Full-document update. Unspecified fields reset to defaults. Enterprise feature, team admins only.
- **Signature**: `UpdateThreatProtection(TeamThreatProtectionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamThreatProtectionResponse`
- **Error**: `SdkException<UpdateThreatProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
