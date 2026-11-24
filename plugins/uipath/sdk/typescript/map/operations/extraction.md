<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extraction — operations

Accessor: `client.extraction` · Source: `src/resources/extraction.ts` · 2 operations · Request and error types: namespace `Extraction`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### extractDocumentAsync

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `extractDocumentAsync(request: Extraction.ExtractDocumentAsyncRequest, options?: RequestOptions): ApiPromise<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, Extraction.ExtractDocumentAsyncError>`
- **Wire**: `POST /projects/{projectId}/extraction/start`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Extraction.ExtractDocumentAsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extraction.ExtractDocumentAsyncRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |
| `body` | `body` | — | `ExtractionRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtractionRequest` | `extractionRequestSchema` | `src/models/extraction-request.ts` |
| `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi` | `asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema` | `src/models/async-job-start-response-ui-path-document-understanding-extraction-api.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### getExtractionResult

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getExtractionResult(request: Extraction.GetExtractionResultRequest, options?: RequestOptions): ApiPromise<ExtractionResult, Extraction.GetExtractionResultError>`
- **Wire**: `GET /projects/{projectId}/extraction/{requestId}/result`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExtractionResult`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Extraction.GetExtractionResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extraction.GetExtractionResultRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `requestId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtractionResult` | `extractionResultSchema` | `src/models/extraction-result.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

