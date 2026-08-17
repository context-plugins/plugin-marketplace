<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1SupportingDocumentApi — operations

Accessor: `client.TrusthubV1SupportingDocumentApi` · Source: `Api/TrusthubV1SupportingDocumentApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSupportingDocument2

- **Server group**: `Default9`
- **Signature**: `CreateSupportingDocument2(string friendlyName, string type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1SupportingDocument` | `Models/TrusthubV1SupportingDocument.cs` |

### DeleteSupportingDocument2

- **Server group**: `Default9`
- **Signature**: `DeleteSupportingDocument2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSupportingDocument2

- **Server group**: `Default9`
- **Signature**: `FetchSupportingDocument2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1SupportingDocument` | `Models/TrusthubV1SupportingDocument.cs` |

### ListSupportingDocument2

- **Server group**: `Default9`
- **Signature**: `ListSupportingDocument2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSupportingDocumentResponse1` | `Models/ListSupportingDocumentResponse1.cs` |

### UpdateSupportingDocument2

- **Server group**: `Default9`
- **Signature**: `UpdateSupportingDocument2(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1SupportingDocument` | `Models/TrusthubV1SupportingDocument.cs` |

