# MspsSles — operations

Accessor: `client.MspsSles` · Source: `Api/MspsSles.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMspSle
- **HTTP**: `GET /api/v1/msps/{msp_id}/insights/{metric}` (ApiHost (api))
- **Notes**: Get MSP SLEs (all/worst Orgs ...)
- **Signature**: `GetMspSle(Guid mspId, string metric, string? sle, string? interval, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sle` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `sle` ← `sle`, `duration` ← `duration`, `interval` ← `interval`, `start` ← `start`, `end` ← `end`
- **Returns**: `InsightMetrics`
- **Error**: `SdkException<GetMspSleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
