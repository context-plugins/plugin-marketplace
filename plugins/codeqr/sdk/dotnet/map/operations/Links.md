<!-- Generated file — do not edit; regenerated with the SDK. -->

# Links — operations

Accessor: `client.Links` · Source: `src/CodeQr/Api/Links.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkCreateLinks

- **Auth**: `options.Token`
- **Signature**: `BulkCreateLinks(BulkCreateLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<LinksBulkResponse1>`
- **Error**: `ApiException<BulkCreateLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateLinksRequest` | `src/CodeQr/Requests/Links/BulkCreateLinksRequest.cs` |
| `LinksBulkRequest` | `src/CodeQr/Models/LinksBulkRequest.cs` |
| `LinksBulkResponse1` | `src/CodeQr/Models/AnyOf/LinksBulkResponse1.cs` |
| `BulkCreateLinksError` | `src/CodeQr/Errors/BulkCreateLinksError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### BulkDeleteLinks

- **Auth**: `options.Token`
- **Signature**: `BulkDeleteLinks(BulkDeleteLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkIds`
- **Query params (wire ← C#)**: `linkIds` ← `LinkIds` (comma-separated)
- **Returns**: `LinksBulkResponse`
- **Error**: `ApiException<BulkDeleteLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkDeleteLinksRequest` | `src/CodeQr/Requests/Links/BulkDeleteLinksRequest.cs` |
| `LinksBulkResponse` | `src/CodeQr/Models/LinksBulkResponse.cs` |
| `BulkDeleteLinksError` | `src/CodeQr/Errors/BulkDeleteLinksError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### CreateLink

- **Auth**: `options.Token`
- **Signature**: `CreateLink(CreateLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `LinkCodeqrIoLinksApi`
- **Error**: `ApiException<CreateLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLinkRequest` | `src/CodeQr/Requests/Links/CreateLinkRequest.cs` |
| `LinksRequest` | `src/CodeQr/Models/LinksRequest.cs` |
| `LinkCodeqrIoLinksApi` | `src/CodeQr/Models/LinkCodeqrIoLinksApi.cs` |
| `CreateLinkError` | `src/CodeQr/Errors/CreateLinkError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### DeleteLink

- **Auth**: `options.Token`
- **Signature**: `DeleteLink(DeleteLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkId`
- **Returns**: `LinksResponse`
- **Error**: `ApiException<DeleteLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLinkRequest` | `src/CodeQr/Requests/Links/DeleteLinkRequest.cs` |
| `LinksResponse` | `src/CodeQr/Models/LinksResponse.cs` |
| `DeleteLinkError` | `src/CodeQr/Errors/DeleteLinkError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetLinkInfo

- **Auth**: `options.Token`
- **Signature**: `GetLinkInfo(GetLinkInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Domain`, `Key`
- **Query params (wire ← C#)**: `projectSlug` ← `ProjectSlug`, `domain` ← `Domain`, `key` ← `Key`, `linkId` ← `LinkId`, `externalId` ← `ExternalId`
- **Returns**: `LinkCodeqrIoLinksApi`
- **Error**: `ApiException<GetLinkInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLinkInfoRequest` | `src/CodeQr/Requests/Links/GetLinkInfoRequest.cs` |
| `LinkCodeqrIoLinksApi` | `src/CodeQr/Models/LinkCodeqrIoLinksApi.cs` |
| `GetLinkInfoError` | `src/CodeQr/Errors/GetLinkInfoError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetLinks

- **Auth**: `options.Token`
- **Signature**: `GetLinks(GetLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `projectSlug` ← `ProjectSlug`, `domain` ← `Domain`, `tagId` ← `TagId`, `tagIds` ← `TagIds`, `tagNames` ← `TagNames`, `folderId` ← `FolderId`, `search` ← `Search`, `userId` ← `UserId`, `showArchived` ← `ShowArchived`, `password` ← `Password`, `expiresAt` ← `ExpiresAt`, `Geo` spread as top-level keys, `ios` ← `Ios`, `android` ← `Android`, `comments` ← `Comments`, `withTags` ← `WithTags`, `trackConversion` ← `TrackConversion`, `useAsTemplate` ← `UseAsTemplate`, `hasPassword` ← `HasPassword`, `hasExpiration` ← `HasExpiration`, `hasUTM` ← `HasUtm`, `hasCustomSocial` ← `HasCustomSocial`, `hasGeo` ← `HasGeo`, `hasDevice` ← `HasDevice`, `hasComments` ← `HasComments`, `hasTags` ← `HasTags`, `createdAfter` ← `CreatedAfter`, `createdBefore` ← `CreatedBefore`, `expiresAfter` ← `ExpiresAfter`, `expiresBefore` ← `ExpiresBefore`, `clicksMin` ← `ClicksMin`, `clicksMax` ← `ClicksMax`, `utm_source` ← `UtmSource`, `utm_medium` ← `UtmMedium`, `utm_campaign` ← `UtmCampaign`, `utm_content` ← `UtmContent`, `utm_term` ← `UtmTerm`, `sort` ← `Sort`, `linkIds` ← `LinkIds`, `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `IReadOnlyList<LinkCodeqrIoLinksApi>`
- **Error**: `ApiException<GetLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLinksRequest` | `src/CodeQr/Requests/Links/GetLinksRequest.cs` |
| `TagIdsModel` | `src/CodeQr/Models/AnyOf/TagIdsModel.cs` |
| `TagNames` | `src/CodeQr/Models/AnyOf/TagNames.cs` |
| `Geo1` | `src/CodeQr/Models/Geo1.cs` |
| `Sort` | `src/CodeQr/Models/Enums/Sort.cs` |
| `LinkIds` | `src/CodeQr/Models/AnyOf/LinkIds.cs` |
| `LinkCodeqrIoLinksApi` | `src/CodeQr/Models/LinkCodeqrIoLinksApi.cs` |
| `GetLinksError` | `src/CodeQr/Errors/GetLinksError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetLinksCount

- **Auth**: `options.Token`
- **Signature**: `GetLinksCount(GetLinksCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `projectSlug` ← `ProjectSlug`, `domain` ← `Domain`, `tagId` ← `TagId`, `tagIds` ← `TagIds`, `tagNames` ← `TagNames`, `folderId` ← `FolderId`, `search` ← `Search`, `userId` ← `UserId`, `showArchived` ← `ShowArchived`, `password` ← `Password`, `expiresAt` ← `ExpiresAt`, `Geo` spread as top-level keys, `ios` ← `Ios`, `android` ← `Android`, `comments` ← `Comments`, `withTags` ← `WithTags`, `trackConversion` ← `TrackConversion`, `useAsTemplate` ← `UseAsTemplate`, `hasPassword` ← `HasPassword`, `hasExpiration` ← `HasExpiration`, `hasUTM` ← `HasUtm`, `hasCustomSocial` ← `HasCustomSocial`, `hasGeo` ← `HasGeo`, `hasDevice` ← `HasDevice`, `hasComments` ← `HasComments`, `hasTags` ← `HasTags`, `createdAfter` ← `CreatedAfter`, `createdBefore` ← `CreatedBefore`, `expiresAfter` ← `ExpiresAfter`, `expiresBefore` ← `ExpiresBefore`, `clicksMin` ← `ClicksMin`, `clicksMax` ← `ClicksMax`, `utm_source` ← `UtmSource`, `utm_medium` ← `UtmMedium`, `utm_campaign` ← `UtmCampaign`, `utm_content` ← `UtmContent`, `utm_term` ← `UtmTerm`, `groupBy` ← `GroupBy`
- **Returns**: `double`
- **Error**: `ApiException<GetLinksCountError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLinksCountRequest` | `src/CodeQr/Requests/Links/GetLinksCountRequest.cs` |
| `TagIdsModel` | `src/CodeQr/Models/AnyOf/TagIdsModel.cs` |
| `TagNames` | `src/CodeQr/Models/AnyOf/TagNames.cs` |
| `Geo1` | `src/CodeQr/Models/Geo1.cs` |
| `GroupBy4` | `src/CodeQr/Models/AnyOf/GroupBy4.cs` |
| `GetLinksCountError` | `src/CodeQr/Errors/GetLinksCountError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### UpdateLink

- **Auth**: `options.Token`
- **Signature**: `UpdateLink(UpdateLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkId`
- **Returns**: `LinkCodeqrIoLinksApi`
- **Error**: `ApiException<UpdateLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLinkRequest` | `src/CodeQr/Requests/Links/UpdateLinkRequest.cs` |
| `LinksRequest1` | `src/CodeQr/Models/LinksRequest1.cs` |
| `LinkCodeqrIoLinksApi` | `src/CodeQr/Models/LinkCodeqrIoLinksApi.cs` |
| `UpdateLinkError` | `src/CodeQr/Errors/UpdateLinkError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

