<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/Ortto/Api/Tags.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTags

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetTags(GetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TagsGetResponse`
- **Error**: `ApiException<GetTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTagsRequest` | `src/Ortto/Requests/Tags/GetTagsRequest.cs` |
| `TagsGetRequest` | `src/Ortto/Models/TagsGetRequest.cs` |
| `TagsGetResponse` | `src/Ortto/Models/TagsGetResponse.cs` |
| `GetTagsError` | `src/Ortto/Errors/GetTagsError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

