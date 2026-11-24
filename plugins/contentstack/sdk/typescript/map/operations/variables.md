<!-- Generated file — do not edit; regenerated with the SDK. -->

# Variables — operations

Accessor: `client.variables` · Source: `src/resources/variables.ts` · 2 operations · Request and error types: namespace `Variables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVariable

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createVariable(request: Variables.CreateVariableRequestParams, options?: RequestOptions): ApiPromise<Variable, Variables.CreateVariableError>`
- **Wire**: `POST /v1/organizations/{organization_uid}/projects/{project_uid}/variables`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Variable`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Variables.CreateVariableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Variables.CreateVariableRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `body` | `body` | — | `CreateVariableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVariableRequest` | `createVariableRequestSchema` | `src/models/create-variable-request.ts` |
| `Variable` | `variableSchema` | `src/models/variable.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllVariables

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllVariables(request: Variables.GetAllVariablesRequest, options?: RequestOptions): ApiPromise<VariableList, Variables.GetAllVariablesError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/variables`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VariableList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Variables.GetAllVariablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Variables.GetAllVariablesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VariableList` | `variableListSchema` | `src/models/variable-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

