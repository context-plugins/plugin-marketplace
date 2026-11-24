<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracesegments — operations

Accessor: `client.tracesegments` · Source: `src/resources/tracesegments.ts` · 1 operation · Request and error types: namespace `Tracesegments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### putTraceSegments

- **Signature**: `putTraceSegments(request?: Tracesegments.PutTraceSegmentsRequest, options?: RequestOptions): ApiPromise<PutTraceSegmentsResult, Tracesegments.PutTraceSegmentsError>`
- **Wire**: `POST /TraceSegments`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutTraceSegmentsResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Tracesegments.PutTraceSegmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracesegments.PutTraceSegmentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TraceSegmentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceSegmentsRequest` | `traceSegmentsRequestSchema` | `src/models/trace-segments-request.ts` |
| `PutTraceSegmentsResult` | `putTraceSegmentsResultSchema` | `src/models/put-trace-segments-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

