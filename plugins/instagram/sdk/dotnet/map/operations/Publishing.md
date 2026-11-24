<!-- Generated file — do not edit; regenerated with the SDK. -->

# Publishing — operations

Accessor: `client.Publishing` · Source: `src/Instagram/Api/Publishing.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMediaContainer

- **Signature**: `CreateMediaContainer(CreateMediaContainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ContainerResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateMediaContainerRequest` | `src/Instagram/Requests/Publishing/CreateMediaContainerRequest.cs` |
| `CreateContainerRequest` | `src/Instagram/Models/CreateContainerRequest.cs` |
| `ContainerResponse` | `src/Instagram/Models/ContainerResponse.cs` |

### GetContainer

- **Signature**: `GetContainer(GetContainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContainerId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `ResponseInstagramGraphPublishingApi`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetContainerRequest` | `src/Instagram/Requests/Publishing/GetContainerRequest.cs` |
| `ResponseInstagramGraphPublishingApi` | `src/Instagram/Models/ResponseInstagramGraphPublishingApi.cs` |

### GetContentPublishingLimit

- **Signature**: `GetContentPublishingLimit(GetContentPublishingLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `ContentPublishingLimitResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetContentPublishingLimitRequest` | `src/Instagram/Requests/Publishing/GetContentPublishingLimitRequest.cs` |
| `ContentPublishingLimitResponse` | `src/Instagram/Models/ContentPublishingLimitResponse.cs` |

### PublishMedia

- **Signature**: `PublishMedia(PublishMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `MediaPublishResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PublishMediaRequest` | `src/Instagram/Requests/Publishing/PublishMediaRequest.cs` |
| `MediaPublishRequest` | `src/Instagram/Models/MediaPublishRequest.cs` |
| `MediaPublishResponse` | `src/Instagram/Models/MediaPublishResponse.cs` |

