# EmsOrgOcDevices — operations

Accessor: `client.EmsOrgOcDevices` · Source: `Api/EmsOrgOcDevices.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExecuteCommandOnDevice
- **HTTP**: `POST /api/v1/orgs/{org_id}/devices/{device_id}/execute_command_on_device` (Default)
- **Notes**: Execute a CLI command on the device Supported command types: - Show commands : `show system configuration`, `show interfaces` - Request commands : `request system reboot` - Network diagnostics : `ping 8.8.8.8`, `traceroute google.com` - File operations : `file list /var/log` - Configuration : `set`, `delete`, `commit` - Operational : `run`, `reboot` The device must be: - Connected (online) Response includes command output, execution status, and timing metrics.
- **Signature**: `ExecuteCommandOnDevice(string orgId, string deviceId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiV1OrgsDevicesExecuteCommandOnDeviceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOutboundSshCommand
- **HTTP**: `GET /api/v1/orgs/{org_id}/ocdevices/outbound_ssh_cmd` (Default)
- **Signature**: `GetOutboundSshCommand(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
