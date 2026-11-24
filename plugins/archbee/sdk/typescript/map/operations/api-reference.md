<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiReference — operations

Accessor: `client.apiReference` · Source: `src/resources/api-reference.ts` · 2 operations · Request and error types: namespace `ApiReference`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### infoOpenApiDocument

- **Signature**: `infoOpenApiDocument(options?: RequestOptions): ApiPromise<InfoApiReferenceResponse, ApiReference.InfoOpenApiDocumentError>`
- **Wire**: `GET /info-api-reference`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InfoApiReferenceResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `ApiReference.InfoOpenApiDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"infoApiReference400Error1"` [400] `InfoApiReference400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `InfoApiReferenceResponse` | `infoApiReferenceResponseSchema` | `src/models/info-api-reference-response.ts` |
| `InfoApiReference400Error1` | `infoApiReference400Error1Schema` | `src/models/info-api-reference400-error1.ts` |

### syncOpenApiDocument

- **Signature**: `syncOpenApiDocument(request: ApiReference.SyncOpenApiDocumentRequest, options?: RequestOptions): ApiPromise<SyncApiReferenceResponse, ApiReference.SyncOpenApiDocumentError>`
- **Wire**: `POST /sync-api-reference`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncApiReferenceResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `ApiReference.SyncOpenApiDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"syncApiReference400Error1"` [400] `SyncApiReference400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiReference.SyncOpenApiDocumentRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes | — |
| `docTreeId` | `form` | `string` | no | `"21-character__string0"` |
| `type` | `form` | `Type` | no | `Type.Openapi` |
| `openApiTryIt` | `form` | `OpenApiTryIt` | no | — |
| `openApiUseOwnBackend` | `form` | `OpenApiUseOwnBackend` | no | — |
| `showDownloadOpenApiFile` | `form` | `ShowDownloadOpenApiFile` | no | — |
| `shouldCreateSchemaCategory` | `form` | `ShouldCreateSchemaCategory` | no | — |
| `shouldCreateIntro` | `form` | `ShouldCreateIntro` | no | — |
| `openApiLanguageExamples` | `form` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `OpenApiTryIt` | `openApiTryItSchema` | `src/models/open-api-try-it.ts` |
| `OpenApiUseOwnBackend` | `openApiUseOwnBackendSchema` | `src/models/open-api-use-own-backend.ts` |
| `ShowDownloadOpenApiFile` | `showDownloadOpenApiFileSchema` | `src/models/show-download-open-api-file.ts` |
| `ShouldCreateSchemaCategory` | `shouldCreateSchemaCategorySchema` | `src/models/should-create-schema-category.ts` |
| `ShouldCreateIntro` | `shouldCreateIntroSchema` | `src/models/should-create-intro.ts` |
| `SyncApiReferenceResponse` | `syncApiReferenceResponseSchema` | `src/models/sync-api-reference-response.ts` |
| `SyncApiReference400Error1` | `syncApiReference400Error1Schema` | `src/models/sync-api-reference400-error1.ts` |

