<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.integrations` · Source: `src/resources/integrations.ts` · 3 operations · Request and error types: namespace `Integrations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGenericIntegration

- **Signature**: `createGenericIntegration(request: Integrations.CreateGenericIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, Integrations.CreateGenericIntegrationError>`
- **Wire**: `POST /api/v3/integrations/webhook`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Integrations.CreateGenericIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.CreateGenericIntegrationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGenericIntegration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGenericIntegration` | `createGenericIntegrationSchema` | `src/models/create-generic-integration.ts` |

### deleteGenericIntegration

- **Signature**: `deleteGenericIntegration(request: Integrations.DeleteGenericIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, Integrations.DeleteGenericIntegrationError>`
- **Wire**: `DELETE /api/v3/integrations/webhook/{integration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Integrations.DeleteGenericIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.DeleteGenericIntegrationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `integrationPublicId` | `path` | `integration-public-id` | `number` | yes |

### getGenericIntegration

- **Signature**: `getGenericIntegration(request: Integrations.GetGenericIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, Integrations.GetGenericIntegrationError>`
- **Wire**: `GET /api/v3/integrations/webhook/{integration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Integrations.GetGenericIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Integrations.GetGenericIntegrationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `integrationPublicId` | `path` | `integration-public-id` | `number` | yes |

