<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerDocuments — operations

Accessor: `client.partnerDocuments` · Source: `src/resources/partner-documents.ts` · 4 operations · Request and error types: namespace `PartnerDocuments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchAccountDocuments

- **Signature**: `fetchAccountDocuments(request: PartnerDocuments.FetchAccountDocumentsRequest, options?: RequestOptions): ApiPromise<AccountDocument, PartnerDocuments.FetchAccountDocumentsError>`
- **Wire**: `GET /v2/accounts/{account_id}/documents`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountDocument`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerDocuments.FetchAccountDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerDocuments.FetchAccountDocumentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountDocument` | `accountDocumentSchema` | `src/models/account-document.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchStakeholderDocuments

- **Signature**: `fetchStakeholderDocuments(request: PartnerDocuments.FetchStakeholderDocumentsRequest, options?: RequestOptions): ApiPromise<StakeholderDocument, PartnerDocuments.FetchStakeholderDocumentsError>`
- **Wire**: `GET /v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StakeholderDocument`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerDocuments.FetchStakeholderDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerDocuments.FetchStakeholderDocumentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `stakeholderId` | `path` | `stakeholder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StakeholderDocument` | `stakeholderDocumentSchema` | `src/models/stakeholder-document.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### uploadAccountDocuments

- **Signature**: `uploadAccountDocuments(request: PartnerDocuments.UploadAccountDocumentsRequest, options?: RequestOptions): ApiPromise<AccountDocument, PartnerDocuments.UploadAccountDocumentsError>`
- **Wire**: `POST /v2/accounts/{account_id}/documents`
- **Auth**: `basicAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountDocument`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerDocuments.UploadAccountDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerDocuments.UploadAccountDocumentsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `documentType` | `form` | `document_type` | `DocumentType` | no |
| `file` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentType` | `documentTypeSchema` | `src/models/document-type.ts` |
| `AccountDocument` | `accountDocumentSchema` | `src/models/account-document.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### uploadStakeholderDocuments

- **Signature**: `uploadStakeholderDocuments(request: PartnerDocuments.UploadStakeholderDocumentsRequest, options?: RequestOptions): ApiPromise<StakeholderDocument, PartnerDocuments.UploadStakeholderDocumentsError>`
- **Wire**: `POST /v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents`
- **Auth**: `basicAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StakeholderDocument`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerDocuments.UploadStakeholderDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerDocuments.UploadStakeholderDocumentsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `stakeholderId` | `path` | `stakeholder_id` | `string` | yes |
| `documentType` | `form` | `document_type` | `DocumentType1` | no |
| `file` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentType1` | `documentType1Schema` | `src/models/document-type1.ts` |
| `StakeholderDocument` | `stakeholderDocumentSchema` | `src/models/stakeholder-document.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

