# VerifyV2VerificationAttemptApi — operations

Accessor: `client.VerifyV2VerificationAttemptApi` · Source: `Api/VerifyV2VerificationAttemptApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchVerificationAttempt
- **HTTP**: `GET /v2/Attempts/{Sid}` (Default13 (verify))
- **Notes**: Fetch a specific verification attempt.
- **Signature**: `FetchVerificationAttempt(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2VerificationAttempt`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListVerificationAttempt
- **HTTP**: `GET /v2/Attempts` (Default13 (verify))
- **Notes**: List all the verification attempts for a given Account.
- **Signature**: `ListVerificationAttempt(DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? channelDataTo, string? country, VerificationAttemptEnumChannels? channel, string? verifyServiceSid, string? verificationSid, VerificationAttemptEnumConversionStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`dateCreatedAfter` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `ChannelData.To` ← `channelDataTo`, `Country` ← `country`, `Channel` ← `channel`, `VerifyServiceSid` ← `verifyServiceSid`, `VerificationSid` ← `verificationSid`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVerificationAttemptResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
