<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExternalLink — operations

Accessor: `client.ExternalLink` · Source: `src/Shortcut/Api/ExternalLink.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetExternalLinkStories

- **Auth**: `options.ApiToken`
- **Signature**: `GetExternalLinkStories(GetExternalLinkStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalLink`
- **Query params (wire ← C#)**: `external_link` ← `ExternalLink`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<GetExternalLinkStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExternalLinkStoriesRequest` | `src/Shortcut/Requests/ExternalLink/GetExternalLinkStoriesRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `GetExternalLinkStoriesError` | `src/Shortcut/Errors/GetExternalLinkStoriesError.cs` |

