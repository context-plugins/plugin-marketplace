# VerifyV2NewChallenge — operations

Accessor: `client.VerifyV2NewChallenge` · Source: `Api/VerifyV2NewChallenge.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateChallengePasskeys
- **HTTP**: `POST /v2/Services/{ServiceSid}/Passkeys/Challenges` (Default3 (verify))
- **Notes**: Create a Passkeys Challenge
- **Signature**: `CreateChallengePasskeys(string serviceSid, CreatePasskeysChallengeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2ServicesPasskeysChallengesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
