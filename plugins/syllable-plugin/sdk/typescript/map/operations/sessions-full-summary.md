<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionsFullSummary — operations

Accessor: `client.sessionsFullSummary` · Source: `src/resources/sessions-full-summary.ts` · 1 operation · Request and error types: namespace `SessionsFullSummary`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sessionFullSummaryGetById

- **Signature**: `sessionFullSummaryGetById(request: SessionsFullSummary.SessionFullSummaryGetByIdRequest, options?: RequestOptions): ApiPromise<SessionSummaryResponse, SessionsFullSummary.SessionFullSummaryGetByIdError>`
- **Wire**: `GET /api/v1/sessions/full-summary/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionSummaryResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionsFullSummary.SessionFullSummaryGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionsFullSummary.SessionFullSummaryGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionSummaryResponse` | `sessionSummaryResponseSchema` | `src/models/session-summary-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

