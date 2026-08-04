# ConversationsV1AddressConfiguration — operations

Accessor: `client.ConversationsV1AddressConfiguration` · Source: `Api/ConversationsV1AddressConfiguration.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConfigurationAddress
- **HTTP**: `POST /v1/Configuration/Addresses` (Default (accounts))
- **Notes**: Create a new address configuration
- **Signature**: `CreateConfigurationAddress(ContentType contentType, ConfigurationAddressType type, string address, string? friendlyName, bool? autoCreationEnabled, ConfigurationAddressAutoCreationType? autoCreationType, string? autoCreationConversationServiceSid, string? autoCreationWebhookUrl, ConfigurationAddressMethod? autoCreationWebhookMethod, IReadOnlyList<string>? autoCreationWebhookFilters, string? autoCreationStudioFlowSid, int? autoCreationStudioRetryCount, string? addressCountry, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`friendlyName` … `addressCountry`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Type` ← `type`, `Address` ← `address`, `FriendlyName` ← `friendlyName`, `AutoCreation.Enabled` ← `autoCreationEnabled`, `AutoCreation.Type` ← `autoCreationType`, `AutoCreation.ConversationServiceSid` ← `autoCreationConversationServiceSid`, `AutoCreation.WebhookUrl` ← `autoCreationWebhookUrl`, `AutoCreation.WebhookMethod` ← `autoCreationWebhookMethod`, `AutoCreation.WebhookFilters` ← `autoCreationWebhookFilters`, `AutoCreation.StudioFlowSid` ← `autoCreationStudioFlowSid`, `AutoCreation.StudioRetryCount` ← `autoCreationStudioRetryCount`, `AddressCountry` ← `addressCountry`
- **Returns**: `ConfigurationAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConfigurationAddress
- **HTTP**: `DELETE /v1/Configuration/Addresses/{Sid}` (Default (accounts))
- **Notes**: Remove an existing address configuration
- **Signature**: `DeleteConfigurationAddress(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchConfigurationAddress
- **HTTP**: `GET /v1/Configuration/Addresses/{Sid}` (Default (accounts))
- **Notes**: Fetch an address configuration
- **Signature**: `FetchConfigurationAddress(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConfigurationAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConfigurationAddress
- **HTTP**: `GET /v1/Configuration/Addresses` (Default (accounts))
- **Notes**: Retrieve a list of address configurations for an account
- **Signature**: `ListConfigurationAddress(string? type, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Type` ← `type`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConfigurationAddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateConfigurationAddress
- **HTTP**: `POST /v1/Configuration/Addresses/{Sid}` (Default (accounts))
- **Notes**: Update an existing address configuration
- **Signature**: `UpdateConfigurationAddress(string sid, ContentType contentType, string? friendlyName, bool? autoCreationEnabled, ConfigurationAddressAutoCreationType? autoCreationType, string? autoCreationConversationServiceSid, string? autoCreationWebhookUrl, ConfigurationAddressMethod? autoCreationWebhookMethod, IReadOnlyList<string>? autoCreationWebhookFilters, string? autoCreationStudioFlowSid, int? autoCreationStudioRetryCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`friendlyName` … `autoCreationStudioRetryCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `AutoCreation.Enabled` ← `autoCreationEnabled`, `AutoCreation.Type` ← `autoCreationType`, `AutoCreation.ConversationServiceSid` ← `autoCreationConversationServiceSid`, `AutoCreation.WebhookUrl` ← `autoCreationWebhookUrl`, `AutoCreation.WebhookMethod` ← `autoCreationWebhookMethod`, `AutoCreation.WebhookFilters` ← `autoCreationWebhookFilters`, `AutoCreation.StudioFlowSid` ← `autoCreationStudioFlowSid`, `AutoCreation.StudioRetryCount` ← `autoCreationStudioRetryCount`
- **Returns**: `ConfigurationAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
