# AlertmanagerActions — operations

Accessor: `client.AlertmanagerActions` · Source: `Api/AlertmanagerActions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AlertManagerAckAlerts
- **HTTP**: `POST /alert-manager/api/v1/orgs/{org_id}/ack` (Default)
- **Signature**: `AlertManagerAckAlerts(string orgId, AcknowledgementRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerUnackAlerts
- **HTTP**: `POST /alert-manager/api/v1/orgs/{org_id}/unack` (Default)
- **Signature**: `AlertManagerUnackAlerts(string orgId, UnAcknowledgementRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
