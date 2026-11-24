<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testexecutions — operations

Accessor: `client.testexecutions` · Source: `src/resources/testexecutions.ts` · 5 operations · Request and error types: namespace `Testexecutions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeTestExecution

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeTestExecution(request: Testexecutions.DescribeTestExecutionRequestParams, options?: RequestOptions): ApiPromise<DescribeTestExecutionResponse, Testexecutions.DescribeTestExecutionError>`
- **Wire**: `GET /testexecutions/{testExecutionId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeTestExecutionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testexecutions.DescribeTestExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testexecutions.DescribeTestExecutionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testExecutionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeTestExecutionResponse` | `describeTestExecutionResponseSchema` | `src/models/describe-test-execution-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### getTestExecutionArtifactsUrl

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTestExecutionArtifactsUrl(request: Testexecutions.GetTestExecutionArtifactsUrlRequestParams, options?: RequestOptions): ApiPromise<GetTestExecutionArtifactsUrlResponse, Testexecutions.GetTestExecutionArtifactsUrlError>`
- **Wire**: `GET /testexecutions/{testExecutionId}/artifacturl`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTestExecutionArtifactsUrlResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testexecutions.GetTestExecutionArtifactsUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testexecutions.GetTestExecutionArtifactsUrlRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testExecutionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTestExecutionArtifactsUrlResponse` | `getTestExecutionArtifactsUrlResponseSchema` | `src/models/get-test-execution-artifacts-url-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listTestExecutionResultItems

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestExecutionResultItems(request: Testexecutions.ListTestExecutionResultItemsRequestParams, options?: RequestOptions): ApiPromise<ListTestExecutionResultItemsResponse, Testexecutions.ListTestExecutionResultItemsError>`
- **Wire**: `POST /testexecutions/{testExecutionId}/results`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListTestExecutionResultItemsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testexecutions.ListTestExecutionResultItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testexecutions.ListTestExecutionResultItemsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testExecutionId` | `path` | `string` | yes |
| `body` | `body` | `ListTestExecutionResultItemsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTestExecutionResultItemsRequest` | `listTestExecutionResultItemsRequestSchema` | `src/models/list-test-execution-result-items-request.ts` |
| `ListTestExecutionResultItemsResponse` | `listTestExecutionResultItemsResponseSchema` | `src/models/list-test-execution-result-items-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listTestExecutions

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestExecutions(request?: Testexecutions.ListTestExecutionsRequestParams, options?: RequestOptions): ApiPromise<ListTestExecutionsResponse, Testexecutions.ListTestExecutionsError>`
- **Wire**: `POST /testexecutions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListTestExecutionsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testexecutions.ListTestExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testexecutions.ListTestExecutionsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListTestExecutionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTestExecutionsRequest` | `listTestExecutionsRequestSchema` | `src/models/list-test-executions-request.ts` |
| `ListTestExecutionsResponse` | `listTestExecutionsResponseSchema` | `src/models/list-test-executions-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startTestExecution

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startTestExecution(request: Testexecutions.StartTestExecutionRequestParams, options?: RequestOptions): ApiPromise<StartTestExecutionResponse, Testexecutions.StartTestExecutionError>`
- **Wire**: `POST /testsets/{testSetId}/testexecutions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartTestExecutionResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testexecutions.StartTestExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testexecutions.StartTestExecutionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetId` | `path` | `string` | yes |
| `body` | `body` | `StartTestExecutionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartTestExecutionRequest` | `startTestExecutionRequestSchema` | `src/models/start-test-execution-request.ts` |
| `StartTestExecutionResponse` | `startTestExecutionResponseSchema` | `src/models/start-test-execution-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

