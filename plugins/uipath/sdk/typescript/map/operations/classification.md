<!-- Generated file — do not edit; regenerated with the SDK. -->

# Classification — operations

Accessor: `client.classification` · Source: `src/resources/classification.ts` · 2 operations · Request and error types: namespace `Classification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### classifyDocumentAsync

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `classifyDocumentAsync(request: Classification.ClassifyDocumentAsyncRequest, options?: RequestOptions): ApiPromise<AsyncJobStartResponse, Classification.ClassifyDocumentAsyncError>`
- **Wire**: `POST /projects/{projectId}/classification/start`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsyncJobStartResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Classification.ClassifyDocumentAsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Classification.ClassifyDocumentAsyncRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |
| `body` | `body` | — | `ClassificationRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationRequest` | `classificationRequestSchema` | `src/models/classification-request.ts` |
| `AsyncJobStartResponse` | `asyncJobStartResponseSchema` | `src/models/async-job-start-response.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

### getClassificationResult

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getClassificationResult(request: Classification.GetClassificationResultRequest, options?: RequestOptions): ApiPromise<ClassificationResult, Classification.GetClassificationResultError>`
- **Wire**: `GET /projects/{projectId}/classification/{requestId}/result`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationResult`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Classification.GetClassificationResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [404] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Classification.GetClassificationResultRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `requestId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationResult` | `classificationResultSchema` | `src/models/classification-result.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

