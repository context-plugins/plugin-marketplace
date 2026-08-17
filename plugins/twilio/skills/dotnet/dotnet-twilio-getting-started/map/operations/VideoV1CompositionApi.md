<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1CompositionApi — operations

Accessor: `client.VideoV1CompositionApi` · Source: `Api/VideoV1CompositionApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateComposition

- **Server group**: `Default6`
- **Signature**: `CreateComposition(string roomSid, object? videoLayout, IReadOnlyList<string>? audioSources, IReadOnlyList<string>? audioSourcesExcluded, string? resolution, CompositionEnumFormat? format, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, bool? trim, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`videoLayout` … `trim`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VideoV1Composition`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CompositionEnumFormat` | `Models/Enums/CompositionEnumFormat.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `VideoV1Composition` | `Models/VideoV1Composition.cs` |

### DeleteComposition

- **Server group**: `Default6`
- **Signature**: `DeleteComposition(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchComposition

- **Server group**: `Default6`
- **Signature**: `FetchComposition(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1Composition`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1Composition` | `Models/VideoV1Composition.cs` |

### ListComposition

- **Server group**: `Default6`
- **Signature**: `ListComposition(CompositionEnumStatus? status, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? roomSid, int? page, string? pageToken, long? pageSize = 50L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = `50L`
- **Query params (wire ← C#)**: `Status` ← `status`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `RoomSid` ← `roomSid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCompositionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CompositionEnumStatus` | `Models/Enums/CompositionEnumStatus.cs` |
| `ListCompositionResponse` | `Models/ListCompositionResponse.cs` |

