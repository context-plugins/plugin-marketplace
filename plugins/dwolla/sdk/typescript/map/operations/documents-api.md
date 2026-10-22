<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentsApi — operations

Accessor: `client.documentsApi` · Source: `src/resources/documents-api.ts` · 5 operations · Request and error types: namespace `DocumentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBeneficialOwnerDocument

- **Signature**: `createBeneficialOwnerDocument(request: DocumentsApi.CreateBeneficialOwnerDocumentRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.CreateBeneficialOwnerDocumentError>`
- **Wire**: `POST /beneficial-owners/{id}/documents`
- **Auth**: `clientCredentials`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `DocumentsApi.CreateBeneficialOwnerDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error413"` [413] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.CreateBeneficialOwnerDocumentRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `documentType` | `form` | — | `DocumentType` | yes | — |
| `file` | `form` | — | `FileInput` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `DocumentType` | `documentTypeSchema` | `src/models/document-type.ts` |

### createCustomerDocument

- **Signature**: `createCustomerDocument(request: DocumentsApi.CreateCustomerDocumentRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.CreateCustomerDocumentError>`
- **Wire**: `POST /customers/{id}/documents`
- **Auth**: `clientCredentials`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `DocumentsApi.CreateCustomerDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error413"` [413] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.CreateCustomerDocumentRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `documentType` | `form` | — | `DocumentType` | yes | — |
| `file` | `form` | — | `FileInput` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `DocumentType` | `documentTypeSchema` | `src/models/document-type.ts` |

### listBeneficialOwnerDocuments

- **Signature**: `listBeneficialOwnerDocuments(request: DocumentsApi.ListBeneficialOwnerDocumentsRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.ListBeneficialOwnerDocumentsError>`
- **Wire**: `GET /beneficial-owners/{id}/documents`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `DocumentsApi.ListBeneficialOwnerDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.ListBeneficialOwnerDocumentsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listCustomerDocuments

- **Signature**: `listCustomerDocuments(request: DocumentsApi.ListCustomerDocumentsRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.ListCustomerDocumentsError>`
- **Wire**: `GET /customers/{id}/documents`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `DocumentsApi.ListCustomerDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.ListCustomerDocumentsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### retrieveDocument

- **Signature**: `retrieveDocument(request: DocumentsApi.RetrieveDocumentRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.RetrieveDocumentError>`
- **Wire**: `GET /documents/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `DocumentsApi.RetrieveDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.RetrieveDocumentRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

