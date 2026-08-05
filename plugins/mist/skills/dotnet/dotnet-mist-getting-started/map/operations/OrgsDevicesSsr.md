# OrgsDevicesSsr — operations

Accessor: `client.OrgsDevicesSsr` · Source: `Api/OrgsDevicesSsr.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrg128TregistrationCommands
- **HTTP**: `GET /api/v1/orgs/{org_id}/128routers/register_cmd` (ApiHost (api))
- **Notes**: 128T devices can be managed/adopted by Mist.
- **Signature**: `GetOrg128TregistrationCommands(Guid orgId, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ttl` ← `ttl`
- **Returns**: `ResponseRouter128TRegisterCmd`
- **Error**: `SdkException<GetOrg128TregistrationCommandsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
