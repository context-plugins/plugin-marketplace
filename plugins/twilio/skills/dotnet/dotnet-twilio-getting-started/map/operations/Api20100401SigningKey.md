<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401SigningKey — operations

Accessor: `client.Api20100401SigningKey` · Source: `Api/Api20100401SigningKey.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSigningKey

- **Signature**: `DeleteSigningKey(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSigningKey

- **Signature**: `FetchSigningKey(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSigningKey`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSigningKey` | `Models/ApiV2010AccountSigningKey.cs` |

### ListSigningKey

- **Signature**: `ListSigningKey(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSigningKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSigningKeyResponse` | `Models/ListSigningKeyResponse.cs` |

### UpdateSigningKey

- **Signature**: `UpdateSigningKey(string accountSid, string sid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountSigningKey`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSigningKey` | `Models/ApiV2010AccountSigningKey.cs` |

