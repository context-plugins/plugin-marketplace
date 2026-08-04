# Lists — operations

Accessor: `client.Lists` · Source: `Api/Lists.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddListsMember
- **HTTP**: `POST /2/lists/{id}/members` (Default (api))
- **Signature**: `AddListsMember(string id, AddListsMemberRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AddListsMemberResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateLists
- **HTTP**: `POST /2/lists` (Default (api))
- **Signature**: `CreateLists(CreateListsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLists
- **HTTP**: `DELETE /2/lists/{id}` (Default (api))
- **Notes**: Deletes a specific List owned by the authenticated user by its ID.
- **Signature**: `DeleteLists(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetListsById
- **HTTP**: `GET /2/lists/{id}` (Default (api))
- **Signature**: `GetListsById(string id, IReadOnlyList<ListField>? listFields, IReadOnlyList<Expansions5>? expansions, IReadOnlyList<UserField>? userFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `listFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `userFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `list.fields` ← `listFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetListsByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetListsFollowers
- **HTTP**: `GET /2/lists/{id}/followers` (Default (api))
- **Signature**: `GetListsFollowers(string id, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetListsFollowersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetListsMembers
- **HTTP**: `GET /2/lists/{id}/members` (Default (api))
- **Signature**: `GetListsMembers(string id, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetListsMembersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetListsPosts
- **HTTP**: `GET /2/lists/{id}/tweets` (Default (api))
- **Signature**: `GetListsPosts(string id, string? paginationToken, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetListsPostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemoveListsMemberByUserId
- **HTTP**: `DELETE /2/lists/{id}/members/{user_id}` (Default (api))
- **Notes**: Removes a User from a List by their ID.
- **Signature**: `RemoveListsMemberByUserId(string id, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RemoveListsMemberByUserIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLists
- **HTTP**: `PUT /2/lists/{id}` (Default (api))
- **Notes**: Updates the details of a specific List owned by the authenticated user by its ID.
- **Signature**: `UpdateLists(string id, UpdateListsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
