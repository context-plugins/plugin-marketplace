<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `src/resources/templates.ts` · 4 operations · Request and error types: namespace `Templates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSignRequestFromTemplate

- **Signature**: `createSignRequestFromTemplate(request: Templates.CreateSignRequestFromTemplateRequest, options?: RequestOptions): ApiPromise<TemplatesSignRequestsResponse, Templates.CreateSignRequestFromTemplateError>`
- **Wire**: `POST /templates/{id}/sign-requests`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TemplatesSignRequestsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Templates.CreateSignRequestFromTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.CreateSignRequestFromTemplateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `TemplatesSignRequestsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplatesSignRequestsRequest` | `templatesSignRequestsRequestSchema` | `src/models/templates-sign-requests-request.ts` |
| `TemplatesSignRequestsResponse` | `templatesSignRequestsResponseSchema` | `src/models/templates-sign-requests-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### deleteTemplate

- **Signature**: `deleteTemplate(request: Templates.DeleteTemplateRequest, options?: RequestOptions): ApiPromise<MessageResponse, Templates.DeleteTemplateError>`
- **Wire**: `DELETE /templates/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Templates.DeleteTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.DeleteTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### getTemplate

- **Signature**: `getTemplate(request: Templates.GetTemplateRequest, options?: RequestOptions): ApiPromise<TemplatesResponse1, Templates.GetTemplateError>`
- **Wire**: `GET /templates/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TemplatesResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Templates.GetTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.GetTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplatesResponse1` | `templatesResponse1Schema` | `src/models/templates-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### listTemplates

- **Signature**: `listTemplates(request?: Templates.ListTemplatesRequest, options?: RequestOptions): ApiPromise<TemplatesResponse, Templates.ListTemplatesError>`
- **Wire**: `GET /templates`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TemplatesResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Templates.ListTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ListTemplatesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `page` | `query` | — | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplatesResponse` | `templatesResponseSchema` | `src/models/templates-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

