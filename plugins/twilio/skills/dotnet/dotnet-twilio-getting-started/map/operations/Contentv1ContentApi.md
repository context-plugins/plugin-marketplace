<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1ContentApi — operations

Accessor: `client.Contentv1ContentApi` · Source: `Api/Contentv1ContentApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateContent

- **Server group**: `Default2`
- **Signature**: `CreateContent(ContentCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ContentV1Content`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContentCreateRequest` | `Models/ContentCreateRequest.cs` |
| `ContentV1Content` | `Models/ContentV1Content.cs` |

### DeleteContent

- **Server group**: `Default2`
- **Signature**: `DeleteContent(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchContent

- **Server group**: `Default2`
- **Signature**: `FetchContent(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ContentV1Content`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContentV1Content` | `Models/ContentV1Content.cs` |

### ListContent

- **Server group**: `Default2`
- **Signature**: `ListContent(int? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListContentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListContentResponse` | `Models/ListContentResponse.cs` |

### UpdateContent

- **Server group**: `Default2`
- **Signature**: `UpdateContent(string sid, ContentUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ContentV1Content`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContentUpdateRequest` | `Models/ContentUpdateRequest.cs` |
| `ContentV1Content` | `Models/ContentV1Content.cs` |

