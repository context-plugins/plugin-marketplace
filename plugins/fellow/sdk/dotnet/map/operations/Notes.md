<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notes — operations

Accessor: `client.Notes` · Source: `src/Fellow/Api/Notes.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AppsDeveloperApiApiAppendNoteAgenda

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiAppendNoteAgenda(AppsDeveloperApiApiAppendNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoteId`, `Body`
- **Returns**: `NoteAgendaResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiAppendNoteAgendaRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiAppendNoteAgendaRequest.cs` |
| `AppendNoteAgendaRequest` | `src/Fellow/Models/AppendNoteAgendaRequest.cs` |
| `NoteAgendaResponse` | `src/Fellow/Models/NoteAgendaResponse.cs` |

### AppsDeveloperApiApiDeleteNote

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiDeleteNote(AppsDeveloperApiApiDeleteNoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoteId`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiDeleteNoteRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiDeleteNoteRequest.cs` |
| `MessageResponse` | `src/Fellow/Models/MessageResponse.cs` |

### AppsDeveloperApiApiFindReplaceNoteAgenda

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiFindReplaceNoteAgenda(AppsDeveloperApiApiFindReplaceNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoteId`, `Body`
- **Returns**: `NoteAgendaResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiFindReplaceNoteAgendaRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiFindReplaceNoteAgendaRequest.cs` |
| `FindReplaceNoteAgendaRequest` | `src/Fellow/Models/FindReplaceNoteAgendaRequest.cs` |
| `NoteAgendaResponse` | `src/Fellow/Models/NoteAgendaResponse.cs` |

### AppsDeveloperApiApiGetNoteById

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetNoteById(AppsDeveloperApiApiGetNoteByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoteId`
- **Returns**: `NoteResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetNoteByIdRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiGetNoteByIdRequest.cs` |
| `NoteResponse` | `src/Fellow/Models/NoteResponse.cs` |

### AppsDeveloperApiApiGetNotes

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetNotes(AppsDeveloperApiApiGetNotesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `NotesListResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetNotesRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiGetNotesRequest.cs` |
| `GetNotesRequest` | `src/Fellow/Models/GetNotesRequest.cs` |
| `NotesListResponse` | `src/Fellow/Models/NotesListResponse.cs` |

### AppsDeveloperApiApiPrependNoteAgenda

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiPrependNoteAgenda(AppsDeveloperApiApiPrependNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoteId`, `Body`
- **Returns**: `NoteAgendaResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiPrependNoteAgendaRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiPrependNoteAgendaRequest.cs` |
| `PrependNoteAgendaRequest` | `src/Fellow/Models/PrependNoteAgendaRequest.cs` |
| `NoteAgendaResponse` | `src/Fellow/Models/NoteAgendaResponse.cs` |

### AppsDeveloperApiApiWriteNoteAgenda

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiWriteNoteAgenda(AppsDeveloperApiApiWriteNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoteId`, `Body`
- **Returns**: `NoteAgendaResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiWriteNoteAgendaRequest` | `src/Fellow/Requests/Notes/AppsDeveloperApiApiWriteNoteAgendaRequest.cs` |
| `WriteNoteAgendaRequest` | `src/Fellow/Models/WriteNoteAgendaRequest.cs` |
| `NoteAgendaResponse` | `src/Fellow/Models/NoteAgendaResponse.cs` |

