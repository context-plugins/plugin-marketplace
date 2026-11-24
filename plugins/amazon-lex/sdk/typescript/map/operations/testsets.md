<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsets — operations

Accessor: `client.testsets` · Source: `src/resources/testsets.ts` · 7 operations · Request and error types: namespace `Testsets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTestSetDiscrepancyReport2

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTestSetDiscrepancyReport2(request: Testsets.CreateTestSetDiscrepancyReport2Request, options?: RequestOptions): ApiPromise<CreateTestSetDiscrepancyReportResponse, Testsets.CreateTestSetDiscrepancyReport2Error>`
- **Wire**: `POST /testsets/{testSetId}/testsetdiscrepancy`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateTestSetDiscrepancyReportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.CreateTestSetDiscrepancyReport2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.CreateTestSetDiscrepancyReport2Request` (2):

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

### deleteTestSet

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTestSet(request: Testsets.DeleteTestSetRequestParams, options?: RequestOptions): ApiPromise<string, Testsets.DeleteTestSetError>`
- **Wire**: `DELETE /testsets/{testSetId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.DeleteTestSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.DeleteTestSetRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |
| `body` | `body` | `DeleteTestSetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteTestSetRequest` | `deleteTestSetRequestSchema` | `src/models/delete-test-set-request.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeTestSet

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeTestSet(request: Testsets.DescribeTestSetRequestParams, options?: RequestOptions): ApiPromise<DescribeTestSetResponse, Testsets.DescribeTestSetError>`
- **Wire**: `GET /testsets/{testSetId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeTestSetResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.DescribeTestSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.DescribeTestSetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeTestSetResponse` | `describeTestSetResponseSchema` | `src/models/describe-test-set-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listTestSetRecords

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestSetRecords(request: Testsets.ListTestSetRecordsRequestParams, options?: RequestOptions): ApiPromise<ListTestSetRecordsResponse, Testsets.ListTestSetRecordsError>`
- **Wire**: `POST /testsets/{testSetId}/records`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListTestSetRecordsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.ListTestSetRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.ListTestSetRecordsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |
| `body` | `body` | `ListTestSetRecordsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTestSetRecordsRequest` | `listTestSetRecordsRequestSchema` | `src/models/list-test-set-records-request.ts` |
| `ListTestSetRecordsResponse` | `listTestSetRecordsResponseSchema` | `src/models/list-test-set-records-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listTestSets

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestSets(request?: Testsets.ListTestSetsRequestParams, options?: RequestOptions): ApiPromise<ListTestSetsResponse, Testsets.ListTestSetsError>`
- **Wire**: `POST /testsets`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListTestSetsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.ListTestSetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.ListTestSetsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListTestSetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTestSetsRequest` | `listTestSetsRequestSchema` | `src/models/list-test-sets-request.ts` |
| `ListTestSetsResponse` | `listTestSetsResponseSchema` | `src/models/list-test-sets-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startTestExecution2

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startTestExecution2(request: Testsets.StartTestExecution2Request, options?: RequestOptions): ApiPromise<StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi, Testsets.StartTestExecution2Error>`
- **Wire**: `POST /testsets/{testSetId}/testexecutions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.StartTestExecution2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.StartTestExecution2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |
| `body` | `body` | `StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi` | `startTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiSchema` | `src/models/start-test-execution-request-amazon-lex-model-building-v2-testsets-api.ts` |
| `StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi` | `startTestExecutionResponseAmazonLexModelBuildingV2TestsetsApiSchema` | `src/models/start-test-execution-response-amazon-lex-model-building-v2-testsets-api.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateTestSet

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTestSet(request: Testsets.UpdateTestSetRequestParams, options?: RequestOptions): ApiPromise<UpdateTestSetResponse, Testsets.UpdateTestSetError>`
- **Wire**: `PUT /testsets/{testSetId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateTestSetResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsets.UpdateTestSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsets.UpdateTestSetRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |
| `body` | `body` | `UpdateTestSetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTestSetRequest` | `updateTestSetRequestSchema` | `src/models/update-test-set-request.ts` |
| `UpdateTestSetResponse` | `updateTestSetResponseSchema` | `src/models/update-test-set-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

