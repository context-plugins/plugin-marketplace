<!-- Generated file — do not edit; regenerated with the SDK. -->

# Hashtags — operations

Accessor: `client.Hashtags` · Source: `src/Instagram/Api/Hashtags.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetHashtagRecentMedia

- **Signature**: `GetHashtagRecentMedia(GetHashtagRecentMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `HashtagId`, `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `user_id` ← `UserId`, `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `MediaList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetHashtagRecentMediaRequest` | `src/Instagram/Requests/Hashtags/GetHashtagRecentMediaRequest.cs` |
| `MediaList` | `src/Instagram/Models/MediaList.cs` |

### GetHashtagTopMedia

- **Signature**: `GetHashtagTopMedia(GetHashtagTopMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `HashtagId`, `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `user_id` ← `UserId`, `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `MediaList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetHashtagTopMediaRequest` | `src/Instagram/Requests/Hashtags/GetHashtagTopMediaRequest.cs` |
| `MediaList` | `src/Instagram/Models/MediaList.cs` |

### SearchHashtag

- **Signature**: `SearchHashtag(SearchHashtagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`, `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `q` ← `Q`, `user_id` ← `UserId`, `access_token` ← `AccessToken`
- **Returns**: `IgHashtagSearchResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchHashtagRequest` | `src/Instagram/Requests/Hashtags/SearchHashtagRequest.cs` |
| `IgHashtagSearchResponse` | `src/Instagram/Models/IgHashtagSearchResponse.cs` |

