<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workflows — operations

Accessor: `client.workflows` · Source: `src/resources/workflows.ts` · 2 operations · Request and error types: namespace `Workflows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWorkflow

- **Signature**: `getWorkflow(request: Workflows.GetWorkflowRequest, options?: RequestOptions): ApiPromise<Workflow, Workflows.GetWorkflowError>`
- **Wire**: `GET /api/v3/workflows/{workflow-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Workflow`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Workflows.GetWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workflows.GetWorkflowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowPublicId` | `path` | `workflow-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Workflow` | `workflowSchema` | `src/models/workflow.ts` |

### listWorkflows

- **Signature**: `listWorkflows(options?: RequestOptions): ApiPromise<Workflow[], Workflows.ListWorkflowsError>`
- **Wire**: `GET /api/v3/workflows`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Workflow[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Workflows.ListWorkflowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Workflow` | `workflowSchema` | `src/models/workflow.ts` |

