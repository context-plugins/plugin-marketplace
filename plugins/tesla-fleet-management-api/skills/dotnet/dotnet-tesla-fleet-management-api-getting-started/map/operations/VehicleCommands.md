# VehicleCommands — operations

Accessor: `client.VehicleCommands` · Source: `Api/VehicleCommands.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Actuatetrunk
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/actuate_trunk` (Default (fleet-api))
- **Notes**: Controls the front or rear trunk
- **Signature**: `Actuatetrunk(string vehicleTag, ActuateTrunkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Addchargeschedule
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/add_charge_schedule` (Default (fleet-api))
- **Signature**: `Addchargeschedule(string vehicleTag, AddChargeScheduleRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Addpreconditionschedule
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/add_precondition_schedule` (Default (fleet-api))
- **Signature**: `Addpreconditionschedule(string vehicleTag, AddPreconditionScheduleRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Adjustmediavolume
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/adjust_volume` (Default (fleet-api))
- **Signature**: `Adjustmediavolume(string vehicleTag, AdjustVolumeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Cancelsoftwareupdate
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/cancel_software_update` (Default (fleet-api))
- **Signature**: `Cancelsoftwareupdate(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Chargemaxrange
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_max_range` (Default (fleet-api))
- **Signature**: `Chargemaxrange(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Chargestandard
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_standard` (Default (fleet-api))
- **Signature**: `Chargestandard(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ClearPintoDriveAdmin
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/clear_pin_to_drive_admin` (Default (fleet-api))
- **Notes**: Deactivates PIN to Drive and resets the associated PIN for supported firmware versions.
- **Signature**: `ClearPintoDriveAdmin(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Closechargeportdoor
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_port_door_close` (Default (fleet-api))
- **Signature**: `Closechargeportdoor(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EnableordisableGuestMode
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/guest_mode` (Default (fleet-api))
- **Signature**: `EnableordisableGuestMode(string vehicleTag, GuestModeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Eraseuserdata
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/erase_user_data` (Default (fleet-api))
- **Notes**: Erases user data from the vehicle UI. Requires Guest Mode.
- **Signature**: `Eraseuserdata(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Flashlights
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/flash_lights` (Default (fleet-api))
- **Notes**: Briefly flashes vehicle headlights.
- **Signature**: `Flashlights(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Honkhorn
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/honk_horn` (Default (fleet-api))
- **Signature**: `Honkhorn(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Lockdoors
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/door_lock` (Default (fleet-api))
- **Signature**: `Lockdoors(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Nextfavoritemediatrack
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/media_next_fav` (Default (fleet-api))
- **Signature**: `Nextfavoritemediatrack(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Openchargeportdoor
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_port_door_open` (Default (fleet-api))
- **Signature**: `Openchargeportdoor(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Startcharging
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_start` (Default (fleet-api))
- **Signature**: `Startcharging(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Startclimatepreconditioning
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/auto_conditioning_start` (Default (fleet-api))
- **Signature**: `Startclimatepreconditioning(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Stopcharging
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_stop` (Default (fleet-api))
- **Signature**: `Stopcharging(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Stopclimatepreconditioning
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/auto_conditioning_stop` (Default (fleet-api))
- **Signature**: `Stopclimatepreconditioning(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Unlockdoors
- **HTTP**: `POST /api/1/vehicles/{vehicle_tag}/command/door_unlock` (Default (fleet-api))
- **Signature**: `Unlockdoors(string vehicleTag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CommandResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
