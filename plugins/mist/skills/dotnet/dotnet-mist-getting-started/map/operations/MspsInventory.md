# MspsInventory — operations

Accessor: `client.MspsInventory` · Source: `Api/MspsInventory.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMspInventoryByMac
- **HTTP**: `GET /api/v1/msps/{msp_id}/inventory/{device_mac}` (ApiHost (api))
- **Notes**: Get Inventory By device MAC address
- **Signature**: `GetMspInventoryByMac(Guid mspId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMspInventoryDevice`
- **Error**: `SdkException<GetMspInventoryByMacError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
