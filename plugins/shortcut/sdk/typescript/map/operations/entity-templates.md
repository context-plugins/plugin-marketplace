<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntityTemplates — operations

Accessor: `client.entityTemplates` · Source: `src/resources/entity-templates.ts` · 7 operations · Request and error types: namespace `EntityTemplates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEntityTemplate

- **Signature**: `createEntityTemplate(request: EntityTemplates.CreateEntityTemplateRequest, options?: RequestOptions): ApiPromise<EntityTemplate, EntityTemplates.CreateEntityTemplateError>`
- **Wire**: `POST /api/v3/entity-templates`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityTemplate`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.CreateEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTemplates.CreateEntityTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateEntityTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEntityTemplate` | `createEntityTemplateSchema` | `src/models/create-entity-template.ts` |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |

### deleteEntityTemplate

- **Signature**: `deleteEntityTemplate(request: EntityTemplates.DeleteEntityTemplateRequest, options?: RequestOptions): ApiPromise<undefined, EntityTemplates.DeleteEntityTemplateError>`
- **Wire**: `DELETE /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.DeleteEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTemplates.DeleteEntityTemplateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityTemplatePublicId` | `path` | `entity-template-public-id` | `string` | yes |

### disableStoryTemplates

- **Signature**: `disableStoryTemplates(options?: RequestOptions): ApiPromise<undefined, EntityTemplates.DisableStoryTemplatesError>`
- **Wire**: `PUT /api/v3/entity-templates/disable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.DisableStoryTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### enableStoryTemplates

- **Signature**: `enableStoryTemplates(options?: RequestOptions): ApiPromise<undefined, EntityTemplates.EnableStoryTemplatesError>`
- **Wire**: `PUT /api/v3/entity-templates/enable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.EnableStoryTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### getEntityTemplate

- **Signature**: `getEntityTemplate(request: EntityTemplates.GetEntityTemplateRequest, options?: RequestOptions): ApiPromise<EntityTemplate, EntityTemplates.GetEntityTemplateError>`
- **Wire**: `GET /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityTemplate`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.GetEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTemplates.GetEntityTemplateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityTemplatePublicId` | `path` | `entity-template-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |

### listEntityTemplates

- **Signature**: `listEntityTemplates(options?: RequestOptions): ApiPromise<EntityTemplate[], EntityTemplates.ListEntityTemplatesError>`
- **Wire**: `GET /api/v3/entity-templates`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityTemplate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.ListEntityTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |

### updateEntityTemplate

- **Signature**: `updateEntityTemplate(request: EntityTemplates.UpdateEntityTemplateRequest, options?: RequestOptions): ApiPromise<EntityTemplate, EntityTemplates.UpdateEntityTemplateError>`
- **Wire**: `PUT /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityTemplate`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `EntityTemplates.UpdateEntityTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTemplates.UpdateEntityTemplateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityTemplatePublicId` | `path` | `entity-template-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateEntityTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateEntityTemplate` | `updateEntityTemplateSchema` | `src/models/update-entity-template.ts` |
| `EntityTemplate` | `entityTemplateSchema` | `src/models/entity-template.ts` |

