<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionsTranscript — operations

Accessor: `client.sessionsTranscript` · Source: `src/resources/sessions-transcript.ts` · 1 operation · Request and error types: namespace `SessionsTranscript`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sessionTranscriptGetById

- **Signature**: `sessionTranscriptGetById(request: SessionsTranscript.SessionTranscriptGetByIdRequest, options?: RequestOptions): ApiPromise<SessionTranscriptionResponse, SessionsTranscript.SessionTranscriptGetByIdError>`
- **Wire**: `GET /api/v1/sessions/transcript/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionTranscriptionResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionsTranscript.SessionTranscriptGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionsTranscript.SessionTranscriptGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionTranscriptionResponse` | `sessionTranscriptionResponseSchema` | `src/models/session-transcription-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

