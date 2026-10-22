<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionsTimeline — operations

Accessor: `client.sessionsTimeline` · Source: `src/resources/sessions-timeline.ts` · 1 operation · Request and error types: namespace `SessionsTimeline`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sessionTimelineGetById

- **Signature**: `sessionTimelineGetById(request: SessionsTimeline.SessionTimelineGetByIdRequest, options?: RequestOptions): ApiPromise<SessionTimelineResponse, SessionsTimeline.SessionTimelineGetByIdError>`
- **Wire**: `GET /api/v1/sessions/timeline/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionTimelineResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionsTimeline.SessionTimelineGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionsTimeline.SessionTimelineGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionTimelineResponse` | `sessionTimelineResponseSchema` | `src/models/session-timeline-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

