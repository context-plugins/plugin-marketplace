# VerifyV2Verification — operations

Accessor: `client.VerifyV2Verification` · Source: `Api/VerifyV2Verification.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVerification
- **HTTP**: `POST /v2/Services/{ServiceSid}/Verifications` (Default (accounts))
- **Notes**: Create a new Verification using a Service
- **Signature**: `CreateVerification(string serviceSid, ContentType contentType, string to, string channel, string? customFriendlyName, string? customMessage, string? sendDigits, string? locale, string? customCode, string? amount, string? payee, BinaryContent? rateLimits, BinaryContent? channelConfiguration, string? appHash, string? templateSid, string? templateCustomSubstitutions, string? deviceIp, bool? enableSnaClientToken, VerificationEnumRiskCheck? riskCheck, string? tags, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`customFriendlyName` … `tags`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `To` ← `to`, `Channel` ← `channel`, `CustomFriendlyName` ← `customFriendlyName`, `CustomMessage` ← `customMessage`, `SendDigits` ← `sendDigits`, `Locale` ← `locale`, `CustomCode` ← `customCode`, `Amount` ← `amount`, `Payee` ← `payee`, `RateLimits` ← `rateLimits`, `ChannelConfiguration` ← `channelConfiguration`, `AppHash` ← `appHash`, `TemplateSid` ← `templateSid`, `TemplateCustomSubstitutions` ← `templateCustomSubstitutions`, `DeviceIp` ← `deviceIp`, `EnableSnaClientToken` ← `enableSnaClientToken`, `RiskCheck` ← `riskCheck`, `Tags` ← `tags`
- **Returns**: `Verification`
- **Error**: `SdkException<CreateVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetV2ServicesVerifications429Error1(out V2ServicesVerifications429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
