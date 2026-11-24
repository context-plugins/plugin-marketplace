<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentReferenceApi — operations

Accessor: `client.documentReferenceApi` · Source: `src/resources/document-reference-api.ts` · 2 operations · Request types: namespace `DocumentReferenceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### readDocumentReference

- **Signature**: `readDocumentReference(request: DocumentReferenceApi.ReadDocumentReferenceRequest, options?: RequestOptions): ApiPromise<DocumentReference, ApiError>`
- **Wire**: `GET /DocumentReference/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentReference`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DocumentReferenceApi.ReadDocumentReferenceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentReference` | `documentReferenceSchema` | `src/models/document-reference.ts` |

### searchDocumentReferences

- **Signature**: `searchDocumentReferences(request?: DocumentReferenceApi.SearchDocumentReferencesRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /DocumentReference`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DocumentReferenceApi.SearchDocumentReferencesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `patient` | `query` | — | `string` | no |
| `type` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

