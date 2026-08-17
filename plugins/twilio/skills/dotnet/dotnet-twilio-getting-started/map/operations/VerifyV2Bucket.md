<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Bucket — operations

Accessor: `client.VerifyV2Bucket` · Source: `Api/VerifyV2Bucket.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBucket

- **Server group**: `Default3`
- **Signature**: `CreateBucket(string serviceSid, string rateLimitSid, int max, int interval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceRateLimitBucket` | `Models/VerifyV2ServiceRateLimitBucket.cs` |

### DeleteBucket

- **Server group**: `Default3`
- **Signature**: `DeleteBucket(string serviceSid, string rateLimitSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchBucket

- **Server group**: `Default3`
- **Signature**: `FetchBucket(string serviceSid, string rateLimitSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceRateLimitBucket` | `Models/VerifyV2ServiceRateLimitBucket.cs` |

### ListBucket

- **Server group**: `Default3`
- **Signature**: `ListBucket(string serviceSid, string rateLimitSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBucketResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListBucketResponse` | `Models/ListBucketResponse.cs` |

### UpdateBucket

- **Server group**: `Default3`
- **Signature**: `UpdateBucket(string serviceSid, string rateLimitSid, string sid, int? max, int? interval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `max` — nullable, no default → **must pass explicitly**
  - `interval` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceRateLimitBucket` | `Models/VerifyV2ServiceRateLimitBucket.cs` |

