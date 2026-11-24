<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsetdiscrepancy — operations

Accessor: `client.testsetdiscrepancy` · Source: `src/resources/testsetdiscrepancy.ts` · 2 operations · Request and error types: namespace `Testsetdiscrepancy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTestSetDiscrepancyReport

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTestSetDiscrepancyReport(request: Testsetdiscrepancy.CreateTestSetDiscrepancyReportRequestParams, options?: RequestOptions): ApiPromise<CreateTestSetDiscrepancyReportResponse, Testsetdiscrepancy.CreateTestSetDiscrepancyReportError>`
- **Wire**: `POST /testsets/{testSetId}/testsetdiscrepancy`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateTestSetDiscrepancyReportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsetdiscrepancy.CreateTestSetDiscrepancyReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsetdiscrepancy.CreateTestSetDiscrepancyReportRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |
| `body` | `body` | `CreateTestSetDiscrepancyReportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTestSetDiscrepancyReportRequest` | `createTestSetDiscrepancyReportRequestSchema` | `src/models/create-test-set-discrepancy-report-request.ts` |
| `CreateTestSetDiscrepancyReportResponse` | `createTestSetDiscrepancyReportResponseSchema` | `src/models/create-test-set-discrepancy-report-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeTestSetDiscrepancyReport

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeTestSetDiscrepancyReport(request: Testsetdiscrepancy.DescribeTestSetDiscrepancyReportRequestParams, options?: RequestOptions): ApiPromise<DescribeTestSetDiscrepancyReportResponse, Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError>`
- **Wire**: `GET /testsetdiscrepancy/{testSetDiscrepancyReportId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeTestSetDiscrepancyReportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsetdiscrepancy.DescribeTestSetDiscrepancyReportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetDiscrepancyReportId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeTestSetDiscrepancyReportResponse` | `describeTestSetDiscrepancyReportResponseSchema` | `src/models/describe-test-set-discrepancy-report-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

