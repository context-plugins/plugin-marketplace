<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfiles — operations

Accessor: `client.TrusthubV1CustomerProfiles` · Source: `Api/TrusthubV1CustomerProfiles.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerProfile

- **Server group**: `Default9`
- **Signature**: `CreateCustomerProfile(string friendlyName, string email, string policySid, string? statusCallback, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statusCallback` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfile` | `Models/TrusthubV1CustomerProfile.cs` |

### DeleteCustomerProfile

- **Server group**: `Default9`
- **Signature**: `DeleteCustomerProfile(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchCustomerProfile

- **Server group**: `Default9`
- **Signature**: `FetchCustomerProfile(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfile` | `Models/TrusthubV1CustomerProfile.cs` |

### ListCustomerProfile

- **Server group**: `Default9`
- **Signature**: `ListCustomerProfile(CustomerProfileEnumStatus? status, string? friendlyName, string? policySid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `FriendlyName` ← `friendlyName`, `PolicySid` ← `policySid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CustomerProfileEnumStatus` | `Models/Enums/CustomerProfileEnumStatus.cs` |
| `ListCustomerProfileResponse` | `Models/ListCustomerProfileResponse.cs` |

### UpdateCustomerProfile

- **Server group**: `Default9`
- **Signature**: `UpdateCustomerProfile(string sid, CustomerProfileEnumStatus? status, string? statusCallback, string? friendlyName, string? email, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `email`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CustomerProfileEnumStatus` | `Models/Enums/CustomerProfileEnumStatus.cs` |
| `TrusthubV1CustomerProfile` | `Models/TrusthubV1CustomerProfile.cs` |

