# VerifyV2Notification — operations

Accessor: `client.VerifyV2Notification` · Source: `Api/VerifyV2Notification.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNotification
- **HTTP**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications` (Default3 (verify))
- **Notes**: Create a new Notification for the corresponding Challenge
- **Signature**: `CreateNotification(string serviceSid, string identity, string challengeSid, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Ttl` ← `ttl`
- **Returns**: `VerifyV2ServiceEntityChallengeNotification`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
