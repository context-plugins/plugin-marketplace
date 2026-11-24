<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entities — operations

Accessor: `client.Entities` · Source: `src/UiPath/Api/Entities.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEntityRecord

- **Server group**: `DefaultUiPathDataServiceEntitiesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateEntityRecord(CreateEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityName`, `Body`
- **Returns**: `EntityRecord`
- **Error**: `ApiException<CreateEntityRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEntityRecordRequest` | `src/UiPath/Requests/Entities/CreateEntityRecordRequest.cs` |
| `EntityRecord` | `src/UiPath/Models/EntityRecord.cs` |
| `CreateEntityRecordError` | `src/UiPath/Errors/CreateEntityRecordError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### DeleteEntityRecord

- **Server group**: `DefaultUiPathDataServiceEntitiesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteEntityRecord(DeleteEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityName`, `RecordId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEntityRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEntityRecordRequest` | `src/UiPath/Requests/Entities/DeleteEntityRecordRequest.cs` |
| `DeleteEntityRecordError` | `src/UiPath/Errors/DeleteEntityRecordError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### GetEntityRecord

- **Server group**: `DefaultUiPathDataServiceEntitiesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetEntityRecord(GetEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityName`, `RecordId`
- **Query params (wire ← C#)**: `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `EntityRecord`
- **Error**: `ApiException<GetEntityRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEntityRecordRequest` | `src/UiPath/Requests/Entities/GetEntityRecordRequest.cs` |
| `EntityRecord` | `src/UiPath/Models/EntityRecord.cs` |
| `GetEntityRecordError` | `src/UiPath/Errors/GetEntityRecordError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### ListEntityRecords

- **Server group**: `DefaultUiPathDataServiceEntitiesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListEntityRecords(ListEntityRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityName`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$top` ← `Top`, `$skip` ← `Skip`, `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `EntityRecordCollection`
- **Error**: `ApiException<ListEntityRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEntityRecordsRequest` | `src/UiPath/Requests/Entities/ListEntityRecordsRequest.cs` |
| `EntityRecordCollection` | `src/UiPath/Models/EntityRecordCollection.cs` |
| `ListEntityRecordsError` | `src/UiPath/Errors/ListEntityRecordsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### QueryEntityRecords

- **Server group**: `DefaultUiPathDataServiceEntitiesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `QueryEntityRecords(QueryEntityRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityName`, `Body`
- **Returns**: `EntityRecordCollection`
- **Error**: `ApiException<QueryEntityRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryEntityRecordsRequest` | `src/UiPath/Requests/Entities/QueryEntityRecordsRequest.cs` |
| `EntityQueryRequest` | `src/UiPath/Models/EntityQueryRequest.cs` |
| `EntityRecordCollection` | `src/UiPath/Models/EntityRecordCollection.cs` |
| `QueryEntityRecordsError` | `src/UiPath/Errors/QueryEntityRecordsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### UpdateEntityRecord

- **Server group**: `DefaultUiPathDataServiceEntitiesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateEntityRecord(UpdateEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntityName`, `RecordId`, `Body`
- **Returns**: `EntityRecord`
- **Error**: `ApiException<UpdateEntityRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEntityRecordRequest` | `src/UiPath/Requests/Entities/UpdateEntityRecordRequest.cs` |
| `EntityRecord` | `src/UiPath/Models/EntityRecord.cs` |
| `UpdateEntityRecordError` | `src/UiPath/Errors/UpdateEntityRecordError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

