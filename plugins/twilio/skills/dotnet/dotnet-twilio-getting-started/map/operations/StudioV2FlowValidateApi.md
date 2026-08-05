# StudioV2FlowValidateApi — operations

Accessor: `client.StudioV2FlowValidateApi` · Source: `Api/StudioV2FlowValidateApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateFlowValidate
- **HTTP**: `POST /v2/Flows/Validate` (Default9 (studio))
- **Notes**: Validate flow JSON definition
- **Signature**: `UpdateFlowValidate(string friendlyName, FlowEnumStatus status, object definition, string? commitMessage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `commitMessage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Status` ← `status`, `Definition` ← `definition`, `CommitMessage` ← `commitMessage`
- **Returns**: `StudioV2FlowValidate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
