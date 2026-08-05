# FlexV2WebChannels — operations

Accessor: `client.FlexV2WebChannels` · Source: `Api/FlexV2WebChannels.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWebChannel2
- **HTTP**: `POST /v2/WebChats` (Default3 (flex-api))
- **Signature**: `CreateWebChannel2(string? uiVersion, string addressSid, string? chatFriendlyName, string? customerFriendlyName, string? preEngagementData, string? identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`uiVersion` … `identity`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AddressSid` ← `addressSid`, `ChatFriendlyName` ← `chatFriendlyName`, `CustomerFriendlyName` ← `customerFriendlyName`, `PreEngagementData` ← `preEngagementData`, `Identity` ← `identity`
- **Returns**: `FlexV2WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
