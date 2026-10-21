<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkflowTemplates — operations

Accessor: `client.workflowTemplates` · Source: `src/resources/workflow-templates.ts` · 3 operations · Request and error types: namespace `WorkflowTemplates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWorkflowTemplate

- **Signature**: `createWorkflowTemplate(request: WorkflowTemplates.CreateWorkflowTemplateRequest, options?: RequestOptions): ApiPromise<WorkflowTemplateOutput, WorkflowTemplates.CreateWorkflowTemplateError>`
- **Wire**: `POST /api/v2/templates`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkflowTemplateOutput`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `WorkflowTemplates.CreateWorkflowTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowTemplates.CreateWorkflowTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWorkflowTemplateInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWorkflowTemplateInput` | `createWorkflowTemplateInputSchema` | `src/models/create-workflow-template-input.ts` |
| `WorkflowTemplateOutput` | `workflowTemplateOutputSchema` | `src/models/workflow-template-output.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteWorkflowTemplate

- **Signature**: `deleteWorkflowTemplate(request: WorkflowTemplates.DeleteWorkflowTemplateRequest, options?: RequestOptions): ApiPromise<undefined, WorkflowTemplates.DeleteWorkflowTemplateError>`
- **Wire**: `DELETE /api/v2/templates/{templateKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `WorkflowTemplates.DeleteWorkflowTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowTemplates.DeleteWorkflowTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `templateKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getWorkflowTemplates

- **Signature**: `getWorkflowTemplates(request: WorkflowTemplates.GetWorkflowTemplatesRequest, options?: RequestOptions): ApiPromise<WorkflowTemplatesListingOutputRep, WorkflowTemplates.GetWorkflowTemplatesError>`
- **Wire**: `GET /api/v2/templates`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkflowTemplatesListingOutputRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `WorkflowTemplates.GetWorkflowTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowTemplates.GetWorkflowTemplatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `summary` | `query` | `boolean` | no |
| `search` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplatesListingOutputRep` | `workflowTemplatesListingOutputRepSchema` | `src/models/workflow-templates-listing-output-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

