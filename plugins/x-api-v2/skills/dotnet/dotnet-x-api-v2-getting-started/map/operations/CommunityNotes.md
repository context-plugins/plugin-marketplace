# CommunityNotes — operations

Accessor: `client.CommunityNotes` · Source: `Api/CommunityNotes.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCommunityNotes
- **HTTP**: `POST /2/notes` (Default (api))
- **Signature**: `CreateCommunityNotes(CreateCommunityNotesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCommunityNotesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCommunityNotes
- **HTTP**: `DELETE /2/notes/{id}` (Default (api))
- **Notes**: Deletes a community note.
- **Signature**: `DeleteCommunityNotes(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteCommunityNotesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EvaluateCommunityNotes
- **HTTP**: `POST /2/notes/evaluate` (Default (api))
- **Signature**: `EvaluateCommunityNotes(EvaluateCommunityNotesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EvaluateCommunityNotesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchCommunityNotesWritten
- **HTTP**: `GET /2/notes/search/notes_written` (Default (api))
- **Signature**: `SearchCommunityNotesWritten(bool testMode, string? paginationToken, IReadOnlyList<NoteField>? noteFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - `noteFields` — nullable, no default → **must pass explicitly**
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `test_mode` ← `testMode`, `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `note.fields` ← `noteFields`
- **Returns**: `SearchCommunityNotesWrittenResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchEligiblePosts
- **HTTP**: `GET /2/notes/search/posts_eligible_for_notes` (Default (api))
- **Signature**: `SearchEligiblePosts(bool testMode, string? paginationToken, string? postSelection, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`paginationToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `test_mode` ← `testMode`, `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post_selection` ← `postSelection`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `SearchEligiblePostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
