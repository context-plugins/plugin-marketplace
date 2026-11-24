<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mentions — operations

Accessor: `client.Mentions` · Source: `src/Instagram/Api/Mentions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUserTags

- **Signature**: `GetUserTags(GetUserTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `MediaList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserTagsRequest` | `src/Instagram/Requests/Mentions/GetUserTagsRequest.cs` |
| `MediaList` | `src/Instagram/Models/MediaList.cs` |

