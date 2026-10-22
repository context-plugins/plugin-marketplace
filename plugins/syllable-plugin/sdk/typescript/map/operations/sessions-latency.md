<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionsLatency — operations

Accessor: `client.sessionsLatency` · Source: `src/resources/sessions-latency.ts` · 1 operation · Request and error types: namespace `SessionsLatency`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sessionLatencyGetById

- **Signature**: `sessionLatencyGetById(request: SessionsLatency.SessionLatencyGetByIdRequest, options?: RequestOptions): ApiPromise<InspectLatencyResponse, SessionsLatency.SessionLatencyGetByIdError>`
- **Wire**: `GET /api/v1/sessions/latency/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InspectLatencyResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionsLatency.SessionLatencyGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionsLatency.SessionLatencyGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InspectLatencyResponse` | `inspectLatencyResponseSchema` | `src/models/inspect-latency-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

