# Vehicles — operations

Accessor: `client.Vehicles` · Source: `Api/Vehicles.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConfigureFleetTelemetryUsingSignedJwsToken
- **HTTP**: `POST /api/1/vehicles/fleet_telemetry_config_jws` (Default (fleet-api))
- **Signature**: `ConfigureFleetTelemetryUsingSignedJwsToken(FleetTelemetryJwsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrUpdateFleetTelemetryConfiguration
- **HTTP**: `POST /api/1/vehicles/fleet_telemetry_config` (Default (fleet-api))
- **Signature**: `CreateOrUpdateFleetTelemetryConfiguration(object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFleetTelemetryConfiguration
- **HTTP**: `DELETE /api/1/vehicles/{vehicle_tag}/fleet_telemetry_config` (Default (fleet-api))
- **Signature**: `DeleteFleetTelemetryConfiguration(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAllowedDriversForAvehicle
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}/drivers` (Default (fleet-api))
- **Signature**: `GetAllowedDriversForAvehicle(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DriversResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEligibleVehicleSubscriptions
- **HTTP**: `GET /api/1/dx/vehicles/subscriptions/eligibility` (Default (fleet-api))
- **Signature**: `GetEligibleVehicleSubscriptions(string vin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `vin` ← `vin`
- **Returns**: `SiteInfoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEligibleVehicleUpgrades
- **HTTP**: `GET /api/1/dx/vehicles/upgrades/eligibility` (Default (fleet-api))
- **Signature**: `GetEligibleVehicleUpgrades(string vin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `vin` ← `vin`
- **Returns**: `SiteInfoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEnterpriseRolesForAvehicle
- **HTTP**: `GET /api/1/dx/enterprise/v1/{vin}/roles` (Default (fleet-api))
- **Signature**: `GetEnterpriseRolesForAvehicle(string vin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFleetStatusForVehicles
- **HTTP**: `POST /api/1/vehicles/fleet_status` (Default (fleet-api))
- **Signature**: `GetFleetStatusForVehicles(FleetStatusRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFleetTelemetryConfiguration
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}/fleet_telemetry_config` (Default (fleet-api))
- **Signature**: `GetFleetTelemetryConfiguration(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFleetTelemetryErrorsForAvehicle
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}/fleet_telemetry_errors` (Default (fleet-api))
- **Signature**: `GetFleetTelemetryErrorsForAvehicle(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVehicle
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}` (Default (fleet-api))
- **Signature**: `GetVehicle(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Api1VehiclesResponseResponse200`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListVehicles
- **HTTP**: `GET /api/1/vehicles` (Default (fleet-api))
- **Signature**: `ListVehicles(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Api1VehiclesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MobileEnabled
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}/mobile_enabled` (Default (fleet-api))
- **Signature**: `MobileEnabled(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Api1VehiclesMobileEnabledResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NearbyChargingSites
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}/nearby_charging_sites` (Default (fleet-api))
- **Signature**: `NearbyChargingSites(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Api1VehiclesNearbyChargingSitesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemoveDriverAccessFromAvehicle
- **HTTP**: `DELETE /api/1/vehicles/{vehicle_tag}/drivers` (Default (fleet-api))
- **Signature**: `RemoveDriverAccessFromAvehicle(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SimpleOkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SetEnterprisePayerRoles
- **HTTP**: `POST /api/1/dx/enterprise/v1/{vin}/payer` (Default (fleet-api))
- **Signature**: `SetEnterprisePayerRoles(string vin, EnterprisePayerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### VehicleLiveData
- **HTTP**: `GET /api/1/vehicles/{vehicle_tag}/vehicle_data` (Default (fleet-api))
- **Signature**: `VehicleLiveData(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteInfoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### VehicleOptions
- **HTTP**: `GET /api/1/dx/vehicles/options` (Default (fleet-api))
- **Signature**: `VehicleOptions(string vin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `vin` ← `vin`
- **Returns**: `Api1DxVehiclesOptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### VehicleSpecs
- **HTTP**: `GET /api/1/vehicles/{vin}/specs` (Default (fleet-api))
- **Signature**: `VehicleSpecs(string vin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteInfoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WakeUpVehicle
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/wake_up` (Default (fleet-api))
- **Signature**: `WakeUpVehicle(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Api1VehiclesWakeUpResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### WarrantyDetails
- **HTTP**: `GET /api/1/dx/warranty/details` (Default (fleet-api))
- **Signature**: `WarrantyDetails(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Api1DxWarrantyDetailsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
