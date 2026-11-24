<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnalyticsExperimental — operations

Accessor: `client.analytics_experimental` · Source: `paid/apis/analytics_experimental.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics_experimental.execute_analytics_query

- **Route**: `POST /experimental/analytics/query`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def execute_analytics_query(authorization: str, *, body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `AnalyticsQueryResponse`
- **Returns (raw)**: `ApiResult[AnalyticsQueryResponse, ExecuteAnalyticsQueryErrorBody]`
- **Error**: `ExecuteAnalyticsQueryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 408, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsQueryRequest` | `paid/models/analytics_query_request.py` |
| `AnalyticsQueryRequestDict` | `paid/models/analytics_query_request.py` |
| `AnalyticsQueryResponse` | `paid/models/analytics_query_response.py` |
| `ExecuteAnalyticsQueryErrorBody` | `paid/errors/execute_analytics_query_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.analytics_experimental.get_analytics_schema

- **Route**: `GET /experimental/analytics/schema`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_analytics_schema(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `AnalyticsSchemaResponse`
- **Returns (raw)**: `ApiResult[AnalyticsSchemaResponse, GetAnalyticsSchemaErrorBody]`
- **Error**: `GetAnalyticsSchemaErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsSchemaResponse` | `paid/models/analytics_schema_response.py` |
| `GetAnalyticsSchemaErrorBody` | `paid/errors/get_analytics_schema_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.analytics_experimental.get_signals_metadata

- **Route**: `GET /experimental/analytics/signals/metadata`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_signals_metadata(authorization: str, *, signal_name: str | None = None, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `signal_name` — query `signalName` · `from_date` — query `fromDate` · `to_date` — query `toDate` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SignalsMetadataResponse`
- **Returns (raw)**: `ApiResult[SignalsMetadataResponse, GetSignalsMetadataErrorBody]`
- **Error**: `GetSignalsMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignalsMetadataResponse` | `paid/models/signals_metadata_response.py` |
| `GetSignalsMetadataErrorBody` | `paid/errors/get_signals_metadata_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

