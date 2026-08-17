<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1SupportingDocumentType — operations

Accessor: `client.TrusthubV1SupportingDocumentType` · Source: `Api/TrusthubV1SupportingDocumentType.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchSupportingDocumentType2

- **Server group**: `Default9`
- **Signature**: `FetchSupportingDocumentType2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceEndUserType`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceEndUserType` | `Models/NumbersV2RegulatoryComplianceEndUserType.cs` |

### ListSupportingDocumentType2

- **Server group**: `Default9`
- **Signature**: `ListSupportingDocumentType2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentTypeResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSupportingDocumentTypeResponse1` | `Models/ListSupportingDocumentTypeResponse1.cs` |

