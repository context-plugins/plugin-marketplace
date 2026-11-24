<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notes — operations

Accessor: `client.notes` · Source: `src/resources/notes.ts` · 7 operations · Request types: namespace `Notes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fellow`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsDeveloperApiApiAppendNoteAgenda

- **Signature**: `appsDeveloperApiApiAppendNoteAgenda(request: Notes.AppsDeveloperApiApiAppendNoteAgendaRequest, options?: RequestOptions): ApiPromise<NoteAgendaResponse, ApiError>`
- **Wire**: `POST /api/v1/note/{note_id}/agenda/append`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteAgendaResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiAppendNoteAgendaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `noteId` | `path` | `note_id` | `string` | yes |
| `body` | `body` | — | `AppendNoteAgendaRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppendNoteAgendaRequest` | `appendNoteAgendaRequestSchema` | `src/models/append-note-agenda-request.ts` |
| `NoteAgendaResponse` | `noteAgendaResponseSchema` | `src/models/note-agenda-response.ts` |

### appsDeveloperApiApiDeleteNote

- **Signature**: `appsDeveloperApiApiDeleteNote(request: Notes.AppsDeveloperApiApiDeleteNoteRequest, options?: RequestOptions): ApiPromise<MessageResponse, ApiError>`
- **Wire**: `DELETE /api/v1/note/{note_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiDeleteNoteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `noteId` | `path` | `note_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### appsDeveloperApiApiFindReplaceNoteAgenda

- **Signature**: `appsDeveloperApiApiFindReplaceNoteAgenda(request: Notes.AppsDeveloperApiApiFindReplaceNoteAgendaRequest, options?: RequestOptions): ApiPromise<NoteAgendaResponse, ApiError>`
- **Wire**: `POST /api/v1/note/{note_id}/agenda/find-replace`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteAgendaResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiFindReplaceNoteAgendaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `noteId` | `path` | `note_id` | `string` | yes |
| `body` | `body` | — | `FindReplaceNoteAgendaRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindReplaceNoteAgendaRequest` | `findReplaceNoteAgendaRequestSchema` | `src/models/find-replace-note-agenda-request.ts` |
| `NoteAgendaResponse` | `noteAgendaResponseSchema` | `src/models/note-agenda-response.ts` |

### appsDeveloperApiApiGetNoteById

- **Signature**: `appsDeveloperApiApiGetNoteById(request: Notes.AppsDeveloperApiApiGetNoteByIdRequest, options?: RequestOptions): ApiPromise<NoteResponse, ApiError>`
- **Wire**: `GET /api/v1/note/{note_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NoteResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiGetNoteByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `noteId` | `path` | `note_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NoteResponse` | `noteResponseSchema` | `src/models/note-response.ts` |

### appsDeveloperApiApiGetNotes

- **Signature**: `appsDeveloperApiApiGetNotes(request: Notes.AppsDeveloperApiApiGetNotesRequest, options?: RequestOptions): ApiPromise<NotesListResponse, ApiError>`
- **Wire**: `POST /api/v1/notes`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotesListResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiGetNotesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetNotesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNotesRequest` | `getNotesRequestSchema` | `src/models/get-notes-request.ts` |
| `NotesListResponse` | `notesListResponseSchema` | `src/models/notes-list-response.ts` |

### appsDeveloperApiApiPrependNoteAgenda

- **Signature**: `appsDeveloperApiApiPrependNoteAgenda(request: Notes.AppsDeveloperApiApiPrependNoteAgendaRequest, options?: RequestOptions): ApiPromise<NoteAgendaResponse, ApiError>`
- **Wire**: `POST /api/v1/note/{note_id}/agenda/prepend`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteAgendaResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiPrependNoteAgendaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `noteId` | `path` | `note_id` | `string` | yes |
| `body` | `body` | — | `PrependNoteAgendaRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PrependNoteAgendaRequest` | `prependNoteAgendaRequestSchema` | `src/models/prepend-note-agenda-request.ts` |
| `NoteAgendaResponse` | `noteAgendaResponseSchema` | `src/models/note-agenda-response.ts` |

### appsDeveloperApiApiWriteNoteAgenda

- **Signature**: `appsDeveloperApiApiWriteNoteAgenda(request: Notes.AppsDeveloperApiApiWriteNoteAgendaRequest, options?: RequestOptions): ApiPromise<NoteAgendaResponse, ApiError>`
- **Wire**: `POST /api/v1/note/{note_id}/agenda`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteAgendaResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notes.AppsDeveloperApiApiWriteNoteAgendaRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `noteId` | `path` | `note_id` | `string` | yes |
| `body` | `body` | — | `WriteNoteAgendaRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WriteNoteAgendaRequest` | `writeNoteAgendaRequestSchema` | `src/models/write-note-agenda-request.ts` |
| `NoteAgendaResponse` | `noteAgendaResponseSchema` | `src/models/note-agenda-response.ts` |

