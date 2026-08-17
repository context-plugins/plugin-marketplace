<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Challenge — operations

Accessor: `client.VerifyV2Challenge` · Source: `Api/VerifyV2Challenge.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateChallenge

- **Server group**: `Default3`
- **Signature**: `CreateChallenge(string serviceSid, string identity, string factorSid, DateTimeOffset? expirationDate, string? detailsMessage, IReadOnlyList<object>? detailsFields, object? hiddenDetails, string? authPayload, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`expirationDate` … `authPayload`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntityChallenge` | `Models/VerifyV2ServiceEntityChallenge.cs` |

### FetchChallenge

- **Server group**: `Default3`
- **Signature**: `FetchChallenge(string serviceSid, string identity, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntityChallenge` | `Models/VerifyV2ServiceEntityChallenge.cs` |

### ListChallenge

- **Server group**: `Default3`
- **Signature**: `ListChallenge(string serviceSid, string identity, string? factorSid, ChallengeEnumChallengeStatuses? status, ChallengeEnumListOrders? order, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`factorSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FactorSid` ← `factorSid`, `Status` ← `status`, `Order` ← `order`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChallengeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ChallengeEnumChallengeStatuses` | `Models/Enums/ChallengeEnumChallengeStatuses.cs` |
| `ChallengeEnumListOrders` | `Models/Enums/ChallengeEnumListOrders.cs` |
| `ListChallengeResponse` | `Models/ListChallengeResponse.cs` |

### UpdateChallenge

- **Server group**: `Default3`
- **Signature**: `UpdateChallenge(string serviceSid, string identity, string sid, string? authPayload, object? metadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authPayload` — nullable, no default → **must pass explicitly**
  - `metadata` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntityChallenge` | `Models/VerifyV2ServiceEntityChallenge.cs` |

