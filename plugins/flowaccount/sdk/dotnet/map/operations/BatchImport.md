<!-- Generated file — do not edit; regenerated with the SDK. -->

# BatchImport — operations

Accessor: `client.BatchImport` · Source: `src/FlowAccount/Api/BatchImport.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchImportDeleteCustomTemplate

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportDeleteCustomTemplate(BatchImportDeleteCustomTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportDeleteCustomTemplateRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportDeleteCustomTemplateRequest.cs` |

### BatchImportGenerateBacthIdMetadata

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportGenerateBacthIdMetadata(BatchImportGenerateBacthIdMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `fileName` ← `FileName`
- **Returns**: `BatchImportMetadata`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportGenerateBacthIdMetadataRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportGenerateBacthIdMetadataRequest.cs` |
| `BatchImportMetadata` | `src/FlowAccount/Models/BatchImportMetadata.cs` |

### BatchImportGetBatchS3Data

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportGetBatchS3Data(BatchImportGetBatchS3DataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BatchId`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportGetBatchS3DataRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportGetBatchS3DataRequest.cs` |

### BatchImportGetCustomTemplate

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportGetCustomTemplate(BatchImportGetCustomTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportGetCustomTemplateRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportGetCustomTemplateRequest.cs` |

### BatchImportGetOrgingalFile

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportGetOrgingalFile(BatchImportGetOrgingalFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BatchId`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportGetOrgingalFileRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportGetOrgingalFileRequest.cs` |

### BatchImportGetPresign

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportGetPresign(BatchImportGetPresignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Query params (wire ← C#)**: `id` ← `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportGetPresignRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportGetPresignRequest.cs` |
| `BatchImportPayload` | `src/FlowAccount/Models/BatchImportPayload.cs` |

### BatchImportMarkViewed

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportMarkViewed(BatchImportMarkViewedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Query params (wire ← C#)**: `userId` ← `UserId`, `batchId` ← `BatchId`
- **Returns**: `bool`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportMarkViewedRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportMarkViewedRequest.cs` |

### BatchImportQueryBatch

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportQueryBatch(BatchImportQueryBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Query params (wire ← C#)**: `status` ← `Status`
- **Returns**: `BatchStatus`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportQueryBatchRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportQueryBatchRequest.cs` |
| `BatchImportStatus` | `src/FlowAccount/Models/Enums/BatchImportStatus.cs` |
| `BatchStatus` | `src/FlowAccount/Models/BatchStatus.cs` |

### BatchImportQueryBatchHistory

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportQueryBatchHistory(BatchImportQueryBatchHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BatchHistory`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportQueryBatchHistoryRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportQueryBatchHistoryRequest.cs` |
| `BatchHistory` | `src/FlowAccount/Models/BatchHistory.cs` |

### BatchImportRetrySimpleDocuments

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportRetrySimpleDocuments(BatchImportRetrySimpleDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `bool`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportRetrySimpleDocumentsRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportRetrySimpleDocumentsRequest.cs` |
| `BatchImportRetry` | `src/FlowAccount/Models/BatchImportRetry.cs` |

### BatchImportUpsertCustomTemplate

- **Auth**: `options.Bearer`
- **Signature**: `BatchImportUpsertCustomTemplate(BatchImportUpsertCustomTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportUpsertCustomTemplateRequest` | `src/FlowAccount/Requests/BatchImport/BatchImportUpsertCustomTemplateRequest.cs` |
| `CustomTemplate` | `src/FlowAccount/Models/CustomTemplate.cs` |

