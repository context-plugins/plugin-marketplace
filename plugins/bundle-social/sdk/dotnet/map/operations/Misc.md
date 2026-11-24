<!-- Generated file — do not edit; regenerated with the SDK. -->

# Misc — operations

Accessor: `client.Misc` · Source: `src/BundleSocial/Api/Misc.cs` · 92 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MiscBlueskyDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscBlueskyDeleteComment(MiscBlueskyDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscBlueskyCommentResponse`
- **Error**: `ApiException<MiscBlueskyDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscBlueskyComment400Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment400Error1? value)` [400] · `TryGetApiV1MiscBlueskyComment401Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment401Error1? value)` [401] · `TryGetApiV1MiscBlueskyComment403Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment403Error1? value)` [403] · `TryGetApiV1MiscBlueskyComment404Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment404Error1? value)` [404] · `TryGetApiV1MiscBlueskyComment429Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment429Error1? value)` [429] · `TryGetApiV1MiscBlueskyComment500Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment500Error1? value)` [500] · `TryGetApiV1MiscBlueskyComment502Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment502Error1? value)` [502] · `TryGetApiV1MiscBlueskyComment503Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment503Error1? value)` [503] · `TryGetApiV1MiscBlueskyComment504Error1([NotNullWhen(true)] out ApiV1MiscBlueskyComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscBlueskyDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscBlueskyDeleteCommentRequest.cs` |
| `ApiV1MiscBlueskyCommentRequest` | `src/BundleSocial/Models/ApiV1MiscBlueskyCommentRequest.cs` |
| `ApiV1MiscBlueskyCommentResponse` | `src/BundleSocial/Models/ApiV1MiscBlueskyCommentResponse.cs` |
| `MiscBlueskyDeleteCommentError` | `src/BundleSocial/Errors/MiscBlueskyDeleteCommentError.cs` |
| `ApiV1MiscBlueskyComment400Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment400Error1.cs` |
| `ApiV1MiscBlueskyComment401Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment401Error1.cs` |
| `ApiV1MiscBlueskyComment403Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment403Error1.cs` |
| `ApiV1MiscBlueskyComment404Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment404Error1.cs` |
| `ApiV1MiscBlueskyComment429Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment429Error1.cs` |
| `ApiV1MiscBlueskyComment500Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment500Error1.cs` |
| `ApiV1MiscBlueskyComment502Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment502Error1.cs` |
| `ApiV1MiscBlueskyComment503Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment503Error1.cs` |
| `ApiV1MiscBlueskyComment504Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyComment504Error1.cs` |

### MiscBlueskyDeletePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscBlueskyDeletePost(MiscBlueskyDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscBlueskyPostResponse`
- **Error**: `ApiException<MiscBlueskyDeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscBlueskyPost400Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost400Error1? value)` [400] · `TryGetApiV1MiscBlueskyPost401Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost401Error1? value)` [401] · `TryGetApiV1MiscBlueskyPost403Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost403Error1? value)` [403] · `TryGetApiV1MiscBlueskyPost404Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost404Error1? value)` [404] · `TryGetApiV1MiscBlueskyPost429Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost429Error1? value)` [429] · `TryGetApiV1MiscBlueskyPost500Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost500Error1? value)` [500] · `TryGetApiV1MiscBlueskyPost502Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost502Error1? value)` [502] · `TryGetApiV1MiscBlueskyPost503Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost503Error1? value)` [503] · `TryGetApiV1MiscBlueskyPost504Error1([NotNullWhen(true)] out ApiV1MiscBlueskyPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscBlueskyDeletePostRequest` | `src/BundleSocial/Requests/Misc/MiscBlueskyDeletePostRequest.cs` |
| `ApiV1MiscBlueskyPostRequest` | `src/BundleSocial/Models/ApiV1MiscBlueskyPostRequest.cs` |
| `ApiV1MiscBlueskyPostResponse` | `src/BundleSocial/Models/ApiV1MiscBlueskyPostResponse.cs` |
| `MiscBlueskyDeletePostError` | `src/BundleSocial/Errors/MiscBlueskyDeletePostError.cs` |
| `ApiV1MiscBlueskyPost400Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost400Error1.cs` |
| `ApiV1MiscBlueskyPost401Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost401Error1.cs` |
| `ApiV1MiscBlueskyPost403Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost403Error1.cs` |
| `ApiV1MiscBlueskyPost404Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost404Error1.cs` |
| `ApiV1MiscBlueskyPost429Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost429Error1.cs` |
| `ApiV1MiscBlueskyPost500Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost500Error1.cs` |
| `ApiV1MiscBlueskyPost502Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost502Error1.cs` |
| `ApiV1MiscBlueskyPost503Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost503Error1.cs` |
| `ApiV1MiscBlueskyPost504Error1` | `src/BundleSocial/Models/ApiV1MiscBlueskyPost504Error1.cs` |

### MiscDiscordDeleteMessage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscDiscordDeleteMessage(MiscDiscordDeleteMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscDiscordMessageResponse`
- **Error**: `ApiException<MiscDiscordDeleteMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscDiscordMessage400Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage400Error1? value)` [400] · `TryGetApiV1MiscDiscordMessage401Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage401Error1? value)` [401] · `TryGetApiV1MiscDiscordMessage403Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage403Error1? value)` [403] · `TryGetApiV1MiscDiscordMessage404Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage404Error1? value)` [404] · `TryGetApiV1MiscDiscordMessage429Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage429Error1? value)` [429] · `TryGetApiV1MiscDiscordMessage500Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage500Error1? value)` [500] · `TryGetApiV1MiscDiscordMessage502Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage502Error1? value)` [502] · `TryGetApiV1MiscDiscordMessage503Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage503Error1? value)` [503] · `TryGetApiV1MiscDiscordMessage504Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscDiscordDeleteMessageRequest` | `src/BundleSocial/Requests/Misc/MiscDiscordDeleteMessageRequest.cs` |
| `ApiV1MiscDiscordMessageRequest` | `src/BundleSocial/Models/ApiV1MiscDiscordMessageRequest.cs` |
| `ApiV1MiscDiscordMessageResponse` | `src/BundleSocial/Models/ApiV1MiscDiscordMessageResponse.cs` |
| `MiscDiscordDeleteMessageError` | `src/BundleSocial/Errors/MiscDiscordDeleteMessageError.cs` |
| `ApiV1MiscDiscordMessage400Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage400Error1.cs` |
| `ApiV1MiscDiscordMessage401Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage401Error1.cs` |
| `ApiV1MiscDiscordMessage403Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage403Error1.cs` |
| `ApiV1MiscDiscordMessage404Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage404Error1.cs` |
| `ApiV1MiscDiscordMessage429Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage429Error1.cs` |
| `ApiV1MiscDiscordMessage500Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage500Error1.cs` |
| `ApiV1MiscDiscordMessage502Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage502Error1.cs` |
| `ApiV1MiscDiscordMessage503Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage503Error1.cs` |
| `ApiV1MiscDiscordMessage504Error1` | `src/BundleSocial/Models/ApiV1MiscDiscordMessage504Error1.cs` |

### MiscFacebookDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookDeleteComment(MiscFacebookDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscFacebookCommentResponse1`
- **Error**: `ApiException<MiscFacebookDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookComment400Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment400Error1? value)` [400] · `TryGetApiV1MiscFacebookComment401Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment401Error1? value)` [401] · `TryGetApiV1MiscFacebookComment403Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment403Error1? value)` [403] · `TryGetApiV1MiscFacebookComment404Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment404Error1? value)` [404] · `TryGetApiV1MiscFacebookComment429Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment429Error1? value)` [429] · `TryGetApiV1MiscFacebookComment500Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment500Error1? value)` [500] · `TryGetApiV1MiscFacebookComment502Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment502Error1? value)` [502] · `TryGetApiV1MiscFacebookComment503Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment503Error1? value)` [503] · `TryGetApiV1MiscFacebookComment504Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookDeleteCommentRequest.cs` |
| `ApiV1MiscFacebookCommentRequest1` | `src/BundleSocial/Models/ApiV1MiscFacebookCommentRequest1.cs` |
| `ApiV1MiscFacebookCommentResponse1` | `src/BundleSocial/Models/ApiV1MiscFacebookCommentResponse1.cs` |
| `MiscFacebookDeleteCommentError` | `src/BundleSocial/Errors/MiscFacebookDeleteCommentError.cs` |
| `ApiV1MiscFacebookComment400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment400Error1.cs` |
| `ApiV1MiscFacebookComment401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment401Error1.cs` |
| `ApiV1MiscFacebookComment403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment403Error1.cs` |
| `ApiV1MiscFacebookComment404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment404Error1.cs` |
| `ApiV1MiscFacebookComment429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment429Error1.cs` |
| `ApiV1MiscFacebookComment500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment500Error1.cs` |
| `ApiV1MiscFacebookComment502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment502Error1.cs` |
| `ApiV1MiscFacebookComment503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment503Error1.cs` |
| `ApiV1MiscFacebookComment504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment504Error1.cs` |

### MiscFacebookDeletePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookDeletePost(MiscFacebookDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscFacebookPostResponse1`
- **Error**: `ApiException<MiscFacebookDeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookPost400Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost400Error1? value)` [400] · `TryGetApiV1MiscFacebookPost401Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost401Error1? value)` [401] · `TryGetApiV1MiscFacebookPost403Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost403Error1? value)` [403] · `TryGetApiV1MiscFacebookPost404Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost404Error1? value)` [404] · `TryGetApiV1MiscFacebookPost429Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost429Error1? value)` [429] · `TryGetApiV1MiscFacebookPost500Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost500Error1? value)` [500] · `TryGetApiV1MiscFacebookPost502Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost502Error1? value)` [502] · `TryGetApiV1MiscFacebookPost503Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost503Error1? value)` [503] · `TryGetApiV1MiscFacebookPost504Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookDeletePostRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookDeletePostRequest.cs` |
| `ApiV1MiscFacebookPostRequest1` | `src/BundleSocial/Models/ApiV1MiscFacebookPostRequest1.cs` |
| `ApiV1MiscFacebookPostResponse1` | `src/BundleSocial/Models/ApiV1MiscFacebookPostResponse1.cs` |
| `MiscFacebookDeletePostError` | `src/BundleSocial/Errors/MiscFacebookDeletePostError.cs` |
| `ApiV1MiscFacebookPost400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost400Error1.cs` |
| `ApiV1MiscFacebookPost401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost401Error1.cs` |
| `ApiV1MiscFacebookPost403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost403Error1.cs` |
| `ApiV1MiscFacebookPost404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost404Error1.cs` |
| `ApiV1MiscFacebookPost429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost429Error1.cs` |
| `ApiV1MiscFacebookPost500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost500Error1.cs` |
| `ApiV1MiscFacebookPost502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost502Error1.cs` |
| `ApiV1MiscFacebookPost503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost503Error1.cs` |
| `ApiV1MiscFacebookPost504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost504Error1.cs` |

### MiscFacebookEditComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookEditComment(MiscFacebookEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscFacebookCommentResponse`
- **Error**: `ApiException<MiscFacebookEditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookComment400Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment400Error1? value)` [400] · `TryGetApiV1MiscFacebookComment401Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment401Error1? value)` [401] · `TryGetApiV1MiscFacebookComment403Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment403Error1? value)` [403] · `TryGetApiV1MiscFacebookComment404Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment404Error1? value)` [404] · `TryGetApiV1MiscFacebookComment429Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment429Error1? value)` [429] · `TryGetApiV1MiscFacebookComment500Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment500Error1? value)` [500] · `TryGetApiV1MiscFacebookComment502Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment502Error1? value)` [502] · `TryGetApiV1MiscFacebookComment503Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment503Error1? value)` [503] · `TryGetApiV1MiscFacebookComment504Error1([NotNullWhen(true)] out ApiV1MiscFacebookComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookEditCommentRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookEditCommentRequest.cs` |
| `ApiV1MiscFacebookCommentRequest` | `src/BundleSocial/Models/ApiV1MiscFacebookCommentRequest.cs` |
| `ApiV1MiscFacebookCommentResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookCommentResponse.cs` |
| `MiscFacebookEditCommentError` | `src/BundleSocial/Errors/MiscFacebookEditCommentError.cs` |
| `ApiV1MiscFacebookComment400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment400Error1.cs` |
| `ApiV1MiscFacebookComment401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment401Error1.cs` |
| `ApiV1MiscFacebookComment403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment403Error1.cs` |
| `ApiV1MiscFacebookComment404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment404Error1.cs` |
| `ApiV1MiscFacebookComment429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment429Error1.cs` |
| `ApiV1MiscFacebookComment500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment500Error1.cs` |
| `ApiV1MiscFacebookComment502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment502Error1.cs` |
| `ApiV1MiscFacebookComment503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment503Error1.cs` |
| `ApiV1MiscFacebookComment504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookComment504Error1.cs` |

### MiscFacebookEditPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookEditPost(MiscFacebookEditPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscFacebookPostResponse`
- **Error**: `ApiException<MiscFacebookEditPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookPost400Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost400Error1? value)` [400] · `TryGetApiV1MiscFacebookPost401Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost401Error1? value)` [401] · `TryGetApiV1MiscFacebookPost403Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost403Error1? value)` [403] · `TryGetApiV1MiscFacebookPost404Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost404Error1? value)` [404] · `TryGetApiV1MiscFacebookPost429Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost429Error1? value)` [429] · `TryGetApiV1MiscFacebookPost500Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost500Error1? value)` [500] · `TryGetApiV1MiscFacebookPost502Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost502Error1? value)` [502] · `TryGetApiV1MiscFacebookPost503Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost503Error1? value)` [503] · `TryGetApiV1MiscFacebookPost504Error1([NotNullWhen(true)] out ApiV1MiscFacebookPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookEditPostRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookEditPostRequest.cs` |
| `ApiV1MiscFacebookPostRequest` | `src/BundleSocial/Models/ApiV1MiscFacebookPostRequest.cs` |
| `ApiV1MiscFacebookPostResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookPostResponse.cs` |
| `MiscFacebookEditPostError` | `src/BundleSocial/Errors/MiscFacebookEditPostError.cs` |
| `ApiV1MiscFacebookPost400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost400Error1.cs` |
| `ApiV1MiscFacebookPost401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost401Error1.cs` |
| `ApiV1MiscFacebookPost403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost403Error1.cs` |
| `ApiV1MiscFacebookPost404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost404Error1.cs` |
| `ApiV1MiscFacebookPost429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost429Error1.cs` |
| `ApiV1MiscFacebookPost500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost500Error1.cs` |
| `ApiV1MiscFacebookPost502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost502Error1.cs` |
| `ApiV1MiscFacebookPost503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost503Error1.cs` |
| `ApiV1MiscFacebookPost504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPost504Error1.cs` |

### MiscFacebookGetRecommendationById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetRecommendationById(MiscFacebookGetRecommendationByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecommendationId`, `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscFacebookRecommendationsResponse1`
- **Error**: `ApiException<MiscFacebookGetRecommendationByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendations400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendations401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendations403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendations404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendations429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendations500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendations502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendations503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendations504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookGetRecommendationByIdRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationByIdRequest.cs` |
| `ApiV1MiscFacebookRecommendationsResponse1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsResponse1.cs` |
| `MiscFacebookGetRecommendationByIdError` | `src/BundleSocial/Errors/MiscFacebookGetRecommendationByIdError.cs` |
| `ApiV1MiscFacebookRecommendations400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations400Error1.cs` |
| `ApiV1MiscFacebookRecommendations401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations401Error1.cs` |
| `ApiV1MiscFacebookRecommendations403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations403Error1.cs` |
| `ApiV1MiscFacebookRecommendations404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations404Error1.cs` |
| `ApiV1MiscFacebookRecommendations429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations429Error1.cs` |
| `ApiV1MiscFacebookRecommendations500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations500Error1.cs` |
| `ApiV1MiscFacebookRecommendations502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations502Error1.cs` |
| `ApiV1MiscFacebookRecommendations503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations503Error1.cs` |
| `ApiV1MiscFacebookRecommendations504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations504Error1.cs` |

### MiscFacebookGetRecommendationComments

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetRecommendationComments(MiscFacebookGetRecommendationCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecommendationId`, `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscFacebookRecommendationsCommentsResponse`
- **Error**: `ApiException<MiscFacebookGetRecommendationCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendationsComments400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendationsComments401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendationsComments403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendationsComments404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendationsComments429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendationsComments500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendationsComments502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendationsComments503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendationsComments504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsComments504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookGetRecommendationCommentsRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationCommentsRequest.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsResponse.cs` |
| `MiscFacebookGetRecommendationCommentsError` | `src/BundleSocial/Errors/MiscFacebookGetRecommendationCommentsError.cs` |
| `ApiV1MiscFacebookRecommendationsComments400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments400Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments401Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments403Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments404Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments429Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments500Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments502Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments503Error1.cs` |
| `ApiV1MiscFacebookRecommendationsComments504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsComments504Error1.cs` |

### MiscFacebookGetRecommendationImportById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetRecommendationImportById(MiscFacebookGetRecommendationImportByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1MiscFacebookRecommendationsImportResponse`
- **Error**: `ApiException<MiscFacebookGetRecommendationImportByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendationsImport400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendationsImport401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendationsImport403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendationsImport404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendationsImport429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendationsImport500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendationsImport502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendationsImport503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendationsImport504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookGetRecommendationImportByIdRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationImportByIdRequest.cs` |
| `ApiV1MiscFacebookRecommendationsImportResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportResponse.cs` |
| `MiscFacebookGetRecommendationImportByIdError` | `src/BundleSocial/Errors/MiscFacebookGetRecommendationImportByIdError.cs` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport400Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport401Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport403Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport404Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport429Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport500Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport502Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport503Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport504Error1.cs` |

### MiscFacebookGetRecommendationImportStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetRecommendationImportStatus(MiscFacebookGetRecommendationImportStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscFacebookRecommendationsImportResponse1`
- **Error**: `ApiException<MiscFacebookGetRecommendationImportStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendationsImport400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendationsImport401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendationsImport403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendationsImport404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendationsImport429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendationsImport500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendationsImport502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendationsImport503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendationsImport504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookGetRecommendationImportStatusRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationImportStatusRequest.cs` |
| `ApiV1MiscFacebookRecommendationsImportResponse1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportResponse1.cs` |
| `MiscFacebookGetRecommendationImportStatusError` | `src/BundleSocial/Errors/MiscFacebookGetRecommendationImportStatusError.cs` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport400Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport401Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport403Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport404Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport429Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport500Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport502Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport503Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport504Error1.cs` |

### MiscFacebookGetRecommendations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetRecommendations(MiscFacebookGetRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1MiscFacebookRecommendationsResponse`
- **Error**: `ApiException<MiscFacebookGetRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendations400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendations401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendations403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendations404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendations429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendations500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendations502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendations503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendations504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookGetRecommendationsRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationsRequest.cs` |
| `ApiV1MiscFacebookRecommendationsResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsResponse.cs` |
| `MiscFacebookGetRecommendationsError` | `src/BundleSocial/Errors/MiscFacebookGetRecommendationsError.cs` |
| `ApiV1MiscFacebookRecommendations400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations400Error1.cs` |
| `ApiV1MiscFacebookRecommendations401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations401Error1.cs` |
| `ApiV1MiscFacebookRecommendations403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations403Error1.cs` |
| `ApiV1MiscFacebookRecommendations404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations404Error1.cs` |
| `ApiV1MiscFacebookRecommendations429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations429Error1.cs` |
| `ApiV1MiscFacebookRecommendations500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations500Error1.cs` |
| `ApiV1MiscFacebookRecommendations502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations502Error1.cs` |
| `ApiV1MiscFacebookRecommendations503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations503Error1.cs` |
| `ApiV1MiscFacebookRecommendations504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendations504Error1.cs` |

### MiscFacebookGetTextFormatPresets

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetTextFormatPresets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscFacebookTextFormatPresetsResponse`
- **Error**: `ApiException<MiscFacebookGetTextFormatPresetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookTextFormatPresets400Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets400Error1? value)` [400] · `TryGetApiV1MiscFacebookTextFormatPresets401Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets401Error1? value)` [401] · `TryGetApiV1MiscFacebookTextFormatPresets403Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets403Error1? value)` [403] · `TryGetApiV1MiscFacebookTextFormatPresets404Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets404Error1? value)` [404] · `TryGetApiV1MiscFacebookTextFormatPresets429Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets429Error1? value)` [429] · `TryGetApiV1MiscFacebookTextFormatPresets500Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets500Error1? value)` [500] · `TryGetApiV1MiscFacebookTextFormatPresets502Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets502Error1? value)` [502] · `TryGetApiV1MiscFacebookTextFormatPresets503Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets503Error1? value)` [503] · `TryGetApiV1MiscFacebookTextFormatPresets504Error1([NotNullWhen(true)] out ApiV1MiscFacebookTextFormatPresets504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1MiscFacebookTextFormatPresetsResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresetsResponse.cs` |
| `MiscFacebookGetTextFormatPresetsError` | `src/BundleSocial/Errors/MiscFacebookGetTextFormatPresetsError.cs` |
| `ApiV1MiscFacebookTextFormatPresets400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets400Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets401Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets403Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets404Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets429Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets500Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets502Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets503Error1.cs` |
| `ApiV1MiscFacebookTextFormatPresets504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresets504Error1.cs` |

### MiscFacebookGetTokenDebug

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookGetTokenDebug(MiscFacebookGetTokenDebugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscFacebookTokenDebugResponse`
- **Error**: `ApiException<MiscFacebookGetTokenDebugError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookTokenDebug400Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug400Error1? value)` [400] · `TryGetApiV1MiscFacebookTokenDebug401Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug401Error1? value)` [401] · `TryGetApiV1MiscFacebookTokenDebug403Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug403Error1? value)` [403] · `TryGetApiV1MiscFacebookTokenDebug404Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug404Error1? value)` [404] · `TryGetApiV1MiscFacebookTokenDebug429Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug429Error1? value)` [429] · `TryGetApiV1MiscFacebookTokenDebug500Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug500Error1? value)` [500] · `TryGetApiV1MiscFacebookTokenDebug502Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug502Error1? value)` [502] · `TryGetApiV1MiscFacebookTokenDebug503Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug503Error1? value)` [503] · `TryGetApiV1MiscFacebookTokenDebug504Error1([NotNullWhen(true)] out ApiV1MiscFacebookTokenDebug504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookGetTokenDebugRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookGetTokenDebugRequest.cs` |
| `ApiV1MiscFacebookTokenDebugResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebugResponse.cs` |
| `MiscFacebookGetTokenDebugError` | `src/BundleSocial/Errors/MiscFacebookGetTokenDebugError.cs` |
| `ApiV1MiscFacebookTokenDebug400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug400Error1.cs` |
| `ApiV1MiscFacebookTokenDebug401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug401Error1.cs` |
| `ApiV1MiscFacebookTokenDebug403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug403Error1.cs` |
| `ApiV1MiscFacebookTokenDebug404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug404Error1.cs` |
| `ApiV1MiscFacebookTokenDebug429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug429Error1.cs` |
| `ApiV1MiscFacebookTokenDebug500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug500Error1.cs` |
| `ApiV1MiscFacebookTokenDebug502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug502Error1.cs` |
| `ApiV1MiscFacebookTokenDebug503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug503Error1.cs` |
| `ApiV1MiscFacebookTokenDebug504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookTokenDebug504Error1.cs` |

### MiscFacebookImportRecommendations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookImportRecommendations(MiscFacebookImportRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscFacebookRecommendationsImportResponse`
- **Error**: `ApiException<MiscFacebookImportRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendationsImport400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendationsImport401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendationsImport403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendationsImport404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendationsImport409Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport409Error1? value)` [409] · `TryGetApiV1MiscFacebookRecommendationsImport429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendationsImport500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendationsImport502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendationsImport503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendationsImport504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookImportRecommendationsRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookImportRecommendationsRequest.cs` |
| `ApiV1MiscFacebookRecommendationsImportRequest` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportRequest.cs` |
| `ApiV1MiscFacebookRecommendationsImportResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportResponse.cs` |
| `MiscFacebookImportRecommendationsError` | `src/BundleSocial/Errors/MiscFacebookImportRecommendationsError.cs` |
| `ApiV1MiscFacebookRecommendationsImport400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport400Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport401Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport403Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport404Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport409Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport409Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport429Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport500Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport502Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport503Error1.cs` |
| `ApiV1MiscFacebookRecommendationsImport504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImport504Error1.cs` |

### MiscFacebookReplyToRecommendation

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookReplyToRecommendation(MiscFacebookReplyToRecommendationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecommendationId`
- **Returns**: `ApiV1MiscFacebookRecommendationsReplyResponse`
- **Error**: `ApiException<MiscFacebookReplyToRecommendationError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendationsReply400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendationsReply401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendationsReply403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendationsReply404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendationsReply429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendationsReply500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendationsReply502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendationsReply503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendationsReply504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsReply504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookReplyToRecommendationRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookReplyToRecommendationRequest.cs` |
| `ApiV1MiscFacebookRecommendationsReplyRequest` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReplyRequest.cs` |
| `ApiV1MiscFacebookRecommendationsReplyResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReplyResponse.cs` |
| `MiscFacebookReplyToRecommendationError` | `src/BundleSocial/Errors/MiscFacebookReplyToRecommendationError.cs` |
| `ApiV1MiscFacebookRecommendationsReply400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply400Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply401Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply403Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply404Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply429Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply500Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply502Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply503Error1.cs` |
| `ApiV1MiscFacebookRecommendationsReply504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReply504Error1.cs` |

### MiscFacebookReplyToRecommendationComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookReplyToRecommendationComment(MiscFacebookReplyToRecommendationCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecommendationId`, `CommentId`
- **Returns**: `ApiV1MiscFacebookRecommendationsCommentsReplyResponse`
- **Error**: `ApiException<MiscFacebookReplyToRecommendationCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookRecommendationsCommentsReply400Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply400Error1? value)` [400] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply401Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply401Error1? value)` [401] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply403Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply403Error1? value)` [403] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply404Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply404Error1? value)` [404] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply429Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply429Error1? value)` [429] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply500Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply500Error1? value)` [500] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply502Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply502Error1? value)` [502] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply503Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply503Error1? value)` [503] · `TryGetApiV1MiscFacebookRecommendationsCommentsReply504Error1([NotNullWhen(true)] out ApiV1MiscFacebookRecommendationsCommentsReply504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookReplyToRecommendationCommentRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookReplyToRecommendationCommentRequest.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReplyRequest` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReplyRequest.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReplyResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReplyResponse.cs` |
| `MiscFacebookReplyToRecommendationCommentError` | `src/BundleSocial/Errors/MiscFacebookReplyToRecommendationCommentError.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply400Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply401Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply403Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply404Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply429Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply500Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply502Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply503Error1.cs` |
| `ApiV1MiscFacebookRecommendationsCommentsReply504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReply504Error1.cs` |

### MiscFacebookSearchPages

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscFacebookSearchPages(MiscFacebookSearchPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Q`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `q` ← `Q`, `limit` ← `Limit`
- **Returns**: `ApiV1MiscFacebookPagesResponse`
- **Error**: `ApiException<MiscFacebookSearchPagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscFacebookPages400Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages400Error1? value)` [400] · `TryGetApiV1MiscFacebookPages401Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages401Error1? value)` [401] · `TryGetApiV1MiscFacebookPages403Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages403Error1? value)` [403] · `TryGetApiV1MiscFacebookPages404Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages404Error1? value)` [404] · `TryGetApiV1MiscFacebookPages429Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages429Error1? value)` [429] · `TryGetApiV1MiscFacebookPages500Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages500Error1? value)` [500] · `TryGetApiV1MiscFacebookPages502Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages502Error1? value)` [502] · `TryGetApiV1MiscFacebookPages503Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages503Error1? value)` [503] · `TryGetApiV1MiscFacebookPages504Error1([NotNullWhen(true)] out ApiV1MiscFacebookPages504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscFacebookSearchPagesRequest` | `src/BundleSocial/Requests/Misc/MiscFacebookSearchPagesRequest.cs` |
| `ApiV1MiscFacebookPagesResponse` | `src/BundleSocial/Models/ApiV1MiscFacebookPagesResponse.cs` |
| `MiscFacebookSearchPagesError` | `src/BundleSocial/Errors/MiscFacebookSearchPagesError.cs` |
| `ApiV1MiscFacebookPages400Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages400Error1.cs` |
| `ApiV1MiscFacebookPages401Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages401Error1.cs` |
| `ApiV1MiscFacebookPages403Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages403Error1.cs` |
| `ApiV1MiscFacebookPages404Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages404Error1.cs` |
| `ApiV1MiscFacebookPages429Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages429Error1.cs` |
| `ApiV1MiscFacebookPages500Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages500Error1.cs` |
| `ApiV1MiscFacebookPages502Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages502Error1.cs` |
| `ApiV1MiscFacebookPages503Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages503Error1.cs` |
| `ApiV1MiscFacebookPages504Error1` | `src/BundleSocial/Models/ApiV1MiscFacebookPages504Error1.cs` |

### MiscGoogleBusinessAddMedia

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessAddMedia(MiscGoogleBusinessAddMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessMediaResponse`
- **Error**: `ApiException<MiscGoogleBusinessAddMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessMedia400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessMedia401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessMedia403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessMedia404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessMedia429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessMedia500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessMedia502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessMedia503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessMedia504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessAddMediaRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessAddMediaRequest.cs` |
| `ApiV1MiscGoogleBusinessMediaRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaRequest.cs` |
| `ApiV1MiscGoogleBusinessMediaResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaResponse.cs` |
| `MiscGoogleBusinessAddMediaError` | `src/BundleSocial/Errors/MiscGoogleBusinessAddMediaError.cs` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia400Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia401Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia403Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia404Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia429Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia500Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia502Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia503Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia504Error1.cs` |

### MiscGoogleBusinessCreatePlaceActionLink

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessCreatePlaceActionLink(MiscGoogleBusinessCreatePlaceActionLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1`
- **Error**: `ApiException<MiscGoogleBusinessCreatePlaceActionLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessCreatePlaceActionLinkRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessCreatePlaceActionLinkRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1.cs` |
| `MiscGoogleBusinessCreatePlaceActionLinkError` | `src/BundleSocial/Errors/MiscGoogleBusinessCreatePlaceActionLinkError.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1.cs` |

### MiscGoogleBusinessDeleteMedia

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessDeleteMedia(MiscGoogleBusinessDeleteMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessMediaResponse2`
- **Error**: `ApiException<MiscGoogleBusinessDeleteMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessMedia400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessMedia401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessMedia403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessMedia404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessMedia429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessMedia500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessMedia502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessMedia503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessMedia504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessDeleteMediaRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeleteMediaRequest.cs` |
| `ApiV1MiscGoogleBusinessMediaRequest1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaRequest1.cs` |
| `ApiV1MiscGoogleBusinessMediaResponse2` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaResponse2.cs` |
| `MiscGoogleBusinessDeleteMediaError` | `src/BundleSocial/Errors/MiscGoogleBusinessDeleteMediaError.cs` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia400Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia401Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia403Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia404Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia429Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia500Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia502Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia503Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia504Error1.cs` |

### MiscGoogleBusinessDeletePlaceActionLink

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessDeletePlaceActionLink(MiscGoogleBusinessDeletePlaceActionLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3`
- **Error**: `ApiException<MiscGoogleBusinessDeletePlaceActionLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessDeletePlaceActionLinkRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeletePlaceActionLinkRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3.cs` |
| `MiscGoogleBusinessDeletePlaceActionLinkError` | `src/BundleSocial/Errors/MiscGoogleBusinessDeletePlaceActionLinkError.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1.cs` |

### MiscGoogleBusinessDeletePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessDeletePost(MiscGoogleBusinessDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessPostResponse`
- **Error**: `ApiException<MiscGoogleBusinessDeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessPost400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessPost401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessPost403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessPost404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessPost429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessPost500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessPost502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessPost503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessPost504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessDeletePostRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeletePostRequest.cs` |
| `ApiV1MiscGoogleBusinessPostRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPostRequest.cs` |
| `ApiV1MiscGoogleBusinessPostResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPostResponse.cs` |
| `MiscGoogleBusinessDeletePostError` | `src/BundleSocial/Errors/MiscGoogleBusinessDeletePostError.cs` |
| `ApiV1MiscGoogleBusinessPost400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost400Error1.cs` |
| `ApiV1MiscGoogleBusinessPost401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost401Error1.cs` |
| `ApiV1MiscGoogleBusinessPost403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost403Error1.cs` |
| `ApiV1MiscGoogleBusinessPost404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost404Error1.cs` |
| `ApiV1MiscGoogleBusinessPost429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost429Error1.cs` |
| `ApiV1MiscGoogleBusinessPost500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost500Error1.cs` |
| `ApiV1MiscGoogleBusinessPost502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost502Error1.cs` |
| `ApiV1MiscGoogleBusinessPost503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost503Error1.cs` |
| `ApiV1MiscGoogleBusinessPost504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessPost504Error1.cs` |

### MiscGoogleBusinessDeleteReviewReply

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessDeleteReviewReply(MiscGoogleBusinessDeleteReviewReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReviewId`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsReplyResponse`
- **Error**: `ApiException<MiscGoogleBusinessDeleteReviewReplyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviewsReply400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviewsReply401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviewsReply403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviewsReply404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviewsReply429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviewsReply500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviewsReply502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviewsReply503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviewsReply504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessDeleteReviewReplyRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeleteReviewReplyRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReplyRequest1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReplyResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReplyResponse.cs` |
| `MiscGoogleBusinessDeleteReviewReplyError` | `src/BundleSocial/Errors/MiscGoogleBusinessDeleteReviewReplyError.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply504Error1.cs` |

### MiscGoogleBusinessGetAttributes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetAttributes(MiscGoogleBusinessGetAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscGoogleBusinessLocationAttributesResponse`
- **Error**: `ApiException<MiscGoogleBusinessGetAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationAttributes401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationAttributes403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationAttributes404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationAttributes429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationAttributes500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationAttributes502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationAttributes503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationAttributes504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetAttributesRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetAttributesRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesResponse.cs` |
| `MiscGoogleBusinessGetAttributesError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetAttributesError.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes504Error1.cs` |

### MiscGoogleBusinessGetFoodMenus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetFoodMenus(MiscGoogleBusinessGetFoodMenusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `fields` ← `Fields`
- **Returns**: `ApiV1MiscGoogleBusinessLocationFoodMenusResponse`
- **Error**: `ApiException<MiscGoogleBusinessGetFoodMenusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetFoodMenusRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetFoodMenusRequest.cs` |
| `Field3` | `src/BundleSocial/Models/Enums/Field3.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenusResponse.cs` |
| `MiscGoogleBusinessGetFoodMenusError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetFoodMenusError.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus504Error1.cs` |

### MiscGoogleBusinessGetLocation

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetLocation(MiscGoogleBusinessGetLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `fields` ← `Fields`
- **Returns**: `ApiV1MiscGoogleBusinessLocationResponse`
- **Error**: `ApiException<MiscGoogleBusinessGetLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocation400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocation401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocation403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocation404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocation429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocation500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocation502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocation503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocation504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetLocationRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetLocationRequest.cs` |
| `FieldBundleSocialMiscApi` | `src/BundleSocial/Models/Enums/FieldBundleSocialMiscApi.cs` |
| `ApiV1MiscGoogleBusinessLocationResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationResponse.cs` |
| `MiscGoogleBusinessGetLocationError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetLocationError.cs` |
| `ApiV1MiscGoogleBusinessLocation400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation504Error1.cs` |

### MiscGoogleBusinessGetReviewById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetReviewById(MiscGoogleBusinessGetReviewByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReviewId`, `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsResponse1`
- **Error**: `ApiException<MiscGoogleBusinessGetReviewByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviews400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviews401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviews403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviews404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviews429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviews500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviews502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviews503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviews504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetReviewByIdRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewByIdRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsResponse1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsResponse1.cs` |
| `MiscGoogleBusinessGetReviewByIdError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetReviewByIdError.cs` |
| `ApiV1MiscGoogleBusinessReviews400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews504Error1.cs` |

### MiscGoogleBusinessGetReviewImportById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetReviewImportById(MiscGoogleBusinessGetReviewImportByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsImportResponse`
- **Error**: `ApiException<MiscGoogleBusinessGetReviewImportByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviewsImport400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviewsImport401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviewsImport403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviewsImport404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviewsImport429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviewsImport500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviewsImport502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviewsImport503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviewsImport504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetReviewImportByIdRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewImportByIdRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsImportResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportResponse.cs` |
| `MiscGoogleBusinessGetReviewImportByIdError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetReviewImportByIdError.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport504Error1.cs` |

### MiscGoogleBusinessGetReviewImportStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetReviewImportStatus(MiscGoogleBusinessGetReviewImportStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsImportResponse1`
- **Error**: `ApiException<MiscGoogleBusinessGetReviewImportStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviewsImport400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviewsImport401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviewsImport403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviewsImport404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviewsImport429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviewsImport500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviewsImport502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviewsImport503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviewsImport504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetReviewImportStatusRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewImportStatusRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsImportResponse1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportResponse1.cs` |
| `MiscGoogleBusinessGetReviewImportStatusError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetReviewImportStatusError.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport504Error1.cs` |

### MiscGoogleBusinessGetReviews

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetReviews(MiscGoogleBusinessGetReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsResponse`
- **Error**: `ApiException<MiscGoogleBusinessGetReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviews400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviews401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviews403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviews404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviews429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviews500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviews502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviews503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviews504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviews504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetReviewsRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewsRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsResponse.cs` |
| `MiscGoogleBusinessGetReviewsError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetReviewsError.cs` |
| `ApiV1MiscGoogleBusinessReviews400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviews504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviews504Error1.cs` |

### MiscGoogleBusinessGetServiceList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessGetServiceList(MiscGoogleBusinessGetServiceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscGoogleBusinessLocationServiceListResponse`
- **Error**: `ApiException<MiscGoogleBusinessGetServiceListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationServiceList401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationServiceList403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationServiceList404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationServiceList429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationServiceList500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationServiceList502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationServiceList503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationServiceList504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessGetServiceListRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetServiceListRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceListResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceListResponse.cs` |
| `MiscGoogleBusinessGetServiceListError` | `src/BundleSocial/Errors/MiscGoogleBusinessGetServiceListError.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList504Error1.cs` |

### MiscGoogleBusinessImportReviews

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessImportReviews(MiscGoogleBusinessImportReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsImportResponse`
- **Error**: `ApiException<MiscGoogleBusinessImportReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviewsImport400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviewsImport401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviewsImport403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviewsImport404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviewsImport409Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport409Error1? value)` [409] · `TryGetApiV1MiscGoogleBusinessReviewsImport429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviewsImport500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviewsImport502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviewsImport503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviewsImport504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessImportReviewsRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessImportReviewsRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsImportRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsImportResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportResponse.cs` |
| `MiscGoogleBusinessImportReviewsError` | `src/BundleSocial/Errors/MiscGoogleBusinessImportReviewsError.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport409Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport409Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsImport504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImport504Error1.cs` |

### MiscGoogleBusinessListAvailableAttributes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessListAvailableAttributes(MiscGoogleBusinessListAvailableAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `languageCode` ← `LanguageCode`, `regionCode` ← `RegionCode`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse`
- **Error**: `ApiException<MiscGoogleBusinessListAvailableAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessListAvailableAttributesRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessListAvailableAttributesRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse.cs` |
| `MiscGoogleBusinessListAvailableAttributesError` | `src/BundleSocial/Errors/MiscGoogleBusinessListAvailableAttributesError.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1.cs` |

### MiscGoogleBusinessListCategories

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessListCategories(MiscGoogleBusinessListCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `RegionCode`, `LanguageCode`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `regionCode` ← `RegionCode`, `languageCode` ← `LanguageCode`, `names` ← `Names`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `view` ← `View`
- **Returns**: `ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse`
- **Error**: `ApiException<MiscGoogleBusinessListCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessListCategoriesRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessListCategoriesRequest.cs` |
| `View` | `src/BundleSocial/Models/Enums/View.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse.cs` |
| `MiscGoogleBusinessListCategoriesError` | `src/BundleSocial/Errors/MiscGoogleBusinessListCategoriesError.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1.cs` |

### MiscGoogleBusinessListMedia

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessListMedia(MiscGoogleBusinessListMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApiV1MiscGoogleBusinessMediaResponse1`
- **Error**: `ApiException<MiscGoogleBusinessListMediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessMedia400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessMedia401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessMedia403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessMedia404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessMedia429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessMedia500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessMedia502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessMedia503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessMedia504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessMedia504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessListMediaRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessListMediaRequest.cs` |
| `ApiV1MiscGoogleBusinessMediaResponse1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaResponse1.cs` |
| `MiscGoogleBusinessListMediaError` | `src/BundleSocial/Errors/MiscGoogleBusinessListMediaError.cs` |
| `ApiV1MiscGoogleBusinessMedia400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia400Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia401Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia403Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia404Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia429Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia500Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia502Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia503Error1.cs` |
| `ApiV1MiscGoogleBusinessMedia504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessMedia504Error1.cs` |

### MiscGoogleBusinessListPlaceActionLinks

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessListPlaceActionLinks(MiscGoogleBusinessListPlaceActionLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse`
- **Error**: `ApiException<MiscGoogleBusinessListPlaceActionLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessListPlaceActionLinksRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessListPlaceActionLinksRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse.cs` |
| `MiscGoogleBusinessListPlaceActionLinksError` | `src/BundleSocial/Errors/MiscGoogleBusinessListPlaceActionLinksError.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1.cs` |

### MiscGoogleBusinessListSearchKeywords

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessListSearchKeywords(MiscGoogleBusinessListSearchKeywordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `StartMonth`, `EndMonth`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `startMonth` ← `StartMonth`, `endMonth` ← `EndMonth`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse`
- **Error**: `ApiException<MiscGoogleBusinessListSearchKeywordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationSearchKeywords504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessListSearchKeywordsRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessListSearchKeywordsRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse.cs` |
| `MiscGoogleBusinessListSearchKeywordsError` | `src/BundleSocial/Errors/MiscGoogleBusinessListSearchKeywordsError.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1.cs` |

### MiscGoogleBusinessReplyToReview

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessReplyToReview(MiscGoogleBusinessReplyToReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReviewId`
- **Returns**: `ApiV1MiscGoogleBusinessReviewsReplyResponse`
- **Error**: `ApiException<MiscGoogleBusinessReplyToReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessReviewsReply400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessReviewsReply401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessReviewsReply403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessReviewsReply404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessReviewsReply429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessReviewsReply500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessReviewsReply502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessReviewsReply503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessReviewsReply504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessReviewsReply504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessReplyToReviewRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessReplyToReviewRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsReplyRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReplyRequest.cs` |
| `ApiV1MiscGoogleBusinessReviewsReplyResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReplyResponse.cs` |
| `MiscGoogleBusinessReplyToReviewError` | `src/BundleSocial/Errors/MiscGoogleBusinessReplyToReviewError.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply400Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply401Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply403Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply404Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply429Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply500Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply502Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply503Error1.cs` |
| `ApiV1MiscGoogleBusinessReviewsReply504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReply504Error1.cs` |

### MiscGoogleBusinessUpdateAttributes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessUpdateAttributes(MiscGoogleBusinessUpdateAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationAttributesResponse`
- **Error**: `ApiException<MiscGoogleBusinessUpdateAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationAttributes401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationAttributes403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationAttributes404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationAttributes429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationAttributes500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationAttributes502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationAttributes503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationAttributes504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessUpdateAttributesRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateAttributesRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributesResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesResponse.cs` |
| `MiscGoogleBusinessUpdateAttributesError` | `src/BundleSocial/Errors/MiscGoogleBusinessUpdateAttributesError.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationAttributes504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributes504Error1.cs` |

### MiscGoogleBusinessUpdateFoodMenus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessUpdateFoodMenus(MiscGoogleBusinessUpdateFoodMenusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationFoodMenusResponse`
- **Error**: `ApiException<MiscGoogleBusinessUpdateFoodMenusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationFoodMenus504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationFoodMenus504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessUpdateFoodMenusRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateFoodMenusRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenusRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenusResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenusResponse.cs` |
| `MiscGoogleBusinessUpdateFoodMenusError` | `src/BundleSocial/Errors/MiscGoogleBusinessUpdateFoodMenusError.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationFoodMenus504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenus504Error1.cs` |

### MiscGoogleBusinessUpdateHours

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessUpdateHours(MiscGoogleBusinessUpdateHoursRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationHoursResponse`
- **Error**: `ApiException<MiscGoogleBusinessUpdateHoursError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationHours400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationHours401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationHours403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationHours404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationHours429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationHours500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationHours502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationHours503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationHours504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationHours504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessUpdateHoursRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateHoursRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationHoursRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHoursRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationHoursResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHoursResponse.cs` |
| `MiscGoogleBusinessUpdateHoursError` | `src/BundleSocial/Errors/MiscGoogleBusinessUpdateHoursError.cs` |
| `ApiV1MiscGoogleBusinessLocationHours400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationHours504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHours504Error1.cs` |

### MiscGoogleBusinessUpdateLocation

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessUpdateLocation(MiscGoogleBusinessUpdateLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationResponse`
- **Error**: `ApiException<MiscGoogleBusinessUpdateLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocation400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocation401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocation403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocation404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocation429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocation500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocation502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocation503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocation504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocation504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessUpdateLocationRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateLocationRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationResponse.cs` |
| `MiscGoogleBusinessUpdateLocationError` | `src/BundleSocial/Errors/MiscGoogleBusinessUpdateLocationError.cs` |
| `ApiV1MiscGoogleBusinessLocation400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocation504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocation504Error1.cs` |

### MiscGoogleBusinessUpdatePlaceActionLink

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessUpdatePlaceActionLink(MiscGoogleBusinessUpdatePlaceActionLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1`
- **Error**: `ApiException<MiscGoogleBusinessUpdatePlaceActionLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessUpdatePlaceActionLinkRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdatePlaceActionLinkRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1.cs` |
| `MiscGoogleBusinessUpdatePlaceActionLinkError` | `src/BundleSocial/Errors/MiscGoogleBusinessUpdatePlaceActionLinkError.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1.cs` |

### MiscGoogleBusinessUpdateServiceList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscGoogleBusinessUpdateServiceList(MiscGoogleBusinessUpdateServiceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscGoogleBusinessLocationServiceListResponse`
- **Error**: `ApiException<MiscGoogleBusinessUpdateServiceListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList400Error1? value)` [400] · `TryGetApiV1MiscGoogleBusinessLocationServiceList401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList401Error1? value)` [401] · `TryGetApiV1MiscGoogleBusinessLocationServiceList403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList403Error1? value)` [403] · `TryGetApiV1MiscGoogleBusinessLocationServiceList404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList404Error1? value)` [404] · `TryGetApiV1MiscGoogleBusinessLocationServiceList429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList429Error1? value)` [429] · `TryGetApiV1MiscGoogleBusinessLocationServiceList500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList500Error1? value)` [500] · `TryGetApiV1MiscGoogleBusinessLocationServiceList502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList502Error1? value)` [502] · `TryGetApiV1MiscGoogleBusinessLocationServiceList503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList503Error1? value)` [503] · `TryGetApiV1MiscGoogleBusinessLocationServiceList504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscGoogleBusinessUpdateServiceListRequest` | `src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateServiceListRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceListRequest` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceListRequest.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceListResponse` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceListResponse.cs` |
| `MiscGoogleBusinessUpdateServiceListError` | `src/BundleSocial/Errors/MiscGoogleBusinessUpdateServiceListError.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList400Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList400Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList401Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList401Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList403Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList403Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList404Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList404Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList429Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList429Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList500Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList500Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList502Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList502Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList503Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList503Error1.cs` |
| `ApiV1MiscGoogleBusinessLocationServiceList504Error1` | `src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceList504Error1.cs` |

### MiscInstagramBusinessDiscovery

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscInstagramBusinessDiscovery(MiscInstagramBusinessDiscoveryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Username`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `username` ← `Username`
- **Returns**: `ApiV1MiscInstagramTagsResponse`
- **Error**: `ApiException<MiscInstagramBusinessDiscoveryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscInstagramTags400Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags400Error1? value)` [400] · `TryGetApiV1MiscInstagramTags401Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags401Error1? value)` [401] · `TryGetApiV1MiscInstagramTags403Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags403Error1? value)` [403] · `TryGetApiV1MiscInstagramTags404Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags404Error1? value)` [404] · `TryGetApiV1MiscInstagramTags429Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags429Error1? value)` [429] · `TryGetApiV1MiscInstagramTags500Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags500Error1? value)` [500] · `TryGetApiV1MiscInstagramTags502Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags502Error1? value)` [502] · `TryGetApiV1MiscInstagramTags503Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags503Error1? value)` [503] · `TryGetApiV1MiscInstagramTags504Error1([NotNullWhen(true)] out ApiV1MiscInstagramTags504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscInstagramBusinessDiscoveryRequest` | `src/BundleSocial/Requests/Misc/MiscInstagramBusinessDiscoveryRequest.cs` |
| `ApiV1MiscInstagramTagsResponse` | `src/BundleSocial/Models/ApiV1MiscInstagramTagsResponse.cs` |
| `MiscInstagramBusinessDiscoveryError` | `src/BundleSocial/Errors/MiscInstagramBusinessDiscoveryError.cs` |
| `ApiV1MiscInstagramTags400Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags400Error1.cs` |
| `ApiV1MiscInstagramTags401Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags401Error1.cs` |
| `ApiV1MiscInstagramTags403Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags403Error1.cs` |
| `ApiV1MiscInstagramTags404Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags404Error1.cs` |
| `ApiV1MiscInstagramTags429Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags429Error1.cs` |
| `ApiV1MiscInstagramTags500Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags500Error1.cs` |
| `ApiV1MiscInstagramTags502Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags502Error1.cs` |
| `ApiV1MiscInstagramTags503Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags503Error1.cs` |
| `ApiV1MiscInstagramTags504Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramTags504Error1.cs` |

### MiscInstagramDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscInstagramDeleteComment(MiscInstagramDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscInstagramCommentResponse`
- **Error**: `ApiException<MiscInstagramDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscInstagramComment400Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment400Error1? value)` [400] · `TryGetApiV1MiscInstagramComment401Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment401Error1? value)` [401] · `TryGetApiV1MiscInstagramComment403Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment403Error1? value)` [403] · `TryGetApiV1MiscInstagramComment404Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment404Error1? value)` [404] · `TryGetApiV1MiscInstagramComment429Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment429Error1? value)` [429] · `TryGetApiV1MiscInstagramComment500Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment500Error1? value)` [500] · `TryGetApiV1MiscInstagramComment502Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment502Error1? value)` [502] · `TryGetApiV1MiscInstagramComment503Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment503Error1? value)` [503] · `TryGetApiV1MiscInstagramComment504Error1([NotNullWhen(true)] out ApiV1MiscInstagramComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscInstagramDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscInstagramDeleteCommentRequest.cs` |
| `ApiV1MiscInstagramCommentRequest` | `src/BundleSocial/Models/ApiV1MiscInstagramCommentRequest.cs` |
| `ApiV1MiscInstagramCommentResponse` | `src/BundleSocial/Models/ApiV1MiscInstagramCommentResponse.cs` |
| `MiscInstagramDeleteCommentError` | `src/BundleSocial/Errors/MiscInstagramDeleteCommentError.cs` |
| `ApiV1MiscInstagramComment400Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment400Error1.cs` |
| `ApiV1MiscInstagramComment401Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment401Error1.cs` |
| `ApiV1MiscInstagramComment403Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment403Error1.cs` |
| `ApiV1MiscInstagramComment404Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment404Error1.cs` |
| `ApiV1MiscInstagramComment429Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment429Error1.cs` |
| `ApiV1MiscInstagramComment500Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment500Error1.cs` |
| `ApiV1MiscInstagramComment502Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment502Error1.cs` |
| `ApiV1MiscInstagramComment503Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment503Error1.cs` |
| `ApiV1MiscInstagramComment504Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramComment504Error1.cs` |

### MiscInstagramSearchAudio

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscInstagramSearchAudio(MiscInstagramSearchAudioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `AudioType`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `audioType` ← `AudioType`, `searchQuery` ← `SearchQuery`
- **Returns**: `ApiV1MiscInstagramAudioResponse`
- **Error**: `ApiException<MiscInstagramSearchAudioError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscInstagramAudio400Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio400Error1? value)` [400] · `TryGetApiV1MiscInstagramAudio401Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio401Error1? value)` [401] · `TryGetApiV1MiscInstagramAudio403Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio403Error1? value)` [403] · `TryGetApiV1MiscInstagramAudio404Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio404Error1? value)` [404] · `TryGetApiV1MiscInstagramAudio429Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio429Error1? value)` [429] · `TryGetApiV1MiscInstagramAudio500Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio500Error1? value)` [500] · `TryGetApiV1MiscInstagramAudio502Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio502Error1? value)` [502] · `TryGetApiV1MiscInstagramAudio503Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio503Error1? value)` [503] · `TryGetApiV1MiscInstagramAudio504Error1([NotNullWhen(true)] out ApiV1MiscInstagramAudio504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscInstagramSearchAudioRequest` | `src/BundleSocial/Requests/Misc/MiscInstagramSearchAudioRequest.cs` |
| `AudioType` | `src/BundleSocial/Models/Enums/AudioType.cs` |
| `ApiV1MiscInstagramAudioResponse` | `src/BundleSocial/Models/ApiV1MiscInstagramAudioResponse.cs` |
| `MiscInstagramSearchAudioError` | `src/BundleSocial/Errors/MiscInstagramSearchAudioError.cs` |
| `ApiV1MiscInstagramAudio400Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio400Error1.cs` |
| `ApiV1MiscInstagramAudio401Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio401Error1.cs` |
| `ApiV1MiscInstagramAudio403Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio403Error1.cs` |
| `ApiV1MiscInstagramAudio404Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio404Error1.cs` |
| `ApiV1MiscInstagramAudio429Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio429Error1.cs` |
| `ApiV1MiscInstagramAudio500Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio500Error1.cs` |
| `ApiV1MiscInstagramAudio502Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio502Error1.cs` |
| `ApiV1MiscInstagramAudio503Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio503Error1.cs` |
| `ApiV1MiscInstagramAudio504Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramAudio504Error1.cs` |

### MiscInstagramSearchLocations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscInstagramSearchLocations(MiscInstagramSearchLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Q`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `q` ← `Q`, `limit` ← `Limit`
- **Returns**: `ApiV1MiscInstagramLocationsResponse`
- **Error**: `ApiException<MiscInstagramSearchLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscInstagramLocations400Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations400Error1? value)` [400] · `TryGetApiV1MiscInstagramLocations401Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations401Error1? value)` [401] · `TryGetApiV1MiscInstagramLocations403Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations403Error1? value)` [403] · `TryGetApiV1MiscInstagramLocations404Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations404Error1? value)` [404] · `TryGetApiV1MiscInstagramLocations429Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations429Error1? value)` [429] · `TryGetApiV1MiscInstagramLocations500Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations500Error1? value)` [500] · `TryGetApiV1MiscInstagramLocations502Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations502Error1? value)` [502] · `TryGetApiV1MiscInstagramLocations503Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations503Error1? value)` [503] · `TryGetApiV1MiscInstagramLocations504Error1([NotNullWhen(true)] out ApiV1MiscInstagramLocations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscInstagramSearchLocationsRequest` | `src/BundleSocial/Requests/Misc/MiscInstagramSearchLocationsRequest.cs` |
| `ApiV1MiscInstagramLocationsResponse` | `src/BundleSocial/Models/ApiV1MiscInstagramLocationsResponse.cs` |
| `MiscInstagramSearchLocationsError` | `src/BundleSocial/Errors/MiscInstagramSearchLocationsError.cs` |
| `ApiV1MiscInstagramLocations400Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations400Error1.cs` |
| `ApiV1MiscInstagramLocations401Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations401Error1.cs` |
| `ApiV1MiscInstagramLocations403Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations403Error1.cs` |
| `ApiV1MiscInstagramLocations404Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations404Error1.cs` |
| `ApiV1MiscInstagramLocations429Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations429Error1.cs` |
| `ApiV1MiscInstagramLocations500Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations500Error1.cs` |
| `ApiV1MiscInstagramLocations502Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations502Error1.cs` |
| `ApiV1MiscInstagramLocations503Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations503Error1.cs` |
| `ApiV1MiscInstagramLocations504Error1` | `src/BundleSocial/Models/ApiV1MiscInstagramLocations504Error1.cs` |

### MiscLinkedinBuildCommentary

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinBuildCommentary(MiscLinkedinBuildCommentaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscLinkedinMentionsBuilderResponse`
- **Error**: `ApiException<MiscLinkedinBuildCommentaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinMentionsBuilder400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder400Error1? value)` [400] · `TryGetApiV1MiscLinkedinMentionsBuilder401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder401Error1? value)` [401] · `TryGetApiV1MiscLinkedinMentionsBuilder403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder403Error1? value)` [403] · `TryGetApiV1MiscLinkedinMentionsBuilder404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder404Error1? value)` [404] · `TryGetApiV1MiscLinkedinMentionsBuilder429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder429Error1? value)` [429] · `TryGetApiV1MiscLinkedinMentionsBuilder500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder500Error1? value)` [500] · `TryGetApiV1MiscLinkedinMentionsBuilder502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder502Error1? value)` [502] · `TryGetApiV1MiscLinkedinMentionsBuilder503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder503Error1? value)` [503] · `TryGetApiV1MiscLinkedinMentionsBuilder504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsBuilder504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinBuildCommentaryRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinBuildCommentaryRequest.cs` |
| `ApiV1MiscLinkedinMentionsBuilderRequest` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilderRequest.cs` |
| `ApiV1MiscLinkedinMentionsBuilderResponse` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilderResponse.cs` |
| `MiscLinkedinBuildCommentaryError` | `src/BundleSocial/Errors/MiscLinkedinBuildCommentaryError.cs` |
| `ApiV1MiscLinkedinMentionsBuilder400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder400Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder401Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder403Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder404Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder429Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder500Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder502Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder503Error1.cs` |
| `ApiV1MiscLinkedinMentionsBuilder504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilder504Error1.cs` |

### MiscLinkedinDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinDeleteComment(MiscLinkedinDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscLinkedinCommentResponse1`
- **Error**: `ApiException<MiscLinkedinDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinComment400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment400Error1? value)` [400] · `TryGetApiV1MiscLinkedinComment401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment401Error1? value)` [401] · `TryGetApiV1MiscLinkedinComment403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment403Error1? value)` [403] · `TryGetApiV1MiscLinkedinComment404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment404Error1? value)` [404] · `TryGetApiV1MiscLinkedinComment429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment429Error1? value)` [429] · `TryGetApiV1MiscLinkedinComment500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment500Error1? value)` [500] · `TryGetApiV1MiscLinkedinComment502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment502Error1? value)` [502] · `TryGetApiV1MiscLinkedinComment503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment503Error1? value)` [503] · `TryGetApiV1MiscLinkedinComment504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinDeleteCommentRequest.cs` |
| `ApiV1MiscLinkedinCommentRequest1` | `src/BundleSocial/Models/ApiV1MiscLinkedinCommentRequest1.cs` |
| `ApiV1MiscLinkedinCommentResponse1` | `src/BundleSocial/Models/ApiV1MiscLinkedinCommentResponse1.cs` |
| `MiscLinkedinDeleteCommentError` | `src/BundleSocial/Errors/MiscLinkedinDeleteCommentError.cs` |
| `ApiV1MiscLinkedinComment400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment400Error1.cs` |
| `ApiV1MiscLinkedinComment401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment401Error1.cs` |
| `ApiV1MiscLinkedinComment403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment403Error1.cs` |
| `ApiV1MiscLinkedinComment404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment404Error1.cs` |
| `ApiV1MiscLinkedinComment429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment429Error1.cs` |
| `ApiV1MiscLinkedinComment500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment500Error1.cs` |
| `ApiV1MiscLinkedinComment502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment502Error1.cs` |
| `ApiV1MiscLinkedinComment503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment503Error1.cs` |
| `ApiV1MiscLinkedinComment504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment504Error1.cs` |

### MiscLinkedinDeletePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinDeletePost(MiscLinkedinDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscLinkedinPostResponse1`
- **Error**: `ApiException<MiscLinkedinDeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinPost400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost400Error1? value)` [400] · `TryGetApiV1MiscLinkedinPost401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost401Error1? value)` [401] · `TryGetApiV1MiscLinkedinPost403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost403Error1? value)` [403] · `TryGetApiV1MiscLinkedinPost404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost404Error1? value)` [404] · `TryGetApiV1MiscLinkedinPost429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost429Error1? value)` [429] · `TryGetApiV1MiscLinkedinPost500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost500Error1? value)` [500] · `TryGetApiV1MiscLinkedinPost502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost502Error1? value)` [502] · `TryGetApiV1MiscLinkedinPost503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost503Error1? value)` [503] · `TryGetApiV1MiscLinkedinPost504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinDeletePostRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinDeletePostRequest.cs` |
| `ApiV1MiscLinkedinPostRequest1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostRequest1.cs` |
| `ApiV1MiscLinkedinPostResponse1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostResponse1.cs` |
| `MiscLinkedinDeletePostError` | `src/BundleSocial/Errors/MiscLinkedinDeletePostError.cs` |
| `ApiV1MiscLinkedinPost400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost400Error1.cs` |
| `ApiV1MiscLinkedinPost401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost401Error1.cs` |
| `ApiV1MiscLinkedinPost403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost403Error1.cs` |
| `ApiV1MiscLinkedinPost404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost404Error1.cs` |
| `ApiV1MiscLinkedinPost429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost429Error1.cs` |
| `ApiV1MiscLinkedinPost500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost500Error1.cs` |
| `ApiV1MiscLinkedinPost502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost502Error1.cs` |
| `ApiV1MiscLinkedinPost503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost503Error1.cs` |
| `ApiV1MiscLinkedinPost504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost504Error1.cs` |

### MiscLinkedinEditComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinEditComment(MiscLinkedinEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscLinkedinCommentResponse`
- **Error**: `ApiException<MiscLinkedinEditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinComment400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment400Error1? value)` [400] · `TryGetApiV1MiscLinkedinComment401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment401Error1? value)` [401] · `TryGetApiV1MiscLinkedinComment403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment403Error1? value)` [403] · `TryGetApiV1MiscLinkedinComment404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment404Error1? value)` [404] · `TryGetApiV1MiscLinkedinComment429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment429Error1? value)` [429] · `TryGetApiV1MiscLinkedinComment500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment500Error1? value)` [500] · `TryGetApiV1MiscLinkedinComment502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment502Error1? value)` [502] · `TryGetApiV1MiscLinkedinComment503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment503Error1? value)` [503] · `TryGetApiV1MiscLinkedinComment504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinEditCommentRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinEditCommentRequest.cs` |
| `ApiV1MiscLinkedinCommentRequest` | `src/BundleSocial/Models/ApiV1MiscLinkedinCommentRequest.cs` |
| `ApiV1MiscLinkedinCommentResponse` | `src/BundleSocial/Models/ApiV1MiscLinkedinCommentResponse.cs` |
| `MiscLinkedinEditCommentError` | `src/BundleSocial/Errors/MiscLinkedinEditCommentError.cs` |
| `ApiV1MiscLinkedinComment400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment400Error1.cs` |
| `ApiV1MiscLinkedinComment401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment401Error1.cs` |
| `ApiV1MiscLinkedinComment403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment403Error1.cs` |
| `ApiV1MiscLinkedinComment404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment404Error1.cs` |
| `ApiV1MiscLinkedinComment429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment429Error1.cs` |
| `ApiV1MiscLinkedinComment500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment500Error1.cs` |
| `ApiV1MiscLinkedinComment502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment502Error1.cs` |
| `ApiV1MiscLinkedinComment503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment503Error1.cs` |
| `ApiV1MiscLinkedinComment504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinComment504Error1.cs` |

### MiscLinkedinEditPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinEditPost(MiscLinkedinEditPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscLinkedinPostResponse`
- **Error**: `ApiException<MiscLinkedinEditPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinPost400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost400Error1? value)` [400] · `TryGetApiV1MiscLinkedinPost401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost401Error1? value)` [401] · `TryGetApiV1MiscLinkedinPost403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost403Error1? value)` [403] · `TryGetApiV1MiscLinkedinPost404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost404Error1? value)` [404] · `TryGetApiV1MiscLinkedinPost429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost429Error1? value)` [429] · `TryGetApiV1MiscLinkedinPost500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost500Error1? value)` [500] · `TryGetApiV1MiscLinkedinPost502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost502Error1? value)` [502] · `TryGetApiV1MiscLinkedinPost503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost503Error1? value)` [503] · `TryGetApiV1MiscLinkedinPost504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinEditPostRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinEditPostRequest.cs` |
| `ApiV1MiscLinkedinPostRequest` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostRequest.cs` |
| `ApiV1MiscLinkedinPostResponse` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostResponse.cs` |
| `MiscLinkedinEditPostError` | `src/BundleSocial/Errors/MiscLinkedinEditPostError.cs` |
| `ApiV1MiscLinkedinPost400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost400Error1.cs` |
| `ApiV1MiscLinkedinPost401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost401Error1.cs` |
| `ApiV1MiscLinkedinPost403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost403Error1.cs` |
| `ApiV1MiscLinkedinPost404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost404Error1.cs` |
| `ApiV1MiscLinkedinPost429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost429Error1.cs` |
| `ApiV1MiscLinkedinPost500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost500Error1.cs` |
| `ApiV1MiscLinkedinPost502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost502Error1.cs` |
| `ApiV1MiscLinkedinPost503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost503Error1.cs` |
| `ApiV1MiscLinkedinPost504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPost504Error1.cs` |

### MiscLinkedinGetTags

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinGetTags(MiscLinkedinGetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `q` ← `Q`, `url` ← `Url`, `displayName` ← `DisplayName`, `scope` ← `Scope`
- **Returns**: `ApiV1MiscLinkedinMentionsTagsResponse`
- **Error**: `ApiException<MiscLinkedinGetTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinMentionsTags400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags400Error1? value)` [400] · `TryGetApiV1MiscLinkedinMentionsTags401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags401Error1? value)` [401] · `TryGetApiV1MiscLinkedinMentionsTags403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags403Error1? value)` [403] · `TryGetApiV1MiscLinkedinMentionsTags404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags404Error1? value)` [404] · `TryGetApiV1MiscLinkedinMentionsTags429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags429Error1? value)` [429] · `TryGetApiV1MiscLinkedinMentionsTags500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags500Error1? value)` [500] · `TryGetApiV1MiscLinkedinMentionsTags502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags502Error1? value)` [502] · `TryGetApiV1MiscLinkedinMentionsTags503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags503Error1? value)` [503] · `TryGetApiV1MiscLinkedinMentionsTags504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinMentionsTags504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinGetTagsRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinGetTagsRequest.cs` |
| `Scope` | `src/BundleSocial/Models/Enums/Scope.cs` |
| `ApiV1MiscLinkedinMentionsTagsResponse` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTagsResponse.cs` |
| `MiscLinkedinGetTagsError` | `src/BundleSocial/Errors/MiscLinkedinGetTagsError.cs` |
| `ApiV1MiscLinkedinMentionsTags400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags400Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags401Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags403Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags404Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags429Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags500Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags502Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags503Error1.cs` |
| `ApiV1MiscLinkedinMentionsTags504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTags504Error1.cs` |

### MiscLinkedinResharePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscLinkedinResharePost(MiscLinkedinResharePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscLinkedinPostReshareResponse`
- **Error**: `ApiException<MiscLinkedinResharePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscLinkedinPostReshare400Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare400Error1? value)` [400] · `TryGetApiV1MiscLinkedinPostReshare401Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare401Error1? value)` [401] · `TryGetApiV1MiscLinkedinPostReshare403Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare403Error1? value)` [403] · `TryGetApiV1MiscLinkedinPostReshare404Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare404Error1? value)` [404] · `TryGetApiV1MiscLinkedinPostReshare422Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare422Error1? value)` [422] · `TryGetApiV1MiscLinkedinPostReshare429Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare429Error1? value)` [429] · `TryGetApiV1MiscLinkedinPostReshare500Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare500Error1? value)` [500] · `TryGetApiV1MiscLinkedinPostReshare502Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare502Error1? value)` [502] · `TryGetApiV1MiscLinkedinPostReshare503Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare503Error1? value)` [503] · `TryGetApiV1MiscLinkedinPostReshare504Error1([NotNullWhen(true)] out ApiV1MiscLinkedinPostReshare504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscLinkedinResharePostRequest` | `src/BundleSocial/Requests/Misc/MiscLinkedinResharePostRequest.cs` |
| `ApiV1MiscLinkedinPostReshareRequest` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshareRequest.cs` |
| `ApiV1MiscLinkedinPostReshareResponse` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshareResponse.cs` |
| `MiscLinkedinResharePostError` | `src/BundleSocial/Errors/MiscLinkedinResharePostError.cs` |
| `ApiV1MiscLinkedinPostReshare400Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare400Error1.cs` |
| `ApiV1MiscLinkedinPostReshare401Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare401Error1.cs` |
| `ApiV1MiscLinkedinPostReshare403Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare403Error1.cs` |
| `ApiV1MiscLinkedinPostReshare404Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare404Error1.cs` |
| `ApiV1MiscLinkedinPostReshare422Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare422Error1.cs` |
| `ApiV1MiscLinkedinPostReshare429Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare429Error1.cs` |
| `ApiV1MiscLinkedinPostReshare500Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare500Error1.cs` |
| `ApiV1MiscLinkedinPostReshare502Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare502Error1.cs` |
| `ApiV1MiscLinkedinPostReshare503Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare503Error1.cs` |
| `ApiV1MiscLinkedinPostReshare504Error1` | `src/BundleSocial/Models/ApiV1MiscLinkedinPostReshare504Error1.cs` |

### MiscMastodonDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscMastodonDeleteComment(MiscMastodonDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscMastodonCommentResponse1`
- **Error**: `ApiException<MiscMastodonDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscMastodonComment400Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment400Error1? value)` [400] · `TryGetApiV1MiscMastodonComment401Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment401Error1? value)` [401] · `TryGetApiV1MiscMastodonComment403Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment403Error1? value)` [403] · `TryGetApiV1MiscMastodonComment404Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment404Error1? value)` [404] · `TryGetApiV1MiscMastodonComment429Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment429Error1? value)` [429] · `TryGetApiV1MiscMastodonComment500Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment500Error1? value)` [500] · `TryGetApiV1MiscMastodonComment502Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment502Error1? value)` [502] · `TryGetApiV1MiscMastodonComment503Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment503Error1? value)` [503] · `TryGetApiV1MiscMastodonComment504Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscMastodonDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscMastodonDeleteCommentRequest.cs` |
| `ApiV1MiscMastodonCommentRequest1` | `src/BundleSocial/Models/ApiV1MiscMastodonCommentRequest1.cs` |
| `ApiV1MiscMastodonCommentResponse1` | `src/BundleSocial/Models/ApiV1MiscMastodonCommentResponse1.cs` |
| `MiscMastodonDeleteCommentError` | `src/BundleSocial/Errors/MiscMastodonDeleteCommentError.cs` |
| `ApiV1MiscMastodonComment400Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment400Error1.cs` |
| `ApiV1MiscMastodonComment401Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment401Error1.cs` |
| `ApiV1MiscMastodonComment403Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment403Error1.cs` |
| `ApiV1MiscMastodonComment404Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment404Error1.cs` |
| `ApiV1MiscMastodonComment429Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment429Error1.cs` |
| `ApiV1MiscMastodonComment500Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment500Error1.cs` |
| `ApiV1MiscMastodonComment502Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment502Error1.cs` |
| `ApiV1MiscMastodonComment503Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment503Error1.cs` |
| `ApiV1MiscMastodonComment504Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment504Error1.cs` |

### MiscMastodonDeleteStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscMastodonDeleteStatus(MiscMastodonDeleteStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscMastodonStatusResponse1`
- **Error**: `ApiException<MiscMastodonDeleteStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscMastodonStatus400Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus400Error1? value)` [400] · `TryGetApiV1MiscMastodonStatus401Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus401Error1? value)` [401] · `TryGetApiV1MiscMastodonStatus403Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus403Error1? value)` [403] · `TryGetApiV1MiscMastodonStatus404Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus404Error1? value)` [404] · `TryGetApiV1MiscMastodonStatus429Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus429Error1? value)` [429] · `TryGetApiV1MiscMastodonStatus500Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus500Error1? value)` [500] · `TryGetApiV1MiscMastodonStatus502Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus502Error1? value)` [502] · `TryGetApiV1MiscMastodonStatus503Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus503Error1? value)` [503] · `TryGetApiV1MiscMastodonStatus504Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscMastodonDeleteStatusRequest` | `src/BundleSocial/Requests/Misc/MiscMastodonDeleteStatusRequest.cs` |
| `ApiV1MiscMastodonStatusRequest1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatusRequest1.cs` |
| `ApiV1MiscMastodonStatusResponse1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatusResponse1.cs` |
| `MiscMastodonDeleteStatusError` | `src/BundleSocial/Errors/MiscMastodonDeleteStatusError.cs` |
| `ApiV1MiscMastodonStatus400Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus400Error1.cs` |
| `ApiV1MiscMastodonStatus401Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus401Error1.cs` |
| `ApiV1MiscMastodonStatus403Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus403Error1.cs` |
| `ApiV1MiscMastodonStatus404Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus404Error1.cs` |
| `ApiV1MiscMastodonStatus429Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus429Error1.cs` |
| `ApiV1MiscMastodonStatus500Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus500Error1.cs` |
| `ApiV1MiscMastodonStatus502Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus502Error1.cs` |
| `ApiV1MiscMastodonStatus503Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus503Error1.cs` |
| `ApiV1MiscMastodonStatus504Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus504Error1.cs` |

### MiscMastodonEditComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscMastodonEditComment(MiscMastodonEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscMastodonCommentResponse`
- **Error**: `ApiException<MiscMastodonEditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscMastodonComment400Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment400Error1? value)` [400] · `TryGetApiV1MiscMastodonComment401Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment401Error1? value)` [401] · `TryGetApiV1MiscMastodonComment403Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment403Error1? value)` [403] · `TryGetApiV1MiscMastodonComment404Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment404Error1? value)` [404] · `TryGetApiV1MiscMastodonComment429Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment429Error1? value)` [429] · `TryGetApiV1MiscMastodonComment500Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment500Error1? value)` [500] · `TryGetApiV1MiscMastodonComment502Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment502Error1? value)` [502] · `TryGetApiV1MiscMastodonComment503Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment503Error1? value)` [503] · `TryGetApiV1MiscMastodonComment504Error1([NotNullWhen(true)] out ApiV1MiscMastodonComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscMastodonEditCommentRequest` | `src/BundleSocial/Requests/Misc/MiscMastodonEditCommentRequest.cs` |
| `ApiV1MiscMastodonCommentRequest` | `src/BundleSocial/Models/ApiV1MiscMastodonCommentRequest.cs` |
| `ApiV1MiscMastodonCommentResponse` | `src/BundleSocial/Models/ApiV1MiscMastodonCommentResponse.cs` |
| `MiscMastodonEditCommentError` | `src/BundleSocial/Errors/MiscMastodonEditCommentError.cs` |
| `ApiV1MiscMastodonComment400Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment400Error1.cs` |
| `ApiV1MiscMastodonComment401Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment401Error1.cs` |
| `ApiV1MiscMastodonComment403Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment403Error1.cs` |
| `ApiV1MiscMastodonComment404Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment404Error1.cs` |
| `ApiV1MiscMastodonComment429Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment429Error1.cs` |
| `ApiV1MiscMastodonComment500Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment500Error1.cs` |
| `ApiV1MiscMastodonComment502Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment502Error1.cs` |
| `ApiV1MiscMastodonComment503Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment503Error1.cs` |
| `ApiV1MiscMastodonComment504Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonComment504Error1.cs` |

### MiscMastodonEditStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscMastodonEditStatus(MiscMastodonEditStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscMastodonStatusResponse`
- **Error**: `ApiException<MiscMastodonEditStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscMastodonStatus400Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus400Error1? value)` [400] · `TryGetApiV1MiscMastodonStatus401Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus401Error1? value)` [401] · `TryGetApiV1MiscMastodonStatus403Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus403Error1? value)` [403] · `TryGetApiV1MiscMastodonStatus404Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus404Error1? value)` [404] · `TryGetApiV1MiscMastodonStatus429Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus429Error1? value)` [429] · `TryGetApiV1MiscMastodonStatus500Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus500Error1? value)` [500] · `TryGetApiV1MiscMastodonStatus502Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus502Error1? value)` [502] · `TryGetApiV1MiscMastodonStatus503Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus503Error1? value)` [503] · `TryGetApiV1MiscMastodonStatus504Error1([NotNullWhen(true)] out ApiV1MiscMastodonStatus504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscMastodonEditStatusRequest` | `src/BundleSocial/Requests/Misc/MiscMastodonEditStatusRequest.cs` |
| `ApiV1MiscMastodonStatusRequest` | `src/BundleSocial/Models/ApiV1MiscMastodonStatusRequest.cs` |
| `ApiV1MiscMastodonStatusResponse` | `src/BundleSocial/Models/ApiV1MiscMastodonStatusResponse.cs` |
| `MiscMastodonEditStatusError` | `src/BundleSocial/Errors/MiscMastodonEditStatusError.cs` |
| `ApiV1MiscMastodonStatus400Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus400Error1.cs` |
| `ApiV1MiscMastodonStatus401Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus401Error1.cs` |
| `ApiV1MiscMastodonStatus403Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus403Error1.cs` |
| `ApiV1MiscMastodonStatus404Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus404Error1.cs` |
| `ApiV1MiscMastodonStatus429Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus429Error1.cs` |
| `ApiV1MiscMastodonStatus500Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus500Error1.cs` |
| `ApiV1MiscMastodonStatus502Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus502Error1.cs` |
| `ApiV1MiscMastodonStatus503Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus503Error1.cs` |
| `ApiV1MiscMastodonStatus504Error1` | `src/BundleSocial/Models/ApiV1MiscMastodonStatus504Error1.cs` |

### MiscPinterestDeletePin

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscPinterestDeletePin(MiscPinterestDeletePinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscPinterestPinResponse1`
- **Error**: `ApiException<MiscPinterestDeletePinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscPinterestPin400Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin400Error1? value)` [400] · `TryGetApiV1MiscPinterestPin401Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin401Error1? value)` [401] · `TryGetApiV1MiscPinterestPin403Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin403Error1? value)` [403] · `TryGetApiV1MiscPinterestPin404Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin404Error1? value)` [404] · `TryGetApiV1MiscPinterestPin429Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin429Error1? value)` [429] · `TryGetApiV1MiscPinterestPin500Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin500Error1? value)` [500] · `TryGetApiV1MiscPinterestPin502Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin502Error1? value)` [502] · `TryGetApiV1MiscPinterestPin503Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin503Error1? value)` [503] · `TryGetApiV1MiscPinterestPin504Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscPinterestDeletePinRequest` | `src/BundleSocial/Requests/Misc/MiscPinterestDeletePinRequest.cs` |
| `ApiV1MiscPinterestPinRequest1` | `src/BundleSocial/Models/ApiV1MiscPinterestPinRequest1.cs` |
| `ApiV1MiscPinterestPinResponse1` | `src/BundleSocial/Models/ApiV1MiscPinterestPinResponse1.cs` |
| `MiscPinterestDeletePinError` | `src/BundleSocial/Errors/MiscPinterestDeletePinError.cs` |
| `ApiV1MiscPinterestPin400Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin400Error1.cs` |
| `ApiV1MiscPinterestPin401Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin401Error1.cs` |
| `ApiV1MiscPinterestPin403Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin403Error1.cs` |
| `ApiV1MiscPinterestPin404Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin404Error1.cs` |
| `ApiV1MiscPinterestPin429Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin429Error1.cs` |
| `ApiV1MiscPinterestPin500Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin500Error1.cs` |
| `ApiV1MiscPinterestPin502Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin502Error1.cs` |
| `ApiV1MiscPinterestPin503Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin503Error1.cs` |
| `ApiV1MiscPinterestPin504Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin504Error1.cs` |

### MiscPinterestEditPin

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscPinterestEditPin(MiscPinterestEditPinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscPinterestPinResponse`
- **Error**: `ApiException<MiscPinterestEditPinError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscPinterestPin400Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin400Error1? value)` [400] · `TryGetApiV1MiscPinterestPin401Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin401Error1? value)` [401] · `TryGetApiV1MiscPinterestPin403Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin403Error1? value)` [403] · `TryGetApiV1MiscPinterestPin404Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin404Error1? value)` [404] · `TryGetApiV1MiscPinterestPin429Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin429Error1? value)` [429] · `TryGetApiV1MiscPinterestPin500Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin500Error1? value)` [500] · `TryGetApiV1MiscPinterestPin502Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin502Error1? value)` [502] · `TryGetApiV1MiscPinterestPin503Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin503Error1? value)` [503] · `TryGetApiV1MiscPinterestPin504Error1([NotNullWhen(true)] out ApiV1MiscPinterestPin504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscPinterestEditPinRequest` | `src/BundleSocial/Requests/Misc/MiscPinterestEditPinRequest.cs` |
| `ApiV1MiscPinterestPinRequest` | `src/BundleSocial/Models/ApiV1MiscPinterestPinRequest.cs` |
| `ApiV1MiscPinterestPinResponse` | `src/BundleSocial/Models/ApiV1MiscPinterestPinResponse.cs` |
| `MiscPinterestEditPinError` | `src/BundleSocial/Errors/MiscPinterestEditPinError.cs` |
| `ApiV1MiscPinterestPin400Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin400Error1.cs` |
| `ApiV1MiscPinterestPin401Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin401Error1.cs` |
| `ApiV1MiscPinterestPin403Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin403Error1.cs` |
| `ApiV1MiscPinterestPin404Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin404Error1.cs` |
| `ApiV1MiscPinterestPin429Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin429Error1.cs` |
| `ApiV1MiscPinterestPin500Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin500Error1.cs` |
| `ApiV1MiscPinterestPin502Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin502Error1.cs` |
| `ApiV1MiscPinterestPin503Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin503Error1.cs` |
| `ApiV1MiscPinterestPin504Error1` | `src/BundleSocial/Models/ApiV1MiscPinterestPin504Error1.cs` |

### MiscRedditDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscRedditDeleteComment(MiscRedditDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscRedditCommentResponse1`
- **Error**: `ApiException<MiscRedditDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscRedditComment400Error1([NotNullWhen(true)] out ApiV1MiscRedditComment400Error1? value)` [400] · `TryGetApiV1MiscRedditComment401Error1([NotNullWhen(true)] out ApiV1MiscRedditComment401Error1? value)` [401] · `TryGetApiV1MiscRedditComment403Error1([NotNullWhen(true)] out ApiV1MiscRedditComment403Error1? value)` [403] · `TryGetApiV1MiscRedditComment404Error1([NotNullWhen(true)] out ApiV1MiscRedditComment404Error1? value)` [404] · `TryGetApiV1MiscRedditComment429Error1([NotNullWhen(true)] out ApiV1MiscRedditComment429Error1? value)` [429] · `TryGetApiV1MiscRedditComment500Error1([NotNullWhen(true)] out ApiV1MiscRedditComment500Error1? value)` [500] · `TryGetApiV1MiscRedditComment502Error1([NotNullWhen(true)] out ApiV1MiscRedditComment502Error1? value)` [502] · `TryGetApiV1MiscRedditComment503Error1([NotNullWhen(true)] out ApiV1MiscRedditComment503Error1? value)` [503] · `TryGetApiV1MiscRedditComment504Error1([NotNullWhen(true)] out ApiV1MiscRedditComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscRedditDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscRedditDeleteCommentRequest.cs` |
| `ApiV1MiscRedditCommentRequest1` | `src/BundleSocial/Models/ApiV1MiscRedditCommentRequest1.cs` |
| `ApiV1MiscRedditCommentResponse1` | `src/BundleSocial/Models/ApiV1MiscRedditCommentResponse1.cs` |
| `MiscRedditDeleteCommentError` | `src/BundleSocial/Errors/MiscRedditDeleteCommentError.cs` |
| `ApiV1MiscRedditComment400Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment400Error1.cs` |
| `ApiV1MiscRedditComment401Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment401Error1.cs` |
| `ApiV1MiscRedditComment403Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment403Error1.cs` |
| `ApiV1MiscRedditComment404Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment404Error1.cs` |
| `ApiV1MiscRedditComment429Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment429Error1.cs` |
| `ApiV1MiscRedditComment500Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment500Error1.cs` |
| `ApiV1MiscRedditComment502Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment502Error1.cs` |
| `ApiV1MiscRedditComment503Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment503Error1.cs` |
| `ApiV1MiscRedditComment504Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment504Error1.cs` |

### MiscRedditDeletePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscRedditDeletePost(MiscRedditDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscRedditPostResponse1`
- **Error**: `ApiException<MiscRedditDeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscRedditPost400Error1([NotNullWhen(true)] out ApiV1MiscRedditPost400Error1? value)` [400] · `TryGetApiV1MiscRedditPost401Error1([NotNullWhen(true)] out ApiV1MiscRedditPost401Error1? value)` [401] · `TryGetApiV1MiscRedditPost403Error1([NotNullWhen(true)] out ApiV1MiscRedditPost403Error1? value)` [403] · `TryGetApiV1MiscRedditPost404Error1([NotNullWhen(true)] out ApiV1MiscRedditPost404Error1? value)` [404] · `TryGetApiV1MiscRedditPost429Error1([NotNullWhen(true)] out ApiV1MiscRedditPost429Error1? value)` [429] · `TryGetApiV1MiscRedditPost500Error1([NotNullWhen(true)] out ApiV1MiscRedditPost500Error1? value)` [500] · `TryGetApiV1MiscRedditPost502Error1([NotNullWhen(true)] out ApiV1MiscRedditPost502Error1? value)` [502] · `TryGetApiV1MiscRedditPost503Error1([NotNullWhen(true)] out ApiV1MiscRedditPost503Error1? value)` [503] · `TryGetApiV1MiscRedditPost504Error1([NotNullWhen(true)] out ApiV1MiscRedditPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscRedditDeletePostRequest` | `src/BundleSocial/Requests/Misc/MiscRedditDeletePostRequest.cs` |
| `ApiV1MiscRedditPostRequest1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequest1.cs` |
| `ApiV1MiscRedditPostResponse1` | `src/BundleSocial/Models/ApiV1MiscRedditPostResponse1.cs` |
| `MiscRedditDeletePostError` | `src/BundleSocial/Errors/MiscRedditDeletePostError.cs` |
| `ApiV1MiscRedditPost400Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost400Error1.cs` |
| `ApiV1MiscRedditPost401Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost401Error1.cs` |
| `ApiV1MiscRedditPost403Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost403Error1.cs` |
| `ApiV1MiscRedditPost404Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost404Error1.cs` |
| `ApiV1MiscRedditPost429Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost429Error1.cs` |
| `ApiV1MiscRedditPost500Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost500Error1.cs` |
| `ApiV1MiscRedditPost502Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost502Error1.cs` |
| `ApiV1MiscRedditPost503Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost503Error1.cs` |
| `ApiV1MiscRedditPost504Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost504Error1.cs` |

### MiscRedditEditComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscRedditEditComment(MiscRedditEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscRedditCommentResponse`
- **Error**: `ApiException<MiscRedditEditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscRedditComment400Error1([NotNullWhen(true)] out ApiV1MiscRedditComment400Error1? value)` [400] · `TryGetApiV1MiscRedditComment401Error1([NotNullWhen(true)] out ApiV1MiscRedditComment401Error1? value)` [401] · `TryGetApiV1MiscRedditComment403Error1([NotNullWhen(true)] out ApiV1MiscRedditComment403Error1? value)` [403] · `TryGetApiV1MiscRedditComment404Error1([NotNullWhen(true)] out ApiV1MiscRedditComment404Error1? value)` [404] · `TryGetApiV1MiscRedditComment429Error1([NotNullWhen(true)] out ApiV1MiscRedditComment429Error1? value)` [429] · `TryGetApiV1MiscRedditComment500Error1([NotNullWhen(true)] out ApiV1MiscRedditComment500Error1? value)` [500] · `TryGetApiV1MiscRedditComment502Error1([NotNullWhen(true)] out ApiV1MiscRedditComment502Error1? value)` [502] · `TryGetApiV1MiscRedditComment503Error1([NotNullWhen(true)] out ApiV1MiscRedditComment503Error1? value)` [503] · `TryGetApiV1MiscRedditComment504Error1([NotNullWhen(true)] out ApiV1MiscRedditComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscRedditEditCommentRequest` | `src/BundleSocial/Requests/Misc/MiscRedditEditCommentRequest.cs` |
| `ApiV1MiscRedditCommentRequest` | `src/BundleSocial/Models/ApiV1MiscRedditCommentRequest.cs` |
| `ApiV1MiscRedditCommentResponse` | `src/BundleSocial/Models/ApiV1MiscRedditCommentResponse.cs` |
| `MiscRedditEditCommentError` | `src/BundleSocial/Errors/MiscRedditEditCommentError.cs` |
| `ApiV1MiscRedditComment400Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment400Error1.cs` |
| `ApiV1MiscRedditComment401Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment401Error1.cs` |
| `ApiV1MiscRedditComment403Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment403Error1.cs` |
| `ApiV1MiscRedditComment404Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment404Error1.cs` |
| `ApiV1MiscRedditComment429Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment429Error1.cs` |
| `ApiV1MiscRedditComment500Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment500Error1.cs` |
| `ApiV1MiscRedditComment502Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment502Error1.cs` |
| `ApiV1MiscRedditComment503Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment503Error1.cs` |
| `ApiV1MiscRedditComment504Error1` | `src/BundleSocial/Models/ApiV1MiscRedditComment504Error1.cs` |

### MiscRedditEditPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscRedditEditPost(MiscRedditEditPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscRedditPostResponse`
- **Error**: `ApiException<MiscRedditEditPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscRedditPost400Error1([NotNullWhen(true)] out ApiV1MiscRedditPost400Error1? value)` [400] · `TryGetApiV1MiscRedditPost401Error1([NotNullWhen(true)] out ApiV1MiscRedditPost401Error1? value)` [401] · `TryGetApiV1MiscRedditPost403Error1([NotNullWhen(true)] out ApiV1MiscRedditPost403Error1? value)` [403] · `TryGetApiV1MiscRedditPost404Error1([NotNullWhen(true)] out ApiV1MiscRedditPost404Error1? value)` [404] · `TryGetApiV1MiscRedditPost429Error1([NotNullWhen(true)] out ApiV1MiscRedditPost429Error1? value)` [429] · `TryGetApiV1MiscRedditPost500Error1([NotNullWhen(true)] out ApiV1MiscRedditPost500Error1? value)` [500] · `TryGetApiV1MiscRedditPost502Error1([NotNullWhen(true)] out ApiV1MiscRedditPost502Error1? value)` [502] · `TryGetApiV1MiscRedditPost503Error1([NotNullWhen(true)] out ApiV1MiscRedditPost503Error1? value)` [503] · `TryGetApiV1MiscRedditPost504Error1([NotNullWhen(true)] out ApiV1MiscRedditPost504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscRedditEditPostRequest` | `src/BundleSocial/Requests/Misc/MiscRedditEditPostRequest.cs` |
| `ApiV1MiscRedditPostRequest` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequest.cs` |
| `ApiV1MiscRedditPostResponse` | `src/BundleSocial/Models/ApiV1MiscRedditPostResponse.cs` |
| `MiscRedditEditPostError` | `src/BundleSocial/Errors/MiscRedditEditPostError.cs` |
| `ApiV1MiscRedditPost400Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost400Error1.cs` |
| `ApiV1MiscRedditPost401Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost401Error1.cs` |
| `ApiV1MiscRedditPost403Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost403Error1.cs` |
| `ApiV1MiscRedditPost404Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost404Error1.cs` |
| `ApiV1MiscRedditPost429Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost429Error1.cs` |
| `ApiV1MiscRedditPost500Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost500Error1.cs` |
| `ApiV1MiscRedditPost502Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost502Error1.cs` |
| `ApiV1MiscRedditPost503Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost503Error1.cs` |
| `ApiV1MiscRedditPost504Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPost504Error1.cs` |

### MiscRedditGetPostRequirements

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscRedditGetPostRequirements(MiscRedditGetPostRequirementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Subreddit`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `subreddit` ← `Subreddit`
- **Returns**: `ApiV1MiscRedditPostRequirementsResponse`
- **Error**: `ApiException<MiscRedditGetPostRequirementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscRedditPostRequirements400Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements400Error1? value)` [400] · `TryGetApiV1MiscRedditPostRequirements401Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements401Error1? value)` [401] · `TryGetApiV1MiscRedditPostRequirements403Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements403Error1? value)` [403] · `TryGetApiV1MiscRedditPostRequirements404Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements404Error1? value)` [404] · `TryGetApiV1MiscRedditPostRequirements429Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements429Error1? value)` [429] · `TryGetApiV1MiscRedditPostRequirements500Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements500Error1? value)` [500] · `TryGetApiV1MiscRedditPostRequirements502Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements502Error1? value)` [502] · `TryGetApiV1MiscRedditPostRequirements503Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements503Error1? value)` [503] · `TryGetApiV1MiscRedditPostRequirements504Error1([NotNullWhen(true)] out ApiV1MiscRedditPostRequirements504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscRedditGetPostRequirementsRequest` | `src/BundleSocial/Requests/Misc/MiscRedditGetPostRequirementsRequest.cs` |
| `ApiV1MiscRedditPostRequirementsResponse` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirementsResponse.cs` |
| `MiscRedditGetPostRequirementsError` | `src/BundleSocial/Errors/MiscRedditGetPostRequirementsError.cs` |
| `ApiV1MiscRedditPostRequirements400Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements400Error1.cs` |
| `ApiV1MiscRedditPostRequirements401Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements401Error1.cs` |
| `ApiV1MiscRedditPostRequirements403Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements403Error1.cs` |
| `ApiV1MiscRedditPostRequirements404Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements404Error1.cs` |
| `ApiV1MiscRedditPostRequirements429Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements429Error1.cs` |
| `ApiV1MiscRedditPostRequirements500Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements500Error1.cs` |
| `ApiV1MiscRedditPostRequirements502Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements502Error1.cs` |
| `ApiV1MiscRedditPostRequirements503Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements503Error1.cs` |
| `ApiV1MiscRedditPostRequirements504Error1` | `src/BundleSocial/Models/ApiV1MiscRedditPostRequirements504Error1.cs` |

### MiscRedditGetSubredditFlairs

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscRedditGetSubredditFlairs(MiscRedditGetSubredditFlairsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Subreddit`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `subreddit` ← `Subreddit`
- **Returns**: `IReadOnlyList<ApiV1MiscRedditSubredditFlairsResponse>`
- **Error**: `ApiException<MiscRedditGetSubredditFlairsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscRedditSubredditFlairs400Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs400Error1? value)` [400] · `TryGetApiV1MiscRedditSubredditFlairs401Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs401Error1? value)` [401] · `TryGetApiV1MiscRedditSubredditFlairs403Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs403Error1? value)` [403] · `TryGetApiV1MiscRedditSubredditFlairs404Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs404Error1? value)` [404] · `TryGetApiV1MiscRedditSubredditFlairs429Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs429Error1? value)` [429] · `TryGetApiV1MiscRedditSubredditFlairs500Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs500Error1? value)` [500] · `TryGetApiV1MiscRedditSubredditFlairs502Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs502Error1? value)` [502] · `TryGetApiV1MiscRedditSubredditFlairs503Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs503Error1? value)` [503] · `TryGetApiV1MiscRedditSubredditFlairs504Error1([NotNullWhen(true)] out ApiV1MiscRedditSubredditFlairs504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscRedditGetSubredditFlairsRequest` | `src/BundleSocial/Requests/Misc/MiscRedditGetSubredditFlairsRequest.cs` |
| `ApiV1MiscRedditSubredditFlairsResponse` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairsResponse.cs` |
| `MiscRedditGetSubredditFlairsError` | `src/BundleSocial/Errors/MiscRedditGetSubredditFlairsError.cs` |
| `ApiV1MiscRedditSubredditFlairs400Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs400Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs401Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs401Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs403Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs403Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs404Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs404Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs429Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs429Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs500Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs500Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs502Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs502Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs503Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs503Error1.cs` |
| `ApiV1MiscRedditSubredditFlairs504Error1` | `src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairs504Error1.cs` |

### MiscSlackDeleteMessage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscSlackDeleteMessage(MiscSlackDeleteMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscSlackMessageResponse1`
- **Error**: `ApiException<MiscSlackDeleteMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscSlackMessage400Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage400Error1? value)` [400] · `TryGetApiV1MiscSlackMessage401Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage401Error1? value)` [401] · `TryGetApiV1MiscSlackMessage403Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage403Error1? value)` [403] · `TryGetApiV1MiscSlackMessage404Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage404Error1? value)` [404] · `TryGetApiV1MiscSlackMessage429Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage429Error1? value)` [429] · `TryGetApiV1MiscSlackMessage500Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage500Error1? value)` [500] · `TryGetApiV1MiscSlackMessage502Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage502Error1? value)` [502] · `TryGetApiV1MiscSlackMessage503Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage503Error1? value)` [503] · `TryGetApiV1MiscSlackMessage504Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscSlackDeleteMessageRequest` | `src/BundleSocial/Requests/Misc/MiscSlackDeleteMessageRequest.cs` |
| `ApiV1MiscSlackMessageRequest1` | `src/BundleSocial/Models/ApiV1MiscSlackMessageRequest1.cs` |
| `ApiV1MiscSlackMessageResponse1` | `src/BundleSocial/Models/ApiV1MiscSlackMessageResponse1.cs` |
| `MiscSlackDeleteMessageError` | `src/BundleSocial/Errors/MiscSlackDeleteMessageError.cs` |
| `ApiV1MiscSlackMessage400Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage400Error1.cs` |
| `ApiV1MiscSlackMessage401Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage401Error1.cs` |
| `ApiV1MiscSlackMessage403Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage403Error1.cs` |
| `ApiV1MiscSlackMessage404Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage404Error1.cs` |
| `ApiV1MiscSlackMessage429Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage429Error1.cs` |
| `ApiV1MiscSlackMessage500Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage500Error1.cs` |
| `ApiV1MiscSlackMessage502Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage502Error1.cs` |
| `ApiV1MiscSlackMessage503Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage503Error1.cs` |
| `ApiV1MiscSlackMessage504Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage504Error1.cs` |

### MiscSlackEditMessage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscSlackEditMessage(MiscSlackEditMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscSlackMessageResponse`
- **Error**: `ApiException<MiscSlackEditMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscSlackMessage400Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage400Error1? value)` [400] · `TryGetApiV1MiscSlackMessage401Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage401Error1? value)` [401] · `TryGetApiV1MiscSlackMessage403Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage403Error1? value)` [403] · `TryGetApiV1MiscSlackMessage404Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage404Error1? value)` [404] · `TryGetApiV1MiscSlackMessage429Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage429Error1? value)` [429] · `TryGetApiV1MiscSlackMessage500Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage500Error1? value)` [500] · `TryGetApiV1MiscSlackMessage502Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage502Error1? value)` [502] · `TryGetApiV1MiscSlackMessage503Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage503Error1? value)` [503] · `TryGetApiV1MiscSlackMessage504Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscSlackEditMessageRequest` | `src/BundleSocial/Requests/Misc/MiscSlackEditMessageRequest.cs` |
| `ApiV1MiscSlackMessageRequest` | `src/BundleSocial/Models/ApiV1MiscSlackMessageRequest.cs` |
| `ApiV1MiscSlackMessageResponse` | `src/BundleSocial/Models/ApiV1MiscSlackMessageResponse.cs` |
| `MiscSlackEditMessageError` | `src/BundleSocial/Errors/MiscSlackEditMessageError.cs` |
| `ApiV1MiscSlackMessage400Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage400Error1.cs` |
| `ApiV1MiscSlackMessage401Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage401Error1.cs` |
| `ApiV1MiscSlackMessage403Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage403Error1.cs` |
| `ApiV1MiscSlackMessage404Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage404Error1.cs` |
| `ApiV1MiscSlackMessage429Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage429Error1.cs` |
| `ApiV1MiscSlackMessage500Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage500Error1.cs` |
| `ApiV1MiscSlackMessage502Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage502Error1.cs` |
| `ApiV1MiscSlackMessage503Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage503Error1.cs` |
| `ApiV1MiscSlackMessage504Error1` | `src/BundleSocial/Models/ApiV1MiscSlackMessage504Error1.cs` |

### MiscTiktokDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTiktokDeleteComment(MiscTiktokDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscTiktokCommentResponse`
- **Error**: `ApiException<MiscTiktokDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTiktokComment400Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment400Error1? value)` [400] · `TryGetApiV1MiscTiktokComment401Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment401Error1? value)` [401] · `TryGetApiV1MiscTiktokComment403Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment403Error1? value)` [403] · `TryGetApiV1MiscTiktokComment404Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment404Error1? value)` [404] · `TryGetApiV1MiscTiktokComment429Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment429Error1? value)` [429] · `TryGetApiV1MiscTiktokComment500Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment500Error1? value)` [500] · `TryGetApiV1MiscTiktokComment502Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment502Error1? value)` [502] · `TryGetApiV1MiscTiktokComment503Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment503Error1? value)` [503] · `TryGetApiV1MiscTiktokComment504Error1([NotNullWhen(true)] out ApiV1MiscTiktokComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTiktokDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscTiktokDeleteCommentRequest.cs` |
| `ApiV1MiscTiktokCommentRequest` | `src/BundleSocial/Models/ApiV1MiscTiktokCommentRequest.cs` |
| `ApiV1MiscTiktokCommentResponse` | `src/BundleSocial/Models/ApiV1MiscTiktokCommentResponse.cs` |
| `MiscTiktokDeleteCommentError` | `src/BundleSocial/Errors/MiscTiktokDeleteCommentError.cs` |
| `ApiV1MiscTiktokComment400Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment400Error1.cs` |
| `ApiV1MiscTiktokComment401Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment401Error1.cs` |
| `ApiV1MiscTiktokComment403Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment403Error1.cs` |
| `ApiV1MiscTiktokComment404Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment404Error1.cs` |
| `ApiV1MiscTiktokComment429Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment429Error1.cs` |
| `ApiV1MiscTiktokComment500Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment500Error1.cs` |
| `ApiV1MiscTiktokComment502Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment502Error1.cs` |
| `ApiV1MiscTiktokComment503Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment503Error1.cs` |
| `ApiV1MiscTiktokComment504Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokComment504Error1.cs` |

### MiscTiktokGetCommercialMusicTrendingList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTiktokGetCommercialMusicTrendingList(MiscTiktokGetCommercialMusicTrendingListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `genre` ← `Genre`, `dateRange` ← `DateRange`
- **Returns**: `IReadOnlyList<ApiV1MiscTiktokCmlTrendingListResponse>`
- **Error**: `ApiException<MiscTiktokGetCommercialMusicTrendingListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTiktokCmlTrendingList400Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList400Error1? value)` [400] · `TryGetApiV1MiscTiktokCmlTrendingList401Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList401Error1? value)` [401] · `TryGetApiV1MiscTiktokCmlTrendingList403Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList403Error1? value)` [403] · `TryGetApiV1MiscTiktokCmlTrendingList404Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList404Error1? value)` [404] · `TryGetApiV1MiscTiktokCmlTrendingList429Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList429Error1? value)` [429] · `TryGetApiV1MiscTiktokCmlTrendingList500Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList500Error1? value)` [500] · `TryGetApiV1MiscTiktokCmlTrendingList502Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList502Error1? value)` [502] · `TryGetApiV1MiscTiktokCmlTrendingList503Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList503Error1? value)` [503] · `TryGetApiV1MiscTiktokCmlTrendingList504Error1([NotNullWhen(true)] out ApiV1MiscTiktokCmlTrendingList504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTiktokGetCommercialMusicTrendingListRequest` | `src/BundleSocial/Requests/Misc/MiscTiktokGetCommercialMusicTrendingListRequest.cs` |
| `Genre` | `src/BundleSocial/Models/Enums/Genre.cs` |
| `DateRange` | `src/BundleSocial/Models/Enums/DateRange.cs` |
| `ApiV1MiscTiktokCmlTrendingListResponse` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingListResponse.cs` |
| `MiscTiktokGetCommercialMusicTrendingListError` | `src/BundleSocial/Errors/MiscTiktokGetCommercialMusicTrendingListError.cs` |
| `ApiV1MiscTiktokCmlTrendingList400Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList400Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList401Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList401Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList403Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList403Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList404Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList404Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList429Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList429Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList500Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList500Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList502Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList502Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList503Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList503Error1.cs` |
| `ApiV1MiscTiktokCmlTrendingList504Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingList504Error1.cs` |

### MiscTiktokGetPostSettings

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTiktokGetPostSettings(MiscTiktokGetPostSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscTiktokPostSettingsResponse`
- **Error**: `ApiException<MiscTiktokGetPostSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTiktokPostSettings400Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings400Error1? value)` [400] · `TryGetApiV1MiscTiktokPostSettings401Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings401Error1? value)` [401] · `TryGetApiV1MiscTiktokPostSettings403Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings403Error1? value)` [403] · `TryGetApiV1MiscTiktokPostSettings404Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings404Error1? value)` [404] · `TryGetApiV1MiscTiktokPostSettings429Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings429Error1? value)` [429] · `TryGetApiV1MiscTiktokPostSettings500Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings500Error1? value)` [500] · `TryGetApiV1MiscTiktokPostSettings502Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings502Error1? value)` [502] · `TryGetApiV1MiscTiktokPostSettings503Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings503Error1? value)` [503] · `TryGetApiV1MiscTiktokPostSettings504Error1([NotNullWhen(true)] out ApiV1MiscTiktokPostSettings504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTiktokGetPostSettingsRequest` | `src/BundleSocial/Requests/Misc/MiscTiktokGetPostSettingsRequest.cs` |
| `ApiV1MiscTiktokPostSettingsResponse` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettingsResponse.cs` |
| `MiscTiktokGetPostSettingsError` | `src/BundleSocial/Errors/MiscTiktokGetPostSettingsError.cs` |
| `ApiV1MiscTiktokPostSettings400Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings400Error1.cs` |
| `ApiV1MiscTiktokPostSettings401Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings401Error1.cs` |
| `ApiV1MiscTiktokPostSettings403Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings403Error1.cs` |
| `ApiV1MiscTiktokPostSettings404Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings404Error1.cs` |
| `ApiV1MiscTiktokPostSettings429Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings429Error1.cs` |
| `ApiV1MiscTiktokPostSettings500Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings500Error1.cs` |
| `ApiV1MiscTiktokPostSettings502Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings502Error1.cs` |
| `ApiV1MiscTiktokPostSettings503Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings503Error1.cs` |
| `ApiV1MiscTiktokPostSettings504Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokPostSettings504Error1.cs` |

### MiscTiktokSearchLocations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTiktokSearchLocations(MiscTiktokSearchLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `Q`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `q` ← `Q`
- **Returns**: `ApiV1MiscTiktokLocationsResponse`
- **Error**: `ApiException<MiscTiktokSearchLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTiktokLocations400Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations400Error1? value)` [400] · `TryGetApiV1MiscTiktokLocations401Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations401Error1? value)` [401] · `TryGetApiV1MiscTiktokLocations403Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations403Error1? value)` [403] · `TryGetApiV1MiscTiktokLocations404Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations404Error1? value)` [404] · `TryGetApiV1MiscTiktokLocations429Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations429Error1? value)` [429] · `TryGetApiV1MiscTiktokLocations500Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations500Error1? value)` [500] · `TryGetApiV1MiscTiktokLocations502Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations502Error1? value)` [502] · `TryGetApiV1MiscTiktokLocations503Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations503Error1? value)` [503] · `TryGetApiV1MiscTiktokLocations504Error1([NotNullWhen(true)] out ApiV1MiscTiktokLocations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTiktokSearchLocationsRequest` | `src/BundleSocial/Requests/Misc/MiscTiktokSearchLocationsRequest.cs` |
| `ApiV1MiscTiktokLocationsResponse` | `src/BundleSocial/Models/ApiV1MiscTiktokLocationsResponse.cs` |
| `MiscTiktokSearchLocationsError` | `src/BundleSocial/Errors/MiscTiktokSearchLocationsError.cs` |
| `ApiV1MiscTiktokLocations400Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations400Error1.cs` |
| `ApiV1MiscTiktokLocations401Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations401Error1.cs` |
| `ApiV1MiscTiktokLocations403Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations403Error1.cs` |
| `ApiV1MiscTiktokLocations404Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations404Error1.cs` |
| `ApiV1MiscTiktokLocations429Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations429Error1.cs` |
| `ApiV1MiscTiktokLocations500Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations500Error1.cs` |
| `ApiV1MiscTiktokLocations502Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations502Error1.cs` |
| `ApiV1MiscTiktokLocations503Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations503Error1.cs` |
| `ApiV1MiscTiktokLocations504Error1` | `src/BundleSocial/Models/ApiV1MiscTiktokLocations504Error1.cs` |

### MiscTwitterDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTwitterDeleteComment(MiscTwitterDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscTwitterCommentResponse`
- **Error**: `ApiException<MiscTwitterDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTwitterComment400Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment400Error1? value)` [400] · `TryGetApiV1MiscTwitterComment401Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment401Error1? value)` [401] · `TryGetApiV1MiscTwitterComment403Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment403Error1? value)` [403] · `TryGetApiV1MiscTwitterComment404Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment404Error1? value)` [404] · `TryGetApiV1MiscTwitterComment429Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment429Error1? value)` [429] · `TryGetApiV1MiscTwitterComment500Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment500Error1? value)` [500] · `TryGetApiV1MiscTwitterComment502Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment502Error1? value)` [502] · `TryGetApiV1MiscTwitterComment503Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment503Error1? value)` [503] · `TryGetApiV1MiscTwitterComment504Error1([NotNullWhen(true)] out ApiV1MiscTwitterComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTwitterDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscTwitterDeleteCommentRequest.cs` |
| `ApiV1MiscTwitterCommentRequest` | `src/BundleSocial/Models/ApiV1MiscTwitterCommentRequest.cs` |
| `ApiV1MiscTwitterCommentResponse` | `src/BundleSocial/Models/ApiV1MiscTwitterCommentResponse.cs` |
| `MiscTwitterDeleteCommentError` | `src/BundleSocial/Errors/MiscTwitterDeleteCommentError.cs` |
| `ApiV1MiscTwitterComment400Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment400Error1.cs` |
| `ApiV1MiscTwitterComment401Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment401Error1.cs` |
| `ApiV1MiscTwitterComment403Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment403Error1.cs` |
| `ApiV1MiscTwitterComment404Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment404Error1.cs` |
| `ApiV1MiscTwitterComment429Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment429Error1.cs` |
| `ApiV1MiscTwitterComment500Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment500Error1.cs` |
| `ApiV1MiscTwitterComment502Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment502Error1.cs` |
| `ApiV1MiscTwitterComment503Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment503Error1.cs` |
| `ApiV1MiscTwitterComment504Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterComment504Error1.cs` |

### MiscTwitterDeleteTweet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTwitterDeleteTweet(MiscTwitterDeleteTweetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscTwitterTweetResponse`
- **Error**: `ApiException<MiscTwitterDeleteTweetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTwitterTweet400Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet400Error1? value)` [400] · `TryGetApiV1MiscTwitterTweet401Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet401Error1? value)` [401] · `TryGetApiV1MiscTwitterTweet403Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet403Error1? value)` [403] · `TryGetApiV1MiscTwitterTweet404Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet404Error1? value)` [404] · `TryGetApiV1MiscTwitterTweet429Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet429Error1? value)` [429] · `TryGetApiV1MiscTwitterTweet500Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet500Error1? value)` [500] · `TryGetApiV1MiscTwitterTweet502Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet502Error1? value)` [502] · `TryGetApiV1MiscTwitterTweet503Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet503Error1? value)` [503] · `TryGetApiV1MiscTwitterTweet504Error1([NotNullWhen(true)] out ApiV1MiscTwitterTweet504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTwitterDeleteTweetRequest` | `src/BundleSocial/Requests/Misc/MiscTwitterDeleteTweetRequest.cs` |
| `ApiV1MiscTwitterTweetRequest` | `src/BundleSocial/Models/ApiV1MiscTwitterTweetRequest.cs` |
| `ApiV1MiscTwitterTweetResponse` | `src/BundleSocial/Models/ApiV1MiscTwitterTweetResponse.cs` |
| `MiscTwitterDeleteTweetError` | `src/BundleSocial/Errors/MiscTwitterDeleteTweetError.cs` |
| `ApiV1MiscTwitterTweet400Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet400Error1.cs` |
| `ApiV1MiscTwitterTweet401Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet401Error1.cs` |
| `ApiV1MiscTwitterTweet403Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet403Error1.cs` |
| `ApiV1MiscTwitterTweet404Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet404Error1.cs` |
| `ApiV1MiscTwitterTweet429Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet429Error1.cs` |
| `ApiV1MiscTwitterTweet500Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet500Error1.cs` |
| `ApiV1MiscTwitterTweet502Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet502Error1.cs` |
| `ApiV1MiscTwitterTweet503Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet503Error1.cs` |
| `ApiV1MiscTwitterTweet504Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterTweet504Error1.cs` |

### MiscTwitterRetweet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTwitterRetweet(MiscTwitterRetweetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscTwitterRetweetResponse`
- **Error**: `ApiException<MiscTwitterRetweetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTwitterRetweet400Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet400Error1? value)` [400] · `TryGetApiV1MiscTwitterRetweet401Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet401Error1? value)` [401] · `TryGetApiV1MiscTwitterRetweet403Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet403Error1? value)` [403] · `TryGetApiV1MiscTwitterRetweet404Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet404Error1? value)` [404] · `TryGetApiV1MiscTwitterRetweet429Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet429Error1? value)` [429] · `TryGetApiV1MiscTwitterRetweet500Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet500Error1? value)` [500] · `TryGetApiV1MiscTwitterRetweet502Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet502Error1? value)` [502] · `TryGetApiV1MiscTwitterRetweet503Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet503Error1? value)` [503] · `TryGetApiV1MiscTwitterRetweet504Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTwitterRetweetRequest` | `src/BundleSocial/Requests/Misc/MiscTwitterRetweetRequest.cs` |
| `ApiV1MiscTwitterRetweetRequest` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweetRequest.cs` |
| `ApiV1MiscTwitterRetweetResponse` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweetResponse.cs` |
| `MiscTwitterRetweetError` | `src/BundleSocial/Errors/MiscTwitterRetweetError.cs` |
| `ApiV1MiscTwitterRetweet400Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet400Error1.cs` |
| `ApiV1MiscTwitterRetweet401Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet401Error1.cs` |
| `ApiV1MiscTwitterRetweet403Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet403Error1.cs` |
| `ApiV1MiscTwitterRetweet404Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet404Error1.cs` |
| `ApiV1MiscTwitterRetweet429Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet429Error1.cs` |
| `ApiV1MiscTwitterRetweet500Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet500Error1.cs` |
| `ApiV1MiscTwitterRetweet502Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet502Error1.cs` |
| `ApiV1MiscTwitterRetweet503Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet503Error1.cs` |
| `ApiV1MiscTwitterRetweet504Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet504Error1.cs` |

### MiscTwitterUnretweet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscTwitterUnretweet(MiscTwitterUnretweetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscTwitterRetweetResponse`
- **Error**: `ApiException<MiscTwitterUnretweetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscTwitterRetweet400Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet400Error1? value)` [400] · `TryGetApiV1MiscTwitterRetweet401Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet401Error1? value)` [401] · `TryGetApiV1MiscTwitterRetweet403Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet403Error1? value)` [403] · `TryGetApiV1MiscTwitterRetweet404Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet404Error1? value)` [404] · `TryGetApiV1MiscTwitterRetweet429Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet429Error1? value)` [429] · `TryGetApiV1MiscTwitterRetweet500Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet500Error1? value)` [500] · `TryGetApiV1MiscTwitterRetweet502Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet502Error1? value)` [502] · `TryGetApiV1MiscTwitterRetweet503Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet503Error1? value)` [503] · `TryGetApiV1MiscTwitterRetweet504Error1([NotNullWhen(true)] out ApiV1MiscTwitterRetweet504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscTwitterUnretweetRequest` | `src/BundleSocial/Requests/Misc/MiscTwitterUnretweetRequest.cs` |
| `ApiV1MiscTwitterRetweetRequest` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweetRequest.cs` |
| `ApiV1MiscTwitterRetweetResponse` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweetResponse.cs` |
| `MiscTwitterUnretweetError` | `src/BundleSocial/Errors/MiscTwitterUnretweetError.cs` |
| `ApiV1MiscTwitterRetweet400Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet400Error1.cs` |
| `ApiV1MiscTwitterRetweet401Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet401Error1.cs` |
| `ApiV1MiscTwitterRetweet403Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet403Error1.cs` |
| `ApiV1MiscTwitterRetweet404Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet404Error1.cs` |
| `ApiV1MiscTwitterRetweet429Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet429Error1.cs` |
| `ApiV1MiscTwitterRetweet500Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet500Error1.cs` |
| `ApiV1MiscTwitterRetweet502Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet502Error1.cs` |
| `ApiV1MiscTwitterRetweet503Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet503Error1.cs` |
| `ApiV1MiscTwitterRetweet504Error1` | `src/BundleSocial/Models/ApiV1MiscTwitterRetweet504Error1.cs` |

### MiscYoutubeAddVideoToPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeAddVideoToPlaylist(MiscYoutubeAddVideoToPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubePlaylistItemsResponse`
- **Error**: `ApiException<MiscYoutubeAddVideoToPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylistItems400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylistItems401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylistItems403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylistItems404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylistItems429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylistItems500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylistItems502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylistItems503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylistItems504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeAddVideoToPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeAddVideoToPlaylistRequest.cs` |
| `ApiV1MiscYoutubePlaylistItemsRequest` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItemsRequest.cs` |
| `ApiV1MiscYoutubePlaylistItemsResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItemsResponse.cs` |
| `MiscYoutubeAddVideoToPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeAddVideoToPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems400Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems401Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems403Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems404Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems429Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems500Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems502Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems503Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems504Error1.cs` |

### MiscYoutubeCreateNewChannelPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeCreateNewChannelPlaylist(MiscYoutubeCreateNewChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubePlaylistResponse1`
- **Error**: `ApiException<MiscYoutubeCreateNewChannelPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylist400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylist401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylist403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylist404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylist429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylist500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylist502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylist503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylist504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeCreateNewChannelPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeCreateNewChannelPlaylistRequest.cs` |
| `ApiV1MiscYoutubePlaylistRequest` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistRequest.cs` |
| `ApiV1MiscYoutubePlaylistResponse1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistResponse1.cs` |
| `MiscYoutubeCreateNewChannelPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeCreateNewChannelPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylist400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist400Error1.cs` |
| `ApiV1MiscYoutubePlaylist401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist401Error1.cs` |
| `ApiV1MiscYoutubePlaylist403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist403Error1.cs` |
| `ApiV1MiscYoutubePlaylist404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist404Error1.cs` |
| `ApiV1MiscYoutubePlaylist429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist429Error1.cs` |
| `ApiV1MiscYoutubePlaylist500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist500Error1.cs` |
| `ApiV1MiscYoutubePlaylist502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist502Error1.cs` |
| `ApiV1MiscYoutubePlaylist503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist503Error1.cs` |
| `ApiV1MiscYoutubePlaylist504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist504Error1.cs` |

### MiscYoutubeDeleteChannelPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeDeleteChannelPlaylist(MiscYoutubeDeleteChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`, `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `bool`
- **Error**: `ApiException<MiscYoutubeDeleteChannelPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylist400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylist401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylist403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylist404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylist429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylist500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylist502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylist503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylist504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeDeleteChannelPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeDeleteChannelPlaylistRequest.cs` |
| `MiscYoutubeDeleteChannelPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeDeleteChannelPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylist400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist400Error1.cs` |
| `ApiV1MiscYoutubePlaylist401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist401Error1.cs` |
| `ApiV1MiscYoutubePlaylist403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist403Error1.cs` |
| `ApiV1MiscYoutubePlaylist404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist404Error1.cs` |
| `ApiV1MiscYoutubePlaylist429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist429Error1.cs` |
| `ApiV1MiscYoutubePlaylist500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist500Error1.cs` |
| `ApiV1MiscYoutubePlaylist502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist502Error1.cs` |
| `ApiV1MiscYoutubePlaylist503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist503Error1.cs` |
| `ApiV1MiscYoutubePlaylist504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist504Error1.cs` |

### MiscYoutubeDeleteComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeDeleteComment(MiscYoutubeDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubeCommentResponse1`
- **Error**: `ApiException<MiscYoutubeDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeComment400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment400Error1? value)` [400] · `TryGetApiV1MiscYoutubeComment401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment401Error1? value)` [401] · `TryGetApiV1MiscYoutubeComment403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment403Error1? value)` [403] · `TryGetApiV1MiscYoutubeComment404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment404Error1? value)` [404] · `TryGetApiV1MiscYoutubeComment429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment429Error1? value)` [429] · `TryGetApiV1MiscYoutubeComment500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment500Error1? value)` [500] · `TryGetApiV1MiscYoutubeComment502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment502Error1? value)` [502] · `TryGetApiV1MiscYoutubeComment503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment503Error1? value)` [503] · `TryGetApiV1MiscYoutubeComment504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeDeleteCommentRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeDeleteCommentRequest.cs` |
| `ApiV1MiscYoutubeCommentRequest1` | `src/BundleSocial/Models/ApiV1MiscYoutubeCommentRequest1.cs` |
| `ApiV1MiscYoutubeCommentResponse1` | `src/BundleSocial/Models/ApiV1MiscYoutubeCommentResponse1.cs` |
| `MiscYoutubeDeleteCommentError` | `src/BundleSocial/Errors/MiscYoutubeDeleteCommentError.cs` |
| `ApiV1MiscYoutubeComment400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment400Error1.cs` |
| `ApiV1MiscYoutubeComment401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment401Error1.cs` |
| `ApiV1MiscYoutubeComment403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment403Error1.cs` |
| `ApiV1MiscYoutubeComment404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment404Error1.cs` |
| `ApiV1MiscYoutubeComment429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment429Error1.cs` |
| `ApiV1MiscYoutubeComment500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment500Error1.cs` |
| `ApiV1MiscYoutubeComment502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment502Error1.cs` |
| `ApiV1MiscYoutubeComment503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment503Error1.cs` |
| `ApiV1MiscYoutubeComment504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment504Error1.cs` |

### MiscYoutubeDeleteVideo

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeDeleteVideo(MiscYoutubeDeleteVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubeVideoResponse1`
- **Error**: `ApiException<MiscYoutubeDeleteVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeVideo400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo400Error1? value)` [400] · `TryGetApiV1MiscYoutubeVideo401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo401Error1? value)` [401] · `TryGetApiV1MiscYoutubeVideo403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo403Error1? value)` [403] · `TryGetApiV1MiscYoutubeVideo404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo404Error1? value)` [404] · `TryGetApiV1MiscYoutubeVideo429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo429Error1? value)` [429] · `TryGetApiV1MiscYoutubeVideo500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo500Error1? value)` [500] · `TryGetApiV1MiscYoutubeVideo502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo502Error1? value)` [502] · `TryGetApiV1MiscYoutubeVideo503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo503Error1? value)` [503] · `TryGetApiV1MiscYoutubeVideo504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeDeleteVideoRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeDeleteVideoRequest.cs` |
| `ApiV1MiscYoutubeVideoRequest1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoRequest1.cs` |
| `ApiV1MiscYoutubeVideoResponse1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoResponse1.cs` |
| `MiscYoutubeDeleteVideoError` | `src/BundleSocial/Errors/MiscYoutubeDeleteVideoError.cs` |
| `ApiV1MiscYoutubeVideo400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo400Error1.cs` |
| `ApiV1MiscYoutubeVideo401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo401Error1.cs` |
| `ApiV1MiscYoutubeVideo403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo403Error1.cs` |
| `ApiV1MiscYoutubeVideo404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo404Error1.cs` |
| `ApiV1MiscYoutubeVideo429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo429Error1.cs` |
| `ApiV1MiscYoutubeVideo500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo500Error1.cs` |
| `ApiV1MiscYoutubeVideo502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo502Error1.cs` |
| `ApiV1MiscYoutubeVideo503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo503Error1.cs` |
| `ApiV1MiscYoutubeVideo504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo504Error1.cs` |

### MiscYoutubeDeleteVideoFromPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeDeleteVideoFromPlaylist(MiscYoutubeDeleteVideoFromPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistItemId`, `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `bool`
- **Error**: `ApiException<MiscYoutubeDeleteVideoFromPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylistItems400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylistItems401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylistItems403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylistItems404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylistItems429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylistItems500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylistItems502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylistItems503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylistItems504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeDeleteVideoFromPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeDeleteVideoFromPlaylistRequest.cs` |
| `MiscYoutubeDeleteVideoFromPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeDeleteVideoFromPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems400Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems401Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems403Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems404Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems429Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems500Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems502Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems503Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems504Error1.cs` |

### MiscYoutubeEditComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeEditComment(MiscYoutubeEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubeCommentResponse`
- **Error**: `ApiException<MiscYoutubeEditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeComment400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment400Error1? value)` [400] · `TryGetApiV1MiscYoutubeComment401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment401Error1? value)` [401] · `TryGetApiV1MiscYoutubeComment403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment403Error1? value)` [403] · `TryGetApiV1MiscYoutubeComment404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment404Error1? value)` [404] · `TryGetApiV1MiscYoutubeComment429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment429Error1? value)` [429] · `TryGetApiV1MiscYoutubeComment500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment500Error1? value)` [500] · `TryGetApiV1MiscYoutubeComment502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment502Error1? value)` [502] · `TryGetApiV1MiscYoutubeComment503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment503Error1? value)` [503] · `TryGetApiV1MiscYoutubeComment504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeComment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeEditCommentRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeEditCommentRequest.cs` |
| `ApiV1MiscYoutubeCommentRequest` | `src/BundleSocial/Models/ApiV1MiscYoutubeCommentRequest.cs` |
| `ApiV1MiscYoutubeCommentResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubeCommentResponse.cs` |
| `MiscYoutubeEditCommentError` | `src/BundleSocial/Errors/MiscYoutubeEditCommentError.cs` |
| `ApiV1MiscYoutubeComment400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment400Error1.cs` |
| `ApiV1MiscYoutubeComment401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment401Error1.cs` |
| `ApiV1MiscYoutubeComment403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment403Error1.cs` |
| `ApiV1MiscYoutubeComment404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment404Error1.cs` |
| `ApiV1MiscYoutubeComment429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment429Error1.cs` |
| `ApiV1MiscYoutubeComment500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment500Error1.cs` |
| `ApiV1MiscYoutubeComment502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment502Error1.cs` |
| `ApiV1MiscYoutubeComment503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment503Error1.cs` |
| `ApiV1MiscYoutubeComment504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeComment504Error1.cs` |

### MiscYoutubeEditVideo

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeEditVideo(MiscYoutubeEditVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubeVideoResponse`
- **Error**: `ApiException<MiscYoutubeEditVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeVideo400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo400Error1? value)` [400] · `TryGetApiV1MiscYoutubeVideo401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo401Error1? value)` [401] · `TryGetApiV1MiscYoutubeVideo403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo403Error1? value)` [403] · `TryGetApiV1MiscYoutubeVideo404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo404Error1? value)` [404] · `TryGetApiV1MiscYoutubeVideo429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo429Error1? value)` [429] · `TryGetApiV1MiscYoutubeVideo500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo500Error1? value)` [500] · `TryGetApiV1MiscYoutubeVideo502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo502Error1? value)` [502] · `TryGetApiV1MiscYoutubeVideo503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo503Error1? value)` [503] · `TryGetApiV1MiscYoutubeVideo504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideo504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeEditVideoRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeEditVideoRequest.cs` |
| `ApiV1MiscYoutubeVideoRequest` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoRequest.cs` |
| `ApiV1MiscYoutubeVideoResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoResponse.cs` |
| `MiscYoutubeEditVideoError` | `src/BundleSocial/Errors/MiscYoutubeEditVideoError.cs` |
| `ApiV1MiscYoutubeVideo400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo400Error1.cs` |
| `ApiV1MiscYoutubeVideo401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo401Error1.cs` |
| `ApiV1MiscYoutubeVideo403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo403Error1.cs` |
| `ApiV1MiscYoutubeVideo404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo404Error1.cs` |
| `ApiV1MiscYoutubeVideo429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo429Error1.cs` |
| `ApiV1MiscYoutubeVideo500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo500Error1.cs` |
| `ApiV1MiscYoutubeVideo502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo502Error1.cs` |
| `ApiV1MiscYoutubeVideo503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo503Error1.cs` |
| `ApiV1MiscYoutubeVideo504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideo504Error1.cs` |

### MiscYoutubeGetChannelPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeGetChannelPlaylist(MiscYoutubeGetChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `maxResults` ← `MaxResults`
- **Returns**: `ApiV1MiscYoutubePlaylistResponse`
- **Error**: `ApiException<MiscYoutubeGetChannelPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylist400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylist401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylist403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylist404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylist429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylist500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylist502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylist503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylist504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeGetChannelPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeGetChannelPlaylistRequest.cs` |
| `ApiV1MiscYoutubePlaylistResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistResponse.cs` |
| `MiscYoutubeGetChannelPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeGetChannelPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylist400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist400Error1.cs` |
| `ApiV1MiscYoutubePlaylist401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist401Error1.cs` |
| `ApiV1MiscYoutubePlaylist403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist403Error1.cs` |
| `ApiV1MiscYoutubePlaylist404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist404Error1.cs` |
| `ApiV1MiscYoutubePlaylist429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist429Error1.cs` |
| `ApiV1MiscYoutubePlaylist500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist500Error1.cs` |
| `ApiV1MiscYoutubePlaylist502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist502Error1.cs` |
| `ApiV1MiscYoutubePlaylist503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist503Error1.cs` |
| `ApiV1MiscYoutubePlaylist504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist504Error1.cs` |

### MiscYoutubeGetRegions

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeGetRegions(MiscYoutubeGetRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`
- **Returns**: `ApiV1MiscYoutubeRegionsResponse`
- **Error**: `ApiException<MiscYoutubeGetRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeRegions400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions400Error1? value)` [400] · `TryGetApiV1MiscYoutubeRegions401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions401Error1? value)` [401] · `TryGetApiV1MiscYoutubeRegions403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions403Error1? value)` [403] · `TryGetApiV1MiscYoutubeRegions404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions404Error1? value)` [404] · `TryGetApiV1MiscYoutubeRegions429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions429Error1? value)` [429] · `TryGetApiV1MiscYoutubeRegions500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions500Error1? value)` [500] · `TryGetApiV1MiscYoutubeRegions502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions502Error1? value)` [502] · `TryGetApiV1MiscYoutubeRegions503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions503Error1? value)` [503] · `TryGetApiV1MiscYoutubeRegions504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeRegions504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeGetRegionsRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeGetRegionsRequest.cs` |
| `ApiV1MiscYoutubeRegionsResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegionsResponse.cs` |
| `MiscYoutubeGetRegionsError` | `src/BundleSocial/Errors/MiscYoutubeGetRegionsError.cs` |
| `ApiV1MiscYoutubeRegions400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions400Error1.cs` |
| `ApiV1MiscYoutubeRegions401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions401Error1.cs` |
| `ApiV1MiscYoutubeRegions403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions403Error1.cs` |
| `ApiV1MiscYoutubeRegions404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions404Error1.cs` |
| `ApiV1MiscYoutubeRegions429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions429Error1.cs` |
| `ApiV1MiscYoutubeRegions500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions500Error1.cs` |
| `ApiV1MiscYoutubeRegions502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions502Error1.cs` |
| `ApiV1MiscYoutubeRegions503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions503Error1.cs` |
| `ApiV1MiscYoutubeRegions504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeRegions504Error1.cs` |

### MiscYoutubeGetVideoCategories

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeGetVideoCategories(MiscYoutubeGetVideoCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `regionCode` ← `RegionCode`
- **Returns**: `ApiV1MiscYoutubeVideoCategoriesResponse`
- **Error**: `ApiException<MiscYoutubeGetVideoCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeVideoCategories400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories400Error1? value)` [400] · `TryGetApiV1MiscYoutubeVideoCategories401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories401Error1? value)` [401] · `TryGetApiV1MiscYoutubeVideoCategories403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories403Error1? value)` [403] · `TryGetApiV1MiscYoutubeVideoCategories404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories404Error1? value)` [404] · `TryGetApiV1MiscYoutubeVideoCategories429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories429Error1? value)` [429] · `TryGetApiV1MiscYoutubeVideoCategories500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories500Error1? value)` [500] · `TryGetApiV1MiscYoutubeVideoCategories502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories502Error1? value)` [502] · `TryGetApiV1MiscYoutubeVideoCategories503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories503Error1? value)` [503] · `TryGetApiV1MiscYoutubeVideoCategories504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeVideoCategories504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeGetVideoCategoriesRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeGetVideoCategoriesRequest.cs` |
| `ApiV1MiscYoutubeVideoCategoriesResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategoriesResponse.cs` |
| `MiscYoutubeGetVideoCategoriesError` | `src/BundleSocial/Errors/MiscYoutubeGetVideoCategoriesError.cs` |
| `ApiV1MiscYoutubeVideoCategories400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories400Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories401Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories403Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories404Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories429Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories500Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories502Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories503Error1.cs` |
| `ApiV1MiscYoutubeVideoCategories504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategories504Error1.cs` |

### MiscYoutubeGetVideosFromPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeGetVideosFromPlaylist(MiscYoutubeGetVideosFromPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `PlaylistId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `playlistId` ← `PlaylistId`, `maxResults` ← `MaxResults`
- **Returns**: `ApiV1MiscYoutubePlaylistItemsResponse1`
- **Error**: `ApiException<MiscYoutubeGetVideosFromPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylistItems400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylistItems401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylistItems403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylistItems404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylistItems429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylistItems500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylistItems502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylistItems503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylistItems504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylistItems504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeGetVideosFromPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeGetVideosFromPlaylistRequest.cs` |
| `ApiV1MiscYoutubePlaylistItemsResponse1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItemsResponse1.cs` |
| `MiscYoutubeGetVideosFromPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeGetVideosFromPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylistItems400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems400Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems401Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems403Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems404Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems429Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems500Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems502Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems503Error1.cs` |
| `ApiV1MiscYoutubePlaylistItems504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItems504Error1.cs` |

### MiscYoutubeSetThumbnail

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeSetThumbnail(MiscYoutubeSetThumbnailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubeThumbnailResponse`
- **Error**: `ApiException<MiscYoutubeSetThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubeThumbnail400Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail400Error1? value)` [400] · `TryGetApiV1MiscYoutubeThumbnail401Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail401Error1? value)` [401] · `TryGetApiV1MiscYoutubeThumbnail403Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail403Error1? value)` [403] · `TryGetApiV1MiscYoutubeThumbnail404Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail404Error1? value)` [404] · `TryGetApiV1MiscYoutubeThumbnail429Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail429Error1? value)` [429] · `TryGetApiV1MiscYoutubeThumbnail500Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail500Error1? value)` [500] · `TryGetApiV1MiscYoutubeThumbnail502Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail502Error1? value)` [502] · `TryGetApiV1MiscYoutubeThumbnail503Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail503Error1? value)` [503] · `TryGetApiV1MiscYoutubeThumbnail504Error1([NotNullWhen(true)] out ApiV1MiscYoutubeThumbnail504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeSetThumbnailRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeSetThumbnailRequest.cs` |
| `ApiV1MiscYoutubeThumbnailRequest` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnailRequest.cs` |
| `ApiV1MiscYoutubeThumbnailResponse` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnailResponse.cs` |
| `MiscYoutubeSetThumbnailError` | `src/BundleSocial/Errors/MiscYoutubeSetThumbnailError.cs` |
| `ApiV1MiscYoutubeThumbnail400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail400Error1.cs` |
| `ApiV1MiscYoutubeThumbnail401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail401Error1.cs` |
| `ApiV1MiscYoutubeThumbnail403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail403Error1.cs` |
| `ApiV1MiscYoutubeThumbnail404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail404Error1.cs` |
| `ApiV1MiscYoutubeThumbnail429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail429Error1.cs` |
| `ApiV1MiscYoutubeThumbnail500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail500Error1.cs` |
| `ApiV1MiscYoutubeThumbnail502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail502Error1.cs` |
| `ApiV1MiscYoutubeThumbnail503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail503Error1.cs` |
| `ApiV1MiscYoutubeThumbnail504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubeThumbnail504Error1.cs` |

### MiscYoutubeUpdateChannelPlaylist

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MiscYoutubeUpdateChannelPlaylist(MiscYoutubeUpdateChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1MiscYoutubePlaylistResponse1`
- **Error**: `ApiException<MiscYoutubeUpdateChannelPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1MiscYoutubePlaylist400Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist400Error1? value)` [400] · `TryGetApiV1MiscYoutubePlaylist401Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist401Error1? value)` [401] · `TryGetApiV1MiscYoutubePlaylist403Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist403Error1? value)` [403] · `TryGetApiV1MiscYoutubePlaylist404Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist404Error1? value)` [404] · `TryGetApiV1MiscYoutubePlaylist429Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist429Error1? value)` [429] · `TryGetApiV1MiscYoutubePlaylist500Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist500Error1? value)` [500] · `TryGetApiV1MiscYoutubePlaylist502Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist502Error1? value)` [502] · `TryGetApiV1MiscYoutubePlaylist503Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist503Error1? value)` [503] · `TryGetApiV1MiscYoutubePlaylist504Error1([NotNullWhen(true)] out ApiV1MiscYoutubePlaylist504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MiscYoutubeUpdateChannelPlaylistRequest` | `src/BundleSocial/Requests/Misc/MiscYoutubeUpdateChannelPlaylistRequest.cs` |
| `ApiV1MiscYoutubePlaylistRequest1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistRequest1.cs` |
| `ApiV1MiscYoutubePlaylistResponse1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylistResponse1.cs` |
| `MiscYoutubeUpdateChannelPlaylistError` | `src/BundleSocial/Errors/MiscYoutubeUpdateChannelPlaylistError.cs` |
| `ApiV1MiscYoutubePlaylist400Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist400Error1.cs` |
| `ApiV1MiscYoutubePlaylist401Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist401Error1.cs` |
| `ApiV1MiscYoutubePlaylist403Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist403Error1.cs` |
| `ApiV1MiscYoutubePlaylist404Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist404Error1.cs` |
| `ApiV1MiscYoutubePlaylist429Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist429Error1.cs` |
| `ApiV1MiscYoutubePlaylist500Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist500Error1.cs` |
| `ApiV1MiscYoutubePlaylist502Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist502Error1.cs` |
| `ApiV1MiscYoutubePlaylist503Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist503Error1.cs` |
| `ApiV1MiscYoutubePlaylist504Error1` | `src/BundleSocial/Models/ApiV1MiscYoutubePlaylist504Error1.cs` |

