# MspsTickets — operations

Accessor: `client.MspsTickets` · Source: `Api/MspsTickets.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountMspTickets
- **HTTP**: `GET /api/v1/msps/{msp_id}/tickets/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of tickets
- **Signature**: `CountMspTickets(Guid mspId, MspTicketsCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountMspTicketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspTickets
- **HTTP**: `GET /api/v1/msps/{msp_id}/tickets` (ApiHost (api))
- **Notes**: Get List of Tickets of a MSP
- **Signature**: `ListMspTickets(Guid mspId, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `IReadOnlyList<Ticket>`
- **Error**: `SdkException<ListMspTicketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
