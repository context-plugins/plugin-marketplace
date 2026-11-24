<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.Audiences` · Source: `src/Contentstack/Api/Audiences.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAudience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateAudience(CreateAudienceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `Body`
- **Returns**: `Audience`
- **Error**: `ApiException<CreateAudienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAudienceOperationRequest` | `src/Contentstack/Requests/Audiences/CreateAudienceOperationRequest.cs` |
| `CreateAudienceRequest` | `src/Contentstack/Models/CreateAudienceRequest.cs` |
| `Audience` | `src/Contentstack/Models/Audience.cs` |
| `CreateAudienceError` | `src/Contentstack/Errors/CreateAudienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### DeleteAudience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteAudience(DeleteAudienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAudienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAudienceRequest` | `src/Contentstack/Requests/Audiences/DeleteAudienceRequest.cs` |
| `DeleteAudienceError` | `src/Contentstack/Errors/DeleteAudienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetAllAudiences

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllAudiences(GetAllAudiencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `AudienceList`
- **Error**: `ApiException<GetAllAudiencesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllAudiencesRequest` | `src/Contentstack/Requests/Audiences/GetAllAudiencesRequest.cs` |
| `AudienceList` | `src/Contentstack/Models/AudienceList.cs` |
| `GetAllAudiencesError` | `src/Contentstack/Errors/GetAllAudiencesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### UpdateAudience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateAudience(UpdateAudienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`, `Body`
- **Returns**: `Audience`
- **Error**: `ApiException<UpdateAudienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAudienceRequest` | `src/Contentstack/Requests/Audiences/UpdateAudienceRequest.cs` |
| `CreateAudienceRequest` | `src/Contentstack/Models/CreateAudienceRequest.cs` |
| `Audience` | `src/Contentstack/Models/Audience.cs` |
| `UpdateAudienceError` | `src/Contentstack/Errors/UpdateAudienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

