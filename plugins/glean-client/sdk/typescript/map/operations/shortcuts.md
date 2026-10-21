<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shortcuts — operations

Accessor: `client.shortcuts` · Source: `src/resources/shortcuts.ts` · 5 operations · Request and error types: namespace `Shortcuts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createshortcut

- **Signature**: `createshortcut(request: Shortcuts.CreateshortcutRequest, options?: RequestOptions): ApiPromise<CreateShortcutResponse, Shortcuts.CreateshortcutError>`
- **Wire**: `POST /rest/api/v1/createshortcut`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateShortcutResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Shortcuts.CreateshortcutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shortcuts.CreateshortcutRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `CreateShortcutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateShortcutRequest` | `createShortcutRequestSchema` | `src/models/create-shortcut-request.ts` |
| `CreateShortcutResponse` | `createShortcutResponseSchema` | `src/models/create-shortcut-response.ts` |

### deleteshortcut

- **Signature**: `deleteshortcut(request: Shortcuts.DeleteshortcutRequest, options?: RequestOptions): ApiPromise<undefined, Shortcuts.DeleteshortcutError>`
- **Wire**: `POST /rest/api/v1/deleteshortcut`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Shortcuts.DeleteshortcutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shortcuts.DeleteshortcutRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteShortcutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteShortcutRequest` | `deleteShortcutRequestSchema` | `src/models/delete-shortcut-request.ts` |

### getshortcut

- **Signature**: `getshortcut(request: Shortcuts.GetshortcutRequest, options?: RequestOptions): ApiPromise<GetShortcutResponse, Shortcuts.GetshortcutError>`
- **Wire**: `POST /rest/api/v1/getshortcut`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetShortcutResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Shortcuts.GetshortcutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shortcuts.GetshortcutRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetShortcutRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetShortcutRequest1` | `getShortcutRequest1Schema` | `src/models/unions/get-shortcut-request1.ts` |
| `GetShortcutResponse` | `getShortcutResponseSchema` | `src/models/get-shortcut-response.ts` |

### listshortcuts

- **Signature**: `listshortcuts(request: Shortcuts.ListshortcutsRequest, options?: RequestOptions): ApiPromise<ListShortcutsPaginatedResponse, Shortcuts.ListshortcutsError>`
- **Wire**: `POST /rest/api/v1/listshortcuts`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListShortcutsPaginatedResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Shortcuts.ListshortcutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shortcuts.ListshortcutsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `ListShortcutsPaginatedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListShortcutsPaginatedRequest` | `listShortcutsPaginatedRequestSchema` | `src/models/list-shortcuts-paginated-request.ts` |
| `ListShortcutsPaginatedResponse` | `listShortcutsPaginatedResponseSchema` | `src/models/list-shortcuts-paginated-response.ts` |

### updateshortcut

- **Signature**: `updateshortcut(request: Shortcuts.UpdateshortcutRequest, options?: RequestOptions): ApiPromise<UpdateShortcutResponse, Shortcuts.UpdateshortcutError>`
- **Wire**: `POST /rest/api/v1/updateshortcut`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateShortcutResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Shortcuts.UpdateshortcutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shortcuts.UpdateshortcutRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `UpdateShortcutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateShortcutRequest` | `updateShortcutRequestSchema` | `src/models/update-shortcut-request.ts` |
| `UpdateShortcutResponse` | `updateShortcutResponseSchema` | `src/models/update-shortcut-response.ts` |

