<!-- Generated file — do not edit; regenerated with the SDK. -->

# KycDocuments — operations

Accessor: `client.kycDocuments` · Source: `src/resources/kyc-documents.ts` · 7 operations · Request and error types: namespace `KycDocuments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### documentsCountries

- **Signature**: `documentsCountries(request?: KycDocuments.DocumentsCountriesRequest, options?: RequestOptions): ApiPromise<ApiV2DocumentsCountriesResponse, KycDocuments.DocumentsCountriesError>`
- **Wire**: `GET /api/v2/documents/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2DocumentsCountriesResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2DocumentsCountries401Error1"` [401] `ApiV2DocumentsCountries401Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsCountriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `nameContains` | `query` | `name_contains` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2DocumentsCountriesResponse` | `apiV2DocumentsCountriesResponseSchema` | `src/models/api-v2-documents-countries-response.ts` |
| `ApiV2DocumentsCountries401Error1` | `apiV2DocumentsCountries401Error1Schema` | `src/models/api-v2-documents-countries401-error1.ts` |

### documentsCreate

- **Signature**: `documentsCreate(request: KycDocuments.DocumentsCreateRequest, options?: RequestOptions): ApiPromise<ApiV2DocumentsResponse1, KycDocuments.DocumentsCreateError>`
- **Wire**: `POST /api/v2/documents`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `document[files][frontside]` and `document[files][backside]` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2DocumentsResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Documents401Error1"` [401] `ApiV2Documents401Error1` · `"error"` [422] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsCreateRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `documentName` | `form` | `document[name]` | `string` | yes |
| `documentDocType` | `form` | `document[doc_type]` | `DocumentDocType` | yes |
| `documentFilesFrontside` | `form` | `document[files][frontside]` | `FileInput` | yes |
| `documentIdentityId` | `form` | `document[identity_id]` | `number` | yes |
| `documentCountry` | `form` | `document[country]` | `string` | yes |
| `documentFilesBackside` | `form` | `document[files][backside]` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentDocType` | `documentDocTypeSchema` | `src/models/document-doc-type.ts` |
| `ApiV2DocumentsResponse1` | `apiV2DocumentsResponse1Schema` | `src/models/api-v2-documents-response1.ts` |
| `ApiV2Documents401Error1` | `apiV2Documents401Error1Schema` | `src/models/api-v2-documents401-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### documentsDestroy

- **Signature**: `documentsDestroy(request: KycDocuments.DocumentsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, KycDocuments.DocumentsDestroyError>`
- **Wire**: `DELETE /api/v2/documents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Documents401Error1"` [401] `ApiV2Documents401Error1` · `"apiV2Documents404Error1"` [404] `ApiV2Documents404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2Documents401Error1` | `apiV2Documents401Error1Schema` | `src/models/api-v2-documents401-error1.ts` |
| `ApiV2Documents404Error1` | `apiV2Documents404Error1Schema` | `src/models/api-v2-documents404-error1.ts` |

### documentsFilesDownloadFile

- **Signature**: `documentsFilesDownloadFile(request: KycDocuments.DocumentsFilesDownloadFileRequest, options?: RequestOptions): ApiPromise<BinaryContent, KycDocuments.DocumentsFilesDownloadFileError>`
- **Wire**: `GET /api/v2/documents/{id}/files/{role}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsFilesDownloadFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2DocumentsFiles401Error1"` [401] `ApiV2DocumentsFiles401Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsFilesDownloadFileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `role` | `path` | `Role` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Role` | `roleSchema` | `src/models/role.ts` |
| `ApiV2DocumentsFiles401Error1` | `apiV2DocumentsFiles401Error1Schema` | `src/models/api-v2-documents-files401-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### documentsIndex

- **Signature**: `documentsIndex(request?: KycDocuments.DocumentsIndexRequest, options?: RequestOptions): ApiPromise<ApiV2DocumentsResponse, KycDocuments.DocumentsIndexError>`
- **Wire**: `GET /api/v2/documents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2DocumentsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Documents401Error1"` [401] `ApiV2Documents401Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsIndexRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ids` | `query` | — | `string` | no | — |
| `identityId` | `query` | `identity_id` | `number` | no | — |
| `approvementStatus` | `query` | `approvement_status` | `ApprovementStatus` | no | — |
| `uploadDateFrom` | `query` | `upload_date_from` | `string` (date) | no | — |
| `uploadDateTo` | `query` | `upload_date_to` | `string` (date) | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `order` | `query` | — | `Order` | no | `Order.Desc` |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApprovementStatus` | `approvementStatusSchema` | `src/models/approvement-status.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `ApiV2DocumentsResponse` | `apiV2DocumentsResponseSchema` | `src/models/api-v2-documents-response.ts` |
| `ApiV2Documents401Error1` | `apiV2Documents401Error1Schema` | `src/models/api-v2-documents401-error1.ts` |

### documentsShow

- **Signature**: `documentsShow(request: KycDocuments.DocumentsShowRequest, options?: RequestOptions): ApiPromise<ApiV2DocumentsResponse2, KycDocuments.DocumentsShowError>`
- **Wire**: `GET /api/v2/documents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2DocumentsResponse2`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Documents401Error1"` [401] `ApiV2Documents401Error1` · `"apiV2Documents404Error1"` [404] `ApiV2Documents404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2DocumentsResponse2` | `apiV2DocumentsResponse2Schema` | `src/models/api-v2-documents-response2.ts` |
| `ApiV2Documents401Error1` | `apiV2Documents401Error1Schema` | `src/models/api-v2-documents401-error1.ts` |
| `ApiV2Documents404Error1` | `apiV2Documents404Error1Schema` | `src/models/api-v2-documents404-error1.ts` |

### documentsUpdate

- **Signature**: `documentsUpdate(request: KycDocuments.DocumentsUpdateRequest, options?: RequestOptions): ApiPromise<ApiV2DocumentsResponse3, KycDocuments.DocumentsUpdateError>`
- **Wire**: `PUT /api/v2/documents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2DocumentsResponse3`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `KycDocuments.DocumentsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Documents401Error1"` [401] `ApiV2Documents401Error1` · `"apiV2Documents404Error1"` [404] `ApiV2Documents404Error1` · `"error"` [422] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KycDocuments.DocumentsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `ApiV2DocumentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2DocumentsRequest` | `apiV2DocumentsRequestSchema` | `src/models/api-v2-documents-request.ts` |
| `ApiV2DocumentsResponse3` | `apiV2DocumentsResponse3Schema` | `src/models/api-v2-documents-response3.ts` |
| `ApiV2Documents401Error1` | `apiV2Documents401Error1Schema` | `src/models/api-v2-documents401-error1.ts` |
| `ApiV2Documents404Error1` | `apiV2Documents404Error1Schema` | `src/models/api-v2-documents404-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

