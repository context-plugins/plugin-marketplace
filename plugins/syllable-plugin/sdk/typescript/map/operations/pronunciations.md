<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pronunciations — operations

Accessor: `client.pronunciations` · Source: `src/resources/pronunciations.ts` · 5 operations · Request and error types: namespace `Pronunciations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### pronunciationsDeleteCsv

- **Signature**: `pronunciationsDeleteCsv(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /api/v1/pronunciations/csv`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### pronunciationsDownloadCsv

- **Signature**: `pronunciationsDownloadCsv(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/pronunciations/csv`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### pronunciationsGet

- **Signature**: `pronunciationsGet(options?: RequestOptions): ApiPromise<PronunciationOverridesDictionary, ApiError>`
- **Wire**: `GET /api/v1/pronunciations`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PronunciationOverridesDictionary`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `PronunciationOverridesDictionary` | `pronunciationOverridesDictionarySchema` | `src/models/pronunciation-overrides-dictionary.ts` |

### pronunciationsGetMetadata

- **Signature**: `pronunciationsGetMetadata(options?: RequestOptions): ApiPromise<DictionaryMetadata, ApiError>`
- **Wire**: `GET /api/v1/pronunciations/metadata`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DictionaryMetadata`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `DictionaryMetadata` | `dictionaryMetadataSchema` | `src/models/dictionary-metadata.ts` |

### pronunciationsUploadCsv

- **Signature**: `pronunciationsUploadCsv(request: Pronunciations.PronunciationsUploadCsvRequest, options?: RequestOptions): ApiPromise<PronunciationsCsvUploadResponse, Pronunciations.PronunciationsUploadCsvError>`
- **Wire**: `POST /api/v1/pronunciations/csv`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PronunciationsCsvUploadResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Pronunciations.PronunciationsUploadCsvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pronunciations.PronunciationsUploadCsvRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PronunciationsCsvUploadResponse` | `pronunciationsCsvUploadResponseSchema` | `src/models/pronunciations-csv-upload-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

