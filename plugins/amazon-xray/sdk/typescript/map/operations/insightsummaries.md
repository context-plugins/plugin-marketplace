<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightsummaries — operations

Accessor: `client.insightsummaries` · Source: `src/resources/insightsummaries.ts` · 1 operation · Request and error types: namespace `Insightsummaries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInsightSummaries

- **Signature**: `getInsightSummaries(request?: Insightsummaries.GetInsightSummariesRequest, options?: RequestOptions): ApiPromise<GetInsightSummariesResult, Insightsummaries.GetInsightSummariesError>`
- **Wire**: `POST /InsightSummaries`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetInsightSummariesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Insightsummaries.GetInsightSummariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insightsummaries.GetInsightSummariesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightSummariesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightSummariesRequest` | `insightSummariesRequestSchema` | `src/models/insight-summaries-request.ts` |
| `GetInsightSummariesResult` | `getInsightSummariesResultSchema` | `src/models/get-insight-summaries-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

