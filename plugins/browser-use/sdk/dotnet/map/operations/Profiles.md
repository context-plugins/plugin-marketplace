<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profiles — operations

Accessor: `client.Profiles` · Source: `src/BrowserUse/Api/Profiles.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProfileProfilesPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CreateProfileProfilesPost(CreateProfileProfilesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ProfileView`
- **Error**: `ApiException<CreateProfileProfilesPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetInsufficientCreditsError([NotNullWhen(true)] out InsufficientCreditsError? value)` [402] · `TryGetValidationError([NotNullWhen(true)] out ValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProfileProfilesPostRequest` | `src/BrowserUse/Requests/Profiles/CreateProfileProfilesPostRequest.cs` |
| `ProfileCreateRequest` | `src/BrowserUse/Models/ProfileCreateRequest.cs` |
| `ProfileView` | `src/BrowserUse/Models/ProfileView.cs` |
| `CreateProfileProfilesPostError` | `src/BrowserUse/Errors/CreateProfileProfilesPostError.cs` |
| `InsufficientCreditsError` | `src/BrowserUse/Models/InsufficientCreditsError.cs` |
| `ValidationError` | `src/BrowserUse/Models/ValidationError.cs` |

### DeleteBrowserProfileProfilesProfileIdDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DeleteBrowserProfileProfilesProfileIdDelete(DeleteBrowserProfileProfilesProfileIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProfileId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBrowserProfileProfilesProfileIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBrowserProfileProfilesProfileIdDeleteRequest` | `src/BrowserUse/Requests/Profiles/DeleteBrowserProfileProfilesProfileIdDeleteRequest.cs` |
| `DeleteBrowserProfileProfilesProfileIdDeleteError` | `src/BrowserUse/Errors/DeleteBrowserProfileProfilesProfileIdDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetProfileProfilesProfileIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetProfileProfilesProfileIdGet(GetProfileProfilesProfileIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProfileId`
- **Returns**: `ProfileView`
- **Error**: `ApiException<GetProfileProfilesProfileIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProfileNotFoundError([NotNullWhen(true)] out ProfileNotFoundError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProfileProfilesProfileIdGetRequest` | `src/BrowserUse/Requests/Profiles/GetProfileProfilesProfileIdGetRequest.cs` |
| `ProfileView` | `src/BrowserUse/Models/ProfileView.cs` |
| `GetProfileProfilesProfileIdGetError` | `src/BrowserUse/Errors/GetProfileProfilesProfileIdGetError.cs` |
| `ProfileNotFoundError` | `src/BrowserUse/Models/ProfileNotFoundError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListProfilesProfilesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListProfilesProfilesGet(ListProfilesProfilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageNumber` ← `PageNumber`, `query` ← `Query`
- **Returns**: `ProfileListResponse`
- **Error**: `ApiException<ListProfilesProfilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProfilesProfilesGetRequest` | `src/BrowserUse/Requests/Profiles/ListProfilesProfilesGetRequest.cs` |
| `Query` | `src/BrowserUse/Models/AnyOf/Query.cs` |
| `ProfileListResponse` | `src/BrowserUse/Models/ProfileListResponse.cs` |
| `ListProfilesProfilesGetError` | `src/BrowserUse/Errors/ListProfilesProfilesGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UpdateProfileProfilesProfileIdPatch

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UpdateProfileProfilesProfileIdPatch(UpdateProfileProfilesProfileIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProfileId`, `Body`
- **Returns**: `ProfileView`
- **Error**: `ApiException<UpdateProfileProfilesProfileIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetProfileNotFoundError([NotNullWhen(true)] out ProfileNotFoundError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProfileProfilesProfileIdPatchRequest` | `src/BrowserUse/Requests/Profiles/UpdateProfileProfilesProfileIdPatchRequest.cs` |
| `ProfileUpdateRequest` | `src/BrowserUse/Models/ProfileUpdateRequest.cs` |
| `ProfileView` | `src/BrowserUse/Models/ProfileView.cs` |
| `UpdateProfileProfilesProfileIdPatchError` | `src/BrowserUse/Errors/UpdateProfileProfilesProfileIdPatchError.cs` |
| `ProfileNotFoundError` | `src/BrowserUse/Models/ProfileNotFoundError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

