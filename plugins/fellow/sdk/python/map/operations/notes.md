<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notes — operations

Accessor: `client.notes` · Source: `fellow/apis/notes.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.notes.apps_developer_api_api_append_note_agenda

- **Route**: `POST /api/v1/note/{note_id}/agenda/append`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_append_note_agenda(note_id: str, body: AppendNoteAgendaRequest | AppendNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note_id`, `body`
- **Params**: `note_id` — path · `body` — JSON body
- **Returns (parsed)**: `NoteAgendaResponse`
- **Returns (raw)**: `ApiResult[NoteAgendaResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AppendNoteAgendaRequest` | `fellow/models/append_note_agenda_request.py` |
| `AppendNoteAgendaRequestDict` | `fellow/models/append_note_agenda_request.py` |
| `NoteAgendaResponse` | `fellow/models/note_agenda_response.py` |

### client.notes.apps_developer_api_api_delete_note

- **Route**: `DELETE /api/v1/note/{note_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_delete_note(note_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note_id`
- **Params**: `note_id` — path
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MessageResponse` | `fellow/models/message_response.py` |

### client.notes.apps_developer_api_api_find_replace_note_agenda

- **Route**: `POST /api/v1/note/{note_id}/agenda/find-replace`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_find_replace_note_agenda(note_id: str, body: FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note_id`, `body`
- **Params**: `note_id` — path · `body` — JSON body
- **Returns (parsed)**: `NoteAgendaResponse`
- **Returns (raw)**: `ApiResult[NoteAgendaResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FindReplaceNoteAgendaRequest` | `fellow/models/find_replace_note_agenda_request.py` |
| `FindReplaceNoteAgendaRequestDict` | `fellow/models/find_replace_note_agenda_request.py` |
| `NoteAgendaResponse` | `fellow/models/note_agenda_response.py` |

### client.notes.apps_developer_api_api_get_note_by_id

- **Route**: `GET /api/v1/note/{note_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_note_by_id(note_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note_id`
- **Params**: `note_id` — path
- **Returns (parsed)**: `NoteResponse`
- **Returns (raw)**: `ApiResult[NoteResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `NoteResponse` | `fellow/models/note_response.py` |

### client.notes.apps_developer_api_api_get_notes

- **Route**: `POST /api/v1/notes`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_notes(body: GetNotesRequest | GetNotesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `NotesListResponse`
- **Returns (raw)**: `ApiResult[NotesListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GetNotesRequest` | `fellow/models/get_notes_request.py` |
| `GetNotesRequestDict` | `fellow/models/get_notes_request.py` |
| `NotesListResponse` | `fellow/models/notes_list_response.py` |

### client.notes.apps_developer_api_api_prepend_note_agenda

- **Route**: `POST /api/v1/note/{note_id}/agenda/prepend`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_prepend_note_agenda(note_id: str, body: PrependNoteAgendaRequest | PrependNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note_id`, `body`
- **Params**: `note_id` — path · `body` — JSON body
- **Returns (parsed)**: `NoteAgendaResponse`
- **Returns (raw)**: `ApiResult[NoteAgendaResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PrependNoteAgendaRequest` | `fellow/models/prepend_note_agenda_request.py` |
| `PrependNoteAgendaRequestDict` | `fellow/models/prepend_note_agenda_request.py` |
| `NoteAgendaResponse` | `fellow/models/note_agenda_response.py` |

### client.notes.apps_developer_api_api_write_note_agenda

- **Route**: `POST /api/v1/note/{note_id}/agenda`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_write_note_agenda(note_id: str, body: WriteNoteAgendaRequest | WriteNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note_id`, `body`
- **Params**: `note_id` — path · `body` — JSON body
- **Returns (parsed)**: `NoteAgendaResponse`
- **Returns (raw)**: `ApiResult[NoteAgendaResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WriteNoteAgendaRequest` | `fellow/models/write_note_agenda_request.py` |
| `WriteNoteAgendaRequestDict` | `fellow/models/write_note_agenda_request.py` |
| `NoteAgendaResponse` | `fellow/models/note_agenda_response.py` |

