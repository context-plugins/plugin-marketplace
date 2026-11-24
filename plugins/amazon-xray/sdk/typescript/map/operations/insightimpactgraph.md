<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightimpactgraph — operations

Accessor: `client.insightimpactgraph` · Source: `src/resources/insightimpactgraph.ts` · 1 operation · Request and error types: namespace `Insightimpactgraph`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInsightImpactGraph

- **Signature**: `getInsightImpactGraph(request?: Insightimpactgraph.GetInsightImpactGraphRequest, options?: RequestOptions): ApiPromise<GetInsightImpactGraphResult, Insightimpactgraph.GetInsightImpactGraphError>`
- **Wire**: `POST /InsightImpactGraph`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetInsightImpactGraphResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Insightimpactgraph.GetInsightImpactGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insightimpactgraph.GetInsightImpactGraphRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightImpactGraphRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightImpactGraphRequest` | `insightImpactGraphRequestSchema` | `src/models/insight-impact-graph-request.ts` |
| `GetInsightImpactGraphResult` | `getInsightImpactGraphResultSchema` | `src/models/get-insight-impact-graph-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

