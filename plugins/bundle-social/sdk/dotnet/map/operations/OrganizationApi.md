<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationApi — operations

Accessor: `client.OrganizationApi` · Source: `src/BundleSocial/Api/OrganizationApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### OrganizationGetCommentsUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetCommentsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1OrganizationUsageCommentsResponse`
- **Error**: `ApiException<OrganizationGetCommentsUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrganizationUsageComments400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments400Error1? value)` [400] · `TryGetApiV1OrganizationUsageComments401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments401Error1? value)` [401] · `TryGetApiV1OrganizationUsageComments403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments403Error1? value)` [403] · `TryGetApiV1OrganizationUsageComments404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments404Error1? value)` [404] · `TryGetApiV1OrganizationUsageComments429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments429Error1? value)` [429] · `TryGetApiV1OrganizationUsageComments500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments500Error1? value)` [500] · `TryGetApiV1OrganizationUsageComments502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments502Error1? value)` [502] · `TryGetApiV1OrganizationUsageComments503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments503Error1? value)` [503] · `TryGetApiV1OrganizationUsageComments504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsageCommentsResponse` | `src/BundleSocial/Models/ApiV1OrganizationUsageCommentsResponse.cs` |
| `OrganizationGetCommentsUsageError` | `src/BundleSocial/Errors/OrganizationGetCommentsUsageError.cs` |
| `ApiV1OrganizationUsageComments400Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments400Error1.cs` |
| `ApiV1OrganizationUsageComments401Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments401Error1.cs` |
| `ApiV1OrganizationUsageComments403Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments403Error1.cs` |
| `ApiV1OrganizationUsageComments404Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments404Error1.cs` |
| `ApiV1OrganizationUsageComments429Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments429Error1.cs` |
| `ApiV1OrganizationUsageComments500Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments500Error1.cs` |
| `ApiV1OrganizationUsageComments502Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments502Error1.cs` |
| `ApiV1OrganizationUsageComments503Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments503Error1.cs` |
| `ApiV1OrganizationUsageComments504Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageComments504Error1.cs` |

### OrganizationGetDailyLimitsUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetDailyLimitsUsage(OrganizationGetDailyLimitsUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SocialAccountId`
- **Query params (wire ← C#)**: `socialAccountId` ← `SocialAccountId`, `date` ← `Date`
- **Returns**: `ApiV1OrganizationUsageDailyLimitsResponse`
- **Error**: `ApiException<OrganizationGetDailyLimitsUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrganizationUsageDailyLimits400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits400Error1? value)` [400] · `TryGetApiV1OrganizationUsageDailyLimits401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits401Error1? value)` [401] · `TryGetApiV1OrganizationUsageDailyLimits403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits403Error1? value)` [403] · `TryGetApiV1OrganizationUsageDailyLimits404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits404Error1? value)` [404] · `TryGetApiV1OrganizationUsageDailyLimits429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits429Error1? value)` [429] · `TryGetApiV1OrganizationUsageDailyLimits500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits500Error1? value)` [500] · `TryGetApiV1OrganizationUsageDailyLimits502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits502Error1? value)` [502] · `TryGetApiV1OrganizationUsageDailyLimits503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits503Error1? value)` [503] · `TryGetApiV1OrganizationUsageDailyLimits504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageDailyLimits504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrganizationGetDailyLimitsUsageRequest` | `src/BundleSocial/Requests/OrganizationApi/OrganizationGetDailyLimitsUsageRequest.cs` |
| `ApiV1OrganizationUsageDailyLimitsResponse` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimitsResponse.cs` |
| `OrganizationGetDailyLimitsUsageError` | `src/BundleSocial/Errors/OrganizationGetDailyLimitsUsageError.cs` |
| `ApiV1OrganizationUsageDailyLimits400Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits400Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits401Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits401Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits403Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits403Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits404Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits404Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits429Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits429Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits500Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits500Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits502Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits502Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits503Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits503Error1.cs` |
| `ApiV1OrganizationUsageDailyLimits504Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimits504Error1.cs` |

### OrganizationGetImportsUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetImportsUsage(OrganizationGetImportsUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`, `teamId` ← `TeamId`, `socialAccountType` ← `SocialAccountType`, `socialAccountId` ← `SocialAccountId`
- **Returns**: `ApiV1OrganizationUsageImportsResponse`
- **Error**: `ApiException<OrganizationGetImportsUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrganizationUsageImports400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports400Error1? value)` [400] · `TryGetApiV1OrganizationUsageImports401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports401Error1? value)` [401] · `TryGetApiV1OrganizationUsageImports403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports403Error1? value)` [403] · `TryGetApiV1OrganizationUsageImports404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports404Error1? value)` [404] · `TryGetApiV1OrganizationUsageImports429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports429Error1? value)` [429] · `TryGetApiV1OrganizationUsageImports500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports500Error1? value)` [500] · `TryGetApiV1OrganizationUsageImports502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports502Error1? value)` [502] · `TryGetApiV1OrganizationUsageImports503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports503Error1? value)` [503] · `TryGetApiV1OrganizationUsageImports504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrganizationGetImportsUsageRequest` | `src/BundleSocial/Requests/OrganizationApi/OrganizationGetImportsUsageRequest.cs` |
| `SocialAccountTypeBundleSocialOrganizationApi` | `src/BundleSocial/Models/Enums/SocialAccountTypeBundleSocialOrganizationApi.cs` |
| `ApiV1OrganizationUsageImportsResponse` | `src/BundleSocial/Models/ApiV1OrganizationUsageImportsResponse.cs` |
| `OrganizationGetImportsUsageError` | `src/BundleSocial/Errors/OrganizationGetImportsUsageError.cs` |
| `ApiV1OrganizationUsageImports400Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports400Error1.cs` |
| `ApiV1OrganizationUsageImports401Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports401Error1.cs` |
| `ApiV1OrganizationUsageImports403Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports403Error1.cs` |
| `ApiV1OrganizationUsageImports404Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports404Error1.cs` |
| `ApiV1OrganizationUsageImports429Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports429Error1.cs` |
| `ApiV1OrganizationUsageImports500Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports500Error1.cs` |
| `ApiV1OrganizationUsageImports502Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports502Error1.cs` |
| `ApiV1OrganizationUsageImports503Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports503Error1.cs` |
| `ApiV1OrganizationUsageImports504Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageImports504Error1.cs` |

### OrganizationGetMessagesUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetMessagesUsage(OrganizationGetMessagesUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `offset` ← `Offset`, `limit` ← `Limit`, `teamId` ← `TeamId`, `socialAccountType` ← `SocialAccountType`, `socialAccountId` ← `SocialAccountId`
- **Returns**: `ApiV1OrganizationUsageMessagesResponse`
- **Error**: `ApiException<OrganizationGetMessagesUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrganizationUsageMessages400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages400Error1? value)` [400] · `TryGetApiV1OrganizationUsageMessages401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages401Error1? value)` [401] · `TryGetApiV1OrganizationUsageMessages403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages403Error1? value)` [403] · `TryGetApiV1OrganizationUsageMessages404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages404Error1? value)` [404] · `TryGetApiV1OrganizationUsageMessages429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages429Error1? value)` [429] · `TryGetApiV1OrganizationUsageMessages500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages500Error1? value)` [500] · `TryGetApiV1OrganizationUsageMessages502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages502Error1? value)` [502] · `TryGetApiV1OrganizationUsageMessages503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages503Error1? value)` [503] · `TryGetApiV1OrganizationUsageMessages504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrganizationGetMessagesUsageRequest` | `src/BundleSocial/Requests/OrganizationApi/OrganizationGetMessagesUsageRequest.cs` |
| `SocialAccountType1BundleSocialOrganizationApi` | `src/BundleSocial/Models/Enums/SocialAccountType1BundleSocialOrganizationApi.cs` |
| `ApiV1OrganizationUsageMessagesResponse` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessagesResponse.cs` |
| `OrganizationGetMessagesUsageError` | `src/BundleSocial/Errors/OrganizationGetMessagesUsageError.cs` |
| `ApiV1OrganizationUsageMessages400Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages400Error1.cs` |
| `ApiV1OrganizationUsageMessages401Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages401Error1.cs` |
| `ApiV1OrganizationUsageMessages403Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages403Error1.cs` |
| `ApiV1OrganizationUsageMessages404Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages404Error1.cs` |
| `ApiV1OrganizationUsageMessages429Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages429Error1.cs` |
| `ApiV1OrganizationUsageMessages500Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages500Error1.cs` |
| `ApiV1OrganizationUsageMessages502Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages502Error1.cs` |
| `ApiV1OrganizationUsageMessages503Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages503Error1.cs` |
| `ApiV1OrganizationUsageMessages504Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageMessages504Error1.cs` |

### OrganizationGetOrganization

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetOrganization(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1OrganizationResponse`
- **Error**: `ApiException<OrganizationGetOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Organization400Error1([NotNullWhen(true)] out ApiV1Organization400Error1? value)` [400] · `TryGetApiV1Organization401Error1([NotNullWhen(true)] out ApiV1Organization401Error1? value)` [401] · `TryGetApiV1Organization403Error1([NotNullWhen(true)] out ApiV1Organization403Error1? value)` [403] · `TryGetApiV1Organization404Error1([NotNullWhen(true)] out ApiV1Organization404Error1? value)` [404] · `TryGetApiV1Organization429Error1([NotNullWhen(true)] out ApiV1Organization429Error1? value)` [429] · `TryGetApiV1Organization500Error1([NotNullWhen(true)] out ApiV1Organization500Error1? value)` [500] · `TryGetApiV1Organization502Error1([NotNullWhen(true)] out ApiV1Organization502Error1? value)` [502] · `TryGetApiV1Organization503Error1([NotNullWhen(true)] out ApiV1Organization503Error1? value)` [503] · `TryGetApiV1Organization504Error1([NotNullWhen(true)] out ApiV1Organization504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationResponse` | `src/BundleSocial/Models/ApiV1OrganizationResponse.cs` |
| `OrganizationGetOrganizationError` | `src/BundleSocial/Errors/OrganizationGetOrganizationError.cs` |
| `ApiV1Organization400Error1` | `src/BundleSocial/Models/ApiV1Organization400Error1.cs` |
| `ApiV1Organization401Error1` | `src/BundleSocial/Models/ApiV1Organization401Error1.cs` |
| `ApiV1Organization403Error1` | `src/BundleSocial/Models/ApiV1Organization403Error1.cs` |
| `ApiV1Organization404Error1` | `src/BundleSocial/Models/ApiV1Organization404Error1.cs` |
| `ApiV1Organization429Error1` | `src/BundleSocial/Models/ApiV1Organization429Error1.cs` |
| `ApiV1Organization500Error1` | `src/BundleSocial/Models/ApiV1Organization500Error1.cs` |
| `ApiV1Organization502Error1` | `src/BundleSocial/Models/ApiV1Organization502Error1.cs` |
| `ApiV1Organization503Error1` | `src/BundleSocial/Models/ApiV1Organization503Error1.cs` |
| `ApiV1Organization504Error1` | `src/BundleSocial/Models/ApiV1Organization504Error1.cs` |

### OrganizationGetPostsUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetPostsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1OrganizationUsagePostsResponse`
- **Error**: `ApiException<OrganizationGetPostsUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrganizationUsagePosts400Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts400Error1? value)` [400] · `TryGetApiV1OrganizationUsagePosts401Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts401Error1? value)` [401] · `TryGetApiV1OrganizationUsagePosts403Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts403Error1? value)` [403] · `TryGetApiV1OrganizationUsagePosts404Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts404Error1? value)` [404] · `TryGetApiV1OrganizationUsagePosts429Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts429Error1? value)` [429] · `TryGetApiV1OrganizationUsagePosts500Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts500Error1? value)` [500] · `TryGetApiV1OrganizationUsagePosts502Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts502Error1? value)` [502] · `TryGetApiV1OrganizationUsagePosts503Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts503Error1? value)` [503] · `TryGetApiV1OrganizationUsagePosts504Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsagePostsResponse` | `src/BundleSocial/Models/ApiV1OrganizationUsagePostsResponse.cs` |
| `OrganizationGetPostsUsageError` | `src/BundleSocial/Errors/OrganizationGetPostsUsageError.cs` |
| `ApiV1OrganizationUsagePosts400Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts400Error1.cs` |
| `ApiV1OrganizationUsagePosts401Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts401Error1.cs` |
| `ApiV1OrganizationUsagePosts403Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts403Error1.cs` |
| `ApiV1OrganizationUsagePosts404Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts404Error1.cs` |
| `ApiV1OrganizationUsagePosts429Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts429Error1.cs` |
| `ApiV1OrganizationUsagePosts500Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts500Error1.cs` |
| `ApiV1OrganizationUsagePosts502Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts502Error1.cs` |
| `ApiV1OrganizationUsagePosts503Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts503Error1.cs` |
| `ApiV1OrganizationUsagePosts504Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsagePosts504Error1.cs` |

### OrganizationGetUploadsUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `OrganizationGetUploadsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1OrganizationUsageUploadsResponse`
- **Error**: `ApiException<OrganizationGetUploadsUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrganizationUsageUploads400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads400Error1? value)` [400] · `TryGetApiV1OrganizationUsageUploads401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads401Error1? value)` [401] · `TryGetApiV1OrganizationUsageUploads403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads403Error1? value)` [403] · `TryGetApiV1OrganizationUsageUploads404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads404Error1? value)` [404] · `TryGetApiV1OrganizationUsageUploads429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads429Error1? value)` [429] · `TryGetApiV1OrganizationUsageUploads500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads500Error1? value)` [500] · `TryGetApiV1OrganizationUsageUploads502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads502Error1? value)` [502] · `TryGetApiV1OrganizationUsageUploads503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads503Error1? value)` [503] · `TryGetApiV1OrganizationUsageUploads504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsageUploadsResponse` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploadsResponse.cs` |
| `OrganizationGetUploadsUsageError` | `src/BundleSocial/Errors/OrganizationGetUploadsUsageError.cs` |
| `ApiV1OrganizationUsageUploads400Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads400Error1.cs` |
| `ApiV1OrganizationUsageUploads401Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads401Error1.cs` |
| `ApiV1OrganizationUsageUploads403Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads403Error1.cs` |
| `ApiV1OrganizationUsageUploads404Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads404Error1.cs` |
| `ApiV1OrganizationUsageUploads429Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads429Error1.cs` |
| `ApiV1OrganizationUsageUploads500Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads500Error1.cs` |
| `ApiV1OrganizationUsageUploads502Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads502Error1.cs` |
| `ApiV1OrganizationUsageUploads503Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads503Error1.cs` |
| `ApiV1OrganizationUsageUploads504Error1` | `src/BundleSocial/Models/ApiV1OrganizationUsageUploads504Error1.cs` |

