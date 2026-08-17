<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2VerificationAttemptsSummaryApi — operations

Accessor: `client.VerifyV2VerificationAttemptsSummaryApi` · Source: `Api/VerifyV2VerificationAttemptsSummaryApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchVerificationAttemptsSummary

- **Server group**: `Default3`
- **Signature**: `FetchVerificationAttemptsSummary(string? verifyServiceSid, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? country, VerificationAttemptsSummaryEnumChannels? channel, string? destinationPrefix, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`verifyServiceSid` … `destinationPrefix`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `VerifyServiceSid` ← `verifyServiceSid`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `Country` ← `country`, `Channel` ← `channel`, `DestinationPrefix` ← `destinationPrefix`
- **Returns**: `VerifyV2VerificationAttemptsSummary`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerificationAttemptsSummaryEnumChannels` | `Models/Enums/VerificationAttemptsSummaryEnumChannels.cs` |
| `VerifyV2VerificationAttemptsSummary` | `Models/VerifyV2VerificationAttemptsSummary.cs` |

