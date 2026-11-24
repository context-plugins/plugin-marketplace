<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerDocuments — operations

Accessor: `client.PartnerDocuments` · Source: `src/Curlec/Api/PartnerDocuments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchAccountDocuments

- **Auth**: `options.BasicAuth`
- **Signature**: `FetchAccountDocuments(FetchAccountDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `AccountDocument`
- **Error**: `ApiException<FetchAccountDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAccountDocumentsRequest` | `src/Curlec/Requests/PartnerDocuments/FetchAccountDocumentsRequest.cs` |
| `AccountDocument` | `src/Curlec/Models/AccountDocument.cs` |
| `FetchAccountDocumentsError` | `src/Curlec/Errors/FetchAccountDocumentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchStakeholderDocuments

- **Auth**: `options.BasicAuth`
- **Signature**: `FetchStakeholderDocuments(FetchStakeholderDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `StakeholderId`
- **Returns**: `StakeholderDocument`
- **Error**: `ApiException<FetchStakeholderDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchStakeholderDocumentsRequest` | `src/Curlec/Requests/PartnerDocuments/FetchStakeholderDocumentsRequest.cs` |
| `StakeholderDocument` | `src/Curlec/Models/StakeholderDocument.cs` |
| `FetchStakeholderDocumentsError` | `src/Curlec/Errors/FetchStakeholderDocumentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UploadAccountDocuments

- **Auth**: `options.BasicAuth`
- **Signature**: `UploadAccountDocuments(UploadAccountDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `AccountDocument`
- **Error**: `ApiException<UploadAccountDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAccountDocumentsRequest` | `src/Curlec/Requests/PartnerDocuments/UploadAccountDocumentsRequest.cs` |
| `DocumentType` | `src/Curlec/Models/Enums/DocumentType.cs` |
| `AccountDocument` | `src/Curlec/Models/AccountDocument.cs` |
| `UploadAccountDocumentsError` | `src/Curlec/Errors/UploadAccountDocumentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UploadStakeholderDocuments

- **Auth**: `options.BasicAuth`
- **Signature**: `UploadStakeholderDocuments(UploadStakeholderDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `StakeholderId`
- **Returns**: `StakeholderDocument`
- **Error**: `ApiException<UploadStakeholderDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadStakeholderDocumentsRequest` | `src/Curlec/Requests/PartnerDocuments/UploadStakeholderDocumentsRequest.cs` |
| `DocumentType1` | `src/Curlec/Models/Enums/DocumentType1.cs` |
| `StakeholderDocument` | `src/Curlec/Models/StakeholderDocument.cs` |
| `UploadStakeholderDocumentsError` | `src/Curlec/Errors/UploadStakeholderDocumentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

