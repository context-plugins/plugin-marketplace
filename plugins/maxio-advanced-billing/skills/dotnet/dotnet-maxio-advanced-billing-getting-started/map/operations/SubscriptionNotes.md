# SubscriptionNotes — operations

Accessor: `client.SubscriptionNotes` · Source: `Api/SubscriptionNotes.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSubscriptionNote
- **HTTP**: `POST /subscriptions/{subscription_id}/notes.json` (Production)
- **Notes**: Creates a note for a subscription. How to Use Subscription Notes Notes allow you to record information about a particular Subscription in a free text format. If you have structured data such as birth date, color, etc., consider using Metadata instead. Full documentation on how to use Notes in the Advanced Billing UI can be located here .
- **Signature**: `CreateSubscriptionNote(int subscriptionId, UpdateSubscriptionNoteRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionNoteResponse`
- **Error**: `SdkException<CreateSubscriptionNoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscriptionNote
- **HTTP**: `DELETE /subscriptions/{subscription_id}/notes/{note_id}.json` (Production)
- **Notes**: Deletes a note for a Subscription.
- **Signature**: `DeleteSubscriptionNote(int subscriptionId, int noteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSubscriptionNotes
- **HTTP**: `GET /subscriptions/{subscription_id}/notes.json` (Production)
- **Notes**: Retrieves a list of notes associated with a subscription. The response will be an array of Notes.
- **Signature**: `ListSubscriptionNotes(int subscriptionId, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<SubscriptionNoteResponse>`
- **Error**: `SdkException<ListSubscriptionNotesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadSubscriptionNote
- **HTTP**: `GET /subscriptions/{subscription_id}/notes/{note_id}.json` (Production)
- **Notes**: Retrieves a specific note attached to a subscription.
- **Signature**: `ReadSubscriptionNote(int subscriptionId, int noteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionNoteResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSubscriptionNote
- **HTTP**: `PUT /subscriptions/{subscription_id}/notes/{note_id}.json` (Production)
- **Notes**: Updates a note for a subscription.
- **Signature**: `UpdateSubscriptionNote(int subscriptionId, int noteId, UpdateSubscriptionNoteRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionNoteResponse`
- **Error**: `SdkException<UpdateSubscriptionNoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
