<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 3 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getdocpermissions

- **Signature**: `getdocpermissions(request: Documents.GetdocpermissionsRequest, options?: RequestOptions): ApiPromise<GetDocPermissionsResponse, Documents.GetdocpermissionsError>`
- **Wire**: `POST /rest/api/v1/getdocpermissions`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDocPermissionsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Documents.GetdocpermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetdocpermissionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetDocPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDocPermissionsRequest` | `getDocPermissionsRequestSchema` | `src/models/get-doc-permissions-request.ts` |
| `GetDocPermissionsResponse` | `getDocPermissionsResponseSchema` | `src/models/get-doc-permissions-response.ts` |

### getdocuments

- **Signature**: `getdocuments(request: Documents.GetdocumentsRequest, options?: RequestOptions): ApiPromise<GetDocumentsResponse, Documents.GetdocumentsError>`
- **Wire**: `POST /rest/api/v1/getdocuments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDocumentsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Documents.GetdocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetdocumentsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetDocumentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDocumentsRequest` | `getDocumentsRequestSchema` | `src/models/get-documents-request.ts` |
| `GetDocumentsResponse` | `getDocumentsResponseSchema` | `src/models/get-documents-response.ts` |

### getdocumentsbyfacets

- **Signature**: `getdocumentsbyfacets(request: Documents.GetdocumentsbyfacetsRequest, options?: RequestOptions): ApiPromise<GetDocumentsByFacetsResponse, Documents.GetdocumentsbyfacetsError>`
- **Wire**: `POST /rest/api/v1/getdocumentsbyfacets`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDocumentsByFacetsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Documents.GetdocumentsbyfacetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetdocumentsbyfacetsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetDocumentsByFacetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDocumentsByFacetsRequest` | `getDocumentsByFacetsRequestSchema` | `src/models/get-documents-by-facets-request.ts` |
| `GetDocumentsByFacetsResponse` | `getDocumentsByFacetsResponseSchema` | `src/models/get-documents-by-facets-response.ts` |

