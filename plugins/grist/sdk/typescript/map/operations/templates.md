<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `src/resources/templates.ts` · 2 operations · Request types: namespace `Templates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTemplate

- **Signature**: `getTemplate(request: Templates.GetTemplateRequest, options?: RequestOptions): ApiPromise<DocWithWorkspace, ApiError>`
- **Wire**: `GET /templates/{templateId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocWithWorkspace`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Templates.GetTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `templateId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocWithWorkspace` | `docWithWorkspaceSchema` | `src/models/doc-with-workspace.ts` |

### listTemplates

- **Signature**: `listTemplates(options?: RequestOptions): ApiPromise<WorkspaceWithDocsAndDomain[], ApiError>`
- **Wire**: `GET /templates`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceWithDocsAndDomain[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceWithDocsAndDomain` | `workspaceWithDocsAndDomainSchema` | `src/models/workspace-with-docs-and-domain.ts` |

