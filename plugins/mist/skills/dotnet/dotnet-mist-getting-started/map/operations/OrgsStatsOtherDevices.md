# OrgsStatsOtherDevices — operations

Accessor: `client.OrgsStatsOtherDevices` · Source: `Api/OrgsStatsOtherDevices.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgOtherDeviceStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/otherdevices/{device_mac}` (ApiHost (api))
- **Notes**: Get Otherdevice Stats
- **Signature**: `GetOrgOtherDeviceStats(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatsDeviceOther`
- **Error**: `SdkException<GetOrgOtherDeviceStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
