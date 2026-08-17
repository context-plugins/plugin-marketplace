<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2Bundle — operations

Accessor: `client.NumbersV2Bundle` · Source: `Api/NumbersV2Bundle.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBundle

- **Server group**: `Default5`
- **Signature**: `CreateBundle(string friendlyName, string email, string? statusCallback, string? regulationSid, string? isoCountry, BundleEnumEndUserType? endUserType, string? numberType, bool? isTest, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`statusCallback` … `isTest`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BundleEnumEndUserType` | `Models/Enums/BundleEnumEndUserType.cs` |
| `NumbersV2RegulatoryComplianceBundle` | `Models/NumbersV2RegulatoryComplianceBundle.cs` |

### DeleteBundle

- **Server group**: `Default5`
- **Signature**: `DeleteBundle(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchBundle

- **Server group**: `Default5`
- **Signature**: `FetchBundle(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceBundle` | `Models/NumbersV2RegulatoryComplianceBundle.cs` |

### ListBundle

- **Server group**: `Default5`
- **Signature**: `ListBundle(BundleEnumStatus? status, string? bundleSids, string? friendlyName, string? regulationSid, string? isoCountry, string? numberType, BundleEnumEndUserType? endUserType, bool? hasValidUntilDate, BundleEnumSortBy? sortBy, BundleEnumSortDirection? sortDirection, DateTimeOffset? validUntilDate, DateTimeOffset? validUntilDateQuery, DateTimeOffset? validUntilDateQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `BundleSids` ← `bundleSids`, `FriendlyName` ← `friendlyName`, `RegulationSid` ← `regulationSid`, `IsoCountry` ← `isoCountry`, `NumberType` ← `numberType`, `EndUserType` ← `endUserType`, `HasValidUntilDate` ← `hasValidUntilDate`, `SortBy` ← `sortBy`, `SortDirection` ← `sortDirection`, `ValidUntilDate` ← `validUntilDate`, `ValidUntilDate<` ← `validUntilDateQuery`, `ValidUntilDate>` ← `validUntilDateQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBundleResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BundleEnumStatus` | `Models/Enums/BundleEnumStatus.cs` |
| `BundleEnumEndUserType` | `Models/Enums/BundleEnumEndUserType.cs` |
| `BundleEnumSortBy` | `Models/Enums/BundleEnumSortBy.cs` |
| `BundleEnumSortDirection` | `Models/Enums/BundleEnumSortDirection.cs` |
| `ListBundleResponse` | `Models/ListBundleResponse.cs` |

### UpdateBundle

- **Server group**: `Default5`
- **Signature**: `UpdateBundle(string sid, BundleEnumStatus? status, string? statusCallback, string? friendlyName, string? email, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `email`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BundleEnumStatus` | `Models/Enums/BundleEnumStatus.cs` |
| `NumbersV2RegulatoryComplianceBundle` | `Models/NumbersV2RegulatoryComplianceBundle.cs` |

