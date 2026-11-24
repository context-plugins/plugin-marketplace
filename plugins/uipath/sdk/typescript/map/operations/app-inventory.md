<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppInventory — operations

Accessor: `client.appInventory` · Source: `src/resources/app-inventory.ts` · 3 operations · Request and error types: namespace `AppInventory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkUpsertAppInventory

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `bulkUpsertAppInventory(request: AppInventory.BulkUpsertAppInventoryRequest, options?: RequestOptions): ApiPromise<AppInventoryListResponse, AppInventory.BulkUpsertAppInventoryError>`
- **Wire**: `PUT /appinventory`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppInventoryListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `AppInventory.BulkUpsertAppInventoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [400] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppInventory.BulkUpsertAppInventoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AppinventoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppinventoryRequest` | `appinventoryRequestSchema` | `src/models/appinventory-request.ts` |
| `AppInventoryListResponse` | `appInventoryListResponseSchema` | `src/models/app-inventory-list-response.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### deleteApplication

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteApplication(request: AppInventory.DeleteApplicationRequest, options?: RequestOptions): ApiPromise<undefined, AppInventory.DeleteApplicationError>`
- **Wire**: `DELETE /appinventory/{applicationId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `AppInventory.DeleteApplicationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"errorResponseUiPathAutomationHubAppInventoryApi2"` [404] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppInventory.DeleteApplicationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

### listAppInventory

- **Server**: `defaultUiPathAutomationHubAppInventoryApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAppInventory(request?: AppInventory.ListAppInventoryRequest, options?: RequestOptions): ApiPromise<AppInventoryListResponse, AppInventory.ListAppInventoryError>`
- **Wire**: `GET /appinventory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppInventoryListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `AppInventory.ListAppInventoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathAutomationHubAppInventoryApi"` [401] `ErrorResponseUiPathAutomationHubAppInventoryApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppInventory.ListAppInventoryRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppInventoryListResponse` | `appInventoryListResponseSchema` | `src/models/app-inventory-list-response.ts` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `errorResponseUiPathAutomationHubAppInventoryApiSchema` | `src/models/error-response-ui-path-automation-hub-app-inventory-api.ts` |

