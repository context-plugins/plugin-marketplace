<!-- Generated file — do not edit; regenerated with the SDK. -->

# Developer — operations

Accessor: `client.Developer` · Source: `Api/Developer.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeveloperSearch

- **Signature**: `DeveloperSearch(string query, IReadOnlyList<Types1>? types, IReadOnlyList<string>? repos, IReadOnlyList<string>? sources, Skills? skills, string? language, string? topic, string? license, int? minStars, int? maxStars, bool? archived, bool? fork, int? k = 10, int? passages = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`types` … `fork`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `k` = `10`, `passages` = `1`
- **Query params (wire ← C#)**: `query` ← `query`, `k` ← `k`, `types` ← `types`, `repos` ← `repos`, `sources` ← `sources`, `skills` ← `skills`, `passages` ← `passages`, `language` ← `language`, `topic` ← `topic`, `license` ← `license`, `min_stars` ← `minStars`, `max_stars` ← `maxStars`, `archived` ← `archived`, `fork` ← `fork`
- **Returns**: `DeveloperSearchResponse`
- **Error**: `SdkException<DeveloperSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Types1` | `Models/Enums/Types1.cs` |
| `Skills` | `Models/Enums/Skills.cs` |
| `DeveloperSearchResponse` | `Models/DeveloperSearchResponse.cs` |
| `DeveloperSearchError` | `Errors/DeveloperSearchError.cs` |

### DeveloperSearchPost

- **Signature**: `DeveloperSearchPost(SearchDeveloperRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DeveloperSearchResponse`
- **Error**: `SdkException<DeveloperSearchPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchDeveloperRequest` | `Models/SearchDeveloperRequest.cs` |
| `DeveloperSearchResponse` | `Models/DeveloperSearchResponse.cs` |
| `DeveloperSearchPostError` | `Errors/DeveloperSearchPostError.cs` |

