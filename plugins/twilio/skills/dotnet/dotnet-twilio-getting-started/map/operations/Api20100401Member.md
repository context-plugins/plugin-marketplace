# Api20100401Member — operations

Accessor: `client.Api20100401Member` · Source: `Api/Api20100401Member.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchMember
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json` (Default (api))
- **Notes**: Fetch a specific member from the queue
- **Signature**: `FetchMember(string accountSid, string queueSid, string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountQueueMember`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListMember
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json` (Default (api))
- **Notes**: Retrieve the members of the queue
- **Signature**: `ListMember(string accountSid, string queueSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMemberResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateMember
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json` (Default (api))
- **Notes**: Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
- **Signature**: `UpdateMember(string accountSid, string queueSid, string callSid, string url, Method2? method, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `method` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Url` ← `url`, `Method` ← `method`
- **Returns**: `ApiV2010AccountQueueMember`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
