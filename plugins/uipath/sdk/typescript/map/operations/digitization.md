<!-- Generated file — do not edit; regenerated with the SDK. -->

# Digitization — operations

Accessor: `client.digitization` · Source: `src/resources/digitization.ts` · 1 operation · Request and error types: namespace `Digitization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### digitizeDocument

- **Server**: `defaultUiPathDocumentUnderstandingClassificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `digitizeDocument(request: Digitization.DigitizeDocumentRequest, options?: RequestOptions): ApiPromise<DigitizationResult, Digitization.DigitizeDocumentError>`
- **Wire**: `POST /projects/{projectId}/digitization/start`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DigitizationResult`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Digitization.DigitizeDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathPlatformManagementAuditLogsApi"` [400] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"errorResponseUiPathPlatformManagementAuditLogsApi2"` [401] `ErrorResponseUiPathPlatformManagementAuditLogsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Digitization.DigitizeDocumentRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | — | `string` | yes | — |
| `apiVersion` | `query` | `api-version` | `string` | no | `"1"` |
| `body` | `body` | — | `DigitizationRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DigitizationRequest` | `digitizationRequestSchema` | `src/models/digitization-request.ts` |
| `DigitizationResult` | `digitizationResultSchema` | `src/models/digitization-result.ts` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `errorResponseUiPathPlatformManagementAuditLogsApiSchema` | `src/models/error-response-ui-path-platform-management-audit-logs-api.ts` |

