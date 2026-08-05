# AdminConversationsEkm — operations

Accessor: `client.AdminConversationsEkm` · Source: `Api/AdminConversationsEkm.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminConversationsEkmListOriginalConnectedChannelInfo
- **HTTP**: `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo` (Default (slack))
- **Notes**: List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.
- **Signature**: `AdminConversationsEkmListOriginalConnectedChannelInfo(string token, string? channelIds, string? teamIds, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channelIds` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel_ids` ← `channelIds`, `team_ids` ← `teamIds`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsEkmListOriginalConnectedChannelInfo1
- **HTTP**: `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo` (Default (slack))
- **Notes**: List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.
- **Signature**: `AdminConversationsEkmListOriginalConnectedChannelInfo1(string token, string? channelIds, string? teamIds, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channelIds` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel_ids` ← `channelIds`, `team_ids` ← `teamIds`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
