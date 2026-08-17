<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2RateLimit — operations

Accessor: `client.VerifyV2RateLimit` · Source: `Api/VerifyV2RateLimit.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRateLimit

- **Server group**: `Default3`
- **Signature**: `CreateRateLimit(string serviceSid, string uniqueName, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceRateLimit` | `Models/VerifyV2ServiceRateLimit.cs` |

### DeleteRateLimit

- **Server group**: `Default3`
- **Signature**: `DeleteRateLimit(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRateLimit

- **Server group**: `Default3`
- **Signature**: `FetchRateLimit(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceRateLimit` | `Models/VerifyV2ServiceRateLimit.cs` |

### ListRateLimit

- **Server group**: `Default3`
- **Signature**: `ListRateLimit(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRateLimitResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRateLimitResponse` | `Models/ListRateLimitResponse.cs` |

### UpdateRateLimit

- **Server group**: `Default3`
- **Signature**: `UpdateRateLimit(string serviceSid, string sid, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceRateLimit` | `Models/VerifyV2ServiceRateLimit.cs` |

