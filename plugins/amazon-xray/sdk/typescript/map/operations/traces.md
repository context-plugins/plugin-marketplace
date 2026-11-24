<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.traces` · Source: `src/resources/traces.ts` · 2 operations · Request and error types: namespace `Traces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchGetTraces

- **Signature**: `batchGetTraces(request?: Traces.BatchGetTracesRequest, options?: RequestOptions): ApiPromise<BatchGetTracesResult, Traces.BatchGetTracesError>`
- **Wire**: `POST /Traces`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchGetTracesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Traces.BatchGetTracesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.BatchGetTracesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TracesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TracesRequest` | `tracesRequestSchema` | `src/models/traces-request.ts` |
| `BatchGetTracesResult` | `batchGetTracesResultSchema` | `src/models/batch-get-traces-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

### getTraceSummaries

- **Signature**: `getTraceSummaries(request?: Traces.GetTraceSummariesRequest, options?: RequestOptions): ApiPromise<GetTraceSummariesResult, Traces.GetTraceSummariesError>`
- **Wire**: `POST /TraceSummaries`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTraceSummariesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Traces.GetTraceSummariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceSummariesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TraceSummariesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceSummariesRequest` | `traceSummariesRequestSchema` | `src/models/trace-summaries-request.ts` |
| `GetTraceSummariesResult` | `getTraceSummariesResultSchema` | `src/models/get-trace-summaries-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

