<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 8 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelTraceRetrieval

- **Signature**: `cancelTraceRetrieval(request?: Operations.CancelTraceRetrievalRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, Operations.CancelTraceRetrievalError>`
- **Wire**: `POST /CancelTraceRetrieval`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.CancelTraceRetrievalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.CancelTraceRetrievalRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelTraceRetrievalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelTraceRetrievalRequest` | `cancelTraceRetrievalRequestSchema` | `src/models/cancel-trace-retrieval-request.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### getIndexingRules

- **Signature**: `getIndexingRules(request?: Operations.GetIndexingRulesRequestParams, options?: RequestOptions): ApiPromise<GetIndexingRulesResult, Operations.GetIndexingRulesError>`
- **Wire**: `POST /GetIndexingRules`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetIndexingRulesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.GetIndexingRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetIndexingRulesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetIndexingRulesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIndexingRulesRequest` | `getIndexingRulesRequestSchema` | `src/models/get-indexing-rules-request.ts` |
| `GetIndexingRulesResult` | `getIndexingRulesResultSchema` | `src/models/get-indexing-rules-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### getRetrievedTracesGraph

- **Signature**: `getRetrievedTracesGraph(request?: Operations.GetRetrievedTracesGraphRequestParams, options?: RequestOptions): ApiPromise<GetRetrievedTracesGraphResult, Operations.GetRetrievedTracesGraphError>`
- **Wire**: `POST /GetRetrievedTracesGraph`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetRetrievedTracesGraphResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.GetRetrievedTracesGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetRetrievedTracesGraphRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetRetrievedTracesGraphRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetRetrievedTracesGraphRequest` | `getRetrievedTracesGraphRequestSchema` | `src/models/get-retrieved-traces-graph-request.ts` |
| `GetRetrievedTracesGraphResult` | `getRetrievedTracesGraphResultSchema` | `src/models/get-retrieved-traces-graph-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### getTraceSegmentDestination

- **Signature**: `getTraceSegmentDestination(options?: RequestOptions): ApiPromise<GetTraceSegmentDestinationResult, Operations.GetTraceSegmentDestinationError>`
- **Wire**: `POST /GetTraceSegmentDestination`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTraceSegmentDestinationResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.GetTraceSegmentDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTraceSegmentDestinationResult` | `getTraceSegmentDestinationResultSchema` | `src/models/get-trace-segment-destination-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### listRetrievedTraces

- **Signature**: `listRetrievedTraces(request?: Operations.ListRetrievedTracesRequestParams, options?: RequestOptions): ApiPromise<ListRetrievedTracesResult, Operations.ListRetrievedTracesError>`
- **Wire**: `POST /ListRetrievedTraces`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListRetrievedTracesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.ListRetrievedTracesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListRetrievedTracesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListRetrievedTracesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRetrievedTracesRequest` | `listRetrievedTracesRequestSchema` | `src/models/list-retrieved-traces-request.ts` |
| `ListRetrievedTracesResult` | `listRetrievedTracesResultSchema` | `src/models/list-retrieved-traces-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### startTraceRetrieval

- **Signature**: `startTraceRetrieval(request?: Operations.StartTraceRetrievalRequestParams, options?: RequestOptions): ApiPromise<StartTraceRetrievalResult, Operations.StartTraceRetrievalError>`
- **Wire**: `POST /StartTraceRetrieval`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartTraceRetrievalResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.StartTraceRetrievalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartTraceRetrievalRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StartTraceRetrievalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartTraceRetrievalRequest` | `startTraceRetrievalRequestSchema` | `src/models/start-trace-retrieval-request.ts` |
| `StartTraceRetrievalResult` | `startTraceRetrievalResultSchema` | `src/models/start-trace-retrieval-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### updateIndexingRule

- **Signature**: `updateIndexingRule(request?: Operations.UpdateIndexingRuleRequestParams, options?: RequestOptions): ApiPromise<UpdateIndexingRuleResult, Operations.UpdateIndexingRuleError>`
- **Wire**: `POST /UpdateIndexingRule`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateIndexingRuleResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.UpdateIndexingRuleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UpdateIndexingRuleRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateIndexingRuleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateIndexingRuleRequest` | `updateIndexingRuleRequestSchema` | `src/models/update-indexing-rule-request.ts` |
| `UpdateIndexingRuleResult` | `updateIndexingRuleResultSchema` | `src/models/update-indexing-rule-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### updateTraceSegmentDestination

- **Signature**: `updateTraceSegmentDestination(request?: Operations.UpdateTraceSegmentDestinationRequestParams, options?: RequestOptions): ApiPromise<UpdateTraceSegmentDestinationResult, Operations.UpdateTraceSegmentDestinationError>`
- **Wire**: `POST /UpdateTraceSegmentDestination`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateTraceSegmentDestinationResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Operations.UpdateTraceSegmentDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UpdateTraceSegmentDestinationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateTraceSegmentDestinationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTraceSegmentDestinationRequest` | `updateTraceSegmentDestinationRequestSchema` | `src/models/update-trace-segment-destination-request.ts` |
| `UpdateTraceSegmentDestinationResult` | `updateTraceSegmentDestinationResultSchema` | `src/models/update-trace-segment-destination-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

