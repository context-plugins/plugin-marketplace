<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/BundleSocial/Api/Analytics.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AnalyticsForcePostAnalytics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsForcePostAnalytics(AnalyticsForcePostAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1AnalyticsPostForceResponse`
- **Error**: `ApiException<AnalyticsForcePostAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsPostForce400Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce400Error1? value)` [400] · `TryGetApiV1AnalyticsPostForce401Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce401Error1? value)` [401] · `TryGetApiV1AnalyticsPostForce403Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce403Error1? value)` [403] · `TryGetApiV1AnalyticsPostForce404Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce404Error1? value)` [404] · `TryGetApiV1AnalyticsPostForce429Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce429Error1? value)` [429] · `TryGetApiV1AnalyticsPostForce500Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce500Error1? value)` [500] · `TryGetApiV1AnalyticsPostForce502Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce502Error1? value)` [502] · `TryGetApiV1AnalyticsPostForce503Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce503Error1? value)` [503] · `TryGetApiV1AnalyticsPostForce504Error1([NotNullWhen(true)] out ApiV1AnalyticsPostForce504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsForcePostAnalyticsRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsForcePostAnalyticsRequest.cs` |
| `ApiV1AnalyticsPostForceRequest` | `src/BundleSocial/Models/ApiV1AnalyticsPostForceRequest.cs` |
| `ApiV1AnalyticsPostForceResponse` | `src/BundleSocial/Models/ApiV1AnalyticsPostForceResponse.cs` |
| `AnalyticsForcePostAnalyticsError` | `src/BundleSocial/Errors/AnalyticsForcePostAnalyticsError.cs` |
| `ApiV1AnalyticsPostForce400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce400Error1.cs` |
| `ApiV1AnalyticsPostForce401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce401Error1.cs` |
| `ApiV1AnalyticsPostForce403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce403Error1.cs` |
| `ApiV1AnalyticsPostForce404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce404Error1.cs` |
| `ApiV1AnalyticsPostForce429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce429Error1.cs` |
| `ApiV1AnalyticsPostForce500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce500Error1.cs` |
| `ApiV1AnalyticsPostForce502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce502Error1.cs` |
| `ApiV1AnalyticsPostForce503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce503Error1.cs` |
| `ApiV1AnalyticsPostForce504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostForce504Error1.cs` |

### AnalyticsForceSocialAccountAnalytics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsForceSocialAccountAnalytics(AnalyticsForceSocialAccountAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1AnalyticsSocialAccountForceResponse`
- **Error**: `ApiException<AnalyticsForceSocialAccountAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsSocialAccountForce400Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce400Error1? value)` [400] · `TryGetApiV1AnalyticsSocialAccountForce401Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce401Error1? value)` [401] · `TryGetApiV1AnalyticsSocialAccountForce403Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce403Error1? value)` [403] · `TryGetApiV1AnalyticsSocialAccountForce404Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce404Error1? value)` [404] · `TryGetApiV1AnalyticsSocialAccountForce429Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce429Error1? value)` [429] · `TryGetApiV1AnalyticsSocialAccountForce500Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce500Error1? value)` [500] · `TryGetApiV1AnalyticsSocialAccountForce502Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce502Error1? value)` [502] · `TryGetApiV1AnalyticsSocialAccountForce503Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce503Error1? value)` [503] · `TryGetApiV1AnalyticsSocialAccountForce504Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountForce504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsForceSocialAccountAnalyticsRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsForceSocialAccountAnalyticsRequest.cs` |
| `ApiV1AnalyticsSocialAccountForceRequest` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForceRequest.cs` |
| `ApiV1AnalyticsSocialAccountForceResponse` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForceResponse.cs` |
| `AnalyticsForceSocialAccountAnalyticsError` | `src/BundleSocial/Errors/AnalyticsForceSocialAccountAnalyticsError.cs` |
| `ApiV1AnalyticsSocialAccountForce400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce400Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce401Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce403Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce404Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce429Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce500Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce502Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce503Error1.cs` |
| `ApiV1AnalyticsSocialAccountForce504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForce504Error1.cs` |

### AnalyticsGetBulkPostAnalytics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsGetBulkPostAnalytics(AnalyticsGetBulkPostAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PostIds`, `PlatformType`
- **Query params (wire ← C#)**: `postIds` ← `PostIds`, `platformType` ← `PlatformType`, `page` ← `Page`, `limit` ← `Limit`
- **Returns**: `ApiV1AnalyticsPostBulkResponse`
- **Error**: `ApiException<AnalyticsGetBulkPostAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsPostBulk400Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk400Error1? value)` [400] · `TryGetApiV1AnalyticsPostBulk401Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk401Error1? value)` [401] · `TryGetApiV1AnalyticsPostBulk403Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk403Error1? value)` [403] · `TryGetApiV1AnalyticsPostBulk404Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk404Error1? value)` [404] · `TryGetApiV1AnalyticsPostBulk429Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk429Error1? value)` [429] · `TryGetApiV1AnalyticsPostBulk500Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk500Error1? value)` [500] · `TryGetApiV1AnalyticsPostBulk502Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk502Error1? value)` [502] · `TryGetApiV1AnalyticsPostBulk503Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk503Error1? value)` [503] · `TryGetApiV1AnalyticsPostBulk504Error1([NotNullWhen(true)] out ApiV1AnalyticsPostBulk504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsGetBulkPostAnalyticsRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsGetBulkPostAnalyticsRequest.cs` |
| `PlatformType` | `src/BundleSocial/Models/Enums/PlatformType.cs` |
| `ApiV1AnalyticsPostBulkResponse` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulkResponse.cs` |
| `AnalyticsGetBulkPostAnalyticsError` | `src/BundleSocial/Errors/AnalyticsGetBulkPostAnalyticsError.cs` |
| `ApiV1AnalyticsPostBulk400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk400Error1.cs` |
| `ApiV1AnalyticsPostBulk401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk401Error1.cs` |
| `ApiV1AnalyticsPostBulk403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk403Error1.cs` |
| `ApiV1AnalyticsPostBulk404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk404Error1.cs` |
| `ApiV1AnalyticsPostBulk429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk429Error1.cs` |
| `ApiV1AnalyticsPostBulk500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk500Error1.cs` |
| `ApiV1AnalyticsPostBulk502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk502Error1.cs` |
| `ApiV1AnalyticsPostBulk503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk503Error1.cs` |
| `ApiV1AnalyticsPostBulk504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostBulk504Error1.cs` |

### AnalyticsGetPostAnalytics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsGetPostAnalytics(AnalyticsGetPostAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `postId` ← `PostId`, `platformType` ← `PlatformType`, `importedPostId` ← `ImportedPostId`
- **Returns**: `ApiV1AnalyticsPostResponse`
- **Error**: `ApiException<AnalyticsGetPostAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsPost400Error1([NotNullWhen(true)] out ApiV1AnalyticsPost400Error1? value)` [400] · `TryGetApiV1AnalyticsPost401Error1([NotNullWhen(true)] out ApiV1AnalyticsPost401Error1? value)` [401] · `TryGetApiV1AnalyticsPost403Error1([NotNullWhen(true)] out ApiV1AnalyticsPost403Error1? value)` [403] · `TryGetApiV1AnalyticsPost404Error1([NotNullWhen(true)] out ApiV1AnalyticsPost404Error1? value)` [404] · `TryGetApiV1AnalyticsPost429Error1([NotNullWhen(true)] out ApiV1AnalyticsPost429Error1? value)` [429] · `TryGetApiV1AnalyticsPost500Error1([NotNullWhen(true)] out ApiV1AnalyticsPost500Error1? value)` [500] · `TryGetApiV1AnalyticsPost502Error1([NotNullWhen(true)] out ApiV1AnalyticsPost502Error1? value)` [502] · `TryGetApiV1AnalyticsPost503Error1([NotNullWhen(true)] out ApiV1AnalyticsPost503Error1? value)` [503] · `TryGetApiV1AnalyticsPost504Error1([NotNullWhen(true)] out ApiV1AnalyticsPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsGetPostAnalyticsRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsGetPostAnalyticsRequest.cs` |
| `PlatformType` | `src/BundleSocial/Models/Enums/PlatformType.cs` |
| `ApiV1AnalyticsPostResponse` | `src/BundleSocial/Models/ApiV1AnalyticsPostResponse.cs` |
| `AnalyticsGetPostAnalyticsError` | `src/BundleSocial/Errors/AnalyticsGetPostAnalyticsError.cs` |
| `ApiV1AnalyticsPost400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost400Error1.cs` |
| `ApiV1AnalyticsPost401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost401Error1.cs` |
| `ApiV1AnalyticsPost403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost403Error1.cs` |
| `ApiV1AnalyticsPost404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost404Error1.cs` |
| `ApiV1AnalyticsPost429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost429Error1.cs` |
| `ApiV1AnalyticsPost500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost500Error1.cs` |
| `ApiV1AnalyticsPost502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost502Error1.cs` |
| `ApiV1AnalyticsPost503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost503Error1.cs` |
| `ApiV1AnalyticsPost504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPost504Error1.cs` |

### AnalyticsGetPostAnalyticsRaw

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsGetPostAnalyticsRaw(AnalyticsGetPostAnalyticsRawRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `postId` ← `PostId`, `platformType` ← `PlatformType`, `importedPostId` ← `ImportedPostId`
- **Returns**: `ApiV1AnalyticsPostRawResponse`
- **Error**: `ApiException<AnalyticsGetPostAnalyticsRawError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsPostRaw400Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw400Error1? value)` [400] · `TryGetApiV1AnalyticsPostRaw401Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw401Error1? value)` [401] · `TryGetApiV1AnalyticsPostRaw403Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw403Error1? value)` [403] · `TryGetApiV1AnalyticsPostRaw404Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw404Error1? value)` [404] · `TryGetApiV1AnalyticsPostRaw429Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw429Error1? value)` [429] · `TryGetApiV1AnalyticsPostRaw500Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw500Error1? value)` [500] · `TryGetApiV1AnalyticsPostRaw502Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw502Error1? value)` [502] · `TryGetApiV1AnalyticsPostRaw503Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw503Error1? value)` [503] · `TryGetApiV1AnalyticsPostRaw504Error1([NotNullWhen(true)] out ApiV1AnalyticsPostRaw504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsGetPostAnalyticsRawRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsGetPostAnalyticsRawRequest.cs` |
| `PlatformType` | `src/BundleSocial/Models/Enums/PlatformType.cs` |
| `ApiV1AnalyticsPostRawResponse` | `src/BundleSocial/Models/ApiV1AnalyticsPostRawResponse.cs` |
| `AnalyticsGetPostAnalyticsRawError` | `src/BundleSocial/Errors/AnalyticsGetPostAnalyticsRawError.cs` |
| `ApiV1AnalyticsPostRaw400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw400Error1.cs` |
| `ApiV1AnalyticsPostRaw401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw401Error1.cs` |
| `ApiV1AnalyticsPostRaw403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw403Error1.cs` |
| `ApiV1AnalyticsPostRaw404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw404Error1.cs` |
| `ApiV1AnalyticsPostRaw429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw429Error1.cs` |
| `ApiV1AnalyticsPostRaw500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw500Error1.cs` |
| `ApiV1AnalyticsPostRaw502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw502Error1.cs` |
| `ApiV1AnalyticsPostRaw503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw503Error1.cs` |
| `ApiV1AnalyticsPostRaw504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsPostRaw504Error1.cs` |

### AnalyticsGetSocialAccountAnalytics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsGetSocialAccountAnalytics(AnalyticsGetSocialAccountAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `PlatformType`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `platformType` ← `PlatformType`
- **Returns**: `ApiV1AnalyticsSocialAccountResponse`
- **Error**: `ApiException<AnalyticsGetSocialAccountAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsSocialAccount400Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount400Error1? value)` [400] · `TryGetApiV1AnalyticsSocialAccount401Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount401Error1? value)` [401] · `TryGetApiV1AnalyticsSocialAccount403Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount403Error1? value)` [403] · `TryGetApiV1AnalyticsSocialAccount404Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount404Error1? value)` [404] · `TryGetApiV1AnalyticsSocialAccount429Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount429Error1? value)` [429] · `TryGetApiV1AnalyticsSocialAccount500Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount500Error1? value)` [500] · `TryGetApiV1AnalyticsSocialAccount502Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount502Error1? value)` [502] · `TryGetApiV1AnalyticsSocialAccount503Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount503Error1? value)` [503] · `TryGetApiV1AnalyticsSocialAccount504Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccount504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsGetSocialAccountAnalyticsRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsGetSocialAccountAnalyticsRequest.cs` |
| `PlatformType` | `src/BundleSocial/Models/Enums/PlatformType.cs` |
| `ApiV1AnalyticsSocialAccountResponse` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountResponse.cs` |
| `AnalyticsGetSocialAccountAnalyticsError` | `src/BundleSocial/Errors/AnalyticsGetSocialAccountAnalyticsError.cs` |
| `ApiV1AnalyticsSocialAccount400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount400Error1.cs` |
| `ApiV1AnalyticsSocialAccount401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount401Error1.cs` |
| `ApiV1AnalyticsSocialAccount403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount403Error1.cs` |
| `ApiV1AnalyticsSocialAccount404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount404Error1.cs` |
| `ApiV1AnalyticsSocialAccount429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount429Error1.cs` |
| `ApiV1AnalyticsSocialAccount500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount500Error1.cs` |
| `ApiV1AnalyticsSocialAccount502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount502Error1.cs` |
| `ApiV1AnalyticsSocialAccount503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount503Error1.cs` |
| `ApiV1AnalyticsSocialAccount504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccount504Error1.cs` |

### AnalyticsGetSocialAccountAnalyticsRaw

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AnalyticsGetSocialAccountAnalyticsRaw(AnalyticsGetSocialAccountAnalyticsRawRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `PlatformType`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `platformType` ← `PlatformType`
- **Returns**: `ApiV1AnalyticsSocialAccountRawResponse`
- **Error**: `ApiException<AnalyticsGetSocialAccountAnalyticsRawError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AnalyticsSocialAccountRaw400Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw400Error1? value)` [400] · `TryGetApiV1AnalyticsSocialAccountRaw401Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw401Error1? value)` [401] · `TryGetApiV1AnalyticsSocialAccountRaw403Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw403Error1? value)` [403] · `TryGetApiV1AnalyticsSocialAccountRaw404Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw404Error1? value)` [404] · `TryGetApiV1AnalyticsSocialAccountRaw429Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw429Error1? value)` [429] · `TryGetApiV1AnalyticsSocialAccountRaw500Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw500Error1? value)` [500] · `TryGetApiV1AnalyticsSocialAccountRaw502Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw502Error1? value)` [502] · `TryGetApiV1AnalyticsSocialAccountRaw503Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw503Error1? value)` [503] · `TryGetApiV1AnalyticsSocialAccountRaw504Error1([NotNullWhen(true)] out ApiV1AnalyticsSocialAccountRaw504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsGetSocialAccountAnalyticsRawRequest` | `src/BundleSocial/Requests/Analytics/AnalyticsGetSocialAccountAnalyticsRawRequest.cs` |
| `PlatformType` | `src/BundleSocial/Models/Enums/PlatformType.cs` |
| `ApiV1AnalyticsSocialAccountRawResponse` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRawResponse.cs` |
| `AnalyticsGetSocialAccountAnalyticsRawError` | `src/BundleSocial/Errors/AnalyticsGetSocialAccountAnalyticsRawError.cs` |
| `ApiV1AnalyticsSocialAccountRaw400Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw400Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw401Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw401Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw403Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw403Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw404Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw404Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw429Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw429Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw500Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw500Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw502Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw502Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw503Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw503Error1.cs` |
| `ApiV1AnalyticsSocialAccountRaw504Error1` | `src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRaw504Error1.cs` |

