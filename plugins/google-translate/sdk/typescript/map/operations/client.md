<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleTranslateClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 51 operations · Request and error types: namespace `GoogleTranslateClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleTranslateClient.TranslateProjectsDetectLanguageRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-translate`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### translateProjectsDetectLanguage

- **Signature**: `translateProjectsDetectLanguage(request: GoogleTranslateClient.TranslateProjectsDetectLanguageRequest, options?: RequestOptions): ApiPromise<DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsDetectLanguageError>`
- **Wire**: `POST /v3/projects/{projectsId}:detectLanguage`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DetectLanguageResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsDetectLanguageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsDetectLanguageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `body` | `body` | `DetectLanguageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DetectLanguageRequest` | `detectLanguageRequestSchema` | `src/models/detect-language-request.ts` |
| `DetectLanguageResponse` | `detectLanguageResponseSchema` | `src/models/detect-language-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsGetSupportedLanguages

- **Signature**: `translateProjectsGetSupportedLanguages(request: GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesRequest, options?: RequestOptions): ApiPromise<SupportedLanguages, GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError>`
- **Wire**: `GET /v3/projects/{projectsId}/supportedLanguages`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportedLanguages`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `displayLanguageCode` | `query` | `string` | no |
| `model` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportedLanguages` | `supportedLanguagesSchema` | `src/models/supported-languages.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest, options?: RequestOptions): ApiPromise<ListAdaptiveMtSentencesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAdaptiveMtSentencesResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |
| `adaptiveMtFilesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAdaptiveMtSentencesResponse` | `listAdaptiveMtSentencesResponseSchema` | `src/models/list-adaptive-mt-sentences-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |
| `adaptiveMtFilesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest, options?: RequestOptions): ApiPromise<AdaptiveMtFile, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdaptiveMtFile`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |
| `adaptiveMtFilesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdaptiveMtFile` | `adaptiveMtFileSchema` | `src/models/adaptive-mt-file.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest, options?: RequestOptions): ApiPromise<ListAdaptiveMtFilesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAdaptiveMtFilesResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAdaptiveMtFilesResponse` | `listAdaptiveMtFilesResponseSchema` | `src/models/list-adaptive-mt-files-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest, options?: RequestOptions): ApiPromise<ListAdaptiveMtSentencesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtSentences`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAdaptiveMtSentencesResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAdaptiveMtSentencesResponse` | `listAdaptiveMtSentencesResponseSchema` | `src/models/list-adaptive-mt-sentences-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsCreate

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsCreate(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest, options?: RequestOptions): ApiPromise<AdaptiveMtDataset, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdaptiveMtDataset`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `AdaptiveMtDataset` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdaptiveMtDataset` | `adaptiveMtDatasetSchema` | `src/models/adaptive-mt-dataset.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsDelete

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsGet

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsGet(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest, options?: RequestOptions): ApiPromise<AdaptiveMtDataset, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdaptiveMtDataset`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdaptiveMtDataset` | `adaptiveMtDatasetSchema` | `src/models/adaptive-mt-dataset.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest, options?: RequestOptions): ApiPromise<ImportAdaptiveMtFileResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImportAdaptiveMtFileResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `adaptiveMtDatasetsId` | `path` | `string` | yes |
| `body` | `body` | `ImportAdaptiveMtFileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportAdaptiveMtFileRequest` | `importAdaptiveMtFileRequestSchema` | `src/models/import-adaptive-mt-file-request.ts` |
| `ImportAdaptiveMtFileResponse` | `importAdaptiveMtFileResponseSchema` | `src/models/import-adaptive-mt-file-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtDatasetsList

- **Signature**: `translateProjectsLocationsAdaptiveMtDatasetsList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListRequest, options?: RequestOptions): ApiPromise<ListAdaptiveMtDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAdaptiveMtDatasetsResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAdaptiveMtDatasetsResponse` | `listAdaptiveMtDatasetsResponseSchema` | `src/models/list-adaptive-mt-datasets-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsAdaptiveMtTranslate

- **Signature**: `translateProjectsLocationsAdaptiveMtTranslate(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateRequest, options?: RequestOptions): ApiPromise<AdaptiveMtTranslateResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdaptiveMtTranslateResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `AdaptiveMtTranslateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdaptiveMtTranslateRequest` | `adaptiveMtTranslateRequestSchema` | `src/models/adaptive-mt-translate-request.ts` |
| `AdaptiveMtTranslateResponse` | `adaptiveMtTranslateResponseSchema` | `src/models/adaptive-mt-translate-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsBatchTranslateDocument

- **Signature**: `translateProjectsLocationsBatchTranslateDocument(request: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:batchTranslateDocument`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `BatchTranslateDocumentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchTranslateDocumentRequest` | `batchTranslateDocumentRequestSchema` | `src/models/batch-translate-document-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsBatchTranslateText

- **Signature**: `translateProjectsLocationsBatchTranslateText(request: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `BatchTranslateTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchTranslateTextRequest` | `batchTranslateTextRequestSchema` | `src/models/batch-translate-text-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsCreate

- **Signature**: `translateProjectsLocationsDatasetsCreate(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/datasets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `Dataset` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dataset` | `datasetSchema` | `src/models/dataset.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsDelete

- **Signature**: `translateProjectsLocationsDatasetsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `datasetsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsExamplesList

- **Signature**: `translateProjectsLocationsDatasetsExamplesList(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListRequest, options?: RequestOptions): ApiPromise<ListExamplesResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListExamplesResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `datasetsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListExamplesResponse` | `listExamplesResponseSchema` | `src/models/list-examples-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsExportData

- **Signature**: `translateProjectsLocationsDatasetsExportData(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `datasetsId` | `path` | `string` | yes |
| `body` | `body` | `ExportDataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExportDataRequest` | `exportDataRequestSchema` | `src/models/export-data-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsGet

- **Signature**: `translateProjectsLocationsDatasetsGet(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetRequest, options?: RequestOptions): ApiPromise<Dataset, GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Dataset`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `datasetsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dataset` | `datasetSchema` | `src/models/dataset.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsImportData

- **Signature**: `translateProjectsLocationsDatasetsImportData(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `datasetsId` | `path` | `string` | yes |
| `body` | `body` | `ImportDataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImportDataRequest` | `importDataRequestSchema` | `src/models/import-data-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDatasetsList

- **Signature**: `translateProjectsLocationsDatasetsList(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsListRequest, options?: RequestOptions): ApiPromise<ListDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/datasets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDatasetsResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDatasetsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDatasetsResponse` | `listDatasetsResponseSchema` | `src/models/list-datasets-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsDetectLanguage

- **Signature**: `translateProjectsLocationsDetectLanguage(request: GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageRequest, options?: RequestOptions): ApiPromise<DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:detectLanguage`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DetectLanguageResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `DetectLanguageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DetectLanguageRequest` | `detectLanguageRequestSchema` | `src/models/detect-language-request.ts` |
| `DetectLanguageResponse` | `detectLanguageResponseSchema` | `src/models/detect-language-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGet

- **Signature**: `translateProjectsLocationsGet(request: GoogleTranslateClient.TranslateProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<Location, GoogleTranslateClient.TranslateProjectsLocationsGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGetSupportedLanguages

- **Signature**: `translateProjectsLocationsGetSupportedLanguages(request: GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesRequest, options?: RequestOptions): ApiPromise<SupportedLanguages, GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportedLanguages`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `displayLanguageCode` | `query` | `string` | no |
| `model` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportedLanguages` | `supportedLanguagesSchema` | `src/models/supported-languages.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesCreate

- **Signature**: `translateProjectsLocationsGlossariesCreate(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/glossaries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `Glossary` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Glossary` | `glossarySchema` | `src/models/glossary.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesDelete

- **Signature**: `translateProjectsLocationsGlossariesDelete(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesGet

- **Signature**: `translateProjectsLocationsGlossariesGet(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetRequest, options?: RequestOptions): ApiPromise<Glossary, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Glossary`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Glossary` | `glossarySchema` | `src/models/glossary.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesGlossaryEntriesCreate

- **Signature**: `translateProjectsLocationsGlossariesGlossaryEntriesCreate(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest, options?: RequestOptions): ApiPromise<GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GlossaryEntry`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |
| `body` | `body` | `GlossaryEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GlossaryEntry` | `glossaryEntrySchema` | `src/models/glossary-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesGlossaryEntriesDelete

- **Signature**: `translateProjectsLocationsGlossariesGlossaryEntriesDelete(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |
| `glossaryEntriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesGlossaryEntriesGet

- **Signature**: `translateProjectsLocationsGlossariesGlossaryEntriesGet(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest, options?: RequestOptions): ApiPromise<GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GlossaryEntry`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |
| `glossaryEntriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GlossaryEntry` | `glossaryEntrySchema` | `src/models/glossary-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesGlossaryEntriesList

- **Signature**: `translateProjectsLocationsGlossariesGlossaryEntriesList(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest, options?: RequestOptions): ApiPromise<ListGlossaryEntriesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGlossaryEntriesResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListGlossaryEntriesResponse` | `listGlossaryEntriesResponseSchema` | `src/models/list-glossary-entries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesGlossaryEntriesPatch

- **Signature**: `translateProjectsLocationsGlossariesGlossaryEntriesPatch(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest, options?: RequestOptions): ApiPromise<GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError>`
- **Wire**: `PATCH /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GlossaryEntry`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |
| `glossaryEntriesId` | `path` | `string` | yes |
| `body` | `body` | `GlossaryEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GlossaryEntry` | `glossaryEntrySchema` | `src/models/glossary-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesList

- **Signature**: `translateProjectsLocationsGlossariesList(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesListRequest, options?: RequestOptions): ApiPromise<ListGlossariesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGlossariesResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListGlossariesResponse` | `listGlossariesResponseSchema` | `src/models/list-glossaries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsGlossariesPatch

- **Signature**: `translateProjectsLocationsGlossariesPatch(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError>`
- **Wire**: `PATCH /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `glossariesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Glossary` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Glossary` | `glossarySchema` | `src/models/glossary.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsList

- **Signature**: `translateProjectsLocationsList(request: GoogleTranslateClient.TranslateProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ListLocationsResponse, GoogleTranslateClient.TranslateProjectsLocationsListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `extraLocationTypes` | `query` | `string[]` | no |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLocationsResponse` | `listLocationsResponseSchema` | `src/models/list-locations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsModelsCreate

- **Signature**: `translateProjectsLocationsModelsCreate(request: GoogleTranslateClient.TranslateProjectsLocationsModelsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/models`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsModelsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `Model` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Model` | `modelSchema` | `src/models/model.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsModelsDelete

- **Signature**: `translateProjectsLocationsModelsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `modelsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsModelsGet

- **Signature**: `translateProjectsLocationsModelsGet(request: GoogleTranslateClient.TranslateProjectsLocationsModelsGetRequest, options?: RequestOptions): ApiPromise<Model, GoogleTranslateClient.TranslateProjectsLocationsModelsGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Model`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsModelsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsModelsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `modelsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Model` | `modelSchema` | `src/models/model.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsModelsList

- **Signature**: `translateProjectsLocationsModelsList(request: GoogleTranslateClient.TranslateProjectsLocationsModelsListRequest, options?: RequestOptions): ApiPromise<ListModelsResponse, GoogleTranslateClient.TranslateProjectsLocationsModelsListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/models`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListModelsResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsModelsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsModelsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListModelsResponse` | `listModelsResponseSchema` | `src/models/list-models-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsOperationsCancel

- **Signature**: `translateProjectsLocationsOperationsCancel(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsOperationsDelete

- **Signature**: `translateProjectsLocationsOperationsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError>`
- **Wire**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsOperationsGet

- **Signature**: `translateProjectsLocationsOperationsGet(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsOperationsList

- **Signature**: `translateProjectsLocationsOperationsList(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise<ListOperationsResponse, GoogleTranslateClient.TranslateProjectsLocationsOperationsListError>`
- **Wire**: `GET /v3/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOperationsResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsOperationsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOperationsResponse` | `listOperationsResponseSchema` | `src/models/list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsOperationsWait

- **Signature**: `translateProjectsLocationsOperationsWait(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitRequest, options?: RequestOptions): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `WaitOperationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WaitOperationRequest` | `waitOperationRequestSchema` | `src/models/wait-operation-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsRefineText

- **Signature**: `translateProjectsLocationsRefineText(request: GoogleTranslateClient.TranslateProjectsLocationsRefineTextRequest, options?: RequestOptions): ApiPromise<RefineTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRefineTextError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:refineText`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RefineTextResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsRefineTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsRefineTextRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `RefineTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefineTextRequest` | `refineTextRequestSchema` | `src/models/refine-text-request.ts` |
| `RefineTextResponse` | `refineTextResponseSchema` | `src/models/refine-text-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsRomanizeText

- **Signature**: `translateProjectsLocationsRomanizeText(request: GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextRequest, options?: RequestOptions): ApiPromise<RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:romanizeText`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RomanizeTextResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `RomanizeTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RomanizeTextRequest` | `romanizeTextRequestSchema` | `src/models/romanize-text-request.ts` |
| `RomanizeTextResponse` | `romanizeTextResponseSchema` | `src/models/romanize-text-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsTranslateDocument

- **Signature**: `translateProjectsLocationsTranslateDocument(request: GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentRequest, options?: RequestOptions): ApiPromise<TranslateDocumentResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:translateDocument`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TranslateDocumentResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `TranslateDocumentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TranslateDocumentRequest` | `translateDocumentRequestSchema` | `src/models/translate-document-request.ts` |
| `TranslateDocumentResponse` | `translateDocumentResponseSchema` | `src/models/translate-document-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsLocationsTranslateText

- **Signature**: `translateProjectsLocationsTranslateText(request: GoogleTranslateClient.TranslateProjectsLocationsTranslateTextRequest, options?: RequestOptions): ApiPromise<TranslateTextResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError>`
- **Wire**: `POST /v3/projects/{projectsId}/locations/{locationsId}:translateText`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TranslateTextResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsLocationsTranslateTextRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `TranslateTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TranslateTextRequest` | `translateTextRequestSchema` | `src/models/translate-text-request.ts` |
| `TranslateTextResponse` | `translateTextResponseSchema` | `src/models/translate-text-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsRomanizeText

- **Signature**: `translateProjectsRomanizeText(request: GoogleTranslateClient.TranslateProjectsRomanizeTextRequest, options?: RequestOptions): ApiPromise<RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsRomanizeTextError>`
- **Wire**: `POST /v3/projects/{projectsId}:romanizeText`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RomanizeTextResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsRomanizeTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsRomanizeTextRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `body` | `body` | `RomanizeTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RomanizeTextRequest` | `romanizeTextRequestSchema` | `src/models/romanize-text-request.ts` |
| `RomanizeTextResponse` | `romanizeTextResponseSchema` | `src/models/romanize-text-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### translateProjectsTranslateText

- **Signature**: `translateProjectsTranslateText(request: GoogleTranslateClient.TranslateProjectsTranslateTextRequest, options?: RequestOptions): ApiPromise<TranslateTextResponse, GoogleTranslateClient.TranslateProjectsTranslateTextError>`
- **Wire**: `POST /v3/projects/{projectsId}:translateText`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TranslateTextResponse`
- **Error**: `GoogleTranslateError` with `kind: "api"`, an instance of `GoogleTranslateClient.TranslateProjectsTranslateTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleTranslateClient.TranslateProjectsTranslateTextRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `body` | `body` | `TranslateTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TranslateTextRequest` | `translateTextRequestSchema` | `src/models/translate-text-request.ts` |
| `TranslateTextResponse` | `translateTextResponseSchema` | `src/models/translate-text-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

