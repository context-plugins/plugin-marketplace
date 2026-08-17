<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1BrandVetting — operations

Accessor: `client.MessagingV1BrandVetting` · Source: `Api/MessagingV1BrandVetting.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBrandVetting

- **Server group**: `Default1`
- **Signature**: `CreateBrandVetting(string brandSid, BrandVettingEnumVettingProvider vettingProvider, string? vettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `vettingId` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV1BrandRegistrationsBrandVetting`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BrandVettingEnumVettingProvider` | `Models/Enums/BrandVettingEnumVettingProvider.cs` |
| `MessagingV1BrandRegistrationsBrandVetting` | `Models/MessagingV1BrandRegistrationsBrandVetting.cs` |

### FetchBrandVetting

- **Server group**: `Default1`
- **Signature**: `FetchBrandVetting(string brandSid, string brandVettingSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1BrandRegistrationsBrandVetting`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1BrandRegistrationsBrandVetting` | `Models/MessagingV1BrandRegistrationsBrandVetting.cs` |

### ListBrandVetting

- **Server group**: `Default1`
- **Signature**: `ListBrandVetting(string brandSid, BrandVettingEnumVettingProvider? vettingProvider, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `vettingProvider` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `VettingProvider` ← `vettingProvider`
- **Returns**: `ListBrandVettingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BrandVettingEnumVettingProvider` | `Models/Enums/BrandVettingEnumVettingProvider.cs` |
| `ListBrandVettingResponse` | `Models/ListBrandVettingResponse.cs` |

