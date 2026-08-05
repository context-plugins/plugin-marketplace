# ObservabilityTsdbQuery — operations

Accessor: `client.ObservabilityTsdbQuery` · Source: `Api/ObservabilityTsdbQuery.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TsdbQuery
- **HTTP**: `POST /insights/api/v1/orgs/{org_id}/tsdb/query` (Default)
- **Notes**: This API endpoint can be used to query TSDB and fetch data.
- **Signature**: `TsdbQuery(string orgId, IReadOnlyList<TsdbPostBody> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TsdbResponse`
- **Error**: `SdkException<TsdbQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TsdbSeriesQuery
- **HTTP**: `POST /insights/api/v1/orgs/{org_id}/tsdb/series` (Default)
- **Notes**: This API endpoint can be used to query TSDB and fetch available series.
- **Signature**: `TsdbSeriesQuery(string orgId, IReadOnlyList<TsdbSeriesRequest> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TsdbSeriesResponse`
- **Error**: `SdkException<TsdbSeriesQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetTsdbSeriesResponse(out TsdbSeriesResponse)` [400, 415] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
