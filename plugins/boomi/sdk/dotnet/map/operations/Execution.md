<!-- Generated file — do not edit; regenerated with the SDK. -->

# Execution — operations

Accessor: `client.Execution` · Source: `src/Boomi/Api/Execution.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExecuteProcess

- **Auth**: `options.BasicAuth`
- **Signature**: `ExecuteProcess(ExecuteProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExecutionRequestResult`
- **Error**: `ApiException<ExecuteProcessError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExecuteProcessRequest` | `src/Boomi/Requests/Execution/ExecuteProcessRequest.cs` |
| `ExecutionRequest` | `src/Boomi/Models/ExecutionRequest.cs` |
| `ExecutionRequestResult` | `src/Boomi/Models/ExecutionRequestResult.cs` |
| `ExecuteProcessError` | `src/Boomi/Errors/ExecuteProcessError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### QueryExecutionRecords

- **Auth**: `options.BasicAuth`
- **Signature**: `QueryExecutionRecords(QueryExecutionRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExecutionRecordQueryResult`
- **Error**: `ApiException<QueryExecutionRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryExecutionRecordsRequest` | `src/Boomi/Requests/Execution/QueryExecutionRecordsRequest.cs` |
| `QueryRequest` | `src/Boomi/Models/QueryRequest.cs` |
| `ExecutionRecordQueryResult` | `src/Boomi/Models/ExecutionRecordQueryResult.cs` |
| `QueryExecutionRecordsError` | `src/Boomi/Errors/QueryExecutionRecordsError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

