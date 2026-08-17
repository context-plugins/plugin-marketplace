<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProducts — operations

Accessor: `client.TrusthubV1TrustProducts` · Source: `Api/TrusthubV1TrustProducts.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTrustProduct

- **Server group**: `Default9`
- **Signature**: `CreateTrustProduct(string friendlyName, string email, string policySid, string? statusCallback, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statusCallback` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProduct` | `Models/TrusthubV1TrustProduct.cs` |

### DeleteTrustProduct

- **Server group**: `Default9`
- **Signature**: `DeleteTrustProduct(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTrustProduct

- **Server group**: `Default9`
- **Signature**: `FetchTrustProduct(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProduct` | `Models/TrusthubV1TrustProduct.cs` |

### ListTrustProduct

- **Server group**: `Default9`
- **Signature**: `ListTrustProduct(TrustProductEnumStatus? status, string? friendlyName, string? policySid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `FriendlyName` ← `friendlyName`, `PolicySid` ← `policySid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrustProductEnumStatus` | `Models/Enums/TrustProductEnumStatus.cs` |
| `ListTrustProductResponse` | `Models/ListTrustProductResponse.cs` |

### UpdateTrustProduct

- **Server group**: `Default9`
- **Signature**: `UpdateTrustProduct(string sid, TrustProductEnumStatus? status, string? statusCallback, string? friendlyName, string? email, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `email`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrustProductEnumStatus` | `Models/Enums/TrustProductEnumStatus.cs` |
| `TrusthubV1TrustProduct` | `Models/TrusthubV1TrustProduct.cs` |

