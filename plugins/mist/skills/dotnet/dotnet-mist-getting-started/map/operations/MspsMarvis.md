# MspsMarvis — operations

Accessor: `client.MspsMarvis` · Source: `Api/MspsMarvis.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountMspsMarvisActions
- **HTTP**: `GET /api/v1/msps/{msp_id}/suggestion/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Marvis actions
- **Signature**: `CountMspsMarvisActions(Guid mspId, MspMarvisSuggestionsCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCountMarvisActions`
- **Error**: `SdkException<CountMspsMarvisActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
