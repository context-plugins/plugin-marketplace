<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/ReadMe/Api/Analytics.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPageviews

- **Auth**: `options.BasicAuth`
- **Signature**: `GetPageviews(GetPageviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPageviewsRequest` | `src/ReadMe/Requests/Analytics/GetPageviewsRequest.cs` |

### GetQuality

- **Auth**: `options.BasicAuth`
- **Signature**: `GetQuality(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### GetSearch

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSearch(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

