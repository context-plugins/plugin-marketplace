<!-- Generated file — do not edit; regenerated with the SDK. -->

# BranchingModelApi — operations

Accessor: `client.BranchingModelApi` · Source: `src/Bitbucket/Api/BranchingModelApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRepositoriesByWorkspaceByRepoSlugBranchingModel

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugBranchingModel(GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `BranchingModel`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchingModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest` | `src/Bitbucket/Requests/BranchingModelApi/GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest.cs` |
| `BranchingModel` | `src/Bitbucket/Models/AllOf/BranchingModel.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchingModelError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchingModelError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettings

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `BranchingModelSettings`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest` | `src/Bitbucket/Requests/BranchingModelApi/GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest.cs` |
| `BranchingModelSettings` | `src/Bitbucket/Models/AllOf/BranchingModelSettings.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModel

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModel(GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `EffectiveRepoBranchingModel`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest` | `src/Bitbucket/Requests/BranchingModelApi/GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest.cs` |
| `EffectiveRepoBranchingModel` | `src/Bitbucket/Models/AllOf/EffectiveRepoBranchingModel.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModel

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModel(GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `ProjectBranchingModel`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest` | `src/Bitbucket/Requests/BranchingModelApi/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest.cs` |
| `ProjectBranchingModel` | `src/Bitbucket/Models/AllOf/ProjectBranchingModel.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `BranchingModelSettings`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest` | `src/Bitbucket/Requests/BranchingModelApi/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest.cs` |
| `BranchingModelSettings` | `src/Bitbucket/Models/AllOf/BranchingModelSettings.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettings

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `BranchingModelSettings`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest` | `src/Bitbucket/Requests/BranchingModelApi/PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest.cs` |
| `BranchingModelSettings` | `src/Bitbucket/Models/AllOf/BranchingModelSettings.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `BranchingModelSettings`
- **Error**: `ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest` | `src/Bitbucket/Requests/BranchingModelApi/PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest.cs` |
| `BranchingModelSettings` | `src/Bitbucket/Models/AllOf/BranchingModelSettings.cs` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

