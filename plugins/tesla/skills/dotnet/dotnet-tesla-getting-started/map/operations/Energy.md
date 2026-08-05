# Energy — operations

Accessor: `client.Energy` · Source: `Api/Energy.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdjustSiteSbackupReserve
- **HTTP**: `POST /api/1/energy_sites/{energy_site_id}/backup` (Default (fleet-api))
- **Signature**: `AdjustSiteSbackupReserve(string energySiteId, BackupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BackupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdjustSiteSoffGridVehicleChargingReserve
- **HTTP**: `POST /api/1/energy_sites/{energy_site_id}/off_grid_vehicle_charging_reserve` (Default (fleet-api))
- **Signature**: `AdjustSiteSoffGridVehicleChargingReserve(string energySiteId, OffGridVehicleChargingReserveRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenericUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AllowDisallowChargingFromTheGridAndExportingEnergyToTheGrid
- **HTTP**: `POST /api/1/energy_sites/{energy_site_id}/grid_import_export` (Default (fleet-api))
- **Signature**: `AllowDisallowChargingFromTheGridAndExportingEnergyToTheGrid(string energySiteId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBackupOrEnergyHistory
- **HTTP**: `GET /api/1/energy_sites/{energy_site_id}/calendar_history` (Default (fleet-api))
- **Signature**: `GetBackupOrEnergyHistory(string energySiteId, Kind kind, DateTimeOffset startDate, DateTimeOffset endDate, string? period, string? timeZone, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `period` — nullable, no default → **must pass explicitly**
  - `timeZone` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `kind` ← `kind`, `start_date` ← `startDate`, `end_date` ← `endDate`, `period` ← `period`, `time_zone` ← `timeZone`
- **Returns**: `CalendarHistoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveSiteStatus
- **HTTP**: `GET /api/1/energy_sites/{energy_site_id}/live_status` (Default (fleet-api))
- **Signature**: `GetLiveSiteStatus(string energySiteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LiveStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteInformationAssetsSettingsFeatures
- **HTTP**: `GET /api/1/energy_sites/{energy_site_id}/site_info` (Default (fleet-api))
- **Signature**: `GetSiteInformationAssetsSettingsFeatures(string energySiteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteInfoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUserProductsVehiclesEnergySites
- **HTTP**: `GET /api/1/products` (Default (fleet-api))
- **Signature**: `GetUserProductsVehiclesEnergySites(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWallConnectorChargingHistory
- **HTTP**: `GET /api/1/energy_sites/{energy_site_id}/telemetry_history` (Default (fleet-api))
- **Signature**: `GetWallConnectorChargingHistory(string energySiteId, KindGetWallConnectorChargingHistory kind, DateTimeOffset startDate, DateTimeOffset endDate, string? timeZone, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timeZone` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `kind` ← `kind`, `start_date` ← `startDate`, `end_date` ← `endDate`, `time_zone` ← `timeZone`
- **Returns**: `ChargeHistoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SetSiteModeAutonomousOrSelfConsumption
- **HTTP**: `POST /api/1/energy_sites/{energy_site_id}/operation` (Default (fleet-api))
- **Signature**: `SetSiteModeAutonomousOrSelfConsumption(string energySiteId, OperationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenericUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateStormWatchParticipation
- **HTTP**: `POST /api/1/energy_sites/{energy_site_id}/storm_mode` (Default (fleet-api))
- **Signature**: `UpdateStormWatchParticipation(string energySiteId, StormModeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenericUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimeOfUseTouSettings
- **HTTP**: `POST /api/1/energy_sites/{energy_site_id}/time_of_use_settings` (Default (fleet-api))
- **Signature**: `UpdateTimeOfUseTouSettings(string energySiteId, TimeOfUseSettingsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenericUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
