<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncTemplates — operations

Accessor: `client.syncTemplates` · Source: `src/resources/sync-templates.ts` · 4 operations · Request and error types: namespace `SyncTemplates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSyncTemplate

- **Signature**: `createSyncTemplate(request: SyncTemplates.CreateSyncTemplateRequest, options?: RequestOptions): ApiPromise<SyncTemplatesResponse1, SyncTemplates.CreateSyncTemplateError>`
- **Wire**: `POST /sync-templates`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncTemplatesResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `SyncTemplates.CreateSyncTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SyncTemplates.CreateSyncTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SyncTemplateCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncTemplateCreate` | `syncTemplateCreateSchema` | `src/models/sync-template-create.ts` |
| `SyncTemplatesResponse1` | `syncTemplatesResponse1Schema` | `src/models/unions/sync-templates-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getSyncTemplate

- **Signature**: `getSyncTemplate(request: SyncTemplates.GetSyncTemplateRequest, options?: RequestOptions): ApiPromise<SyncTemplate, SyncTemplates.GetSyncTemplateError>`
- **Wire**: `GET /sync-templates/{syncTemplateId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncTemplate`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `SyncTemplates.GetSyncTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SyncTemplates.GetSyncTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncTemplateId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncTemplate` | `syncTemplateSchema` | `src/models/sync-template.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listSyncTemplates

- **Signature**: `listSyncTemplates(request?: SyncTemplates.ListSyncTemplatesRequest, options?: RequestOptions): ApiPromise<SyncTemplatesResponse, SyncTemplates.ListSyncTemplatesError>`
- **Wire**: `GET /sync-templates`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncTemplatesResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `SyncTemplates.ListSyncTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SyncTemplates.ListSyncTemplatesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchEventsApi` | no | `OrderByHightouchEventsApi.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchEventsApi` | `orderByHightouchEventsApiSchema` | `src/models/order-by-hightouch-events-api.ts` |
| `SyncTemplatesResponse` | `syncTemplatesResponseSchema` | `src/models/sync-templates-response.ts` |

### updateSyncTemplate

- **Signature**: `updateSyncTemplate(request: SyncTemplates.UpdateSyncTemplateRequest, options?: RequestOptions): ApiPromise<SyncTemplatesResponse1, SyncTemplates.UpdateSyncTemplateError>`
- **Wire**: `PATCH /sync-templates/{syncTemplateId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncTemplatesResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `SyncTemplates.UpdateSyncTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SyncTemplates.UpdateSyncTemplateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncTemplateId` | `path` | `number` | yes |
| `body` | `body` | `SyncTemplateUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncTemplateUpdate` | `syncTemplateUpdateSchema` | `src/models/sync-template-update.ts` |
| `SyncTemplatesResponse1` | `syncTemplatesResponse1Schema` | `src/models/unions/sync-templates-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

