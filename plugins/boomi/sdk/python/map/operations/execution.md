<!-- Generated file — do not edit; regenerated with the SDK. -->

# Execution — operations

Accessor: `client.execution` · Source: `boomi/apis/execution.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.execution.execute_process

- **Route**: `POST /ExecutionRequest`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def execute_process(body: ExecutionRequest | ExecutionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ExecutionRequestResult`
- **Returns (raw)**: `ApiResult[ExecutionRequestResult, ExecuteProcessErrorBody]`
- **Error**: `ExecuteProcessErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExecutionRequest` | `boomi/models/execution_request.py` |
| `ExecutionRequestDict` | `boomi/models/execution_request.py` |
| `ExecutionRequestResult` | `boomi/models/execution_request_result.py` |
| `ExecuteProcessErrorBody` | `boomi/errors/execute_process_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.execution.query_execution_records

- **Route**: `POST /ExecutionRecord/query`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def query_execution_records(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ExecutionRecordQueryResult`
- **Returns (raw)**: `ApiResult[ExecutionRecordQueryResult, QueryExecutionRecordsErrorBody]`
- **Error**: `QueryExecutionRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryRequest` | `boomi/models/query_request.py` |
| `QueryRequestDict` | `boomi/models/query_request.py` |
| `ExecutionRecordQueryResult` | `boomi/models/execution_record_query_result.py` |
| `QueryExecutionRecordsErrorBody` | `boomi/errors/query_execution_records_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

