<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionDebug — operations

Accessor: `client.sessionDebug` · Source: `src/resources/session-debug.ts` · 3 operations · Request and error types: namespace `SessionDebug`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSessionDataBySessionId

- **Signature**: `getSessionDataBySessionId(request: SessionDebug.GetSessionDataBySessionIdRequest, options?: RequestOptions): ApiPromise<SessionData, SessionDebug.GetSessionDataBySessionIdError>`
- **Wire**: `GET /api/v1/session_debug/session_id/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionData`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionDebug.GetSessionDataBySessionIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionDebug.GetSessionDataBySessionIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionData` | `sessionDataSchema` | `src/models/session-data.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSessionDataBySid

- **Signature**: `getSessionDataBySid(request: SessionDebug.GetSessionDataBySidRequest, options?: RequestOptions): ApiPromise<SessionData, SessionDebug.GetSessionDataBySidError>`
- **Wire**: `GET /api/v1/session_debug/sid/{channel_manager_service}/{channel_manager_sid}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionData`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionDebug.GetSessionDataBySidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionDebug.GetSessionDataBySidRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelManagerService` | `path` | `channel_manager_service` | `string` | yes |
| `channelManagerSid` | `path` | `channel_manager_sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionData` | `sessionDataSchema` | `src/models/session-data.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSessionToolCallResultById

- **Signature**: `getSessionToolCallResultById(request: SessionDebug.GetSessionToolCallResultByIdRequest, options?: RequestOptions): ApiPromise<ToolResultData, SessionDebug.GetSessionToolCallResultByIdError>`
- **Wire**: `GET /api/v1/session_debug/tool_result/{session_id}/{tool_call_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ToolResultData`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `SessionDebug.GetSessionToolCallResultByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionDebug.GetSessionToolCallResultByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `number` | yes |
| `toolCallId` | `path` | `tool_call_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ToolResultData` | `toolResultDataSchema` | `src/models/tool-result-data.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

