<!-- Generated file — do not edit; regenerated with the SDK. -->

# Samplingstatisticsummaries — operations

Accessor: `client.samplingstatisticsummaries` · Source: `src/resources/samplingstatisticsummaries.ts` · 1 operation · Request and error types: namespace `Samplingstatisticsummaries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSamplingStatisticSummaries

- **Signature**: `getSamplingStatisticSummaries(request?: Samplingstatisticsummaries.GetSamplingStatisticSummariesRequest, options?: RequestOptions): ApiPromise<GetSamplingStatisticSummariesResult, Samplingstatisticsummaries.GetSamplingStatisticSummariesError>`
- **Wire**: `POST /SamplingStatisticSummaries`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetSamplingStatisticSummariesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Samplingstatisticsummaries.GetSamplingStatisticSummariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Samplingstatisticsummaries.GetSamplingStatisticSummariesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SamplingStatisticSummariesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SamplingStatisticSummariesRequest` | `samplingStatisticSummariesRequestSchema` | `src/models/sampling-statistic-summaries-request.ts` |
| `GetSamplingStatisticSummariesResult` | `getSamplingStatisticSummariesResultSchema` | `src/models/get-sampling-statistic-summaries-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

