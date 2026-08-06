# VerifyV2VerificationAttemptsSummaryApi — operations

Accessor: `client.VerifyV2VerificationAttemptsSummaryApi` · Source: `Api/VerifyV2VerificationAttemptsSummaryApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchVerificationAttemptsSummary
- **HTTP**: `GET /v2/Attempts/Summary` (Default3 (verify))
- **Notes**: Get a summary of how many attempts were made and how many were converted.
- **Signature**: `FetchVerificationAttemptsSummary(string? verifyServiceSid, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? country, VerificationAttemptsSummaryEnumChannels? channel, string? destinationPrefix, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`verifyServiceSid` … `destinationPrefix`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `VerifyServiceSid` ← `verifyServiceSid`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `Country` ← `country`, `Channel` ← `channel`, `DestinationPrefix` ← `destinationPrefix`
- **Returns**: `VerifyV2VerificationAttemptsSummary`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
