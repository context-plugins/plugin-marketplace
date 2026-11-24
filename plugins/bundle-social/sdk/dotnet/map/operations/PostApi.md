<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostApi — operations

Accessor: `client.PostApi` · Source: `src/BundleSocial/Api/PostApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCreate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostCreate(PostCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PostResponse1`
- **Error**: `ApiException<PostCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Post400Error1([NotNullWhen(true)] out ApiV1Post400Error1? value)` [400] · `TryGetApiV1Post401Error1([NotNullWhen(true)] out ApiV1Post401Error1? value)` [401] · `TryGetApiV1Post403Error1([NotNullWhen(true)] out ApiV1Post403Error1? value)` [403] · `TryGetApiV1Post404Error1([NotNullWhen(true)] out ApiV1Post404Error1? value)` [404] · `TryGetApiV1Post409Error1([NotNullWhen(true)] out ApiV1Post409Error1? value)` [409] · `TryGetApiV1Post429Error1([NotNullWhen(true)] out ApiV1Post429Error1? value)` [429] · `TryGetApiV1Post500Error1([NotNullWhen(true)] out ApiV1Post500Error1? value)` [500] · `TryGetApiV1Post502Error1([NotNullWhen(true)] out ApiV1Post502Error1? value)` [502] · `TryGetApiV1Post503Error1([NotNullWhen(true)] out ApiV1Post503Error1? value)` [503] · `TryGetApiV1Post504Error1([NotNullWhen(true)] out ApiV1Post504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCreateRequest` | `src/BundleSocial/Requests/PostApi/PostCreateRequest.cs` |
| `ApiV1PostRequest1` | `src/BundleSocial/Models/ApiV1PostRequest1.cs` |
| `ApiV1PostResponse1` | `src/BundleSocial/Models/ApiV1PostResponse1.cs` |
| `PostCreateError` | `src/BundleSocial/Errors/PostCreateError.cs` |
| `ApiV1Post400Error1` | `src/BundleSocial/Models/ApiV1Post400Error1.cs` |
| `ApiV1Post401Error1` | `src/BundleSocial/Models/ApiV1Post401Error1.cs` |
| `ApiV1Post403Error1` | `src/BundleSocial/Models/ApiV1Post403Error1.cs` |
| `ApiV1Post404Error1` | `src/BundleSocial/Models/ApiV1Post404Error1.cs` |
| `ApiV1Post409Error1` | `src/BundleSocial/Models/ApiV1Post409Error1.cs` |
| `ApiV1Post429Error1` | `src/BundleSocial/Models/ApiV1Post429Error1.cs` |
| `ApiV1Post500Error1` | `src/BundleSocial/Models/ApiV1Post500Error1.cs` |
| `ApiV1Post502Error1` | `src/BundleSocial/Models/ApiV1Post502Error1.cs` |
| `ApiV1Post503Error1` | `src/BundleSocial/Models/ApiV1Post503Error1.cs` |
| `ApiV1Post504Error1` | `src/BundleSocial/Models/ApiV1Post504Error1.cs` |

### PostDelete

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostDelete(PostDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1PostResponse2`
- **Error**: `ApiException<PostDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Post400Error1([NotNullWhen(true)] out ApiV1Post400Error1? value)` [400] · `TryGetApiV1Post401Error1([NotNullWhen(true)] out ApiV1Post401Error1? value)` [401] · `TryGetApiV1Post403Error1([NotNullWhen(true)] out ApiV1Post403Error1? value)` [403] · `TryGetApiV1Post404Error1([NotNullWhen(true)] out ApiV1Post404Error1? value)` [404] · `TryGetApiV1Post429Error1([NotNullWhen(true)] out ApiV1Post429Error1? value)` [429] · `TryGetApiV1Post500Error1([NotNullWhen(true)] out ApiV1Post500Error1? value)` [500] · `TryGetApiV1Post502Error1([NotNullWhen(true)] out ApiV1Post502Error1? value)` [502] · `TryGetApiV1Post503Error1([NotNullWhen(true)] out ApiV1Post503Error1? value)` [503] · `TryGetApiV1Post504Error1([NotNullWhen(true)] out ApiV1Post504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostDeleteRequest` | `src/BundleSocial/Requests/PostApi/PostDeleteRequest.cs` |
| `ApiV1PostResponse2` | `src/BundleSocial/Models/ApiV1PostResponse2.cs` |
| `PostDeleteError` | `src/BundleSocial/Errors/PostDeleteError.cs` |
| `ApiV1Post400Error1` | `src/BundleSocial/Models/ApiV1Post400Error1.cs` |
| `ApiV1Post401Error1` | `src/BundleSocial/Models/ApiV1Post401Error1.cs` |
| `ApiV1Post403Error1` | `src/BundleSocial/Models/ApiV1Post403Error1.cs` |
| `ApiV1Post404Error1` | `src/BundleSocial/Models/ApiV1Post404Error1.cs` |
| `ApiV1Post429Error1` | `src/BundleSocial/Models/ApiV1Post429Error1.cs` |
| `ApiV1Post500Error1` | `src/BundleSocial/Models/ApiV1Post500Error1.cs` |
| `ApiV1Post502Error1` | `src/BundleSocial/Models/ApiV1Post502Error1.cs` |
| `ApiV1Post503Error1` | `src/BundleSocial/Models/ApiV1Post503Error1.cs` |
| `ApiV1Post504Error1` | `src/BundleSocial/Models/ApiV1Post504Error1.cs` |

### PostGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostGet(PostGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1PostResponse`
- **Error**: `ApiException<PostGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Post400Error1([NotNullWhen(true)] out ApiV1Post400Error1? value)` [400] · `TryGetApiV1Post401Error1([NotNullWhen(true)] out ApiV1Post401Error1? value)` [401] · `TryGetApiV1Post403Error1([NotNullWhen(true)] out ApiV1Post403Error1? value)` [403] · `TryGetApiV1Post404Error1([NotNullWhen(true)] out ApiV1Post404Error1? value)` [404] · `TryGetApiV1Post429Error1([NotNullWhen(true)] out ApiV1Post429Error1? value)` [429] · `TryGetApiV1Post500Error1([NotNullWhen(true)] out ApiV1Post500Error1? value)` [500] · `TryGetApiV1Post502Error1([NotNullWhen(true)] out ApiV1Post502Error1? value)` [502] · `TryGetApiV1Post503Error1([NotNullWhen(true)] out ApiV1Post503Error1? value)` [503] · `TryGetApiV1Post504Error1([NotNullWhen(true)] out ApiV1Post504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostGetRequest` | `src/BundleSocial/Requests/PostApi/PostGetRequest.cs` |
| `ApiV1PostResponse` | `src/BundleSocial/Models/ApiV1PostResponse.cs` |
| `PostGetError` | `src/BundleSocial/Errors/PostGetError.cs` |
| `ApiV1Post400Error1` | `src/BundleSocial/Models/ApiV1Post400Error1.cs` |
| `ApiV1Post401Error1` | `src/BundleSocial/Models/ApiV1Post401Error1.cs` |
| `ApiV1Post403Error1` | `src/BundleSocial/Models/ApiV1Post403Error1.cs` |
| `ApiV1Post404Error1` | `src/BundleSocial/Models/ApiV1Post404Error1.cs` |
| `ApiV1Post429Error1` | `src/BundleSocial/Models/ApiV1Post429Error1.cs` |
| `ApiV1Post500Error1` | `src/BundleSocial/Models/ApiV1Post500Error1.cs` |
| `ApiV1Post502Error1` | `src/BundleSocial/Models/ApiV1Post502Error1.cs` |
| `ApiV1Post503Error1` | `src/BundleSocial/Models/ApiV1Post503Error1.cs` |
| `ApiV1Post504Error1` | `src/BundleSocial/Models/ApiV1Post504Error1.cs` |

### PostGetByReferenceKey

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostGetByReferenceKey(PostGetByReferenceKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReferenceKey`
- **Returns**: `ApiV1PostReferenceKeyResponse`
- **Error**: `ApiException<PostGetByReferenceKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostReferenceKey400Error1([NotNullWhen(true)] out ApiV1PostReferenceKey400Error1? value)` [400] · `TryGetApiV1PostReferenceKey401Error1([NotNullWhen(true)] out ApiV1PostReferenceKey401Error1? value)` [401] · `TryGetApiV1PostReferenceKey403Error1([NotNullWhen(true)] out ApiV1PostReferenceKey403Error1? value)` [403] · `TryGetApiV1PostReferenceKey404Error1([NotNullWhen(true)] out ApiV1PostReferenceKey404Error1? value)` [404] · `TryGetApiV1PostReferenceKey429Error1([NotNullWhen(true)] out ApiV1PostReferenceKey429Error1? value)` [429] · `TryGetApiV1PostReferenceKey500Error1([NotNullWhen(true)] out ApiV1PostReferenceKey500Error1? value)` [500] · `TryGetApiV1PostReferenceKey502Error1([NotNullWhen(true)] out ApiV1PostReferenceKey502Error1? value)` [502] · `TryGetApiV1PostReferenceKey503Error1([NotNullWhen(true)] out ApiV1PostReferenceKey503Error1? value)` [503] · `TryGetApiV1PostReferenceKey504Error1([NotNullWhen(true)] out ApiV1PostReferenceKey504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostGetByReferenceKeyRequest` | `src/BundleSocial/Requests/PostApi/PostGetByReferenceKeyRequest.cs` |
| `ApiV1PostReferenceKeyResponse` | `src/BundleSocial/Models/ApiV1PostReferenceKeyResponse.cs` |
| `PostGetByReferenceKeyError` | `src/BundleSocial/Errors/PostGetByReferenceKeyError.cs` |
| `ApiV1PostReferenceKey400Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey400Error1.cs` |
| `ApiV1PostReferenceKey401Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey401Error1.cs` |
| `ApiV1PostReferenceKey403Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey403Error1.cs` |
| `ApiV1PostReferenceKey404Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey404Error1.cs` |
| `ApiV1PostReferenceKey429Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey429Error1.cs` |
| `ApiV1PostReferenceKey500Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey500Error1.cs` |
| `ApiV1PostReferenceKey502Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey502Error1.cs` |
| `ApiV1PostReferenceKey503Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey503Error1.cs` |
| `ApiV1PostReferenceKey504Error1` | `src/BundleSocial/Models/ApiV1PostReferenceKey504Error1.cs` |

### PostGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostGetList(PostGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `status` ← `Status`, `orderBy` ← `OrderBy`, `order` ← `Order`, `q` ← `Q`, `platforms` ← `Platforms`, `postDateFrom` ← `PostDateFrom`, `postDateTo` ← `PostDateTo`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1PostResponse3`
- **Error**: `ApiException<PostGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Post400Error1([NotNullWhen(true)] out ApiV1Post400Error1? value)` [400] · `TryGetApiV1Post401Error1([NotNullWhen(true)] out ApiV1Post401Error1? value)` [401] · `TryGetApiV1Post403Error1([NotNullWhen(true)] out ApiV1Post403Error1? value)` [403] · `TryGetApiV1Post404Error1([NotNullWhen(true)] out ApiV1Post404Error1? value)` [404] · `TryGetApiV1Post429Error1([NotNullWhen(true)] out ApiV1Post429Error1? value)` [429] · `TryGetApiV1Post500Error1([NotNullWhen(true)] out ApiV1Post500Error1? value)` [500] · `TryGetApiV1Post502Error1([NotNullWhen(true)] out ApiV1Post502Error1? value)` [502] · `TryGetApiV1Post503Error1([NotNullWhen(true)] out ApiV1Post503Error1? value)` [503] · `TryGetApiV1Post504Error1([NotNullWhen(true)] out ApiV1Post504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostGetListRequest` | `src/BundleSocial/Requests/PostApi/PostGetListRequest.cs` |
| `Status` | `src/BundleSocial/Models/Enums/Status.cs` |
| `OrderByBundleSocialPostApi` | `src/BundleSocial/Models/Enums/OrderByBundleSocialPostApi.cs` |
| `Order` | `src/BundleSocial/Models/Enums/Order.cs` |
| `PlatformBundleSocialPostApi` | `src/BundleSocial/Models/Enums/PlatformBundleSocialPostApi.cs` |
| `ApiV1PostResponse3` | `src/BundleSocial/Models/ApiV1PostResponse3.cs` |
| `PostGetListError` | `src/BundleSocial/Errors/PostGetListError.cs` |
| `ApiV1Post400Error1` | `src/BundleSocial/Models/ApiV1Post400Error1.cs` |
| `ApiV1Post401Error1` | `src/BundleSocial/Models/ApiV1Post401Error1.cs` |
| `ApiV1Post403Error1` | `src/BundleSocial/Models/ApiV1Post403Error1.cs` |
| `ApiV1Post404Error1` | `src/BundleSocial/Models/ApiV1Post404Error1.cs` |
| `ApiV1Post429Error1` | `src/BundleSocial/Models/ApiV1Post429Error1.cs` |
| `ApiV1Post500Error1` | `src/BundleSocial/Models/ApiV1Post500Error1.cs` |
| `ApiV1Post502Error1` | `src/BundleSocial/Models/ApiV1Post502Error1.cs` |
| `ApiV1Post503Error1` | `src/BundleSocial/Models/ApiV1Post503Error1.cs` |
| `ApiV1Post504Error1` | `src/BundleSocial/Models/ApiV1Post504Error1.cs` |

### PostGetReconnectSocialAccountCandidates

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostGetReconnectSocialAccountCandidates(PostGetReconnectSocialAccountCandidatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Type`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `type` ← `Type`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1PostReconnectSocialAccountCandidatesResponse`
- **Error**: `ApiException<PostGetReconnectSocialAccountCandidatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostReconnectSocialAccountCandidates400Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates400Error1? value)` [400] · `TryGetApiV1PostReconnectSocialAccountCandidates401Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates401Error1? value)` [401] · `TryGetApiV1PostReconnectSocialAccountCandidates403Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates403Error1? value)` [403] · `TryGetApiV1PostReconnectSocialAccountCandidates404Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates404Error1? value)` [404] · `TryGetApiV1PostReconnectSocialAccountCandidates429Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates429Error1? value)` [429] · `TryGetApiV1PostReconnectSocialAccountCandidates500Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates500Error1? value)` [500] · `TryGetApiV1PostReconnectSocialAccountCandidates502Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates502Error1? value)` [502] · `TryGetApiV1PostReconnectSocialAccountCandidates503Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates503Error1? value)` [503] · `TryGetApiV1PostReconnectSocialAccountCandidates504Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccountCandidates504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostGetReconnectSocialAccountCandidatesRequest` | `src/BundleSocial/Requests/PostApi/PostGetReconnectSocialAccountCandidatesRequest.cs` |
| `TypeEnum` | `src/BundleSocial/Models/Enums/TypeEnum.cs` |
| `ApiV1PostReconnectSocialAccountCandidatesResponse` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidatesResponse.cs` |
| `PostGetReconnectSocialAccountCandidatesError` | `src/BundleSocial/Errors/PostGetReconnectSocialAccountCandidatesError.cs` |
| `ApiV1PostReconnectSocialAccountCandidates400Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates400Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates401Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates401Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates403Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates403Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates404Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates404Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates429Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates429Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates500Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates500Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates502Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates502Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates503Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates503Error1.cs` |
| `ApiV1PostReconnectSocialAccountCandidates504Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidates504Error1.cs` |

### PostReconnectSocialAccount

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostReconnectSocialAccount(PostReconnectSocialAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PostReconnectSocialAccountResponse`
- **Error**: `ApiException<PostReconnectSocialAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostReconnectSocialAccount400Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount400Error1? value)` [400] · `TryGetApiV1PostReconnectSocialAccount401Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount401Error1? value)` [401] · `TryGetApiV1PostReconnectSocialAccount403Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount403Error1? value)` [403] · `TryGetApiV1PostReconnectSocialAccount404Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount404Error1? value)` [404] · `TryGetApiV1PostReconnectSocialAccount429Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount429Error1? value)` [429] · `TryGetApiV1PostReconnectSocialAccount500Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount500Error1? value)` [500] · `TryGetApiV1PostReconnectSocialAccount502Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount502Error1? value)` [502] · `TryGetApiV1PostReconnectSocialAccount503Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount503Error1? value)` [503] · `TryGetApiV1PostReconnectSocialAccount504Error1([NotNullWhen(true)] out ApiV1PostReconnectSocialAccount504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostReconnectSocialAccountRequest` | `src/BundleSocial/Requests/PostApi/PostReconnectSocialAccountRequest.cs` |
| `ApiV1PostReconnectSocialAccountRequest` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountRequest.cs` |
| `ApiV1PostReconnectSocialAccountResponse` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccountResponse.cs` |
| `PostReconnectSocialAccountError` | `src/BundleSocial/Errors/PostReconnectSocialAccountError.cs` |
| `ApiV1PostReconnectSocialAccount400Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount400Error1.cs` |
| `ApiV1PostReconnectSocialAccount401Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount401Error1.cs` |
| `ApiV1PostReconnectSocialAccount403Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount403Error1.cs` |
| `ApiV1PostReconnectSocialAccount404Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount404Error1.cs` |
| `ApiV1PostReconnectSocialAccount429Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount429Error1.cs` |
| `ApiV1PostReconnectSocialAccount500Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount500Error1.cs` |
| `ApiV1PostReconnectSocialAccount502Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount502Error1.cs` |
| `ApiV1PostReconnectSocialAccount503Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount503Error1.cs` |
| `ApiV1PostReconnectSocialAccount504Error1` | `src/BundleSocial/Models/ApiV1PostReconnectSocialAccount504Error1.cs` |

### PostRetry

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostRetry(PostRetryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1PostRetryResponse`
- **Error**: `ApiException<PostRetryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostRetry400Error1([NotNullWhen(true)] out ApiV1PostRetry400Error1? value)` [400] · `TryGetApiV1PostRetry401Error1([NotNullWhen(true)] out ApiV1PostRetry401Error1? value)` [401] · `TryGetApiV1PostRetry403Error1([NotNullWhen(true)] out ApiV1PostRetry403Error1? value)` [403] · `TryGetApiV1PostRetry404Error1([NotNullWhen(true)] out ApiV1PostRetry404Error1? value)` [404] · `TryGetApiV1PostRetry429Error1([NotNullWhen(true)] out ApiV1PostRetry429Error1? value)` [429] · `TryGetApiV1PostRetry500Error1([NotNullWhen(true)] out ApiV1PostRetry500Error1? value)` [500] · `TryGetApiV1PostRetry502Error1([NotNullWhen(true)] out ApiV1PostRetry502Error1? value)` [502] · `TryGetApiV1PostRetry503Error1([NotNullWhen(true)] out ApiV1PostRetry503Error1? value)` [503] · `TryGetApiV1PostRetry504Error1([NotNullWhen(true)] out ApiV1PostRetry504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRetryRequest` | `src/BundleSocial/Requests/PostApi/PostRetryRequest.cs` |
| `ApiV1PostRetryResponse` | `src/BundleSocial/Models/ApiV1PostRetryResponse.cs` |
| `PostRetryError` | `src/BundleSocial/Errors/PostRetryError.cs` |
| `ApiV1PostRetry400Error1` | `src/BundleSocial/Models/ApiV1PostRetry400Error1.cs` |
| `ApiV1PostRetry401Error1` | `src/BundleSocial/Models/ApiV1PostRetry401Error1.cs` |
| `ApiV1PostRetry403Error1` | `src/BundleSocial/Models/ApiV1PostRetry403Error1.cs` |
| `ApiV1PostRetry404Error1` | `src/BundleSocial/Models/ApiV1PostRetry404Error1.cs` |
| `ApiV1PostRetry429Error1` | `src/BundleSocial/Models/ApiV1PostRetry429Error1.cs` |
| `ApiV1PostRetry500Error1` | `src/BundleSocial/Models/ApiV1PostRetry500Error1.cs` |
| `ApiV1PostRetry502Error1` | `src/BundleSocial/Models/ApiV1PostRetry502Error1.cs` |
| `ApiV1PostRetry503Error1` | `src/BundleSocial/Models/ApiV1PostRetry503Error1.cs` |
| `ApiV1PostRetry504Error1` | `src/BundleSocial/Models/ApiV1PostRetry504Error1.cs` |

### PostUpdate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostUpdate(PostUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1PostResponse1`
- **Error**: `ApiException<PostUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Post400Error1([NotNullWhen(true)] out ApiV1Post400Error1? value)` [400] · `TryGetApiV1Post401Error1([NotNullWhen(true)] out ApiV1Post401Error1? value)` [401] · `TryGetApiV1Post403Error1([NotNullWhen(true)] out ApiV1Post403Error1? value)` [403] · `TryGetApiV1Post404Error1([NotNullWhen(true)] out ApiV1Post404Error1? value)` [404] · `TryGetApiV1Post409Error1([NotNullWhen(true)] out ApiV1Post409Error1? value)` [409] · `TryGetApiV1Post429Error1([NotNullWhen(true)] out ApiV1Post429Error1? value)` [429] · `TryGetApiV1Post500Error1([NotNullWhen(true)] out ApiV1Post500Error1? value)` [500] · `TryGetApiV1Post502Error1([NotNullWhen(true)] out ApiV1Post502Error1? value)` [502] · `TryGetApiV1Post503Error1([NotNullWhen(true)] out ApiV1Post503Error1? value)` [503] · `TryGetApiV1Post504Error1([NotNullWhen(true)] out ApiV1Post504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostUpdateRequest` | `src/BundleSocial/Requests/PostApi/PostUpdateRequest.cs` |
| `ApiV1PostRequest` | `src/BundleSocial/Models/ApiV1PostRequest.cs` |
| `ApiV1PostResponse1` | `src/BundleSocial/Models/ApiV1PostResponse1.cs` |
| `PostUpdateError` | `src/BundleSocial/Errors/PostUpdateError.cs` |
| `ApiV1Post400Error1` | `src/BundleSocial/Models/ApiV1Post400Error1.cs` |
| `ApiV1Post401Error1` | `src/BundleSocial/Models/ApiV1Post401Error1.cs` |
| `ApiV1Post403Error1` | `src/BundleSocial/Models/ApiV1Post403Error1.cs` |
| `ApiV1Post404Error1` | `src/BundleSocial/Models/ApiV1Post404Error1.cs` |
| `ApiV1Post409Error1` | `src/BundleSocial/Models/ApiV1Post409Error1.cs` |
| `ApiV1Post429Error1` | `src/BundleSocial/Models/ApiV1Post429Error1.cs` |
| `ApiV1Post500Error1` | `src/BundleSocial/Models/ApiV1Post500Error1.cs` |
| `ApiV1Post502Error1` | `src/BundleSocial/Models/ApiV1Post502Error1.cs` |
| `ApiV1Post503Error1` | `src/BundleSocial/Models/ApiV1Post503Error1.cs` |
| `ApiV1Post504Error1` | `src/BundleSocial/Models/ApiV1Post504Error1.cs` |

