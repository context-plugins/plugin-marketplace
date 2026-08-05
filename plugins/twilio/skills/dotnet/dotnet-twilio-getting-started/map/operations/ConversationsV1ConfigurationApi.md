# ConversationsV1ConfigurationApi — operations

Accessor: `client.ConversationsV1ConfigurationApi` · Source: `Api/ConversationsV1ConfigurationApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchConfiguration
- **HTTP**: `GET /v1/Configuration` (Default2 (conversations))
- **Notes**: Fetch the global configuration of conversations on your account
- **Signature**: `FetchConfiguration(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceConfiguration
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Configuration` (Default2 (conversations))
- **Notes**: Fetch the configuration of a conversation service
- **Signature**: `FetchServiceConfiguration(string chatServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConfiguration
- **HTTP**: `POST /v1/Configuration` (Default2 (conversations))
- **Notes**: Update the global configuration of conversations on your account
- **Signature**: `UpdateConfiguration(string? defaultChatServiceSid, string? defaultMessagingServiceSid, string? defaultInactiveTimer, string? defaultClosedTimer, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`defaultChatServiceSid` … `defaultClosedTimer`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DefaultChatServiceSid` ← `defaultChatServiceSid`, `DefaultMessagingServiceSid` ← `defaultMessagingServiceSid`, `DefaultInactiveTimer` ← `defaultInactiveTimer`, `DefaultClosedTimer` ← `defaultClosedTimer`
- **Returns**: `ConversationsV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceConfiguration
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Configuration` (Default2 (conversations))
- **Notes**: Update configuration settings of a conversation service
- **Signature**: `UpdateServiceConfiguration(string chatServiceSid, string? defaultConversationCreatorRoleSid, string? defaultConversationRoleSid, string? defaultChatServiceRoleSid, bool? reachabilityEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`defaultConversationCreatorRoleSid` … `reachabilityEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DefaultConversationCreatorRoleSid` ← `defaultConversationCreatorRoleSid`, `DefaultConversationRoleSid` ← `defaultConversationRoleSid`, `DefaultChatServiceRoleSid` ← `defaultChatServiceRoleSid`, `ReachabilityEnabled` ← `reachabilityEnabled`
- **Returns**: `ConversationsV1ServiceServiceConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
