# MspsLicenses — operations

Accessor: `client.MspsLicenses` · Source: `Api/MspsLicenses.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClaimMspLicense
- **HTTP**: `POST /api/v1/msps/{msp_id}/claim` (ApiHost (api))
- **Notes**: Claim an Order by Activation Code
- **Signature**: `ClaimMspLicense(Guid mspId, CodeString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseClaimLicense`
- **Error**: `SdkException<ClaimMspLicenseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspLicenses
- **HTTP**: `GET /api/v1/msps/{msp_id}/licenses` (ApiHost (api))
- **Notes**: Get List of Msp Licenses
- **Signature**: `ListMspLicenses(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `License`
- **Error**: `SdkException<ListMspLicensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspOrgLicenses
- **HTTP**: `GET /api/v1/msps/{msp_id}/stats/licenses` (ApiHost (api))
- **Notes**: Get List of MSP Licenses
- **Signature**: `ListMspOrgLicenses(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `License`
- **Error**: `SdkException<ListMspOrgLicensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MoveOrDeleteMspLicenseToAnotherOrg
- **HTTP**: `PUT /api/v1/msps/{msp_id}/licenses` (ApiHost (api))
- **Notes**: Move or Delete MSP Licenses
- **Signature**: `MoveOrDeleteMspLicenseToAnotherOrg(Guid mspId, MspLicenseAction? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<MoveOrDeleteMspLicenseToAnotherOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
