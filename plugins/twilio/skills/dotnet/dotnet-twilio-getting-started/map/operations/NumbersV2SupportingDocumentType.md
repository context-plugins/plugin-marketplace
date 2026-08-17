<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2SupportingDocumentType — operations

Accessor: `client.NumbersV2SupportingDocumentType` · Source: `Api/NumbersV2SupportingDocumentType.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchSupportingDocumentType

- **Server group**: `Default5`
- **Signature**: `FetchSupportingDocumentType(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocumentType`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocumentType` | `Models/NumbersV2RegulatoryComplianceSupportingDocumentType.cs` |

### ListSupportingDocumentType

- **Server group**: `Default5`
- **Signature**: `ListSupportingDocumentType(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSupportingDocumentTypeResponse` | `Models/ListSupportingDocumentTypeResponse.cs` |

