<!-- Generated file — do not edit; regenerated with the SDK. -->

# Imports — operations

Accessor: `client.imports` · Source: `src/resources/imports.ts` · 4 operations · Request and error types: namespace `Imports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteImport

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteImport(request: Imports.DeleteImportRequestParams, options?: RequestOptions): ApiPromise<DeleteImportResponse, Imports.DeleteImportError>`
- **Wire**: `DELETE /imports/{importId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteImportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Imports.DeleteImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.DeleteImportRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |
| `body` | `body` | `DeleteImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteImportRequest` | `deleteImportRequestSchema` | `src/models/delete-import-request.ts` |
| `DeleteImportResponse` | `deleteImportResponseSchema` | `src/models/delete-import-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeImport

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeImport(request: Imports.DescribeImportRequestParams, options?: RequestOptions): ApiPromise<DescribeImportResponse, Imports.DescribeImportError>`
- **Wire**: `GET /imports/{importId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeImportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Imports.DescribeImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.DescribeImportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeImportResponse` | `describeImportResponseSchema` | `src/models/describe-import-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listImports

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listImports(request?: Imports.ListImportsRequestParams, options?: RequestOptions): ApiPromise<ListImportsResponse, Imports.ListImportsError>`
- **Wire**: `POST /imports`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListImportsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Imports.ListImportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.ListImportsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListImportsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListImportsRequest` | `listImportsRequestSchema` | `src/models/list-imports-request.ts` |
| `ListImportsResponse` | `listImportsResponseSchema` | `src/models/list-imports-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startImport

- **Server**: `defaultAmazonLexModelBuildingV2BotsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startImport(request?: Imports.StartImportRequestParams, options?: RequestOptions): ApiPromise<StartImportResponse, Imports.StartImportError>`
- **Wire**: `PUT /imports`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartImportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Imports.StartImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Imports.StartImportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StartImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartImportRequest` | `startImportRequestSchema` | `src/models/start-import-request.ts` |
| `StartImportResponse` | `startImportResponseSchema` | `src/models/start-import-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

