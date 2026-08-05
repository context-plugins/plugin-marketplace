# VerifyV2VerificationCheck — operations

Accessor: `client.VerifyV2VerificationCheck` · Source: `Api/VerifyV2VerificationCheck.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVerificationCheck
- **HTTP**: `POST /v2/Services/{ServiceSid}/VerificationCheck` (Default13 (verify))
- **Notes**: challenge a specific Verification Check.
- **Signature**: `CreateVerificationCheck(string serviceSid, string? code, string? to, string? verificationSid, string? amount, string? payee, string? snaClientToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`code` … `snaClientToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Code` ← `code`, `To` ← `to`, `VerificationSid` ← `verificationSid`, `Amount` ← `amount`, `Payee` ← `payee`, `SnaClientToken` ← `snaClientToken`
- **Returns**: `VerifyV2ServiceVerificationCheck`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
