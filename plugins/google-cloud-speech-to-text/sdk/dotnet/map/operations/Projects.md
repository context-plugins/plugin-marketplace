<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/GoogleCloudSpeechToText/Api/Projects.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SpeechProjectsLocationsCustomClassesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsCustomClassesCreate(SpeechProjectsLocationsCustomClassesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `CustomClass`
- **Error**: `ApiException<SpeechProjectsLocationsCustomClassesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsCustomClassesCreateRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesCreateRequest.cs` |
| `CreateCustomClassRequest` | `src/GoogleCloudSpeechToText/Models/CreateCustomClassRequest.cs` |
| `CustomClass` | `src/GoogleCloudSpeechToText/Models/CustomClass.cs` |
| `SpeechProjectsLocationsCustomClassesCreateError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsCustomClassesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsCustomClassesDelete(SpeechProjectsLocationsCustomClassesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `CustomClassesId`
- **Returns**: `object`
- **Error**: `ApiException<SpeechProjectsLocationsCustomClassesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsCustomClassesDeleteRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesDeleteRequest.cs` |
| `SpeechProjectsLocationsCustomClassesDeleteError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsCustomClassesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsCustomClassesGet(SpeechProjectsLocationsCustomClassesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `CustomClassesId`
- **Returns**: `CustomClass`
- **Error**: `ApiException<SpeechProjectsLocationsCustomClassesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsCustomClassesGetRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesGetRequest.cs` |
| `CustomClass` | `src/GoogleCloudSpeechToText/Models/CustomClass.cs` |
| `SpeechProjectsLocationsCustomClassesGetError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsCustomClassesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsCustomClassesList(SpeechProjectsLocationsCustomClassesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListCustomClassesResponse`
- **Error**: `ApiException<SpeechProjectsLocationsCustomClassesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsCustomClassesListRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesListRequest.cs` |
| `ListCustomClassesResponse` | `src/GoogleCloudSpeechToText/Models/ListCustomClassesResponse.cs` |
| `SpeechProjectsLocationsCustomClassesListError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsCustomClassesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsCustomClassesPatch(SpeechProjectsLocationsCustomClassesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `CustomClassesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `CustomClass`
- **Error**: `ApiException<SpeechProjectsLocationsCustomClassesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsCustomClassesPatchRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsCustomClassesPatchRequest.cs` |
| `CustomClass` | `src/GoogleCloudSpeechToText/Models/CustomClass.cs` |
| `SpeechProjectsLocationsCustomClassesPatchError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsCustomClassesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsPhraseSetsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsPhraseSetsCreate(SpeechProjectsLocationsPhraseSetsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `PhraseSet`
- **Error**: `ApiException<SpeechProjectsLocationsPhraseSetsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsPhraseSetsCreateRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsCreateRequest.cs` |
| `CreatePhraseSetRequest` | `src/GoogleCloudSpeechToText/Models/CreatePhraseSetRequest.cs` |
| `PhraseSet` | `src/GoogleCloudSpeechToText/Models/PhraseSet.cs` |
| `SpeechProjectsLocationsPhraseSetsCreateError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsPhraseSetsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsPhraseSetsDelete(SpeechProjectsLocationsPhraseSetsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PhraseSetsId`
- **Returns**: `object`
- **Error**: `ApiException<SpeechProjectsLocationsPhraseSetsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsPhraseSetsDeleteRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsDeleteRequest.cs` |
| `SpeechProjectsLocationsPhraseSetsDeleteError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsPhraseSetsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsPhraseSetsGet(SpeechProjectsLocationsPhraseSetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PhraseSetsId`
- **Returns**: `PhraseSet`
- **Error**: `ApiException<SpeechProjectsLocationsPhraseSetsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsPhraseSetsGetRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsGetRequest.cs` |
| `PhraseSet` | `src/GoogleCloudSpeechToText/Models/PhraseSet.cs` |
| `SpeechProjectsLocationsPhraseSetsGetError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsPhraseSetsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsPhraseSetsList(SpeechProjectsLocationsPhraseSetsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListPhraseSetResponse`
- **Error**: `ApiException<SpeechProjectsLocationsPhraseSetsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsPhraseSetsListRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsListRequest.cs` |
| `ListPhraseSetResponse` | `src/GoogleCloudSpeechToText/Models/ListPhraseSetResponse.cs` |
| `SpeechProjectsLocationsPhraseSetsListError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

### SpeechProjectsLocationsPhraseSetsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SpeechProjectsLocationsPhraseSetsPatch(SpeechProjectsLocationsPhraseSetsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PhraseSetsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `PhraseSet`
- **Error**: `ApiException<SpeechProjectsLocationsPhraseSetsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsPhraseSetsPatchRequest` | `src/GoogleCloudSpeechToText/Requests/Projects/SpeechProjectsLocationsPhraseSetsPatchRequest.cs` |
| `PhraseSet` | `src/GoogleCloudSpeechToText/Models/PhraseSet.cs` |
| `SpeechProjectsLocationsPhraseSetsPatchError` | `src/GoogleCloudSpeechToText/Errors/SpeechProjectsLocationsPhraseSetsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudSpeechToText/Models/GoogleRpcError.cs` |

