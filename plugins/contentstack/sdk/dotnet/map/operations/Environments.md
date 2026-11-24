<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.Environments` · Source: `src/Contentstack/Api/Environments.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEnvironment

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateEnvironment(CreateEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `Body`
- **Returns**: `Environment2`
- **Error**: `ApiException<CreateEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2ContentstackEnvironmentsApi([NotNullWhen(true)] out Error2ContentstackEnvironmentsApi? value)` [400] · `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEnvironmentOperationRequest` | `src/Contentstack/Requests/Environments/CreateEnvironmentOperationRequest.cs` |
| `CreateEnvironmentRequest` | `src/Contentstack/Models/CreateEnvironmentRequest.cs` |
| `Environment2` | `src/Contentstack/Models/Environment2.cs` |
| `CreateEnvironmentError` | `src/Contentstack/Errors/CreateEnvironmentError.cs` |
| `Error2ContentstackEnvironmentsApi` | `src/Contentstack/Models/Error2ContentstackEnvironmentsApi.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### DeleteEnvironment

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteEnvironment(DeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetError2ContentstackEnvironmentsApi([NotNullWhen(true)] out Error2ContentstackEnvironmentsApi? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentRequest` | `src/Contentstack/Requests/Environments/DeleteEnvironmentRequest.cs` |
| `DeleteEnvironmentError` | `src/Contentstack/Errors/DeleteEnvironmentError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `Error2ContentstackEnvironmentsApi` | `src/Contentstack/Models/Error2ContentstackEnvironmentsApi.cs` |

### GetAllEnvironments

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetAllEnvironments(GetAllEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`
- **Returns**: `EnvironmentList`
- **Error**: `ApiException<GetAllEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllEnvironmentsRequest` | `src/Contentstack/Requests/Environments/GetAllEnvironmentsRequest.cs` |
| `EnvironmentList` | `src/Contentstack/Models/EnvironmentList.cs` |
| `GetAllEnvironmentsError` | `src/Contentstack/Errors/GetAllEnvironmentsError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### GetEnvironment

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetEnvironment(GetEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`
- **Returns**: `Environment2`
- **Error**: `ApiException<GetEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetError2ContentstackEnvironmentsApi([NotNullWhen(true)] out Error2ContentstackEnvironmentsApi? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentRequest` | `src/Contentstack/Requests/Environments/GetEnvironmentRequest.cs` |
| `Environment2` | `src/Contentstack/Models/Environment2.cs` |
| `GetEnvironmentError` | `src/Contentstack/Errors/GetEnvironmentError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `Error2ContentstackEnvironmentsApi` | `src/Contentstack/Models/Error2ContentstackEnvironmentsApi.cs` |

### GetProjectsByProjectUidEnvironments

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetProjectsByProjectUidEnvironments(GetProjectsByProjectUidEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`
- **Returns**: `EnvironmentList2`
- **Error**: `ApiException<GetProjectsByProjectUidEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectsByProjectUidEnvironmentsRequest` | `src/Contentstack/Requests/Environments/GetProjectsByProjectUidEnvironmentsRequest.cs` |
| `EnvironmentList2` | `src/Contentstack/Models/EnvironmentList2.cs` |
| `GetProjectsByProjectUidEnvironmentsError` | `src/Contentstack/Errors/GetProjectsByProjectUidEnvironmentsError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### RevalidateCache

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `RevalidateCache(RevalidateCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RevalidateCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetError2ContentstackEnvironmentsApi([NotNullWhen(true)] out Error2ContentstackEnvironmentsApi? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevalidateCacheRequest` | `src/Contentstack/Requests/Environments/RevalidateCacheRequest.cs` |
| `ProjectsEnvironmentsRevalidateCacheRequest` | `src/Contentstack/Models/ProjectsEnvironmentsRevalidateCacheRequest.cs` |
| `RevalidateCacheError` | `src/Contentstack/Errors/RevalidateCacheError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `Error2ContentstackEnvironmentsApi` | `src/Contentstack/Models/Error2ContentstackEnvironmentsApi.cs` |

### UpdateEnvironment

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateEnvironment(UpdateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`, `Body`
- **Returns**: `Environment2`
- **Error**: `ApiException<UpdateEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2ContentstackEnvironmentsApi([NotNullWhen(true)] out Error2ContentstackEnvironmentsApi? value)` [400] · `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEnvironmentRequest` | `src/Contentstack/Requests/Environments/UpdateEnvironmentRequest.cs` |
| `CreateEnvironmentRequest` | `src/Contentstack/Models/CreateEnvironmentRequest.cs` |
| `Environment2` | `src/Contentstack/Models/Environment2.cs` |
| `UpdateEnvironmentError` | `src/Contentstack/Errors/UpdateEnvironmentError.cs` |
| `Error2ContentstackEnvironmentsApi` | `src/Contentstack/Models/Error2ContentstackEnvironmentsApi.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

