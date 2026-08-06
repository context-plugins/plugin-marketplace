# ConversationsV1Webhook — operations

Accessor: `client.ConversationsV1Webhook` · Source: `Api/ConversationsV1Webhook.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationScopedWebhook
- **HTTP**: `POST /v1/Conversations/{ConversationSid}/Webhooks` (Default7 (conversations))
- **Notes**: Create a new webhook scoped to the conversation
- **Signature**: `CreateConversationScopedWebhook(string conversationSid, ConversationScopedWebhookEnumTarget target, string? configurationUrl, ConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, int? configurationReplayAfter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`configurationUrl` … `configurationReplayAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Target` ← `target`, `Configuration.Url` ← `configurationUrl`, `Configuration.Method` ← `configurationMethod`, `Configuration.Filters` ← `configurationFilters`, `Configuration.Triggers` ← `configurationTriggers`, `Configuration.FlowSid` ← `configurationFlowSid`, `Configuration.ReplayAfter` ← `configurationReplayAfter`
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceConversationScopedWebhook
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks` (Default7 (conversations))
- **Notes**: Create a new webhook scoped to the conversation in a specific service
- **Signature**: `CreateServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, ServiceConversationScopedWebhookEnumTarget target, string? configurationUrl, ServiceConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, int? configurationReplayAfter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`configurationUrl` … `configurationReplayAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Target` ← `target`, `Configuration.Url` ← `configurationUrl`, `Configuration.Method` ← `configurationMethod`, `Configuration.Filters` ← `configurationFilters`, `Configuration.Triggers` ← `configurationTriggers`, `Configuration.FlowSid` ← `configurationFlowSid`, `Configuration.ReplayAfter` ← `configurationReplayAfter`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConversationScopedWebhook
- **HTTP**: `DELETE /v1/Conversations/{ConversationSid}/Webhooks/{Sid}` (Default7 (conversations))
- **Notes**: Remove an existing webhook scoped to the conversation
- **Signature**: `DeleteConversationScopedWebhook(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteServiceConversationScopedWebhook
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}` (Default7 (conversations))
- **Notes**: Remove an existing webhook scoped to the conversation
- **Signature**: `DeleteServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConfigurationWebhook
- **HTTP**: `GET /v1/Configuration/Webhooks` (Default7 (conversations))
- **Signature**: `FetchConfigurationWebhook(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ConfigurationConfigurationWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConversationScopedWebhook
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Webhooks/{Sid}` (Default7 (conversations))
- **Notes**: Fetch the configuration of a conversation-scoped webhook
- **Signature**: `FetchConversationScopedWebhook(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceConversationScopedWebhook
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}` (Default7 (conversations))
- **Notes**: Fetch the configuration of a conversation-scoped webhook
- **Signature**: `FetchServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceWebhookConfiguration
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Configuration/Webhooks` (Default7 (conversations))
- **Notes**: Fetch a specific service webhook configuration.
- **Signature**: `FetchServiceWebhookConfiguration(string chatServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConversationScopedWebhook
- **HTTP**: `GET /v1/Conversations/{ConversationSid}/Webhooks` (Default7 (conversations))
- **Notes**: Retrieve a list of all webhooks scoped to the conversation
- **Signature**: `ListConversationScopedWebhook(string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationScopedWebhookResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceConversationScopedWebhook
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks` (Default7 (conversations))
- **Notes**: Retrieve a list of all webhooks scoped to the conversation
- **Signature**: `ListServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationScopedWebhookResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConfigurationWebhook
- **HTTP**: `POST /v1/Configuration/Webhooks` (Default7 (conversations))
- **Signature**: `UpdateConfigurationWebhook(string? method, IReadOnlyList<string>? filters, string? preWebhookUrl, string? postWebhookUrl, ConfigurationWebhookEnumTarget? target, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`method` … `target`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Method` ← `method`, `Filters` ← `filters`, `PreWebhookUrl` ← `preWebhookUrl`, `PostWebhookUrl` ← `postWebhookUrl`, `Target` ← `target`
- **Returns**: `ConversationsV1ConfigurationConfigurationWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConversationScopedWebhook
- **HTTP**: `POST /v1/Conversations/{ConversationSid}/Webhooks/{Sid}` (Default7 (conversations))
- **Notes**: Update an existing conversation-scoped webhook
- **Signature**: `UpdateConversationScopedWebhook(string conversationSid, string sid, string? configurationUrl, ConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`configurationUrl` … `configurationFlowSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Configuration.Url` ← `configurationUrl`, `Configuration.Method` ← `configurationMethod`, `Configuration.Filters` ← `configurationFilters`, `Configuration.Triggers` ← `configurationTriggers`, `Configuration.FlowSid` ← `configurationFlowSid`
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceConversationScopedWebhook
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}` (Default7 (conversations))
- **Notes**: Update an existing conversation-scoped webhook
- **Signature**: `UpdateServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, string sid, string? configurationUrl, ServiceConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`configurationUrl` … `configurationFlowSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Configuration.Url` ← `configurationUrl`, `Configuration.Method` ← `configurationMethod`, `Configuration.Filters` ← `configurationFilters`, `Configuration.Triggers` ← `configurationTriggers`, `Configuration.FlowSid` ← `configurationFlowSid`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceWebhookConfiguration
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Configuration/Webhooks` (Default7 (conversations))
- **Notes**: Update a specific Webhook.
- **Signature**: `UpdateServiceWebhookConfiguration(string chatServiceSid, string? preWebhookUrl, string? postWebhookUrl, IReadOnlyList<string>? filters, string? method, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`preWebhookUrl` … `method`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PreWebhookUrl` ← `preWebhookUrl`, `PostWebhookUrl` ← `postWebhookUrl`, `Filters` ← `filters`, `Method` ← `method`
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
