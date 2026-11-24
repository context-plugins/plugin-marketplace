<!-- Generated file — do not edit; regenerated with the SDK. -->

# PublicForms — operations

Accessor: `client.publicForms` · Source: `src/resources/public-forms.ts` · 6 operations · Request and error types: namespace `PublicForms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPublicForm

- **Signature**: `createPublicForm(request: PublicForms.CreatePublicFormRequest, options?: RequestOptions): ApiPromise<PublicFormsResponse1, PublicForms.CreatePublicFormError>`
- **Wire**: `POST /public-forms`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicFormsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `PublicForms.CreatePublicFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PublicForms.CreatePublicFormRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicFormsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicFormsRequest` | `publicFormsRequestSchema` | `src/models/public-forms-request.ts` |
| `PublicFormsResponse1` | `publicFormsResponse1Schema` | `src/models/public-forms-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### deletePublicForm

- **Signature**: `deletePublicForm(request: PublicForms.DeletePublicFormRequest, options?: RequestOptions): ApiPromise<MessageResponse, PublicForms.DeletePublicFormError>`
- **Wire**: `DELETE /public-forms/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `PublicForms.DeletePublicFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PublicForms.DeletePublicFormRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### getPublicForm

- **Signature**: `getPublicForm(request: PublicForms.GetPublicFormRequest, options?: RequestOptions): ApiPromise<PublicFormsResponse1, PublicForms.GetPublicFormError>`
- **Wire**: `GET /public-forms/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicFormsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `PublicForms.GetPublicFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PublicForms.GetPublicFormRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicFormsResponse1` | `publicFormsResponse1Schema` | `src/models/public-forms-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### listPublicForms

- **Signature**: `listPublicForms(request?: PublicForms.ListPublicFormsRequest, options?: RequestOptions): ApiPromise<PublicFormsResponse, PublicForms.ListPublicFormsError>`
- **Wire**: `GET /public-forms`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicFormsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `PublicForms.ListPublicFormsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PublicForms.ListPublicFormsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicFormsResponse` | `publicFormsResponseSchema` | `src/models/public-forms-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### rotatePublicFormToken

- **Signature**: `rotatePublicFormToken(request: PublicForms.RotatePublicFormTokenRequest, options?: RequestOptions): ApiPromise<PublicFormsRotateTokenResponse, PublicForms.RotatePublicFormTokenError>`
- **Wire**: `POST /public-forms/{id}/rotate-token`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicFormsRotateTokenResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `PublicForms.RotatePublicFormTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PublicForms.RotatePublicFormTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicFormsRotateTokenResponse` | `publicFormsRotateTokenResponseSchema` | `src/models/public-forms-rotate-token-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### updatePublicForm

- **Signature**: `updatePublicForm(request: PublicForms.UpdatePublicFormRequest, options?: RequestOptions): ApiPromise<PublicFormsResponse1, PublicForms.UpdatePublicFormError>`
- **Wire**: `PUT /public-forms/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicFormsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `PublicForms.UpdatePublicFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PublicForms.UpdatePublicFormRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PublicFormsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicFormsRequest1` | `publicFormsRequest1Schema` | `src/models/public-forms-request1.ts` |
| `PublicFormsResponse1` | `publicFormsResponse1Schema` | `src/models/public-forms-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

