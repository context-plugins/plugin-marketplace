# ActiveassuranceMeasurements — operations

Accessor: `client.ActiveassuranceMeasurements` · Source: `Api/ActiveassuranceMeasurements.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MeasurementServiceBatchCreateMeasurements
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/measurements:batchCreate` (Default)
- **Signature**: `MeasurementServiceBatchCreateMeasurements(string orgId, BatchCreateMeasurementsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchCreateMeasurementsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceBatchCreateServerClientMeasurementPairs
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs:batchCreate` (Default)
- **Signature**: `MeasurementServiceBatchCreateServerClientMeasurementPairs(string orgId, BatchCreateServerClientMeasurementPairsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchCreateServerClientMeasurementPairsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceBatchDeleteMeasurements
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/measurements:batchDelete` (Default)
- **Signature**: `MeasurementServiceBatchDeleteMeasurements(string orgId, BatchDeleteMeasurementsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchDeleteMeasurementsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceBatchDeleteServerClientMeasurementPairs
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs:batchDelete` (Default)
- **Signature**: `MeasurementServiceBatchDeleteServerClientMeasurementPairs(string orgId, BatchDeleteServerClientMeasurementPairsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchDeleteServerClientMeasurementPairsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceBatchUpdateMeasurements
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/measurements:batchUpdate` (Default)
- **Signature**: `MeasurementServiceBatchUpdateMeasurements(string orgId, BatchUpdateMeasurementsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchUpdateMeasurementsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceBatchUpdateServerClientMeasurementPairs
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs:batchUpdate` (Default)
- **Signature**: `MeasurementServiceBatchUpdateServerClientMeasurementPairs(string orgId, BatchUpdateServerClientMeasurementPairsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchUpdateServerClientMeasurementPairsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceCreateMeasurement
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/measurements` (Default)
- **Signature**: `MeasurementServiceCreateMeasurement(string orgId, bool? validateOnly, bool? strict, Measurement measurement, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - `strict` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`, `strict` ← `strict`
- **Returns**: `Measurement`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceCreateServerClientMeasurementPair
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs` (Default)
- **Signature**: `MeasurementServiceCreateServerClientMeasurementPair(string orgId, bool? validateOnly, bool? strict, ServerClientMeasurementPair serverClientMeasurementPair, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - `strict` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`, `strict` ← `strict`
- **Returns**: `ServerClientMeasurementPair`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceDeleteMeasurement
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/measurements/{measurement_id}` (Default)
- **Signature**: `MeasurementServiceDeleteMeasurement(string orgId, string measurementId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceDeleteServerClientMeasurementPair
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs/{server_client_measurement_pair_id}` (Default)
- **Signature**: `MeasurementServiceDeleteServerClientMeasurementPair(string orgId, string serverClientMeasurementPairId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceGetMeasurement
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/measurements/{measurement_id}` (Default)
- **Signature**: `MeasurementServiceGetMeasurement(string orgId, string measurementId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Measurement`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceGetServerClientMeasurementPair
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs/{server_client_measurement_pair_id}` (Default)
- **Signature**: `MeasurementServiceGetServerClientMeasurementPair(string orgId, string serverClientMeasurementPairId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ServerClientMeasurementPair`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceGroupMeasurements
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/measurements:group` (Default)
- **Signature**: `MeasurementServiceGroupMeasurements(string orgId, string? by, string? filter, string? orderBy, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`by` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `by` ← `by`, `filter` ← `filter`, `order_by` ← `orderBy`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `GroupMeasurementsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### MeasurementServiceListMeasurements
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/measurements` (Default)
- **Signature**: `MeasurementServiceListMeasurements(string orgId, int? page, int? limit, string? filter, string? orderBy, DateTimeOffset? healthWindowStartTime, DateTimeOffset? healthWindowEndTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`page` … `healthWindowEndTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`, `health_window_start_time` ← `healthWindowStartTime`, `health_window_end_time` ← `healthWindowEndTime`
- **Returns**: `ListMeasurementsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### MeasurementServiceListServerClientMeasurementPairs
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs` (Default)
- **Signature**: `MeasurementServiceListServerClientMeasurementPairs(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListServerClientMeasurementPairsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### MeasurementServiceUpdateMeasurement
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/measurements/{measurement_id}` (Default)
- **Signature**: `MeasurementServiceUpdateMeasurement(string orgId, string measurementId, string? updateMask, bool? validateOnly, Measurement measurement, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `Measurement`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementServiceUpdateServerClientMeasurementPair
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/server_client_measurement_pairs/{server_client_measurement_pair_id}` (Default)
- **Signature**: `MeasurementServiceUpdateServerClientMeasurementPair(string orgId, string serverClientMeasurementPairId, string? updateMask, bool? validateOnly, ServerClientMeasurementPair serverClientMeasurementPair, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `ServerClientMeasurementPair`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
