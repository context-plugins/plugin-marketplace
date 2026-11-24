<!-- Generated file — do not edit; regenerated with the SDK. -->

# Anomalies — operations

Accessor: `client.anomalies` · Source: `src/resources/anomalies.ts` · 2 operations · Request and error types: namespace `Anomalies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeAnomaly

- **Signature**: `describeAnomaly(request: Anomalies.DescribeAnomalyRequest, options?: RequestOptions): ApiPromise<DescribeAnomalyResponse, Anomalies.DescribeAnomalyError>`
- **Wire**: `GET /anomalies/{Id}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeAnomalyResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Anomalies.DescribeAnomalyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Anomalies.DescribeAnomalyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | `Id` | `string` | yes |
| `accountId` | `query` | `AccountId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeAnomalyResponse` | `describeAnomalyResponseSchema` | `src/models/describe-anomaly-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listAnomaliesForInsight

- **Signature**: `listAnomaliesForInsight(request: Anomalies.ListAnomaliesForInsightRequest, options?: RequestOptions): ApiPromise<ListAnomaliesForInsightResponse, Anomalies.ListAnomaliesForInsightError>`
- **Wire**: `POST /anomalies/insight/{InsightId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListAnomaliesForInsightResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Anomalies.ListAnomaliesForInsightError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Anomalies.ListAnomaliesForInsightRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `insightId` | `path` | `InsightId` | `string` | yes |
| `body` | `body` | — | `AnomaliesInsightRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomaliesInsightRequest` | `anomaliesInsightRequestSchema` | `src/models/anomalies-insight-request.ts` |
| `ListAnomaliesForInsightResponse` | `listAnomaliesForInsightResponseSchema` | `src/models/list-anomalies-for-insight-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

