<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policy — operations

Accessor: `client.policy` · Source: `src/resources/policy.ts` · 6 operations · Request and error types: namespace `Policy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createResourcePolicy

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createResourcePolicy(request: Policy.CreateResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<CreateResourcePolicyResponse, Policy.CreateResourcePolicyError>`
- **Wire**: `POST /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResourcePolicyResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Policy.CreateResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policy.CreateResourcePolicyRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `CreateResourcePolicyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateResourcePolicyRequest` | `createResourcePolicyRequestSchema` | `src/models/create-resource-policy-request.ts` |
| `CreateResourcePolicyResponse` | `createResourcePolicyResponseSchema` | `src/models/create-resource-policy-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### createResourcePolicyStatement

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createResourcePolicyStatement(request: Policy.CreateResourcePolicyStatementRequestParams, options?: RequestOptions): ApiPromise<CreateResourcePolicyStatementResponse, Policy.CreateResourcePolicyStatementError>`
- **Wire**: `POST /policy/{resourceArn}/statements`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResourcePolicyStatementResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Policy.CreateResourcePolicyStatementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policy.CreateResourcePolicyStatementRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `CreateResourcePolicyStatementRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateResourcePolicyStatementRequest` | `createResourcePolicyStatementRequestSchema` | `src/models/create-resource-policy-statement-request.ts` |
| `CreateResourcePolicyStatementResponse` | `createResourcePolicyStatementResponseSchema` | `src/models/create-resource-policy-statement-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteResourcePolicy

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteResourcePolicy(request: Policy.DeleteResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<DeleteResourcePolicyResponse, Policy.DeleteResourcePolicyError>`
- **Wire**: `DELETE /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteResourcePolicyResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Policy.DeleteResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policy.DeleteResourcePolicyRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `DeleteResourcePolicyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteResourcePolicyRequest` | `deleteResourcePolicyRequestSchema` | `src/models/delete-resource-policy-request.ts` |
| `DeleteResourcePolicyResponse` | `deleteResourcePolicyResponseSchema` | `src/models/delete-resource-policy-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |

### deleteResourcePolicyStatement

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteResourcePolicyStatement(request: Policy.DeleteResourcePolicyStatementRequestParams, options?: RequestOptions): ApiPromise<DeleteResourcePolicyStatementResponse, Policy.DeleteResourcePolicyStatementError>`
- **Wire**: `DELETE /policy/{resourceArn}/statements/{statementId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteResourcePolicyStatementResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Policy.DeleteResourcePolicyStatementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policy.DeleteResourcePolicyStatementRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `statementId` | `path` | `string` | yes |
| `body` | `body` | `DeleteResourcePolicyStatementRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteResourcePolicyStatementRequest` | `deleteResourcePolicyStatementRequestSchema` | `src/models/delete-resource-policy-statement-request.ts` |
| `DeleteResourcePolicyStatementResponse` | `deleteResourcePolicyStatementResponseSchema` | `src/models/delete-resource-policy-statement-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |

### describeResourcePolicy

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeResourcePolicy(request: Policy.DescribeResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<DescribeResourcePolicyResponse, Policy.DescribeResourcePolicyError>`
- **Wire**: `GET /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeResourcePolicyResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Policy.DescribeResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policy.DescribeResourcePolicyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeResourcePolicyResponse` | `describeResourcePolicyResponseSchema` | `src/models/describe-resource-policy-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |

### updateResourcePolicy

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateResourcePolicy(request: Policy.UpdateResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<UpdateResourcePolicyResponse, Policy.UpdateResourcePolicyError>`
- **Wire**: `PUT /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateResourcePolicyResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Policy.UpdateResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Policy.UpdateResourcePolicyRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `UpdateResourcePolicyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateResourcePolicyRequest` | `updateResourcePolicyRequestSchema` | `src/models/update-resource-policy-request.ts` |
| `UpdateResourcePolicyResponse` | `updateResourcePolicyResponseSchema` | `src/models/update-resource-policy-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

