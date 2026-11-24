<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/ReadMe/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSearch2

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetSearch2(GetSearch2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSearch2Request` | `src/ReadMe/Requests/Search/GetSearch2Request.cs` |

