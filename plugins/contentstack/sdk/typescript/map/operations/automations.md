<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `src/resources/automations.ts` · 4 operations · Request and error types: namespace `Automations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateAutomation

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `activateAutomation(request: Automations.ActivateAutomationRequest, options?: RequestOptions): ApiPromise<Automation, Automations.ActivateAutomationError>`
- **Wire**: `PUT /v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/activate`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Automation`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Automations.ActivateAutomationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.ActivateAutomationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `automationUid` | `path` | `automation_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Automation` | `automationSchema` | `src/models/automation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deactivateAutomation

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deactivateAutomation(request: Automations.DeactivateAutomationRequest, options?: RequestOptions): ApiPromise<Automation, Automations.DeactivateAutomationError>`
- **Wire**: `PUT /v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/deactivate`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Automation`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Automations.DeactivateAutomationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.DeactivateAutomationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `automationUid` | `path` | `automation_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Automation` | `automationSchema` | `src/models/automation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllAutomations

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAutomations(request: Automations.GetAllAutomationsRequest, options?: RequestOptions): ApiPromise<AutomationList, Automations.GetAllAutomationsError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/automations`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Automations.GetAllAutomationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.GetAllAutomationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationList` | `automationListSchema` | `src/models/automation-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAutomation

- **Server**: `defaultContentstackAutomateManagementAccountsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAutomation(request: Automations.GetAutomationRequest, options?: RequestOptions): ApiPromise<Automation, Automations.GetAutomationError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Automation`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Automations.GetAutomationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.GetAutomationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `automationUid` | `path` | `automation_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Automation` | `automationSchema` | `src/models/automation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

