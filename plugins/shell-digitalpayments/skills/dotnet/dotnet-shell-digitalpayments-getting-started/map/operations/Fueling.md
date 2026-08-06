# Fueling — operations

Accessor: `client.Fueling` · Source: `Api/Fueling.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MppCancelFueling
- **HTTP**: `DELETE /Fueling/v1/fueling/{mppTransactionId}` (Shell (api-test))
- **Notes**: Enables a partner user to cancel pump reservation from the App
- **Signature**: `MppCancelFueling(string mppTransactionId = "000000001C48", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `mppTransactionId` = "000000001C48", `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<MppCancelFuelingError>` — **Case A (typed)**
- **Error accessors**: `TryGetCancelFuelingErrorResponse(out CancelFuelingErrorResponse)` [400, 401] · `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MppPrepareFueling
- **HTTP**: `POST /Fueling/v1/fueling` (Shell (api-test))
- **Notes**: Enables a 3rd party to request to unlock a pump so that they may fill up to a pre-authorised limit. The fuel types that are unlocked may also be determined by permitted fuels stored against the user/entity profile
- **Signature**: `MppPrepareFueling(PrepareFuelingRequest body, string siteCountry = "NL", string currency = "EUR", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `siteCountry` = "NL", `currency` = "EUR", `requestOptions` = null
- **Query params (wire ← C#)**: `siteCountry` ← `siteCountry`, `currency` ← `currency`
- **Returns**: `PrepareFuelingResponse`
- **Error**: `SdkException<MppPrepareFuelingError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400, 401] · `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MppToken
- **HTTP**: `POST /Fueling/v1/oauth/token` (Shell (api-test))
- **Notes**: The Digital Payments Service enables 3rd Parties to trigger the refuel process which, if successful, will unlock a pump/nozzle ready for fuelling. Enables a 3rd party to request an access token to start using fueling. APIs
- **Signature**: `MppToken(string grantType, string clientId, string clientSecret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `grant_type` ← `grantType`, `client_id` ← `clientId`, `client_secret` ← `clientSecret`
- **Returns**: `MppAccesTokenResponse`
- **Error**: `SdkException<MppTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMppAccesTokenErrorResponse(out MppAccesTokenErrorResponse)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
