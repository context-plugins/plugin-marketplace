<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleTranslateClient — operations

Accessor: `client` · Source: `src/GoogleTranslate/GoogleTranslateClient.cs` · 51 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TranslateProjectsDetectLanguage

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsDetectLanguage(TranslateProjectsDetectLanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `Body`
- **Returns**: `DetectLanguageResponse`
- **Error**: `ApiException<TranslateProjectsDetectLanguageError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsDetectLanguageRequest` | `src/GoogleTranslate/Requests/TranslateProjectsDetectLanguageRequest.cs` |
| `DetectLanguageRequest` | `src/GoogleTranslate/Models/DetectLanguageRequest.cs` |
| `DetectLanguageResponse` | `src/GoogleTranslate/Models/DetectLanguageResponse.cs` |
| `TranslateProjectsDetectLanguageError` | `src/GoogleTranslate/Errors/TranslateProjectsDetectLanguageError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsGetSupportedLanguages

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsGetSupportedLanguages(TranslateProjectsGetSupportedLanguagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `displayLanguageCode` ← `DisplayLanguageCode`, `model` ← `Model`
- **Returns**: `SupportedLanguages`
- **Error**: `ApiException<TranslateProjectsGetSupportedLanguagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsGetSupportedLanguagesRequest` | `src/GoogleTranslate/Requests/TranslateProjectsGetSupportedLanguagesRequest.cs` |
| `SupportedLanguages` | `src/GoogleTranslate/Models/SupportedLanguages.cs` |
| `TranslateProjectsGetSupportedLanguagesError` | `src/GoogleTranslate/Errors/TranslateProjectsGetSupportedLanguagesError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`, `AdaptiveMtFilesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAdaptiveMtSentencesResponse`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest.cs` |
| `ListAdaptiveMtSentencesResponse` | `src/GoogleTranslate/Models/ListAdaptiveMtSentencesResponse.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`, `AdaptiveMtFilesId`
- **Returns**: `object`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`, `AdaptiveMtFilesId`
- **Returns**: `AdaptiveMtFile`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest.cs` |
| `AdaptiveMtFile` | `src/GoogleTranslate/Models/AdaptiveMtFile.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAdaptiveMtFilesResponse`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest.cs` |
| `ListAdaptiveMtFilesResponse` | `src/GoogleTranslate/Models/ListAdaptiveMtFilesResponse.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAdaptiveMtSentencesResponse`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest.cs` |
| `ListAdaptiveMtSentencesResponse` | `src/GoogleTranslate/Models/ListAdaptiveMtSentencesResponse.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsCreate(TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `AdaptiveMtDataset`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest.cs` |
| `AdaptiveMtDataset` | `src/GoogleTranslate/Models/AdaptiveMtDataset.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsCreateError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsDelete(TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`
- **Returns**: `object`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsGet(TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`
- **Returns**: `AdaptiveMtDataset`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest.cs` |
| `AdaptiveMtDataset` | `src/GoogleTranslate/Models/AdaptiveMtDataset.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AdaptiveMtDatasetsId`, `Body`
- **Returns**: `ImportAdaptiveMtFileResponse`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest.cs` |
| `ImportAdaptiveMtFileRequest` | `src/GoogleTranslate/Models/ImportAdaptiveMtFileRequest.cs` |
| `ImportAdaptiveMtFileResponse` | `src/GoogleTranslate/Models/ImportAdaptiveMtFileResponse.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtDatasetsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtDatasetsList(TranslateProjectsLocationsAdaptiveMtDatasetsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAdaptiveMtDatasetsResponse`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtDatasetsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtDatasetsListRequest.cs` |
| `ListAdaptiveMtDatasetsResponse` | `src/GoogleTranslate/Models/ListAdaptiveMtDatasetsResponse.cs` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtDatasetsListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsAdaptiveMtTranslate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsAdaptiveMtTranslate(TranslateProjectsLocationsAdaptiveMtTranslateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `AdaptiveMtTranslateResponse`
- **Error**: `ApiException<TranslateProjectsLocationsAdaptiveMtTranslateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtTranslateRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsAdaptiveMtTranslateRequest.cs` |
| `AdaptiveMtTranslateRequest` | `src/GoogleTranslate/Models/AdaptiveMtTranslateRequest.cs` |
| `AdaptiveMtTranslateResponse` | `src/GoogleTranslate/Models/AdaptiveMtTranslateResponse.cs` |
| `TranslateProjectsLocationsAdaptiveMtTranslateError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsAdaptiveMtTranslateError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsBatchTranslateDocument

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsBatchTranslateDocument(TranslateProjectsLocationsBatchTranslateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsBatchTranslateDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsBatchTranslateDocumentRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsBatchTranslateDocumentRequest.cs` |
| `BatchTranslateDocumentRequest` | `src/GoogleTranslate/Models/BatchTranslateDocumentRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsBatchTranslateDocumentError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsBatchTranslateDocumentError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsBatchTranslateText

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsBatchTranslateText(TranslateProjectsLocationsBatchTranslateTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsBatchTranslateTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsBatchTranslateTextRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsBatchTranslateTextRequest.cs` |
| `BatchTranslateTextRequest` | `src/GoogleTranslate/Models/BatchTranslateTextRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsBatchTranslateTextError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsBatchTranslateTextError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsCreate(TranslateProjectsLocationsDatasetsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsCreateRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsCreateRequest.cs` |
| `Dataset` | `src/GoogleTranslate/Models/Dataset.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsDatasetsCreateError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsDelete(TranslateProjectsLocationsDatasetsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DatasetsId`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsDeleteRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsDatasetsDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsExamplesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsExamplesList(TranslateProjectsLocationsDatasetsExamplesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DatasetsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListExamplesResponse`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsExamplesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsExamplesListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsExamplesListRequest.cs` |
| `ListExamplesResponse` | `src/GoogleTranslate/Models/ListExamplesResponse.cs` |
| `TranslateProjectsLocationsDatasetsExamplesListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsExamplesListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsExportData

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsExportData(TranslateProjectsLocationsDatasetsExportDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DatasetsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsExportDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsExportDataRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsExportDataRequest.cs` |
| `ExportDataRequest` | `src/GoogleTranslate/Models/ExportDataRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsDatasetsExportDataError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsExportDataError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsGet(TranslateProjectsLocationsDatasetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DatasetsId`
- **Returns**: `Dataset`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsGetRequest.cs` |
| `Dataset` | `src/GoogleTranslate/Models/Dataset.cs` |
| `TranslateProjectsLocationsDatasetsGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsImportData

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsImportData(TranslateProjectsLocationsDatasetsImportDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DatasetsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsImportDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsImportDataRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsImportDataRequest.cs` |
| `ImportDataRequest` | `src/GoogleTranslate/Models/ImportDataRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsDatasetsImportDataError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsImportDataError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDatasetsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDatasetsList(TranslateProjectsLocationsDatasetsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListDatasetsResponse`
- **Error**: `ApiException<TranslateProjectsLocationsDatasetsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDatasetsListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDatasetsListRequest.cs` |
| `ListDatasetsResponse` | `src/GoogleTranslate/Models/ListDatasetsResponse.cs` |
| `TranslateProjectsLocationsDatasetsListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDatasetsListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsDetectLanguage

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsDetectLanguage(TranslateProjectsLocationsDetectLanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `DetectLanguageResponse`
- **Error**: `ApiException<TranslateProjectsLocationsDetectLanguageError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsDetectLanguageRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsDetectLanguageRequest.cs` |
| `DetectLanguageRequest` | `src/GoogleTranslate/Models/DetectLanguageRequest.cs` |
| `DetectLanguageResponse` | `src/GoogleTranslate/Models/DetectLanguageResponse.cs` |
| `TranslateProjectsLocationsDetectLanguageError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsDetectLanguageError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGet(TranslateProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `Location`
- **Error**: `ApiException<TranslateProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGetRequest.cs` |
| `Location` | `src/GoogleTranslate/Models/Location.cs` |
| `TranslateProjectsLocationsGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGetSupportedLanguages

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGetSupportedLanguages(TranslateProjectsLocationsGetSupportedLanguagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `displayLanguageCode` ← `DisplayLanguageCode`, `model` ← `Model`
- **Returns**: `SupportedLanguages`
- **Error**: `ApiException<TranslateProjectsLocationsGetSupportedLanguagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGetSupportedLanguagesRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGetSupportedLanguagesRequest.cs` |
| `SupportedLanguages` | `src/GoogleTranslate/Models/SupportedLanguages.cs` |
| `TranslateProjectsLocationsGetSupportedLanguagesError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGetSupportedLanguagesError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesCreate(TranslateProjectsLocationsGlossariesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesCreateRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesCreateRequest.cs` |
| `Glossary` | `src/GoogleTranslate/Models/Glossary.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsGlossariesCreateError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesDelete(TranslateProjectsLocationsGlossariesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesDeleteRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsGlossariesDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesGet(TranslateProjectsLocationsGlossariesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`
- **Returns**: `Glossary`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGetRequest.cs` |
| `Glossary` | `src/GoogleTranslate/Models/Glossary.cs` |
| `TranslateProjectsLocationsGlossariesGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesGlossaryEntriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesGlossaryEntriesCreate(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`, `Body`
- **Returns**: `GlossaryEntry`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest.cs` |
| `GlossaryEntry` | `src/GoogleTranslate/Models/GlossaryEntry.cs` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesGlossaryEntriesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesGlossaryEntriesDelete(TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`, `GlossaryEntriesId`
- **Returns**: `object`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest.cs` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesGlossaryEntriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesGlossaryEntriesGet(TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`, `GlossaryEntriesId`
- **Returns**: `GlossaryEntry`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest.cs` |
| `GlossaryEntry` | `src/GoogleTranslate/Models/GlossaryEntry.cs` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesGlossaryEntriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesGlossaryEntriesList(TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListGlossaryEntriesResponse`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest.cs` |
| `ListGlossaryEntriesResponse` | `src/GoogleTranslate/Models/ListGlossaryEntriesResponse.cs` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesGlossaryEntriesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesGlossaryEntriesPatch(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`, `GlossaryEntriesId`, `Body`
- **Returns**: `GlossaryEntry`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest.cs` |
| `GlossaryEntry` | `src/GoogleTranslate/Models/GlossaryEntry.cs` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesList(TranslateProjectsLocationsGlossariesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListGlossariesResponse`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesListRequest.cs` |
| `ListGlossariesResponse` | `src/GoogleTranslate/Models/ListGlossariesResponse.cs` |
| `TranslateProjectsLocationsGlossariesListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsGlossariesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsGlossariesPatch(TranslateProjectsLocationsGlossariesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GlossariesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsGlossariesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesPatchRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsGlossariesPatchRequest.cs` |
| `Glossary` | `src/GoogleTranslate/Models/Glossary.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsGlossariesPatchError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsGlossariesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsList(TranslateProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListLocationsResponse`
- **Error**: `ApiException<TranslateProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsListRequest.cs` |
| `ListLocationsResponse` | `src/GoogleTranslate/Models/ListLocationsResponse.cs` |
| `TranslateProjectsLocationsListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsModelsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsModelsCreate(TranslateProjectsLocationsModelsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsModelsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsModelsCreateRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsCreateRequest.cs` |
| `Model` | `src/GoogleTranslate/Models/Model.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsModelsCreateError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsModelsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsModelsDelete(TranslateProjectsLocationsModelsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ModelsId`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsModelsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsModelsDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsDeleteRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsModelsDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsModelsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsModelsGet(TranslateProjectsLocationsModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ModelsId`
- **Returns**: `Model`
- **Error**: `ApiException<TranslateProjectsLocationsModelsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsModelsGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsGetRequest.cs` |
| `Model` | `src/GoogleTranslate/Models/Model.cs` |
| `TranslateProjectsLocationsModelsGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsModelsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsModelsList(TranslateProjectsLocationsModelsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListModelsResponse`
- **Error**: `ApiException<TranslateProjectsLocationsModelsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsModelsListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsModelsListRequest.cs` |
| `ListModelsResponse` | `src/GoogleTranslate/Models/ListModelsResponse.cs` |
| `TranslateProjectsLocationsModelsListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsModelsListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsOperationsCancel(TranslateProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<TranslateProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsCancelRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsCancelRequest.cs` |
| `TranslateProjectsLocationsOperationsCancelError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsOperationsDelete(TranslateProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<TranslateProjectsLocationsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsDeleteRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsDeleteRequest.cs` |
| `TranslateProjectsLocationsOperationsDeleteError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsOperationsGet(TranslateProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsGetRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsOperationsGetError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsOperationsList(TranslateProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListOperationsResponse`
- **Error**: `ApiException<TranslateProjectsLocationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsListRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsListRequest.cs` |
| `ListOperationsResponse` | `src/GoogleTranslate/Models/ListOperationsResponse.cs` |
| `TranslateProjectsLocationsOperationsListError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsOperationsWait

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsOperationsWait(TranslateProjectsLocationsOperationsWaitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<TranslateProjectsLocationsOperationsWaitError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsWaitRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsOperationsWaitRequest.cs` |
| `WaitOperationRequest` | `src/GoogleTranslate/Models/WaitOperationRequest.cs` |
| `Operation` | `src/GoogleTranslate/Models/Operation.cs` |
| `TranslateProjectsLocationsOperationsWaitError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsOperationsWaitError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsRefineText

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsRefineText(TranslateProjectsLocationsRefineTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `RefineTextResponse`
- **Error**: `ApiException<TranslateProjectsLocationsRefineTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsRefineTextRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsRefineTextRequest.cs` |
| `RefineTextRequest` | `src/GoogleTranslate/Models/RefineTextRequest.cs` |
| `RefineTextResponse` | `src/GoogleTranslate/Models/RefineTextResponse.cs` |
| `TranslateProjectsLocationsRefineTextError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsRefineTextError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsRomanizeText

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsRomanizeText(TranslateProjectsLocationsRomanizeTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `RomanizeTextResponse`
- **Error**: `ApiException<TranslateProjectsLocationsRomanizeTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsRomanizeTextRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsRomanizeTextRequest.cs` |
| `RomanizeTextRequest` | `src/GoogleTranslate/Models/RomanizeTextRequest.cs` |
| `RomanizeTextResponse` | `src/GoogleTranslate/Models/RomanizeTextResponse.cs` |
| `TranslateProjectsLocationsRomanizeTextError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsRomanizeTextError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsTranslateDocument

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsTranslateDocument(TranslateProjectsLocationsTranslateDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `TranslateDocumentResponse`
- **Error**: `ApiException<TranslateProjectsLocationsTranslateDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsTranslateDocumentRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsTranslateDocumentRequest.cs` |
| `TranslateDocumentRequest` | `src/GoogleTranslate/Models/TranslateDocumentRequest.cs` |
| `TranslateDocumentResponse` | `src/GoogleTranslate/Models/TranslateDocumentResponse.cs` |
| `TranslateProjectsLocationsTranslateDocumentError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsTranslateDocumentError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsLocationsTranslateText

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsLocationsTranslateText(TranslateProjectsLocationsTranslateTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `TranslateTextResponse`
- **Error**: `ApiException<TranslateProjectsLocationsTranslateTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsTranslateTextRequest` | `src/GoogleTranslate/Requests/TranslateProjectsLocationsTranslateTextRequest.cs` |
| `TranslateTextRequest` | `src/GoogleTranslate/Models/TranslateTextRequest.cs` |
| `TranslateTextResponse` | `src/GoogleTranslate/Models/TranslateTextResponse.cs` |
| `TranslateProjectsLocationsTranslateTextError` | `src/GoogleTranslate/Errors/TranslateProjectsLocationsTranslateTextError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsRomanizeText

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsRomanizeText(TranslateProjectsRomanizeTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `Body`
- **Returns**: `RomanizeTextResponse`
- **Error**: `ApiException<TranslateProjectsRomanizeTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsRomanizeTextRequest` | `src/GoogleTranslate/Requests/TranslateProjectsRomanizeTextRequest.cs` |
| `RomanizeTextRequest` | `src/GoogleTranslate/Models/RomanizeTextRequest.cs` |
| `RomanizeTextResponse` | `src/GoogleTranslate/Models/RomanizeTextResponse.cs` |
| `TranslateProjectsRomanizeTextError` | `src/GoogleTranslate/Errors/TranslateProjectsRomanizeTextError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

### TranslateProjectsTranslateText

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `TranslateProjectsTranslateText(TranslateProjectsTranslateTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `Body`
- **Returns**: `TranslateTextResponse`
- **Error**: `ApiException<TranslateProjectsTranslateTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslateProjectsTranslateTextRequest` | `src/GoogleTranslate/Requests/TranslateProjectsTranslateTextRequest.cs` |
| `TranslateTextRequest` | `src/GoogleTranslate/Models/TranslateTextRequest.cs` |
| `TranslateTextResponse` | `src/GoogleTranslate/Models/TranslateTextResponse.cs` |
| `TranslateProjectsTranslateTextError` | `src/GoogleTranslate/Errors/TranslateProjectsTranslateTextError.cs` |
| `GoogleRpcError` | `src/GoogleTranslate/Models/GoogleRpcError.cs` |

