<!-- Generated file — do not edit; regenerated with the SDK. -->

# Validation — operations

Accessor: `client.validation` · Source: `src/resources/validation.ts` · 1 operation · Request and error types: namespace `Validation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### validateDocumentAsync

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `validateDocumentAsync(request: Validation.ValidateDocumentAsyncRequest, options?: RequestOptions): ApiPromise<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, Validation.ValidateDocumentAsyncError>`
- **Wire**: `POST /projects/{projectId}/validation/start`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Validation.ValidateDocumentAsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Validation.ValidateDocumentAsyncRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |
| `body` | `body` | — | `ValidationRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidationRequest` | `validationRequestSchema` | `src/models/validation-request.ts` |
| `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi` | `asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema` | `src/models/async-job-start-response-ui-path-document-understanding-extraction-api.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

