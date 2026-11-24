<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.QrCodes` · Source: `src/CodeQr/Api/QrCodes.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkCreateQrCodes

- **Auth**: `options.Token`
- **Signature**: `BulkCreateQrCodes(BulkCreateQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<QrcodesBulkResponse1>`
- **Error**: `ApiException<BulkCreateQrCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateQrCodesRequest` | `src/CodeQr/Requests/QrCodes/BulkCreateQrCodesRequest.cs` |
| `QrcodesBulkRequest` | `src/CodeQr/Models/QrcodesBulkRequest.cs` |
| `QrcodesBulkResponse1` | `src/CodeQr/Models/AnyOf/QrcodesBulkResponse1.cs` |
| `BulkCreateQrCodesError` | `src/CodeQr/Errors/BulkCreateQrCodesError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### BulkDeleteQrCodes

- **Auth**: `options.Token`
- **Signature**: `BulkDeleteQrCodes(BulkDeleteQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeIds`
- **Query params (wire ← C#)**: `qrcodeIds` ← `QrcodeIds` (comma-separated)
- **Returns**: `QrcodesBulkResponse`
- **Error**: `ApiException<BulkDeleteQrCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkDeleteQrCodesRequest` | `src/CodeQr/Requests/QrCodes/BulkDeleteQrCodesRequest.cs` |
| `QrcodesBulkResponse` | `src/CodeQr/Models/QrcodesBulkResponse.cs` |
| `BulkDeleteQrCodesError` | `src/CodeQr/Errors/BulkDeleteQrCodesError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### CreateQrCode

- **Auth**: `options.Token`
- **Signature**: `CreateQrCode(CreateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `QrCode`
- **Error**: `ApiException<CreateQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateQrCodeRequest` | `src/CodeQr/Requests/QrCodes/CreateQrCodeRequest.cs` |
| `QrcodesRequest` | `src/CodeQr/Models/QrcodesRequest.cs` |
| `QrCode` | `src/CodeQr/Models/QrCode.cs` |
| `CreateQrCodeError` | `src/CodeQr/Errors/CreateQrCodeError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### DeleteQrCode

- **Auth**: `options.Token`
- **Signature**: `DeleteQrCode(DeleteQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Returns**: `QrcodesResponse`
- **Error**: `ApiException<DeleteQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteQrCodeRequest` | `src/CodeQr/Requests/QrCodes/DeleteQrCodeRequest.cs` |
| `QrcodesResponse` | `src/CodeQr/Models/QrcodesResponse.cs` |
| `DeleteQrCodeError` | `src/CodeQr/Errors/DeleteQrCodeError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetQrCodeInfo

- **Auth**: `options.Token`
- **Signature**: `GetQrCodeInfo(GetQrCodeInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Domain`, `Key`
- **Query params (wire ← C#)**: `projectSlug` ← `ProjectSlug`, `domain` ← `Domain`, `key` ← `Key`, `qrCodeId` ← `QrCodeId`, `externalId` ← `ExternalId`
- **Returns**: `QrCode`
- **Error**: `ApiException<GetQrCodeInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQrCodeInfoRequest` | `src/CodeQr/Requests/QrCodes/GetQrCodeInfoRequest.cs` |
| `QrCode` | `src/CodeQr/Models/QrCode.cs` |
| `GetQrCodeInfoError` | `src/CodeQr/Errors/GetQrCodeInfoError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetQrCodes

- **Auth**: `options.Token`
- **Signature**: `GetQrCodes(GetQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `projectSlug` ← `ProjectSlug`, `domain` ← `Domain`, `tagId` ← `TagId`, `tagIds` ← `TagIds`, `tagNames` ← `TagNames`, `folderId` ← `FolderId`, `search` ← `Search`, `userId` ← `UserId`, `showArchived` ← `ShowArchived`, `comments` ← `Comments`, `password` ← `Password`, `expiresAt` ← `ExpiresAt`, `trackConversion` ← `TrackConversion`, `withTags` ← `WithTags`, `useAsTemplate` ← `UseAsTemplate`, `format` ← `Format`, `type` ← `Type`, `hasPassword` ← `HasPassword`, `hasExpiration` ← `HasExpiration`, `hasUTM` ← `HasUtm`, `hasCustomSocial` ← `HasCustomSocial`, `hasGeo` ← `HasGeo`, `hasDevice` ← `HasDevice`, `hasComments` ← `HasComments`, `hasTags` ← `HasTags`, `createdAfter` ← `CreatedAfter`, `createdBefore` ← `CreatedBefore`, `expiresAfter` ← `ExpiresAfter`, `expiresBefore` ← `ExpiresBefore`, `scansMin` ← `ScansMin`, `scansMax` ← `ScansMax`, `utm_source` ← `UtmSource`, `utm_medium` ← `UtmMedium`, `utm_campaign` ← `UtmCampaign`, `utm_content` ← `UtmContent`, `utm_term` ← `UtmTerm`, `sort` ← `Sort`, `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `IReadOnlyList<QrCode>`
- **Error**: `ApiException<GetQrCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQrCodesRequest` | `src/CodeQr/Requests/QrCodes/GetQrCodesRequest.cs` |
| `TagIdsModel` | `src/CodeQr/Models/AnyOf/TagIdsModel.cs` |
| `TagNames` | `src/CodeQr/Models/AnyOf/TagNames.cs` |
| `Format` | `src/CodeQr/Models/Enums/Format.cs` |
| `Type2` | `src/CodeQr/Models/Enums/Type2.cs` |
| `SortCodeqrIoQrCodesApi` | `src/CodeQr/Models/Enums/SortCodeqrIoQrCodesApi.cs` |
| `QrCode` | `src/CodeQr/Models/QrCode.cs` |
| `GetQrCodesError` | `src/CodeQr/Errors/GetQrCodesError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetQrCodesCount

- **Auth**: `options.Token`
- **Signature**: `GetQrCodesCount(GetQrCodesCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `projectSlug` ← `ProjectSlug`, `domain` ← `Domain`, `tagId` ← `TagId`, `tagIds` ← `TagIds`, `tagNames` ← `TagNames`, `folderId` ← `FolderId`, `search` ← `Search`, `userId` ← `UserId`, `showArchived` ← `ShowArchived`, `comments` ← `Comments`, `password` ← `Password`, `expiresAt` ← `ExpiresAt`, `trackConversion` ← `TrackConversion`, `withTags` ← `WithTags`, `useAsTemplate` ← `UseAsTemplate`, `format` ← `Format`, `type` ← `Type`, `hasPassword` ← `HasPassword`, `hasExpiration` ← `HasExpiration`, `hasUTM` ← `HasUtm`, `hasCustomSocial` ← `HasCustomSocial`, `hasGeo` ← `HasGeo`, `hasDevice` ← `HasDevice`, `hasComments` ← `HasComments`, `hasTags` ← `HasTags`, `createdAfter` ← `CreatedAfter`, `createdBefore` ← `CreatedBefore`, `expiresAfter` ← `ExpiresAfter`, `expiresBefore` ← `ExpiresBefore`, `scansMin` ← `ScansMin`, `scansMax` ← `ScansMax`, `utm_source` ← `UtmSource`, `utm_medium` ← `UtmMedium`, `utm_campaign` ← `UtmCampaign`, `utm_content` ← `UtmContent`, `utm_term` ← `UtmTerm`, `groupBy` ← `GroupBy`
- **Returns**: `double`
- **Error**: `ApiException<GetQrCodesCountError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQrCodesCountRequest` | `src/CodeQr/Requests/QrCodes/GetQrCodesCountRequest.cs` |
| `TagIdsModel` | `src/CodeQr/Models/AnyOf/TagIdsModel.cs` |
| `TagNames` | `src/CodeQr/Models/AnyOf/TagNames.cs` |
| `Format` | `src/CodeQr/Models/Enums/Format.cs` |
| `Type2` | `src/CodeQr/Models/Enums/Type2.cs` |
| `GroupBy4CodeqrIoQrCodesApi` | `src/CodeQr/Models/AnyOf/GroupBy4CodeqrIoQrCodesApi.cs` |
| `GetQrCodesCountError` | `src/CodeQr/Errors/GetQrCodesCountError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### UpdateQrCode

- **Auth**: `options.Token`
- **Signature**: `UpdateQrCode(UpdateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Returns**: `QrCode`
- **Error**: `ApiException<UpdateQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateQrCodeRequest` | `src/CodeQr/Requests/QrCodes/UpdateQrCodeRequest.cs` |
| `QrcodesRequest1` | `src/CodeQr/Models/QrcodesRequest1.cs` |
| `QrCode` | `src/CodeQr/Models/QrCode.cs` |
| `UpdateQrCodeError` | `src/CodeQr/Errors/UpdateQrCodeError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

