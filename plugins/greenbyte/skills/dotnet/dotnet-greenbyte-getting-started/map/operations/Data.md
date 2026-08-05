# Data — operations

Accessor: `client.Data` · Source: `Api/Data.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetData
- **HTTP**: `GET /data` (Default)
- **Notes**: Gets data for multiple devices and data signals in the given resolution. The timestamps are in the time zone configured in the Greenbyte Platform. Use the useUtc flag to get timestamps in UTC for all resolutions other than daily, weekly, monthly and yearly. _🔐 This endpoint requires the Data endpoint permission._ _This request can also be made using the POST method, with a request to `data.json` and a JSON request body instead of query parameters._
- **Signature**: `GetData(IReadOnlyList<int> deviceIds, IReadOnlyList<int> dataSignalIds, DateTimeOffset timestampStart, DateTimeOffset timestampEnd, Resolution? resolution, AggregateMode? aggregate, CalculationMode? calculation, bool? useUtc = false, int? aggregateLevel = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `resolution` — nullable, no default → **must pass explicitly**
  - `aggregate` — nullable, no default → **must pass explicitly**
  - `calculation` — nullable, no default → **must pass explicitly**
  - defaults: `useUtc` = false, `aggregateLevel` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `dataSignalIds` ← `dataSignalIds`, `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `useUtc` ← `useUtc`, `resolution` ← `resolution`, `aggregate` ← `aggregate`, `aggregateLevel` ← `aggregateLevel`, `calculation` ← `calculation`
- **Returns**: `IReadOnlyList<DataItem>`
- **Error**: `SdkException<GetDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetData400Error1(out Data400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetData429Error1(out Data429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

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

### GetDataSignals
- **HTTP**: `GET /datasignals` (Default)
- **Notes**: Gets authorized data signals for one or more devices. _🔐 This endpoint requires the Data endpoint permission._ _This request can also be made using the POST method, with a request to `datasignals.json` and a JSON request body instead of query parameters._
- **Signature**: `GetDataSignals(IReadOnlyList<int>? deviceIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceIds` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`
- **Returns**: `IReadOnlyList<DataSignalItem>`
- **Error**: `SdkException<GetDataSignalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDatasignals400Error1(out Datasignals400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetDatasignals429Error1(out Datasignals429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetHighResData
- **HTTP**: `GET /highresdata` (Default)
- **Notes**: Gets high resolution data for a data signal for each specified device. The timestamps are in UTC. The endpoint returns up to an hour's worth of high resolution data for the provided device IDs and data signal ID. It is possible to request data for up to 10 separate devices and one data signal ID. Timestamp start and end are optional. The default time span returned is the latest hour. If supplied, timestamp start must be within the past 12 hours. Timestamp end will by default be an hour after timestamp start but can be set for shorter intervals. There is no high resolution data available for data signals that are calculated. The data for those signals can be retrieved through the data endpoint. _🔐 This endpoint requires the HighResolution endpoint permission._
- **Signature**: `GetHighResData(IReadOnlyList<int> deviceIds, int dataSignalId, DateTimeOffset? timestampStart, DateTimeOffset? timestampEnd, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestampStart` — nullable, no default → **must pass explicitly**
  - `timestampEnd` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `dataSignalId` ← `dataSignalId`, `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`
- **Returns**: `IReadOnlyList<HighresdataResponse>`
- **Error**: `SdkException<GetHighResDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetHighresdata400Error1(out Highresdata400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetHighresdata429Error1(out Highresdata429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRealTimeData
- **HTTP**: `GET /realtimedata` (Default)
- **Notes**: Gets the most recent data point for each specified device and data signal. The timestamps are in UTC. _🔐 This endpoint requires the Data endpoint permission._ _This request can also be made using the POST method, with a request to `realtimedata.json` and a JSON request body instead of query parameters._
- **Signature**: `GetRealTimeData(IReadOnlyList<int> deviceIds, IReadOnlyList<int> dataSignalIds, AggregateMode? aggregate, CalculationModeRealTime? calculation, int? aggregateLevel = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `aggregate` — nullable, no default → **must pass explicitly**
  - `calculation` — nullable, no default → **must pass explicitly**
  - defaults: `aggregateLevel` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `dataSignalIds` ← `dataSignalIds`, `aggregate` ← `aggregate`, `aggregateLevel` ← `aggregateLevel`, `calculation` ← `calculation`
- **Returns**: `IReadOnlyList<DataRealTimeItem>`
- **Error**: `SdkException<GetRealTimeDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetRealtimedata400Error1(out Realtimedata400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetRealtimedata429Error1(out Realtimedata429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
