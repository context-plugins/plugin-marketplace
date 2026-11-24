<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forms — operations

Accessor: `client.forms` · Source: `src/resources/forms.ts` · 7 operations · Request and error types: namespace `Forms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### discardFormDraft

- **Signature**: `discardFormDraft(request: Forms.DiscardFormDraftRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsDiscardResponse, Forms.DiscardFormDraftError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/discard`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsDiscardResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.DiscardFormDraftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.DiscardFormDraftRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsDiscardResponse` | `apiV1ManageFormsDiscardResponseSchema` | `src/models/api-v1-manage-forms-discard-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### duplicateForm

- **Signature**: `duplicateForm(request: Forms.DuplicateFormRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsDuplicateResponse, Forms.DuplicateFormError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/duplicate`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsDuplicateResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.DuplicateFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [410] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.DuplicateFormRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsDuplicateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsDuplicateRequest` | `apiV1ManageFormsDuplicateRequestSchema` | `src/models/api-v1-manage-forms-duplicate-request.ts` |
| `ApiV1ManageFormsDuplicateResponse` | `apiV1ManageFormsDuplicateResponseSchema` | `src/models/api-v1-manage-forms-duplicate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getForm

- **Signature**: `getForm(request: Forms.GetFormRequest, options?: RequestOptions): ApiPromise<FormDetail, Forms.GetFormError>`
- **Wire**: `GET /api/v1/manage/forms/{form}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormDetail`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.GetFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.GetFormRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `include` | `query` | `Include` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `FormDetail` | `formDetailSchema` | `src/models/form-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFormVersions

- **Signature**: `listFormVersions(request: Forms.ListFormVersionsRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsVersionsResponse, Forms.ListFormVersionsError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/versions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageFormsVersionsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.ListFormVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.ListFormVersionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsVersionsResponse` | `apiV1ManageFormsVersionsResponseSchema` | `src/models/api-v1-manage-forms-versions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listForms

- **Signature**: `listForms(request?: Forms.ListFormsRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsResponse, Forms.ListFormsError>`
- **Wire**: `GET /api/v1/manage/forms`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageFormsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.ListFormsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.ListFormsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsResponse` | `apiV1ManageFormsResponseSchema` | `src/models/api-v1-manage-forms-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### renameForm

- **Signature**: `renameForm(request: Forms.RenameFormRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsResponse1, Forms.RenameFormError>`
- **Wire**: `PATCH /api/v1/manage/forms/{form}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.RenameFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.RenameFormRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsRequest` | `apiV1ManageFormsRequestSchema` | `src/models/api-v1-manage-forms-request.ts` |
| `ApiV1ManageFormsResponse1` | `apiV1ManageFormsResponse1Schema` | `src/models/api-v1-manage-forms-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### unpublishForm

- **Signature**: `unpublishForm(request: Forms.UnpublishFormRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsUnpublishResponse, Forms.UnpublishFormError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/unpublish`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsUnpublishResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Forms.UnpublishFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Forms.UnpublishFormRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsUnpublishResponse` | `apiV1ManageFormsUnpublishResponseSchema` | `src/models/api-v1-manage-forms-unpublish-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

