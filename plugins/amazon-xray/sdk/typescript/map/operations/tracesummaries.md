<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracesummaries — operations

Accessor: `client.tracesummaries` · Source: `src/resources/tracesummaries.ts` · 1 operation · Request and error types: namespace `Tracesummaries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTraceSummaries2

- **Signature**: `getTraceSummaries2(request?: Tracesummaries.GetTraceSummaries2Request, options?: RequestOptions): ApiPromise<GetTraceSummariesResult, Tracesummaries.GetTraceSummaries2Error>`
- **Wire**: `POST /TraceSummaries`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTraceSummariesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Tracesummaries.GetTraceSummaries2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracesummaries.GetTraceSummaries2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TraceSummariesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceSummariesRequest` | `traceSummariesRequestSchema` | `src/models/trace-summaries-request.ts` |
| `GetTraceSummariesResult` | `getTraceSummariesResultSchema` | `src/models/get-trace-summaries-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

