<!-- Generated file — do not edit; regenerated with the SDK. -->

# Execution — operations

Accessor: `client.execution` · Source: `src/resources/execution.ts` · 2 operations · Request and error types: namespace `Execution`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### executeProcess

- **Signature**: `executeProcess(request: Execution.ExecuteProcessRequest, options?: RequestOptions): ApiPromise<ExecutionRequestResult, Execution.ExecuteProcessError>`
- **Wire**: `POST /ExecutionRequest`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExecutionRequestResult`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Execution.ExecuteProcessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Execution.ExecuteProcessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ExecutionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutionRequest` | `executionRequestSchema` | `src/models/execution-request.ts` |
| `ExecutionRequestResult` | `executionRequestResultSchema` | `src/models/execution-request-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### queryExecutionRecords

- **Signature**: `queryExecutionRecords(request: Execution.QueryExecutionRecordsRequest, options?: RequestOptions): ApiPromise<ExecutionRecordQueryResult, Execution.QueryExecutionRecordsError>`
- **Wire**: `POST /ExecutionRecord/query`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExecutionRecordQueryResult`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Execution.QueryExecutionRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Execution.QueryExecutionRecordsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryRequest` | `queryRequestSchema` | `src/models/query-request.ts` |
| `ExecutionRecordQueryResult` | `executionRecordQueryResultSchema` | `src/models/execution-record-query-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

