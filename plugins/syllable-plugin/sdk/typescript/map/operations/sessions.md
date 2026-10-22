<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.sessions` · Source: `src/resources/sessions.ts` · 4 operations · Request and error types: namespace `Sessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateSessionRecordingUrls

- **Signature**: `generateSessionRecordingUrls(request: Sessions.GenerateSessionRecordingUrlsRequest, options?: RequestOptions): ApiPromise<SessionRecordingResponse, Sessions.GenerateSessionRecordingUrlsError>`
- **Wire**: `POST /api/v1/sessions/recording/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionRecordingResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Sessions.GenerateSessionRecordingUrlsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GenerateSessionRecordingUrlsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionRecordingResponse` | `sessionRecordingResponseSchema` | `src/models/session-recording-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### sessionGetById

- **Signature**: `sessionGetById(request: Sessions.SessionGetByIdRequest, options?: RequestOptions): ApiPromise<Session, Sessions.SessionGetByIdError>`
- **Wire**: `GET /api/v1/sessions/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Session`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Sessions.SessionGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.SessionGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Session` | `sessionSchema` | `src/models/session.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### sessionRecordingStream

- **Signature**: `sessionRecordingStream(request: Sessions.SessionRecordingStreamRequest, options?: RequestOptions): ApiPromise<BinaryContent, Sessions.SessionRecordingStreamError>`
- **Wire**: `GET /api/v1/sessions/recording/stream`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Sessions.SessionRecordingStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.SessionRecordingStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `token` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### sessionsList

- **Signature**: `sessionsList(request: Sessions.SessionsListRequest, options?: RequestOptions): ApiPromise<ListResponseSession, Sessions.SessionsListError>`
- **Wire**: `GET /api/v1/sessions/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseSession`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Sessions.SessionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Sessions400Error1"` [400] `ApiV1Sessions400Error1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.SessionsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `SessionProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy37` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields19` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `SessionProperties` | `sessionPropertiesSchema` | `src/models/session-properties.ts` |
| `OrderBy37` | `orderBy37Schema` | `src/models/unions/order-by37.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields19` | `fields19Schema` | `src/models/unions/fields19.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseSession` | `listResponseSessionSchema` | `src/models/list-response-session.ts` |
| `ApiV1Sessions400Error1` | `apiV1Sessions400Error1Schema` | `src/models/api-v1-sessions400-error1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

