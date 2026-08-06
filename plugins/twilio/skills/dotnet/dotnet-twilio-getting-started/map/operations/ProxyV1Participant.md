# ProxyV1Participant — operations

Accessor: `client.ProxyV1Participant` · Source: `Api/ProxyV1Participant.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateParticipant2
- **HTTP**: `POST /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants` (Default10 (proxy))
- **Notes**: Add a new Participant to the Session
- **Signature**: `CreateParticipant2(string serviceSid, string sessionSid, string identifier, string? friendlyName, string? proxyIdentifier, string? proxyIdentifierSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `proxyIdentifier` — nullable, no default → **must pass explicitly**
  - `proxyIdentifierSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identifier` ← `identifier`, `FriendlyName` ← `friendlyName`, `ProxyIdentifier` ← `proxyIdentifier`, `ProxyIdentifierSid` ← `proxyIdentifierSid`
- **Returns**: `ProxyV1ServiceSessionParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteParticipant2
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}` (Default10 (proxy))
- **Notes**: Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the Session is deleted.
- **Signature**: `DeleteParticipant2(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchParticipant3
- **HTTP**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}` (Default10 (proxy))
- **Notes**: Fetch a specific Participant.
- **Signature**: `FetchParticipant3(string serviceSid, string sessionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProxyV1ServiceSessionParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListParticipant2
- **HTTP**: `GET /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants` (Default10 (proxy))
- **Notes**: Retrieve a list of all Participants in a Session.
- **Signature**: `ListParticipant2(string serviceSid, string sessionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListParticipantResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
