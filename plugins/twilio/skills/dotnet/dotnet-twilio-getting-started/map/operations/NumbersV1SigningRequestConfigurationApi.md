<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1SigningRequestConfigurationApi — operations

Accessor: `client.NumbersV1SigningRequestConfigurationApi` · Source: `Api/NumbersV1SigningRequestConfigurationApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSigningRequestConfiguration

- **Server group**: `Default5`
- **Signature**: `CreateSigningRequestConfiguration(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV1SigningRequestConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV1SigningRequestConfiguration` | `Models/NumbersV1SigningRequestConfiguration.cs` |

### ListSigningRequestConfiguration

- **Server group**: `Default5`
- **Signature**: `ListSigningRequestConfiguration(string? country, string? product, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`country` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Country` ← `country`, `Product` ← `product`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSigningRequestConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSigningRequestConfigurationResponse` | `Models/ListSigningRequestConfigurationResponse.cs` |

