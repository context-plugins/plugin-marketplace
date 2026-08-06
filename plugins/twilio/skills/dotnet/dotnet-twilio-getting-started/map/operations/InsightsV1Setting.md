# InsightsV1Setting — operations

Accessor: `client.InsightsV1Setting` · Source: `Api/InsightsV1Setting.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchAccountSettings
- **HTTP**: `GET /v1/Voice/Settings` (Default14 (insights))
- **Notes**: Get the Voice Insights Settings.
- **Signature**: `FetchAccountSettings(string? subaccountSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `subaccountSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `SubaccountSid` ← `subaccountSid`
- **Returns**: `InsightsV1AccountSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAccountSettings
- **HTTP**: `POST /v1/Voice/Settings` (Default14 (insights))
- **Notes**: Update a specific Voice Insights Setting.
- **Signature**: `UpdateAccountSettings(bool? advancedFeatures, bool? voiceTrace, string? subaccountSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `advancedFeatures` — nullable, no default → **must pass explicitly**
  - `voiceTrace` — nullable, no default → **must pass explicitly**
  - `subaccountSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AdvancedFeatures` ← `advancedFeatures`, `VoiceTrace` ← `voiceTrace`, `SubaccountSid` ← `subaccountSid`
- **Returns**: `InsightsV1AccountSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
