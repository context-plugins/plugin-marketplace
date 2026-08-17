<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Verification — operations

Accessor: `client.VerifyV2Verification` · Source: `Api/VerifyV2Verification.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVerification

- **Server group**: `Default3`
- **Signature**: `CreateVerification(string serviceSid, string to, string channel, string? customFriendlyName, string? customMessage, string? sendDigits, string? locale, string? customCode, string? amount, string? payee, object? rateLimits, object? channelConfiguration, string? appHash, string? templateSid, string? templateCustomSubstitutions, string? deviceIp, bool? enableSnaClientToken, MessageEnumRiskCheck? riskCheck, string? tags, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`customFriendlyName` … `tags`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `SdkException<CreateVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MessageEnumRiskCheck` | `Models/Enums/MessageEnumRiskCheck.cs` |
| `VerifyV2ServiceVerification` | `Models/VerifyV2ServiceVerification.cs` |
| `CreateVerificationError` | `Errors/CreateVerificationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchVerification

- **Server group**: `Default3`
- **Signature**: `FetchVerification(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceVerification` | `Models/VerifyV2ServiceVerification.cs` |

### UpdateVerification

- **Server group**: `Default3`
- **Signature**: `UpdateVerification(string serviceSid, string sid, VerificationEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerificationEnumStatus` | `Models/Enums/VerificationEnumStatus.cs` |
| `VerifyV2ServiceVerification` | `Models/VerifyV2ServiceVerification.cs` |

