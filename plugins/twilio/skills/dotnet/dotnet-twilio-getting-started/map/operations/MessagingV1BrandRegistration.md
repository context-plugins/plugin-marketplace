<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1BrandRegistration — operations

Accessor: `client.MessagingV1BrandRegistration` · Source: `Api/MessagingV1BrandRegistration.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBrandRegistrations

- **Server group**: `Default1`
- **Signature**: `CreateBrandRegistrations(string customerProfileBundleSid, string a2PProfileBundleSid, string? brandType, bool? mock, bool? skipAutomaticSecVet, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `brandType` — nullable, no default → **must pass explicitly**
  - `mock` — nullable, no default → **must pass explicitly**
  - `skipAutomaticSecVet` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1BrandRegistrations` | `Models/MessagingV1BrandRegistrations.cs` |

### FetchBrandRegistrations

- **Server group**: `Default1`
- **Signature**: `FetchBrandRegistrations(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1BrandRegistrations` | `Models/MessagingV1BrandRegistrations.cs` |

### ListBrandRegistrations

- **Server group**: `Default1`
- **Signature**: `ListBrandRegistrations(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBrandRegistrationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListBrandRegistrationsResponse` | `Models/ListBrandRegistrationsResponse.cs` |

### UpdateBrandRegistrations

- **Server group**: `Default1`
- **Signature**: `UpdateBrandRegistrations(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1BrandRegistrations` | `Models/MessagingV1BrandRegistrations.cs` |

