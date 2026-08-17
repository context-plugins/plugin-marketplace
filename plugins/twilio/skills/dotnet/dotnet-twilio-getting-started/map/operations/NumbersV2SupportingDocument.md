<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2SupportingDocument — operations

Accessor: `client.NumbersV2SupportingDocument` · Source: `Api/NumbersV2SupportingDocument.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSupportingDocument

- **Server group**: `Default5`
- **Signature**: `CreateSupportingDocument(string friendlyName, string type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `Models/NumbersV2RegulatoryComplianceSupportingDocument.cs` |

### DeleteSupportingDocument

- **Server group**: `Default5`
- **Signature**: `DeleteSupportingDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSupportingDocument

- **Server group**: `Default5`
- **Signature**: `FetchSupportingDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `Models/NumbersV2RegulatoryComplianceSupportingDocument.cs` |

### ListSupportingDocument

- **Server group**: `Default5`
- **Signature**: `ListSupportingDocument(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSupportingDocumentResponse` | `Models/ListSupportingDocumentResponse.cs` |

### UpdateSupportingDocument

- **Server group**: `Default5`
- **Signature**: `UpdateSupportingDocument(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `Models/NumbersV2RegulatoryComplianceSupportingDocument.cs` |

