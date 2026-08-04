# UserEvents — operations

Accessor: `client.UserEvents` · Source: `Api/UserEvents.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetUsersUserTokenEvents
- **HTTP**: `GET /users/{user-token}/events` (Api (api))
- **Notes**: Fetch a list of user events that supports filtering , sorting , and pagination through existing mechanisms. Events represent notable actions or requirements for a user, such as a KYC check being required or an agreement needing acceptance. See Event Statuses for possible event states.
- **Signature**: `GetUsersUserTokenEvents(string userToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `UserEventListResult`
- **Error**: `SdkException<GetUsersUserTokenEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersUserTokenEventsEventToken
- **HTTP**: `GET /users/{user-token}/events/{event-token}` (Api (api))
- **Notes**: Fetch a single user event by its `evnt-` token . Returns the event type, status , and associated resource details.
- **Signature**: `GetUsersUserTokenEventsEventToken(string userToken, string eventToken = "evnt-28491de2-5b22-4e30-028a-45901a10baa9", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `eventToken` = "evnt-28491de2-5b22-4e30-028a-45901a10baa9", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `UserEventResult`
- **Error**: `SdkException<GetUsersUserTokenEventsEventTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
