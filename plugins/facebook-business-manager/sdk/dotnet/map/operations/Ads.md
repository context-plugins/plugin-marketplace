<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ads — operations

Accessor: `client.Ads` · Source: `src/FacebookBusinessManager/Api/Ads.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAd

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateAd(CreateAdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreateAdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAdRequest` | `src/FacebookBusinessManager/Requests/Ads/CreateAdRequest.cs` |
| `AdCreate` | `src/FacebookBusinessManager/Models/AdCreate.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreateAdError` | `src/FacebookBusinessManager/Errors/CreateAdError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetAd

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAd(GetAdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdId`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `Ad`
- **Error**: `ApiException<GetAdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAdRequest` | `src/FacebookBusinessManager/Requests/Ads/GetAdRequest.cs` |
| `Ad` | `src/FacebookBusinessManager/Models/Ad.cs` |
| `GetAdError` | `src/FacebookBusinessManager/Errors/GetAdError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### ListAds

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAds(ListAdsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`
- **Returns**: `AdList`
- **Error**: `ApiException<ListAdsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAdsRequest` | `src/FacebookBusinessManager/Requests/Ads/ListAdsRequest.cs` |
| `AdList` | `src/FacebookBusinessManager/Models/AdList.cs` |
| `ListAdsError` | `src/FacebookBusinessManager/Errors/ListAdsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

