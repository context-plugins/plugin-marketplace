# FlexV1ProvisioningStatusApi — operations

Accessor: `client.FlexV1ProvisioningStatusApi` · Source: `Api/FlexV1ProvisioningStatusApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchProvisioningStatus
- **HTTP**: `GET /v1/account/provision/status` (Default3 (flex-api))
- **Signature**: `FetchProvisioningStatus(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1ProvisioningStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
