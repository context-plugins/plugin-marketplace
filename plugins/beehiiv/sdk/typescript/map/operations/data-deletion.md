<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataDeletion — operations

Accessor: `client.dataDeletion` · Source: `src/resources/data-deletion.ts` · 3 operations · Request and error types: namespace `DataDeletion`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create5

- **Signature**: `create5(request: DataDeletion.Create5Request, options?: RequestOptions): ApiPromise<DataDeletionRequestResponse, DataDeletion.Create5Error>`
- **Wire**: `POST /publications/{publicationId}/data_privacy/deletion_requests`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataDeletionRequestResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `DataDeletion.Create5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataDeletion.Create5Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsDataPrivacyDeletionRequestsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsDataPrivacyDeletionRequestsRequest` | `publicationsDataPrivacyDeletionRequestsRequestSchema` | `src/models/publications-data-privacy-deletion-requests-request.ts` |
| `DataDeletionRequestResponse` | `dataDeletionRequestResponseSchema` | `src/models/data-deletion-request-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index11

- **Signature**: `index11(request: DataDeletion.Index11Request, options?: RequestOptions): ApiPromise<DataDeletionRequestIndexResponse, DataDeletion.Index11Error>`
- **Wire**: `GET /publications/{publicationId}/data_privacy/deletion_requests`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataDeletionRequestIndexResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `DataDeletion.Index11Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataDeletion.Index11Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDeletionRequestIndexResponse` | `dataDeletionRequestIndexResponseSchema` | `src/models/data-deletion-request-index-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show8

- **Signature**: `show8(request: DataDeletion.Show8Request, options?: RequestOptions): ApiPromise<DataDeletionRequestResponse, DataDeletion.Show8Error>`
- **Wire**: `GET /publications/{publicationId}/data_privacy/deletion_requests/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataDeletionRequestResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `DataDeletion.Show8Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataDeletion.Show8Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDeletionRequestResponse` | `dataDeletionRequestResponseSchema` | `src/models/data-deletion-request-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

