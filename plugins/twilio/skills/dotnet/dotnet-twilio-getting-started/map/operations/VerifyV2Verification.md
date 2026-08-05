# VerifyV2Verification — operations

Accessor: `client.VerifyV2Verification` · Source: `Api/VerifyV2Verification.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVerification
- **HTTP**: `POST /v2/Services/{ServiceSid}/Verifications` (Default13 (verify))
- **Notes**: Create a new Verification using a Service
- **Signature**: `CreateVerification(string serviceSid, string to, string channel, string? customFriendlyName, string? customMessage, string? sendDigits, string? locale, string? customCode, string? amount, string? payee, object? rateLimits, object? channelConfiguration, string? appHash, string? templateSid, string? templateCustomSubstitutions, string? deviceIp, bool? enableSnaClientToken, MessageEnumRiskCheck? riskCheck, string? tags, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`customFriendlyName` … `tags`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `To` ← `to`, `Channel` ← `channel`, `CustomFriendlyName` ← `customFriendlyName`, `CustomMessage` ← `customMessage`, `SendDigits` ← `sendDigits`, `Locale` ← `locale`, `CustomCode` ← `customCode`, `Amount` ← `amount`, `Payee` ← `payee`, `RateLimits` ← `rateLimits`, `ChannelConfiguration` ← `channelConfiguration`, `AppHash` ← `appHash`, `TemplateSid` ← `templateSid`, `TemplateCustomSubstitutions` ← `templateCustomSubstitutions`, `DeviceIp` ← `deviceIp`, `EnableSnaClientToken` ← `enableSnaClientToken`, `RiskCheck` ← `riskCheck`, `Tags` ← `tags`
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `SdkException<CreateVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchVerification
- **HTTP**: `GET /v2/Services/{ServiceSid}/Verifications/{Sid}` (Default13 (verify))
- **Notes**: Fetch a specific Verification
- **Signature**: `FetchVerification(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateVerification
- **HTTP**: `POST /v2/Services/{ServiceSid}/Verifications/{Sid}` (Default13 (verify))
- **Notes**: Update a Verification status
- **Signature**: `UpdateVerification(string serviceSid, string sid, VerificationEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
