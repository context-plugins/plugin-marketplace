<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracegraph — operations

Accessor: `client.tracegraph` · Source: `src/resources/tracegraph.ts` · 1 operation · Request and error types: namespace `Tracegraph`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTraceGraph

- **Signature**: `getTraceGraph(request?: Tracegraph.GetTraceGraphRequest, options?: RequestOptions): ApiPromise<GetTraceGraphResult, Tracegraph.GetTraceGraphError>`
- **Wire**: `POST /TraceGraph`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTraceGraphResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Tracegraph.GetTraceGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracegraph.GetTraceGraphRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TraceGraphRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceGraphRequest` | `traceGraphRequestSchema` | `src/models/trace-graph-request.ts` |
| `GetTraceGraphResult` | `getTraceGraphResultSchema` | `src/models/get-trace-graph-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

