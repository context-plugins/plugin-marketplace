# OrgsMarvis — operations

Accessor: `client.OrgsMarvis` · Source: `Api/OrgsMarvis.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TroubleshootOrg
- **HTTP**: `GET /api/v1/orgs/{org_id}/troubleshoot` (ApiHost (api))
- **Notes**: Troubleshoot sites, devices, clients, and wired clients for maximum of last 7 days from current time. See search APIs for device information: - search Device - search Wireless Client - search Wired Client - search Wan Client NOTE : requires Marvis subscription license
- **Signature**: `TroubleshootOrg(Guid orgId, string? mac, Guid? siteId, int? start, int? end, TroubleshootType? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`mac` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `site_id` ← `siteId`, `start` ← `start`, `end` ← `end`, `type` ← `type`
- **Returns**: `ResponseTroubleshoot`
- **Error**: `SdkException<TroubleshootOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
