<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallRecords — operations

Accessor: `client.CallRecords` · Source: `src/CallNode/Api/CallRecords.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCallRecord

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetCallRecord(GetCallRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CallId`
- **Returns**: `ApiV1CallsResponse1`
- **Error**: `ApiException<GetCallRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCallRecordRequest` | `src/CallNode/Requests/CallRecords/GetCallRecordRequest.cs` |
| `ApiV1CallsResponse1` | `src/CallNode/Models/ApiV1CallsResponse1.cs` |
| `GetCallRecordError` | `src/CallNode/Errors/GetCallRecordError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListCallRecords

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListCallRecords(ListCallRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `number` ← `Number`, `direction` ← `Direction`, `status` ← `Status`, `since` ← `Since`, `until` ← `Until`, `before` ← `Before`, `limit` ← `Limit`
- **Returns**: `ApiV1CallsResponse`
- **Error**: `ApiException<ListCallRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCallRecordsRequest` | `src/CallNode/Requests/CallRecords/ListCallRecordsRequest.cs` |
| `Direction` | `src/CallNode/Models/Enums/Direction.cs` |
| `Status` | `src/CallNode/Models/Enums/Status.cs` |
| `ApiV1CallsResponse` | `src/CallNode/Models/ApiV1CallsResponse.cs` |
| `ListCallRecordsError` | `src/CallNode/Errors/ListCallRecordsError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

