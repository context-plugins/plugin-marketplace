<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsetgenerations — operations

Accessor: `client.testsetgenerations` · Source: `src/resources/testsetgenerations.ts` · 2 operations · Request and error types: namespace `Testsetgenerations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeTestSetGeneration

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeTestSetGeneration(request: Testsetgenerations.DescribeTestSetGenerationRequestParams, options?: RequestOptions): ApiPromise<DescribeTestSetGenerationResponse, Testsetgenerations.DescribeTestSetGenerationError>`
- **Wire**: `GET /testsetgenerations/{testSetGenerationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeTestSetGenerationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsetgenerations.DescribeTestSetGenerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsetgenerations.DescribeTestSetGenerationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `testSetGenerationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeTestSetGenerationResponse` | `describeTestSetGenerationResponseSchema` | `src/models/describe-test-set-generation-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startTestSetGeneration

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startTestSetGeneration(request?: Testsetgenerations.StartTestSetGenerationRequestParams, options?: RequestOptions): ApiPromise<StartTestSetGenerationResponse, Testsetgenerations.StartTestSetGenerationError>`
- **Wire**: `PUT /testsetgenerations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartTestSetGenerationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Testsetgenerations.StartTestSetGenerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Testsetgenerations.StartTestSetGenerationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StartTestSetGenerationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartTestSetGenerationRequest` | `startTestSetGenerationRequestSchema` | `src/models/start-test-set-generation-request.ts` |
| `StartTestSetGenerationResponse` | `startTestSetGenerationResponseSchema` | `src/models/start-test-set-generation-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

