<!-- Generated file — do not edit; regenerated with the SDK. -->

# KycDocuments — operations

Accessor: `client.KycDocuments` · Source: `src/DidLogic/Api/KycDocuments.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DocumentsCountries

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsCountries(DocumentsCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name_contains` ← `NameContains`
- **Returns**: `ApiV2DocumentsCountriesResponse`
- **Error**: `ApiException<DocumentsCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2DocumentsCountries401Error1([NotNullWhen(true)] out ApiV2DocumentsCountries401Error1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsCountriesRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsCountriesRequest.cs` |
| `ApiV2DocumentsCountriesResponse` | `src/DidLogic/Models/ApiV2DocumentsCountriesResponse.cs` |
| `DocumentsCountriesError` | `src/DidLogic/Errors/DocumentsCountriesError.cs` |
| `ApiV2DocumentsCountries401Error1` | `src/DidLogic/Models/ApiV2DocumentsCountries401Error1.cs` |

### DocumentsCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsCreate(DocumentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentName`, `DocumentDocType`, `DocumentFilesFrontside`, `DocumentIdentityId`, `DocumentCountry`
- **Returns**: `ApiV2DocumentsResponse1`
- **Error**: `ApiException<DocumentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsCreateRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsCreateRequest.cs` |
| `DocumentDocType` | `src/DidLogic/Models/Enums/DocumentDocType.cs` |
| `ApiV2DocumentsResponse1` | `src/DidLogic/Models/ApiV2DocumentsResponse1.cs` |
| `DocumentsCreateError` | `src/DidLogic/Errors/DocumentsCreateError.cs` |
| `ApiV2Documents401Error1` | `src/DidLogic/Models/ApiV2Documents401Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### DocumentsDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsDestroy(DocumentsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DocumentsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value)` [401] · `TryGetApiV2Documents404Error1([NotNullWhen(true)] out ApiV2Documents404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsDestroyRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsDestroyRequest.cs` |
| `DocumentsDestroyError` | `src/DidLogic/Errors/DocumentsDestroyError.cs` |
| `ApiV2Documents401Error1` | `src/DidLogic/Models/ApiV2Documents401Error1.cs` |
| `ApiV2Documents404Error1` | `src/DidLogic/Models/ApiV2Documents404Error1.cs` |

### DocumentsFilesDownloadFile

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsFilesDownloadFile(DocumentsFilesDownloadFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Role`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DocumentsFilesDownloadFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2DocumentsFiles401Error1([NotNullWhen(true)] out ApiV2DocumentsFiles401Error1? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsFilesDownloadFileRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsFilesDownloadFileRequest.cs` |
| `Role` | `src/DidLogic/Models/Enums/Role.cs` |
| `DocumentsFilesDownloadFileError` | `src/DidLogic/Errors/DocumentsFilesDownloadFileError.cs` |
| `ApiV2DocumentsFiles401Error1` | `src/DidLogic/Models/ApiV2DocumentsFiles401Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### DocumentsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsIndex(DocumentsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `identity_id` ← `IdentityId`, `approvement_status` ← `ApprovementStatus`, `upload_date_from` ← `UploadDateFrom`, `upload_date_to` ← `UploadDateTo`, `order_by` ← `OrderBy`, `order` ← `Order`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV2DocumentsResponse`
- **Error**: `ApiException<DocumentsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsIndexRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsIndexRequest.cs` |
| `ApprovementStatus` | `src/DidLogic/Models/Enums/ApprovementStatus.cs` |
| `Order` | `src/DidLogic/Models/Enums/Order.cs` |
| `ApiV2DocumentsResponse` | `src/DidLogic/Models/ApiV2DocumentsResponse.cs` |
| `DocumentsIndexError` | `src/DidLogic/Errors/DocumentsIndexError.cs` |
| `ApiV2Documents401Error1` | `src/DidLogic/Models/ApiV2Documents401Error1.cs` |

### DocumentsShow

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsShow(DocumentsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV2DocumentsResponse2`
- **Error**: `ApiException<DocumentsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value)` [401] · `TryGetApiV2Documents404Error1([NotNullWhen(true)] out ApiV2Documents404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsShowRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsShowRequest.cs` |
| `ApiV2DocumentsResponse2` | `src/DidLogic/Models/ApiV2DocumentsResponse2.cs` |
| `DocumentsShowError` | `src/DidLogic/Errors/DocumentsShowError.cs` |
| `ApiV2Documents401Error1` | `src/DidLogic/Models/ApiV2Documents401Error1.cs` |
| `ApiV2Documents404Error1` | `src/DidLogic/Models/ApiV2Documents404Error1.cs` |

### DocumentsUpdate

- **Auth**: `options.BearerAuth`
- **Signature**: `DocumentsUpdate(DocumentsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV2DocumentsResponse3`
- **Error**: `ApiException<DocumentsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value)` [401] · `TryGetApiV2Documents404Error1([NotNullWhen(true)] out ApiV2Documents404Error1? value)` [404] · `TryGetError([NotNullWhen(true)] out Error? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocumentsUpdateRequest` | `src/DidLogic/Requests/KycDocuments/DocumentsUpdateRequest.cs` |
| `ApiV2DocumentsRequest` | `src/DidLogic/Models/ApiV2DocumentsRequest.cs` |
| `ApiV2DocumentsResponse3` | `src/DidLogic/Models/ApiV2DocumentsResponse3.cs` |
| `DocumentsUpdateError` | `src/DidLogic/Errors/DocumentsUpdateError.cs` |
| `ApiV2Documents401Error1` | `src/DidLogic/Models/ApiV2Documents401Error1.cs` |
| `ApiV2Documents404Error1` | `src/DidLogic/Models/ApiV2Documents404Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

