<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2VerificationCheck — operations

Accessor: `client.VerifyV2VerificationCheck` · Source: `Api/VerifyV2VerificationCheck.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVerificationCheck

- **Server group**: `Default3`
- **Signature**: `CreateVerificationCheck(string serviceSid, string? code, string? to, string? verificationSid, string? amount, string? payee, string? snaClientToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`code` … `snaClientToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2ServiceVerificationCheck`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceVerificationCheck` | `Models/VerifyV2ServiceVerificationCheck.cs` |

