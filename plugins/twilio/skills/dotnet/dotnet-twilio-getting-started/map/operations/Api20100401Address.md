<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Address — operations

Accessor: `client.Api20100401Address` · Source: `Api/Api20100401Address.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAddress

- **Signature**: `CreateAddress(string accountSid, string customerName, string street, string city, string region, string postalCode, string isoCountry, string? friendlyName, bool? emergencyEnabled, bool? autoCorrectAddress, string? streetSecondary, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `streetSecondary`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountAddress` | `Models/ApiV2010AccountAddress.cs` |

### DeleteAddress

- **Signature**: `DeleteAddress(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchAddress

- **Signature**: `FetchAddress(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountAddress` | `Models/ApiV2010AccountAddress.cs` |

### ListAddress

- **Signature**: `ListAddress(string accountSid, string? customerName, string? friendlyName, bool? emergencyEnabled, string? isoCountry, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`customerName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `CustomerName` ← `customerName`, `FriendlyName` ← `friendlyName`, `EmergencyEnabled` ← `emergencyEnabled`, `IsoCountry` ← `isoCountry`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAddressResponse` | `Models/ListAddressResponse.cs` |

### UpdateAddress

- **Signature**: `UpdateAddress(string accountSid, string sid, string? friendlyName, string? customerName, string? street, string? city, string? region, string? postalCode, bool? emergencyEnabled, bool? autoCorrectAddress, string? streetSecondary, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`friendlyName` … `streetSecondary`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountAddress` | `Models/ApiV2010AccountAddress.cs` |

