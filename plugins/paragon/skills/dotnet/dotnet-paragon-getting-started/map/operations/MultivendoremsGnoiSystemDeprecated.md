# MultivendoremsGnoiSystemDeprecated — operations

Accessor: `client.MultivendoremsGnoiSystemDeprecated` · Source: `Api/MultivendoremsGnoiSystemDeprecated.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GnoiSystemRestServiceReboot2
- **HTTP**: `POST /mems/api/v1.1alpha/{org-id}/gnoi/{deviceId}/system/reboot` (Default)
- **Signature**: `GnoiSystemRestServiceReboot2(string orgId, string deviceId, GnoiSystemRestServiceRebootBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
