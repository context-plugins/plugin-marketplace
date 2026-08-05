# UtilitiesWiFi — operations

Accessor: `client.UtilitiesWiFi` · Source: `Api/UtilitiesWiFi.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeauthSiteWirelessClientsConnectedToArogue
- **HTTP**: `POST /api/v1/sites/{site_id}/rogues/{rogue_bssid}/deauth_clients` (ApiHost (api))
- **Notes**: Send Deauth frame to clients connected to a Rogue AP
- **Signature**: `DeauthSiteWirelessClientsConnectedToArogue(Guid siteId, string rogueBssid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeauthSiteWirelessClientsConnectedToArogueError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisconnectSiteMultipleClients
- **HTTP**: `POST /api/v1/sites/{site_id}/clients/disconnect` (ApiHost (api))
- **Notes**: To unauthorize multiple clients
- **Signature**: `DisconnectSiteMultipleClients(Guid siteId, IReadOnlyList<string>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DisconnectSiteMultipleClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisconnectSiteWirelessClient
- **HTTP**: `POST /api/v1/sites/{site_id}/clients/{client_mac}/disconnect` (ApiHost (api))
- **Notes**: This disconnect a client (and it’s likely to connect back)
- **Signature**: `DisconnectSiteWirelessClient(Guid siteId, string clientMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DisconnectSiteWirelessClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OptimizeSiteRrm
- **HTTP**: `POST /api/v1/sites/{site_id}/rrm/optimize` (ApiHost (api))
- **Notes**: Optimize Site RRM
- **Signature**: `OptimizeSiteRrm(Guid siteId, UtilsRrmOptimize? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OptimizeSiteRrmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReauthOrgDot1XWirelessClient
- **HTTP**: `POST /api/v1/orgs/{org_id}/clients/{client_mac}/coa` (ApiHost (api))
- **Notes**: Trigger a CoA (change of authorization) against a client
- **Signature**: `ReauthOrgDot1XWirelessClient(Guid orgId, string clientMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReauthOrgDot1XWirelessClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReauthSiteDot1XWirelessClient
- **HTTP**: `POST /api/v1/sites/{site_id}/clients/{client_mac}/coa` (ApiHost (api))
- **Notes**: Trigger a CoA (change of authorization) against a Wireless client
- **Signature**: `ReauthSiteDot1XWirelessClient(Guid siteId, string clientMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReauthSiteDot1XWirelessClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReprovisionSiteAllDevices
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/reprovision` (ApiHost (api))
- **Notes**: To force all Devices to reprovision itself again.
- **Signature**: `ReprovisionSiteAllDevices(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReprovisionSiteAllDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResetSiteAllApsToUseRrm
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/reset_radio_config` (ApiHost (api))
- **Notes**: Reset all APs in the Site to use RRM
- **Signature**: `ResetSiteAllApsToUseRrm(Guid siteId, UtilsResetRadioConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ResetSiteAllApsToUseRrmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestSiteWlanSmsGlobal
- **HTTP**: `POST /api/v1/utils/test_smsglobal` (ApiHost (api))
- **Notes**: Allows validation of Global sms gateway credentials. In case of success, a text message confirming successful setup should be received. In case of error, smsglobal error message are returned.
- **Signature**: `TestSiteWlanSmsGlobal(TestSmsGlobal? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TestSiteWlanSmsGlobalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestSiteWlanTelstraSetup
- **HTTP**: `POST /api/v1/utils/test_telstra` (ApiHost (api))
- **Notes**: Allows validation of Telstra sms gateway credentials. In case of success, a text message confirming successful setup should be received. In case of error, telstra error message are returned.
- **Signature**: `TestSiteWlanTelstraSetup(TestTelstra? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TestSiteWlanTelstraSetupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestSiteWlanTwilioSetup
- **HTTP**: `POST /api/v1/utils/test_twilio` (ApiHost (api))
- **Notes**: Allows validation of twilio setup In case of success, a text message confirming successful setup should be received. In case of error, twilio error code and message are returned.
- **Signature**: `TestSiteWlanTwilioSetup(TestTwilio? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TestSiteWlanTwilioSetupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnauthorizeSiteMultipleClients
- **HTTP**: `POST /api/v1/sites/{site_id}/clients/unauthorize` (ApiHost (api))
- **Notes**: This unauthorize clients (if they are guest) and disconnect them. From the guest’s perspective, they will see the splash page again and go through the flow (e.g. Terms of Use) again.
- **Signature**: `UnauthorizeSiteMultipleClients(Guid siteId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnauthorizeSiteMultipleClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnauthorizeSiteWirelessClient
- **HTTP**: `POST /api/v1/sites/{site_id}/clients/{client_mac}/unauthorize` (ApiHost (api))
- **Notes**: This unauthorize a client (if it’s a guest) and disconnect it. From the guest’s perspective, s/he will see the splash page again and go through the flow (e.g. Terms of Use) again.
- **Signature**: `UnauthorizeSiteWirelessClient(Guid siteId, string clientMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnauthorizeSiteWirelessClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ZeroizeSiteFipsAllAps
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/zeroize` (ApiHost (api))
- **Notes**: Zeroize all FIPS APs in the Site
- **Signature**: `ZeroizeSiteFipsAllAps(Guid siteId, UtilsZeroizeFips? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ZeroizeSiteFipsAllApsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
