<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1PhoneNumber — operations

Accessor: `client.ProxyV1PhoneNumber` · Source: `Api/ProxyV1PhoneNumber.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePhoneNumber2

- **Server group**: `Default10`
- **Signature**: `CreatePhoneNumber2(string serviceSid, string? sid, string? phoneNumber, bool? isReserved, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sid` — nullable, no default → **must pass explicitly**
  - `phoneNumber` — nullable, no default → **must pass explicitly**
  - `isReserved` — nullable, no default → **must pass explicitly**
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServicePhoneNumber` | `Models/ProxyV1ServicePhoneNumber.cs` |

### DeletePhoneNumber2

- **Server group**: `Default10`
- **Signature**: `DeletePhoneNumber2(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchPhoneNumber4

- **Server group**: `Default10`
- **Signature**: `FetchPhoneNumber4(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServicePhoneNumber` | `Models/ProxyV1ServicePhoneNumber.cs` |

### ListPhoneNumber2

- **Server group**: `Default10`
- **Signature**: `ListPhoneNumber2(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPhoneNumberResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPhoneNumberResponse1` | `Models/ListPhoneNumberResponse1.cs` |

### UpdatePhoneNumber

- **Server group**: `Default10`
- **Signature**: `UpdatePhoneNumber(string serviceSid, string sid, bool? isReserved, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isReserved` — nullable, no default → **must pass explicitly**
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServicePhoneNumber` | `Models/ProxyV1ServicePhoneNumber.cs` |

