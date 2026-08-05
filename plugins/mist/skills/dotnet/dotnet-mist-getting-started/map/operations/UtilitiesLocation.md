# UtilitiesLocation — operations

Accessor: `client.UtilitiesLocation` · Source: `Api/UtilitiesLocation.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SendSiteDevicesArbitraryBleBeacon
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/send_ble_beacon` (ApiHost (api))
- **Notes**: Send arbitrary BLE Beacon for a period of time Note that only the devices that are connected will be restarted.
- **Signature**: `SendSiteDevicesArbitraryBleBeacon(Guid siteId, UtilsSendBleBeacon? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SendSiteDevicesArbitraryBleBeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
