# DiagnosticsFactoryReset — operations

Accessor: `client.DiagnosticsFactoryReset` · Source: `Api/DiagnosticsFactoryReset.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DecivesRestart
- **HTTP**: `POST /devices/actions/restart` (DeviceDiagnostics (thingspace))
- **Notes**: Performs a device reboot or a factory reset on the modem portion of the device.
- **Signature**: `DecivesRestart(DeviceResetRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DiagnosticsObservationResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
