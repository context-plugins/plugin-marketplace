# Partner — operations

Accessor: `client.Partner` · Source: `Api/Partner.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPublicKeyForAdomain
- **HTTP**: `GET /api/1/partner_accounts/public_key` (Default (fleet-api))
- **Signature**: `GetPublicKeyForAdomain(string domain, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `domain` ← `domain`
- **Returns**: `PublicKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRecentFleetTelemetryErrors
- **HTTP**: `GET /api/1/partner_accounts/fleet_telemetry_errors` (Default (fleet-api))
- **Signature**: `GetRecentFleetTelemetryErrors(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FleetTelemetryErrorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVinsWithFleetTelemetryErrors
- **HTTP**: `GET /api/1/partner_accounts/fleet_telemetry_error_vins` (Default (fleet-api))
- **Signature**: `GetVinsWithFleetTelemetryErrors(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BackupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RegisterApartnerAccount
- **HTTP**: `POST /api/1/partner_accounts` (Default (fleet-api))
- **Signature**: `RegisterApartnerAccount(RegisterPartnerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RegisterPartnerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
