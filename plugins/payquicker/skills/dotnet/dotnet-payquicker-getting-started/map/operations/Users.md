# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetUsersUserToken
- **HTTP**: `GET /users/{user-token}` (Api (api))
- **Notes**: Fetch a single user record by its `user-` token . Returns the user's personal details, status , and related navigation links to associated resources such as balances , prepaid cards , and bank-account and electronic-wallet Instruments .
- **Signature**: `GetUsersUserToken(string userToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `UserResult`
- **Error**: `SdkException<GetUsersUserTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUsers
- **HTTP**: `POST /users` (Api (api))
- **Notes**: Create a new user in your program . Once created, the user can be provisioned with prepaid cards , bank-account and electronic-wallet Instruments , and other resources. Available for API Gateway programs only. Hosted Portal programs onboard users through invitations instead. For a step-by-step guide, see Onboard Users . Check User Statuses for possible user states.
- **Signature**: `PostUsers(UserRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `UserResult`
- **Error**: `SdkException<PostUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PutUsersUserToken
- **HTTP**: `PUT /users/{user-token}` (Api (api))
- **Notes**: Update a user object (change email, address, personal details, etc.) using a user token . For details on user fields, see Users .
- **Signature**: `PutUsersUserToken(string userToken, UserRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `UserResult`
- **Error**: `SdkException<PutUsersUserTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadUserSearch
- **HTTP**: `GET /users/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previous user search request. Pagination via `page` and `pageSize` query parameters (defaults: `page=1`, `pageSize=10`). Cached search results are held for 30 minutes from creation; an expired `searchId` returns `404 Not Found`. See Pagination .
- **Signature**: `ReadUserSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `UserListResult`
- **Error**: `SdkException<ReadUserSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchUsers
- **HTTP**: `POST /users/search` (Api (api))
- **Notes**: Search for users using structured filter criteria in the request body. The response carries page 1 of the result set and a `searchId`; use `GET /users/search/{searchId}?page=N&amp;pageSize=N` to read additional pages from the cached result. See Searching for the two-step pattern, Filtering &amp; Sorting for valid operators and sort directions, and the Scope Discriminator for the addressing scheme.
- **Signature**: `SearchUsers(UserSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `UserListResult`
- **Error**: `SdkException<SearchUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
