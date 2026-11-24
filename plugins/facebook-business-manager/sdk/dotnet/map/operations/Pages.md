<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pages — operations

Accessor: `client.Pages` · Source: `src/FacebookBusinessManager/Api/Pages.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPage(GetPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `Page`
- **Error**: `ApiException<GetPageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPageRequest` | `src/FacebookBusinessManager/Requests/Pages/GetPageRequest.cs` |
| `Page` | `src/FacebookBusinessManager/Models/Page.cs` |
| `GetPageError` | `src/FacebookBusinessManager/Errors/GetPageError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### SubscribePageApp

- **Auth**: `options.BearerAuth`
- **Signature**: `SubscribePageApp(SubscribePageAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `Body`
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `ApiException<SubscribePageAppError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubscribePageAppRequest` | `src/FacebookBusinessManager/Requests/Pages/SubscribePageAppRequest.cs` |
| `SubscribedAppsRequest` | `src/FacebookBusinessManager/Models/SubscribedAppsRequest.cs` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs` |
| `SubscribePageAppError` | `src/FacebookBusinessManager/Errors/SubscribePageAppError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

