<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataHub — operations

Accessor: `client.DataHub` · Source: `src/DoiT/Api/DataHub.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDatahubDataset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateDatahubDataset(CreateDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DatahubV1DatasetsResponse1`
- **Error**: `ApiException<CreateDatahubDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDatahubDatasetRequest` | `src/DoiT/Requests/DataHub/CreateDatahubDatasetRequest.cs` |
| `DatahubV1DatasetsRequest` | `src/DoiT/Models/DatahubV1DatasetsRequest.cs` |
| `DatahubV1DatasetsResponse1` | `src/DoiT/Models/DatahubV1DatasetsResponse1.cs` |
| `CreateDatahubDatasetError` | `src/DoiT/Errors/CreateDatahubDatasetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DatahubEvents

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DatahubEvents(DatahubEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DatahubV1EventsResponse`
- **Error**: `ApiException<DatahubEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatahubEventsRequest` | `src/DoiT/Requests/DataHub/DatahubEventsRequest.cs` |
| `DatahubV1EventsRequest` | `src/DoiT/Models/DatahubV1EventsRequest.cs` |
| `DatahubV1EventsResponse` | `src/DoiT/Models/DatahubV1EventsResponse.cs` |
| `DatahubEventsError` | `src/DoiT/Errors/DatahubEventsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DatahubEventsCsvFile

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DatahubEventsCsvFile(DatahubEventsCsvFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DatahubV1CsvUploadResponse`
- **Error**: `ApiException<DatahubEventsCsvFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatahubEventsCsvFileRequest` | `src/DoiT/Requests/DataHub/DatahubEventsCsvFileRequest.cs` |
| `DatahubV1CsvUploadResponse` | `src/DoiT/Models/DatahubV1CsvUploadResponse.cs` |
| `DatahubEventsCsvFileError` | `src/DoiT/Errors/DatahubEventsCsvFileError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DatahubImportProviderRecords

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DatahubImportProviderRecords(DatahubImportProviderRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DatahubV1ImportResponse`
- **Error**: `ApiException<DatahubImportProviderRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatahubImportProviderRecordsRequest` | `src/DoiT/Requests/DataHub/DatahubImportProviderRecordsRequest.cs` |
| `DatahubV1ImportRequest` | `src/DoiT/Models/DatahubV1ImportRequest.cs` |
| `DatahubV1ImportResponse` | `src/DoiT/Models/DatahubV1ImportResponse.cs` |
| `DatahubImportProviderRecordsError` | `src/DoiT/Errors/DatahubImportProviderRecordsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteDatahubDataset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteDatahubDataset(DeleteDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `DatahubV1DatasetsResponse2`
- **Error**: `ApiException<DeleteDatahubDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatahubDatasetRequest` | `src/DoiT/Requests/DataHub/DeleteDatahubDatasetRequest.cs` |
| `DatahubV1DatasetsResponse2` | `src/DoiT/Models/DatahubV1DatasetsResponse2.cs` |
| `DeleteDatahubDatasetError` | `src/DoiT/Errors/DeleteDatahubDatasetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteDatahubDatasets

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteDatahubDatasets(DeleteDatahubDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DatahubV1DatasetsResponse2`
- **Error**: `ApiException<DeleteDatahubDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatahubDatasetsRequest` | `src/DoiT/Requests/DataHub/DeleteDatahubDatasetsRequest.cs` |
| `DatahubV1DatasetsRequest1` | `src/DoiT/Models/DatahubV1DatasetsRequest1.cs` |
| `DatahubV1DatasetsResponse2` | `src/DoiT/Models/DatahubV1DatasetsResponse2.cs` |
| `DeleteDatahubDatasetsError` | `src/DoiT/Errors/DeleteDatahubDatasetsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteDatahubEventsByFilter

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteDatahubEventsByFilter(DeleteDatahubEventsByFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DatahubV1EventsDeleteResponse`
- **Error**: `ApiException<DeleteDatahubEventsByFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDatahubEventsByFilterRequest` | `src/DoiT/Requests/DataHub/DeleteDatahubEventsByFilterRequest.cs` |
| `DatahubV1EventsDeleteRequest` | `src/DoiT/Models/DatahubV1EventsDeleteRequest.cs` |
| `DatahubV1EventsDeleteResponse` | `src/DoiT/Models/DatahubV1EventsDeleteResponse.cs` |
| `DeleteDatahubEventsByFilterError` | `src/DoiT/Errors/DeleteDatahubEventsByFilterError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ExportDatahubDatasetRecords

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ExportDatahubDatasetRecords(ExportDatahubDatasetRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `StartTime`, `EndTime`
- **Query params (wire ← C#)**: `startTime` ← `StartTime`, `endTime` ← `EndTime`, `format` ← `Format`, `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ExportDatahubDatasetRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportDatahubDatasetRecordsRequest` | `src/DoiT/Requests/DataHub/ExportDatahubDatasetRecordsRequest.cs` |
| `Format` | `src/DoiT/Models/Enums/Format.cs` |
| `ExportDatahubDatasetRecordsError` | `src/DoiT/Errors/ExportDatahubDatasetRecordsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetDatahubDataset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetDatahubDataset(GetDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `DatahubV1DatasetsResponse4`
- **Error**: `ApiException<GetDatahubDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDatahubDatasetRequest` | `src/DoiT/Requests/DataHub/GetDatahubDatasetRequest.cs` |
| `DatahubV1DatasetsResponse4` | `src/DoiT/Models/DatahubV1DatasetsResponse4.cs` |
| `GetDatahubDatasetError` | `src/DoiT/Errors/GetDatahubDatasetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListDatahubDatasets

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListDatahubDatasets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DatahubV1DatasetsResponse`
- **Error**: `ApiException<ListDatahubDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsResponse` | `src/DoiT/Models/DatahubV1DatasetsResponse.cs` |
| `ListDatahubDatasetsError` | `src/DoiT/Errors/ListDatahubDatasetsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateDatahubDataset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateDatahubDataset(UpdateDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `Body`
- **Returns**: `DatahubV1DatasetsResponse1`
- **Error**: `ApiException<UpdateDatahubDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDatahubDatasetRequest` | `src/DoiT/Requests/DataHub/UpdateDatahubDatasetRequest.cs` |
| `DatahubV1DatasetsRequest2` | `src/DoiT/Models/DatahubV1DatasetsRequest2.cs` |
| `DatahubV1DatasetsResponse1` | `src/DoiT/Models/DatahubV1DatasetsResponse1.cs` |
| `UpdateDatahubDatasetError` | `src/DoiT/Errors/UpdateDatahubDatasetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

