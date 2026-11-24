<!-- Generated file — do not edit; regenerated with the SDK. -->

# EpicWorkflowApi — operations

Accessor: `client.epicWorkflowApi` · Source: `src/resources/epic-workflow-api.ts` · 1 operation · Request and error types: namespace `EpicWorkflowApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEpicWorkflow

- **Signature**: `getEpicWorkflow(options?: RequestOptions): ApiPromise<EpicWorkflow, EpicWorkflowApi.GetEpicWorkflowError>`
- **Wire**: `GET /api/v3/epic-workflow`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicWorkflow`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EpicWorkflowApi.GetEpicWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicWorkflow` | `epicWorkflowSchema` | `src/models/epic-workflow.ts` |

