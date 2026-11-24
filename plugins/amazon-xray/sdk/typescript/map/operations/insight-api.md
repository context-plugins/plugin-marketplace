<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightApi — operations

Accessor: `client.insightApi` · Source: `src/resources/insight-api.ts` · 1 operation · Request and error types: namespace `InsightApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInsight

- **Signature**: `getInsight(request?: InsightApi.GetInsightRequest, options?: RequestOptions): ApiPromise<GetInsightResult, InsightApi.GetInsightError>`
- **Wire**: `POST /Insight`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetInsightResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `InsightApi.GetInsightError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetInsightRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightRequest` | `insightRequestSchema` | `src/models/insight-request.ts` |
| `GetInsightResult` | `getInsightResultSchema` | `src/models/get-insight-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

