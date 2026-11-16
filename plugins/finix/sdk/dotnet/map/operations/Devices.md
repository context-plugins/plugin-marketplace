<!-- Generated file — do not edit; regenerated with the SDK. -->

# Devices — operations

Accessor: `client.Devices` · Source: `src/FinixApiReference/Api/Devices.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMerchantDevice

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateMerchantDevice(CreateMerchantDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MerchantId`, `Body`
- **Returns**: `Device`
- **Error**: `ApiException<CreateMerchantDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantDeviceRequest` | `src/FinixApiReference/Requests/Devices/CreateMerchantDeviceRequest.cs` |
| `MerchantsDevicesRequest` | `src/FinixApiReference/Models/AnyOf/MerchantsDevicesRequest.cs` |
| `Device` | `src/FinixApiReference/Models/Device.cs` |
| `CreateMerchantDeviceError` | `src/FinixApiReference/Errors/CreateMerchantDeviceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetDevice

- **Auth**: `options.BasicAuth`
- **Signature**: `GetDevice(GetDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DeviceId`
- **Query params (wire ← C#)**: `include_connection` ← `IncludeConnection`
- **Returns**: `Device`
- **Error**: `ApiException<GetDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeviceRequest` | `src/FinixApiReference/Requests/Devices/GetDeviceRequest.cs` |
| `Device` | `src/FinixApiReference/Models/Device.cs` |
| `GetDeviceError` | `src/FinixApiReference/Errors/GetDeviceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetDeviceConnection

- **Auth**: `options.BasicAuth`
- **Signature**: `GetDeviceConnection(GetDeviceConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DeviceIdConnection`, `IncludeConnection`
- **Query params (wire ← C#)**: `include_connection` ← `IncludeConnection`
- **Returns**: `Device`
- **Error**: `ApiException<GetDeviceConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeviceConnectionRequest` | `src/FinixApiReference/Requests/Devices/GetDeviceConnectionRequest.cs` |
| `Device` | `src/FinixApiReference/Models/Device.cs` |
| `GetDeviceConnectionError` | `src/FinixApiReference/Errors/GetDeviceConnectionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListDeviceMetrics

- **Auth**: `options.BasicAuth`
- **Signature**: `ListDeviceMetrics(ListDeviceMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DeviceId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `connection` ← `Connection`, `connectivity_network_type` ← `ConnectivityNetworkType`, `connectivity_signal_strength` ← `ConnectivitySignalStrength`, `event_type` ← `EventType`, `limit` ← `Limit`, `payment_app_state` ← `PaymentAppState`, `payment_app_version` ← `PaymentAppVersion`, `payment_app_version.gte` ← `PaymentAppVersionGte`, `payment_app_version.lte` ← `PaymentAppVersionLte`, `power_battery_level_percent` ← `PowerBatteryLevelPercent`, `power_battery_level_percent.gte` ← `PowerBatteryLevelPercentGte`, `power_battery_level_percent.lte` ← `PowerBatteryLevelPercentLte`, `power_battery_temperature_celsius` ← `PowerBatteryTemperatureCelsius`, `power_battery_temperature_celsius.gte` ← `PowerBatteryTemperatureCelsiusGte`, `power_battery_temperature_celsius.lte` ← `PowerBatteryTemperatureCelsiusLte`, `power_battery_temperature_fahrenheit` ← `PowerBatteryTemperatureFahrenheit`, `power_battery_temperature_fahrenheit.gte` ← `PowerBatteryTemperatureFahrenheitGte`, `power_battery_temperature_fahrenheit.lte` ← `PowerBatteryTemperatureFahrenheitLte`, `power_is_charging` ← `PowerIsCharging`, `system_android_version` ← `SystemAndroidVersion`, `system_android_version.gte` ← `SystemAndroidVersionGte`, `system_android_version.lte` ← `SystemAndroidVersionLte`, `system_firmware_version` ← `SystemFirmwareVersion`, `system_firmware_version.gte` ← `SystemFirmwareVersionGte`, `system_firmware_version.lte` ← `SystemFirmwareVersionLte`
- **Returns**: `ListDevices`
- **Error**: `ApiException<ListDeviceMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDeviceMetricsRequest` | `src/FinixApiReference/Requests/Devices/ListDeviceMetricsRequest.cs` |
| `Connection` | `src/FinixApiReference/Models/Enums/Connection.cs` |
| `ConnectivityNetworkType` | `src/FinixApiReference/Models/Enums/ConnectivityNetworkType.cs` |
| `ConnectivitySignalStrength` | `src/FinixApiReference/Models/Enums/ConnectivitySignalStrength.cs` |
| `EventType` | `src/FinixApiReference/Models/Enums/EventType.cs` |
| `PaymentAppState` | `src/FinixApiReference/Models/Enums/PaymentAppState.cs` |
| `ListDevices` | `src/FinixApiReference/Models/ListDevices.cs` |
| `ListDeviceMetricsError` | `src/FinixApiReference/Errors/ListDeviceMetricsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListDevices

- **Auth**: `options.BasicAuth`
- **Signature**: `ListDevices(ListDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `application_id` ← `ApplicationId`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `description` ← `Description`, `enabled` ← `Enabled`, `limit` ← `Limit`, `merchant_id` ← `MerchantId`, `merchant_identity_id` ← `MerchantIdentityId`, `name` ← `Name`, `model` ← `Model`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `serial_number` ← `SerialNumber`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListDevices`
- **Error**: `ApiException<ListDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDevicesRequest` | `src/FinixApiReference/Requests/Devices/ListDevicesRequest.cs` |
| `ListDevices` | `src/FinixApiReference/Models/ListDevices.cs` |
| `ListDevicesError` | `src/FinixApiReference/Errors/ListDevicesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateDevice

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateDevice(UpdateDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DeviceId`, `Body`
- **Returns**: `Device`
- **Error**: `ApiException<UpdateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDeviceRequest` | `src/FinixApiReference/Requests/Devices/UpdateDeviceRequest.cs` |
| `DevicesRequest` | `src/FinixApiReference/Models/AnyOf/DevicesRequest.cs` |
| `Device` | `src/FinixApiReference/Models/Device.cs` |
| `UpdateDeviceError` | `src/FinixApiReference/Errors/UpdateDeviceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

