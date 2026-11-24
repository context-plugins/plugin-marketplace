<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsJira — operations

Accessor: `client.integrationsJira` · Source: `src/resources/integrations-jira.ts` · 3 operations · Request and error types: namespace `IntegrationsJira`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### jiraIntegrationControllerRemove

- **Signature**: `jiraIntegrationControllerRemove(request: IntegrationsJira.JiraIntegrationControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/integrations/jira/{token}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `IntegrationsJira.JiraIntegrationControllerRemoveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `token` | `path` | `string` | yes |

### jiraIntegrationControllerRemoveOrganizationConnection

- **Signature**: `jiraIntegrationControllerRemoveOrganizationConnection(request: IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError>`
- **Wire**: `DELETE /v1/integrations/jira/organization/{token}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `token` | `path` | `string` | yes |

### jiraIntegrationControllerRemoveProjectConnection

- **Signature**: `jiraIntegrationControllerRemoveProjectConnection(request: IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError>`
- **Wire**: `DELETE /v1/integrations/jira/project/{token}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `token` | `path` | `string` | yes |

