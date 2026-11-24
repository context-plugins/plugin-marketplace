<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.exports` · Source: `src/resources/exports.ts` · 6 operations · Request and error types: namespace `Exports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createExport

- **Server**: `defaultAmazonLexModelBuildingV2ExportsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createExport(request?: Exports.CreateExportRequestParams, options?: RequestOptions): ApiPromise<CreateExportResponse, Exports.CreateExportError>`
- **Wire**: `PUT /exports`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateExportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Exports.CreateExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.CreateExportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateExportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateExportRequest` | `createExportRequestSchema` | `src/models/create-export-request.ts` |
| `CreateExportResponse` | `createExportResponseSchema` | `src/models/create-export-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### deleteExport

- **Server**: `defaultAmazonLexModelBuildingV2ExportsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteExport(request: Exports.DeleteExportRequestParams, options?: RequestOptions): ApiPromise<DeleteExportResponse, Exports.DeleteExportError>`
- **Wire**: `DELETE /exports/{exportId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteExportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Exports.DeleteExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"preconditionFailedException"` [412] `PreconditionFailedException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.DeleteExportRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exportId` | `path` | `string` | yes |
| `body` | `body` | `DeleteExportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteExportRequest` | `deleteExportRequestSchema` | `src/models/delete-export-request.ts` |
| `DeleteExportResponse` | `deleteExportResponseSchema` | `src/models/delete-export-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `PreconditionFailedException` | `preconditionFailedExceptionSchema` | `src/models/precondition-failed-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeExport

- **Server**: `defaultAmazonLexModelBuildingV2ExportsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `describeExport(request: Exports.DescribeExportRequestParams, options?: RequestOptions): ApiPromise<DescribeExportResponse, Exports.DescribeExportError>`
- **Wire**: `GET /exports/{exportId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeExportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Exports.DescribeExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.DescribeExportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exportId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeExportResponse` | `describeExportResponseSchema` | `src/models/describe-export-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### getExport

- **Server**: `defaultAmazonLexModelBuildingV2ExportsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getExport(options?: RequestOptions): ApiPromise<GetExportResponse, Exports.GetExportError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /exports`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetExportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Exports.GetExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetExportResponse` | `getExportResponseSchema` | `src/models/get-export-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### listExports

- **Server**: `defaultAmazonLexModelBuildingV2ExportsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExports(request?: Exports.ListExportsRequestParams, options?: RequestOptions): ApiPromise<ListExportsResponse, Exports.ListExportsError>`
- **Wire**: `POST /exports`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListExportsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Exports.ListExportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.ListExportsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListExportsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListExportsRequest` | `listExportsRequestSchema` | `src/models/list-exports-request.ts` |
| `ListExportsResponse` | `listExportsResponseSchema` | `src/models/list-exports-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateExport

- **Server**: `defaultAmazonLexModelBuildingV2ExportsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateExport(request: Exports.UpdateExportRequestParams, options?: RequestOptions): ApiPromise<UpdateExportResponse, Exports.UpdateExportError>`
- **Wire**: `PUT /exports/{exportId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateExportResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Exports.UpdateExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exports.UpdateExportRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exportId` | `path` | `string` | yes |
| `body` | `body` | `UpdateExportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateExportRequest` | `updateExportRequestSchema` | `src/models/update-export-request.ts` |
| `UpdateExportResponse` | `updateExportResponseSchema` | `src/models/update-export-response.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

