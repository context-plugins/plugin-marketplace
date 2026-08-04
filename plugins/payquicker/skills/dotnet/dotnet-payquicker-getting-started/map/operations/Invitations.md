# Invitations — operations

Accessor: `client.Invitations` · Source: `Api/Invitations.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteInvitationsInvtToken
- **HTTP**: `DELETE /invitations/{invitation-token}` (Api (api))
- **Notes**: Cancel an open invitation that has not yet been redeemed. Cancelled invitations can no longer be used by the recipient to onboard through the Hosted Portal .
- **Signature**: `DeleteInvitationsInvtToken(string invitationToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationResult`
- **Error**: `SdkException<DeleteInvitationsInvtTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetInvitationsInvtToken
- **HTTP**: `GET /invitations/{invitation-token}` (Api (api))
- **Notes**: Fetch a single invitation by its `invt-` token . Returns the invitation status, recipient details, and related navigation links.
- **Signature**: `GetInvitationsInvtToken(string invitationToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationResult`
- **Error**: `SdkException<GetInvitationsInvtTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostInvitations
- **HTTP**: `POST /invitations` (Api (api))
- **Notes**: Create an invitation to onboard a user through the Hosted Portal . Available for Hosted Portal programs only. API Gateway programs create users directly via `POST /users` . For a step-by-step guide, see Onboard Users .
- **Signature**: `PostInvitations(InvitationRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationResult`
- **Error**: `SdkException<PostInvitationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PutInvitationsInvtToken
- **HTTP**: `PUT /invitations/{invitation-token}` (Api (api))
- **Notes**: Update an invitation that has not yet been redeemed. Allows changing recipient details or re-sending the invitation email through the Hosted Portal .
- **Signature**: `PutInvitationsInvtToken(string invitationToken, InvitationRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationResult`
- **Error**: `SdkException<PutInvitationsInvtTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadInvitationSearch
- **HTTP**: `GET /invitations/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previous invitation search request.
- **Signature**: `ReadInvitationSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `InvitationSearchResult`
- **Error**: `SdkException<ReadInvitationSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchInvitations
- **HTTP**: `POST /invitations/search` (Api (api))
- **Notes**: Search for invitations using structured filter criteria. Invitations are a Hosted Portal program concept only.
- **Signature**: `SearchInvitations(InvitationSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationSearchResult`
- **Error**: `SdkException<SearchInvitationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
