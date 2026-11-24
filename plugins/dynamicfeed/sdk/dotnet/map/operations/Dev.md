<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dev — operations

Accessor: `client.Dev` · Source: `src/DynamicFeed/Api/Dev.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DnsEpDnsGet

- **Signature**: `DnsEpDnsGet(DnsEpDnsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`, `type` ← `Type`
- **Returns**: `object`
- **Error**: `ApiException<DnsEpDnsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnsEpDnsGetRequest` | `src/DynamicFeed/Requests/Dev/DnsEpDnsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `DnsEpDnsGetError` | `src/DynamicFeed/Errors/DnsEpDnsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### GithubReleasesEpGithubReleasesGet

- **Signature**: `GithubReleasesEpGithubReleasesGet(GithubReleasesEpGithubReleasesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Repo`
- **Query params (wire ← C#)**: `repo` ← `Repo`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<GithubReleasesEpGithubReleasesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GithubReleasesEpGithubReleasesGetRequest` | `src/DynamicFeed/Requests/Dev/GithubReleasesEpGithubReleasesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `GithubReleasesEpGithubReleasesGetError` | `src/DynamicFeed/Errors/GithubReleasesEpGithubReleasesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### HackerNewsEpHackerNewsGet

- **Signature**: `HackerNewsEpHackerNewsGet(HackerNewsEpHackerNewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `query` ← `Query`, `kind` ← `Kind`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<HackerNewsEpHackerNewsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HackerNewsEpHackerNewsGetRequest` | `src/DynamicFeed/Requests/Dev/HackerNewsEpHackerNewsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `HackerNewsEpHackerNewsGetError` | `src/DynamicFeed/Errors/HackerNewsEpHackerNewsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

