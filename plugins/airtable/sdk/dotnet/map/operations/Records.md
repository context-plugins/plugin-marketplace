<!-- Generated file — do not edit; regenerated with the SDK. -->

# Records — operations

Accessor: `client.Records` · Source: `src/Airtable/Api/Records.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRecords

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateRecords(CreateRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `Body`
- **Returns**: `ResponseModel`
- **Error**: `ApiException<CreateRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecordsRequest` | `src/Airtable/Requests/Records/CreateRecordsRequest.cs` |
| `RequestModel` | `src/Airtable/Models/RequestModel.cs` |
| `ResponseModel` | `src/Airtable/Models/ResponseModel.cs` |
| `CreateRecordsError` | `src/Airtable/Errors/CreateRecordsError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### DeleteRecord

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteRecord(DeleteRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`
- **Returns**: `RecordDeleted`
- **Error**: `ApiException<DeleteRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRecordRequest` | `src/Airtable/Requests/Records/DeleteRecordRequest.cs` |
| `RecordDeleted` | `src/Airtable/Models/RecordDeleted.cs` |
| `DeleteRecordError` | `src/Airtable/Errors/DeleteRecordError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### GetRecord

- **Auth**: `options.BearerAuth`
- **Signature**: `GetRecord(GetRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`
- **Query params (wire ← C#)**: `returnFieldsByFieldId` ← `ReturnFieldsByFieldId`
- **Returns**: `Record`
- **Error**: `ApiException<GetRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecordRequest` | `src/Airtable/Requests/Records/GetRecordRequest.cs` |
| `Record` | `src/Airtable/Models/Record.cs` |
| `GetRecordError` | `src/Airtable/Errors/GetRecordError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### ListRecords

- **Auth**: `options.BearerAuth`
- **Signature**: `ListRecords(ListRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`
- **Query params (wire ← C#)**: `fields[]` ← `Fields`, `filterByFormula` ← `FilterByFormula`, `maxRecords` ← `MaxRecords`, `pageSize` ← `PageSize`, `sort` ← `Sort`, `view` ← `View`, `cellFormat` ← `CellFormat`, `timeZone` ← `TimeZone`, `userLocale` ← `UserLocale`, `returnFieldsByFieldId` ← `ReturnFieldsByFieldId`, `offset` ← `Offset`
- **Returns**: `RecordList`
- **Error**: `ApiException<ListRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecordsRequest` | `src/Airtable/Requests/Records/ListRecordsRequest.cs` |
| `Sort` | `src/Airtable/Models/Sort.cs` |
| `CellFormat` | `src/Airtable/Models/Enums/CellFormat.cs` |
| `RecordList` | `src/Airtable/Models/RecordList.cs` |
| `ListRecordsError` | `src/Airtable/Errors/ListRecordsError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### ReplaceRecord

- **Auth**: `options.BearerAuth`
- **Signature**: `ReplaceRecord(ReplaceRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`, `Body`
- **Returns**: `Record`
- **Error**: `ApiException<ReplaceRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceRecordRequest` | `src/Airtable/Requests/Records/ReplaceRecordRequest.cs` |
| `RecordIdRequest1` | `src/Airtable/Models/RecordIdRequest1.cs` |
| `Record` | `src/Airtable/Models/Record.cs` |
| `ReplaceRecordError` | `src/Airtable/Errors/ReplaceRecordError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### UpdateRecord

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateRecord(UpdateRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableIdOrName`, `RecordId`, `Body`
- **Returns**: `Record`
- **Error**: `ApiException<UpdateRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRecordRequest` | `src/Airtable/Requests/Records/UpdateRecordRequest.cs` |
| `RecordIdRequest` | `src/Airtable/Models/RecordIdRequest.cs` |
| `Record` | `src/Airtable/Models/Record.cs` |
| `UpdateRecordError` | `src/Airtable/Errors/UpdateRecordError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

