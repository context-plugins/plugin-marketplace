<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Factor — operations

Accessor: `client.VerifyV2Factor` · Source: `Api/VerifyV2Factor.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteFactor

- **Server group**: `Default3`
- **Signature**: `DeleteFactor(string serviceSid, string identity, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchFactor

- **Server group**: `Default3`
- **Signature**: `FetchFactor(string serviceSid, string identity, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceEntityFactor`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntityFactor` | `Models/VerifyV2ServiceEntityFactor.cs` |

### ListFactor

- **Server group**: `Default3`
- **Signature**: `ListFactor(string serviceSid, string identity, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFactorResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListFactorResponse` | `Models/ListFactorResponse.cs` |

### UpdateFactor

- **Server group**: `Default3`
- **Signature**: `UpdateFactor(string serviceSid, string identity, string sid, string? authPayload, string? friendlyName, string? configNotificationToken, string? configSdkVersion, int? configTimeStep, int? configSkew, int? configCodeLength, FactorEnumTotpAlgorithms? configAlg, string? configNotificationPlatform, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`authPayload` … `configNotificationPlatform`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2ServiceEntityFactor`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FactorEnumTotpAlgorithms` | `Models/Enums/FactorEnumTotpAlgorithms.cs` |
| `VerifyV2ServiceEntityFactor` | `Models/VerifyV2ServiceEntityFactor.cs` |

