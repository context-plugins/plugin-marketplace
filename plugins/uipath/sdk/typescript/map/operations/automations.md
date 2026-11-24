<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `src/resources/automations.ts` · 7 operations · Request and error types: namespace `Automations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAutomationIdea

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAutomationIdea(request: Automations.CreateAutomationIdeaRequestParams, options?: RequestOptions): ApiPromise<Automation, Automations.CreateAutomationIdeaError>`
- **Wire**: `POST /automations`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Automation`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.CreateAutomationIdeaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [400] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.CreateAutomationIdeaRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAutomationIdeaRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAutomationIdeaRequest` | `createAutomationIdeaRequestSchema` | `src/models/create-automation-idea-request.ts` |
| `Automation` | `automationSchema` | `src/models/automation.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### deleteAutomation

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAutomation(request: Automations.DeleteAutomationRequest, options?: RequestOptions): ApiPromise<undefined, Automations.DeleteAutomationError>`
- **Wire**: `DELETE /automations/{automationId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.DeleteAutomationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [404] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.DeleteAutomationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `automationId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### getAutomation

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAutomation(request: Automations.GetAutomationRequest, options?: RequestOptions): ApiPromise<Automation, Automations.GetAutomationError>`
- **Wire**: `GET /automations/{automationId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Automation`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.GetAutomationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [404] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.GetAutomationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `automationId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Automation` | `automationSchema` | `src/models/automation.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### listAutomationCollaborators

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAutomationCollaborators(request: Automations.ListAutomationCollaboratorsRequest, options?: RequestOptions): ApiPromise<AutomationsCollaboratorsResponse, Automations.ListAutomationCollaboratorsError>`
- **Wire**: `GET /automations/{automationId}/collaborators`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationsCollaboratorsResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.ListAutomationCollaboratorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [404] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.ListAutomationCollaboratorsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `automationId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationsCollaboratorsResponse` | `automationsCollaboratorsResponseSchema` | `src/models/automations-collaborators-response.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### listAutomations

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAutomations(request?: Automations.ListAutomationsRequest, options?: RequestOptions): ApiPromise<AutomationListResponse, Automations.ListAutomationsError>`
- **Wire**: `GET /automations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.ListAutomationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [403] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.ListAutomationsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `phase` | `query` | `string` | no | — |
| `status` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationListResponse` | `automationListResponseSchema` | `src/models/automation-list-response.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### removeAutomationCollaborator

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `removeAutomationCollaborator(request: Automations.RemoveAutomationCollaboratorRequest, options?: RequestOptions): ApiPromise<undefined, Automations.RemoveAutomationCollaboratorError>`
- **Wire**: `DELETE /automations/{automationId}/collaborators`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.RemoveAutomationCollaboratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [404] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.RemoveAutomationCollaboratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `automationId` | `path` | `number` | yes |
| `userId` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### updateAutomation

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAutomation(request: Automations.UpdateAutomationRequestParams, options?: RequestOptions): ApiPromise<Automation, Automations.UpdateAutomationError>`
- **Wire**: `PATCH /automations/{automationId}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Automation`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Automations.UpdateAutomationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [400] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi3"` [404] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automations.UpdateAutomationRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `automationId` | `path` | `number` | yes |
| `body` | `body` | `UpdateAutomationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAutomationRequest` | `updateAutomationRequestSchema` | `src/models/update-automation-request.ts` |
| `Automation` | `automationSchema` | `src/models/automation.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

