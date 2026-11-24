<!-- Generated file — do not edit; regenerated with the SDK. -->

# Experiences — operations

Accessor: `client.Experiences` · Source: `src/Contentstack/Api/Experiences.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExperience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateExperience(CreateExperienceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `Body`
- **Returns**: `Experience`
- **Error**: `ApiException<CreateExperienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateExperienceOperationRequest` | `src/Contentstack/Requests/Experiences/CreateExperienceOperationRequest.cs` |
| `CreateExperienceRequest` | `src/Contentstack/Models/CreateExperienceRequest.cs` |
| `Experience` | `src/Contentstack/Models/Experience.cs` |
| `CreateExperienceError` | `src/Contentstack/Errors/CreateExperienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### DeleteExperience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteExperience(DeleteExperienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteExperienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteExperienceRequest` | `src/Contentstack/Requests/Experiences/DeleteExperienceRequest.cs` |
| `DeleteExperienceError` | `src/Contentstack/Errors/DeleteExperienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetAllExperiences

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllExperiences(GetAllExperiencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `ExperienceList`
- **Error**: `ApiException<GetAllExperiencesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllExperiencesRequest` | `src/Contentstack/Requests/Experiences/GetAllExperiencesRequest.cs` |
| `ExperienceList` | `src/Contentstack/Models/ExperienceList.cs` |
| `GetAllExperiencesError` | `src/Contentstack/Errors/GetAllExperiencesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetExperience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetExperience(GetExperienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`
- **Returns**: `Experience`
- **Error**: `ApiException<GetExperienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExperienceRequest` | `src/Contentstack/Requests/Experiences/GetExperienceRequest.cs` |
| `Experience` | `src/Contentstack/Models/Experience.cs` |
| `GetExperienceError` | `src/Contentstack/Errors/GetExperienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetExperiencePriority

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetExperiencePriority(GetExperiencePriorityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `ExperiencePriority`
- **Error**: `ApiException<GetExperiencePriorityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExperiencePriorityRequest` | `src/Contentstack/Requests/Experiences/GetExperiencePriorityRequest.cs` |
| `ExperiencePriority` | `src/Contentstack/Models/ExperiencePriority.cs` |
| `GetExperiencePriorityError` | `src/Contentstack/Errors/GetExperiencePriorityError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### UpdateExperience

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateExperience(UpdateExperienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XProjectUid`, `Body`
- **Returns**: `Experience`
- **Error**: `ApiException<UpdateExperienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateExperienceRequest` | `src/Contentstack/Requests/Experiences/UpdateExperienceRequest.cs` |
| `CreateExperienceRequest` | `src/Contentstack/Models/CreateExperienceRequest.cs` |
| `Experience` | `src/Contentstack/Models/Experience.cs` |
| `UpdateExperienceError` | `src/Contentstack/Errors/UpdateExperienceError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### UpdateExperiencePriority

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateExperiencePriority(UpdateExperiencePriorityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `Body`
- **Returns**: `ExperiencePriority`
- **Error**: `ApiException<UpdateExperiencePriorityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateExperiencePriorityRequest` | `src/Contentstack/Requests/Experiences/UpdateExperiencePriorityRequest.cs` |
| `ExperiencePriority` | `src/Contentstack/Models/ExperiencePriority.cs` |
| `UpdateExperiencePriorityError` | `src/Contentstack/Errors/UpdateExperiencePriorityError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

