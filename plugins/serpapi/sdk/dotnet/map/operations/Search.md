<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/SerpApi/Api/Search.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSearch

- **Auth**: `options.ApiKey`
- **Signature**: `GetSearch(GetSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SearchId`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSearchRequest` | `src/SerpApi/Requests/Search/GetSearchRequest.cs` |

### RunSearch

- **Auth**: `options.ApiKey`
- **Signature**: `RunSearch(RunSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Engine`
- **Query params (wire ← C#)**: `engine` ← `Engine`, `q` ← `Q`, `search_query` ← `SearchQuery`, `api_key` ← `ApiKey`, `location` ← `Location`, `gl` ← `Gl`, `hl` ← `Hl`, `device` ← `Device`, `no_cache` ← `NoCache`, `async` ← `Async`, `output` ← `Output`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RunSearchRequest` | `src/SerpApi/Requests/Search/RunSearchRequest.cs` |
| `Device` | `src/SerpApi/Models/Enums/Device.cs` |
| `Output` | `src/SerpApi/Models/Enums/Output.cs` |

