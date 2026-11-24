<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/Basiq/Api/Jobs.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJobs

- **Auth**: `options.ServicesToken`
- **Signature**: `GetJobs(GetJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobsResponse3`
- **Error**: `ApiException<GetJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetJobs400Error1([NotNullWhen(true)] out Jobs400Error1? value)` [400] · `TryGetJobs401Error1([NotNullWhen(true)] out Jobs401Error1? value)` [401] · `TryGetJobs403Error1([NotNullWhen(true)] out Jobs403Error1? value)` [403] · `TryGetJobs404Error1([NotNullWhen(true)] out Jobs404Error1? value)` [404] · `TryGetJobs500Error1([NotNullWhen(true)] out Jobs500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobsRequest` | `src/Basiq/Requests/Jobs/GetJobsRequest.cs` |
| `JobsResponse3` | `src/Basiq/Models/AnyOf/JobsResponse3.cs` |
| `GetJobsError` | `src/Basiq/Errors/GetJobsError.cs` |
| `Jobs400Error1` | `src/Basiq/Models/Jobs400Error1.cs` |
| `Jobs401Error1` | `src/Basiq/Models/Jobs401Error1.cs` |
| `Jobs403Error1` | `src/Basiq/Models/Jobs403Error1.cs` |
| `Jobs404Error1` | `src/Basiq/Models/Jobs404Error1.cs` |
| `Jobs500Error1` | `src/Basiq/Models/Jobs500Error1.cs` |

### GetUserJobs

- **Auth**: `options.ServicesToken`
- **Signature**: `GetUserJobs(GetUserJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `UsersJobsResponse`
- **Error**: `ApiException<GetUserJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersJobs400Error1([NotNullWhen(true)] out UsersJobs400Error1? value)` [400] · `TryGetUsersJobs401Error1([NotNullWhen(true)] out UsersJobs401Error1? value)` [401] · `TryGetUsersJobs403Error1([NotNullWhen(true)] out UsersJobs403Error1? value)` [403] · `TryGetUsersJobs404Error1([NotNullWhen(true)] out UsersJobs404Error1? value)` [404] · `TryGetUsersJobs500Error1([NotNullWhen(true)] out UsersJobs500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserJobsRequest` | `src/Basiq/Requests/Jobs/GetUserJobsRequest.cs` |
| `UsersJobsResponse` | `src/Basiq/Models/UsersJobsResponse.cs` |
| `GetUserJobsError` | `src/Basiq/Errors/GetUserJobsError.cs` |
| `UsersJobs400Error1` | `src/Basiq/Models/UsersJobs400Error1.cs` |
| `UsersJobs401Error1` | `src/Basiq/Models/UsersJobs401Error1.cs` |
| `UsersJobs403Error1` | `src/Basiq/Models/UsersJobs403Error1.cs` |
| `UsersJobs404Error1` | `src/Basiq/Models/UsersJobs404Error1.cs` |
| `UsersJobs500Error1` | `src/Basiq/Models/UsersJobs500Error1.cs` |

### PostJobMfa

- **Auth**: `options.ServicesToken`
- **Signature**: `PostJobMfa(PostJobMfaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`, `Body`
- **Returns**: `ConnectionResponseResource`
- **Error**: `ApiException<PostJobMfaError>` — **Case A (typed)**
- **Error accessors**: `TryGetJobsMfa400Error1([NotNullWhen(true)] out JobsMfa400Error1? value)` [400] · `TryGetJobsMfa401Error1([NotNullWhen(true)] out JobsMfa401Error1? value)` [401] · `TryGetJobsMfa403Error1([NotNullWhen(true)] out JobsMfa403Error1? value)` [403] · `TryGetJobsMfa404Error1([NotNullWhen(true)] out JobsMfa404Error1? value)` [404] · `TryGetJobsMfa500Error1([NotNullWhen(true)] out JobsMfa500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostJobMfaRequest` | `src/Basiq/Requests/Jobs/PostJobMfaRequest.cs` |
| `JobsMfaRequest` | `src/Basiq/Models/JobsMfaRequest.cs` |
| `ConnectionResponseResource` | `src/Basiq/Models/ConnectionResponseResource.cs` |
| `PostJobMfaError` | `src/Basiq/Errors/PostJobMfaError.cs` |
| `JobsMfa400Error1` | `src/Basiq/Models/JobsMfa400Error1.cs` |
| `JobsMfa401Error1` | `src/Basiq/Models/JobsMfa401Error1.cs` |
| `JobsMfa403Error1` | `src/Basiq/Models/JobsMfa403Error1.cs` |
| `JobsMfa404Error1` | `src/Basiq/Models/JobsMfa404Error1.cs` |
| `JobsMfa500Error1` | `src/Basiq/Models/JobsMfa500Error1.cs` |

