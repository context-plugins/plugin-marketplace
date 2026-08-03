# Notes — operations

Accessor: `client.Notes` · Source: `Api/Notes.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNote
- **HTTP**: `POST /payments/v1/notes` (Default (payments))
- **Notes**: Create a new note for a payment.
- **Signature**: `CreateNote(NoteRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Note`
- **Error**: `SdkException<CreateNoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetNoteById
- **HTTP**: `GET /payments/v1/notes/{noteId}` (Default (payments))
- **Notes**: Retrieve a specific note by its ID.
- **Signature**: `GetNoteById(string noteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Note`
- **Error**: `SdkException<GetNoteByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
