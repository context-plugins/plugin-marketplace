<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1CompositionHookApi — operations

Accessor: `client.VideoV1CompositionHookApi` · Source: `Api/VideoV1CompositionHookApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCompositionHook

- **Server group**: `Default6`
- **Signature**: `CreateCompositionHook(string friendlyName, bool? enabled, object? videoLayout, IReadOnlyList<string>? audioSources, IReadOnlyList<string>? audioSourcesExcluded, string? resolution, CompositionHookEnumFormat? format, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, bool? trim, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`enabled` … `trim`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VideoV1CompositionHook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CompositionHookEnumFormat` | `Models/Enums/CompositionHookEnumFormat.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `VideoV1CompositionHook` | `Models/VideoV1CompositionHook.cs` |

### DeleteCompositionHook

- **Server group**: `Default6`
- **Signature**: `DeleteCompositionHook(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchCompositionHook

- **Server group**: `Default6`
- **Signature**: `FetchCompositionHook(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1CompositionHook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1CompositionHook` | `Models/VideoV1CompositionHook.cs` |

### ListCompositionHook

- **Server group**: `Default6`
- **Signature**: `ListCompositionHook(bool? enabled, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`enabled` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Enabled` ← `enabled`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCompositionHookResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCompositionHookResponse` | `Models/ListCompositionHookResponse.cs` |

### UpdateCompositionHook

- **Server group**: `Default6`
- **Signature**: `UpdateCompositionHook(string sid, string friendlyName, bool? enabled, object? videoLayout, IReadOnlyList<string>? audioSources, IReadOnlyList<string>? audioSourcesExcluded, bool? trim, CompositionHookEnumFormat? format, string? resolution, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`enabled` … `statusCallbackMethod`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VideoV1CompositionHook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CompositionHookEnumFormat` | `Models/Enums/CompositionHookEnumFormat.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `VideoV1CompositionHook` | `Models/VideoV1CompositionHook.cs` |

