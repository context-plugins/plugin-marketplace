<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2VerificationAttemptApi — operations

Accessor: `client.VerifyV2VerificationAttemptApi` · Source: `Api/VerifyV2VerificationAttemptApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchVerificationAttempt

- **Server group**: `Default3`
- **Signature**: `FetchVerificationAttempt(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2VerificationAttempt`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2VerificationAttempt` | `Models/VerifyV2VerificationAttempt.cs` |

### ListVerificationAttempt

- **Server group**: `Default3`
- **Signature**: `ListVerificationAttempt(DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? channelDataTo, string? country, VerificationAttemptEnumChannels? channel, string? verifyServiceSid, string? verificationSid, VerificationAttemptEnumConversionStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`dateCreatedAfter` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `ChannelData.To` ← `channelDataTo`, `Country` ← `country`, `Channel` ← `channel`, `VerifyServiceSid` ← `verifyServiceSid`, `VerificationSid` ← `verificationSid`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVerificationAttemptResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerificationAttemptEnumChannels` | `Models/Enums/VerificationAttemptEnumChannels.cs` |
| `VerificationAttemptEnumConversionStatus` | `Models/Enums/VerificationAttemptEnumConversionStatus.cs` |
| `ListVerificationAttemptResponse` | `Models/ListVerificationAttemptResponse.cs` |

