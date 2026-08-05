# Statuses — operations

Accessor: `client.Statuses` · Source: `Api/Statuses.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetActiveStatuses
- **HTTP**: `GET /activestatus` (Default)
- **Notes**: Gets active statuses for multiple devices. The timestamps are in the time zone configured in the Greenbyte Platform. Use the useUtc flag to get timestamps in UTC. _🔐 This endpoint requires the Statuses endpoint permission._ _This request can also be made using the POST method, with a request to `activestatus.json` and a JSON request body instead of query parameters._
- **Signature**: `GetActiveStatuses(IReadOnlyList<int> deviceIds, IReadOnlyList<StatusCategory>? category, int? lostProductionSignalId, IReadOnlyList<string>? fields, IReadOnlyList<string>? sortBy, ContractType1? contractType, bool? sortAsc = false, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`category` … `contractType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `sortAsc` = false, `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `category` ← `category`, `lostProductionSignalId` ← `lostProductionSignalId`, `fields` ← `fields`, `sortBy` ← `sortBy`, `sortAsc` ← `sortAsc`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`, `contractType` ← `contractType`
- **Returns**: `IReadOnlyList<StatusItem>`
- **Error**: `SdkException<GetActiveStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetActivestatus400Error1(out Activestatus400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetActivestatus429Error1(out Activestatus429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetDataPerCategory
- **HTTP**: `GET /datapercategory` (Default)
- **Notes**: Gets signal data aggregated per availability contract category. _🔐 This endpoint requires the Data and Statuses endpoint permissions._ _This request can also be made using the POST method, with a request to `datapercategory.json` and a JSON request body instead of query parameters._
- **Signature**: `GetDataPerCategory(IReadOnlyList<int> deviceIds, int dataSignalId, DateTimeOffset timestampStart, DateTimeOffset timestampEnd, AggregateMode? aggregate, IReadOnlyList<StatusCategory>? category, ContractType1? contractType, int? aggregateLevel = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `aggregate` — nullable, no default → **must pass explicitly**
  - `category` — nullable, no default → **must pass explicitly**
  - `contractType` — nullable, no default → **must pass explicitly**
  - defaults: `aggregateLevel` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `dataSignalId` ← `dataSignalId`, `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `aggregate` ← `aggregate`, `aggregateLevel` ← `aggregateLevel`, `category` ← `category`, `contractType` ← `contractType`
- **Returns**: `DatapercategoryResponse1`
- **Error**: `SdkException<GetDataPerCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetDatapercategory400Error1(out Datapercategory400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetDatapercategory429Error1(out Datapercategory429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStatuses
- **HTTP**: `GET /status` (Default)
- **Notes**: Gets statuses for multiple devices during the given time period. The timestamps are in the time zone configured in the Greenbyte Platform. Use the useUtc flag to get timestamps in UTC. _🔐 This endpoint requires the Statuses endpoint permission._ _This request can also be made using the POST method, with a request to `status.json` and a JSON request body instead of query parameters._
- **Signature**: `GetStatuses(IReadOnlyList<int> deviceIds, DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<StatusCategory>? category, int? lostProductionSignalId, IReadOnlyList<string>? fields, IReadOnlyList<string>? sortBy, ContractType1? contractType, bool? sortAsc = false, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`category` … `contractType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `sortAsc` = false, `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `category` ← `category`, `lostProductionSignalId` ← `lostProductionSignalId`, `fields` ← `fields`, `sortBy` ← `sortBy`, `sortAsc` ← `sortAsc`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`, `contractType` ← `contractType`
- **Returns**: `IReadOnlyList<StatusItem>`
- **Error**: `SdkException<GetStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetStatus400Error1(out Status400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetStatus429Error1(out Status429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
